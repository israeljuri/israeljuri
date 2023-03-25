import { Text, Hide, Center, useColorMode, Icon } from "@chakra-ui/react";
import { FaMoon, FaLightbulb, FaSun } from "react-icons/fa";

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
          gap="2"
          cursor="pointer"
          onClick={toggleColorMode}
        >
          <Icon as={FaMoon} />
          <Text textTransform="capitalize" fontWeight="bold" fontSize="sm">
            {colorMode}
          </Text>
        </Center>
      ) : (
        <Center
          h="3rem"
          w="3rem"
          gap="2"
          cursor="pointer"
          onClick={toggleColorMode}
        >
          <Icon as={FaSun} />
          <Text textTransform="capitalize" fontWeight="bold" fontSize="sm">
            {colorMode}
          </Text>
        </Center>
      )}
    </Center>
  );
};

export default ColorModeToggler;
