export interface IBtn {
  text: string;
  path: string;
}

export const navBtns: IBtn[] = [
  {
    text: "Trade",
    path: "/",
  },
  {
    text: "Lend",
    path: "/lend",
  },
  {
    text: "Leaderboards",
    path: "/leaderboards",
  },
  {
    text: "About",
    path: "/about",
  },
];
