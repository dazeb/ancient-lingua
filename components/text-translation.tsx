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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeftRight, Download, BookmarkPlus, Share2, Volume2 } from "lucide-react";
import { TranslationResult } from "@/components/translation-result";
import { useToast } from "@/hooks/use-toast";

export function TextTranslation() {
  const { toast } = useToast();
  const [sourceText, setSourceText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("ancient-greek");
  const [targetLanguage, setTargetLanguage] = useState("english");
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationResult, setTranslationResult] = useState<any>(null);

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

    try {
      // In a real implementation, this would call your API
      // For now, we'll simulate a response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock translation result
      setTranslationResult({
        originalText: sourceText,
        translatedText: "This is a simulated translation result. In a real implementation, this would be the translated text from the API.",
        sourceLanguage,
        targetLanguage,
        wordAnalysis: [
          {
            original: sourceText.split(" ")[0] || "λόγος",
            translated: "word",
            partOfSpeech: "noun",
            grammar: "nominative singular masculine",
            context: "In ancient Greek philosophy, this term had special significance...",
            alternatives: ["reason", "speech", "discourse"]
          },
          // More words would be here in a real implementation
        ]
      });
      
      toast({
        title: "Translation complete",
        description: "Your text has been translated successfully.",
      });
    } catch (error) {
      toast({
        title: "Translation failed",
        description: "There was an error translating your text. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsTranslating(false);
    }
  };

  const swapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  const saveToGlossary = () => {
    toast({
      title: "Saved to glossary",
      description: "This translation has been saved to your personal glossary.",
    });
  };

  const shareTranslation = () => {
    // In a real implementation, this would generate a unique URL
    navigator.clipboard.writeText("https://ancient-lingua.example/share/abc123");
    toast({
      title: "Link copied",
      description: "A shareable link has been copied to your clipboard.",
    });
  };

  const downloadTranslation = () => {
    toast({
      title: "Download started",
      description: "Your translation is being prepared for download.",
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
            className="min-h-[200px] font-serif"
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
          />
          
          <Button 
            onClick={handleTranslate} 
            disabled={isTranslating || !sourceText.trim()}
            className="w-full"
          >
            {isTranslating ? "Translating..." : "Translate"}
          </Button>
        </div>
        
        <Card>
          <CardContent className="p-4">
            {translationResult ? (
              <div className="space-y-4">
                <div className="font-serif min-h-[200px]">
                  {translationResult.translatedText}
                </div>
                
                <div className="flex items-center justify-between">
                  <Button variant="outline" size="sm" onClick={() => {}}>
                    <Volume2 className="h-4 w-4 mr-2" />
                    Pronounce
                  </Button>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" onClick={saveToGlossary}>
                      <BookmarkPlus className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={shareTranslation}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={downloadTranslation}>
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-[200px] text-muted-foreground">
                Translation will appear here
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      {translationResult && (
        <Tabs defaultValue="word-analysis" className="mt-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="word-analysis">Word Analysis</TabsTrigger>
            <TabsTrigger value="historical-context">Historical Context</TabsTrigger>
            <TabsTrigger value="grammar">Grammar</TabsTrigger>
          </TabsList>
          <TabsContent value="word-analysis" className="mt-4">
            <TranslationResult result={translationResult} />
          </TabsContent>
          <TabsContent value="historical-context" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Historical Context</h3>
                <p className="text-muted-foreground">
                  This text appears to be from the Hellenistic period (323-31 BCE), characterized by the spread of Greek culture 
                  throughout the Mediterranean world following Alexander the Great's conquests. The language shows typical 
                  Koine Greek features, which became the common language of this era.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="grammar" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Grammatical Structure</h3>
                <p className="text-muted-foreground">
                  The text follows standard Koine Greek sentence structure with subject-verb-object ordering. 
                  Notable grammatical features include the use of the aorist tense for completed actions and 
                  the dative case to indicate indirect objects.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}