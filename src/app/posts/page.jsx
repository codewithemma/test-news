import Menu from "@/components/menu/Menu";
import Image from "next/image";
import styles from "./Post.module.css";
const Post = () => {
  return (
    <div>
      <div>
        <p className={styles.news_header}>
          Tribute Session for Former Speaker Ghali Umar Na’Abba (1999-2003) of
          the House of Representatives
        </p>
        <p className={styles.timeline}>4 hours ago</p>
        <div className={styles.img_container}>
          <Image src="/assets/neww.svg" alt="news" fill priority />
        </div>
        <div className={styles.flex}>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Interdum neque maecenas
              fames imperdiet etiam netus pellentesque ultricies. Elementum diam
              sapien a duis dolor facilisis nec. Id morbi id tellus elit augue
              at. Lorem ipsum dolor sit amet consectetur. Interdum neque
              maecenas fames imperdiet etiam netus pellentesque ultricies.
              Elementum diam sapien a duis dolor facilisis nec. imperdiet etiam
            </p>
            <p>
              Id morbi id tellus elit augue at. Lorem ipsum dolor sit amet
              consectetur. Interdum neque maecenas fames imperdiet etiam netus
              pellentesque ultricies. Elementum diam sapien a duis dolor
              facilisis nec. Id morbi id tellus elit augue at. Lorem ipsum dolor
              sit amet consectetur. Interdum neque maecenas fames imperdiet
              etiam netus pellentesque ultricies. Elementum diam sapien a duis
              dolor facilisis nec. Id morbi id tellus elit augue at. Lorem ipsum
              dolor sit amet consectetur. Interdum neque maecenas fames
              imperdiet etiam netus pellentesque ultricies. Elementum diam
            </p>
            <p>
              {" "}
              netus pellentesque ultricies. Elementum diam sapien a duis dolor
              facilisis nec. Id morbi id tellus elit augue at. Lorem ipsum dolor
              sit amet consectetur. Interdum neque maecenas fames imperdiet
              etiam netus pellentesque ultricies sapien a duis dolor facilisis
              nec. Id morbi id tellus elit augue at. Lorem ipsum dolor sit amet
              consectetur. Interdum neque maecenas fames
            </p>
          </div>
          <div>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
