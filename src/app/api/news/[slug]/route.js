import { NextResponse } from "next/server";
import { news } from "../data";

export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const post = news.find((p) => p.slug === slug);
    if (!post) {
      return new NextResponse(JSON.stringify({ error: "Post not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    return new NextResponse(JSON.stringify(post), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("Something went wrong", {
      status: 500,
    });
  }
};
