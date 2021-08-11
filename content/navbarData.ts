import { ContactLinkType, NavLinkType } from "../types";

// Contact links on the left side
export const contactLinks: ContactLinkType[] = [
  {
    title: "Email",
    href: "mailto:syed.taqi95@gmail.com",
    icon: "dashicons:email",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/syedtaqi-haider",
    icon: "cib:linkedin",
  },
  {
    title: "Github",
    href: "https://github.com/syedtaqi95",
    icon: "akar-icons:github-fill",
  },
];

// Website Links on the right side
export const navLinks: NavLinkType[] = [
  {
    title: "Home",
    url: "/#",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "CV",
    url: "https://drive.google.com/file/d/1cxLhmVItQPVIH_W2iWi0nnykBkt80-rZ/view?usp=sharing",
    newTab: true,
  },
  {
    title: "Contact",
    url: "/#contact",
  },
];
