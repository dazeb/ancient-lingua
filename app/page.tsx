import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileUpload } from '@/components/file-upload';
import { TextTranslation } from '@/components/text-translation';
import { LanguageFeatures } from '@/components/language-features';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Ancient Languages Translation Platform</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Translate between Ancient Greek, Latin, Modern Greek, and English with historical context and grammatical analysis.
        </p>
      </section>

      <Tabs defaultValue="text" className="max-w-5xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="text">Text Translation</TabsTrigger>
          <TabsTrigger value="document">Document & Image Upload</TabsTrigger>
        </TabsList>
        <TabsContent value="text" className="mt-6">
          <TextTranslation />
        </TabsContent>
        <TabsContent value="document" className="mt-6">
          <FileUpload />
        </TabsContent>
      </Tabs>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Historical Context</CardTitle>
            <CardDescription>Understand the cultural and historical background</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1564399579883-451a5d44ec08?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Ancient Greek architecture" 
                fill 
                className="object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Get detailed historical context for words and phrases, understanding how they were used in ancient times.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Grammatical Analysis</CardTitle>
            <CardDescription>Detailed linguistic breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Ancient manuscript" 
                fill 
                className="object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Explore parts of speech, declensions, conjugations, and syntactic structures in ancient texts.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Research Resources</CardTitle>
            <CardDescription>Comprehensive guides to ancient texts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Ancient scrolls" 
                fill 
                className="object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Access our comprehensive guide to important ancient Greek texts and where to find them.
            </p>
            <Link href="/research">
              <Button variant="outline" className="w-full flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>View Research Guide</span>
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <LanguageFeatures />
    </div>
  );
}