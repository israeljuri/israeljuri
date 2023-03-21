export const getNavigationList = () => {
  return navigationList;
};

export const getInformation = () => {
  return information;
};

export const getTechnologies = () => {
  return technologies;
};

const navigationList = [
  { id: 1, label: "Home", path: "/" },
  { id: 1, label: "About", path: "/about" },
  { id: 2, label: "Works", path: "/works" },
  { id: 3, label: "Articles", path: "/articles" },
  { id: 4, label: "Get in touch", path: "/contact" },
];

const information = {
  phone: "+2347043243644",
  email: "israeljuri0@gmail.com",
  linkedin: "https://linkedin.com/in/isrealjuri",
  twitter: "https://twitter.com/israel_juri",
  github: "https://github.com/israeljuri",
};

const technologies = [
  "Frontend Development",
  "Scalable Web & Mobile",
  "React & React Native",
  "TypeScript",
  "Redux, Redux Toolkit",
  "React Query, Axios",
  "",
];
