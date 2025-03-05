import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookMarked, Plus, Search, Edit, Trash2 } from "lucide-react";

export default function GlossaryPage() {
  // This would be fetched from your database in a real implementation
  const mockGlossaryItems = [
    {
      id: "1",
      term: "λόγος",
      definition: "word, speech, reason, discourse",
      language: "ancient-greek",
      notes: "In ancient Greek philosophy, this term had special significance...",
      tags: ["philosophy", "noun"],
    },
    {
      id: "2",
      term: "ἀρετή",
      definition: "excellence, virtue",
      language: "ancient-greek",
      notes: "A central concept in Greek ethics and moral philosophy",
      tags: ["ethics", "noun"],
    },
    {
      id: "3",
      term: "carpe diem",
      definition: "seize the day",
      language: "latin",
      notes: "From Horace's Odes (I, 11), encouraging living in the present",
      tags: ["phrase", "philosophy"],
    },
  ];

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
        <h1 className="text-3xl font-bold">Personal Glossary</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Term
        </Button>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search your glossary..." className="pl-10" />
        </div>
        <Button variant="outline">Filter</Button>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Terms</TabsTrigger>
          <TabsTrigger value="ancient-greek">Ancient Greek</TabsTrigger>
          <TabsTrigger value="latin">Latin</TabsTrigger>
          <TabsTrigger value="modern-greek">Modern Greek</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-4">
            {mockGlossaryItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-serif font-medium">{item.term}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {getLanguageName(item.language)}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium mb-1">Definition</h4>
                    <p>{item.definition}</p>
                  </div>
                  
                  {item.notes && (
                    <div className="mt-4">
                      <h4 className="font-medium mb-1">Notes</h4>
                      <p className="text-sm text-muted-foreground">{item.notes}</p>
                    </div>
                  )}
                  
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag, index) => (
                        <div key={index} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                          {tag}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="ancient-greek">
          <div className="space-y-4">
            {mockGlossaryItems
              .filter(item => item.language === 'ancient-greek')
              .map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-serif font-medium">{item.term}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {getLanguageName(item.language)}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="font-medium mb-1">Definition</h4>
                      <p>{item.definition}</p>
                    </div>
                    
                    {item.notes && (
                      <div className="mt-4">
                        <h4 className="font-medium mb-1">Notes</h4>
                        <p className="text-sm text-muted-foreground">{item.notes}</p>
                      </div>
                    )}
                    
                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag, index) => (
                          <div key={index} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                            {tag}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="latin">
          <div className="space-y-4">
            {mockGlossaryItems
              .filter(item => item.language === 'latin')
              .map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-serif font-medium">{item.term}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {getLanguageName(item.language)}
                        </p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="font-medium mb-1">Definition</h4>
                      <p>{item.definition}</p>
                    </div>
                    
                    {item.notes && (
                      <div className="mt-4">
                        <h4 className="font-medium mb-1">Notes</h4>
                        <p className="text-sm text-muted-foreground">{item.notes}</p>
                      </div>
                    )}
                    
                    {item.tags && item.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag, index) => (
                          <div key={index} className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs">
                            {tag}
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="modern-greek">
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="rounded-full bg-muted p-6 mb-4">
              <BookMarked className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">No Modern Greek terms</h3>
            <p className="text-muted-foreground max-w-md">
              You haven't added any Modern Greek terms to your glossary yet.
            </p>
            <Button className="mt-4">
              <Plus className="h-4 w-4 mr-2" />
              Add New Term
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}