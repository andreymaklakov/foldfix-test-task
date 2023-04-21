import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../svg/logo/Logo.svg";
import { navBtns } from "@/constants/navBtns";
import LinkBtnsBlock from "../LinkBtnsBlock/LinkBtnsBlock";
import SearchField from "../SearchField/SearchField";
import ThemeBtn from "../ThemeBtn/ThemeBtn";
import Button from "../Button/Button";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <>
      <header className={styles.header_big}>
        <div className={styles.header_left}>
          <Link href="/" className={styles.header_logo}>
            <Image src={Logo} alt="logo" width={32} height={32} />
            <h3>Robox.Fi</h3>
          </Link>

          <nav className={styles.header_navbtns}>
            <LinkBtnsBlock btns={navBtns} />
          </nav>
        </div>

        <div className={styles.header_right}>
          <SearchField />

          <ThemeBtn />

          <Link href="/connect-wallet">
            <Button filled padding={16} path="/connect-wallet">
              Connect Wallet
            </Button>
          </Link>
        </div>
      </header>

      <header className={styles.header_sm}>
        <div className={styles.header_up}>
          <Link href="/" className={styles.header_logo}>
            <Image src={Logo} alt="logo" width={24} height={24} />
            <h4>Robox</h4>
          </Link>

          <div>
            <SearchField />

            <ThemeBtn />

            <Link href="/connect-wallet">
              <Button filled padding={8} path="/connect-wallet">
                <div className={styles.circle}></div>
              </Button>
            </Link>
          </div>
        </div>

        <div className={styles.header_bottom}>
          <nav className={styles.header_navbtns}>
            <LinkBtnsBlock btns={navBtns} />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
