import { FC } from "react";

import styles from "./Input.module.scss";

interface InputProps {
  placeholder?: string;
  width: number;
  padding: string;
}

const Input: FC<InputProps> = ({ placeholder, width, padding }) => {
  return (
    <input
      className={styles.input}
      style={{ width: width, padding: padding }}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
