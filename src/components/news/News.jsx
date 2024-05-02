import Link from "next/link";
import NewsButton from "../newsbutton/NewsButton";
import styles from "./News.module.css";
export const NEWS_DATA = [
  {
    id: 1,
    heading: "",
    img: "/assets/1723.jpg",
  },
  {
    id: 1,
    heading: "",
    img: "/assets/1723.jpg",
  },
  {
    id: 1,
    heading:
      "HOUSE OF REPRESENTATIVES INAUGURATES CONSTITUTION REVIEW COMMITTEE (27/02/2024)",
    img: "/assets/1723.jpg",
  },
];
const News = ({ text, className }) => {
  return (
    <div className={className}>
      <NewsButton>News</NewsButton>
      <p>{text}</p>
      <Link href="/" className={styles.link}>
        Read more
      </Link>
    </div>
  );
};

export default News;
