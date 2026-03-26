import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import { Suspense } from "react";
import Apps from "../pages/Apps";
import AppDetails from "../pages/AppDetails";
import InstalledApps from "../pages/InstalledApps";
import ErrorPage from "../pages/ErrorPage";

const loadData = fetch("/appdata.json").then((res) => res.json());
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: (
      <ErrorPage
        image="./assets/error-404.png"
        heading="Oops, page not found!"
        title="The page you are looking for is not available."
      ></ErrorPage>
    ),
    element: <MainLayout></MainLayout>,

    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <Home loadData={loadData}></Home>
          </Suspense>
        ),
      },
      {
        path: "/apps",
        loader: () => fetch("/appdata.json"),
        element: <Apps></Apps>,
      },
      {
        path: "/appsDetails/:id",
        loader: () => fetch("/appdata.json"),
        element: <AppDetails></AppDetails>,
      },
      {
        path: "/installation",
        loader: () => fetch("/appdata.json"),
        Component: InstalledApps,
      },
    ],
  },
]);
