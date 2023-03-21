import { Text } from "@chakra-ui/react";

const ColorText = ({ children }) => {
  return (
    <Text as="span" color="secondary.100">
      {children}
    </Text>
  );
};

export default ColorText;
