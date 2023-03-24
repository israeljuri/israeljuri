import {
  Flex,
  Grid,
  Heading,
  Text,
  Badge,
  Box,
  Image,
  Icon,
  useColorMode,
  Link,
  Center,
} from "@chakra-ui/react";
import {
  FaApple,
  FaCaretRight,
  FaFilter,
  FaGithub,
  FaGlobe,
  FaGooglePlay,
  FaSketch,
} from "react-icons/fa";

import ContactComponent from "./common/contactComponent";
import CustomContainer from "./common/customContainer";
import NavBar from "./common/navBar";
import { getWorks } from "./services/data";
import LinkText from "./common/linkText";
import { useState } from "react";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";

const Works = () => {
  const workList = getWorks();
  const { colorMode } = useColorMode();
  const [works, setWorks] = useState([]);
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    setWorks(workList);
  }, []);

  return (
    <>
      <NavBar />
      <Grid py="20">
        <CustomContainer>
          <Flex gap="5" direction="column" mb="20">
            <Fade duration={300} delay={500}>
              <Heading>Works</Heading>
            </Fade>
            <Fade duration={300} delay={600}>
              <Text maxW="60ch">
                I do my best to deliver value when working on products, products
                below are mostly built with React and it's eco-system
              </Text>
            </Fade>

            <Fade duration={300} delay={700}>
              <Flex gap="3">
                <Flex color="secondary.100" align="center" gap="2">
                  <Icon fontSize="xs" as={FaFilter} />
                  <Heading size="sm">Filter by: </Heading>
                </Flex>
                <Text size="xs" opacity=".5">
                  Filter is Under developement
                </Text>
              </Flex>
            </Fade>
          </Flex>

          <Grid gap="20">
            {works.map((work, index) => (
              <Grid
                position="relative"
                templateColumns={{
                  base: "1fr",
                  md: index % 2 === 0 ? "1fr 1.5fr" : "1.5fr 1fr",
                }}
              >
                <Grid
                  order={{ base: "initial", md: (index + 1) % 2 === 0 ? 1 : 2 }}
                  overflow="hidden"
                  bg="red"
                  h="100%"
                  position="relative"
                >
                  <Flex
                    position="absolute"
                    top="0"
                    left="0"
                    w="100%"
                    h="100%"
                    bg="#00bb77a6"
                    transition=".1s"
                    // _hover={{ opacity: 0.5 }}
                  ></Flex>
                  <Image h="100%" w="100%" objectFit="cover" src={work.img} />
                </Grid>

                <Flex
                  order={{ base: "initial", md: (index + 1) % 2 === 0 ? 2 : 1 }}
                  overflow="hidden"
                  border="solid 1px transparent"
                  bg={colorMode === "light" ? "gray.100" : "gray.900"}
                  p="10"
                  direction="column"
                  align="start"
                >
                  <Fade duration={300} delay={500}>
                    <Center
                      w="4rem"
                      h="4rem"
                      borderRadius="full"
                      overflow="hidden"
                      mb="5"
                    >
                      <Image src={work.icon} />
                    </Center>
                  </Fade>

                  {/* Main Info */}
                  <Fade duration={300} delay={600}>
                    <Flex direction="column">
                      <Flex align="center" gap="5">
                        <Heading>{work.title}</Heading>
                        <Badge fontFamily="Fira Mono">{work.type}</Badge>
                      </Flex>
                      <Text mt="2">{work.brief}</Text>
                    </Flex>
                  </Fade>

                  {/* Additional Info */}

                  <Flex mt="5" gap="4" direction="column">
                    <Fade duration={300} delay={700}>
                      <Flex direction="column">
                        <Text color="secondary.100">UI Designer:</Text>
                        <Flex align="center" fontFamily="Fira Mono">
                          <LinkText
                            fontFamily="Fira Mono"
                            label={work.designer}
                            path=""
                          />
                        </Flex>
                      </Flex>
                    </Fade>

                    {work.collaborators && (
                      <Fade duration={300} delay={800}>
                        <Flex direction="column">
                          <Text color="secondary.100">Collaborators:</Text>
                          <Flex flexWrap="wrap" gap="2" fontFamily="Fira Mono">
                            {work.collaborators
                              ? work.collaborators.map((c) => (
                                  <LinkText label={c.name} path={c.path} />
                                ))
                              : "None"}
                          </Flex>
                        </Flex>
                      </Fade>
                    )}
                  </Flex>

                  {/* Tools */}
                  <Fade duration={300} delay={800}>
                    <Grid
                      templateColumns="1fr 1fr"
                      mt="10"
                      gap="5"
                      direction="column"
                      fontFamily="Fira Mono"
                    >
                      <Heading
                        color="secondary.100"
                        gridColumn="1/-1"
                        mb="-2"
                        size="sm"
                      >
                        Tools
                      </Heading>
                      {work.tools.map((c, index) => (
                        <Fade duration={300} delay={800 + (index + 1 * 100)}>
                          <Flex align="center" as="li">
                            <Icon color="secondary.100" as={FaCaretRight} />
                            <Text>{c}</Text>
                          </Flex>
                        </Fade>
                      ))}
                    </Grid>
                  </Fade>

                  {/* Contrains */}
                  {work.contrains && (
                    <Fade duration={300} delay={800}>
                      <Flex mt="10" gap="5" direction="column">
                        <Heading color="secondary.100" mb="-2" size="sm">
                          Contrains
                        </Heading>

                        {work.contrains.map((c, index) => (
                          <Fade duration={300} delay={800 + (index + 1 * 100)}>
                            <Flex as="li">
                              <Icon
                                mt="1"
                                color="secondary.100"
                                as={FaCaretRight}
                              />
                              <Text>{c}</Text>
                            </Flex>
                          </Fade>
                        ))}
                      </Flex>
                    </Fade>
                  )}

                  <Fade duration={300} delay={900}>
                    <Flex
                      fontSize="3xl"
                      columnGap="10"
                      rowGap="4"
                      mt="8"
                      flexWrap="wrap"
                      fontFamily="Fira Mono"
                    >
                      <Link href={work.links.github}>
                        <Flex align="center" gap="2">
                          <Icon
                            fontSize="2xl"
                            color="secondary.100"
                            as={FaGithub}
                          />
                          <Text fontSize="sm">GitHub</Text>
                        </Flex>
                      </Link>
                      <Link href={work.links.design}>
                        <Flex align="center" gap="2">
                          <Icon
                            fontSize="2xl"
                            color="secondary.100"
                            as={FaSketch}
                          />
                          <Text fontSize="sm">Design Link</Text>
                        </Flex>
                      </Link>
                      <Link href={work.links.live}>
                        <Flex align="center" gap="2">
                          <Icon
                            fontSize="2xl"
                            color="secondary.100"
                            as={FaGlobe}
                          />
                          <Text fontSize="sm">Live URL</Text>
                        </Flex>
                      </Link>

                      {work.type === "Mobile App" && (
                        <Link href={work.links.playStore}>
                          <Flex align="center" gap="2">
                            <Icon
                              fontSize="2xl"
                              color="secondary.100"
                              as={FaGooglePlay}
                            />
                            <Text fontSize="sm">Play Store</Text>
                          </Flex>
                        </Link>
                      )}

                      {work.type === "Mobile App" && (
                        <Link href={work.links.appleStore}>
                          <Flex align="center" gap="2">
                            <Icon
                              fontSize="3xl"
                              color="secondary.100"
                              as={FaApple}
                            />
                            <Text fontSize="sm">Apple Store</Text>
                          </Flex>
                        </Link>
                      )}
                    </Flex>
                  </Fade>
                </Flex>
              </Grid>
            ))}
          </Grid>
        </CustomContainer>
      </Grid>
      <ContactComponent />
    </>
  );
};

export default Works;
