// app/api/your-api-endpoint/route.js
import sendScript from "@/helpers/sendscript";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // const body = await req.json();

    // Call the sendScript function with the request body
    const result = await sendScript();

    // Return a successful response
    return NextResponse.json({ data: result }, { status: 200 });
    
  } catch (error) {
    console.error('Error in POST request:', error);
    return NextResponse.json({ error: error.message || 'An error occurred' }, { status: 500 });
  }
}
