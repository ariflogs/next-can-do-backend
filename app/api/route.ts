import { NextRequest, NextResponse } from "next/server";

const data: any = [];

export function GET() {
    return NextResponse.json({
        data
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    const headers = req.headers.get("auth")
    console.log(headers)
    data.push(body)
    return NextResponse.json({body})
}