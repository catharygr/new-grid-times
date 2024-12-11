import { format } from "date-fns";
import styles from "./Logo.module.css";
import Link from "next/link";

export default function Logo(prosp) {
  return (
    <div className={styles.wrapper}>
      <Link
        href="/"
        {...prosp}
      >
        New Grid Times
      </Link>
      <p className={styles.todaysDate}></p>
    </div>
  );
}
