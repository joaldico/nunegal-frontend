import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../components/Layout/Layout";
import { ProductList } from "../pages/ProductList/ProductList";
import GeneralError from "../pages/system/GeneralError";
import NotFound from "../pages/system/NotFound";
import UnderConstruction from "../pages/system/UnderConstruction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <GeneralError />,
    children: [
      { index: true, element: <ProductList /> },
      { path: "product/:id", element: <UnderConstruction /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
