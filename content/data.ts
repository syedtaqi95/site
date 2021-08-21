import { ContactLinkType, NavLinkType, skillType } from "../types";

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

// Skills section icons
export const programmingLanguages: skillType[] = [
  {
    name: "HTML5",
    icon: "logos:html-5",
  },
  {
    name: "CSS3",
    icon: "logos:css-3",
  },
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "C/C++",
    icon: "logos:c-plusplus",
  },
];

export const frameworks: skillType[] = [
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Next.js",
    icon: "logos:nextjs",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs",
  },
  {
    name: "Flask",
    icon: "cib:flask",
  },
];

export const libraries: skillType[] = [
  {
    name: "GraphQL",
    icon: "logos:graphql",
  },
  {
    name: "MongoDB",
    icon: "vscode-icons:file-type-mongo",
  },
  {
    name: "Cypress",
    icon: "logos:cypress",
  },
  {
    name: "ESLint",
    icon: "logos:eslint",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
];
