import Link from "next/link";
import styles from "./News.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import NewsCard from "@/components/newsCard/NewsCard";
import { url } from "@/utils/api";
const getData = async () => {
  const res = await fetch(`${url}/api/news`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const News = async (slug) => {
  const post = await getData(slug);
  return (
    <div>
      <p className={styles.header}>Parliamentary News</p>
      <div className={styles.bigBox}>
        <div className={styles.largeBox}>
          <div className={styles.news_img}>
            <Image
              src={post[0]?.image}
              alt="large"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className={styles.bg}>
              <div>
                <button className={styles.btn}>News</button>
                <p>{post[0]?.description.slice(0, 300)}...</p>
                <Link href={`/news/${post[0]?._id}`} className={styles.link}>
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.smallBox} ${styles.flexContainer}`}>
          <div className={`${styles.news_img1}`}>
            <Image
              src={post[1]?.image}
              alt="large"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className={styles.bg1}>
              <div>
                <button className={styles.btn}>News</button>
                <p>{post[1]?.description.slice(0, 212)}...</p>
                <Link href={`/news/${post[1]?._id}`} className={styles.link}>
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className={`${styles.news_img1}`}>
            <Image
              src={post[2]?.image}
              alt="large"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className={styles.bg1}>
              <div>
                <button className={styles.btn}>News</button>
                <p>{post[2]?.description.slice(0, 212)}...</p>
                <Link href={`/news/${post[2]?._id}`} className={styles.link}>
                  Read more
                </Link>
              </div>
            </div>
          </div>
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

export default News;
