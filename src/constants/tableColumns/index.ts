export interface ITableColumns {
  text: string;
  hasSorting: boolean;
  path?: string;
}

export const tableColumns: ITableColumns[] = [
  {
    text: "Collection",
    hasSorting: false,
  },
  {
    text: "Floor price",
    hasSorting: true,
    path: "floor_price",
  },
  {
    text: "Buy Now Price",
    hasSorting: true,
  },
  {
    text: "24h Vol %",
    hasSorting: true,
  },
  {
    text: "24h Sales",
    hasSorting: true,
  },
  {
    text: "Interest (14 days)",
    hasSorting: false,
  },
];
