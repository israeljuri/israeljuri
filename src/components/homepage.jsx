import {
  Heading,
  Flex,
  Center,
  Text,
  Image,
  Grid,
  Icon,
  Link,
} from "@chakra-ui/react";
import { BiMapPin } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import avatar from "../assets/avatar.png";
import CustomContainer from "./common/customContainer";

const Homepage = () => {
  return (
    <Flex
      bg="rgba(0, 0, 0, 1)"
      placeContent="center"
      direction="column"
      py="20"
      pt="10"
    >
      <Center color="white" flexDirection="column">
        <Center
          border="solid 3px"
          borderColor="white"
          borderRadius="full"
          p="5"
          w="15rem"
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
        <Center mt="20" gap="5" px="10" flexDirection="column" color="white">
          {/* <Heading>👋 Israel Juri Here! </Heading> */}
          <Text maxW="70ch">
            Currently focused on building scalable, high-quality Frontend Web &
            Mobile applications using React and it’s ecosystem.
          </Text>

          <Text maxW="70ch">
            I believe Software Development is an art of problem solving while
            considering vital factors.
          </Text>

          <Text maxW="70ch">
            So i do my best to demonstrate that on projects by collaborating
            with designers and picking optimal tools to bring about good
            products.
          </Text>
        </Center>

        <Center mt="20" gap="5" fontSize="2xl" color="white">
          <Link href="linkedin.com/in/isrealjuri">
            <Icon as={FaLinkedin} />
          </Link>
          <Link href="https://twitter.com/israel_juri">
            <Icon as={FaTwitter} />
          </Link>
          <Link href="https://github.com/israeljuri">
            <Icon as={FaGithub} />
          </Link>
        </Center>
      </CustomContainer>
    </Flex>
  );
};

export default Homepage;
