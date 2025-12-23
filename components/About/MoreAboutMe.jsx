import { education, hobbies, interests } from "@/data/aboutData";
import * as motion from "motion/react-client";

function MoreAboutMe() {
  const motionOptions = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };
  return (
    <motion.div {...motionOptions}>
      <h2 className="border-text m-auto mb-8 inline-block border-b-2 px-6 text-lg sm:mb-11 sm:text-2xl">
        More About Me
      </h2>
      <section className="grid grid-cols-1 justify-items-center lg:grid-cols-[1fr_2fr] lg:gap-x-4">
        <h3 className="mb-3 text-base text-nowrap underline sm:text-xl lg:justify-self-end lg:text-left lg:no-underline lg:after:content-[':']">
          Education{" "}
        </h3>
        <p className="mb-12 max-w-[320px] text-xs sm:max-w-[540px] sm:text-xl lg:justify-self-start lg:text-left">
          {education.degree}
          <br />
          {education.institution}
          <br />
          {education.country}
        </p>
        <h3 className="mb-3 text-base text-nowrap underline sm:text-xl lg:justify-self-end lg:text-left lg:no-underline lg:after:content-[':']">
          Interests{" "}
        </h3>
        <p className="mb-12 max-w-[320px] text-xs sm:max-w-[540px] sm:text-xl lg:justify-self-start lg:text-left">
          {interests}
        </p>
        <h3 className="mb-3 text-base text-nowrap underline sm:text-xl lg:justify-self-end lg:text-left lg:no-underline lg:after:content-[':']">
          Hobbies{" "}
        </h3>
        <p className="mb-12 max-w-[320px] text-xs sm:max-w-[540px] sm:text-xl lg:justify-self-start lg:text-left">
          {hobbies}
        </p>
      </section>
    </motion.div>
  );
}

export default MoreAboutMe;
