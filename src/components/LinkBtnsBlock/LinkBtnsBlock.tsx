import Link from "next/link";
import { FC } from "react";

import Button from "../Button/Button";
import { IBtn } from "@/constants/navBtns";

interface LinkBtnsBlockProps {
  btns: IBtn[];
}

const LinkBtnsBlock: FC<LinkBtnsBlockProps> = ({ btns }) => {
  return (
    <>
      {btns.map((btn) => (
        <Link href={btn.path} key={btn.text}>
          <Button filled padding={16} path={btn.path}>
            {btn.text}
          </Button>
        </Link>
      ))}
    </>
  );
};

export default LinkBtnsBlock;
