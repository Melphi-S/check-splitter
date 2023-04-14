import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./button.module.scss";
import classnames from "classnames";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  onClick: React.Dispatch<React.SetStateAction<any>>;
  selected: boolean;
}

const Button: FC<IButtonProps> = ({ name, onClick, selected, ...rest }) => {
  const className = classnames({
    [styles.button]: true,
    [styles.button_selected]: selected,
  });

  return (
    <button className={className} onClick={onClick} {...rest}>
      {name}
    </button>
  );
};

export default Button;
