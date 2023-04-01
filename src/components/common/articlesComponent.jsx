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
          py="20"
          px="10"
          color="white"
          borderRadius="md"
          textAlign="center"
          placeItems="center"
          gap="8"
        >
          <Fade duration={300} delay={200}>
            <Heading maxW="20ch" size={{ base: "2xl", md: "2xl" }}>
              The Intrinsic parts of Programming
            </Heading>
          </Fade>

          <Fade duration={300} delay={400}>
            <Text maxW="70ch" mb="7" lineHeight="2" fontSize="md">
              In as much as their are shinny tools out their, concepts important
              to writing and maintain a solution is often what codebases need! I
              write about fundamental but crucial topics to get the hange of as
              you journey into programming
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
