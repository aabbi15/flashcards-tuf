import excuteQuery from "@/helpers/mysql";

import { NextResponse } from "next/server";


export async function GET(req) {

    try {
        console.log("req nom", req.body)
      const result = await excuteQuery('SELECT * FROM cards;');

      return NextResponse.json({data:result}, { status: 200 });
      
  } catch ( error ) {
    return NextResponse.json({error}, { status: 200 });
      
  }
  

  
  
  };