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

export const StatisticComponent = ({ wrongAnswers, correctAnswers }: StatisticComponentProps) => {
  return (
    <div>

      <h2>Statistic</h2>
      <p>Wrong answers number: <span  className={cn("text-red-700", wrongAnswers.length > correctAnswers.length && "text-5xl")}>{wrongAnswers.length}</span></p>
      <p>Correct answers number: <span className={cn("text-green-700", correctAnswers.length > wrongAnswers.length && "text-5xl")}>{correctAnswers.length}</span></p>
    </div>
  );
};
