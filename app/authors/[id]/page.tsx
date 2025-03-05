import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, BookOpen, GraduationCap, Users, Clock, Quote } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// This would ideally come from a database in a real application
import { grecoRomanAuthors, otherAuthors } from "../data";

interface Quote {
  text: string;
  source: string;
}

interface WorkDetail {
  title: string;
  date: string;
  description: string;
  keyThemes: string[];
}

interface TimelineEvent {
  date: string;
  description: string;
}

interface RelatedAuthor {
  id: string;
  name: string;
  relationship: string;
}

interface Resource {
  title: string;
  author: string;
  year: string;
  link?: string;
}

interface OnlineText {
  title: string;
  url: string;
  provider: string;
}

interface Author {
  id: string;
  name: string;
  language: string;
  dates: string;
  bio: string;
  works: string[];
  image: string;
  tags: string[];
  origin?: string;
  notableFor?: string;
  detailedBio?: string;
  timeline?: TimelineEvent[];
  workDetails?: WorkDetail[];
  quotes?: Quote[];
  significance?: string;
  relatedAuthors?: RelatedAuthor[];
  furtherReading?: Resource[];
  onlineTexts?: OnlineText[];
  imageAttribution?: string;
  imageLicense?: string;
  imageSource?: string;
}

// Get all authors once to avoid recalculating
const allAuthors = [...grecoRomanAuthors, ...otherAuthors] as Author[];

export async function generateStaticParams() {
  return allAuthors.map((author) => ({
    id: author.id,
  }));
}

export default function AuthorPage({ params }: { params: { id: string } }) {
  const author = allAuthors.find(a => a.id === params.id);
  
  if (!author) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Button variant="ghost" asChild className="pl-0">
          <Link href="/authors" className="flex items-center">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Authors
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <div className="lg:col-span-2">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex flex-col gap-2 md:w-60">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                <Image 
                  src={author.image} 
                  alt={author.name} 
                  fill 
                  className="object-contain"
                />
              </div>
              {author.imageAttribution && (
                <div className="text-xs text-muted-foreground">
                  <p>Image: {author.imageAttribution}</p>
                  {author.imageLicense && <p>License: {author.imageLicense}</p>}
                </div>
              )}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{author.name}</h1>
              <p className="text-xl text-muted-foreground mb-4">{author.dates}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="text-sm">Wrote in {author.language}</Badge>
                {author.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-sm">{tag}</Badge>
                ))}
              </div>
              <p className="text-muted-foreground">{author.bio}</p>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Facts</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium text-sm">Time Period</h3>
              <p>{author.dates}</p>
            </div>
            <div>
              <h3 className="font-medium text-sm">Origin</h3>
              <p>{author.origin || "Unknown"}</p>
            </div>
            <div>
              <h3 className="font-medium text-sm">Language</h3>
              <p>{author.language}</p>
            </div>
            <div>
              <h3 className="font-medium text-sm">Notable For</h3>
              <p>{author.notableFor || author.tags.join(", ")}</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="biography" className="mb-10">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="biography">Biography</TabsTrigger>
          <TabsTrigger value="works">Works</TabsTrigger>
          <TabsTrigger value="influence">Influence & Legacy</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="biography" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Detailed Biography
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose dark:prose-invert max-w-none">
                {author.detailedBio ? (
                  <div dangerouslySetInnerHTML={{ __html: author.detailedBio }} />
                ) : (
                  <p>
                    {author.bio} Additional biographical information about {author.name} will be added soon.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              {author.timeline ? (
                <div className="space-y-4">
                  {author.timeline.map((event, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 font-bold text-sm w-24 shrink-0">{event.date}</div>
                      <div>
                        <p>{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  A detailed timeline for {author.name} is under development.
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="works" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                Major Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              {author.workDetails ? (
                <div className="space-y-6">
                  {author.workDetails.map((work, index) => (
                    <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                      <h3 className="font-bold text-lg mb-2">{work.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{work.date || "Date unknown"}</p>
                      <p className="mb-3">{work.description}</p>
                      {work.keyThemes && (
                        <div>
                          <h4 className="font-medium text-sm mb-1">Key Themes:</h4>
                          <div className="flex flex-wrap gap-2">
                            {work.keyThemes.map((theme, i) => (
                              <Badge key={i} variant="secondary">{theme}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-muted-foreground mb-4">
                    Detailed analysis of {author.name}&apos;s works is being developed. Below is a list of known works:
                  </p>
                  <ul className="space-y-1 list-disc pl-5">
                    {author.works.map((work, index) => (
                      <li key={index}>{work}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Quote className="h-5 w-5 mr-2" />
                Famous Quotations
              </CardTitle>
            </CardHeader>
            <CardContent>
              {author.quotes ? (
                <div className="space-y-4">
                  {author.quotes.map((quote, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4 py-1">
                      <p className="italic mb-2">&ldquo;{quote.text}&rdquo;</p>
                      {quote.source && <p className="text-sm text-muted-foreground">— From {quote.source}</p>}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Famous quotations from {author.name} will be added soon.
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="influence" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Historical Significance</CardTitle>
            </CardHeader>
            <CardContent>
              {author.significance ? (
                <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: author.significance }} />
              ) : (
                <p className="text-muted-foreground">
                  Information about {author.name}&apos;s historical significance and influence is being compiled.
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Related Authors
              </CardTitle>
            </CardHeader>
            <CardContent>
              {author.relatedAuthors ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {author.relatedAuthors.map((related, index) => (
                    <Link href={`/authors/${related.id}`} key={index}>
                      <div className="border p-4 rounded-lg hover:bg-accent transition-colors">
                        <h3 className="font-medium">{related.name}</h3>
                        <p className="text-sm text-muted-foreground">{related.relationship}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  Related authors information is being developed.
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Further Reading</CardTitle>
            </CardHeader>
            <CardContent>
              {author.furtherReading ? (
                <ul className="space-y-3">
                  {author.furtherReading.map((resource, index) => (
                    <li key={index}>
                      <p className="font-medium">{resource.title}</p>
                      <p className="text-sm text-muted-foreground">{resource.author}, {resource.year}</p>
                      {resource.link && (
                        <Link href={resource.link} target="_blank" className="text-sm text-primary hover:underline">
                          View Resource
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">
                  Recommended reading resources for {author.name} will be added soon.
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Primary Texts Online</CardTitle>
            </CardHeader>
            <CardContent>
              {author.onlineTexts ? (
                <ul className="space-y-3">
                  {author.onlineTexts.map((text, index) => (
                    <li key={index}>
                      <Link href={text.url} target="_blank" className="font-medium text-primary hover:underline">
                        {text.title}
                      </Link>
                      <p className="text-sm text-muted-foreground">{text.provider}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">
                  Links to online versions of {author.name}&apos;s texts will be added soon.
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
