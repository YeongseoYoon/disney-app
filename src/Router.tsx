import { createBrowserRouter } from "react-router-dom";
import { queryClient } from "./utils/queryClient";
import Home from "./pages/Home/Home";
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail";
import { loader as characterLoader } from "./pages/CharacterDetail/loader";
import { loader as homeLoader } from "./pages/Home/loader";
import Root from "./Root";
import ErrorBoundary from "./components/error/ErrorBoundary";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "",
        element: <Home />,
        loader: homeLoader(queryClient),
      },
      {
        path: "character/:id",
        element: <CharacterDetail />,
        loader: characterLoader(queryClient),
      },
    ],
  },
]);
export default Router;
