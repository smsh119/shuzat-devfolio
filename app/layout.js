import Header from "@/components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "S. M. Shuzatul Hoque | SMSH",
  description:
    "Hi! I'm S. M. Shuzatul Hoque. I am a Software Developer focused on building clean, elegant and high performing web applications.",
  keywords: [
    "S. M. Shuzatul Hoque",
    "SMSH",
    "Shuzat",
    "Suzat",
    "software engineer",
    "portfolio",
    "tailwind",
    "javascript",
    "Frontend Developer",
    "React",
    "Next.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "S. M. Shuzatul Hoque", url: "#" }],
  creator: "S. M. Shuzatul Hoque",
  // metadataBase: new URL("#"),
  // TODO:
  // openGraph: {
  //   title: "S. M. Shuzatul Hoque | SMSH",
  //   description:
  //     "Hi! I'm S. M. Shuzatul Hoque. I am a Software Developer focused on building clean, elegant and high performing web applications.",
  //   url: "#",
  //   siteName: "SHUZAT-DEVFOLIO",
  //   images: [
  //     {
  //       url: "/og-image.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Portfolio Preview",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "#",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
