import { Flex, Center, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import CustomContainer from "./customContainer";

import { FaReact, FaJava } from "react-icons/fa";
import ColorText from "./colorText";

const Tools = () => {
  return (
    <Grid>
      <CustomContainer>
        <Grid py="20" mb="20">
          <Flex gap="5" direction="column">
            <Heading size="lg">Briefly</Heading>
            <Text maxW="50ch" lineHeight="1.5">
              I Strongly believe Software Development is an art of Problem
              Solving not jumping on new tools.
            </Text>
            <Text maxW="50ch" lineHeight="1.5">
              This made me invest in building a solid foundation in Computer
              Science Concepts (Data Structures, Algorithms, Design Patterns,
              OOP etc.)
            </Text>
            <Text maxW="50ch" lineHeight="1.5">
              Making me capable of picking up technologies and tools without the
              hassle.
            </Text>
          </Flex>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Tools;
