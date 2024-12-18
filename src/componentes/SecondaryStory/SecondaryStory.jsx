import Link from "next/link";
import styles from "./SecondaryStory.module.css";
import Image from "next/image";
import politiciansBig from "../../../public/images/politicians@2x.png";
import politicians from "../../../public/images/politicians.jpg";
import oldCarBig from "../../../public/images/old-car@2x.jpg";
import oldCar from "../../../public/images/old-car.jpg";
import fashionBig from "../../../public/images/fashion@2x.jpg";
import fashion from "../../../public/images/fashion.jpg";

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
            srcSet={fashionBig.src}
            media="(max-width: 47.999rem)"
          />
          <source
            media="(min-width: 48rem)"
            srcSet={fashion.src}
          />
          <Image
            className={styles.img}
            src={politicians.src}
            alt={image.alt}
            width={politicians.width}
            height={politicians.height}
          />
          <Image
            className={styles.img}
            src={oldCar.src}
            alt={image.alt}
            width={oldCar.width}
            height={oldCar.height}
          />
          <Image
            className={styles.img}
            src={fashion.src}
            alt={image.alt}
            width={fashion.width}
            height={fashion.height}
          />
        </picture>
        <h3>{title}</h3>
      </article>
    </Link>
  );
}
