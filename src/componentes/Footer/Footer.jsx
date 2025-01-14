import { Facebook, Instagram } from "react-feather";
import styles from "./Footer.module.css";
import Link from "next/link";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.maxWidthWrapper}>
        <div className={styles.topRow}>
          <nav>
            <ul className={styles.topNavList}>
              <li>
                <Link href="/">Sobre nosotros</Link>
              </li>
              <li>
                <Link href="/">Notas de prensa</Link>
              </li>
              <li>
                <Link href="/">Contáctanos</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.social}>
            <Link href="/">
              <VisuallyHidden>Visita The Grid Times en Facebook</VisuallyHidden>
              <Facebook size={20} />
            </Link>
            <Link href="/">
              <VisuallyHidden>
                Visita The Grid Times en Instagram
              </VisuallyHidden>
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
