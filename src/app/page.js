import styles from "./page.module.css";
import MainStoryGrid from "@/componentes/MainStoryGrid";
import SpecialtyStoryGrid from "@/componentes/SpecialtyStoryGrid";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MainStoryGrid />
        <SpecialtyStoryGrid />
      </main>
    </div>
  );
}
