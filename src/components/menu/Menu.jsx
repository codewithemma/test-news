import Link from "next/link";
import styles from "./Menu.module.css";
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/news", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};
const Menu = async (slug) => {
  const news = await getData(slug);
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.trend}>
          <p>Trending Now</p>
        </div>
        {news?.map((post) => (
          <div key={post.slug}>
            <Link href={`/news/${post._id}`} className={styles.menu_links}>
              <span>{post.title}</span>
              <br />
              <span> {post.createdAt.slice(0, 10)}</span>
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
