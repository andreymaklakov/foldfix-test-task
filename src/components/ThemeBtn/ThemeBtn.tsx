import { FC } from "react";
import { FiMoon } from "react-icons/fi";

import Button from "../Button/Button";

const ThemeBtn: FC = () => {
  return (
    <Button filled padding={10}>
      <FiMoon size={22} />
    </Button>
  );
};

export default ThemeBtn;
