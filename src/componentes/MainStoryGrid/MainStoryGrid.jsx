import { MAIN_STORY, OPINION_STORIES, SECONDARY_STORIES } from "@/data";
import styles from "./MainStoryGrid.module.css";
import MainStory from "../MainStory";
import SecondaryStory from "../SecondaryStory";
import OpinionStory from "../OpinionStory";
import SectionTitle from "../SectionTitle";
import Advertisement from "../Advertisement";

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
        <SectionTitle>Opinión</SectionTitle>
        <div className={styles.opinionStoryList}>
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
      <section className={styles.advertisementSection}>
        <Advertisement />
      </section>
    </div>
  );
}
