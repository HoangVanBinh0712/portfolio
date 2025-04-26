const TechStack = ({techStack}) => {
    return (
        <section id="section-tech-stack" className="w-full scroll-mt-48 md:scroll-mt-48"data-aos="fade-up" >
        <div className="">
          <h1 className="text-center text-2xl font-bold md:text-5xl">Tech Stack </h1>
          <div className="mt-10 flex flex-col flex-wrap justify-between gap-y-6 md:flex-row">
            {techStack.map((tech) => (
              <div className="w-full rounded-md border border-solid border-neutral-200 p-6 shadow-sm md:w-[49%]">
                <p className="text-lg font-bold">{tech.title}</p>
                <div className="flex flex-wrap justify-start gap-2 mt-2">
                  {tech.skills.map((skill) => (
                    <div className="rounded-md border border-solid border-neutral-300 bg-neutral-100 px-2 py-1 text-sm font-medium shadow-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default TechStack;
    