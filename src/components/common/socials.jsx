import { Grid, Icon, Link, Text, Flex, useColorMode } from "@chakra-ui/react";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaGithub,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { getInformation } from "../services/data";

const Socials = ({ size, col, row, gap, color, showLabel }) => {
  const information = getInformation();
  const { colorMode } = useColorMode();

  const list = [
    {
      id: 1,
      icon: FaLinkedin,
      path: information.linkedin,
      custom: "",
      label: "LinkedIn",
    },
    {
      id: 2,
      icon: FaTwitter,
      path: information.twitter,
      label: "Twitter",
      custom: "",
    },
    {
      id: 3,
      icon: FaGithub,
      path: information.github,
      label: "Github",
      custom: "",
    },
    {
      id: 4,
      icon: FaEnvelope,
      path: information.email,
      label: "Email",
      custom: "mailto:",
    },
    {
      id: 5,
      icon: FaPhoneSquareAlt,
      path: information.phone,
      label: "Phone",
      custom: "tel:",
    },
  ];

  return (
    <Grid
      color={color || "inherit"}
      fontSize={size}
      gap={gap}
      templateColumns={col}
      templateRows={row}
    >
      {list.map((item, index) => (
        <Fade duration={300} delay={index + 1 * 500}>
          <Link key={item.id} target="_blank" href={item.custom + item.path}>
            <Flex align="center" justify="start" gap="2" fontFamily="Fira Mono">
              <Icon as={item.icon} />
              {showLabel && (
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color={colorMode === "light" ? "gray.800" : "white"}
                >
                  {item.path}
                </Text>
              )}
            </Flex>
          </Link>
        </Fade>
      ))}
    </Grid>
  );
};

export default Socials;
