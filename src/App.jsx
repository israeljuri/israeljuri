import { RouterProvider } from "react-router-dom";
import router from "./components/router";
import NavBar from "./components/common/navBar";
import Footer from "./components/common/footer";

function App() {
  return (
    <>
      <NavBar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
