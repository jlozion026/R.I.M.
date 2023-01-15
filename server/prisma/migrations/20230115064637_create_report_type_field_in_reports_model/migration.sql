/*
  Warnings:

  - You are about to drop the column `incident_type` on the `Incident` table. All the data in the column will be lost.
  - Added the required column `report_type` to the `Report` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ReportType" AS ENUM ('RoadClosure', 'RoadConstruction', 'RoadAccident', 'RoadEvent', 'RoadHazard');

-- AlterTable
ALTER TABLE "Incident" DROP COLUMN "incident_type";

-- AlterTable
ALTER TABLE "Report" ADD COLUMN     "report_type" "ReportType" NOT NULL;
