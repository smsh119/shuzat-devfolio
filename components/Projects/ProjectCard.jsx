import Image from "next/image";
import Button from "../Button";

function ProjectCard({
  projectName,
  projectDescription,
  imgUrl,
  sourceCodeUrl,
  projectUrl,
}) {
  return (
    <article className="inset-shadow-custom bg-secondary hover:shadow-custom flex max-w-80 flex-col justify-center gap-3 rounded-xl px-6 py-7 transition duration-200 ease-linear hover:scale-[1.02]">
      <h2 className="text-2xl font-bold">{projectName}</h2>
      <Image
        width={320}
        height={200}
        src={imgUrl}
        alt={`${projectName} Thumbnail`}
        className="rounded-tl-4xl rounded-br-4xl w-full"
      />
      <h3 className="text-base font-bold underline">Description</h3>
      <p className="text-xs">{projectDescription}</p>
      <div className="flex justify-center gap-4">
        <Button href="#" type="anchor" size="sm">
          Source Code
        </Button>
        <Button href="#" type="anchor" size="sm">
          View Project
        </Button>
      </div>
    </article>
  );
}

export default ProjectCard;
