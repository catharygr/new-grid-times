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
        <div>
          <p className={styles.p}>{author}</p>
          <h3 className={styles.h3}>{title}</h3>
        </div>
      </article>
    </Link>
  );
}
