export interface TranslationRequest {
  text: string;
  sourceLanguage: string;
  targetLanguage: string;
}

export interface WordAnalysis {
  original: string;
  translated: string;
  partOfSpeech: string;
  grammar: string;
  context: string;
  alternatives?: string[];
  references?: {
    source: string;
    page?: string;
    notes?: string;
  }[];
}

export interface TranslationResponse {
  originalText: string;
  translatedText: string;
  sourceLanguage: string;
  targetLanguage: string;
  wordAnalysis: WordAnalysis[];
  historicalContext?: string;
  scholarlyNotes?: string;
}
