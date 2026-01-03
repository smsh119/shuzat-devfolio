import { SITE_URL } from "@/lib/constants";

export default function robots() {
  const siteUrl = SITE_URL;
  const isProd = process.env.NODE_ENV === "production";

  if (!siteUrl) {
    throw new Error("SITE_URL is not defined.");
  }

  if (!isProd) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
