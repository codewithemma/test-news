import styles from "./NewsButton.module.css";

const NewsButton = ({ children }) => {
  return <button className={styles.btn}>{children}</button>;
};

export default NewsButton;
