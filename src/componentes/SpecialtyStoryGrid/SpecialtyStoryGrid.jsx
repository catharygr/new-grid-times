import styles from "./SpecialtyStoryGrid.module.css";
import { MARKET_DATA, SPORTS_STORIES } from "@/data";
import SectionTitle from "../SectionTitle";
import MarketCard from "../MarketCard";

export default function SpecialtyStoryGrid() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.marketsSection}>
        <SectionTitle
          cornerLink={{
            href: "/markets",
            content: "Visitar datos de Mercados »",
          }}
        >
          Mercados
        </SectionTitle>
        <div className={styles.marketCards}>
          {MARKET_DATA.map((data) => (
            <MarketCard
              key={data.tickerSymbol}
              {...data}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
