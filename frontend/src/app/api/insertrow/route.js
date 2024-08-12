import insertRow from "@/helpers/insertrow"; 
import { NextResponse } from "next/server";


export async function POST(req) {

    try {

        const  body  = await req.json();

        console.log(body);

      const result = await insertRow(body);

    //   console.log(result);

      return NextResponse.json({data:result}, { status: 200 });
      
  } catch ( error ) {
    return NextResponse.json({error: "hello"}, { status: 404 });
      
  }
 
  };