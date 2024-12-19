import styles from "./Advertisement.module.css";

export default function Advertisement(prosp) {
  return (
    <div
      className={styles.wrapper}
      {...prosp}
    >
      <p className={styles.p}>Anuncio</p>
      <div className={styles.box}></div>
    </div>
  );
}
