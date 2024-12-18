import Link from "next/link";
import styles from "./MainStory.module.css";
import Image from "next/image";

export default function MainStory({
  id,
  title,
  image,
  location,
  abstract,
  ...delegated
}) {
  return (
    <article
      className={styles.wrapper}
      {...delegated}
    >
      <Link href={`/story/${id} `}>
        <Image
          className={styles.img}
          src={image.srcSmall}
          alt={image.alt}
          priority
        />

        <h2 className={styles.h2}>{title}</h2>
      </Link>
      <p className={styles.p}>
        <span className={styles.location}>{location}</span> - {abstract}
      </p>
      <Link
        className={styles.readMore}
        href="/story"
      >
        Continúa leyendo...
      </Link>
    </article>
  );
}
