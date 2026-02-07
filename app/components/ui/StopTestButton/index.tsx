// import React, { MouseEventHandler } from "react";
// import cn from "classnames";
// import styles from "./stopTestButton.module.scss";

// type StopTestButtonProps = {
//   className?: string;
//   onClick?: MouseEventHandler<HTMLButtonElement>;
// };

// const StopTestButton = ({ className, onClick }: StopTestButtonProps) => {
//   return (
//     <button className={cn(styles.stopButton)} onClick={onClick}>
//       Stop the test
//     </button>
//   );
// };

// export default StopTestButton;

import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";
import cn from "classnames";
import styles from "./stopTestButton.module.scss";

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
    <div>
      <button onClick={handleClick} className={cn(styles.stopButton)}>
        Stop the test
      </button>
    </div>
  );
};

export default StopTestButton;
