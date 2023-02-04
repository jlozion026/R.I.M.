import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { AuthContextProvider } from "@/setup/context-manager/authContext";
import Toastify from "./components/Toastify";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <AuthContextProvider>
    <BrowserRouter>
      <App />
      <Toastify />
    </BrowserRouter>
  </AuthContextProvider>
  // </React.StrictMode>
);
