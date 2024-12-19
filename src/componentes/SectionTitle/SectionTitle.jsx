export default function SectionTitle({ children, cornerLink }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
}
