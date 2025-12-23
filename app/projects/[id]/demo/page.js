import Button from "@/components/Button";
import VideoPlayer from "@/components/VideoPlayer";
import { getProjectMeta } from "@/lib/contents";
import createMetadata from "@/lib/createMetadata";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const projectData = getProjectMeta(id);
  if (!projectData) {
    return {};
  }
  return createMetadata({
    title: `${projectData.title} | DEMO`,
    description: projectData.description,
    pageUrl: `/projects/${id}/demo`,
    imgUrl: projectData.images?.thumbnailUrl,
    keywords: projectData?.keywords,
  });
}

async function DemoPage({ params }) {
  const { id } = await params;
  const projectData = getProjectMeta(id);
  const { demoUrl = null, title = null } = projectData ?? {};

  if (!demoUrl) {
    notFound();
  }
  return (
    <section className="layout-container relative mb-32 scroll-mt-20 select-none">
      <h1 className="my-8 text-center text-xl font-bold select-text sm:text-3xl">
        {title} - Demo
      </h1>
      <VideoPlayer url={demoUrl} title={title} />
      <div className="mx-auto my-8 flex justify-center">
        <Button type="link" href={`/projects/${id}`}>
          View Details
        </Button>
      </div>
    </section>
  );
}

export default DemoPage;
