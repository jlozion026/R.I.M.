-- DropForeignKey
ALTER TABLE "Incident" DROP CONSTRAINT "Incident_reports_id_fkey";

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_reports_id_fkey" FOREIGN KEY ("reports_id") REFERENCES "Report"("report_id") ON DELETE CASCADE ON UPDATE CASCADE;
