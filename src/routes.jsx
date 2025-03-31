import Root from "./components/Root";
import Home from "./pages/Home";
import Artist, { loader as artistLoader } from "./pages/Artist";
import AboutDetailPage, {
  loader as aboutDetailLoader,
} from "./pages/AboutDetailPage";
import Album, { loader as albumLoader } from "./pages/Album";

export const routes = [];

export const routesArray = [
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/artist/:artistId",
        element: <Artist />,
        loader: artistLoader,
      },
      {
        path: "/aboutDetail/:artistId",
        element: <AboutDetailPage />,
        loader: aboutDetailLoader,
      },
      {
        path: "/album/:artistId/:albumId",
        element: <Album />,
        loader: albumLoader,
      },
    ],
  },
];
