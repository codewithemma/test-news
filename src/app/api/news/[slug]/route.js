import { NextResponse } from "next/server";
import newsModel from "../../../../models/news";
//GET INFO OF A SPECIFIC POST
export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const post = await newsModel.findOne({ slug: slug });
    if (!post) {
      return new NextResponse(JSON.stringify({ error: "Post not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    return new NextResponse(JSON.stringify(post, { status: 200 }), {
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

//UPDATE A POST
export const PUT = async (req, { params }) => {
  const { slug } = params;
  console.log("2lmw2dkenjnfj", slug);
  const { title, content, image, description } = await req.json();
  try {
    const post = await newsModel.findOneAndUpdate(
      { slug },
      { $set: { title, content, image, description, updatedAt: new Date() } },
      { new: true }
    );

    if (!post) {
      return new NextResponse(
        JSON.stringify({ message: "not found" }, { status: 404 })
      );
    }

    return new NextResponse(JSON.stringify(post, { status: 201 }));
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Failed to update post" }, { status: 500 })
    );
  }
};
