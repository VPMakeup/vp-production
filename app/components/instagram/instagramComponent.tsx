import InstagramFeed from "./instafeed";
import InstagramProfile from "./instaprofile";

type BeholdPost = {
  id: string;
  permalink: string;
  caption?: string;
  sizes: {
    medium: {
      mediaUrl: string;
    };
  };
};

type BeholdResponse = {
  username: string;
  biography?: string;
  profilePictureUrl: string;
  followersCount?: number;
  followsCount?: number;
  website?: string;
  posts: BeholdPost[];
};

async function getInstagramData(): Promise<BeholdResponse> {
  const res = await fetch("https://feeds.behold.so/QDzY3zr0RGM39jEgIuCb", {
    next: { revalidate: 3600 }, // update hourly
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Instagram feed");
  }

  return res.json();
}

export default async function InstagramComponent() {
  const data = await getInstagramData();

  return (
    <section aria-label="Instagram feed">
      <InstagramProfile profile={data} />
      <InstagramFeed posts={data.posts} />
    </section>
  );
}
