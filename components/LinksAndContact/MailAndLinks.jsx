import { contacts } from "@/data/contactData";
import Link from "next/link";
import LinkBadge from "./LinkBadge";
import LinksGroup from "./LinksGroup";

function MailAndLinks() {
  return (
    <div className="flex w-full flex-col items-center lg:col-start-1 lg:row-start-1 lg:border-r-4 lg:py-10 lg:pr-5">
      <div className="lg:border-text w-11/12 max-w-[450px] lg:w-full lg:max-w-full">
        <div className="bg-secondary mb-3 w-full rounded-[10px] text-xl sm:text-2xl">
          <Link
            href={`mailto:${contacts.email}`}
            className="hover:bg-accent flex w-full items-center justify-center gap-x-2 rounded-[10px] p-5 transition duration-200 ease-linear hover:scale-[1.02]"
          >
            <img
              className="h-7 w-7 sm:h-8 sm:w-8"
              src="/images/logos/envelope.png"
              alt="Email Logo"
            />
            <span>{contacts.email}</span>
          </Link>
        </div>

        <LinksGroup>
          {contacts.links.map((lnk) => (
            <LinkBadge
              key={lnk.name}
              name={lnk.name}
              logoUrl={lnk.logoUrl}
              href={lnk.href}
            />
          ))}
        </LinksGroup>

        <LinksGroup title="CP Online Judges Profiles">
          {contacts.onlineJudgeProfiles.map((lnk) => (
            <LinkBadge
              key={lnk.name}
              name={lnk.name}
              logoUrl={lnk.logoUrl}
              href={lnk.href}
            />
          ))}
        </LinksGroup>
      </div>
    </div>
  );
}

export default MailAndLinks;
