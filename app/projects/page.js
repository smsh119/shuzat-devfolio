import Filter from "@/components/Filter";
import Projects from "@/components/Projects/Projects";
import { getProjects } from "@/lib/contents";
import filterByCategoryAndSearch from "@/lib/filterByCategoryAndSearch";

export const metadata = {
  title: "PROJECTS | SHUZAT-DEVFOLIO",
  description:
    "All the projects developed by S. M. Shuzatul Hoque on software development, web development, game development and more.",
  keywords: [
    "projects",
    "web projects",
    "game projects",
    "mobile development",
    "web development",
  ],
  authors: [{ name: "S. M. Shuzatul Hoque", url: "#" }],
  creator: "S. M. Shuzatul Hoque",
  metadataBase: new URL(`${process.env.SITE_URL}/projects`),
  openGraph: {
    title: "PROJECTS | SHUZAT-DEVFOLIO",
    description:
      "All the projects developed by S. M. Shuzatul Hoque on software development, web development, game development and more.",
    url: "/",
    siteName: "SHUZAT-DEVFOLIO",
    images: [
      {
        url: `${process.env.SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PROJECTS | SHUZAT-DEVFOLIO",
    description:
      "All the projects developed by S. M. Shuzatul Hoque on software development, web development, game development and more.",
    images: [`${process.env.SITE_URL}/og-image.png`],
  },
  alternates: {
    canonical: "/projects",
  },
};

async function ProjectsPage({ searchParams }) {
  const filters = await searchParams;
  const allProjects = getProjects();
  const categorySet = new Set();

  allProjects.forEach((proj) => {
    proj?.categories?.forEach((cat) => categorySet.add(cat));
  });

  const projects = filterByCategoryAndSearch(allProjects, filters);

  return (
    <>
      <Filter
        searchPlaceholder="Search project"
        categories={[...categorySet]}
        url={`/projects`}
        filters={filters}
      />
      <Projects isHeadingVisible={false} projects={projects} />
    </>
  );
}

export default ProjectsPage;
