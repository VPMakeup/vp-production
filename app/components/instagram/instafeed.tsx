// components/InstagramFeed.tsx
import data from "../../data/instagram.json";
import Image from "next/image";
import styles from "./instafeed.module.css";

export default function InstagramFeed() {
  return (
    <div className={styles.grid}>
      {data.posts.map((post) => (
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
            />
          </div>
        </a>
      ))}
    </div>
  );
}
