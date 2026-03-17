import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import { Suspense } from "react";
import Apps from "../pages/Apps";

const loadData = fetch("/appdata.json").then((res) => res.json());
export const router = createBrowserRouter([
  {
    path: "/",
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
    ],
  },
]);
