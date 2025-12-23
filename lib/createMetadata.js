const createMetadata = ({
  title,
  description,
  pageUrl,
  imgUrl,
  author = "S. M. Shuzatul Hoque",
  keywords = [],
}) => {
  const meta = {
    title: title,
    description: description,
    alternates: {
      canonical: `${process.env.SITE_URL}${pageUrl}`,
    },
    authors: [{ name: author, url: "#" }],
    creator: author,
    openGraph: {
      title: `${title}`,
      description: description,
      type: "article",
      images: [
        {
          url:
            `${process.env.SITE_URL}${imgUrl}` ||
            `${process.env.SITE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${title} Preview`,
        },
      ],
    },
    twitter: {
      title: `${title}`,
      description: description,
      card: "summary_large_image",
      images: [
        `${process.env.SITE_URL}${imgUrl}` ||
          `${process.env.SITE_URL}/og-image.png`,
      ],
    },
  };
  if (keywords.length > 0) {
    meta.keywords = keywords;
  }
  return meta;
};

export default createMetadata;
