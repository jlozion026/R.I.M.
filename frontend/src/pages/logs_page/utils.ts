import { ArrReports } from "./models";

export function addAddressAndPlusCode<T extends ArrReports>(reports: T, cb_setLoadAddr: (arg0: boolean) => void) {

  if (!reports) return;


  cb_setLoadAddr(true);
  const reversed = [...reports].reverse();
  //console.log("after");

  const arrByOrder = {
    desc: reversed,
    asc: reports
  }

  cb_setLoadAddr(false);
  return arrByOrder
}
