import Link from "next/link";
import styles from "./News.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import NewsCard from "@/components/newsCard/NewsCard";
import { posts } from "./dummy";
const page = () => {
  return (
    <div>
      <div className={styles.bigBox}>
        <div className={styles.largeBox}>
          <div className={styles.news_img}>
            <Image
              src={posts[0].img}
              alt="large"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className={styles.bg}>
              <div style={{ width: "500px" }}>
                <button className={styles.btn}>News</button>
                <p>{posts[0].description}</p>
                <Link href="/" className={styles.link}>
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.smallBox} ${styles.flexContainer}`}>
          {posts?.slice(1).map((item) => (
            <div className={`${styles.news_img1}`} key={item.id}>
              <Image
                src={item.img}
                alt="large"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
              <div className={styles.bg1}>
                <div style={{ width: "200px" }}>
                  <button className={styles.btn}>News</button>
                  <p>{posts[0].description}</p>
                  <Link href="/" className={styles.link}>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className={styles.header}>Parliamentary News</p>
      {/* <div className={styles.grid}>
        <div className={styles.news_img}>
          <Image
            src="/assets/1723.jpg"
            alt="ood"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className={styles.bg}>
            <div style={{ width: "500px" }}>
              <button className={styles.btn}>News</button>
              <p>
                HOUSE OF REPRESENTATIVES INAUGURATES CONSTITUTION REVIEW
                COMMITTEE (27/02/2024)
              </p>
              <Link href="/" className={styles.link}>
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.news_img}>
            <Image
              src="/assets/1723.jpg"
              alt="ood"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className={styles.bg}>
              <div style={{ width: "500px" }}>
                <button className={styles.btn}>News</button>
                <p>
                  HOUSE OF REPRESENTATIVES INAUGURATES CONSTITUTION REVIEW
                  COMMITTEE (27/02/2024)
                </p>
                <Link href="/" className={styles.link}>
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.news_img}>
            <Image
              src="/assets/1723.jpg"
              alt="ood"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className={styles.bg}>
              <div style={{ width: "500px" }}>
                <button className={styles.btn}>News</button>
                <p>
                  HOUSE OF REPRESENTATIVES INAUGURATES CONSTITUTION REVIEW
                  COMMITTEE (27/02/2024)
                </p>
                <Link href="/" className={styles.link}>
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.box}>
        <p>Parliarmentary News From the House of Representatives</p>
      </div>
      <div className={styles.grid}>
        <NewsCard />
        <div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default page;
