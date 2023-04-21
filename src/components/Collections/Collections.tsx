import { FC } from "react";
import { MdOutlineTableRows } from "react-icons/md";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

import ToggleBtns from "../ToggleBtns/ToggleBtns";
import CollectionsTable from "../CollectionsTable/CollectionsTable";
import { IReceivedCollectionData } from "@/interfaces/collection";
import CollectionCard from "../CollectionCard/CollectionCard";

import styles from "./Collections.module.scss";

const Collections: FC<IReceivedCollectionData> = ({ collection }) => {
  return (
    <div className={styles.collections_container}>
      <div className={styles.collections_title}>
        <h3>Trending Collections</h3>

        <ToggleBtns
          fistContent={<MdOutlineTableRows size={24} />}
          secondContent={<HiOutlineSquares2X2 size={24} />}
        />
      </div>

      <div className={styles.collection_sm}>
        {collection.length &&
          collection.map((item) => (
            <CollectionCard key={item.collection_id} item={item} />
          ))}
      </div>

      <div className={styles.collection_big}>
        <CollectionsTable collection={collection} />
      </div>
    </div>
  );
};

export default Collections;
