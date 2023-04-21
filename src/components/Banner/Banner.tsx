import { FC } from "react";
import Image from "next/image";

import { bannerCards } from "@/constants/bannerCards";
import BannerCard from "../BannerCard/BannerCard";
import Logo from "../../svg/logo/Logo.svg";

import styles from "./Banner.module.scss";

const Banner: FC = () => {
  return (
    <div className={styles.banner_container}>
      <h1>
        Buy your favorite{" "}
        <span>
          NFTs with <span className={styles.colored_text}>leverage</span>
        </span>
      </h1>

      <div className={styles.banner_cards_container}>
        {bannerCards.map((card) => (
          <BannerCard key={card.value} card={card} />
        ))}
      </div>

      <div className={styles.banner_logo}>
        <Image src={Logo} alt="logo" width={89} height={89} />
      </div>
    </div>
  );
};

export default Banner;
