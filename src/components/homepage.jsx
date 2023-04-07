import { Grid, Flex } from "@chakra-ui/react";
import About from "./common/about";
import ArticlesComponent from "./common/articlesComponent";
import ContactComponent from "./common/contactComponent";
import Experience from "./common/experience";
import Hero from "./common/hero";
import NavBar from "./common/navBar";
import WorksComponents from "./common/worksComponents";
import ScrollToTop from "./common/scrollToTop";
import CustomLink from "./common/customLink";
import { FiArrowRight } from "react-icons/fi";

const Homepage = () => {
  return (
    <>
      <Flex position="absolute" bottom="5" zIndex="10" right="10">
        <CustomLink
          size="sm"
          label="Next route /works"
          path="/works"
          icon={FiArrowRight}
        />
      </Flex>
      <ScrollToTop />
      <Grid
        minH={{ base: "100vh", md: "40rem" }}
        templateRows="max-content 1fr"
      >
        <NavBar />
        <Hero />
      </Grid>
      <About />
      <Experience />
      {/* <WorksComponents /> */}
      <ArticlesComponent />
      <ContactComponent />
    </>
  );
};

export default Homepage;
