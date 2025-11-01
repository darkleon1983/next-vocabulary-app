import React from "react";
import styles from "./variantButton.module.scss";
import cn from "classnames";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  label: string;
  translation?: string;
};

const VariantButton = ({
  className,
  children,
  label,
  translation,
  ...props
}: ButtonProps) => {
  return (
    <div>
      <button
        data-word={translation}
        data-label={label}
        {...props}
        className={cn(styles.variantButton, className)}
      >
        {label}
      </button>
    </div>
  );
};

export default VariantButton;
