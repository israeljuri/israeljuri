export const getNavigationList = () => {
  return navigationList;
};

export const getInformation = () => {
  return information;
};

const navigationList = [
  { id: 1, label: "About", path: "#about" },
  { id: 2, label: "Works", path: "#works" },
  { id: 3, label: "Articles", path: "/articles" },
  { id: 4, label: "Contact", path: "#contact" },
];

const information = {
  phone: "+2347043243644",
  email: "israeljuri0@gmail.com",
  linkedin: "https://linkedin.com/in/isrealjuri",
  twitter: "https://twitter.com/israel_juri",
  github: "https://github.com/israeljuri",
};
