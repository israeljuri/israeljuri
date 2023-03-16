import { Container } from "@chakra-ui/react";

const CustomContainer = ({ children, size }) => {
  return <Container maxW={size || "75rem"}>{children}</Container>;
};

export default CustomContainer;
