import {
  Grid,
  Flex,
  Image,
  Center,
  Heading,
  Text,
  Badge,
  Link,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import {
  FaApple,
  FaCaretRight,
  FaGithub,
  FaGlobe,
  FaGooglePlay,
  FaSketch,
} from "react-icons/fa";
import LinkText from "./linkText";

const WorkCard = ({ work, index, noImage }) => {
  const { colorMode } = useColorMode();
  return (
    <Grid
      border="solid 1px"
      borderColor="secondary.100"
      borderRadius="md"
      overflow="hidden"
      position="relative"
      templateColumns={{
        base: "1fr",
        md: noImage ? "1fr" : index % 2 === 0 ? "1fr 1.5fr" : "1.5fr 1fr",
      }}
    >
      {!noImage && (
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
          ></Flex>
          <Image h="100%" w="100%" objectFit="cover" src={work.img} />
        </Grid>
      )}

      <Flex
        order={{ base: "initial", md: (index + 1) % 2 === 0 ? 2 : 1 }}
        overflow="hidden"
        border="solid 1px transparent"
        bg={colorMode === "light" ? "gray.100" : "gray.900"}
        p={{ base: 8, md: 10 }}
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
            templateColumns={{ base: "max-content max-content", md: "1fr 1fr" }}
            mt="10"
            columnGap="5"
            rowGap="2"
            direction="column"
            fontFamily="Fira Mono"
          >
            <Heading color="secondary.100" gridColumn="1/-1" size="sm">
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
            <Flex mt="10" columnGap="5" rowGap="2" direction="column">
              <Heading color="secondary.100" mb="2" size="sm">
                Contrains
              </Heading>

              {work.contrains.map((c, index) => (
                <Fade duration={300} delay={800 + (index + 1 * 100)}>
                  <Flex as="li">
                    <Icon mt="1" color="secondary.100" as={FaCaretRight} />
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
                <Icon fontSize="2xl" color="secondary.100" as={FaGithub} />
                <Text fontSize="sm">GitHub</Text>
              </Flex>
            </Link>
            <Link href={work.links.design}>
              <Flex align="center" gap="2">
                <Icon fontSize="2xl" color="secondary.100" as={FaSketch} />
                <Text fontSize="sm">Design Link</Text>
              </Flex>
            </Link>
            <Link href={work.links.live}>
              <Flex align="center" gap="2">
                <Icon fontSize="2xl" color="secondary.100" as={FaGlobe} />
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
                  <Icon fontSize="3xl" color="secondary.100" as={FaApple} />
                  <Text fontSize="sm">Apple Store</Text>
                </Flex>
              </Link>
            )}
          </Flex>
        </Fade>
      </Flex>
    </Grid>
  );
};

export default WorkCard;
