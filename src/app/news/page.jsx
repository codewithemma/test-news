import Link from "next/link";
import styles from "./News.module.css";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <p className={styles.header}> Parliamentary News</p>
      <div className={styles.grid}>
        <div className={styles.comp1}>
          <div className={styles.bg}>
            <button className={styles.btn}>News</button>
            <p>
              HOUSE OF REPRESENTATIVES INAUGURATES CONSTITUTION REVIEW COMMITTEE
              (27/02/2024)
            </p>
            <Link href="/" className={styles.link}>
              Read more
            </Link>
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.comp2}>
            <div className={styles.bg1}>
              <button className={styles.btn}>News</button>
              <p>
                SENATE CONFIRMS CBN GOVERNOR, 11 OTHERS AS MEMBERS OF MONETARY
                POLICY COMMITTEE (22/02/2024)
              </p>
              <Link href="/" className={styles.link}>
                Read more
              </Link>
            </div>
          </div>
          <div className={styles.comp3}>
            <div className={styles.bg2}>
              <button className={styles.btn}>News</button>
              <p>
                REPS PLEDGES TO WORK WITH EXECUTIVE TO TACKLE NATIONAL SECURITY
                (26/02/2024)
              </p>
              <Link href="/" className={styles.link}>
                Read more
              </Link>
            </div>
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
          <Link href="/" className={styles.btn}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
