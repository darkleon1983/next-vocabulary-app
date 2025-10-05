import React, { MouseEvent } from "react";
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
};

export const VariantComponent = ({
  word,
  distractors = [],
}: VariantComponentProps) => {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const label = event.currentTarget.dataset.label || "Unknown label";
    const translation =
      event.currentTarget.dataset.word || "Unknown translation";
    console.log("Clicked button", label, translation);
  };

  const translation = word ? word.translation : "Нет перевода";
  const variants =
    distractors.length > 0
      ? shuffle([translation, ...distractors.slice(0, 3)])
      : shuffle([translation, "variant 2", "variant 3", "variant 4"]);

  return (
    <div>
      <h2>Variants</h2>
      <div className={cn("mt-5 grid grid-rows-4 gap-6")}>
        {variants.map((label, index) => (
          <VariantButton
            key={index}
            onClick={handleClick}
            label={label}
            translation={index === 0 ? translation : undefined}
          />
        ))}
      </div>
    </div>
  );
};
