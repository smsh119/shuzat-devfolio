import * as motion from "motion/react-client";

function Heading({ children }) {
  const motionOptions = {
    initial: { opacity: 0, transform: "translateY(50px)" },
    whileInView: { opacity: 1, transform: "translateY(0)" },
    transition: { duration: 0.5, ease: "easeInOut" },
  };
  return (
    <motion.h1
      {...motionOptions}
      className="border-text m-auto mb-8 inline-block border-b-4 px-6 text-2xl font-bold sm:text-[2rem]"
    >
      {children}
    </motion.h1>
  );
}

export default Heading;
