-- AlterTable
ALTER TABLE "Stream" ADD COLUMN     "bigImgURL" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "smallImgURL" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "title" TEXT NOT NULL DEFAULT 'Error finding title';
