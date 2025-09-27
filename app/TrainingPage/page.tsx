"use client";

import React, { useState } from "react";
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
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [ids, setIds] = useState<number[]>([]);
  const arrayMaker = (array: Word[]): number[] => {
    return array.map((word) => word.id);
  };

  const handleClick = () => {
    const newIds = arrayMaker(words);
    setIds(newIds);
    setIsButtonVisible(false);
  };
  console.log(ids);
  return (
    <div>
      <Header />
      <h2>Train your english</h2>
      {isButtonVisible && <Button onClick={handleClick} />}
      {ids.map((id: number) => (<div key={id}>{words[id].word}</div>))}
    </div>
  );
}
