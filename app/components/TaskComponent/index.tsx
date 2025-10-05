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
  {word ?  (<div>
    <p>Слово:{word.word}</p>
    <p>Перевод:{word.translation}</p>
    <p>Часть речи:{word.partOfSpeech}</p>
    <p>Категория:{word.category}</p>
  </div>) : (<p>нет слов</p>) }
</div>
  );
}