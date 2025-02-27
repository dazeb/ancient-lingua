import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Download, Trash2 } from "lucide-react";

export default function HistoryPage() {
  // This would be fetched from your database in a real implementation
  const mockHistory = [
    {
      id: "1",
      date: "2025-04-10T14:30:00Z",
      sourceLanguage: "ancient-greek",
      targetLanguage: "english",
      originalText: "λόγος",
      translatedText: "word, speech, reason",
    },
    {
      id: "2",
      date: "2025-04-09T10:15:00Z",
      sourceLanguage: "latin",
      targetLanguage: "english",
      originalText: "Veni, vidi, vici",
      translatedText: "I came, I saw, I conquered",
    },
    {
      id: "3",
      date: "2025-04-08T16:45:00Z",
      sourceLanguage: "ancient-greek",
      targetLanguage: "english",
      originalText: "γνῶθι σεαυτόν",
      translatedText: "know thyself",
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getLanguageName = (code: string) => {
    const languages: Record<string, string> = {
      'ancient-greek': 'Ancient Greek',
      'classical-greek': 'Classical Greek',
      'modern-greek': 'Modern Greek',
      'latin': 'Latin',
      'english': 'English',
    };
    return languages[code] || code;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Translation History</h1>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export History
        </Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Translations</TabsTrigger>
          <TabsTrigger value="saved">Saved Items</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-4">
            {mockHistory.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{formatDate(item.date)}</span>
                      </div>
                      <div className="text-sm">
                        {getLanguageName(item.sourceLanguage)} → {getLanguageName(item.targetLanguage)}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Original</div>
                      <div className="p-3 bg-muted rounded-md font-serif">{item.originalText}</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">Translation</div>
                      <div className="p-3 bg-muted rounded-md">{item.translatedText}</div>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <Button variant="link" className="p-0 h-auto">View full details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="saved">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-muted p-6 mb-4">
              <Clock className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">No saved translations</h3>
            <p className="text-muted-foreground max-w-md">
              When you save translations, they will appear here for quick access.
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="documents">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-muted p-6 mb-4">
              <Clock className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">No document translations</h3>
            <p className="text-muted-foreground max-w-md">
              When you translate documents or images, they will appear here.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}