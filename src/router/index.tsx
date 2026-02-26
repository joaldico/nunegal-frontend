import { createBrowserRouter } from "react-router-dom";

import { Layout } from "../components/Layout/Layout";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";
import { ProductList } from "../pages/ProductList/ProductList";
import GeneralError from "../pages/system/GeneralError";
import NotFound from "../pages/system/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <GeneralError />,
    children: [
      { index: true, element: <ProductList /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
