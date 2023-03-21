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
          pt={{ base: 12, md: 20 }}
          pb={{ base: 20, md: 20 }}
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
              <Heading
                lineHeight={{ base: "1.5", md: "1.2" }}
                size={{ base: "3xl", md: "2xl" }}
              >
                I Build Frontend Products&nbsp;that Scales&nbsp;on Web & Mobile.
              </Heading>

              <Text lineHeight="2" fontSize="lg" maxW="50ch">
                Hi 👋 it's{" "}
                <Text as="span" color="secondary.100">
                  Israel
                </Text>
                , Currently i am focused on building high-quality applications
                using React and it's eco-system.
              </Text>

              {/* <Text lineHeight="2" fontSize="lg" maxW="50ch">
                  I also <LinkText label="write" path="/articles" /> about the
                  intrinsic parts of Programming and occasionally play around{" "}
                  <LinkText
                    label="LeetCode"
                    target="_blank"
                    to="https://leetcode.com"
                  />
                </Text>

                <Text lineHeight="2" fontSize="lg" maxW="50ch">
                  But I am a Frontend Developer experienced in JavaScript,
                  TypeScript and Java. I strongly believe in problem solving, so
                  I do my best to demonstrate this in my Works.
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
