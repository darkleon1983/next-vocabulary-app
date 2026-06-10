import React from "react";
import cn from "classnames";

type VariantButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  translation?: string;
  isSelected?: boolean;
  isCorrectAnswer?: boolean;
  disabled?: boolean;
  animationDelay?: number;
  className?: string;
};

const VariantButton = ({
  label,
  translation,
  isSelected = false,
  isCorrectAnswer = false,
  disabled = false,
  animationDelay = 0,
  className,
  onClick,
  ...props
}: VariantButtonProps) => {
  return (
    <button
      data-label={label}
      data-word={translation}
      onClick={disabled ? undefined : onClick}
      style={{ animationDelay: `${animationDelay}ms` }}
      className={cn(
        "w-full px-6 py-5 rounded-2xl border-2 font-medium text-base sm:text-lg",
        "transition-all duration-200 flex items-center justify-center gap-3 shadow-sm",
        "touch-manipulation", // ← важно для мобильных

        // Default
        !isSelected &&
          "bg-card border-border hover:border-primary hover:bg-primary/5 active:scale-[0.98] cursor-pointer",

        // Correct
        isSelected &&
          isCorrectAnswer &&
          "bg-green-100 border-green-600 text-green-700 shadow-md scale-[1.02]",

        // Incorrect
        isSelected &&
          !isCorrectAnswer &&
          "bg-red-100 border-red-600 text-red-700 shadow-md scale-[0.98]",

        // После выбора — блокируем взаимодействие
        disabled && "cursor-not-allowed opacity-70 pointer-events-none",

        className,
      )}
      {...props}
    >
      {isSelected && isCorrectAnswer && <span className="text-xl">✓</span>}
      {isSelected && !isCorrectAnswer && <span className="text-xl">✕</span>}
      {label}
    </button>
  );
};

export default VariantButton;
