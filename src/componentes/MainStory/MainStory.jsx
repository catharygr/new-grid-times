import Link from "next/link";
import styles from "./MainStory.module.css";
import Image from "next/image";
import gamePad from "../../../public/images/gamepad.jpg";
import gamePad2 from "../../../public/images/gamepad@2x.jpg";

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
      <Link href={`/story/${id}`}>
        <picture>
          <source
            srcSet={gamePad2.src}
            media="(max-width: 47.999rem)"
          />
          <source
            media="(min-width: 48rem)"
            srcSet={gamePad.src}
          />
          <Image
            className={styles.img}
            src={gamePad.src}
            alt={image.alt}
            width={gamePad.width}
            height={gamePad.height}
          />
        </picture>
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
