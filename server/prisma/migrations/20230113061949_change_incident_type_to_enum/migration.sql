/*
  Warnings:

  - Changed the type of `incident_type` on the `Incident` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "IncidentType" AS ENUM ('RoadClosure', 'RoadConstruction', 'RoadAccident', 'RoadEvent', 'RoadHazard');

-- AlterTable
ALTER TABLE "Incident" DROP COLUMN "incident_type",
ADD COLUMN     "incident_type" "IncidentType" NOT NULL;
