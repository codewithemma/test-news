import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Link href="/news">Click here to views news</Link>
      <br />
      <Link href="/news/create-news">Click here to create a news</Link>
    </div>
  );
}
