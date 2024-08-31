import { NextResponse } from "next/server";

export function DELETE(req: Request, {params}: {params: {id: string}}) {
    return NextResponse.json({
        message: "item deleted!"
    })
}