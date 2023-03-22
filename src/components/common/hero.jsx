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
import ColorText from "./colorText";

const Hero = () => {
  const { colorMode } = useColorMode();
  return (
    <Grid as="header">
      <CustomContainer>
        <Grid
          py={{ base: 10, md: 0 }}
          gap={{ base: 10, md: 0 }}
          templateColumns={{ base: "1fr", md: "2fr 1fr" }}
        >
          <Flex
            order={{ base: 2, md: 1 }}
            as="article"
            direction="column"
            justify="center"
            gap="10"
          >
            <Flex as="article" direction="column" gap="4">
              <Heading
                mb="5"
                fontWeight="600"
                size={{ base: "2xl", md: "2xl" }}
                maxW="25ch"
              >
                I build the <ColorText>frontend</ColorText> of products on web
                and mobile.
              </Heading>

              <Text lineHeight="2" fontSize="lg" maxW="50ch">
                I am <ColorText fontWeight="500">Israel Juri</ColorText>,{" "}
                Currently I'm focused on turning mockups into high-quality{" "}
                <ColorText>applications</ColorText> using{" "}
                <ColorText>React</ColorText> and it's eco-system.
              </Text>
            </Flex>

            <Grid
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
