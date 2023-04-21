import { FC } from "react";

import { IBannerCard } from "@/constants/bannerCards";
import { formatToCurrency } from "@/utils/format-to-currency";

import styles from "./BannerCard.module.scss";

interface BannerCardProps {
  card: IBannerCard;
}

const BannerCard: FC<BannerCardProps> = ({ card }) => {
  const renderHeader = () => {
    if ("currency" in card) {
      return formatToCurrency(card);
    }
    return card.value;
  };
  return (
    <div className={styles.card_container}>
      <h3>{renderHeader()}</h3>
      <p>{card.text}</p>
    </div>
  );
};

export default BannerCard;
