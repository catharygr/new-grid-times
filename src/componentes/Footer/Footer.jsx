import { Facebook, Instagram } from "react-feather";
import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.maxWidthWrapper}>
        <div className={styles.topRow}>
          <nav>
            <ul className={styles.topNavList}>
              <li>
                <Link href="/">Acerca de</Link>
              </li>
              <li>
                <Link href="/">Comunicados de Prensa</Link>
              </li>
              <li>
                <Link href="/">Contáctenos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
