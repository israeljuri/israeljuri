import { Grid, Flex, Heading, Text } from "@chakra-ui/react";
import { getRecentWorks } from "../services/data";
import CustomContainer from "./customContainer";
import CustomLinks from "./customLink";
import WorkCard from "./workCard";
import LinkText from "./linkText";

const WorksComponents = () => {
  const list = getRecentWorks();

  return (
    <Grid pb="20" pt="10">
      <CustomContainer>
        <Grid gap={{ base: 10, md: 10 }}>
          <Flex direction="column" gap="5">
            <Heading>Recent Projects</Heading>
            <Text>
              Here are recent products i worked on, to see all products click{" "}
              <LinkText label="here" path="/works" />{" "}
            </Text>
          </Flex>

          <Grid gap="10" templateColumns={{ base: "1fr", md: "1fr 1fr" }}>
            {list.map((item, index) => (
              <WorkCard noImage work={item} index={index} />
            ))}
          </Grid>

          <Flex>
            <CustomLinks label="See all works" path="/works" />
          </Flex>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default WorksComponents;
