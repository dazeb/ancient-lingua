"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface WordAnalysis {
  original: string;
  translated: string;
  partOfSpeech: string;
  grammar: string;
  context: string;
  alternatives: string[];
}

interface TranslationResultProps {
  result: {
    wordAnalysis: WordAnalysis[];
  };
}

export function TranslationResult({ result }: TranslationResultProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-medium mb-4">Word-by-Word Analysis</h3>
        
        <Accordion type="single" collapsible className="w-full">
          {result.wordAnalysis.map((word, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center">
                  <span className="font-serif mr-2">{word.original}</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="ml-2">{word.translated}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Grammar</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{word.partOfSpeech}</Badge>
                      <Badge variant="outline">{word.grammar}</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-1">Historical Context</h4>
                    <p className="text-sm text-muted-foreground">{word.context}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium mb-1">Alternative Meanings</h4>
                    <div className="flex flex-wrap gap-2">
                      {word.alternatives.map((alt, i) => (
                        <Badge key={i} variant="secondary">{alt}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}