import { Button } from "@chakra-ui/react";

const CustomButton = ({
  children,
  leftIcon,
  rightIcon,
  size,
  colorScheme,
  primaryColor,
  dangerColor,
  secondaryColor,
  whiteColor,
  blackColor,
  transparentColor,
  type,
  onClick,
}) => {
  const bg = () => {
    if (primaryColor) return "primary.100";
    if (secondaryColor) return "secondary.100";
    if (dangerColor) return "red.500";
    if (whiteColor) return "white";
    if (blackColor) return "black";
  };
  const color = () => {
    if (primaryColor) return "white";
    if (secondaryColor) return "white";
    if (dangerColor) return "white";
    if (whiteColor) return "secondary.100";
    if (blackColor) return "white";
  };

  return (
    <Button
      onClick={onClick}
      type={type}
      size={size}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      colorScheme={colorScheme}
      fontWeight="semibold"
      bg={bg()}
      variant={transparentColor && "ghost"}
      color={color()}
      _hover={{ opacity: 0.96 }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
