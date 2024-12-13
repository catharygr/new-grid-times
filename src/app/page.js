import styles from "./page.module.css";
import MainStoryGrid from "@/componentes/MainStoryGrid";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MainStoryGrid />
      </main>
    </div>
  );
}
