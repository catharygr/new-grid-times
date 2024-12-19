import styles from "./SpecialtyStoryGrid.module.css";
import SectionTitle from "../SectionTitle";
import { MARKET_DATA, SPORTS_STORIES } from "@/data";

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
      </section>
      <div>
        {/* {MARKET_DATA.map((data) => (
          <MarketCard
            key={data.tickerSymbol}
            {...data}
          />
        ))} */}
      </div>
    </div>
  );
}
