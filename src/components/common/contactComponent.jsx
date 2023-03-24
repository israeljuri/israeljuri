import { Grid, Flex, Heading, Text } from "@chakra-ui/react";
import Fade from "react-reveal/Fade";
import CustomContainer from "./customContainer";
import Socials from "./socials";

const ContactComponent = () => {
  return (
    <Grid>
      <CustomContainer>
        <Grid py="10" mb="20" gap={{ base: "10", md: "10" }}>
          <Fade duration={300}>
            <Flex order={{ base: 2, md: 1 }} gap="5" direction="column">
              <Heading size="xl">Let's get in touch</Heading>
              <Text>Please say hi, i would love to hear from you.</Text>
            </Flex>

            <Socials color="secondary.100" size="2rem" showLabel gap="5" />
          </Fade>
        </Grid>
      </CustomContainer>
    </Grid>
  );
};

export default ContactComponent;
