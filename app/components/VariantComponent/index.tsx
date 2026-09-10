import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import VariantButton from "../ui/VariantButton";
import { shuffle } from "@/app/utils/wordPicker";

type Word = {
  id: number;
  word: string;
  translation: string;
  partOfSpeech: string;
  category: string;
};

// type VariantComponentProps = {
//   word: Word | null;
//   distractors?: string[];
//   onAnswer: (label: string) => void;
// }

type VariantComponentProps = {
  word: Word | null;
  distractors?: string[];
  className?: string;
  // setCorrectAnswers: Dispatch<SetStateAction<Word[]>>;
  // setWrongAnswers: Dispatch<SetStateAction<Word[]>>;
  // setIds: Dispatch<SetStateAction<number[]>>;
  // isTrainingStarted: boolean;
  // setIsTrainingStarted: Dispatch<SetStateAction<boolean>>;
  // setIsButtonVisible: Dispatch<SetStateAction<boolean>>;
  // setResultStatistic: Dispatch<SetStateAction<boolean>>;
  onAnswer: (label: string) => void;
};

export const VariantComponent = ({
  word,
  distractors = [],
  onAnswer,
}: VariantComponentProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const checkAnswers = (label: string, translation: string): boolean =>
    label === translation;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const label = event.currentTarget.dataset.label || "Unknown label";

    if (word && selectedAnswer === null) {
      setSelectedAnswer(label);
      return onAnswer(label);
    }
  };
  const translation = word ? word.translation : "Нет перевода";
  const variants = useMemo(() => {
    return distractors.length > 0
      ? shuffle([translation, ...distractors.slice(0, 3)])
      : shuffle([translation, "variant 2", "variant 3", "variant 4"]);
  }, [word, distractors]);

  return (
    <div className="w-full">
      <p className="text-center text-muted-foreground mb-6 text-lg">
        Выберите правильный перевод
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {variants.map((label, index) => {
          const isSelected = selectedAnswer === label;
          const isCorrectAnswer = label === translation;

          return (
            <VariantButton
              key={index}
              onClick={handleClick}
              label={label}
              translation={label === translation ? translation : undefined}
              isSelected={isSelected}
              isCorrectAnswer={isCorrectAnswer}
              disabled={selectedAnswer !== null}
              animationDelay={index * 60}
            />
          );
        })}
      </div>
    </div>
  );
};
