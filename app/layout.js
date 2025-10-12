import "./globals.css";

export const metadata = {
  title: "S. M. Shuzatul Hoque | SMSH",
  description:
    "Hi! I'm S. M. Shuzatul Hoque. I am a Software Developer focused on building clean, elegant and high performing web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
