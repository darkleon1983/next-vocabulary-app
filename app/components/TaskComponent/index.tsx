import React from "react";

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
  return (
    <div className={`w-full max-w-2xl ${className || ""}`}>
      {word ? (
        <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-lg border border-border animate-fade-in-up">
          <div className="text-center">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {word.category}
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-code mb-2">
              {word.word}
            </h2>
            <p className="text-muted-foreground text-sm">
              {word.partOfSpeech}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-lg border border-border text-center">
          <p className="text-muted-foreground">Нет слов для отображения</p>
        </div>
      )}
    </div>
  );
}
