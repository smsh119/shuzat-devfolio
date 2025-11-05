import { AnimatePresence, motion } from "motion/react";

function InputErrorText({ text }) {
  return (
    <AnimatePresence>
      {text && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          exit={{ opacity: 0, height: 0 }}
          className="text-danger mt-1 -mb-1 text-xs lg:ml-1 lg:text-left"
        >
          {text}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default InputErrorText;
