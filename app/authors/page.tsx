import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { grecoRomanAuthors, otherAuthors } from "./data";

interface Author {
  id: string;
  name: string;
  language: string;
  dates: string;
  bio: string;
  works: string[];
  image: string;
  tags: string[];
  imageAttribution?: string;
  imageLicense?: string;
  imageSource?: string;
  origin?: string;
  notableFor?: string;
}

export default function AuthorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Ancient Authors</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the lives and works of influential authors from the ancient world
        </p>
      </section>

      <div className="mb-8">
        <Tabs defaultValue="greco-roman" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="greco-roman">Greco-Roman Authors</TabsTrigger>
            <TabsTrigger value="other">Other Authors</TabsTrigger>
          </TabsList>

          <TabsContent value="greco-roman">
            <AuthorFilters />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {grecoRomanAuthors.map((author) => (
                <AuthorCard key={author.id} author={author} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="other">
            <AuthorFilters />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {otherAuthors.map((author) => (
                <AuthorCard key={author.id} author={author} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function AuthorFilters() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search authors by name or keyword..." className="pl-10" />
      </div>
      <div className="flex gap-4">
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Languages</SelectItem>
            <SelectItem value="greek">Greek</SelectItem>
            <SelectItem value="latin">Latin</SelectItem>
            <SelectItem value="chinese">Chinese</SelectItem>
            <SelectItem value="persian">Persian</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Time Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Periods</SelectItem>
            <SelectItem value="600-500-bce">600-500 BCE</SelectItem>
            <SelectItem value="500-400-bce">500-400 BCE</SelectItem>
            <SelectItem value="400-300-bce">400-300 BCE</SelectItem>
            <SelectItem value="300-200-bce">300-200 BCE</SelectItem>
            <SelectItem value="200-100-bce">200-100 BCE</SelectItem>
            <SelectItem value="100-0-bce">100-0 BCE</SelectItem>
            <SelectItem value="0-100-ce">0-100 CE</SelectItem>
            <SelectItem value="100-200-ce">100-200 CE</SelectItem>
            <SelectItem value="200-300-ce">200-300 CE</SelectItem>
            <SelectItem value="300-1300-ce">300-1300 CE</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

function AuthorCard({ author }: { author: Author }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-[3/4]">
        <Image 
          src={author.image} 
          alt={author.name} 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
          <h3 className="font-bold text-xl mb-1">{author.name}</h3>
          <p className="text-sm text-muted-foreground">{author.dates}</p>
        </div>
      </div>
      <CardContent className="py-4 flex-grow">
        {author.imageAttribution && (
          <div className="text-xs text-muted-foreground mb-3">
            <p>Image: {author.imageAttribution}</p>
            {author.imageLicense && <p>License: {author.imageLicense}</p>}
          </div>
        )}
        <div className="flex items-center gap-2 mb-4">
          <Badge>{`Wrote in ${author.language}`}</Badge>
          {author.tags.map((tag, index) => (
            <Badge key={index} variant="outline">{tag}</Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{author.bio}</p>
        <div className="mb-4">
          <h4 className="font-medium text-sm mb-2">Notable Works:</h4>
          <ul className="text-sm text-muted-foreground space-y-1 pl-5 list-disc">
            {author.works.slice(0, 3).map((work, index) => (
              <li key={index}>{work}</li>
            ))}
            {author.works.length > 3 && <li>And {author.works.length - 3} more...</li>}
          </ul>
        </div>
        <Button variant="outline" className="w-full" asChild>
          <Link href={`/authors/${author.id}`}>
            View Complete Profile
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
