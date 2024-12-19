import Link from "next/link";
import styles from "./MarketCard.module.css";
import Image from "next/image";
import { STOCK_GRAPHS_BY_TICKER_SYMBOL } from "@/data";

export default function MarketCard({
  tickerSymbol,
  exchangeName,
  percentChange,
}) {
  const graphSrc = STOCK_GRAPHS_BY_TICKER_SYMBOL[tickerSymbol];
  const percentageSymbol = percentChange >= 0 ? "+" : "";
  const percentageColor =
    percentChange >= 0 ? "var(--color-secondary)" : "var(--color-urgent)";
  return (
    <Link
      className={styles.wrapperLink}
      href={`/stocks/${tickerSymbol}`}
    >
      <div className={styles.row}>
        <p className={styles.p}>{tickerSymbol}</p>
        <div className={styles.graphWrapper}>
          <Image
            className={styles.graphImg}
            src={graphSrc}
            alt="Imagen stock"
            width={40}
            height={20}
            priority
          />
        </div>
      </div>
      <div className={styles.row}>
        <span className={styles.exchange}>{exchangeName}</span>
        <span
          className={styles.percentage}
          style={{ "--color": percentageColor }}
        >
          {percentageSymbol}
          {percentChange}%
        </span>
      </div>
    </Link>
  );
}
