import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "@/data";
import styles from "./MainStoryGrid.module.css";
import MainStory from "../MainStory/MainStory";
import SecondaryStory from "../SecondaryStory";

export default function MainStoryGrid() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.mainStorySection}>
        <MainStory {...MAIN_STORY} />
      </section>
      <section className={styles.secondaryStorySection}>
        <div className={styles.storyList}>
          {SECONDARY_STORIES.map((story) => (
            <SecondaryStory
              key={story.id}
              {...story}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
