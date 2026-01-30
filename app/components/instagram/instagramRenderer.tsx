"use client";

import InstagramFeed from "./instafeed";
import InstagramProfile from "./instaprofile";

type BeholdPost = {
  id: string;
  permalink: string;
  caption?: string;
  sizes?: {
    medium?: {
      mediaUrl?: string;
    };
  };
};

type BeholdResponse = {
  username: string;
  biography?: string;
  profilePictureUrl?: string;
  followersCount?: number;
  followsCount?: number;
  website?: string;
  posts: BeholdPost[];
};

export default function InstagramRenderer({ data }: { data: BeholdResponse }) {
  return (
    <section aria-label="Instagram feed">
      {data.username && <InstagramProfile profile={data} />}
      {data.posts?.length > 0 && <InstagramFeed posts={data.posts} />}
    </section>
  );
}
