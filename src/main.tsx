import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { StrictMode } from "react";
import Root from "./routes/root";
import ErrorPage from "./pages/Error";
import Accueil from "./pages/Accueil";
import Tarifs from "./pages/Tarifs";
import Contact from "./pages/Contact";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";
import MentionLegales from "./pages/MentionLegales";
import Automobile from "./pages/Automobile";
import Vitrage from "./pages/Vitrage";
import Textile from "./pages/Textile";

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
        path: "/tarifs",
        element: <Tarifs />,
      },
      {
        path: "/automobile",
        element: <Automobile />,
      },
      {
        path: "/vitrage",
        element: <Vitrage />,
      },
      {
        path: "/textile",
        element: <Textile />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/politique_confidentialite",
        element: <PolitiqueConfidentialite />,
      },
      {
        path: "/mention_legales",
        element: <MentionLegales />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
