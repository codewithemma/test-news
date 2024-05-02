import News from "@/components/news/News";
import styles from "./page.module.css";
import Image from "next/image";
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
      <div className={styles.news}>
        <div>
          <Image src="/assets/tinubu.svg" width={350} height={215} alt="" />
        </div>{" "}
        <div className={styles.news_details}>
          <p>
            10th NASS Leadership: Opposition Parties Brace For Tough Fight With
            APC
          </p>
          <div>
            icon
            <p></p>
          </div>
          <p>
            The Green Chamber on Monday, February 26, 2024 said it will address
            the pitfalls that led to the failure of past Constitution Amendments
            in the country by working closely with...
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}
