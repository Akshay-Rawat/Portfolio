import projects from "../Data/Project.js";

import techIcons from "../utils/techIcons";

const Projects = () => {
    return (
        <section
            id="projects"
            className="bg-[#FAF7F0] px-5 py-20 text-[#302820] sm:px-8 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-xs font-semibold tracking-[3px] text-[#A87955]">
                            FEATURED PROJECTS
                        </p>

                        <h2 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">
                            My Projects
                            <span className="ml-3 text-[#A87955]">↗</span>
                        </h2>
                    </div>

                    <p className="max-w-md text-sm leading-6 text-[#65594D]">
                        A selection of projects I've built while exploring
                        modern web technologies and solving real problems.
                    </p>
                </div>

         
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group overflow-hidden rounded-2xl border border-[#E9DFD0] bg-[#FDFBF7] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                          
                            <div className="overflow-hidden bg-[#E9DFD0]">
                                <img
                                    src={project.image}
                                    alt={`${project.title} project screenshot`}
                                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>

                           
                            <div className="p-5">
                                <p className="text-xs font-medium uppercase tracking-wider text-[#A87955]">
                                    {project.category}
                                </p>

                                <h3 className="mt-2 text-xl font-semibold">
                                    {project.title}
                                </h3>

                                <p className="mt-3 min-h-20 text-sm leading-6 text-[#65594D]">
                                    {project.description}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tech.map((technology) => {
                                        const Icon = techIcons[technology];

                                        return (
                                            <span
                                                key={technology}
                                                className="inline-flex items-center gap-2 rounded-full border border-[#E9DFD0] bg-[#E9DFD0]/60 px-3 py-1.5 text-xs font-medium text-[#493A2D]"
                                            >
                                                {Icon && (
                                                    <Icon
                                                        aria-hidden="true"
                                                        className="shrink-0 text-sm text-[#A87955]"
                                                    />
                                                )}

                                                {technology}
                                            </span>
                                        );
                                    })}
                                </div>

                 
                                <div className="mt-6 flex items-center gap-4 border-t border-[#E9DFD0] pt-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium transition-colors hover:text-[#A87955]"
                                        >
                                            GitHub ↗
                                        </a>
                                    )}

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm font-medium text-[#8B6B4F] transition-colors hover:text-[#302820]"
                                        >
                                            Live Demo ↗
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
