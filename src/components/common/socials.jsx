import { Grid, Icon, Link } from "@chakra-ui/react";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaGithub,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { getInformation } from "../services/data";

const Socials = ({ size, col, row, gap, color }) => {
  const information = getInformation();

  const list = [
    {
      id: 1,
      icon: FaLinkedin,
      path: information.linkedin,
      label: "LinkedIn",
    },
    { id: 2, icon: FaTwitter, path: information.twitter, label: "Twitter" },
    { id: 3, icon: FaGithub, path: information.github, label: "Github" },
    {
      id: 4,
      icon: FaEnvelope,
      path: information.email,
      label: "Email",
      custom: "mailto:",
    },
    {
      id: 5,
      icon: FaPhoneSquareAlt,
      path: information.phone,
      label: "Phone",
      custom: "tel:",
    },
  ];

  return (
    <Grid
      color={color || "inherit"}
      fontSize={size}
      gap={gap}
      templateColumns={col}
      templateRows={row}
    >
      {list.map((item) => (
        <Link target="_blank" href={item?.custom + item.path}>
          <Icon as={item.icon} />
        </Link>
      ))}
    </Grid>
  );
};

export default Socials;
