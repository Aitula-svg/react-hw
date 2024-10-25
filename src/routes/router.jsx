import { createBrowserRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { HomePage } from "../pages/HomePage";
import { DetailPage } from "../pages/DetailPage";
import { LoginPage } from "../pages/LoginPage";
import { BlogPage } from "../pages/BlogPage";
import { ShopPage } from "../pages/ShopPage";
import { PlantCare } from "../pages/PlantCare";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"/home-page"} />,
      },
      {
        path: "home-page",
        element: <HomePage />,
      },
      {
        path: "home-page/:plantId",
        element: <DetailPage />,
      },
      {
        path: "sign-in",
        element: <LoginPage />,
      },
      {
        path: "shop-page",
        element: <ShopPage />
      },
      {
        path: "plant-care",
        element: <PlantCare />
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
    ],
  },
]);
