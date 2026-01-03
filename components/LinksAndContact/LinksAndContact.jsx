import * as motion from "motion/react-client";
import Heading from "../Heading";
import ContactForm from "./ContactForm";
import MailAndLinks from "./MailAndLinks";

function LinksAndContact() {
  const motionOptions = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };
  return (
    <section
      className="layout-container mb-32 scroll-mt-20 text-center select-none"
      id="linksAndContact"
    >
      {/* <h1 className="border-text m-auto mb-2 inline-block border-b-4 px-6 text-2xl font-bold sm:text-[2rem]">
        Links and Contact
      </h1> */}
      <Heading>Links and Contact</Heading>
      <motion.p {...motionOptions} className="-mt-6 text-2xl">
        Get in touch
      </motion.p>
      <div className="grid grid-cols-1 items-center justify-items-center gap-y-10 overflow-x-hidden lg:grid-cols-2">
        <ContactForm />
        <MailAndLinks />
      </div>
    </section>
  );
}

export default LinksAndContact;
