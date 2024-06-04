"use client";
import { useState } from "react";
import styles from "./CreateNews.module.css";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
});
import { IoIosAddCircle } from "react-icons/io";
import FileBase from "react-file-base64";
const WritePage = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(false);
  const [media, setMedia] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!title || !value) {
      alert("Title and description are required.");
      return;
    }
    const res = await fetch("/api/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content: value,
        image: media,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      alert(`Success: ${data.message || "News item created!"}`);
      //   router.push(`/news/${data.slug}`);
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
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <label htmlFor="image">
            <IoIosAddCircle size={"big"} />
          </label>
        </button>
        {open && (
          <div className={styles.add}>
            <FileBase
              type="file"
              id="image"
              multiple={false}
              onDone={({ base64 }) => {
                setMedia(base64);
              }}
              style={{ display: "none" }}
            />
          </div>
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
