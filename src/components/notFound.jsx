import { Grid, Flex, Heading, Text } from "@chakra-ui/react";
import CustomContainer from "./common/customContainer";
import CustomLink from "./common/customLink";
import { BiHome } from "react-icons/bi";

const NotFound = () => {
  return (
    <Grid id="hero">
      <CustomContainer>
        <Flex
          textAlign="center"
          align="center"
          justify="center"
          direction="column"
          minH="30rem"
          gap="5"
          pt={{ base: 0, md: "10rem" }}
        >
          <Heading size="3xl">😒 Not found</Heading>
          <Text mb="5" fontSize="xl" maxW="70ch" lineHeight="1.5">
            The page you're looking for cannot be found.
          </Text>
          <CustomLink label="Go home" path="/" icon={BiHome} />
        </Flex>
      </CustomContainer>
    </Grid>
  );
};

export default NotFound;
