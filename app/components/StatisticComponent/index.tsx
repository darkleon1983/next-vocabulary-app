import React from "react";
import cn from "classnames";

type Word = {
  id: number;
  word: string;
  translation: string;
  partOfSpeech: string;
  category: string;
};

type StatisticComponentProps = {
  wrongAnswers: Word[];
  correctAnswers: Word[];
};

export const StatisticComponent = ({
  wrongAnswers,
  correctAnswers,
}: StatisticComponentProps) => {
  return (
    <div>
      <div>
        {" "}
        <p>
          Неверно:{" "}
          <span className={cn("text-red-700 text-3xl")}>
            {wrongAnswers.length}
          </span>
        </p>
        <p>
          Верно:{" "}
          <span className={cn("text-green-700 text-3xl")}>
            {correctAnswers.length}
          </span>
        </p>
      </div>
    </div>
  );
};
