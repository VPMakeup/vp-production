import styles from "./Map.module.css";

export default function Map() {
  return (
    <div className={styles.mapWrapper}>
      <iframe
        title="Map for Location of Victoria Poland's Studio London"
        className={styles.map}
        src="https://maps.google.com/maps?width=800&height=600&hl=en&q=D226%20Park%20Hall%20Business%20Centre%2C%2040%20Martell%20Road%2C%20London%2C%20England%2C%20SE21%208EN&t=&z=14&ie=UTF8&iwloc=B&output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </div>
  );
}
