const ProjectList = ({ projects }) => {
  return (
    <section id="section-projects" className="w-full scroll-mt-48 md:scroll-mt-48" data-aos="fade-up">
      <h1 className="text-center text-2xl font-bold md:text-5xl">Projects</h1>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.id}
            href={'/projects/' + project.id}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-lg border border-solid border-neutral-200 transition-all duration-200 hover:shadow-md"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <img
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                src={`https://placehold.co/600x400?text=${project.title}&font=montserrat`}
                alt={`${project.title} preview`}
              />
            </div>

            <div className="p-4">
              <h3 className="mb-2 line-clamp-2 text-lg font-bold">{project.title}</h3>

              <div className="">
                <p className="line-clamp-3 text-sm text-neutral-700">
                  <label className="text-sm font-bold">Short description: </label>
                  {project.description}
                </p>
              </div>

              <div className="mt-3 h-48">
                <p className="mb-2 text-md font-bold">Tech stack:</p>
                <div className="h-28">
                  <div className="mb-4 flex flex-wrap items-start gap-2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="rounded-md border border-solid border-neutral-300 bg-neutral-100 px-2 py-1 text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-2 border-t border-neutral-200 pt-3 text-center hover:underline">Click to view details</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
