import styles from "./Header.module.css";
import { Menu, Search, User } from "react-feather";

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
        </div>
      </div>
      <div className={styles.mainHeader}></div>
    </header>
  );
}
