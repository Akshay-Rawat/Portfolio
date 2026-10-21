import Workspace from "../Images/Workspace.png";

const sideCard =
    "flex items-center justify-between gap-4 rounded-[18px] border border-[#E1CEB8] bg-gradient-to-br from-[#FDF9F2] to-[#E9DFD0] px-[18px] py-4";
const number = "block mb-1.5 text-sm font-semibold tracking-wide text-[#A87955]";
const title =
    "m-0 mb-1.5 font-serif text-[clamp(18px,1.5vw,22px)] font-semibold leading-tight text-[#302820]";
const body = "m-0 text-[13px] leading-[1.55] text-[#65594D]";

const HowIWork = () => {
    return (

        <section id="how-i-work" className="w-full bg-[#FAF7F0] text-[#302820]">
            <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-8 sm:py-9">

                <div className="mb-6 grid items-center gap-3 lg:grid-cols-[0.92fr_1.08fr] lg:gap-x-3.5">
                    <span className="text-xs font-semibold tracking-[3px] text-[#A87955] lg:col-span-2">
                        HOW I WORK
                    </span>

                    <h2 className="m-0 max-w-[580px] font-serif text-[clamp(30px,3vw,40px)] leading-[1.15] text-[#302820]">
                        Turning ideas into real products
                    </h2>


                </div>


                <div className="grid gap-3.5 lg:grid-cols-[0.92fr_1.08fr]">

                    <article className="flex min-w-0 flex-col overflow-hidden rounded-[18px] border border-[#E1CEB8] bg-gradient-to-br from-[#FDF9F2] to-[#E9DFD0]">
                        <div
                            className="min-h-[240px] flex-1 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${Workspace})` }}
                            role="img"
                            aria-label="Developer workspace with laptop and plants"
                        />

                        <div className="px-[22px] py-5">
                            <span className={number}>01</span>
                            <h3 className="m-0 mb-1.5 font-serif text-[clamp(21px,1.8vw,27px)] font-semibold leading-tight text-[#302820]">
                                I prioritize client collaboration
                            </h3>
                            <p className={`${body} max-w-[420px]`}>
                                I value clear communication, regular updates and
                                building solutions around project requirements.
                            </p>
                        </div>
                    </article>


                    <div className="grid min-w-0 gap-3.5 lg:grid-rows-3">

                        <article className={sideCard}>
                            <div className="min-w-0 flex-1">
                                <span className={number}>02</span>
                                <h3 className={title}>Flexible with time zone communications</h3>
                                <p className={body}>
                                    I am adaptable and comfortable working with teams
                                    across different time zones.
                                </p>
                            </div>

                            <div
                                aria-hidden="true"
                                className="grid aspect-square w-[58px] shrink-0 place-items-center rounded-full border border-dashed border-[#CBAA88] bg-[#F5EBDD] sm:w-[72px]"
                            >
                                <div className="relative h-3/4 w-3/4 overflow-hidden rounded-full border border-[#CBAA88] bg-gradient-to-br from-[#FDF8F0] to-[#C7A681] before:absolute before:inset-y-0 before:inset-x-1/4 before:rounded-full before:border before:border-[#A87955]/50 before:content-[''] after:absolute after:inset-y-0 after:inset-x-[42%] after:rounded-full after:border after:border-[#A87955]/50 after:content-['']">
                                    <span className="absolute top-1/2 w-full border-t border-[#A87955]/50" />
                                </div>
                            </div>
                        </article>


                        <article className={sideCard}>
                            <div className="min-w-0 flex-1">
                                <span className={number}>03</span>
                                <h3 className={title}>Continuous learning</h3>
                                <p className={body}>
                                    I keep exploring new technologies and improving my
                                    skills to build better web applications.
                                </p>
                            </div>

                            <div aria-hidden="true" className="relative h-[76px] w-[76px] shrink-0">
                                <span className="absolute right-[22px] top-0 text-3xl text-[#A87955]">✦</span>
                                <span className="absolute bottom-8 right-2 h-3 w-[60px] rounded-[3px] border border-[#65594D]/20 bg-gradient-to-b from-[#C7A681] to-[#A87955] shadow-md shadow-[#302820]/10" />
                                <span className="absolute bottom-[18px] right-1 h-3 w-[70px] rounded-[3px] border border-[#65594D]/20 bg-gradient-to-b from-[#E9DFD0] to-[#CBB398] shadow-md shadow-[#302820]/10" />
                                <span className="absolute bottom-1 right-0 h-3 w-[76px] rounded-[3px] border border-[#65594D]/20 bg-gradient-to-b from-[#D8BFA1] to-[#B38D6A] shadow-md shadow-[#302820]/10" />
                            </div>
                        </article>


                        <article className={sideCard}>
                            <div className="min-w-0 flex-1">
                                <span className={number}>04</span>
                                <h3 className={title}>Problem solving mindset</h3>
                                <p className={body}>
                                    I break complex problems into smaller steps and focus
                                    on practical, efficient and maintainable solutions.
                                </p>
                            </div>

                            <div aria-hidden="true" className="flex shrink-0 items-center text-[32px] text-[#A87955]">
                                <span>✣</span>
                                <span className="-ml-2.5 translate-y-1.5 rotate-[20deg] text-[#8E6548]">✣</span>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowIWork;