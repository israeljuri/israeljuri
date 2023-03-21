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
} from "@chakra-ui/react";
import { useLocation, Link } from "react-router-dom";
import CustomContainer from "./customContainer";
import avatar from "../../assets/avatar.png";
import { useEffect, useState } from "react";
import ColorModeToggler from "./colorModeToggler";
import { FiMenu, FiX } from "react-icons/fi";
import { getNavigationList } from "../services/data";
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

  const renderLink = (item) => {
    return (
      <Flex
        py="2"
        as="li"
        key={item.id}
        color={getColor(item.path)}
        fontSize={show ? "3xl" : "md"}
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
          bg={colorMode === "light" ? "gray.800" : "white"}
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
            <Center
              _hover={{
                transform: "scale(1.1)",
              }}
              w="5rem"
              as="figure"
              borderRadius="full"
              overflow="hidden"
              transition=".2s"
            >
              <Image src={avatar} />
            </Center>
          </Hide>

          <Flex
            gap="10"
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

            {show && (
              <Show below="md" position="relative">
                <Center
                  cursor="pointer"
                  h="3rem"
                  w="3rem"
                  position="fixed"
                  right={10}
                  fontSize="4xl"
                  onClick={() => setShow(!show)}
                  transition=".2s"
                  zIndex="100"
                  color="white"
                >
                  <Icon as={FiX} />
                </Center>

                <Flex
                  position="fixed"
                  top="50%"
                  w="100%"
                  h="100%"
                  zIndex="4"
                  align="start"
                  px="14"
                  justify="center"
                  py="12"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  direction="column"
                  bg="secondary.100"
                  gap="5"
                  as="ul"
                >
                  {list.map((item) => renderLink(item))}

                  <Flex mt="10">
                    <Socials
                      size="2xl"
                      color="white"
                      col="repeat(5, 1fr)"
                      gap="8"
                    />
                  </Flex>
                </Flex>
              </Show>
            )}

            <Show below={"md"}>
              <Center
                cursor="pointer"
                h="3rem"
                w="3rem"
                fontSize="3xl"
                onClick={() => setShow(!show)}
                transition=".2s"
              >
                <Icon as={FiMenu} />
              </Center>
            </Show>

            <Show below="md">
              <Center
                _hover={{
                  transform: "scale(1.1)",
                }}
                w="5rem"
                as="figure"
                borderRadius="full"
                overflow="hidden"
                transition=".2s"
              >
                <Image src={avatar} />
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
