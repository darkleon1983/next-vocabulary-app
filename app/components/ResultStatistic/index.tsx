import React, { useState } from "react";

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
  const [showWrongWords, setShowWrongWords] = useState(false);
  const total = correctAnswers.length + wrongAnswers.length;
  const percentage = total > 0 ? Math.round((correctAnswers.length * 100) / total) : 0;
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return { text: "Отлично!", color: "text-success" };
    if (percentage >= 70) return { text: "Хорошо!", color: "text-primary" };
    if (percentage >= 50) return { text: "Неплохо", color: "text-yellow-500" };
    return { text: "Нужно практиковаться", color: "text-destructive" };
  };
  
  const performance = getPerformanceMessage();

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in-up">
      {/* Main Result Card */}
      <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-lg border border-border text-center mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Тест завершён!
        </h2>
        <p className={`text-xl ${performance.color} font-medium mb-8`}>
          {performance.text}
        </p>
        
        {/* Percentage Circle */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={percentage >= 50 ? "hsl(var(--success))" : "hsl(var(--destructive))"}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${percentage * 2.83} 283`}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-foreground">{percentage}%</span>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="bg-success/10 rounded-xl p-4">
            <div className="flex items-center justify-center gap-2 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-2xl font-bold text-success">{correctAnswers.length}</span>
            </div>
            <p className="text-sm text-muted-foreground">Правильных</p>
          </div>
          
          <div className="bg-destructive/10 rounded-xl p-4">
            <div className="flex items-center justify-center gap-2 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-destructive">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="text-2xl font-bold text-destructive">{wrongAnswers.length}</span>
            </div>
            <p className="text-sm text-muted-foreground">Неправильных</p>
          </div>
        </div>
      </div>

      {/* Wrong Answers Section */}
      {wrongAnswers.length > 0 && (
        <div className="bg-card rounded-2xl p-6 shadow-lg border border-border animate-fade-in-up animation-delay-200">
          <button
            onClick={() => setShowWrongWords(!showWrongWords)}
            className="w-full flex items-center justify-between text-left"
          >
            <h3 className="text-lg font-semibold text-foreground">
              Слова для повторения ({wrongAnswers.length})
            </h3>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`text-muted-foreground transition-transform duration-200 ${showWrongWords ? "rotate-180" : ""}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          
          {showWrongWords && (
            <div className="mt-4 space-y-2 animate-fade-in-up">
              {wrongAnswers.map((word, index) => (
                <div 
                  key={word.id}
                  className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg animate-slide-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-code font-medium text-foreground">{word.word}</span>
                  <span className="text-muted-foreground">{word.translation}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
