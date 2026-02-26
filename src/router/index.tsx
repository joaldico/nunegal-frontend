import { createBrowserRouter } from "react-router-dom";

import GeneralError from "../pages/system/GeneralError";
import NotFound from "../pages/system/NotFound";
import UnderConstruction from "../pages/system/UnderConstruction";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <GeneralError />,
    children: [
      { index: true, element: <UnderConstruction /> }, 
      { path: "product/:id", element: <UnderConstruction /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);