import Link from "next/link";
import styles from "./OpinionStory.module.css";
import Image from "next/image";

export default function OpinionStory({ id, title, author, avatar }) {
  return (
    <Link href={`/story/${id}`}>
      <article className={styles.wrapper}>
        <Image
          className={styles.imgAvatar}
          src={avatar}
          alt={author}
          priority
        />
        <h1>{title}</h1>
      </article>
    </Link>
  );
}
