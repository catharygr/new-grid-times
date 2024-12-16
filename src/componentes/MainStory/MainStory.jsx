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
    <div {...delegated}>
      <Link href={`/story/${id}`}>
        <Image
          src={image.src}
          alt={image.alt}
        />
        <h2>{title}</h2>
      </Link>
    </div>
  );
}
