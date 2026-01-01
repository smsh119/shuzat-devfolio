export default function robots() {
  const siteUrl = process.env.SITE_URL;
  const isProd = process.env.SITE_ENV === "production";

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
