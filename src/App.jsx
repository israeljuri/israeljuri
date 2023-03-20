import { RouterProvider } from "react-router-dom";

import router from "./components/router";
import ScrollIndiator from "./components/common/scrollIndicator";

function App() {
  return (
    <>
      <ScrollIndiator />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
