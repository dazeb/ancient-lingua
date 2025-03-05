import { NextResponse } from "next/server";
import { translateText, translationSchema } from "@/lib/openai";
import { ZodError } from "zod";
import OpenAI from "openai";

export async function POST(request: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "Translation service is not configured properly" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();

    // Validate request body
    const validatedData = translationSchema.parse(body);

    // Get translation from OpenAI
    const translationResult = await translateText({
      text: validatedData.text,
      sourceLanguage: validatedData.sourceLanguage,
      targetLanguage: validatedData.targetLanguage,
    });

    return NextResponse.json(translationResult);
  } catch (error) {
    // Log error details for debugging
    console.error("Translation error:", error);

    // Handle validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid request data", details: error.errors },
        { status: 400 }
      );
    }

    // Handle rate limiting errors
    if (error instanceof OpenAI.APIError) {
      if (error.status === 429) {
        return NextResponse.json(
          { error: "Translation service is currently busy. Please try again shortly." },
          { status: 429 }
        );
      }

      // Handle authentication errors
      if (error.status === 401) {
        return NextResponse.json(
          { error: "Translation service authentication failed." },
          { status: 401 }
        );
      }

      // Handle other OpenAI API errors
      return NextResponse.json(
        { 
          error: "Translation service error",
          message: error.message,
          type: error.type 
        },
        { status: error.status || 503 }
      );
    }

    // Handle parsing errors
    if (error instanceof Error && error.message.includes('parse')) {
      return NextResponse.json(
        { error: "Failed to process translation response" },
        { status: 500 }
      );
    }

    // Handle all other errors
    return NextResponse.json(
      { 
        error: "An unexpected error occurred",
        message: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
