import { Center, Icon, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CustomLink = (props) => {
  const { icon, label, path, size } = props;
  return (
    <Link to={path} fontWeight="bold">
      <Center
        gap={2}
        transition=".2s"
        _hover={{ borderColor: "secondary.100" }}
        borderBottom="dotted 1px"
        fontSize={size || "lg"}
        fontFamily="Fira Mono"
        {...props}
      >
        <Text> {label}</Text>
        {icon && <Icon color="secondary.100" as={icon} />}
      </Center>
    </Link>
  );
};

export default CustomLink;
