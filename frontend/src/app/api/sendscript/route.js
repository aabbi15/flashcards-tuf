import sendScript from "@/helpers/sendscript";
import { NextResponse } from "next/server";


export async function POST(req) {

    try {

        const  body  = await req.json();

        // console.log(body);

      const result = await sendScript(body);

    //   console.log(result);

      return NextResponse.json({data:result}, { status: 200 });
      
  } catch ( error ) {
    return NextResponse.json({error: error}, { status: 404 });
      
  }
 
  };