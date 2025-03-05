-- AlterTable
ALTER TABLE "authors" ADD COLUMN     "furtherReading" JSONB,
ADD COLUMN     "onlineTexts" JSONB,
ADD COLUMN     "relatedAuthors" JSONB,
ADD COLUMN     "significance" TEXT;
