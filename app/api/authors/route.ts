import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      const author = await prisma.author.findUnique({
        where: { id },
        include: {
          works: true,
          timeline: true,
          quotes: true
        }
      });

      if (!author) {
        return NextResponse.json(
          { error: "Author not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(author);
    }

    const authors = await prisma.author.findMany({
      include: {
        works: true,
        timeline: true,
        quotes: true
      }
    });

    return NextResponse.json(authors);
  } catch (error) {
    console.error("Error fetching authors:", error);
    return NextResponse.json(
      { error: "Failed to fetch authors" },
      { status: 500 }
    );
  }
}
