import { Facebook, Instagram } from "react-feather";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.maxWidthWrapper}>
        <div className={styles.topRow}>
          <nav>
            <ul className={styles.topNavList}></ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
