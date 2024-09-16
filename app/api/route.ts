import { NextRequest, NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { prisma } from "../utils/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json({
    users,
  });
}

const userCreateSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = userCreateSchema.parse(body);
    await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
      },
    });
    return NextResponse.json({ body });
  } catch (error) {
    if (error instanceof ZodError) {
        const zodErrors = JSON.parse(error.message);
      return NextResponse.json({ error: zodErrors[0].message }, { status: 400 });
    }

    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
