import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductPage from "../pages/ProductAddPage/ProductPage";
import ProductListPage from "../pages/ProductListPage/ProductListPage";
import EntryPage from "../pages/EntryPage/EntryPage";
import HomePage from "../pages/HomePage/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "product/add", element: <ProductPage /> },
      { path: "list", element: <ProductListPage /> },
      { path: "", element: <HomePage /> },
      { path: "/entry", element: <EntryPage /> },
    ],
  },
  {
    path: "/user",
    element: <EntryPage />,
  },
  {
    path: "/entry",
    element: <EntryPage />,
  },
]);
