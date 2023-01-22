import { ArrReports } from "./models";

export async function addAddressAndPlusCode<T extends ArrReports>(reports: T, cb_setLoadAddr: (arg0: boolean) => void) {

  if (!reports) return;

  const newReports = [];

  cb_setLoadAddr(true);
  console.log(`len of reports ${reports.length}`)

  let test: any;

  const geocoder = new google.maps.Geocoder();

  for (const report of reports) {
    try {
      test = await new Promise(resolve => {
        setTimeout(() => {
          resolve( geocoder.geocode({ location: report.location.origin }))
          resolve(12);
        }, 800);
      })
      test.results[0].formatted_address

      const modifiedReport = {
        ...report,
        form_addr: test.results[0].formatted_address,
        plus_code: test.results[0].plus_code?.compound_code
      };

      newReports.push(modifiedReport);
    }
    catch (e) {
      console.log(e);

    }
  }
  //const resversed = [...newReports].reverse();
  //console.log("after");
  //console.table(resversed);

  cb_setLoadAddr(false);
  return newReports
}
