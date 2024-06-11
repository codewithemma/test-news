import newsModel from "@/models/news";
import { connectDB } from "@/utils/connect";
import { NextResponse } from "next/server";

// GET ALL POST
export const GET = async (req, res) => {
  await connectDB();
  const posts = await newsModel.find().sort({
    _id: -1,
  });
  return new NextResponse(JSON.stringify(posts, { status: 200 }));
};

// CREATE A POST
export const POST = async (req) => {
  await connectDB();
  try {
    const { title, content, image, description } = await req.json();
    console.log(title, content, image, description);
    const post = new newsModel({ title, content, image, description });
    await post.save();
    return new NextResponse(JSON.stringify(post, { status: 201 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "internal server error" }, { status: 500 })
    );
  }
};
