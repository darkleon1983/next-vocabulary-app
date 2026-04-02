import React from "react";

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
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 px-4 py-2 bg-success/10 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        <span className="text-success font-bold text-xl">
          {correctAnswers.length}
        </span>
      </div>
      
      <div className="flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-destructive">
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
        <span className="text-destructive font-bold text-xl">
          {wrongAnswers.length}
        </span>
      </div>
    </div>
  );
};
