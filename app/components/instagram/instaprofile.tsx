import Image from "next/image";
import styles from "./instaprofile.module.css";
import ContactLink from "../contactlink/ContactLink";

type Profile = {
  username: string;
  biography?: string;
  profilePictureUrl: string;
  followersCount?: number;
  followsCount?: number;
  website?: string;
};

export default function InstagramProfile({ profile }: { profile: Profile }) {
  return (
    <div className={styles.profile_container}>
      <div className={styles.avatar_wrapper}>
        <Image
          src={profile.profilePictureUrl}
          alt={profile.username}
          fill
          className={styles.profile_image}
          sizes="96px"
        />
      </div>

      <div className={styles.bio_container}>
        <ContactLink
          href={`https://instagram.com/${profile.username}`}
          label={`@${profile.username}`}
          external
        />

        <div className={styles.stats}>
          {profile.followersCount !== undefined && (
            <span>
              <strong>{profile.followersCount.toLocaleString()}</strong>{" "}
              followers
            </span>
          )}
          {profile.followsCount !== undefined && (
            <span>
              <strong>{profile.followsCount.toLocaleString()}</strong> following
            </span>
          )}
        </div>

        {profile.biography && (
          <p className={styles.text}>{profile.biography}</p>
        )}

        {profile.website && (
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.website}
          >
            {profile.website}
          </a>
        )}
      </div>
    </div>
  );
}
