import * as motion from "motion/react-client";
import Button from "../Button";
import Heading from "../Heading";
import MoreAboutMe from "./MoreAboutMe";
import TechnologiesAndTools from "./TechnologiesAndTools";

function About() {
  const motionOptions = {
    initial: { opacity: 0, transform: "translateY(50px)" },
    whileInView: { opacity: 1, transform: "translateY(0)" },
    transition: { duration: 0.5, ease: "easeInOut" },
  };
  return (
    <section
      className="layout-container mb-32 scroll-mt-20 text-center select-none"
      id="about"
    >
      <Heading>About</Heading>
      <motion.p
        {...motionOptions}
        className="mb-16 max-w-5xl text-xs sm:text-base"
      >
        I am a <strong>Software Developer</strong> focused on building clean,
        elegant and high performing web applications. I have worked on about{" "}
        <strong>10+ web projects</strong> where I was responsible for building
        the Front-end of the application using popular languages, libraries and
        frameworks including{" "}
        <strong>HTML, CSS, JavaScript, ReactJS, Next.js, Tailwind CSS</strong>{" "}
        and much more. I am also skilled with Back-end technology and have built
        5+ REST APIs for my personal projects. I am{" "}
        <strong>currently working</strong> as a <strong>Web Developer</strong>{" "}
        at <strong>ReliSource Technologies LTD</strong>. I am a part of Learning
        Management System (LMS) team.
      </motion.p>

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
