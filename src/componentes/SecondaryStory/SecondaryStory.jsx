import Link from "next/link";
import styles from "./SecondaryStory.module.css";
import Image from "next/image";
import politiciansBig from "../../../public/images/politicians@2x.png";
import politicians from "../../../public/images/politicians.jpg";
import oldCarBig from "../../../public/images/old-car@2x.jpg";
import oldCar from "../../../public/images/old-car.jpg";

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
        <picture>
          <source
            srcSet={politiciansBig.src}
            media="(max-width: 47.999rem)"
          />
          <source
            media="(min-width: 48rem)"
            srcSet={politicians.src}
          />
          <source
            srcSet={oldCarBig.src}
            media="(max-width: 47.999rem)"
          />
          <source
            media="(min-width: 48rem)"
            srcSet={oldCar.src}
          />
          <source
            srcSet={politiciansBig.src}
            media="(max-width: 47.999rem)"
          />
          <source
            media="(min-width: 48rem)"
            srcSet={politicians.src}
          />
          <Image
            className={styles.img}
            src={politicians.src}
            alt={image.alt}
            width={politicians.width}
            height={politicians.height}
          />
        </picture>
        <h3>{title}</h3>
      </article>
    </Link>
  );
}
