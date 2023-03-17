import { Flex, Center, Text, Image, Icon, Link } from "@chakra-ui/react";
import { BiMapPin } from "react-icons/bi";
import {
  FaEnvelope,
  FaGithub,
  FaHammer,
  FaLinkedin,
  FaPhone,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import avatar from "../assets/avatar.png";
import CustomContainer from "./common/customContainer";
import bg from "../assets/bg.svg";

const Homepage = () => {
  return (
    <Flex
      backgroundColor=" #000000"
      backgroundImage={`url(${bg})`}
      backgroundRepeat="repeat"
      backgroundSize="25rem"
      placeContent="center"
      direction="column"
      py="20"
      pt="10"
      position="relative"
    >
      <Center
        color="white"
        position="fixed"
        px="3"
        py="1"
        top="10"
        left={{ base: "5", md: "10" }}
        fontWeight="bold"
        bg="secondary.100"
        borderRadius="full"
        gap="2"
      >
        <Icon as={FaHammer} />
        <Text>30% </Text>
      </Center>
      <Center color="white" flexDirection="column">
        <Center
          border="solid 3px"
          borderColor="white"
          borderRadius="full"
          p="5"
          w="15rem"
          h="15rem"
        >
          <Image src={avatar} />
        </Center>
        <Center mt="8" gap="2">
          <Icon color="secondary.100" size="3xl" as={BiMapPin} />
          <Text>Lagos, Nigeria</Text>
        </Center>
        <Text fontSize="2xl">Frontend Developer</Text>
      </Center>

      <CustomContainer>
        <Center mt="3rem" gap="5" px="10" flexDirection="column" color="white">
          <Text maxW="70ch">
            Currently focused on building scalable, high-quality Frontend Web &
            Mobile applications using React and it’s ecosystem.
          </Text>

          <Text maxW="70ch">
            I strongly believe Software Development is an art of problem solving
            so i do my best to demonstrate that on projects.
          </Text>

          <Text maxW="70ch">
            Turning UI mockups into functional solutions, i blog by the side and
            occassionaly solve leetcode problems to build logic.
          </Text>
        </Center>

        <Center mt="4rem" gap="5" fontSize="2xl" color="white">
          <Link href="https://linkedin.com/in/isrealjuri">
            <Icon as={FaLinkedin} />
          </Link>
          <Link href="https://twitter.com/israel_juri">
            <Icon as={FaTwitter} />
          </Link>
          <Link href="https://github.com/israeljuri">
            <Icon as={FaGithub} />
          </Link>

          <Link href="mailto:israeljuri0@gmail.com">
            <Icon as={FaEnvelope} />
          </Link>
        </Center>
      </CustomContainer>
    </Flex>
  );
};

export default Homepage;
