import React, { MouseEventHandler } from "react";
import cn from "classnames";
import styles from "./stopTestButton.module.scss";

type StopTestButtonProps = {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StopTestButton = ({ className, onClick }: StopTestButtonProps) => {
  return (
    <button className={cn(styles.stopButton)} onClick={onClick}>
      Stop the test
    </button>
  );
};

export default StopTestButton;
