import React, { useState } from "react";
import cn from "classnames";
import ShowResultButton from "../ui/ShowResultButton";
import styles from "./resultStatistic.module.scss";

type Word = {
  id: number;
  word: string;
  translation: string;
  partOfSpeech: string;
  category: string;
};

type ResultStatisticProps = {
  wrongAnswers: Word[];
  correctAnswers: Word[];
  className?: string;
};

export const ResultStatistic = ({
  wrongAnswers,
  correctAnswers,
}: ResultStatisticProps) => {
  const [isDetailStatistic, setDetailStatistic] = useState(false);
  return (
    <div className={cn(styles.resultStatistic, "grid sm:grid sm:grid")}>
      <h2 className={cn("text-7xl text-center sm:text-5xl")}>
        Результат{" "}
        {Math.round(
          (correctAnswers.length * 100) /
            (correctAnswers.length + wrongAnswers.length)
        )}{" "}
        %
      </h2>
      <div>
        {
          <div>
            <p>Количество неправильных ответов: {wrongAnswers.length}</p>
            <p>Количество правильных ответов: {correctAnswers.length}</p>
          </div>
        }
        <ShowResultButton />
      </div>
    </div>
  );
};
