import { ArrReports } from "./models";
import { getAddresses } from '@/lib/coordToAddr'

export async function addAddressAndPlusCode(reports: ArrReports, cb_setLoadAddr: (arg0: boolean) => void) {
  const newReports = [];
  cb_setLoadAddr(true);
  for (const report of reports) {
    const { form_addr, plus_code } = await getAddresses(report.location.origin,);

    const modifiedReport = { ...report, form_addr: form_addr, plus_code: plus_code };
    newReports.push(modifiedReport);
  }

  cb_setLoadAddr(false);
  return newReports
}

