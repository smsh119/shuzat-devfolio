import Image from "next/image";
import Link from "next/link";
import Badge from "../Badge";
import Card from "../Card";

function ProjectCard({
  id,
  title,
  description,
  images,
  sourceCodeUrl,
  demoUrl,
  platforms,
  technologies,
}) {
  return (
    <Card>
      <h2 className="text-2xl font-bold">{title}</h2>
      <Image
        width={320}
        height={200}
        src={images?.thumbnailUrl}
        alt={`${title} Thumbnail`}
        className="w-full rounded-tl-4xl rounded-br-4xl"
      />

      <div className="mt-1 -mb-1 flex flex-wrap items-center gap-1.5">
        {platforms?.length > 0 &&
          platforms.map((plat) => (
            <Badge key={plat} className="bg-accent text-[0.625rem] sm:text-sm">
              {plat}
            </Badge>
          ))}
      </div>

      <p className="text-justify text-xs">{description}</p>
      <div className="flex flex-wrap items-center gap-1">
        <span className="text-[0.5rem] font-bold sm:text-[0.625rem]">
          Tech:
        </span>

        {technologies?.length > 0 &&
          technologies.map((tech) => <Badge key={tech}>{tech}</Badge>)}
      </div>
      <ProjectCardButtons
        sourceCodeUrl={sourceCodeUrl}
        demoUrl={demoUrl}
        projectId={id}
      />
    </Card>
  );
}

function ProjectCardButtons({ sourceCodeUrl, demoUrl, projectId }) {
  return (
    <div className="h-4">
      <div className="project-card-buttons-bg absolute bottom-0 left-0 h-10 w-full bg-black opacity-50"></div>
      <div className="project-card-buttons absolute bottom-2.5 left-0 flex w-full items-center justify-around gap-2 text-center">
        <Link
          href={`/projects/${projectId}`}
          className="border-primary hover:text-accent grow basis-1 border-r-2 p-1 text-xs transition-transform duration-200 hover:scale-[1.05] hover:font-bold"
        >
          View Details
        </Link>
        <Link
          href={sourceCodeUrl}
          className="border-primary hover:text-accent grow basis-1 p-1 text-xs transition-transform duration-200 hover:scale-[1.05] hover:font-bold"
        >
          Source Code
        </Link>
        <Link
          href={demoUrl}
          className="border-primary hover:text-accent grow basis-1 border-l-2 p-1 text-xs transition-transform duration-200 hover:scale-[1.05] hover:font-bold"
        >
          View Demo
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
