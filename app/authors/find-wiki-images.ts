import { grecoRomanAuthors, otherAuthors } from './data';
import fetch from 'node-fetch';
import * as fs from 'fs';
import * as path from 'path';

interface WikiResponse {
  query?: {
    pages: {
      [key: string]: WikiImageInfo;
    };
  };
}

interface WikiImageInfo {
  title: string;
  imageinfo?: Array<{
    url: string;
    extmetadata?: {
      ImageDescription?: { value: string };
      Artist?: { value: string };
      License?: { value: string };
    };
  }>;
}

async function searchWikiImage(name: string) {
  const params = new URLSearchParams({
    action: 'query',
    generator: 'search',
    gsrsearch: `${name} ancient bust portrait sculpture`,
    gsrlimit: '10',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata',
    format: 'json',
    origin: '*'
  });

  const response = await fetch(
    `http://commons.wikimedia.org/w/api.php?${params.toString()}`,
    {
      method: 'GET',
      headers: {
        'User-Agent': 'AnthologyApp/1.0'
      }
    }
  );

  const data = (await response.json()) as WikiResponse;
  
  if (!data.query?.pages) {
    return null;
  }

  // Get all pages and sort by relevance (assuming first results are most relevant)
  const pages = Object.values(data.query.pages);
  for (const page of pages) {
    const title = page.title;
    if (
      title.toLowerCase().includes('bust') ||
      title.toLowerCase().includes('portrait') ||
      title.toLowerCase().includes('statue')
    ) {
      const info = page.imageinfo?.[0];
      if (!info) continue;
      
      const metadata = info.extmetadata || {};
      
      return {
        name: title,
        description: metadata.ImageDescription?.value || '',
        source: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(title.replace('File:', ''))}`,
        url: info.url,
        attribution: metadata.Artist?.value || 'Wikimedia Commons',
        license: metadata.License?.value || 'Public Domain'
      };
    }
  }

  return null;
}

async function main() {
  // Read existing image sources
  const imageSourcesPath = path.join(process.cwd(), 'public/authors/image-sources.json');
  const existingSources = JSON.parse(fs.readFileSync(imageSourcesPath, 'utf8'));

  // Get all authors that don't have Wikipedia images
  const allAuthors = [...grecoRomanAuthors, ...otherAuthors];
  const authorsToUpdate = allAuthors.filter(
    author => !existingSources[author.id]?.source?.includes('wikimedia.org')
  );

  // Find images for each author
  for (const author of authorsToUpdate) {
    console.log(`Searching for ${author.name}...`);
    const imageInfo = await searchWikiImage(author.name);
    
    if (imageInfo) {
      existingSources[author.id] = imageInfo;
      console.log(`Found image for ${author.name}`);
    } else {
      console.log(`No suitable image found for ${author.name}`);
    }
  }

  // Write updated sources back to file
  fs.writeFileSync(imageSourcesPath, JSON.stringify(existingSources, null, 2));
  console.log('Image sources updated successfully!');
}

main().catch(console.error);
