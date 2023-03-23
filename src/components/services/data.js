export const getNavigationList = () => {
  return navigationList;
};

export const getInformation = () => {
  return information;
};

export const getRecentTechnologies = () => {
  return recentTechnologies;
};
export const getExperiences = () => {
  return experiences;
};

const navigationList = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Works", path: "/works" },
  { id: 3, label: "Articles", path: "/articles" },
  { id: 4, label: "Get in touch", path: "/get-in-touch" },
];

const information = {
  phone: "+2347043243644",
  email: "israeljuri0@gmail.com",
  linkedin: "https://linkedin.com/in/isrealjuri",
  twitter: "https://twitter.com/israel_juri",
  github: "https://github.com/israeljuri",
};

const recentTechnologies = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Expo.dev",
  "Remix.run",
  "Gatsby.js",
  "Git",
];

import theraswiftImage from "../../assets/experience/theraswift.png";
import technovilleImg from "../../assets/experience/technoville.jpg";

const experiences = [
  {
    id: 1,
    company: "Technoville",
    role: "Volunteer Software Developer",
    img: technovilleImg,
    brief:
      "Technoville is building the Next Generation of Innovators in Rivers State, Nigeria.",
    startDate: "January 2022",
    endDate: "Present",
    duties: [
      "Turned mockups into User interfaces",
      "Communicated with CTO closely to brain storm ideas",
      "Single handedly carried out important web projects without supervision",
      "Worked with technologies like React.js, Chakra-UI, Postman & Photoshop",
    ],
  },
  {
    id: 2,
    company: "ThreaSwift RX",
    role: "Frontend Developer",
    img: theraswiftImage,
    brief:
      "Start up in Lagos, Nigeria. with a goal of making Pharmaceutical services accessible",
    startDate: "January 2021",
    endDate: "December 2022",
    duties: [
      "Worked with Electron.js and React.js",
      "Connected React.js to Firebase for backend services",
      "Turned MocksUps to User interfaces using React",
    ],
  },
];
