import {
  Flex,
  Center,
  Image,
  Grid,
  Heading,
  Icon,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import CustomContainer from "./customContainer";
import ColorText from "./colorText";
import avatar from "../../assets/avatar.png";
// import element from "../../assets/element.svg";
import Socials from "./socials";
import { BiTargetLock } from "react-icons/bi";
import LinkText from "./linkText";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import { FaCaretRight, FaDownload, FaReadme } from "react-icons/fa";
import { getRecentTechnologies } from "../services/data";
import CustomLink from "./customLink";

const About = () => {
  const recentTechnologies = getRecentTechnologies();

  return (
    <Grid id="#about">
      <CustomContainer>
        <Grid
          py="10"
          mb="20"
          gap={{ base: "10", md: "20" }}
          templateColumns={{ base: "1fr", md: "max-content max-content" }}
        >
          <Flex order={{ base: 2, md: 1 }} gap="10" direction="column">
            <Fade duration={300}>
              <Heading size="xl">About Me</Heading>
              <Fade duration={600} delay={100}>
                <Text maxW="50ch" lineHeight="1.5">
                  I strongly believe software development is an art of problem
                  solving, so I'm keen on how to deliver value.
                </Text>
              </Fade>

              <Fade duration={600} delay={200}>
                <Text maxW="50ch" lineHeight="1.5">
                  This motivated me to invest in{" "}
                  <ColorText>solidifying my knowledge</ColorText> of computer
                  science concepts{" "}
                  <ColorText>
                    (Data Structures, Algorithms, Design Patterns, OOP, and so
                    on)
                  </ColorText>{" "}
                </Text>
              </Fade>
              <Fade duration={600} delay={300}>
                <Text maxW="50ch" lineHeight="1.5">
                  I am currently volunteering at{" "}
                  <LinkText
                    label="techovillehq"
                    path="https://technovillehq.com"
                  />
                  , but I'm {""}
                  <ColorText>
                    open to opportunities and collaborations{" "}
                  </ColorText>
                  . Aiming to work with a passionate team looking to add value
                  to people by creating products.
                </Text>
              </Fade>
              <Fade duration={600} delay={300}>
                <Text maxW="50ch" lineHeight="1.5">
                  Here are some technologies I've been working with recently:
                </Text>
              </Fade>

              <Grid
                templateColumns="max-content max-content"
                columnGap="5"
                rowGap="2"
                mt="-1"
                fontFamily="Fira Mono"
              >
                {recentTechnologies.map((tech, index) => (
                  <Fade duration={600} delay={300 + index * 100}>
                    <Flex key={tech} gap="2" align="center">
                      <Icon color="secondary.100" as={FaCaretRight} />{" "}
                      <Text>{tech}</Text>
                    </Flex>
                  </Fade>
                ))}
              </Grid>
            </Fade>
          </Flex>

          <Flex
            align="center"
            direction="column"
            gap="3"
            justify={{ base: "start", md: "start" }}
            order={{ base: 1, md: 2 }}
          >
            <Zoom duration={100} delay={400}>
              <Center
                h={{ base: "12rem", md: "15rem" }}
                w={{ base: "12rem", md: "15rem" }}
                overflow="hidden"
                flexDirection="column"
                p="2"
              >
                <Image borderRadius="md" src={avatar} />
              </Center>
            </Zoom>

            <Flex mt="3" align="center" gap="1">
              <Icon color="secondary.100" as={BiTargetLock} />
              <Text fontFamily="Fira Mono">Lagos, Nigeria.</Text>
            </Flex>
            <Socials col="repeat(5, 1fr)" size="1.3rem" gap="3" />

            <Box mt="5">
              <CustomLink fontSize="xs" label="Get my Resume" path="/" />
            </Box>
          </Flex>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default About;
