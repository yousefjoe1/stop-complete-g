import { lazy } from "react";
import withSuspense from "../_components/withSuspense";
import GameGroup from "../Pages/GameGroup/GameGroup";

// pages
// Lazy load components

const Home = lazy(() => import("../Pages/Home/Home"));
const Auth = lazy(() => import("../Pages/Home/Auth/Auth"));
const AllInfo = lazy(() => import("../Pages/AllInfo/AllInfo"));
const Religin = lazy(() => import("../Pages/Religin/Religin"));
const General = lazy(() => import("../Pages/General/General"));

export const homeRoutes = [
  {
    index: true,
    element: withSuspense(Home),
  },
  {
    path: "/auth",
    element: withSuspense(Auth),
  },
  {
    path: "/group",
    element: withSuspense(GameGroup),
  },
  {
    path: "/all-info",
    element: withSuspense(AllInfo),
  },
  {
    path: "/religin",
    element: withSuspense(Religin),
  },
  {
    path: "/general",
    element: withSuspense(General),
  },
];
