import { FC, PropsWithChildren } from "react";

import Meta from "../meta/Meta";
import { ISeo } from "../meta/meta.interface";
import Header from "../Header/Header";

import styles from "./Layout.module.scss";

interface LayoutProps extends ISeo {}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children, ...rest }) => {
  return (
    <>
      <Meta {...rest} />
      <div className={styles.layout}>
        <main>
          <Header />
          <section className={styles.content}>{children}</section>
        </main>
      </div>
    </>
  );
};

export default Layout;
