import { Grid, Flex, Heading, Text } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import CustomContainer from "./customContainer";
import Socials from "./socials";

const ContactComponent = () => {
  return (
    <Grid py="20">
      <CustomContainer>
        <Grid gap={{ base: "10", md: "10" }}>
          <Fade duration={300}>
            <Flex order={{ base: 2, md: 1 }} gap="5" direction="column">
              <Heading size="xl">Let's get in touch</Heading>
              <Text>Let's get in touch, I would love to hear from you.</Text>
            </Flex>

            <Socials color="secondary.100" size="1.8rem" showLabel gap="5" />
          </Fade>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default ContactComponent;
