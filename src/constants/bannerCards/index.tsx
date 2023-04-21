export interface IBannerCard {
  value: number | string;
  text: string;
  currency?: string;
}

export const bannerCards: IBannerCard[] = [
  {
    value: 8497.55,
    text: "Total Interest (from Active Loans)",
    currency: "SOL",
  },
  {
    value: 21673,
    text: "Total active positions",
  },
  {
    value: "4085/1508",
    text: "Loans in 24H/12H",
  },
  {
    value: 295240.32,
    text: "Active Loans Volume",
    currency: "SOL",
  },
  {
    value: 337506.33,
    text: "Total Value Locked",
    currency: "SOL",
  },
];
