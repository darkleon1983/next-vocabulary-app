"use client";

import React, { useState } from "react";
import { MouseEvent } from "react";
import { Header } from "../components/Header";
import Button from "../components/ui/Button";
import wordsJson from "../mocks/words.json";
import { shuffle } from "../utils/wordPicker";
import answersArray from "../mocks/answersArray.json";
import { TaskComponent } from "../components/TaskComponent/index";
import { VariantComponent } from "../components/VariantComponent";
import { StatisticComponent } from "../components/StatisticComponent";
import { ResultStatistic } from "../components/ResultStatistic";
import StopTestButton from "../components/ui/StopTestButton";
import { useTest } from "@/context/TestContext";

type Word = {
  id: number;
  word: string;
  translation: string;
  partOfSpeech: string;
  category: string;
};

const words = wordsJson as Word[];

export default function TrainingPage() {
  const {
    isTrainingStarted,
    setIsTrainingStarted,
    isButtonVisible,
    setIsButtonVisible,
  } = useTest();
  const [ids, setIds] = useState<number[]>([]);
  const [wrongAnswers, setWrongAnswers] = useState<Word[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<Word[]>([]);
  const distractors = shuffle<string>(answersArray);
  const [isResultStatistic, setResultStatistic] = useState(false);

  const arrayMaker = (array: Word[]): number[] => {
    return array.map((word) => word.id);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    const newIds = arrayMaker(words);
    setIds(shuffle(newIds));
    setIsTrainingStarted(true);
    setIsButtonVisible(false);
    setResultStatistic(false);
    setWrongAnswers([]);
    setCorrectAnswers([]);
  };

  const firstWord =
    ids.length > 0 ? (words.find((word) => word.id === ids[0]) ?? null) : null;
  
  const handleClickStop = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("Test stopped");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Start Screen */}
        {!isTrainingStarted && !isResultStatistic && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center animate-fade-in-up">
            <div className="mb-8">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  <path d="M8 7h6" />
                  <path d="M8 11h8" />
                </svg>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                Тренируй свой английский
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto text-pretty">
                Интерактивные уроки с мгновенной проверкой
              </p>
            </div>
            
            <Button onClick={handleClick} />
          </div>
        )}

        {/* Active Test Screen */}
        {isTrainingStarted && (
          <div className="animate-fade-in-up">
            {/* Progress indicator */}
            <div className="mb-6 flex items-center justify-between">
              <StatisticComponent
                correctAnswers={correctAnswers}
                wrongAnswers={wrongAnswers}
              />
              <StopTestButton
                onClick={handleClickStop}
                isTrainingStarted={isTrainingStarted}
                setIsTrainingStarted={setIsTrainingStarted}
              />
            </div>

            {/* Word Card */}
            <div className="flex flex-col items-center">
              <TaskComponent word={firstWord} />
              
              <div className="w-full max-w-2xl mt-8">
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
            </div>
          </div>
        )}

        {/* Results Screen */}
        {isResultStatistic && !isTrainingStarted && (
          <div className="animate-fade-in-up">
            <ResultStatistic
              wrongAnswers={wrongAnswers}
              correctAnswers={correctAnswers}
            />
            
            <div className="flex justify-center mt-8">
              <Button onClick={handleClick}>
                Начать новый тест
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
