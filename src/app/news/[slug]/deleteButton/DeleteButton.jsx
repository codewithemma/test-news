"use client";
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const DeleteButton = ({ slug }) => {
  const router = useRouter();
  const handleDeleteNews = async () => {
    if (window.confirm("Are you sure you want to delete news item...?")) {
      try {
        const res = await fetch(`/api/news/${slug}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });
        const data = await res.json();
        if (res.ok) {
          toast.success(data.message);
          router.push("/news");
        }
      } catch (error) {
        toast.error(error.message || "Something went wrong");
      }
    }
  };
  return (
    <>
      <FaRegTrashAlt size={"17px"} onClick={handleDeleteNews} slug={slug} />
    </>
  );
};

export default DeleteButton;
