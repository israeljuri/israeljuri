import { Flex, Heading, Text, Grid, Image, Center } from "@chakra-ui/react";
import CustomContainer from "../common/customContainer";
import { FaHammer, FaReadme } from "react-icons/fa";
import CustomLink from "./customLink";
import avatar from "../../assets/avatar.png";
import LinkText from "./linkText";
import { getTechnologies } from "../services/data";

const Hero = () => {
  const technologies = getTechnologies();
  return (
    <Grid as="header">
      <CustomContainer>
        <Grid
          // pt={{ base: 12, md: 20 }}
          // pb={{ base: 20, md: 20 }}
          gap="10"
          py="5"
          justifyContent="center"
          alignItems={{ base: "center", md: "stretch" }}
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        >
          <Flex
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
              <Text lineHeight="2" fontSize="lg" maxW="50ch">
                Hi 👋 it's{" "}
                <Text as="span" color="secondary.100">
                  Israel
                </Text>
                , Specialized in building high-quality applications using React
                and it's eco-system.
              </Text>

              <Text lineHeight="2" fontSize="lg" maxW="50ch">
                I am a{" "}
                <Text as="span" color="secondary.100">
                  Software Developer
                </Text>{" "}
                experienced in JavaScript, TypeScript and Java. I strongly
                believe in problem solving, so I do my best to demonstrate this
                in my Works.
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
            h={{ base: "15rem", md: "25rem" }}
            overflowY="scroll"
            direction="column"
            align={{ base: "center", md: "stretch" }}
            textAlign={{ base: "center", md: "left" }}
            justify="start"

            // gap="5"
          >
            {technologies.map((item, index) => (
              <Heading
                opacity={index % 2 === 0 ? ".5" : ".2"}
                maxW="20ch"
                // fontWeight="normal"
                textTransform="uppercase"
                size={{ base: "4xl", md: "4xl" }}
              >
                {item}
              </Heading>
            ))}
          </Flex>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Hero;
