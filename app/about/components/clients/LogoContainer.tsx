import fs from "fs";
import path from "path";
import Image from "next/image";
import styles from "./LogoContainer.module.css";

export default function ClientLogosSection() {
  const logosDir = path.join(process.cwd(), "public/brands");
  const logos = fs
    .readdirSync(logosDir)
    .filter((file) => file.endsWith(".svg"));

  return (
    <section className={styles.wrapper}>
      <div className={styles.logosGrid}>
        {logos.map((logo, i) => (
          <div key={i} className={styles.logoItem}>
            <Image
              src={`/brands/${logo}`}
              alt={logo.replace(".svg", "")}
              width={120}
              height={0}
              style={{ height: "auto" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
