import { Flex, Heading, Text, Grid } from "@chakra-ui/react";
import CustomContainer from "../common/customContainer";
import { FiBriefcase, FiExternalLink } from "react-icons/fi";
import Fade from "react-reveal/Fade";

import CustomLink from "./customLink";
import ColorText from "./colorText";
import LinkText from "./linkText";

const Hero = () => {
  return (
    <Grid as="header" position="relative">
      <CustomContainer>
        <Grid
          mt={{ base: "-5", md: 0 }}
          h="100%"
          placeItems="center"
          alignItems="center"
          py={{ base: 10, md: 0 }}
          gap={{ base: 10, md: 0 }}
        >
          <Flex
            align="center"
            justify="center"
            as="article"
            direction="column"
            gap="10"
            textAlign="center"
          >
            <Flex as="article" direction="column" gap="10" align="center">
              <Fade delay={200} duration={200}>
                <Flex direction={{ base: "column", md: "row" }}>
                  <Heading
                    order={{ base: 2, md: 1 }}
                    fontWeight="600"
                    size={{ base: "3xl", md: "4xl" }}
                    maxW={{ base: "20ch", md: "25ch" }}
                  >
                    I am Israel Juri
                  </Heading>
                  <Heading
                    order={{ base: 1, md: 2 }}
                    fontWeight="600"
                    size={{ base: "3xl", md: "3xl" }}
                    maxW={{ base: "20ch", md: "25ch" }}
                  >
                    👋
                  </Heading>
                </Flex>
              </Fade>
              <Fade delay={400} duration={200}>
                <Text fontSize="md" lineHeight="2" maxW="50ch">
                  Currently, I am focused on building high-quality{" "}
                  <ColorText>web</ColorText> applications using {" "}
                  <ColorText>React</ColorText> and it's eco-system.
                </Text>

                <Text fontSize="md" lineHeight="2" maxW="50ch">
                  However, I am a Frontend Engineer with experience in
                  JavaScript & TypeScript. I also started{" "}
                  <LinkText label="blogging" path="/articles" /> about the
                  underlying principles of Programming
                </Text>
              </Fade>
            </Flex>

            <Fade delay={600} duration={200}>
              <Grid
                gap="10"
                align="center"
                templateColumns={{
                  base: "repeat(2,  max-content )",
                  md: "repeat(2, max-content)",
                }}
              >
                <CustomLink label="Works" path="/works" icon={FiBriefcase} />

                <CustomLink
                  label="Articles"
                  path="https://israeljuri.hashnode.dev"
                  icon={FiExternalLink}
                />
              </Grid>
            </Fade>
          </Flex>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Hero;
