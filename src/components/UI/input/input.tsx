import React, { FC, InputHTMLAttributes } from "react";
import styles from "./input.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  iconAlt?: string;
  label?: string;
  value: string;
  hasDot: boolean;
  min: number;
  max: number;
  onChange: React.Dispatch<React.SetStateAction<any>>;
}

const Input: FC<IInputProps> = ({
  icon,
  iconAlt,
  label,
  value,
  onChange,
  min,
  max,
  hasDot,
  ...rest
}) => {
  const disableNoDigits = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "e" || e.key === "-" || e.key === "+") {
      e.preventDefault();
    }
    if (!hasDot && (e.key === "." || e.key === ",")) {
      e.preventDefault();
    }
  };

  const validateValue = (e: string) => {
    if (+e < min) {
      onChange(min);
    } else if (+e > max) {
      onChange(max);
    } else {
      if (e.includes(".") && e.split(".")[1].length > 2) {
        e = e.slice(0, -1);
      }
      onChange(e);
    }
  };

  return (
    <div>
      {label && (
        <label className={styles.label} htmlFor={label}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {icon && <img src={icon} alt={iconAlt} className={styles.icon} />}
        <input
          {...(label && { id: label })}
          type="number"
          className={styles.input}
          value={value}
          onKeyDown={(e) => disableNoDigits(e)}
          onChange={(e) => validateValue(e.target.value)}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
