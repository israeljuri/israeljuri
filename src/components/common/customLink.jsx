import { Center, Link, Icon } from "@chakra-ui/react";

const CustomLink = ({ icon, label, path }) => {
  return (
    <Center
      gap={2}
      transition=".2s"
      _hover={{ borderColor: "secondary.100" }}
      borderBottom="dotted 1px"
    >
      <Link to={path} fontSize="lg" fontWeight="bold">
        {label}
      </Link>

      {icon && <Icon as={icon} />}
    </Center>
  );
};

export default CustomLink;
