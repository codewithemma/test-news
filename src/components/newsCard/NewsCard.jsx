import Image from "next/image";
import styles from "./NewsCard.module.css";
import Link from "next/link";
import { CiClock2 } from "react-icons/ci";
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
const NewsCard = async () => {
  const news = await getData();
  if (!news) {
    return <div>no items to see here</div>;
  }
  return (
    <div className={styles.news}>
      {news.slice(0, 5).map((post) => {
        return (
          <div key={post._id} className={styles.news_item}>
            <div className={styles.img_container}>
              {post.image && (
                <Image
                  src={post.image}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="news_img"
                  sizes="(max-width: 768px) 100vw 700px"
                />
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
                  }}
                  className={styles.date}
                >
                  {post.createdAt.slice(0, 10)}
                </p>
              </div>
              <p className={styles.description}>
                {post.description.slice(0, 200)}...
              </p>
              <Link href={`/news/${post._id}`} className={styles.btn_readmore}>
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
