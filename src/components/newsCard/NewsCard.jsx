import Image from "next/image";
import styles from "./NewsCard.module.css";
import Link from "next/link";
import { news } from "@/app/api/news/data";
import { CiClock2 } from "react-icons/ci";
const NewsCard = () => {
  return (
    <div className={styles.news}>
      {news.map((post, id) => {
        return (
          <div
            key={id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              gap: "20px",
            }}
          >
            <div>
              <Image src="/assets/tinubu.svg" width={350} height={215} alt="" />
            </div>
            <div className={styles.news_details}>
              <p>{post.title}</p>
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
                  {post.date}
                </p>
              </div>
              <p>{post.description.slice(0, 255)}...</p>
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
