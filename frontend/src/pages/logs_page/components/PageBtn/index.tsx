import { FC } from "react";

import Button from "@/components/Button";
import { btnType } from '@/components/Button/models';

interface PageButtons {
  orderPage: number;
  page: number;
  setPage(arg0: number): void;
  setOrderPage(arg0: number): void;
  typeOrder: string;
  length: number
}

const PageButtons: FC<PageButtons> = ({
  orderPage,
  page,
  setPage,
  setOrderPage,
  typeOrder,
  length,
}) => {
  return(
    <>
      {page !== 0 || orderPage !== 0 ?
        <Button
          type={btnType.Button}
          onClick={() => {
            if (typeOrder === "Recent") {
              setOrderPage(orderPage - 5);
            }
            else if (typeOrder === "Oldest") {
              setOrderPage(orderPage - 5);
            }
            else {
              setPage(page - 5)
            }
          }}
        >
          Previous
        </Button>
        :
        null
      }
      {
        length > 0 ?
          <Button
            type={btnType.Button}
            onClick={() => {
              if (typeOrder === "Recent") {
                setOrderPage(orderPage + 5);
              }
              else if (typeOrder === "Oldest") {
                setOrderPage(orderPage + 5);
              }
              else {
                setPage(page + 5)
              }
            }}
          >
            Next
          </Button>
          : null
      }
    </>
  )
}
export default PageButtons
