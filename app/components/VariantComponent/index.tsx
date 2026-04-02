import React, { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import VariantButton from "../ui/VariantButton";
import { shuffle } from "@/app/utils/wordPicker";

type Word = {
  id: number;
  word: string;
  translation: string;
  partOfSpeech: string;
  category: string;
};

type VariantComponentProps = {
  word: Word | null;
  distractors?: string[];
  className?: string;
  correctAnswers: Word[];
  setCorrectAnswers: Dispatch<SetStateAction<Word[]>>;
  wrongAnswers: Word[];
  setWrongAnswers: Dispatch<SetStateAction<Word[]>>;
  setIds: Dispatch<SetStateAction<number[]>>;
  isTrainingStarted: boolean;
  setIsTrainingStarted: Dispatch<SetStateAction<boolean>>;
  setIsButtonVisible: Dispatch<SetStateAction<boolean>>;
  isButtonVisible: boolean;
  isResultStatistic: boolean;
  setResultStatistic: Dispatch<SetStateAction<boolean>>
};

export const VariantComponent = ({
  word,
  distractors = [],
  correctAnswers,
  setCorrectAnswers,
  wrongAnswers,
  setWrongAnswers,
  setIds,
  isTrainingStarted,
  setIsTrainingStarted,
  setIsButtonVisible,
  isResultStatistic,
  setResultStatistic,
}: VariantComponentProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const label = event.currentTarget.dataset.label || "Unknown label";
    const translation = word ? word.translation.trim() : "Нет перевода";

    if (word && selectedAnswer === null) {
      setSelectedAnswer(label);
      const correct = label === translation;
      setIsCorrect(correct);

      if (correct) {
        setCorrectAnswers((prev) =>
          prev.some((w) => w.id === word.id) ? prev : [...prev, word]
        );
      } else {
        setWrongAnswers((prev) =>
          prev.some((w) => w.id === word.id) ? prev : [...prev, word]
        );
      }

      // Auto-advance after showing feedback
      setTimeout(() => {
        setSelectedAnswer(null);
        setIsCorrect(null);
        setIds((prev) => {
          const newIds = prev.slice(1);
          if(newIds.length === 0 && isTrainingStarted) {
            setIsTrainingStarted(false);
            setResultStatistic(true);
            setIsButtonVisible(true);
          }
          return newIds;
        });
      }, 800);
    }
  };

  const translation = word ? word.translation : "Нет перевода";
  const variants =
    distractors.length > 0
      ? shuffle([translation, ...distractors.slice(0, 3)])
      : shuffle([translation, "variant 2", "variant 3", "variant 4"]);

  return (
    <div className="w-full">
      <p className="text-center text-muted-foreground mb-4">Выберите правильный перевод</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {variants.map((label, index) => {
          const isSelected = selectedAnswer === label;
          const isCorrectAnswer = label === translation;
          
          let state: "default" | "correct" | "incorrect" = "default";
          if (selectedAnswer !== null) {
            if (isCorrectAnswer) {
              state = "correct";
            } else if (isSelected && !isCorrectAnswer) {
              state = "incorrect";
            }
          }
          
          return (
            <VariantButton
              key={index}
              onClick={handleClick}
              label={label}
              translation={label === translation ? translation : label}
              state={state}
              disabled={selectedAnswer !== null}
              animationDelay={index * 50}
            />
          );
        })}
      </div>
    </div>
  );
};
