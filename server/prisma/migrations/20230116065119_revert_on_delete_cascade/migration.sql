-- DropForeignKey
ALTER TABLE "CityProject" DROP CONSTRAINT "CityProject_reports_id_fkey";

-- AddForeignKey
ALTER TABLE "CityProject" ADD CONSTRAINT "CityProject_reports_id_fkey" FOREIGN KEY ("reports_id") REFERENCES "Report"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;
