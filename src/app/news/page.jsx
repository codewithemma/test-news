import Link from "next/link";
import styles from "./News.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import NewsCard from "@/components/newsCard/NewsCard";
import { posts } from "./dummy";
const page = () => {
  return (
    <div>
      <p className={styles.header}>Parliamentary News</p>
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
              <div>
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
                <div>
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
