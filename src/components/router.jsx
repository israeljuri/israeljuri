import { createBrowserRouter } from "react-router-dom";

import Homepage from "./homepage";
import NotFound from "./notFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
