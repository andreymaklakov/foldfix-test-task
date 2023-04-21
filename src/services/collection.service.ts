import axios from "axios";

import { IReceivedCollectionData } from "@/interfaces/collection";

axios.defaults.baseURL = "https://robox-test.herokuapp.com/api";

const CollectionUrl = "/collection";

const options = {
  headers: {
    apikey: "test123",
  },
};

export const CollectionService = {
  getCollection: async () => {
    const { data } = await axios.get<IReceivedCollectionData>(
      CollectionUrl,
      options
    );

    return data;
  },
};
