import { Flex, Heading, Text, Grid } from "@chakra-ui/react";
import CustomContainer from "../common/customContainer";
import { FaHammer, FaReadme } from "react-icons/fa";

import CustomLink from "./customLink";
import ColorText from "./colorText";
import LinkText from "./linkText";

const Hero = () => {
  return (
    <Grid as="header" position="relative">
      <Grid position="absolute" top="0" left="0" h="100%"></Grid>
      <CustomContainer>
        <Grid
          h="100%"
          placeItems="center"
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
                  size={{ base: "3xl", md: "4xl" }}
                  maxW={{ base: "20ch", md: "25ch" }}
                >
                  👋
                </Heading>
              </Flex>

              <Text lineHeight="2" maxW="50ch">
                Currently i am focused on building High quality{" "}
                <ColorText>Web & Mobile</ColorText> applications using{" "}
                <ColorText>React</ColorText> and{" "}
                <ColorText>React Native</ColorText>.
              </Text>

              <Text lineHeight="2" maxW="50ch">
                But i am a Software Developer experienced in Java, JavaScript &
                TypeScript. I also <LinkText label="write" path="/articles" />{" "}
                about the intrinsic parts of Programming
              </Text>
            </Flex>

            <Grid
              gap="10"
              align="center"
              templateColumns={{
                base: "repeat(2,  max-content )",
                md: "repeat(2, max-content)",
              }}
            >
              <CustomLink label="See Works" path="/works" icon={FaHammer} />

              <CustomLink label="Articles" path="/blog" icon={FaReadme} />
            </Grid>
          </Flex>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Hero;
