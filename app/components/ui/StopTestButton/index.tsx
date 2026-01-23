import React from "react";
import cn from "classnames";
import styles from "./stopTestButton.module.scss";

const StopTestButton = () => {
  return <button className={cn(styles.stopButton)}>Stop the test</button>;
};

export default StopTestButton;
