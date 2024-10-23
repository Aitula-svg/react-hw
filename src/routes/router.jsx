import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { TourForm } from "../components/Tour/TourForm";
import MainPage from "../pages/MainPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "add-form",
        element: <TourForm/>,
      },

      {
        path: "favorite",
        element: <h1>Favorite</h1>,
      },
    ],
  },
]);
