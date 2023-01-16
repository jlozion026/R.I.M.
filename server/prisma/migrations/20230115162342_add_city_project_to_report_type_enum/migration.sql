-- AlterEnum
ALTER TYPE "ReportType" ADD VALUE 'CityProject';

-- DropForeignKey
ALTER TABLE "CityProject" DROP CONSTRAINT "CityProject_reports_id_fkey";

-- DropEnum
DROP TYPE "IncidentType";

-- AddForeignKey
ALTER TABLE "CityProject" ADD CONSTRAINT "CityProject_reports_id_fkey" FOREIGN KEY ("reports_id") REFERENCES "Report"("report_id") ON DELETE RESTRICT ON UPDATE CASCADE;
