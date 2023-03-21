import { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";

const ScrollIndiator = () => {
  const [percentage, setPercentage] = useState(0);

  window.onscroll = () => {
    let winScroll = document.documentElement.scrollTop;
    let scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setPercentage((winScroll / scrollHeight) * 100);
  };

  return (
    <Flex
      zIndex="10"
      position="fixed"
      top={0}
      left={0}
      w="100%"
      minH="4px"
      bg="gray.100"
    >
      <Box bg="secondary.100" borderRadius="full" w={percentage + "%"}></Box>
    </Flex>
  );
};

export default ScrollIndiator;
