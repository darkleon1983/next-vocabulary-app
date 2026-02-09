"use client";

import React, { useState } from "react";
import { MouseEvent } from "react";
import cn from "classnames";
import { Header } from "../components/Header";
import Button from "../components/ui/Button";
import wordsJson from "../mocks/words.json";
import { shuffle } from "../utils/wordPicker";
import answersArray from "../mocks/answersArray.json";
import { TaskComponent } from "../components/TaskComponent/index";
import { VariantComponent } from "../components/VariantComponent";
import { StatisticComponent } from "../components/StatisticComponent";
import { ResultStatistic } from "../components/ResultStatistic";
import styles from "./trainingPage.module.scss";
import StopTestButton from "../components/ui/StopTestButton";

type Word = {
  id: number;
  word: string;
  translation: string;
  partOfSpeech: string;
  category: string;
};

const words = wordsJson as Word[];

export default function TrainingPage() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [ids, setIds] = useState<number[]>([]);
  const [isTrainingStarted, setIsTrainingStarted] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<Word[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<Word[]>([]);
  const distractors = shuffle<string>(answersArray);
  const [isResultStatistic, setResultStatistic] = useState(false);

  const arrayMaker = (array: Word[]): number[] => {
    return array.map((word) => word.id);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const label = event.currentTarget.dataset.label || "Unkonwn Label";
    const newIds = arrayMaker(words);
    setIds(shuffle(newIds));
    setIsTrainingStarted(true);
    setIsButtonVisible(false);
    setResultStatistic(false);
    setWrongAnswers([]);
    setCorrectAnswers([]);
  };

  // console.log("this is ids", ids);
  const firstWord =
    ids.length > 0 ? (words.find((word) => word.id === ids[0]) ?? null) : null;
  const handleClickStop = (event: MouseEvent<HTMLButtonElement>) => {
    // console.log(event);
    console.log("hello, programmer!");
  };
  return (
    <div className={cn(styles.trainingContainer)}>
      {" "}
      <Header />
      {isButtonVisible && (
        <h2 className={cn(styles.heading, "text-6xl text-center sm:text-2xl")}>
          Тренируй свой английский
        </h2>
      )}
      {!isTrainingStarted && <Button onClick={handleClick} />}
      <div className={cn("grid grid-cols-3 ")}>
        {isTrainingStarted && (
          <>
            <div className={cn(styles.taskItem)}>
              <TaskComponent word={firstWord} />
            </div>
            <div className={cn(styles.variantItem)}>
              <VariantComponent
                word={firstWord}
                distractors={distractors}
                correctAnswers={correctAnswers}
                setCorrectAnswers={setCorrectAnswers}
                wrongAnswers={wrongAnswers}
                isTrainingStarted={isTrainingStarted}
                setIsTrainingStarted={setIsTrainingStarted}
                isButtonVisible={isButtonVisible}
                setIsButtonVisible={setIsButtonVisible}
                setWrongAnswers={setWrongAnswers}
                setIds={setIds}
                isResultStatistic={isResultStatistic}
                setResultStatistic={setResultStatistic}
              />
            </div>
            <div className={cn(styles.statisticItem)}>
              {" "}
              <StatisticComponent
                correctAnswers={correctAnswers}
                wrongAnswers={wrongAnswers}
              />
            </div>
          </>
        )}
        {isResultStatistic && (
          <ResultStatistic
            wrongAnswers={wrongAnswers}
            correctAnswers={correctAnswers}
            className={cn(styles.resultstatistic)}
          />
        )}
      </div>
      <div className={cn("text-center")}>
        {" "}
        {isTrainingStarted && (
          <StopTestButton
            onClick={handleClickStop}
            isTrainingStarted={isTrainingStarted}
            setIsTrainingStarted={setIsTrainingStarted}
          />
        )}
      </div>
    </div>
  );
}
