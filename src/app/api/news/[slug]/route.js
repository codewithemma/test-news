import { NextResponse } from "next/server";
import newsModel from "../../../../models/news";
import slugify from "react-slugify";
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
  const { title, content, image, description } = await req.json();
  try {
    const post = await newsModel.findOneAndUpdate(
      { slug },
      {
        $set: {
          title,
          content,
          slug: slugify(title),
          image,
          description,
          updatedAt: new Date(),
        },
      },
      { new: true }
    );

    if (!post) {
      return new NextResponse(
        JSON.stringify({ message: "not found" }, { status: 404 })
      );
    }

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Failed to update post" }, { status: 500 })
    );
  }
};

//DELETE A POST
export const DELETE = async (req, { params }) => {
  const { slug } = params;
  try {
    const post = await newsModel.findOneAndDelete({ slug });
    if (!post) {
      return new NextResponse(
        JSON.stringify({ message: "not found" }, { status: 404 })
      );
    }
    return new NextResponse(
      JSON.stringify({ message: "News Deleted Successfully" }, { status: 410 })
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "internal server error" }, { status: 500 })
    );
  }
};
