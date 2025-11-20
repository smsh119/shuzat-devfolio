export const projects = [
  {
    id: "001",
    title: "Project Name",
    description:
      "This is a front-end of a website built with raw HTML and CSS. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquid!",
    images: {
      thumbnailUrl: "/images/project-thumb-demo.png",
      imgUrls: [
        "/images/project-thumb-demo.png",
        "/images/project-thumb-demo.png",
      ],
    },
    sourceCodeUrl: "#",
    demoUrl: "#",
    platforms: ["Web", "API"],
    technologies: ["ReactJS", "Next.js", "Tailwind"],
  },
  {
    id: "002",
    title: "Project Name",
    description:
      "This is a front-end of a website built with raw HTML and CSS. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquid!",
    images: {
      thumbnailUrl: "/images/project-thumb-demo.png",
      imgUrls: [
        "/images/project-thumb-demo.png",
        "/images/project-thumb-demo.png",
      ],
    },
    sourceCodeUrl: "#",
    demoUrl: "#",
    platforms: ["Mobile"],
    technologies: ["React-Native", "JavaScript"],
  },
  {
    id: "003",
    title: "Project Name",
    description:
      "This is a front-end of a website built with raw HTML and CSS. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquid!",
    images: {
      thumbnailUrl: "/images/project-thumb-demo.png",
      imgUrls: [
        "/images/project-thumb-demo.png",
        "/images/project-thumb-demo.png",
      ],
    },
    sourceCodeUrl: "#",
    demoUrl: "#",
    platforms: ["Web", "API"],
    technologies: ["ReactJS", "Next.js", "Tailwind"],
  },
  {
    id: "004",
    title: "Project Name",
    description:
      "This is a front-end of a website built with raw HTML and CSS. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquid!",
    images: {
      thumbnailUrl: "/images/project-thumb-demo.png",
      imgUrls: [
        "/images/project-thumb-demo.png",
        "/images/project-thumb-demo.png",
      ],
    },
    sourceCodeUrl: "#",
    demoUrl: "#",
    platforms: ["Desktop"],
    technologies: ["ElectronJS", "JavaScript"],
  },
  {
    id: "005",
    title: "Project Name",
    description:
      "This is a front-end of a website built with raw HTML and CSS. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquid!",
    images: {
      thumbnailUrl: "/images/project-thumb-demo.png",
      imgUrls: [
        "/images/project-thumb-demo.png",
        "/images/project-thumb-demo.png",
      ],
    },
    sourceCodeUrl: "#",
    demoUrl: "#",
    platforms: ["Web", "API"],
    technologies: ["ReactJS", "Next.js", "Tailwind"],
  },
  {
    id: "006",
    title: "Project Name",
    description:
      "This is a front-end of a website built with raw HTML and CSS. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquid!",
    images: {
      thumbnailUrl: "/images/project-thumb-demo.png",
      imgUrls: [
        "/images/project-thumb-demo.png",
        "/images/project-thumb-demo.png",
      ],
    },
    sourceCodeUrl: "#",
    demoUrl: "#",
    platforms: ["Web", "API"],
    technologies: ["ReactJS", "Next.js", "Tailwind"],
  },
];

export const getProject = (id) => {
  return projects.find((proj) => proj.id === id);
};
