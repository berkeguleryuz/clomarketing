import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (req, res) => {
    // fetch

    const url = new URL(req.url)
    const username = url.searchParams.get("username");

    try {
        await connect(
            url.searchParams.get("username")
        );

        const posts = await Post.find(username && { username });
        return new NextResponse.json(JSON.stringify(posts), {status: 200});

    } catch(error) {

        return new NextResponse.json("Database Error", {status: 500});
    }

}

export const POST = async (req, res) => {
    // fetch

    const body = await req.json()

    const newPost = new Post(body);

    try {
        await connect();

        await newPost.save();
       
        return new NextResponse("Post has been created", {status: 201});

    } catch(error) {

        return new NextResponse("Database Error", {status: 500});
    }

}