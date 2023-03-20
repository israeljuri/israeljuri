import { Flex, Heading, Text, Grid } from "@chakra-ui/react";
import CustomContainer from "../common/customContainer";
import { FaHammer, FaReadme } from "react-icons/fa";
import CustomLink from "./customLink";
import LinkText from "./linkText";

const Hero = () => {
  return (
    <Grid as="header">
      <CustomContainer>
        <Grid
          py="20"
          justifyContent="center"
          alignItems={{ base: "stretch", md: "stretch" }}
          templateColumns={{ base: "1fr", md: "2fr 1fr" }}
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
              <Heading lineHeight="1.2" size="2xl">
                I Build Frontend Products&nbsp;that Scales&nbsp;on Web & Mobile.
              </Heading>

              <Text lineHeight="2" fontSize="lg" maxW="50ch">
                I'm{" "}
                <Text as="span" color="secondary.100">
                  Israel Juri
                </Text>
                , currently focused on building high-quality products using
                React, React Native and their eco-system.
              </Text>
              {/* 
              <Text lineHeight="2" fontSize="lg" maxW="50ch">
                I <LinkText label="blog" path="/blogs" /> about the intrinsic
                parts of Programming and occasionally play around{" "}
                <LinkText label="LeetCode" path="https://leetcode.com" /> 
              </Text> */}
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
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Hero;
