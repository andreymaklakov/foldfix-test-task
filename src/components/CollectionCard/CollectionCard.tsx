import { FC } from "react";
import Image from "next/image";

import { ICollectionItem } from "@/interfaces/collection";
import { tableColumns } from "@/constants/tableColumns";
import Button from "../Button/Button";

import styles from "./CollectionCard.module.scss";

interface CollectionCardProps {
  item: ICollectionItem;
}

const CollectionCard: FC<CollectionCardProps> = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <Image
          src={item.project.img_url}
          alt="collection logo"
          width={64}
          height={64}
        />
        {item.project.display_name}
      </div>

      {tableColumns.length >= 6 ? (
        <table>
          <tbody>
            <tr>
              <th>{tableColumns[1].text}</th>
              <td>
                {item.floor_price.toFixed(2)} <span>SOL</span>
              </td>
            </tr>
            <tr>
              <th>{tableColumns[2].text}</th>
              <td>
                1200 <span>SOL</span>
              </td>
            </tr>
            <tr>
              <th>{tableColumns[3].text}</th>
              <td className={styles.vol_data}>+100%</td>
            </tr>
            <tr>
              <th>{tableColumns[4].text}</th>
              <td>50,000</td>
            </tr>
            <tr>
              <th>{tableColumns[5].text}</th>
              <td>10%</td>
            </tr>
          </tbody>
        </table>
      ) : (
        ""
      )}

      <Button fullWidth filled active padding={16}>
        Instant buy
      </Button>
    </div>
  );
};

export default CollectionCard;
