import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import styles from "./Button.module.scss";

interface ButtonPros {
  path?: string;
  padding: number;
  filled?: boolean;
  onClick?: (e: any) => void;
  active?: boolean;
  fullWidth?: boolean;
}

const Button: FC<PropsWithChildren<ButtonPros>> = ({
  children,
  path,
  padding,
  filled,
  onClick,
  active,
  fullWidth,
}) => {
  let isActive = active || false;

  if (path) {
    const router = useRouter();
    isActive = router.pathname === path;
  }

  const btnStyles = cn({
    [styles.btn]: true,
    [styles.btn_active]: isActive,
    [styles.btn_filled]: filled,
  });

  return (
    <button
      className={btnStyles}
      style={{ padding: padding, width: fullWidth ? "100%" : "fit-content" }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
