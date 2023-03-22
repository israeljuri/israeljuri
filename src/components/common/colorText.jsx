import { Text } from "@chakra-ui/react";

const ColorText = ({ children, fontWeight }) => {
  return (
    <Text as="span" fontWeight={fontWeight} color="secondary.100">
      {children}
    </Text>
  );
};

export default ColorText;
