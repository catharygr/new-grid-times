export default function Advertisement(prosp) {
  return (
    <div
      className={styles.wrapper}
      {...prosp}
    >
      <p>Anuncio</p>
      <div className={styles.box}></div>
    </div>
  );
}
