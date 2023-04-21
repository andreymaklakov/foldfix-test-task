import { NextPage, GetStaticProps } from "next";

import Trade from "@/components/screens/Trade/Trade";
import { IReceivedCollectionData } from "@/interfaces/collection";
import { CollectionService } from "@/services/collection.service";

const TradePage: NextPage<IReceivedCollectionData> = ({ collection }) => {
  return <Trade collection={collection} />;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const data = await CollectionService.getCollection();

    return {
      props: {
        collection: data.collection,
      },
    };
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      collection: [],
    },
  };
};

export default TradePage;
