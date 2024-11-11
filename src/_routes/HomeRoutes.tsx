import { lazy } from "react";
import withSuspense from "../_components/withSuspense";
import GameGroup from "../Pages/GameGroup/GameGroup";

// pages
// Lazy load components

const Home = lazy(() => import("../Pages/Home/Home"));
const Auth = lazy(() => import("../Pages/Home/Auth/Auth"));

export const homeRoutes = [
      {
        index: true,
        element: withSuspense(Home),
      },
      {
        path: '/auth',
        element: withSuspense(Auth),
      },
      {
        path: '/group',
        element: withSuspense(GameGroup),
      },

    ]