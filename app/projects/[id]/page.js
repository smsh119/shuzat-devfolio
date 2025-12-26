import Badge from "@/components/Badge";
import Button from "@/components/Button";
import { getProject, getProjects } from "@/lib/contents";
import createMetadata from "@/lib/createMetadata";
import formatDate from "@/lib/formatDate";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const { projectData } = await getProject(id);
  if (!projectData) {
    return {};
  }
  return createMetadata({
    title: projectData.title,
    description: projectData.description,
    pageUrl: `/projects/${id}`,
    imgUrl: projectData.images?.thumbnailUrl,
    keywords: projectData?.keywords,
  });
}

export function generateStaticParams() {
  const allProjects = getProjects();
  return allProjects.map((project) => ({
    id: project.id,
  }));
}

async function ProjectPage({ params }) {
  const { id } = await params;
  const { projectData, content } = await getProject(id);
  if (content === null) {
    notFound();
  }
  return (
    <section
      className="layout-container relative mb-32 scroll-mt-20 select-none"
      id="blog"
    >
      <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center">
        <h1 className="mb-1 text-xl font-bold select-text sm:text-3xl">
          {projectData.title}
        </h1>
        <p className="text-center text-[0.5rem] sm:text-sm">
          Developed by{" "}
          <Link href="/" className="text-accent font-bold">
            {projectData?.developedBy}
          </Link>
        </p>
        {projectData?.lastUpdated && (
          <p className="text-[0.5rem] sm:text-xs">
            Last updated in{" "}
            {formatDate(projectData?.lastUpdated, { day: false })}
          </p>
        )}
        {!projectData?.lastUpdated && projectData?.builtDate && (
          <p className="text-[0.5rem] sm:text-xs">
            Originally built in{" "}
            {formatDate(projectData?.builtDate, { day: false })}
          </p>
        )}
        <div className="my-6 w-full">
          <Image
            src={projectData.images?.imgUrls[0]}
            alt="project image"
            className="w-full"
            width={740}
            height={440}
          />
        </div>

        <div className="bg-secondary mx-auto grid max-w-xs grid-cols-[1fr_2fr] content-center items-center gap-3 rounded-lg p-3 sm:max-w-lg sm:gap-4 sm:p-4">
          <div className="text-xs font-bold sm:text-base">Category:</div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5">
              {projectData.categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/projects?category=${cat}`}
                  className="transition-transform duration-200 hover:scale-[1.1]"
                >
                  <Badge className="bg-accent text-[0.625rem] sm:text-sm">
                    {cat}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
          <div className="text-xs font-bold sm:text-base">Technologies:</div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5">
              {projectData.technologies.map((tech) => (
                <Link
                  key={tech}
                  href={`/projects?search=${tech}`}
                  className="transition-transform duration-200 hover:scale-[1.1]"
                >
                  <Badge>{tech}</Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="my-6 flex w-full justify-center gap-5">
          <Button
            href={projectData.sourceCodeUrl}
            type="anchor"
            target="_blank"
          >
            Source Code
          </Button>
          {projectData?.demoUrl && (
            <Button href={`/projects/${id}/demo`} type="link">
              View Demo
            </Button>
          )}
          {projectData?.liveUrl && (
            <Button href={projectData.liveUrl} type="anchor" target="_blank">
              Live Link
            </Button>
          )}
        </div>

        <div className="my-6 w-full text-justify text-xs select-text sm:text-base">
          {content}
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;
