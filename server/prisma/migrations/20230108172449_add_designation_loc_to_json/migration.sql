/*
  Warnings:

  - You are about to drop the column `published` on the `Report` table. All the data in the column will be lost.
  - Added the required column `designation` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `location` on the `Report` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "designation" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Report" DROP COLUMN "published",
DROP COLUMN "location",
ADD COLUMN     "location" JSONB NOT NULL;
