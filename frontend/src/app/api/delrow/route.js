import deleteRow from "@/helpers/deleterow";

import { NextResponse } from "next/server";


export async function POST(req) {

    try {

        const  body  = await req.json();

        console.log(body.id);

      const result = await deleteRow(body.id);

    //   console.log(result);

      return NextResponse.json({data:result}, { status: 200 });
      
  } catch ( error ) {
    return NextResponse.json({error: "hello"}, { status: 404 });
      
  }
 
  };