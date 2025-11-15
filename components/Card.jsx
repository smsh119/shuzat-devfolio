import * as motion from "motion/react-client";

function Card({ children }) {
  const motionOptions = {
    initial: { opacity: 0, scale: 0.9 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeIn" },
  };
  return (
    <motion.article
      {...motionOptions}
      className="card inset-shadow-custom bg-secondary hover:shadow-custom relative flex max-w-80 flex-col justify-center gap-3 overflow-hidden rounded-xl px-6 py-7 transition duration-200 ease-linear hover:scale-[1.02]"
    >
      {children}
    </motion.article>
  );
}

export default Card;
