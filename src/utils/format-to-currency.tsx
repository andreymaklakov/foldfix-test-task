import { IBannerCard } from "@/constants/bannerCards";

export const formatToCurrency = (item: IBannerCard) => {
  return (
    <>
      {item.value} <span>{item.currency}</span>
    </>
  );
};
