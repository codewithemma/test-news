import EditPage from "./editPage/EditPage";
import { url } from "@/utils/api";

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
const page = async ({ params }) => {
  const { slug } = params;
  const newsData = await getData(slug);
  return <EditPage newsData={newsData} slug={slug} />;
};

export default page;
