const Navbar = () => {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50
            flex items-center justify-center gap-7
            rounded-2xl border border-[#E9DFD0]
            bg-[#FAF7F0]/90 backdrop-blur-xl
            px-8 py-4 text-[#302820] shadow-lg
            max-w-[95vw]">

            <a href="#about"
                className="text-sm sm:text-base font-medium whitespace-nowrap transition-colors hover:text-[#A87955]">
                About
            </a>

            <a href="#projects"
                className="text-sm sm:text-base font-medium whitespace-nowrap transition-colors hover:text-[#A87955]">
                Projects
            </a>

            <a href="#experience"
                className="text-sm sm:text-base font-medium whitespace-nowrap transition-colors hover:text-[#A87955]">
                Experience
            </a>

            <a href="#contact"
                className="text-sm sm:text-base font-medium whitespace-nowrap transition-colors hover:text-[#A87955]">
                Contact
            </a>
        </nav>
    )
}

export default Navbar