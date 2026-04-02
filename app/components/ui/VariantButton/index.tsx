import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  label: string;
  translation?: string;
  state?: "default" | "correct" | "incorrect";
  animationDelay?: number;
};

const VariantButton = ({
  className,
  label,
  translation,
  state = "default",
  animationDelay = 0,
  disabled,
  ...props
}: ButtonProps) => {
  const stateStyles = {
    default: `
      bg-card border-border text-foreground
      hover:border-primary hover:bg-primary/5 hover:scale-[1.02]
      active:scale-[0.98]
    `,
    correct: `
      bg-success/10 border-success text-success
      scale-[1.02]
    `,
    incorrect: `
      bg-destructive/10 border-destructive text-destructive
      scale-[0.98]
    `,
  };

  return (
    <button
      data-word={translation}
      data-label={label}
      disabled={disabled}
      {...props}
      className={`
        w-full px-6 py-4 rounded-xl
        border-2 transition-all duration-200 ease-out
        font-medium text-base sm:text-lg
        shadow-sm hover:shadow-md
        animate-fade-in-up
        ${stateStyles[state]}
        ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
        ${className || ""}
      `}
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <span className="flex items-center justify-center gap-2">
        {state === "correct" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        )}
        {state === "incorrect" && (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        )}
        {label}
      </span>
    </button>
  );
};

export default VariantButton;
