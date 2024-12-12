import styles from "./Header.module.css";
import { Menu, Search, User } from "react-feather";
import Logo from "../Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className={styles.superHeader}>
        <div className={styles.row}>
          <div className={styles.actionGroup}>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </div>
          <div className={styles.actionGroup}>
            <button>
              <User size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.mainHeader}>
        <div className={styles.desktopActionGroup}>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </div>
        <Logo />
        <div className={styles.subscribeWrapper}>
          <button className={styles.button}>Suscríbete</button>
          <Link
            className={styles.subLink}
            href="/"
          >
            ¿Ya eres suscriptor?
          </Link>
        </div>
      </div>
    </header>
  );
}
