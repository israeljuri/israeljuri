export const getNavigationList = () => {
  return navigationList;
};

export const getInformation = () => {
  return information;
};

export const getWorks = () => {
  return works;
};

export const getRecentWorks = () => {
  return works.slice(0, 2);
};

export const getRecentTechnologies = () => {
  return recentTechnologies;
};

export const getExperiences = () => {
  return experiences;
};

import { BiHome } from "react-icons/bi";
import { FaHammer } from "react-icons/fa";

const navigationList = [
  { id: 1, label: "Home", path: "/", icon: BiHome },
  { id: 2, label: "Works", path: "/works", icon: FaHammer },
  // { id: 3, label: "Articles", path: "/articles" },
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
  "React Native (Expo)",
  "Next.js",
  // "Astro",
  "Git",
  "Docker",
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

// ExpTrack

const works = [
  {
    id: 1,
    icon: null,
    img: null,
    title: "ExpTrack",
    subTitle: "Expense Tracker",
    brief:
      "ExpTrack helps keep track of your expenses calculate your income and pay them on time",
    type: "Web App",
    designer: "Israel Juri",
    collaborators: null,
    tools: ["React.js", "Chakra-UI", "Zustan", "Formik", "Yup", "Firbase"],
    contrains: [
      "Project need a minimal State managment tool beyond React Context, i had to learn Zustand",
      "Built this while my schedule was tight, had to work late nights",
    ],
    links: {
      github: "https://github.com/israeljuri/exptrack.git",
      live: "https://exptrack.netlify.app",
      design: "https://figma.com/israeljuri/exptrack",
      expoLink: null,
      playStore: null,
      appleStore: null,
    },
  },
  {
    id: 1,
    icon: null,
    img: null,
    title: "CriptoExch",
    subTitle: "",
    brief:
      "Exchange crypto on the fly with CriptoExch, a minimal easy to understand modern crypto application",
    type: "Mobile App",
    designer: "Gabriel Maguire",
    collaborators: [
      { id: 1, name: "Israel Juri", path: "" },
      { id: 2, name: "Gabriel Maguire", path: "" },
    ],
    tools: ["React Native", "Zustan", "Formik", "Yup"],
    contrains: null,
    links: {
      github: "https://github.com/israeljuri/exptrack.git",
      live: null,
      design: "https://figma.com/israeljuri/exptrack",
      expoLink: "https://criptoExch.netlify.app",
      playStore: "https://play.google.come/criptoExch",
      appleStore: "https://store.apple.come/criptoExch",
    },
  },
];
