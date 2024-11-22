import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import "./animations.css";

import MainLayout from "./_components/MainLayout/MainLayout.tsx";
import withSuspense from "./_components/withSuspense.tsx";
import { homeRoutes } from "./_routes/HomeRoutes.tsx";
import NotFound from "./_components/NotFound.tsx";
import MyContextProvider from "./_context/conexts.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: homeRoutes,
  },
  {
    path: "*",
    element: withSuspense(NotFound),
  },
]);
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MyContextProvider>
  </StrictMode>
);
