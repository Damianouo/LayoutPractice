import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesArray } from "./routes";

const router = createBrowserRouter(routesArray);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
