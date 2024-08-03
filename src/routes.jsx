import Root from "./components/Layout/Root";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";

export const routes = [
  { label: "HOME", url: "/" },
  { label: "SCHEDULE", url: "/schedule" },
  { label: "VODS", url: "/vods" },
  { label: "STANDINGS", url: "/standings" },
  { label: "REWARDS", url: "/rewards" },
  { label: "PICK'EM", url: "/pick'em" },
  { label: "NEWS", url: "/news" },
];

export const routesArray = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/vods",
        element: <Schedule />,
      },
      {
        path: "/standings",
        element: <Schedule />,
      },
      {
        path: "/rewards",
        element: <Schedule />,
      },
      {
        path: "/pick'em",
        element: <Schedule />,
      },
      {
        path: "/news",
        element: <Schedule />,
      },
    ],
  },
];
