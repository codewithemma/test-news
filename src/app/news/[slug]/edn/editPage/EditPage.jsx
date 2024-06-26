"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import styles from "./EditPage.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import slugify from "react-slugify";

const CKEditorComponent = dynamic(
  () => import("@/components/ckEditor/CkEditor"),
  {
    ssr: false,
  }
);

const FileBase = dynamic(() => import("react-file-base64"), { ssr: false });

const EditPage = ({ newsData, slug }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [media, setMedia] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setTitle(newsData.title);
    setDescription(newsData.description);
    setMedia(newsData.image);
    setValue(newsData.content);
  }, [newsData]);

  const postSlug = slugify(title);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    if (!title || !value || !description) {
      toast.error("Missing Required Fields!", {
        className: styles.toast,
      });
      return;
    }
    try {
      const res = await fetch(`/api/news/${slug}`, {
        method: "PUT",
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
        toast.success(`Success: News item updated successfully!`, {
          className: styles.toast,
        });
        router.push(`/news/${data.slug}`);
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
        {loading ? "Updating..." : "Update"}
      </button>
    </div>
  );
};

export default EditPage;
