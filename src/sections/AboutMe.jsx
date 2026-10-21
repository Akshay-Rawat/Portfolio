import { useState } from "react";
import techIcons from "../utils/techIcons";
import Workspace from "../Images/workspace.png";

const techStack = {
    Frontend: [
        "JavaScript",
        "React.js",
        "Next.js",
        "Redux Toolkit",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
    ],
    Backend: ["Node.js", "Express.js"],
    API: ["REST APIs", "Postman", "Swagger"],
    AI: [
        "Prompt Engineering",
        "AI-Assisted Development",
        "ChatGPT",
        "GitHub Copilot",
        "Claude",
    ],
};

const categories = Object.keys(techStack);

const AboutMe = () => {
    const [activeCategory, setActiveCategory] = useState("Frontend");

    return (
        <div className="border-t border-[#E9DFD0] bg-[#F5F0E8]">
            {/* items-stretch (default) keeps all three columns starting at the same top edge */}
            <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-2 md:px-12 md:py-16 lg:grid-cols-3 lg:px-16">
                {/* Image */}
                <div>
                    <img
                        src={Workspace}
                        alt="Developer workspace"
                        width={640}
                        height={400}
                        loading="lazy"
                        decoding="async"
                        className="h-52 w-full rounded-xl object-cover md:h-full md:min-h-44"
                    />
                </div>

                {/* About text */}
                <div>
                    <p className="text-[10px] font-semibold tracking-[3px] text-[#A87955]">
                        ABOUT ME
                    </p>

                    <h2 className="mt-1 font-serif text-2xl font-semibold text-[#302820]">
                        A Bit About Me
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-[#65594D]">
                        I am a Frontend Developer with a passion for building
                        clean, responsive and interactive web applications. I
                        enjoy turning ideas into real-world products and
                        continuously learning new technologies to improve my
                        skills.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-6">
                        <div>
                            <p className="font-semibold text-[#302820]">3+</p>
                            <p className="text-xs text-[#65594D]">Projects</p>
                        </div>

                        <div>
                            <p className="font-semibold text-[#302820]">
                                Frontend Development
                            </p>
                            <p className="text-xs text-[#65594D]">Speciality</p>
                        </div>
                    </div>
                </div>

                {/* Tech stack: full row on tablet, divider only on desktop */}
                <div className="border-t border-[#D8C8B5] pt-6 md:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <p className="text-[10px] font-semibold tracking-[3px] text-[#A87955]">
                        TECH STACK
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-[#302820]">
                        Technologies I use
                    </h3>

                    <div
                        className="mt-4 flex flex-wrap gap-2"
                        role="group"
                        aria-label="Technology categories"
                    >
                        {categories.map((category) => {
                            const isActive = activeCategory === category;

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    aria-pressed={isActive}
                                    onClick={() => setActiveCategory(category)}
                                    className={`rounded-full border px-3 py-2 text-xs font-medium transition duration-200 ${isActive
                                            ? "border-[#302820] bg-[#302820] text-[#FAF7F0]"
                                            : "border-[#D8C8B5] bg-[#FAF7F0] text-[#65594D] hover:border-[#A87955] hover:bg-[#E9DFD0]"
                                        }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-4 flex min-h-[100px] flex-wrap content-start gap-2">
                        {techStack[activeCategory].map((skill) => {
                            const Icon = techIcons[skill];

                            return (
                                <span
                                    key={skill}
                                    className="inline-flex items-center gap-2 rounded-full border border-[#E9DFD0] bg-[#FAF7F0] px-3 py-2 text-xs text-[#493A2D] transition hover:border-[#A87955]"
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
                </div>
            </div>
        </div>
    );
};

export default AboutMe;