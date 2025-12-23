import { aboutDescription } from "@/data/aboutData";
import DOMPurify from "isomorphic-dompurify";
import * as motion from "motion/react-client";
import Button from "../Button";
import Heading from "../Heading";
import MoreAboutMe from "./MoreAboutMe";
import TechnologiesAndTools from "./TechnologiesAndTools";

function About() {
  const motionOptions = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };
  const sanitizedDescription = DOMPurify.sanitize(aboutDescription);
  return (
    <section
      className="layout-container mb-32 scroll-mt-20 text-center select-none"
      id="about"
    >
      <Heading>About</Heading>
      <motion.p
        {...motionOptions}
        className="mb-16 max-w-5xl text-xs sm:text-base"
        dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
      />

      <TechnologiesAndTools />
      <MoreAboutMe />

      <motion.div
        {...motionOptions}
        className="flex justify-center gap-4 sm:gap-6"
      >
        <Button href="#" size="lg" type="anchor" download>
          Download Resume
        </Button>
        <Button href="#linksAndContact" color="accent" type="link" size="lg">
          Contact Me
        </Button>
      </motion.div>
    </section>
  );
}

export default About;
