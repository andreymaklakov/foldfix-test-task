export interface IReceivedCollectionData {
  collection: ICollectionItem[];
}

export interface ICollectionItem {
  project_id: string;
  collection_id: string;
  floor_price: number;
  project: IProject;
}

export interface IProject {
  supply: number;
  website?: string;
  twitter?: string;
  discord?: string;
  img_url: string;
  banner_uri: string;
  is_verified: boolean;
  display_name: string;
  project_slug: string;
  tensor_slug: string;
  tensor_wlSlug?: string;
  tensor_whitelist: string;
}
