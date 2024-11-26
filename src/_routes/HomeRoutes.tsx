import { lazy } from "react";
import withSuspense from "../_components/withSuspense";

// pages
// Lazy load components

const Home = lazy(() => import("../Pages/Home/Home"));
const Auth = lazy(() => import("../Pages/Home/Auth/Auth"));
const AllInfo = lazy(() => import("../Pages/AllInfo/AllInfo"));
const Religin = lazy(() => import("../Pages/Religin/Religin"));
const General = lazy(() => import("../Pages/General/General"));
const MyAnswers = lazy(() => import("../Pages/MyAnswers/MyAnswers"));

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
  {
    path: "/my-answers",
    element: withSuspense(MyAnswers),
  },
];
