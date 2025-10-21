function MoreAboutMe() {
  return (
    <>
      <h2 className="border-text m-auto mb-8 inline-block border-b-2 px-6 text-lg sm:mb-11 sm:text-2xl">
        More About Me
      </h2>
      <section className="grid grid-cols-1 justify-items-center lg:grid-cols-[1fr_2fr] lg:gap-x-4">
        <h3 className="mb-3 text-nowrap text-base underline sm:text-xl lg:justify-self-end lg:text-left lg:no-underline lg:after:content-[':']">
          Education{" "}
        </h3>
        <p className="mb-12 max-w-[320px] text-xs sm:max-w-[540px] sm:text-xl lg:justify-self-start lg:text-left">
          BSc. in Information and Communication Engineering
          <br />
          Uninversity of Rajshahi
          <br />
          Bangladesh
        </p>
        <h3 className="mb-3 text-nowrap text-base underline sm:text-xl lg:justify-self-end lg:text-left lg:no-underline lg:after:content-[':']">
          Interests{" "}
        </h3>
        <p className="mb-12 max-w-[320px] text-xs sm:max-w-[540px] sm:text-xl lg:justify-self-start lg:text-left">
          Problem Solving, Learning New Technologies, Building Side Projects,
          Game Development, Graphic Design, Figma Prototyping, Science related
          stuff.
        </p>
        <h3 className="mb-3 text-nowrap text-base underline sm:text-xl lg:justify-self-end lg:text-left lg:no-underline lg:after:content-[':']">
          Hobbies{" "}
        </h3>
        <p className="mb-12 max-w-[320px] text-xs sm:max-w-[540px] sm:text-xl lg:justify-self-start lg:text-left">
          Traveling, Bike Riding, Gaming, Listening to Music.
        </p>
      </section>
    </>
  );
}

export default MoreAboutMe;
