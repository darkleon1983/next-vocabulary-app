import React from "react";
import cn from "classnames";
import styles from "./showResultButton.module.scss";


const ShowResultButton = () => {
  return(
    <div className={cn(styles.button)}>Показать</div>
  );
};

export default ShowResultButton;