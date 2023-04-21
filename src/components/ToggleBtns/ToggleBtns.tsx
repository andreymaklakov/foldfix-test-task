import { FC, ReactElement, useState } from "react";
import cn from "classnames";

import styles from "./ToggleBtns.module.scss";

interface ToggleBtnsProps {
  fistContent: ReactElement;
  secondContent: ReactElement;
}

const ToggleBtns: FC<ToggleBtnsProps> = ({ fistContent, secondContent }) => {
  const [activeBtn, seActiveBtn] = useState<"left" | "right">("left");

  const leftBtnStyles = cn({
    [styles.left_btn]: true,
    [styles.btn_active]: activeBtn === "left",
  });

  const rightBtnStyles = cn({
    [styles.right_btn]: true,
    [styles.btn_active]: activeBtn === "right",
  });

  return (
    <div className={styles.btns_container}>
      <button className={leftBtnStyles} onClick={() => seActiveBtn("left")}>
        {fistContent}
      </button>
      <button className={rightBtnStyles} onClick={() => seActiveBtn("right")}>
        {secondContent}
      </button>
    </div>
  );
};

export default ToggleBtns;
