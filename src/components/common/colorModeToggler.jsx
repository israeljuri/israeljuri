import { Text, Hide, Center, useColorMode, Icon } from "@chakra-ui/react";
// import { FaMoon, FaLightbulb, FaSun } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center
      ml={{ base: "5", md: "10" }}
      as="li"
      fontSize={{ base: "md", md: "md" }}
    >
      {colorMode === "light" ? (
        <Center
          // h="3rem"
          // w="3rem"
          fontSize={{ base: "xl", md: "lg" }}
          gap="2"
          cursor="pointer"
          onClick={toggleColorMode}
        >
          {/* <Text textTransform="capitalize" fontWeight="bold" fontSize="sm">
            {colorMode}
          </Text> */}
          <Icon as={FiMoon} />
        </Center>
      ) : (
        <Center
          // h="3rem"
          // w="3rem"
          gap="2"
          cursor="pointer"
          onClick={toggleColorMode}
          fontSize={{ base: "xl", md: "lg" }}
        >
          {/* <Text textTransform="capitalize" fontWeight="bold" fontSize="sm">
            {colorMode}
          </Text> */}
          <Icon as={FiSun} />
        </Center>
      )}
    </Center>
  );
};

export default ColorModeToggler;
