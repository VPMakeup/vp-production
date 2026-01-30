import InstagramRenderer from "./instagramRenderer";

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

async function getInstagramData(): Promise<BeholdResponse | null> {
  try {
    const res = await fetch("https://feeds.behold.so/QDzY3zr0RGM39jEgIuCb", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    return res.json();
  } catch (err) {
    console.error("Failed to fetch Instagram feed:", err);
    return null;
  }
}

export default async function InstagramComponent() {
  const data = await getInstagramData();
  if (!data) return null;

  return <InstagramRenderer data={data} />;
}
