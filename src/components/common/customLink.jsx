import { Center, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CustomLink = ({ icon, label, path }) => {
  return (
    <Center
      gap={2}
      transition=".2s"
      _hover={{ borderColor: "secondary.100" }}
      borderBottom="dotted 1px"
      fontSize="lg"
    >
      <Link to={path} fontWeight="bold">
        {label}
      </Link>

      {icon && <Icon as={icon} />}
    </Center>
  );
};

export default CustomLink;
