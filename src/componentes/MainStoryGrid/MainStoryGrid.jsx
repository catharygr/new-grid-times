import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "@/data";
import styles from "./MainStoryGrid.module.css";
import MainStory from "../MainStory/MainStory";

export default function MainStoryGrid() {
  return (
    <div className={styles.wrapper}>
      <section>
        <MainStory {...MAIN_STORY} />
      </section>
    </div>
  );
}
