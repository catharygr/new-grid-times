import styles from "./Header.module.css";
import { Menu, Search, User } from "react-feather";
import Logo from "../Logo";

export default function Header() {
  return (
    <header>
      <div className={styles.superHeader}>
        <div className={styles.mainHeader}></div>
        <div className={styles.row}>
          <div className={styles.actionGroup}>
            <button className={styles.btnSearch}>
              <Search size={24} />
            </button>
            <button className={styles.btnMenu}>
              <Menu size={24} />
            </button>
          </div>
          <div className={styles.actionGroup}>
            <button className={styles.btnUser}>
              <User size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.mainHeader}>
        <Logo />
      </div>
    </header>
  );
}
