import { Flex, Grid, Heading, Text, Icon } from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { getWorks } from "./services/data";
import { useState } from "react";
import { useEffect } from "react";

import ContactComponent from "./common/contactComponent";
import CustomContainer from "./common/customContainer";
import NavBar from "./common/navBar";
import WorkCard from "./common/workCard";
import ScrollToTop from "./common/scrollToTop";
import CustomLink from "./common/customLink";
import { FiArrowRight } from "react-icons/fi";

const Works = () => {
  const works = getWorks();

  return (
    <>
      <Flex position="absolute" bottom="10" zIndex="10" right="10">
        <CustomLink label="Go back home /" path="/" icon={FiArrowRight} />
      </Flex>
      <ScrollToTop />
      <NavBar />
      <Grid pt={{ base: "10", md: "12" }}>
        <CustomContainer>
          <Flex gap="5" direction="column" mb="10">
            <Fade duration={300} delay={500}>
              <Heading>Works</Heading>
            </Fade>
            <Fade duration={300} delay={600}>
              <Text maxW="60ch">
                I do my best to deliver value when working on products, I build
                mostly in React and it's eco-system.
              </Text>
            </Fade>
          </Flex>

          <Grid gap="10">
            {works.map((work, index) => (
              <WorkCard work={work} index={index} />
            ))}
          </Grid>
        </CustomContainer>
      </Grid>
      <ContactComponent />
    </>
  );
};

export default Works;
