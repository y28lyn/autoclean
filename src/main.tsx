import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { StrictMode } from "react";
import Root from "./routes/root";
import ErrorPage from "./pages/Error";
import Accueil from "./pages/Accueil";
import Tarif from "./pages/Tarif";
import Contact from "./pages/Contact";

const container = document.createElement("div");
document.body.appendChild(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/tarif",
        element: <Tarif />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
