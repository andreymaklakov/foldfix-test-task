import { FC, MouseEvent, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

import InputWithFrontImg from "../InputWithFrontImg/InputWithFrontImg";
import Button from "../Button/Button";
import Input from "../Input/Input";

import styles from "./SearchField.module.scss";

const SearchField: FC = () => {
  const [showInput, setShowInput] = useState(false);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();

    setShowInput(true);
  };

  const handleClose = (e: MouseEvent<HTMLDivElement>) => {
    setShowInput(false);
  };

  return (
    <form>
      <div className={styles.search_big}>
        <InputWithFrontImg img={<FiSearch size={20} />} />
      </div>

      <div className={styles.search_sm}>
        <Button padding={10} onClick={handleClick}>
          <FiSearch size={20} />
        </Button>

        {showInput ? (
          <div
            onClick={handleClose}
            style={{
              width: "100vw",
              height: "100vh",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={styles.search_input}
            >
              <Input width={300} padding={"12px"} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default SearchField;
