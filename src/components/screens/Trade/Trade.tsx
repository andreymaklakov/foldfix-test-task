import { FC } from "react";

import Banner from "@/components/Banner/Banner";
import Layout from "@/components/Layout/Layout";
import Collections from "@/components/Collections/Collections";
import { IReceivedCollectionData } from "@/interfaces/collection";

const Trade: FC<IReceivedCollectionData> = ({ collection }) => {
  return (
    <Layout title="Trade" description="Trade descrription......">
      <Banner />

      <Collections collection={collection} />
    </Layout>
  );
};

export default Trade;
