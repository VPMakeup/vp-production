// app/types/sanity.ts

export type SanityImageAsset = {
  _id: string;
  url: string;
  metadata: {
    dimensions: {
      width: number;
      height: number;
    };
  };
};

export type SanityImage = {
  _type: "image";
  asset: SanityImageAsset;
  alt?: string;
};
