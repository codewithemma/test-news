"use client";
import { useState } from "react";
import styles from "./CreateNews.module.css";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});
import { IoIosAddCircle, IoMdCloudUpload } from "react-icons/io";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
const WritePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(false);
  const [media, setMedia] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event) => {
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
        content: value,
        image: media,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      toast.success(`Success: ${data.message || "News item created!"}`, {
        className: styles.toast,
      });
      router.push(`/news/${data._id}`);
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
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <label>
            <IoIosAddCircle size={"big"} />
          </label>
        </button>
        {open && (
          <>
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
            <button className={styles.addButton}>
              <label htmlFor="image">
                <IoMdCloudUpload size={"big"} />
              </label>
            </button>
          </>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;