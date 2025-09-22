import React from "react";
import styles from "./button.module.scss";
import cn from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const StartButton = ({ className, children, ...props }: ButtonProps) => {
  return (
    <div className="text-center mt-10 z-0">
      <button {...props} className={cn(styles.pushable)}>
        <span className={cn(styles.shadow)}></span>
        <span className={cn(styles.edge)}></span>
        <span className={cn(styles.front)}> {children ?? "Начать тест"} </span>
      </button>
    </div>
  );
};

export default StartButton;
