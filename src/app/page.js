import styles from "./page.module.css";
import MainStoryGrid from "@/componentes/MainStoryGrid";
import SpecialtyStoryGrid from "@/componentes/SpecialtyStoryGrid";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <MainStoryGrid />
        <SpecialtyStoryGrid />
      </main>
    </>
  );
}
