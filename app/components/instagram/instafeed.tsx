import Image from "next/image";
import styles from "./instafeed.module.css";

type Post = {
  id: string;
  permalink: string;
  caption?: string;
  sizes?: {
    medium?: {
      mediaUrl?: string;
    };
  };
};

export default function InstagramFeed({ posts }: { posts: Post[] }) {
  return (
    <div className={styles.grid}>
      {posts.map((post) =>
        post.sizes?.medium?.mediaUrl ? (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.post}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={post.sizes.medium.mediaUrl}
                alt={post.caption || "Instagram post"}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 50vw, 25vw"
                unoptimized
              />
            </div>
          </a>
        ) : null
      )}
    </div>
  );
}
