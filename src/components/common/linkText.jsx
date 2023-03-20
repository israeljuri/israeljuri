import { Link } from "@chakra-ui/react";

const LinkText = ({ label, path }) => {
  return (
    <Link
      _hover={{ borderColor: "secondary.100" }}
      to={path}
      borderBottom="dotted 1px"
    >
      {label}
    </Link>
  );
};

export default LinkText;
