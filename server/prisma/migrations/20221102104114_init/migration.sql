-- CreateEnum
CREATE TYPE "AccType" AS ENUM ('NORMAL', 'ADMIN');

-- CreateTable
CREATE TABLE "Account" (
    "acc_id" TEXT NOT NULL,
    "email" VARCHAR(180) NOT NULL,
    "password" TEXT NOT NULL,
    "acc_type" "AccType" NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("acc_id")
);

-- CreateTable
CREATE TABLE "Report" (
    "report_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL,
    "location" VARCHAR NOT NULL,
    "description" VARCHAR(250) NOT NULL,
    "reporter_id" TEXT,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("report_id")
);

-- CreateTable
CREATE TABLE "CityProject" (
    "project_id" TEXT NOT NULL,
    "project_name" VARCHAR(150) NOT NULL,
    "contractor_name" VARCHAR(150) NOT NULL,
    "date_started" DATE NOT NULL,
    "date_ended" DATE NOT NULL,
    "source_fund" VARCHAR(150) NOT NULL,
    "project_ammount" DOUBLE PRECISION NOT NULL,
    "contract_ammount" DOUBLE PRECISION NOT NULL,
    "reports_id" TEXT NOT NULL,

    CONSTRAINT "CityProject_pkey" PRIMARY KEY ("project_id")
);

-- CreateTable
CREATE TABLE "Incident" (
    "incident_id" TEXT NOT NULL,
    "incident_type" VARCHAR(110) NOT NULL,
    "date_started" DATE NOT NULL,
    "date_ended" DATE NOT NULL,
    "reports_id" TEXT NOT NULL,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("incident_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_acc_id_key" ON "Account"("acc_id");

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CityProject_reports_id_key" ON "CityProject"("reports_id");

-- CreateIndex
CREATE UNIQUE INDEX "Incident_reports_id_key" ON "Incident"("reports_id");

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_reporter_id_fkey" FOREIGN KEY ("reporter_id") REFERENCES "Account"("acc_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CityProject" ADD CONSTRAINT "CityProject_reports_id_fkey" FOREIGN KEY ("reports_id") REFERENCES "Report"("report_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_reports_id_fkey" FOREIGN KEY ("reports_id") REFERENCES "Report"("report_id") ON DELETE RESTRICT ON UPDATE CASCADE;
