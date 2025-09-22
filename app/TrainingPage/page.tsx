"use client";

import React from "react";
import cn from "classnames";
import { Header } from "../components/Header";
import Button from "../components/ui/Button";
import wordsJson from "../mocks/words.json";

type Word = {
  id: number;
  word: string;
  translation: string;
  partOfSpeech: string;
  category: string;
};

const words = wordsJson as Word[];

export default function TrainingPage() {
  const arrayMaker = (array: Word[]): number[] => {
    return array.map((word) => word.id);
  };

  const handleClick = () => {
    const ids = arrayMaker(words);
    console.log(ids);
    return ids;
  };
  console.log(words.length);
  return (
    <div>
      <Header />
      <h2>Train your english</h2>
      {/* {words.map((word) => (
        <p>{word.word}</p>
      ))} */}
      <Button onClick={handleClick} />
    </div>
  );
}
