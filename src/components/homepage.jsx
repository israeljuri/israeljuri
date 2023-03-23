import { Grid } from "@chakra-ui/react";
import About from "./common/about";
import ArticlesComponent from "./common/articlesComponent";
import Experience from "./common/experience";
import Hero from "./common/hero";
import NavBar from "./common/navBar";

const Homepage = () => {
  return (
    <>
      <Grid minH="100vh" templateRows="max-content 1fr">
        <NavBar />
        <Hero />
      </Grid>
      <About />
      <Experience />
      <ArticlesComponent />
    </>
  );
};

export default Homepage;
