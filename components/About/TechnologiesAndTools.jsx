import { langsAndFrameworks, tools } from "@/data/aboutData";
import ToolBadge from "./ToolBadge";

function TechnologiesAndTools() {
  return (
    <>
      <h2 className="border-text m-auto mb-8 inline-block border-b-2 px-6 text-lg sm:mb-11 sm:text-2xl">
        Technologies and Tools I Use
      </h2>
      <section className="grid grid-cols-1 justify-items-center lg:grid-cols-[1fr_2fr] lg:gap-x-4">
        <h3 className="mb-10 text-nowrap text-base underline sm:text-xl lg:justify-self-end lg:text-left lg:no-underline lg:after:content-[':']">
          Languages and Frameworks{" "}
        </h3>
        <div className="lg:justify-items-normal mb-12 grid w-2/3 max-w-[324px] grid-cols-3 justify-items-center gap-x-2 gap-y-3 sm:max-w-[540px] sm:gap-x-4 lg:w-11/12 lg:max-w-max lg:grid-cols-4 lg:gap-x-3 lg:justify-self-start">
          {langsAndFrameworks.map((item) => (
            <ToolBadge key={item.name} name={item.name} logo={item.logo} />
          ))}
        </div>

        <h3 className="mb-10 text-nowrap text-base underline sm:text-xl lg:justify-self-end lg:text-left lg:no-underline lg:after:content-[':']">
          Tools{" "}
        </h3>
        <div className="mb-12 grid grid-cols-2 gap-x-2 gap-y-3 sm:gap-x-12 lg:grid-cols-4 lg:gap-x-3 lg:justify-self-start">
          {tools.map((item) => (
            <ToolBadge key={item.name} name={item.name} logo={item.logo} />
          ))}
        </div>
      </section>
    </>
  );
}

export default TechnologiesAndTools;
