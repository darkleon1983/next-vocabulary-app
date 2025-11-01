import React, { Dispatch, MouseEvent, SetStateAction } from "react";
import cn from "classnames";
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
  // goToNextWord: () => void;
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
  isButtonVisible,
}: // goToNextWord,
VariantComponentProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const label = event.currentTarget.dataset.label || "Unknown label";
    const translation = word ? word.translation.trim() : "Нет перевода";
    // if (word) {
    //   if (label === translation) {
    //     // Правильный ответ
    //     setCorrectAnswers((prev) =>
    //       prev.some((w) => w.id === word.id) ? prev : [...prev, word]
    //     );
    //     // Удаляем первый элемент из ids
    //     setIds((prev) => {
    //       const newIds = prev.slice(1);
    //       if (newIds.length === 0 && isTrainingStarted) {
    //         setIsTrainingStarted(false);
    //         setIsButtonVisible(true);
    //       }
    //       return newIds;
    //     });
    //   } else {
    //     // Неправильный ответ
    //     setWrongAnswers((prev) =>
    //       prev.some((w) => w.id === word.id) ? prev : [...prev, word]
    //     );
    //   }
    // }
    // goToNextWord();
    if (word) {
      if (label === translation) {
        // Правильный ответ
        setCorrectAnswers((prev) =>
          prev.some((w) => w.id === word.id) ? prev : [...prev, word]
        );
      } else {
        // Неправильный ответ
        setWrongAnswers((prev) =>
          prev.some((w) => w.id === word.id) ? prev : [...prev, word]
        );
      }
      setIds((prev) => {
        const newIds = prev.slice(1);
        if(newIds.length === 0 && isTrainingStarted) {
          setIsTrainingStarted(false);
          setIsButtonVisible(true);
        }
        return newIds;
      })
    }
  };

  const translation = word ? word.translation : "Нет перевода";
  const variants =
    distractors.length > 0
      ? shuffle([translation, ...distractors.slice(0, 3)])
      : shuffle([translation, "variant 2", "variant 3", "variant 4"]);

  console.log(translation);

  return (
    <div>
      <h2>Variants</h2>
      <div className={cn("mt-5 grid grid-rows-4 gap-6")}>
        {variants.map((label, index) => (
          <VariantButton
            key={index}
            onClick={handleClick}
            label={label}
            translation={label === translation ? translation : label}
          />
        ))}
      </div>
    </div>
  );
};
