import { Grid, Flex, Heading, Avatar, Text, Icon, Box } from "@chakra-ui/react";
import { getExperiences } from "../services/data";
import CustomContainer from "./customContainer";
import ColorText from "./colorText";
import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Experience = () => {
  const experienceList = getExperiences();
  const [currentlyShow, setCurrentlyShow] = useState(0);
  return (
    <Grid pb="20">
      <CustomContainer>
        <Grid placeItems="start" gap={{ base: "10", md: "20" }}>
          <Grid
            rowGap={{ base: "10", md: "20" }}
            gap={{ base: "10", md: "10" }}
            templateColumns={{ base: "1fr", md: "max-content 1fr" }}
          >
            <Flex gridColumn="1/-1" gap="5" direction="column">
              <Heading size="xl">Experiences</Heading>
              <Text>
                I've had the privilege of working along side great teams.
              </Text>
            </Flex>

            <Flex gap="5" direction={{ base: "row", md: "column" }}>
              {experienceList.map((item, index) => (
                <Flex
                  as="button"
                  cursor="pointer"
                  position="relative"
                  onClick={() => setCurrentlyShow(index)}
                >
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="4rem"
                    h="4rem"
                    zIndex="1"
                    bg={currentlyShow === index && "#00bb7763"}
                    borderRadius="full"
                    border="solid 4px transparent"
                    borderColor={currentlyShow === index && "secondary.100"}
                  ></Box>
                  <Avatar
                    src={item.img}
                    w="3rem"
                    h="3rem"
                    name={item.company}
                  />
                </Flex>
              ))}
            </Flex>

            <Grid gap={{ base: 10, md: 20 }}>
              {experienceList
                .slice(currentlyShow, currentlyShow + 1)
                .map((item, index) => (
                  <Grid
                    gap="5"
                    key={item.id}
                    templateColumns={{
                      base: "1fr",
                      md: "max-content max-content 1fr",
                    }}
                  >
                    <Flex direction="column" order={{ 3: 1 }} gap="2">
                      <Fade duration={300}>
                        <Heading maxW="25ch">
                          <Text as="span" fontFamily="Fira Mono">
                            <ColorText>{item.role}</ColorText>{" "}
                          </Text>
                          @{item.company}
                        </Heading>
                      </Fade>

                      <Fade duration={300} delay={200}>
                        <Text mt="4" maxW="50ch">
                          {item.brief}
                        </Text>
                      </Fade>

                      <Fade duration={300} delay={300}>
                        <Text mt="3" fontFamily="Fira Mono">
                          <ColorText>
                            {item.startDate} &ndash; {item.endDate}
                          </ColorText>
                        </Text>
                      </Fade>

                      <Flex mt="5" direction="column" gap="3">
                        {item.duties.map((duty, index) => (
                          <Fade duration={300} delay={300 + (index + 1 * 100)}>
                            <Flex align="center">
                              <Icon color="secondary.100" as={FaCaretRight} />
                              <Text>{duty}</Text>
                            </Flex>
                          </Fade>
                        ))}
                      </Flex>
                    </Flex>
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default Experience;
