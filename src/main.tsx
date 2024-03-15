import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./error-page";

import { Layout } from "./routes/Layout";
import Coco from "./routes/coco";
import Index from "./routes";
import GlobalStyles from "./components/GlobalStyles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "cocos/:cocoId",
            element: <Coco />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
