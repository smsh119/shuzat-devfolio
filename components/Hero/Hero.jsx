function Hero() {
  return (
    <section className="layout-container my-11 flex max-w-[840px] select-none flex-col items-center sm:my-14 sm:flex-row">
      <div className="z-1 text-center sm:shrink-0 sm:grow sm:text-left">
        <p className="mb-5 text-base">Hi there 👋.</p>
        <p className="text-2xl">I am</p>
        <h1 className="text-[2rem] font-bold sm:text-4xl">
          S. M. Shuzatul Hoque
        </h1>
        <p className="text-2xl">Software Developer</p>
      </div>
      <div className="my-5 w-1/2 sm:my-0 sm:-ml-8 sm:w-[330px]">
        <picture className="block w-full">
          <source
            type="image/webp"
            srcSet="
              ./images/hero-pic-sm.webp 200w,
              ./images/hero-pic-md.webp 350w,
              ./images/hero-pic-lg.webp 635w
            "
            sizes="(max-width: 744px) 45vw, 33vw"
          />
          <source
            type="image/png"
            srcSet="
              ./images/hero-pic-sm.png 200w,
              ./images/hero-pic-md.png 360w,
              ./images/hero-pic-lg.png 635w
            "
            sizes="(max-width: 744px) 45vw, 33vw"
          />
          <img
            src="./images/hero-pic-lg.png"
            alt="S. M. Shuzatul Hoque Picture"
          />
        </picture>
      </div>
    </section>
  );
}

export default Hero;
