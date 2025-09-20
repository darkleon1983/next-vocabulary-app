import React from "react";
import styles from "./button.module.scss";
import cn from "classnames";

const StartButton = () => {
  return (
    <div className="text-center mt-10 z-0">
      <button className={cn(styles.pushable)}>
        <span className={cn(styles.shadow)}></span>
        <span className={cn(styles.edge)}></span>
        <span className={cn(styles.front)}> Начать тест </span>
      </button>
    </div>
  );
};

export default StartButton;
