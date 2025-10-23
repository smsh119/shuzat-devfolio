import ContactForm from "./ContactForm";
import MailAndLinks from "./MailAndLinks";

function LinksAndContact() {
  return (
    <section
      className="layout-container mb-32 select-none scroll-mt-20 text-center"
      id="linksAndContact"
    >
      <h1 className="border-text m-auto mb-2 inline-block border-b-4 px-6 text-2xl font-bold sm:text-[2rem]">
        Links and Contact
      </h1>
      <p className="text-2xl">Get in touch</p>
      <div className="grid grid-cols-1 items-center justify-items-center gap-y-10 lg:grid-cols-2">
        <ContactForm />
        <MailAndLinks />
      </div>
    </section>
  );
}

export default LinksAndContact;
