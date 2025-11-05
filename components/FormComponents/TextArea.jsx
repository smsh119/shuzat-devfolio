import { motion } from "motion/react";
import InputErrorText from "./InputErrorText";

function TextArea({
  label,
  register,
  name,
  id,
  error,
  maxLength,
  required,
  textCharCount,
  onChange = () => {},
  ...rest
}) {
  const charCountMotionOptions = {
    initial: { opacity: 0 },
    animate: { opacity: textCharCount ? 0.5 : 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="mb-5 w-full">
      <label
        htmlFor={id}
        className="mb-1 flex flex-col justify-between text-base font-bold lg:flex-row lg:text-left"
      >
        <span
          className={required ? "after:text-red-500 after:content-['*']" : ""}
        >
          {label}
        </span>
        <motion.span
          {...charCountMotionOptions}
          className="mt-1 align-text-bottom text-xs font-normal lg:mr-2 lg:self-end"
        >
          Char Count: {textCharCount ? textCharCount : "0"}/{maxLength}
        </motion.span>
      </label>
      <textarea
        {...register(name, {
          onChange: onChange,
        })}
        {...rest}
        maxLength={maxLength}
        name={name}
        id={id}
        className={`${error ? "ring-danger ring-2" : "focus:ring-text focus:ring-2"} bg-secondary input:-webkit-autofill block w-full rounded-[10px] p-1 transition duration-200 ease-linear focus:outline-0`}
      ></textarea>
      <InputErrorText text={error} />
    </div>
  );
}

export default TextArea;
