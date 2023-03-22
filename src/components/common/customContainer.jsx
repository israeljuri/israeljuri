import { Container } from "@chakra-ui/react";

const CustomContainer = ({ children, size }) => {
  return <Container maxW={size ? size : "65rem"}>{children}</Container>;
};

export default CustomContainer;
