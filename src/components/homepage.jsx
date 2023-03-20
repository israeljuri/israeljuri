import { Grid } from "@chakra-ui/react";
import Hero from "./common/hero";
import Navbar from "./common/navbar";

const Homepage = () => {
  return (
    <>
      <Grid minH="100vh">
        <Navbar />
        <Hero />
      </Grid>
    </>
  );
};

export default Homepage;
