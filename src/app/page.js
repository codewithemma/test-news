import News from "@/components/news/News";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div>
      <p className={styles.header}> Parliamentary News</p>
      <div className={styles.grid}>
        <div className={styles.comp1}>
          <News
            text={
              "HOUSE OF REPRESENTATIVES INAUGURATES CONSTITUTION REVIEW COMMITTEE (27/02/2024)"
            }
            className={styles.bg}
          />
        </div>
        <div className={styles.flex}>
          <div className={styles.comp2}>
            <News
              text={
                "HOUSE OF REPRESENTATIVES INAUGURATES CONSTITUTION REVIEW COMMITTEE (27/02/2024)"
              }
              className={styles.bg1}
            />
          </div>
          <div className={styles.comp3}>
            <News
              text={
                "HOUSE OF REPRESENTATIVES INAUGURATES CONSTITUTION REVIEW COMMITTEE (27/02/2024)"
              }
              className={styles.bg1}
            />
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <p>Parliarmentary News From the House of Representatives</p>
      </div>
    </div>
  );
}
