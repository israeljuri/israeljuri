import { Container } from "@chakra-ui/react";

const CustomContainer = ({ children, size }) => {
  return (
    <Container px={{ base: "10", md: 0 }} maxW={size ? size : "65rem"}>
      {children}
    </Container>
  );
};

export default CustomContainer;
