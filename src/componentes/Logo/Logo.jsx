import format from "date-fns/format";
import styles from "./Logo.module.css";
import Link from "next/link";

export default function Logo(prosp) {
  return (
    <div className={styles.wrapper}>
      <Link
        className={styles.a}
        href="/"
        {...prosp}
      >
        New Grid Times
      </Link>
      <p className={styles.todaysDate}>
        {format(new Date(), "EEEE, MMM do, yyyy")}
      </p>
    </div>
  );
}
