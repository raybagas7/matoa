import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProductPage from "../pages/ProductAddPage/ProductPage";
import ProductListPage from "../pages/ProductListPage/ProductListPage";
import EntryPage from "../pages/EntryPage/EntryPage";
import HomePage from "../pages/HomePage/HomePage";
import Admin from "../Admin";
import User from "../User";
import UserContextProvider from "../Context/UserContext";
import ProductEditPage from "../pages/ProductEditPage/ProductEditPage";
import ProductViewPage from "../pages/ProductViewPage/ProductViewPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <UserContextProvider>
        <App />
      </UserContextProvider>
    ),
    children: [
      { path: "", element: <HomePage /> },
      { path: "/entry", element: <EntryPage /> },
    ],
  },
  {
    path: "/user",
    element: (
      <UserContextProvider>
        <User />
      </UserContextProvider>
    ),
    children: [{ path: "", element: <HomePage /> }],
  },
  {
    path: "/admin",
    element: (
      <UserContextProvider>
        <Admin />
      </UserContextProvider>
    ),
    children: [
      { path: "", element: <ProductListPage /> },
      { path: "product/add", element: <ProductPage /> },
      { path: "product/edit/:id", element: <ProductEditPage /> },
      { path: "product/view/:id", element: <ProductViewPage /> },
    ],
  },
]);
