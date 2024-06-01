import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="/news">Click here to views news</Link>
    </div>
  );
}
