import Link from "next/link";
import styles from "./News.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import NewsCard from "@/components/newsCard/NewsCard";
import { posts } from "./dummy";
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
  const post2 = await getData(slug);
  return (
    <div>
      <p className={styles.header}>Parliamentary News</p>
      <div className={styles.bigBox}>
        <div className={styles.largeBox}>
          <div className={styles.news_img}>
            <Image
              src={post2[0].image}
              alt="large"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className={styles.bg}>
              <div>
                <button className={styles.btn}>News</button>
                <p>{post2[0].description}</p>
                <Link href={`/news/${post2[0]._id}`} className={styles.link}>
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.smallBox} ${styles.flexContainer}`}>
          <div className={`${styles.news_img1}`}>
            <Image
              src={post2[1].image}
              alt="large"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className={styles.bg1}>
              <div>
                <button className={styles.btn}>News</button>
                <p>{post2[1].description}</p>
                <Link href={`/news/${post2[1]._id}`} className={styles.link}>
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className={`${styles.news_img1}`}>
            <Image
              src={post2[2].image}
              alt="large"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className={styles.bg1}>
              <div>
                <button className={styles.btn}>News</button>
                <p>{post2[2].description}</p>
                <Link href={`/news/${post2[2]._id}`} className={styles.link}>
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
