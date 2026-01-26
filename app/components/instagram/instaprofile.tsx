// components/InstagramProfile.tsx
import Image from "next/image";
import data from "../../data/instagram.json";
import styles from "./instaprofile.module.css";

import ContactLink from "../contactlink/ContactLink";

export default function InstagramProfile() {
  return (
    <div className={styles.profile_container}>
      <div className={styles.avatar_wrapper}>
        <Image
          src={data.profilePictureUrl}
          alt={data.username}
          fill
          className={styles.profile_image}
        />
      </div>

      <div className={styles.bio_container}>
        <ContactLink
          href="https://instagram.com/victoriapolandmakeup"
          label={`@${data.username}`}
          external
        />

        <div className={styles.stats}>
          <span>
            <strong>{data.followersCount}</strong> followers
          </span>
          <span>
            <strong>{data.followsCount}</strong> following
          </span>
        </div>

        <p className={styles.text}>{data.biography}</p>

        {data.website && (
          <a
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.website}
          >
            {data.website}
          </a>
        )}
      </div>
    </div>
  );
}
