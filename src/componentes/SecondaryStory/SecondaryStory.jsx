import Link from "next/link";
import styles from "./SecondaryStory.module.css";
import Image from "next/image";

export default function SecondaryStory({ id, title, image, abstract }) {
  return (
    <Link href={`/story/${id}`}>
      <article className={styles.wrapper}>
        <Image
          className={styles.img}
          src={image.srcSmall}
          alt={image.alt}
          priority
        />
        <h2 className={styles.hs}>{title}</h2>
        <div className={styles.abstractWrapper}>
          <p className={styles.p}>{abstract}</p>
        </div>
      </article>
    </Link>
  );
}
