import akki from "../Images/akki.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#FAF7F0] text-[#302820]"
        >
            <div className="relative mx-auto grid min-h-[405px] max-w-7xl items-center gap-8 px-6 pb-12 pt-28 md:grid-cols-2 md:px-12 lg:px-16">
                <div className="pointer-events-none absolute -right-20 -top-40 h-[430px] w-[430px] rounded-full bg-[#E9D7C3]/60 blur-3xl" />

                <div className="pointer-events-none absolute right-[15%] top-28 h-80 w-80 rounded-full bg-[#E9DFD0] opacity-70" />

                <div className="relative z-10">
                    <p className="mb-3 text-xs font-semibold tracking-[5px] text-[#A87955]">
                        FRONTEND DEVELOPER
                    </p>

                    <h1 className="font-serif text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-[54px]">
                        Turning Ideas into
                        <span className="block text-[#A87955]">
                            Interactive Realities.
                        </span>
                    </h1>

                    <p className="mt-4 max-w-lg text-sm leading-5 text-[#65594D] sm:text-base">
                        Hi! I'm Akshay, a Frontend Developer who loves building
                        modern, responsive and user-friendly web applications
                        using React and modern technologies.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            className="rounded-full bg-[#302820] px-7 py-3 text-sm text-white transition hover:bg-[#654735]"
                        >
                            View My Work 
                        </a>

                        <a
                            href="#contact"
                            className="rounded-full border border-[#8B6B4F] px-7 py-3 text-sm transition hover:bg-[#E9DFD0]"
                        >
                            Get In Touch
                        </a>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-5 text-sm font-medium text-[#302820]">
                        <a
                            href="https://github.com/Akshay-Rawat"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="flex items-center gap-2 transition hover:text-[#A87955]"
                        >
                            <FaGithub size={18} />
                            GitHub 
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="flex items-center gap-2 transition hover:text-[#A87955]"
                        >
                            <FaLinkedin size={18} />
                            LinkedIn 
                        </a>

                        <a
                            href="mailto:rawatakshay428@gmail.com"
                            aria-label="Email"
                            className="flex items-center gap-2 transition hover:text-[#A87955]"
                        >
                            <FaEnvelope size={18} />
                            Email 
                        </a>
                    </div>
                </div>

                <div className="relative z-10 flex min-h-[320px] items-end justify-center md:min-h-[380px]">
                    <div className="absolute right-0 top-4 h-72 w-72 rounded-full bg-[#E7D3BD] sm:h-80 sm:w-80" />

                    <img
                        src={akki}
                        alt="Akshay - Frontend Developer"
                        className="relative z-10 max-h-[390px] w-full max-w-sm object-contain object-bottom"
                    />

                    <div className="absolute bottom-8 right-0 z-20 rounded-xl border border-[#E9DFD0] bg-[#FAF7F0]/95 px-4 py-3 shadow-sm">
                        <p className="text-xs font-medium text-[#302820]">
                            <span className="mr-1 text-green-600">●</span>
                            Available
                        </p>

                        <p className="mt-1 text-xs text-[#65594D]">
                            for opportunities
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
