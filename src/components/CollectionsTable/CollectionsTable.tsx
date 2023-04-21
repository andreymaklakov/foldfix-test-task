import { FC, useState } from "react";
import Image from "next/image";
import { CgArrowsScrollV } from "react-icons/cg";
import _ from "lodash";

import { tableColumns } from "@/constants/tableColumns";
import Button from "../Button/Button";
import { IReceivedCollectionData } from "@/interfaces/collection";

import styles from "./CollectionsTable.module.scss";

const CollectionsTable: FC<IReceivedCollectionData> = ({ collection }) => {
  const [sortBy, setSortBy] = useState<{ path: string; order: "desc" | "asc" }>(
    {
      path: "floor_price",
      order: "desc",
    }
  );

  const handleSort = (item: string | undefined) => {
    if (item === undefined) {
      return;
    }

    if (sortBy.path === item) {
      setSortBy({
        ...sortBy,
        order: sortBy.order === "asc" ? "desc" : "asc",
      });
    } else {
      setSortBy({ path: item, order: "asc" });
    }
  };

  const sortedcollection = _.orderBy(collection, [sortBy.path], [sortBy.order]);

  return (
    <table className={styles.table}>
      <thead className={styles.table_head}>
        <tr>
          {tableColumns.length &&
            tableColumns.map((col) => (
              <th key={col.text} onClick={() => handleSort(col.path)}>
                <p style={{ cursor: col.hasSorting ? "pointer" : "auto" }}>
                  {col.text}{" "}
                  {col.hasSorting ? <CgArrowsScrollV size={20} /> : ""}
                </p>
              </th>
            ))}
          <th></th>
        </tr>
      </thead>

      <tbody className={styles.table_body}>
        {sortedcollection.length &&
          sortedcollection.map((item) => (
            <tr key={item.collection_id}>
              <td className={styles.collection_name}>
                <p>
                  <Image
                    src={item.project.img_url}
                    alt="collection logo"
                    width={48}
                    height={48}
                  />
                  {item.project.display_name}
                </p>
              </td>
              <td>
                {item.floor_price.toFixed(2)} <span>SOL</span>
              </td>
              <td>
                1200 <span>SOL</span>
              </td>
              <td className={styles.vol_data}>+100%</td>
              <td>50,000</td>
              <td>10%</td>
              <td>
                <Button filled active padding={16}>
                  Instant buy
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CollectionsTable;
