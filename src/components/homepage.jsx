import { Grid } from "@chakra-ui/react";
import Tools from "./common/tools";
import Hero from "./common/hero";
import NavBar from "./common/navBar";

const Homepage = () => {
  return (
    <>
      <Grid minH="100vh">
        <NavBar />
        <Hero />
      </Grid>
      <Tools />
    </>
  );
};

export default Homepage;
