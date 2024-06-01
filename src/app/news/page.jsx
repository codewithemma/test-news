import Link from "next/link";
import styles from "./News.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import NewsCard from "@/components/newsCard/NewsCard";
const page = () => {
  const data = [
    { id: 1, content: "This div takes up 2fr of the space." },
    {
      id: 2,
      content: "This div takes up 1fr and is a flex container.",
      isFlex: true,
      flexItems: ["Flex Item 1", "Flex Item 2"],
    },
    { id: 3, content: "This div also takes up 1fr of the space." },
  ];
  return (
    <div>
      <div className={styles.bigBox}>
        {data.map((item) => (
          <div
            key={item.id}
            className={
              item.id === 1
                ? styles.box
                : `${styles.box} ${styles.flexContainer}`
            }
          >
            {item.content}
          </div>
        ))}
      </div>
      <p className={styles.header}>Parliamentary News</p>
      <div className={styles.grid}>
        <div className={styles.news_img}>
          <Image
            src="/assets/1723.jpg"
            alt="ood"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className={styles.bg}>
            <div style={{ width: "500px" }}>
              <button className={styles.btn}>News</button>
              <p>
                HOUSE OF REPRESENTATIVES INAUGURATES CONSTITUTION REVIEW
                COMMITTEE (27/02/2024)
              </p>
              <Link href="/" className={styles.link}>
                Read more
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.news_img}>
            <Image
              src="/assets/1723.jpg"
              alt="ood"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className={styles.bg}>
              <div style={{ width: "500px" }}>
                <button className={styles.btn}>News</button>
                <p>
                  HOUSE OF REPRESENTATIVES INAUGURATES CONSTITUTION REVIEW
                  COMMITTEE (27/02/2024)
                </p>
                <Link href="/" className={styles.link}>
                  Read more
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.news_img}>
            <Image
              src="/assets/1723.jpg"
              alt="ood"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className={styles.bg}>
              <div style={{ width: "500px" }}>
                <button className={styles.btn}>News</button>
                <p>
                  HOUSE OF REPRESENTATIVES INAUGURATES CONSTITUTION REVIEW
                  COMMITTEE (27/02/2024)
                </p>
                <Link href="/" className={styles.link}>
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

export default page;
