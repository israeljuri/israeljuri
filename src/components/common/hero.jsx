import {
  Flex,
  Heading,
  Text,
  Grid,
  Center,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import CustomContainer from "../common/customContainer";
import { FaHammer, FaReadme } from "react-icons/fa";
import CustomLink from "./customLink";
import LinkText from "./linkText";

import avatar from "../../assets/avatar-2.png";
import element from "../../assets/element.svg";

const Hero = () => {
  const { colorMode } = useColorMode();
  return (
    <Grid as="header">
      <CustomContainer>
        <Grid
          pt={{ base: 12, md: 20 }}
          pb={{ base: 20, md: 20 }}
          justifyContent="center"
          alignItems={{ base: "stretch", md: "stretch" }}
          templateColumns={{ base: "1fr", md: "1.5fr 1fr" }}
          gap={{ base: "10", md: 0 }}
        >
          <Flex
            order={{ base: 2, md: 1 }}
            as="article"
            direction="column"
            align={{ base: "center", md: "stretch" }}
            justify={{ base: "center", md: "center" }}
            textAlign={{ base: "center", md: "left" }}
            gap="10"
          >
            <Flex
              as="article"
              direction="column"
              align={{ base: "center", md: "stretch" }}
              textAlign={{ base: "center", md: "left" }}
              gap="8"
            >
              <Heading maxW="20ch" size={{ base: "2xl", md: "3xl" }}>
                I Build Frontend Products that Scales on Web & Mobile.
              </Heading>
              <Text lineHeight="2" fontSize="lg" maxW="50ch">
                Hi 👋 it's{" "}
                <Text as="span" color="secondary.100">
                  Israel
                </Text>
                , Currently i am focused on building high-quality applications
                using React and it's eco-system.
              </Text>

              <Text lineHeight="2" fontSize="lg" maxW="50ch">
                But I am a Frontend Developer experienced in JavaScript,
                TypeScript and Java. I strongly believe in problem solving, so I
                do my best to demonstrate this in my Works.
              </Text>

              <Text lineHeight="2" fontSize="lg" maxW="50ch">
                I also <LinkText label="write" path="/articles" /> about the
                intrinsic parts of Programming and occasionally play around{" "}
                <LinkText
                  label="LeetCode"
                  target="_blank"
                  to="https://leetcode.com"
                />
              </Text>
            </Flex>

            <Grid
              mt="5"
              gap="10"
              align="center"
              templateColumns={{
                base: "repeat(2,  max-content )",
                md: "repeat(3, max-content)",
              }}
            >
              <CustomLink label="See Projects" path="/works" icon={FaHammer} />

              <CustomLink label="Latest Article" path="/blog" icon={FaReadme} />
            </Grid>
          </Flex>

          <Flex
            align={{ base: "center", md: "start" }}
            justify={{ base: "center", md: "start" }}
            order={{ base: 1, md: 2 }}
          >
            <Center
              borderRadius="md"
              overflow="hidden"
              h={{ base: "15rem", md: "20rem" }}
              w={{ base: "15rem", md: "20rem" }}
              bg={`url(${element})`}
            >
              <Image
                filter={
                  colorMode === "light" ? "grayscale(0)" : "grayscale(10)"
                }
                src={avatar}
              />
            </Center>
          </Flex>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Hero;
