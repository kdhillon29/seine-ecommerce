import prisma from "@/app/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const allColors = await prisma.product.findMany({
      select: {
        color: true,
      },
    });
    console.log(allColors);

    return NextResponse.json(allColors);
  } catch (error) {
    console.log("Error fetching allcolors", error);
    return NextResponse.error();
  }
}
