import Image from "next/image";
import styles from "./NewsCard.module.css";
import Link from "next/link";
// import { news } from "@/app/api/news/data";
import { CiClock2 } from "react-icons/ci";
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/news", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const NewsCard = async () => {
  const news = await getData();

  return (
    <div className={styles.news}>
      {news.map((post) => {
        return (
          <div key={post._id} className={styles.news_item}>
            <div>
              {post.image && (
                <Image src={post.image} width={350} height={215} alt="" />
              )}
            </div>
            <div className={styles.news_details}>
              <p className={styles.title}>{post.title}</p>
              <div className={styles.timeline}>
                <CiClock2 />
                <p
                  style={{
                    fontSize: "10px",
                    fontWeight: "400",
                    color: "#575757",
                    margin: "10px 0",
                  }}
                  className={styles.date}
                >
                  {post.createdAt}
                </p>
              </div>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              <Link href={`/news/${post.slug}`} className={styles.btn}>
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCard;
