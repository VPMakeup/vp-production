import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "next-sanity";
import type { SanityImage } from "./sanity";

export type ProjectPreview = {
  _id: string;
  title: string;
  slug: { current: string };
  client?: string;
  role?: string;
  publishedAt?: string;
  titleImage?: SanityImage;
  category?: string;
};

export type Project = ProjectPreview & {
  body?: PortableTextBlock[];
  photographer?: string;
  producer?: string;
  title?: string;
  titleImage?: SanityImageSource;
  publishedAt?: string;
};
