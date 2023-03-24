import { createBrowserRouter } from "react-router-dom";

import Homepage from "./homepage";
import NotFound from "./notFound";
import Works from "./works";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/works",
    element: <Works />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
