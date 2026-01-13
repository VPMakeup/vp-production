// components/categoryContainer/CategoryInfoBlock.tsx
import Link from "next/link";
import styles from "./CategoryInfoBlock.module.css";

type Props = {
  text: string;
  href: string;
};

export default function CategoryInfoBlock({ text, href }: Props) {
  return (
    <Link href={href} className={styles.block}>
      <p>{text}</p>
      <span>View latest →</span>
    </Link>
  );
}
