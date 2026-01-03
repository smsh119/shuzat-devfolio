import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ToasterProvider from "@/components/ToasterProvider";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

export const metadata = {
  title: "S. M. Shuzatul Hoque | SMSH",
  description:
    "Hi! I'm S. M. Shuzatul Hoque. I am a Software Developer focused on building clean, elegant and high performing web applications.",
  keywords: [
    "sm shuzatul hoque",
    "smsh",
    "shuzat",
    "suzat",
    "suzat hoq",
    "software engineer",
    "frontend developer",
    "web developer",
    "portfolio",
    "shuzat-devfolio",
  ],
  authors: [{ name: "S. M. Shuzatul Hoque", url: "#" }],
  creator: "S. M. Shuzatul Hoque",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "S. M. Shuzatul Hoque | SMSH",
    description:
      "Hi! I'm S. M. Shuzatul Hoque. I am a Software Developer focused on building clean, elegant and high performing web applications.",
    url: "/",
    siteName: "SHUZAT-DEVFOLIO",
    images: [
      {
        url: "/og-image.png",
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
    title: "S. M. Shuzatul Hoque | SMSH",
    description:
      "Hi! I'm S. M. Shuzatul Hoque. I am a Software Developer focused on building clean, elegant and high performing web applications.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="grid min-h-screen grid-rows-[auto_1fr_auto]">
        <Header />
        <main>{children}</main>
        <Footer />
        <ToasterProvider />
      </body>
    </html>
  );
}
