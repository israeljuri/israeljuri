import { Text, Hide, Center, useColorMode, Icon } from "@chakra-ui/react";
import { FaMoon, FaLightbulb, FaSun } from "react-icons/fa";

const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center ml="5" as="li" fontSize={{ base: "xl", md: "xl" }}>
      {colorMode === "light" ? (
        <Center
          // h="3rem"
          // w="3rem"
          gap="2"
          cursor="pointer"
          onClick={toggleColorMode}
        >
          <Icon as={FaMoon} />
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
        </Center>
      )}
    </Center>
  );
};

export default ColorModeToggler;
