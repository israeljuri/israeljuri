import {
  Grid,
  Center,
  Image,
  Flex,
  Icon,
  Show,
  Hide,
  Box,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";
import CustomContainer from "./customContainer";
import avatar from "../../assets/avatar.png";
import { useEffect, useState } from "react";
import ColorModeToggler from "./colorModeToggler";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { getNavigationList } from "../services/data";
import Socials from "./socials";

import logo from "../../assets/logo.png";
import element from "../../assets/element.svg";

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

  const renderLink = (item) => {
    return (
      <Flex
        py="2"
        as="li"
        key={item.id}
        color={getColor(item.path)}
        fontSize={show ? "2xl" : "sm"}
        fontWeight="bold"
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

        <Link to={item.path}>{item.label}</Link>
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
            <Center gap="2">
              <Center
                bg={`url(${element})`}
                _hover={{
                  transform: "scale(1.1)",
                }}
                w="3rem"
                h="3rem"
                p="2.5"
                as="figure"
                borderRadius="full"
                overflow="hidden"
                transition=".2s"
              >
                <Image src={logo} />
              </Center>
            </Center>
          </Hide>

          <Flex
            // gap="10"
            align="center"
            justify="space-between"
            w={{ base: "100%", md: "initial" }}
            as="article"
          >
            <Hide below="md">
              <Flex gap="10" as="ul">
                {list.map((item) => renderLink(item))}
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

              {list.map((item) => renderLink(item))}

              <Flex mt="10">
                <Socials size="xl" color="white" col="repeat(5, 1fr)" gap="5" />
              </Flex>
            </Flex>

            <Show below={"md"}>
              <Center
                cursor="pointer"
                h="3rem"
                w="3rem"
                fontSize="2xl"
                onClick={() => setShow(!show)}
                transition=".2s"
              >
                <Icon as={FiArrowRight} />
              </Center>
            </Show>

            <Show below="md">
              <Center
                bg={`url(${element})`}
                _hover={{
                  transform: "scale(1.1)",
                }}
                w="3rem"
                h="3rem"
                p="2.5"
                as="figure"
                borderRadius="full"
                overflow="hidden"
                transition=".2s"
              >
                <Image src={logo} />
              </Center>
            </Show>

            <ColorModeToggler />
          </Flex>
        </Flex>
      </CustomContainer>
    </Grid>
  );
};

export default NavBar;
