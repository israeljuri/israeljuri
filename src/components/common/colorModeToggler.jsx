import { Text, Center, useColorMode, Icon } from "@chakra-ui/react";
import { FaMoon, FaLightbulb } from "react-icons/fa";

const ColorModeToggler = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center ml="5" as="li" fontSize="lg">
      {colorMode === "light" ? (
        <Center gap="2" cursor="pointer" onClick={toggleColorMode}>
          <Icon as={FaMoon} />
          <Text fontSize="md" fontWeight="bold">
            Switch to Dark
          </Text>
        </Center>
      ) : (
        <Center gap="2" cursor="pointer" onClick={toggleColorMode}>
          <Icon as={FaLightbulb} />
          <Text fontSize="md" fontWeight="bold">
            Switch to Light
          </Text>
        </Center>
      )}
    </Center>
  );
};

export default ColorModeToggler;
