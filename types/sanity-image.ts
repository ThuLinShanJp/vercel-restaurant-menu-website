/** Sanity image field shape (asset reference or expanded asset). */
export type SanityImageAsset = {
  _id?: string;
  _ref?: string;
  url?: string;
};

export type SanityImage = {
  asset?: SanityImageAsset | null;
  alt?: string | null;
};
