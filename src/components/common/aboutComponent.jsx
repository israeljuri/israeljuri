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

const AboutComponent = () => {
  return (
    <Grid>
      <CustomContainer>
        <Grid
          py="10"
          mb="20"
          gap={{ base: "10", md: "20" }}
          templateColumns={{ base: "1fr", md: "max-content max-content" }}
        >
          <Flex order={{ base: 2, md: 1 }} gap="5" direction="column">
            <Heading size="xl">About Me</Heading>
            <Text maxW="50ch" lineHeight="1.5">
              I Strongly believe Software Development is an art of Problem
              Solving. This made me invest in building a{" "}
              <ColorText>solid foundation</ColorText> in Computer Science
              Concepts{" "}
              <ColorText>
                (Data Structures, Algorithms, Design Patterns, OOP etc.)
              </ColorText>{" "}
              picking up technologies and tools happens without the hassle.
            </Text>
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
              <Text>Lagos, Nigeria.</Text>
            </Flex>
            <Socials col="repeat(5, 1fr)" size="1.3rem" gap="3" />
          </Flex>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default AboutComponent;
