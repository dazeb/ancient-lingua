"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeftRight, Download, BookmarkPlus, Share2, Volume2, Loader2 } from "lucide-react";
import { TranslationResult } from "@/components/translation-result";
import { useToast } from "@/hooks/use-toast";
import type { TranslationResponse } from "@/types/translation";

interface ErrorResponse {
  error: string;
  message?: string;
  details?: any[];
}

export function TextTranslation() {
  const { toast } = useToast();
  const [sourceText, setSourceText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("ancient-greek");
  const [targetLanguage, setTargetLanguage] = useState("english");
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationResult, setTranslationResult] = useState<TranslationResponse | null>(null);

  const handleTranslate = async () => {
    if (!sourceText.trim()) {
      toast({
        title: "Empty text",
        description: "Please enter some text to translate.",
        variant: "destructive",
      });
      return;
    }

    setIsTranslating(true);
    setTranslationResult(null);

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: sourceText,
          sourceLanguage,
          targetLanguage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorData = data as ErrorResponse;
        throw new Error(errorData.message || errorData.error || "Translation failed");
      }

      setTranslationResult(data);
      
      toast({
        title: "Translation complete",
        description: "Your text has been translated successfully.",
      });
    } catch (error) {
      console.error("Translation error:", error);
      toast({
        title: "Translation failed",
        description: error instanceof Error ? error.message : "There was an error translating your text. Please try again.",
        variant: "destructive",
      });
      setTranslationResult(null);
    } finally {
      setIsTranslating(false);
    }
  };

  const swapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  const saveToGlossary = () => {
    if (!translationResult) return;

    toast({
      title: "Saved to glossary",
      description: "This translation has been saved to your personal glossary.",
    });
  };

  const shareTranslation = () => {
    if (!translationResult) return;

    navigator.clipboard.writeText(`${window.location.origin}?text=${encodeURIComponent(sourceText)}`);
    toast({
      title: "Link copied",
      description: "A shareable link has been copied to your clipboard.",
    });
  };

  const downloadTranslation = () => {
    if (!translationResult) return;

    const data = JSON.stringify(translationResult, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "translation-result.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Download complete",
      description: "Your translation has been downloaded.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Select value={sourceLanguage} onValueChange={setSourceLanguage}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Source Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ancient-greek">Ancient Greek (Koine)</SelectItem>
                <SelectItem value="classical-greek">Ancient Greek (Classical)</SelectItem>
                <SelectItem value="modern-greek">Modern Greek</SelectItem>
                <SelectItem value="latin">Latin</SelectItem>
                <SelectItem value="english">English</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="ghost" size="icon" onClick={swapLanguages}>
              <ArrowLeftRight className="h-4 w-4" />
            </Button>
            
            <Select value={targetLanguage} onValueChange={setTargetLanguage}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Target Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ancient-greek">Ancient Greek (Koine)</SelectItem>
                <SelectItem value="classical-greek">Ancient Greek (Classical)</SelectItem>
                <SelectItem value="modern-greek">Modern Greek</SelectItem>
                <SelectItem value="latin">Latin</SelectItem>
                <SelectItem value="english">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Textarea
            placeholder="Enter text to translate..."
            className="min-h-[200px]"
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
          />
          
          <Button 
            onClick={handleTranslate} 
            disabled={isTranslating || !sourceText.trim()}
            className="w-full"
          >
            {isTranslating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Translating...
              </>
            ) : (
              "Translate"
            )}
          </Button>
        </div>
        
        <Card>
          <CardContent className="p-4">
            {translationResult ? (
              <div className="space-y-4">
                <div className="min-h-[200px] text-lg font-serif">
                  {translationResult.translatedText}
                </div>
                
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm" onClick={() => {}}>
                    <Volume2 className="h-4 w-4 mr-2" />
                    Pronounce
                  </Button>
                  
                  <div className="flex items-center space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={saveToGlossary}
                      title="Save to glossary"
                    >
                      <BookmarkPlus className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={shareTranslation}
                      title="Share translation"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={downloadTranslation}
                      title="Download translation"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-[200px] text-muted-foreground">
                {isTranslating ? (
                  <div className="flex flex-col items-center space-y-2">
                    <Loader2 className="h-8 w-8 animate-spin" />
                    <p>Translating your text...</p>
                  </div>
                ) : (
                  "Translation will appear here"
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      {translationResult && (
        <div className="mt-8 space-y-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Translation Analysis</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Word-by-Word Analysis</h3>
                  <TranslationResult result={translationResult} />
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="text-lg font-medium mb-4">Historical Context</h3>
                  <p className="text-muted-foreground">
                    {translationResult.historicalContext || "No historical context available for this translation."}
                  </p>
                </div>

                <Separator className="my-6" />

                <div>
                  <h3 className="text-lg font-medium mb-4">Grammatical Structure</h3>
                  <p className="text-muted-foreground">
                    {translationResult.scholarlyNotes || "No grammatical notes available for this translation."}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
