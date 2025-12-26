import InputErrorText from "./InputErrorText";

function Input({ label, register, id, error, required, ...rest }) {
  return (
    <div className="mb-5 w-full">
      <label
        htmlFor={id}
        className="mb-1 block text-base font-bold lg:text-left"
      >
        <span
          className={required ? "after:text-red-500 after:content-['*']" : ""}
        >
          {label}
        </span>
      </label>
      <input
        {...register(id)}
        {...rest}
        name={id}
        id={id}
        className={`${error ? "ring-danger ring-2" : "focus:ring-text focus:ring-2"} bg-secondary input:-webkit-autofill block h-10 w-full rounded-[10px] p-1 text-center transition duration-200 ease-linear focus:outline-0 lg:text-left`}
      />
      <InputErrorText text={error} />
    </div>
  );
}

export default Input;
