import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";

type StopTestButtonProps = {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isTrainingStarted: boolean;
  setIsTrainingStarted: Dispatch<SetStateAction<boolean>>;
};

const StopTestButton = ({
  className,
  onClick,
  isTrainingStarted,
  setIsTrainingStarted,
}: StopTestButtonProps) => {
  const handleClick = () => {
    setIsTrainingStarted(!isTrainingStarted);
  };
  
  return (
    <button 
      onClick={handleClick} 
      className={`
        flex items-center gap-2 px-4 py-2
        bg-destructive/10 text-destructive
        rounded-lg border border-destructive/20
        font-medium text-sm
        transition-all duration-200 ease-out
        hover:bg-destructive hover:text-destructive-foreground
        hover:scale-105 hover:shadow-md
        active:scale-95
        ${className || ""}
      `}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="14" x="5" y="5" rx="2" />
      </svg>
      Стоп тест
    </button>
  );
};

export default StopTestButton;
