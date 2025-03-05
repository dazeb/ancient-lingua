import { PrismaClient } from '@prisma/client'
import type { Author } from '../app/authors/data'
import { grecoRomanAuthors, otherAuthors } from '../app/authors/data'

const prisma = new PrismaClient()

async function seedAuthor(authorData: Author) {
  const {
    works,
    timeline,
    quotes,
    workDetails,
    image,
    imageAttribution,
    imageLicense,
    imageSource,
    relatedAuthors,
    furtherReading,
    onlineTexts,
    significance,
    ...authorFields
  } = authorData

  const author = await prisma.author.create({
    data: {
      ...authorFields,
      imageUrl: image,
      imageAttribution,
      imageLicense,
      imageSource,
      relatedAuthors: relatedAuthors ? relatedAuthors : undefined,
      furtherReading: furtherReading ? furtherReading : undefined,
      onlineTexts: onlineTexts ? onlineTexts : undefined,
      significance: significance || null,
      works: {
        create: workDetails?.map((work: any) => ({
          title: work.title,
          date: work.date,
          description: work.description,
          keyThemes: work.keyThemes || []
        })) || works?.map((work: string) => ({
          title: work,
          keyThemes: []
        })) || []
      },
      timeline: timeline ? {
        create: timeline.map((event: any) => ({
          date: event.date,
          description: event.description
        }))
      } : undefined,
      quotes: quotes ? {
        create: quotes.map((quote: any) => ({
          text: quote.text,
          source: quote.source
        }))
      } : undefined
    }
  })

  console.log(`Created author: ${author.name}`)
  return author
}

async function main() {
  console.log('Start seeding...')

  // Delete all existing data
  await prisma.readingHistory.deleteMany()
  await prisma.userBookmark.deleteMany()
  await prisma.userPreference.deleteMany()
  await prisma.user.deleteMany()
  await prisma.quote.deleteMany()
  await prisma.timelineEvent.deleteMany()
  await prisma.work.deleteMany()
  await prisma.author.deleteMany()

  // Seed Greco-Roman authors
  for (const author of grecoRomanAuthors) {
    await seedAuthor(author)
  }

  // Seed other authors
  for (const author of otherAuthors) {
    await seedAuthor(author)
  }

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
