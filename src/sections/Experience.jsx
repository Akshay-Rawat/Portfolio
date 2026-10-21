import experiences from "../Data/Experience";
import techIcons from "../utils/techIcons";


const Experience = () => {
    return (
        <section
            id="experience"
            className="bg-[#FAF7F0] px-5 py-24 text-[#302820] sm:px-10 lg:px-20"
        >
            <div className="mx-auto max-w-5xl">
                <div className="mb-14 text-center">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#A87955]">
                        My Journey
                    </p>

                    <h2 className="font-serif text-4xl font-bold sm:text-5xl">
                        Experience
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#65594D] sm:text-base">
                        My professional journey in software development,
                        building practical skills and creating web applications.
                    </p>
                </div>

                <div className="relative ml-3 space-y-8 border-l-2 border-[#E9DFD0] pl-7 sm:ml-8 sm:pl-10">
                    {experiences.map((experience) => (
                        <article
                            key={experience.id}
                            className="relative rounded-2xl border border-[#E9DFD0] bg-[#FFFDF8] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8"
                        >
                            <span className="absolute -left-[37px] top-8 h-4 w-4 rounded-full border-4 border-[#FAF7F0] bg-[#A87955] sm:-left-[50px]" />

                            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <span className="inline-block rounded-full bg-[#E9DFD0] px-3 py-1 text-xs font-semibold text-[#8B6B4F]">
                                        {experience.type}
                                    </span>

                                    <h3 className="mt-4 text-xl font-bold sm:text-2xl">
                                        {experience.role}
                                    </h3>

                                    <p className="mt-1 font-semibold text-[#A87955]">
                                        {experience.company}
                                    </p>
                                </div>

                                <p className="text-sm font-medium text-[#65594D]">
                                    {experience.duration}
                                </p>
                            </div>

                            <p className="mt-5 text-sm leading-7 text-[#65594D] sm:text-base">
                                {experience.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {experience.skills.map((skill) => {
                                    const Icon = techIcons[skill];

                                    return (
                                        <span
                                            key={skill}
                                            className="inline-flex items-center gap-2 rounded-lg border border-[#E9DFD0] bg-[#E9DFD0]/40 px-3 py-1.5 text-xs font-medium text-[#65594D] transition-colors hover:border-[#A87955]"
                                        >
                                            {Icon && (
                                                <Icon
                                                    aria-hidden="true"
                                                    className="shrink-0 text-sm text-[#A87955]"
                                                />
                                            )}

                                            {skill}
                                        </span>
                                    );
                                })}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;