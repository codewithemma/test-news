"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "./CreateNews.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import slugify from "react-slugify";
import { url } from "@/utils/api";
const CKEditorComponent = dynamic(
  () => import("@/components/ckEditor/CkEditor"),
  {
    ssr: false,
  }
);

const FileBase = dynamic(() => import("react-file-base64"), { ssr: false });

const WritePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [media, setMedia] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const postSlug = slugify(title);

  const handleSubmit = async (event) => {
    try {
      setLoading(true);
      event.preventDefault();
      if (!title || !value || !description) {
        toast.error("Missing Required Fields!", {
          className: styles.toast,
        });
        return;
      }
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          slug: postSlug,
          content: value,
          image: media,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setLoading(false);
        toast.success(`Success: News item created!`, {
          className: styles.toast,
        });
        router.push(`${url}/news/${data.slug}`);
      } else {
        setLoading(false);
        toast.error(errorMessage);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter more about a post"
        className={styles.input1}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <div className={styles.editor}>
        <div className={styles.add}>
          <FileBase
            type="file"
            id="image"
            multiple={false}
            onDone={({ base64 }) => {
              setMedia(base64);
            }}
          />
        </div>
        <CKEditorComponent
          initialValue={value}
          onChange={(data) => setValue(data)}
          placeholder="Tell your story..."
        />
      </div>
      <button
        className={styles.publish}
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Publishing..." : "Publish"}
      </button>
    </div>
  );
};

export default WritePage;
