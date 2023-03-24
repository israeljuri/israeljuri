import {
  Flex,
  Center,
  Image,
  Grid,
  Heading,
  Icon,
  Text,
} from "@chakra-ui/react";
import CustomContainer from "./customContainer";
import ColorText from "./colorText";
import avatar from "../../assets/avatar-2.png";
import element from "../../assets/element.svg";
import Socials from "./socials";
import { BiTargetLock } from "react-icons/bi";
import LinkText from "./linkText";
import { FaCaretRight } from "react-icons/fa";
import { getRecentTechnologies } from "../services/data";

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
            <Heading size="xl">About Me</Heading>
            <Text maxW="50ch" lineHeight="1.5">
              I strongly believe software development is an art of problem
              solving, so I'm keen on how to deliver value.
            </Text>
            <Text maxW="50ch" lineHeight="1.5">
              This motivated me to invest in{" "}
              <ColorText>solidifying my knowledge</ColorText> of computer
              science concepts{" "}
              <ColorText>
                (Data Structures, Algorithms, Design Patterns, OOP, and so on)
              </ColorText>{" "}
            </Text>
            <Text maxW="50ch" lineHeight="1.5">
              I am currently volunteering at{" "}
              <LinkText label="techovillehq" path="https://technovillehq.com" />{" "}
              , but I'm {" "}
              <ColorText>open to opportunities and collaborations </ColorText>.
              Aiming to work with a passionate team looking to add value to
              people by creating products.
            </Text>
            <Text maxW="50ch" lineHeight="1.5">
              Here are some technologies I've been working with recently:
            </Text>

            <Grid
              templateColumns="max-content max-content"
              columnGap="5"
              rowGap="2"
              fontFamily="Fira Mono"
            >
              {recentTechnologies.map((tech) => (
                <Flex key={tech} gap="2" align="center">
                  <Icon color="secondary.100" as={FaCaretRight} />{" "}
                  <Text>{tech}</Text>
                </Flex>
              ))}
            </Grid>
          </Flex>

          <Flex
            align="center"
            direction="column"
            gap="3"
            justify={{ base: "start", md: "start" }}
            order={{ base: 1, md: 2 }}
          >
            <Center
              bg={`url(${element})`}
              h={{ base: "12rem", md: "16rem" }}
              w={{ base: "12rem", md: "16rem" }}
              borderRadius="md"
              overflow="hidden"
              _hover={{
                div: {
                  transform: "scale(1.05)",
                },
              }}
              flexDirection="column"
            >
              <Image filter="grayscale(1)" src={avatar} />
            </Center>
            <Flex mt="3" align="center" gap="1">
              <Icon color="secondary.100" as={BiTargetLock} />
              <Text fontFamily="Fira Mono">Lagos, Nigeria.</Text>
            </Flex>
            <Socials col="repeat(5, 1fr)" size="1.3rem" gap="3" />
          </Flex>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default About;
