import { news } from "@/app/api/news/data";
import Link from "next/link";
import styles from "./Menu.module.css";
const Menu = () => {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.trend}>
          <p>Trending Now</p>
        </div>
        {news?.map((post) => (
          <div key={post.slug}>
            <Link href={`/news/${post.slug}`} className={styles.menu_links}>
              <span>{post.title}</span>
              <br />
              <span>{post.date}</span>
            </Link>
            <br />
            <br />
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
