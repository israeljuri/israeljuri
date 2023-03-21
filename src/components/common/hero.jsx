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
import ColorText from "./colorText";

const Hero = () => {
  const { colorMode } = useColorMode();
  return (
    <Grid as="header">
      <CustomContainer>
        <Grid
          py={{ base: 10, md: 0 }}
          gap={{ base: 10, md: 0 }}
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        >
          <Flex
            order={{ base: 2, md: 1 }}
            as="article"
            direction="column"
            justify="center"
            gap="10"
          >
            <Flex as="article" direction="column" gap="5">
              <Heading mb="5" size={{ base: "xl", md: "xl" }} maxW="30ch">
                I Build Frontend Products that Scales on Web & Mobile.
              </Heading>

              <Text lineHeight="2" fontSize="lg" maxW="50ch">
                Currently i am focused on building high-quality{" "}
                <ColorText>Frontend applications</ColorText> using{" "}
                <ColorText>React</ColorText> and it's eco-system.
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
            align="start"
            justify={{ base: "start", md: "center" }}
            order={{ base: 1, md: 2 }}
          >
            <Center
              bg={`url(${element})`}
              h={{ base: "12rem", md: "22rem" }}
              w={{ base: "12rem", md: "22rem" }}
              borderRadius="md"
              overflow="hidden"
              _hover={{ div: { transform: "rotate(360deg)" } }}
            >
              <Center
                transition="5s"
                boxShadow="0 3rem 5rem rgba(0,0,0, .5)"
                w={{ base: "8rem", md: "15rem" }}
                h={{ base: "8rem", md: "15rem" }}
                bg="white"
                overflow="hidden"
                borderRadius="full"
              >
                <Image filter="grayscale(10) contrast(1)" src={avatar} />
              </Center>
            </Center>
          </Flex>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Hero;
