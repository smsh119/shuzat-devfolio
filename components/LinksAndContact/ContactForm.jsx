import Button from "../Button";

function ContactForm() {
  return (
    <form
      action="#"
      className="my-11 flex w-full max-w-[540px] flex-col items-center lg:pl-5"
    >
      <div className="mb-5 w-full">
        <label
          htmlFor="name"
          className="mb-1 block text-base font-bold lg:text-left"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="name"
          className="bg-secondary input:-webkit-autofill focus:border-text focus:ring-text block h-10 w-full rounded-[10px] p-1 text-center transition duration-200 ease-linear focus:outline-0 focus:ring-2 lg:text-left"
        />
      </div>
      <div className="mb-5 w-full">
        <label
          htmlFor="email"
          className="mb-1 block text-base font-bold after:text-red-500 after:content-['*'] lg:text-left"
        >
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          id="email"
          autoComplete="email"
          className="bg-secondary input:-webkit-autofill focus:border-text focus:ring-text block h-10 w-full rounded-[10px] p-1 text-center transition duration-200 ease-linear focus:outline-0 focus:ring-2 lg:text-left"
        />
      </div>
      <div className="mb-5 w-full">
        <label
          htmlFor="message"
          className="mb-1 block text-base font-bold after:text-red-500 after:content-['*'] lg:text-left"
        >
          Message
        </label>
        <textarea
          required
          name="message"
          id="message"
          autoComplete="off"
          rows="8"
          cols="30"
          className="bg-secondary focus:ring-text input:-webkit-autofill block w-full rounded-[10px] p-1 transition duration-200 ease-linear focus:outline-0 focus:ring-2"
        ></textarea>
      </div>
      <Button type="submit" size="lg">
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
