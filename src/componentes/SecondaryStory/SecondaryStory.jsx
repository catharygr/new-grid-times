import Link from "next/link";
import styles from "./SecondaryStory.module.css";
import Image from "next/image";

export default function SecondaryStory({
  id,
  title,
  image,
  location,
  abstract,
}) {
  return (
    <Link href={`/story/${id}`}>
      <article className={styles.wrapper}>
        <Image
          className={styles.img}
          src={image.srcSmall}
          alt={image.alt}
          priority
        />

        <h3>{title}</h3>
      </article>
    </Link>
  );
}
