import { Grid, Flex, Heading, Text } from "@chakra-ui/react";
import CustomContainer from "./common/customContainer";

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
          <Heading fontSize="10rem">404</Heading>
          <Text mb="5" fontSize="xl" maxW="70ch" lineHeight="1.5">
            The page you're looking for cannot be found, or is under
            development.
          </Text>
        </Flex>
      </CustomContainer>
    </Grid>
  );
};

export default NotFound;
