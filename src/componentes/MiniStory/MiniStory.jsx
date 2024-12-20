import Link from "next/link";
import styles from "./MiniStory.module.css";
import Image from "next/image";

export default function MiniStory({ id, image, title }) {
  return (
    <Link href={`/story/${id}`}>
      <article className={styles.wrapper}>
        <Image
          className={styles.img}
          src={image}
          alt={title}
        />
        <h3 className={styles.h3}>{title}</h3>
      </article>
    </Link>
  );
}
