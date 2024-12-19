import Link from "next/link";
import styles from "./MarketCard.module.css";
import Image from "next/image";

const STOCK_GRAPHS_BY_TICKER_SYMBOL = {
  AAPL: "/images/stock-graph-up-1.svg",
  AMC: "/images/stock-graph-up-2.svg",
  ENB: "/images/stock-graph-down-1.svg",
  GOOG: "/images/stock-graph-up-3.svg",
  AMZN: "/images/stock-graph-down-2.svg",
  MSFT: "/images/stock-graph-down-3.svg",
};

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
        <p>{tickerSymbol}</p>
        <div className={styles.graphWrapper}>
          <Image
            src={graphSrc}
            alt="Imagen stock"
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
