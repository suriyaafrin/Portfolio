import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/home";
import Project from "./pages/project/project";
import Research from "./pages/research/research";
import Contact from "./pages/contact/contact";
import Layout from "./layout/layout";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true,
        element: <Home />
      },
      { path: "projects",
        element: <Project />
      },
      { path: "research",
        element: <Research />
      },
      { path: "contact",
        element: <Contact />
      },
    ],
  },
]);