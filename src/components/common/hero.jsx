import { Flex, Heading, Text, Grid } from "@chakra-ui/react";
import CustomContainer from "../common/customContainer";
import { FaHammer, FaExternalLinkSquareAlt } from "react-icons/fa";
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
          placeItems="start"
          alignItems="center"
          py={{ base: 10, md: 0 }}
          gap={{ base: 10, md: 0 }}
        >
          <Flex
            align="start"
            justify="start"
            as="article"
            direction="column"
            gap="10"
            textAlign="left"
          >
            <Flex as="article" direction="column" gap="10" align="start">
              <Fade delay={200} duration={200}>
                <Flex direction={{ base: "column", md: "row" }}>
                  <Heading
                    order={{ base: 2, md: 1 }}
                    fontWeight="600"
                    size={{ base: "3xl", md: "3xl" }}
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
                <Text lineHeight="2" maxW="50ch">
                  Currently, I am focused on building high-quality{" "}
                  <ColorText>web & mobile</ColorText> applications using {" "}
                  <ColorText>React</ColorText> and{" "}
                  <ColorText>React Native</ColorText>.
                </Text>

                <Text lineHeight="2" maxW="50ch">
                  However, I am a Software Developer with experience in Java,
                  JavaScript & TypeScript. I also{" "}
                  <LinkText label="write" path="/articles" /> about the
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
                <CustomLink label="Works" path="/works" icon={FaHammer} />

                <CustomLink
                  label="Articles"
                  path="https://israeljuri.hashnode.dev"
                  icon={FaExternalLinkSquareAlt}
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
