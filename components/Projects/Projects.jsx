import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      id: "001",
      projectName: "Project Name",
      projectDescription:
        "This is a front-end of a website built with raw HTML and CSS. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquid!",
      imgUrl: "/images/project-thumb-demo.png",
      sourceCodeUrl: "#",
      projectUrl: "#",
    },
    {
      id: "002",
      projectName: "Project Name",
      projectDescription:
        "This is a front-end of a website built with raw HTML and CSS. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquid!",
      imgUrl: "/images/project-thumb-demo.png",
      sourceCodeUrl: "#",
      projectUrl: "#",
    },
    {
      id: "003",
      projectName: "Project Name",
      projectDescription:
        "This is a front-end of a website built with raw HTML and CSS. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquid!",
      imgUrl: "/images/project-thumb-demo.png",
      sourceCodeUrl: "#",
      projectUrl: "#",
    },
    {
      id: "004",
      projectName: "Project Name",
      projectDescription:
        "This is a front-end of a website built with raw HTML and CSS. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquid!",
      imgUrl: "/images/project-thumb-demo.png",
      sourceCodeUrl: "#",
      projectUrl: "#",
    },
    {
      id: "005",
      projectName: "Project Name",
      projectDescription:
        "This is a front-end of a website built with raw HTML and CSS. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquid!",
      imgUrl: "/images/project-thumb-demo.png",
      sourceCodeUrl: "#",
      projectUrl: "#",
    },
    {
      id: "006",
      projectName: "Project Name",
      projectDescription:
        "This is a front-end of a website built with raw HTML and CSS. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aliquid!",
      imgUrl: "/images/project-thumb-demo.png",
      sourceCodeUrl: "#",
      projectUrl: "#",
    },
  ];
  return (
    <section
      className="layout-container mb-32 select-none scroll-mt-20 text-center"
      id="projects"
    >
      <h1 className="border-text m-auto mb-8 inline-block border-b-4 px-6 text-2xl font-bold sm:text-[2rem]">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
