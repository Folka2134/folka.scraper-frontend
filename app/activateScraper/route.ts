import { NextResponse } from "next/server";

export async function POST(req: Request) {  
  try {
    const body = await req.json()
  
    const { search } = body
  
    if(!search) {
      return new NextResponse("search input required", { status: 400 })
    }
  
    console.log("Searching for: ");
  
    return new NextResponse('OK')
  } catch (error) {
    console.log('SEARCH_POST: ', error);
    return new NextResponse('Internal error', { status: 500})
  } 
}