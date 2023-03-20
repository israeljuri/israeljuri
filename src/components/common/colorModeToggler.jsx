import { Text, Hide, Center, useColorMode, Icon } from "@chakra-ui/react";
import { FaMoon, FaLightbulb } from "react-icons/fa";

const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center ml="5" as="li" fontSize={{ base: "xl", md: "lg" }}>
      {colorMode === "light" ? (
        <Center gap="2" cursor="pointer" onClick={toggleColorMode}>
          <Icon as={FaMoon} />
          <Hide below="md">
            <Text fontSize="md" fontWeight="bold">
              Switch to Dark
            </Text>
          </Hide>
        </Center>
      ) : (
        <Center gap="2" cursor="pointer" onClick={toggleColorMode}>
          <Icon as={FaLightbulb} />
          <Hide below="md">
            <Text fontSize="md" fontWeight="bold">
              Switch to Light
            </Text>
          </Hide>
        </Center>
      )}
    </Center>
  );
};

export default ColorModeToggler;
