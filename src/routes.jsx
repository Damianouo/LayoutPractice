import Root from "./components/Layout/Root";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import { Navigate } from "react-router-dom";
export const routes = [
  { label: "home", url: "/home" },
  { label: "explore", url: "/explore" },
  { label: "grok", url: "/i/grok" },
  { label: "notifications", url: "/notifications" },
  { label: "messages", url: "/messages" },
  { label: "jobs", url: "/jobs" },
  { label: "profile", url: "/profile" },
];

export const routesArray = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/i/grok",
        element: <Explore />,
      },
      {
        path: "/notifications",
        element: <Explore />,
      },
      {
        path: "/messages",
        element: <Explore />,
      },
      {
        path: "/jobs",
        element: <Explore />,
      },
      {
        path: "/profile",
        element: <Explore />,
      },
    ],
  },
];
