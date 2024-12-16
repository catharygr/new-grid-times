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
    <div {...delegated}>
      <Link href={`/story/${id}`}>
        <picture>
          <source
            srcSet={gamePad2.src}
            media="(min-width: 47.999rem)"
          />
          <source
            media="(max-width: 48rem)"
            srcSet={gamePad.src}
          />
          <Image
            src={gamePad.src}
            alt={image.alt}
            width={gamePad.width}
            height={gamePad.height}
          />
        </picture>
        <h2>{title}</h2>
      </Link>
      <p>
        <span>{location}</span> - {abstract}
      </p>
      <Link href="/story">Continúa leyendo...</Link>
    </div>
  );
}
