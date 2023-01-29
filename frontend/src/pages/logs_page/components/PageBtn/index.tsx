import { FC } from "react";

import Button from "@/components/Button";
import { btnType } from '@/components/Button/models';

import {IPageButtons} from "../../models";


const PageButtons: FC<IPageButtons> = ({
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
