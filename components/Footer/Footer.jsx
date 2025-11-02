import * as motion from "motion/react-client";

function Footer() {
  const motionOptions = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };
  return (
    <motion.footer {...motionOptions} className="bg-secondary">
      <p className="py-4 text-center text-base select-none sm:text-xl">
        ©All Rights Reserved by SMSH.
      </p>
    </motion.footer>
  );
}

export default Footer;
