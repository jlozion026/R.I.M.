import { FC } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.css";

const Toastify: FC = () => {
  return (
    <>
      <ToastContainer hideProgressBar={true} theme="colored" />
    </>
  );
};

export default Toastify;
