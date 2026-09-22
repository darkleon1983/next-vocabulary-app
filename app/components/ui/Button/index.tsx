import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: "primary" | "success" | "destructive";
  children: React.ReactNode;
};

const Button = ({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--primary)/0.3)]",
    success:
      "bg-success text-success-foreground hover:bg-success/90 shadow-[0_0_20px_hsl(var(--success)/0.3)]",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-[0_0_20px_hsl(var(--destructive)/0.3)]",
  };

  return (
    <button
      {...props}
      className={`
        relative px-8 py-4 rounded-xl font-semibold text-lg
        transition-all duration-300 ease-out
        hover:scale-105 hover:shadow-xl
        active:scale-95
        animate-pulse-glow
        ${variantStyles[variant]}
        ${className || ""}
      `}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
};

export default Button;
