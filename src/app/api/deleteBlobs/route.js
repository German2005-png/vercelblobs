import { del, list } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { element } = await req.json();
  try {
    const response = await list();
  if (response.blobs.length > 0) {
    await del(element);
    return NextResponse.json({url: element});
  }
  } catch (error) {
    console.error(error);
    return NextResponse.json({error: error}) 
  }
}
