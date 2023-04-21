import { FC, ReactElement } from "react";

import Input from "../Input/Input";

import styles from "./InputWithFrontImg.module.scss";

interface InputWithFrontImgProps {
  img: ReactElement;
}

const InputWithFrontImg: FC<InputWithFrontImgProps> = ({ img }) => {
  return (
    <div className={styles.input_container}>
      <div className={styles.input_img}>{img}</div>

      <Input
        width={304}
        padding="12px 12px 12px 40px"
        placeholder="Search collections, NFTs"
      />
    </div>
  );
};

export default InputWithFrontImg;
