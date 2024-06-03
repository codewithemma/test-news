import Menu from "@/components/menu/Menu";
import Image from "next/image";
import styles from "./Post.module.css";
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/news/${slug}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error);
  }
  return res.json();
};
const SingleNews = async ({ params }) => {
  const { slug } = params;
  const news = await getData(slug);
  return (
    <div>
      <p className={styles.news_header}>{news.title}</p>
      <p className={styles.timeline}>{news.date}</p>
      <div className={styles.img_container}>
        <Image src="/assets/neww.svg" alt="news" fill priority />
      </div>
      <div className={styles.flex}>
        <div
          className={styles.post}
          dangerouslySetInnerHTML={{ __html: news.content }}
        />
        <div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
