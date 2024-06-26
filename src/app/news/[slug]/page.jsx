import Menu from "@/components/menu/Menu";
import Image from "next/image";
import styles from "./Post.module.css";
import { url } from "@/utils/api";
import { CiClock2 } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { formatDateToRelative } from "@/utils/formatDate";
import Link from "next/link";
const getData = async (slug) => {
  const res = await fetch(`${url}/api/news/${slug}`, {
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
      <p className={styles.news_header}>{news?.title}</p>
      <div className={styles.details}>
        <div className={styles.timeline}>
          <CiClock2 />
          <p
            style={{
              fontSize: "16px",
              fontWeight: "400",
              color: "#575757",
            }}
            className={styles.date}
          >
            {formatDateToRelative(news.createdAt)}
          </p>
        </div>
        <div>
          <Link href={`/news/${news.slug}/edn`}>
            <FaRegEdit size={"20px"} />
          </Link>
          <Link href="">
            <FaRegTrashAlt size={"20px"} />
          </Link>
        </div>
      </div>
      <div className={styles.img_container}>
        <Image src={news.image} alt="news" fill priority />
      </div>
      <div className={styles.flex}>
        <div
          className={styles.post}
          dangerouslySetInnerHTML={{ __html: news?.content }}
        />
        <div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
