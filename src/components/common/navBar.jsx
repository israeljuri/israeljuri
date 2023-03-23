import {
  Grid,
  Center,
  Image,
  Flex,
  Icon,
  Show,
  Hide,
  Box,
  Text,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { getNavigationList } from "../services/data";

import logo from "../../assets/avatar-2.png";
import element from "../../assets/element.svg";
import ColorModeToggler from "./colorModeToggler";
import CustomContainer from "./customContainer";
import Socials from "./socials";

const NavBar = () => {
  const { colorMode } = useColorMode();
  const list = getNavigationList();
  const location = useLocation();
  const [currentPath] = useState(location.pathname);
  const [show, setShow] = useState(false);
  const [sticky, setSticky] = useState(false);

  const getColor = (path) =>
    currentPath === path
      ? show
        ? "white"
        : "secondary.100"
      : show
      ? "white"
      : "inherit";

  const stickyNavbar = () => {
    if (window !== undefined)
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
  };

  const renderLink = (item, index) => {
    return (
      <Flex
        py="2"
        gap="1"
        as="li"
        key={item.id}
        color={getColor(item.path)}
        fontSize={show ? "2xl" : "sm"}
        fontWeight="bold"
        fontFamily="Fira Mono"
        transition=".2s"
        position="relative"
        _hover={{ div: { opacity: "1" } }}
      >
        <Box
          transition=".2s"
          position="absolute"
          opacity={show && currentPath === item.path ? "1" : "0"}
          top="100%"
          left="0%"
          h="3px"
          borderRadius="full"
          bg={colorMode === "light" ? (show ? "white" : "gray.800") : "white"}
          w="100%"
        ></Box>

        {/* <Text fontFamily="Fira Mono" color={show ? "white" : "secondary.100"}>
          {index}.
        </Text> */}
        <Link href={item.path}>{item.label}</Link>
      </Flex>
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);

    return () => window.removeEventListener("scroll", stickyNavbar);
  }, []);

  return (
    <Grid
      position={sticky ? "fixed" : "initial"}
      w="100%"
      zIndex="10"
      transition=".2s"
      top={1}
      bg={colorMode === "light" ? "white" : "gray.800"}
      boxShadow={sticky && (colorMode === "light" ? "base" : "lg")}
    >
      <CustomContainer>
        <Flex
          py={sticky ? 3 : 8}
          pb={sticky ? 3 : 0}
          minH="5rem"
          align="center"
          justify="space-between"
          gap="10"
        >
          <Hide below="md">
            <Center gap="2" position="relative">
              {/* <Flex
                position="absolute"
                top="50%"
                left="125%"
                // w="3.5rem"
                textAlign="center"
                borderRadius="full"
                transform="translateY(-50%)"
                bg="white"
                px="3"
                py="1"
                fontSize="sm"
                zIndex="2"
                gap="1"
                color="black"
              >
                <Text>Welcome</Text>
                <Text>💥</Text>
              </Flex> */}
              <Flex
                border="solid 2px"
                w="4rem"
                h="4rem"
                bg="transparent"
                position="absolute"
                top="50%"
                transform="translate(-50%, -50%)"
                left="50%"
                borderColor="secondary.100"
                borderRadius="full"
              ></Flex>
              <Center
                bg={`url(${element})`}
                _hover={{
                  transform: "scale(1.1)",
                }}
                w="3rem"
                h="3rem"
                as="figure"
                borderRadius="full"
                overflow="hidden"
                transition=".2s"
              >
                <Image filter="grayscale(1)" src={logo} />
              </Center>
            </Center>
          </Hide>

          <Flex
            align="center"
            justify="space-between"
            w={{ base: "100%", md: "initial" }}
            as="article"
          >
            <Hide below="md">
              <Flex gap="10" as="ul">
                {list.map((item, index) => renderLink(item, index))}
              </Flex>
            </Hide>

            <Flex
              position="fixed"
              as="ul"
              top="0%"
              left={show ? "0%" : "-100%"}
              w="100%"
              h="100%"
              zIndex="4"
              align="start"
              justify="center"
              px="14"
              py="12"
              transition=".2s"
              direction="column"
              bg="secondary.100"
              gap="5"
            >
              <Center
                mt="-10"
                cursor="pointer"
                h="3rem"
                w="100%"
                justifyContent="end"
                right={10}
                fontSize="3xl"
                onClick={() => setShow(!show)}
                transition=".2s"
                zIndex="100"
                color="white"
              >
                <Icon as={FiArrowLeft} />
              </Center>

              {list.map((item, index) => renderLink(item, index))}

              <Flex mt="10">
                <Socials
                  size="2xl"
                  color="white"
                  col="repeat(5, 1fr)"
                  gap="5"
                />
              </Flex>
            </Flex>

            <Show below={"md"}>
              <Center
                cursor="pointer"
                fontSize="2xl"
                onClick={() => setShow(!show)}
                transition=".2s"
              >
                <Icon as={FiArrowRight} />
              </Center>
            </Show>

            {/* <Show below="md">
              <Center gap="2" position="relative">
                <Flex
                  border="solid 2px"
                  w="4rem"
                  h="4rem"
                  bg="transparent"
                  position="absolute"
                  top="50%"
                  transform="translate(-50%, -50%)"
                  left="50%"
                  borderColor="secondary.100"
                  borderRadius="full"
                ></Flex>
                <Center
                  bg={`url(${element})`}
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                  w="3rem"
                  h="3rem"
                  // p="2.5"
                  as="figure"
                  borderRadius="full"
                  overflow="hidden"
                  transition=".2s"
                >
                  <Image filter="grayscale(1)" src={logo} />
                </Center>
              </Center>
            </Show> */}

            <ColorModeToggler />
          </Flex>
        </Flex>
      </CustomContainer>
    </Grid>
  );
};

export default NavBar;
