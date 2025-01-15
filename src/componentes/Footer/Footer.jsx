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
        <div className={styles.mainNavArea}>
          <nav>
            <h2 className={styles.mainNavHeading}>Descubre Contenido</h2>
            <ul className={styles.mainNavList}>
              <li>
                <Link href="/pol">Política</Link>
              </li>
              <li>
                <Link href="/wrl">Mundo</Link>
              </li>
              <li>
                <Link href="/fin">Finanzas</Link>
              </li>
              <li>
                <Link href="/spo">Deportes y Entretenimiento</Link>
              </li>
              <li>
                <Link href="/oped">Opinión y Editorial</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h2 className={styles.mainNavHeading}>Sitios Regionales</h2>
            <ul className={styles.mainNavList}>
              <li>
                <Link href="/pol">New Grid Estados Unidos</Link>
              </li>
              <li>
                <Link href="/wrl">New Grid Europa</Link>
              </li>
              <li>
                <Link href="/fin">New Grid Asia</Link>
              </li>
              <li>
                <Link href="/spo">New Grid Marte y Más Allá</Link>
              </li>
              <li>
                <Link href="/oped">New Grid Australia</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h2 className={styles.mainNavHeading}>Carreras</h2>
            <ul className={styles.mainNavList}>
              <li>
                <Link href="/pol">Open Positions</Link>
              </li>
              <li>
                <Link href="/wrl">Meet the team</Link>
              </li>
              <li>
                <Link href="/fin">Company Culture</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h2 className={styles.mainNavHeading}>Sitios Regionales</h2>
            <ul className={styles.mainNavList}>
              <li>
                <Link href="/pol">New Grid Estados Unidos</Link>
              </li>
              <li>
                <Link href="/wrl">New Grid Europa</Link>
              </li>
              <li>
                <Link href="/fin">New Grid Asia</Link>
              </li>
              <li>
                <Link href="/spo">New Grid Marte y Más Allá</Link>
              </li>
              <li>
                <Link href="/oped">New Grid Australia</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
