import React from "react";
import cn from "classnames";

type Word = {
  id: number;
  word: string;
  translation: string;
  partOfSpeech: string;
  category: string;
};

type TaskComponentProps = {
  word: Word | null;
  className?: string;
}

export const TaskComponent = ({word, className}: TaskComponentProps) => {
  return(
<div>
  {word ?  (<div className={cn("h-[100px]")}>
    <div className={cn("h-full grid justify-items-center content-center text-6xl")}>{word.word}</div>
    {/* <p>Перевод:{word.translation}</p>
    <p>Часть речи:{word.partOfSpeech}</p>
    <p>Категория:{word.category}</p>
    <p>id:{word.id}</p> */}
  </div>) : (<p>нет слов</p>) }
</div>
  );
}