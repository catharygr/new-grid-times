import styles from "./VisuallyHidden.module.css";
import { useState } from "react";

export default function VisuallyHidden({ children, ...delegated }) {
  const [forceShow, setForceShow] = useState(false);
  return (
    <div
      className={styles.wrapper}
      {...delegated}
    >
      {children}
    </div>
  );
}
