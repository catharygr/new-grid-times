import styles from "./OpinionStory.module.css";
export default function OpinionStory({ story }) {
  return (
    <div className="story opinion-story">
      <h1>{story.title}</h1>
    </div>
  );
}
