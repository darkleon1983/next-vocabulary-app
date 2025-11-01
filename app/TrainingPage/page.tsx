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

  const arrayMaker = (array: Word[]): number[] => {
    return array.map((word) => word.id);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const label = event.currentTarget.dataset.label || "Unkonwn Label";
    const newIds = arrayMaker(words);
    setIds(shuffle(newIds));
    setIsTrainingStarted(true);
    setIsButtonVisible(false);
    
  };

  // console.log("this is ids", ids);
  const firstWord =
    ids.length > 0 ? words.find((word) => word.id === ids[0]) ?? null : null;
  return (
    <div>
      {" "}
      <Header />
      <h2>Тренируй свой английский</h2>
      {!isTrainingStarted && <Button onClick={handleClick} />}
      <div className={cn("grid grid-cols-3 text-3xl")}>
        {/* <div>{words[ids[0]].word}</div> */}
        {isTrainingStarted && (
          <>
            <TaskComponent word={firstWord} />
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
            // goToNextWord={goToNextWord}
            setIds={setIds}/>
            <StatisticComponent 
            correctAnswers={correctAnswers}
            wrongAnswers={wrongAnswers}/>
          </>
        )}
      </div>
    </div>
  );
}
