import Link from "next/link";

export default function SectionTitle({ children, cornerLink }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{children}</h2>
      {cornerLink && (
        <Link
          className={styles.a}
          href={cornerLink.href}
        >
          {cornerLink.content}
        </Link>
      )}
    </div>
  );
}
