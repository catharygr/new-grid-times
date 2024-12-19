import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "@/data";
import styles from "./MainStoryGrid.module.css";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";

export default function MainStoryGrid() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.mainStorySection}>
        <MainStory {...MAIN_STORY} />
      </section>
      <section className={styles.secondaryStorySection}>
        <div className={styles.storyList}>
          {SECONDARY_STORIES.map((story) => (
            <div
              className={styles.verticalStoryWrapper}
              key={story.id}
            >
              <SecondaryStory {...story} />
            </div>
          ))}
        </div>
      </section>
      <section className={styles.opinionStorySection}>
        <div className={styles.storyList}>
          {OPINION_STORIES.map((story) => (
            <div
              className={styles.verticalStoryWrapper}
              key={story.id}
            >
              <OpinionStory {...story} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
