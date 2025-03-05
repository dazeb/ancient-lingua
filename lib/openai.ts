import OpenAI from 'openai';
import { z } from 'zod';
import type { TranslationRequest, TranslationResponse } from '@/types/translation';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY environment variable is required');
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Input validation schema
export const translationSchema = z.object({
  text: z.string().min(1, "Text is required"),
  sourceLanguage: z.string().min(1, "Source language is required"),
  targetLanguage: z.string().min(1, "Target language is required"),
});

const RESPONSE_SCHEMA = `
{
  "originalText": "string (the input text)",
  "translatedText": "string (the translated text)",
  "sourceLanguage": "string (source language code)",
  "targetLanguage": "string (target language code)",
  "wordAnalysis": [
    {
      "original": "string (original word)",
      "translated": "string (translated word)",
      "partOfSpeech": "string (e.g., noun, verb)",
      "grammar": "string (grammatical details)",
      "context": "string (usage context)",
      "alternatives": ["string (alternative translations)"],
      "references": [
        {
          "source": "string (reference source)",
          "page": "string (optional page number)",
          "notes": "string (optional additional notes)"
        }
      ]
    }
  ],
  "historicalContext": "string (optional historical background)",
  "scholarlyNotes": "string (optional scholarly analysis)"
}`;

// Helper function to determine text type and get appropriate system prompt
export function getSystemPrompt(text: string): string {
  const wordCount = text.trim().split(/\s+/).length;
  
  const basePrompt = `You are an expert linguist and translator specializing in ancient languages.
Your task is to provide detailed translations with analysis.
IMPORTANT: Return your response as a JSON object exactly matching this schema:
${RESPONSE_SCHEMA}

Focus on ${wordCount === 1 ? 'precise word-level analysis' : wordCount <= 15 ? 'sentence-level analysis' : 'comprehensive passage analysis'}.`;

  if (wordCount === 1) {
    return `${basePrompt}
For this single word, provide:
- Etymology and word origins
- All possible meanings and usages
- Historical context
- Grammatical analysis
- Citations from relevant texts`;
  }
  
  if (wordCount <= 15) {
    return `${basePrompt}
For this sentence, analyze:
- Grammatical structure
- Key word meanings
- Contextual interpretation
- Historical/cultural references
- Similar usage examples`;
  }
  
  return `${basePrompt}
For this passage, provide:
- Overall meaning and themes
- Key phrase analysis
- Cultural and historical context
- Literary devices and style
- Scholarly interpretations`;
}

// Helper function to validate and parse OpenAI response
function parseOpenAIResponse(response: any): TranslationResponse {
  try {
    // If response is already a string, parse it
    const data = typeof response === 'string' ? JSON.parse(response) : response;
    
    // Detailed validation
    if (!data) throw new Error('Empty response from OpenAI');
    if (typeof data !== 'object') throw new Error('Response is not an object');
    if (typeof data.translatedText !== 'string') throw new Error('Invalid or missing translatedText');
    if (!Array.isArray(data.wordAnalysis)) throw new Error('Invalid or missing wordAnalysis array');
    
    // Validate each word analysis
    data.wordAnalysis.forEach((word: any, index: number) => {
      if (!word.original || !word.translated || !word.partOfSpeech || !word.grammar || !word.context) {
        throw new Error(`Incomplete word analysis at index ${index}`);
      }
    });
    
    return data as TranslationResponse;
  } catch (error) {
    console.error('Error parsing OpenAI response:', {
      error,
      response: typeof response === 'string' ? response : JSON.stringify(response, null, 2)
    });
    throw new Error(`Failed to parse translation response: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Main translation function
export async function translateText(request: TranslationRequest): Promise<TranslationResponse> {
  const systemPrompt = getSystemPrompt(request.text);
  
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { 
          role: "system", 
          content: systemPrompt
        },
        {
          role: "user",
          content: `Translate the following text from ${request.sourceLanguage} to ${request.targetLanguage}:
${request.text}

Return your response as a JSON object exactly matching the provided schema.`
        }
      ],
      temperature: 0.7,
      response_format: { type: "json_object" }
    });

    if (!completion.choices[0]?.message?.content) {
      throw new Error('No content in OpenAI response');
    }

    return parseOpenAIResponse(completion.choices[0].message.content);
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error('OpenAI API Error:', {
        status: error.status,
        message: error.message,
        code: error.code,
        type: error.type
      });
      throw new Error(`OpenAI API error: ${error.message}`);
    }
    
    console.error('Translation error:', error);
    throw error;
  }
}
