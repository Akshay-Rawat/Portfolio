import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const socialLink =
    "flex h-11 w-11 items-center justify-center rounded-[11px] border border-[#E9DFD0] bg-[#FDFBF7] text-xl text-[#302820] no-underline transition-all duration-[250ms] ease-in-out hover:-translate-y-1 hover:border-[#A87955] hover:bg-[#E9DFD0] hover:text-[#A87955] min-[601px]:h-12 min-[601px]:w-12 min-[601px]:text-[22px]";

const Contact = () => {
    const email = "rawatakshay428@gmail.com";

    return (
        <section
            id="contact"
            className="relative flex min-h-[420px] flex-col items-center justify-between overflow-hidden bg-[#FAF7F0] px-5 pb-7 pt-[65px] text-center text-[#302820] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(rgba(168,121,85,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(168,121,85,0.07)_1px,transparent_1px)] before:bg-[size:70px_70px] before:content-[''] min-[601px]:min-h-[480px] min-[601px]:px-6 min-[601px]:pb-8 min-[601px]:pt-20"
        >
            <div className="relative z-10 mx-auto mb-[55px] w-full max-w-[900px] min-[601px]:mb-[70px]">
                <h2 className="mx-auto mb-6 max-w-[850px] text-[clamp(2rem,5vw,3rem)] font-[750] leading-[1.2] tracking-[-0.6px] text-[#302820] min-[601px]:leading-[1.15] min-[601px]:tracking-[-1.3px]">
                    Ready to take <span className="text-[#A87955]">your</span>{" "}
                    digital presence to the next level?
                </h2>

                <p className="mx-auto mb-[30px] max-w-[760px] text-base leading-[1.7] text-[#65594D] min-[601px]:text-[clamp(1rem,2vw,1.2rem)]">
                    Reach out to me today and let's discuss how I can help you
                    achieve your goals.
                </p>

                <a
                    href={`mailto:${email}?subject=${encodeURIComponent(
                        "Let's Work Together"
                    )}`}
                    className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-xl border border-[#A87955] bg-[#302820] px-6 text-base font-semibold text-[#FAF7F0] no-underline transition-all duration-[250ms] ease-in-out hover:-translate-y-[3px] hover:bg-[#A87955] hover:text-white hover:shadow-[0_8px_24px_rgba(168,121,85,0.2)] min-[601px]:min-h-[58px] min-[601px]:px-[34px]"
                >
                    Let's get in touch
                    <FaPaperPlane className="text-sm" />
                </a>
            </div>

            <footer className="relative z-10 flex w-full flex-col items-center">
                <p className="m-0 mb-4 text-[0.85rem] text-[#65594D] min-[601px]:text-[0.95rem]">
                    Copyright © {new Date().getFullYear()} Akshay Rawat
                </p>

                <div className="flex items-center justify-center gap-3.5 min-[601px]:gap-4">
                    <a
                        href="https://github.com/Akshay-Rawat"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        title="GitHub"
                        className={socialLink}
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                        className={socialLink}
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href={`mailto:${email}`}
                        aria-label="Email"
                        title="Email"
                        className={socialLink}
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </footer>
        </section>
    );
};

export default Contact;