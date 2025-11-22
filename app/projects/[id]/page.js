import Badge from "@/components/Badge";
import { getProject } from "@/data/projectsData";
import Image from "next/image";
import Link from "next/link";

async function ProjectPage({ params }) {
  const { id } = await params;
  const projectData = getProject(id);

  return (
    <section
      className="layout-container relative mb-32 scroll-mt-20 select-none"
      id="blog"
    >
      <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center">
        <h1 className="mb-1 text-xl font-bold select-text sm:text-3xl">
          {projectData.title}
        </h1>

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
          <div className="text-xs font-bold sm:text-base">Platform:</div>
          <div>
            <div className="flex flex-wrap items-center gap-1.5">
              {projectData.platforms.map((platform) => (
                <Link
                  key={platform}
                  href={`/projects?category=${platform}`}
                  className="transition-transform duration-200 hover:scale-[1.1]"
                >
                  <Badge className="bg-accent text-[0.625rem] sm:text-sm">
                    {platform}
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
          <Link
            href={projectData.sourceCodeUrl}
            className="bg-primary active:bg-bg hover:ring-text rounded-3xl px-4 py-2 text-xs font-bold transition duration-200 ease-linear hover:ring-3"
          >
            Source Code
          </Link>
          <Link
            href={projectData.demoUrl}
            className="bg-primary active:bg-bg hover:ring-text rounded-3xl px-4 py-2 text-xs font-bold transition duration-200 ease-linear hover:ring-3"
          >
            View Demo
          </Link>
        </div>

        <p className="my-6 text-justify text-xs select-text sm:text-base">
          {/* TODO: view the description */}
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. <br />
          <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
      </div>
    </section>
  );
}

export default ProjectPage;
