import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import LinksAndContact from "@/components/LinksAndContact/LinksAndContact";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <LinksAndContact />
      <Footer />
    </>
  );
}
