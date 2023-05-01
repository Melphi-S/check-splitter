import React, { FC, InputHTMLAttributes, useState } from "react";
import styles from "./input.module.scss";
import classnames from "classnames";

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
  const [error, setError] = useState<string | null>(null);

  const errorHandler = (errorText: string) => {
    setError(errorText);
    setTimeout(() => setError(null), 1000);
  };

  const disableNoDigits = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === "e" ||
      e.key === "-" ||
      e.key === "+" ||
      (!hasDot && (e.key === "." || e.key === ","))
    ) {
      e.preventDefault();
      errorHandler(`Only digits are allowed`);
    }
  };

  const validateValue = (e: string) => {
    if (+e < min) {
      onChange(min);
      errorHandler(`Can't be less than ${min}`);
    } else if (+e > max) {
      onChange(max);
      errorHandler(`Can't be more than ${max}`);
    } else {
      if (e.includes(".") && e.split(".")[1].length > 2) {
        e = e.slice(0, -1);
        errorHandler(`Two decimal places are allowed`);
      }
      if (e.length > 1 && Number(e[0]) === 0 && !e.includes(".")) {
        e = e.slice(0, -1);
      }
      if (e.startsWith(".")) {
        e = 0 + e;
      }
      onChange(e);
    }
  };

  const inputClassName = classnames({
    [styles.input]: true,
    [styles.input_error]: error,
  });

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
          className={inputClassName}
          value={value}
          onKeyDown={(e) => disableNoDigits(e)}
          onChange={(e) => validateValue(e.target.value)}
          {...rest}
        />
        {error && <span className={styles.validationError}>{error}</span>}
      </div>
    </div>
  );
};

export default Input;
