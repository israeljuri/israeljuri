import { Heading, Grid, Text, useColorMode } from "@chakra-ui/react";
import CustomContainer from "./customContainer";
import CustomLink from "./customLink";
import element from "../../assets/element.svg";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import Fade from "react-reveal/Fade";

const ArticlesComponent = () => {
  const { colorMode } = useColorMode();
  return (
    <Grid>
      <CustomContainer>
        <Grid
          bg={`url(${element})`}
          // bg="secondary.200"
          py="20"
          px="10"
          gap="8"
          color="white"
          borderRadius="xl"
          textAlign="center"
          placeItems="center"
        >
          <Fade duration={300} delay={200}>
            <Heading maxW="20ch" size={{ base: "2xl", md: "2xl" }}>
              {/* The Intrinsic parts of Programming */}
              Articles on Programming
            </Heading>
          </Fade>

          <Fade duration={300} delay={400}>
            <Text maxW="70ch" mb="7" lineHeight="2" fontSize="md">
              In as much as their are shinny tools/frameworks out there,
              underlying concepts that makes those tools shinny are often
              neglected, which makes learning them a lot harder. I blog about
              those fundamental but crucial concepts to help you pickup
              tools/frameworks faster.
            </Text>
          </Fade>

          <Fade duration={300} delay={800}>
            <CustomLink
              label="See all articles"
              icon={FaExternalLinkSquareAlt}
              path="https://israeljuri.hashnode.dev"
            />
          </Fade>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default ArticlesComponent;
