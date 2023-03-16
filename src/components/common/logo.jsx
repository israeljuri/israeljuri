import { Center, Text, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";
import logoWhite from "../../assets/logo-white.png";

const Logo = ({ size, white, showText, text }) => {
  return (
    <Center
      gap={showText && "1"}
      h={size || "5rem"}
      justifyContent={showText && "left"}
      w={showText ? "100%" : size || "5rem"}
    >
      <Image
        src={white ? logoWhite : logo}
        w={showText ? size || "5rem" : "100%"}
      />
      {showText && <Text {...text}>Creativity Academy</Text>}
    </Center>
  );
};

export default Logo;
