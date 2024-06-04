import newsModel from "@/models/news";
import { connectDB } from "@/utils/connect";
import { NextResponse } from "next/server";

// GET ALL POST
export const GET = async (req, res) => {
  await connectDB();
  const posts = await newsModel.find().exec();
  return new NextResponse(JSON.stringify(posts, { status: 200 }));
};

// CREATE A POST
export const POST = async (req) => {
  await connectDB();
  try {
    const { title, content, image } = await req.json();
    const post = new newsModel({ title, content, image });
    await post.save();
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "internal server error" }, { status: 500 })
    );
  }
};
