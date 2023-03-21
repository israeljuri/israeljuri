// import {  } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LinkText = ({ label, path, target }) => {
  return (
    <Box
      as="span"
      borderBottom="dotted 1px"
      _hover={{ borderColor: "secondary.100" }}
    >
      <Link target={target} to={path}>
        {label}
      </Link>
    </Box>
  );
};

export default LinkText;
