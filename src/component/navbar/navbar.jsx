import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import useNavStore from "./usenavStore";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const NAV_LINKS = [
  { label: "About", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const isMenuOpen = useNavStore((state) => state.isMenuOpen);
  const isScrolled = useNavStore((state) => state.isScrolled);
  const toggleMenu = useNavStore((state) => state.toggleMenu);
  const closeMenu = useNavStore((state) => state.closeMenu);
  const setScrolled = useNavStore((state) => state.setScrolled);

  // Scroll shadow — mirrors the header.scrolled class from the static version
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-100 bg-white/85 backdrop-blur-md transition-shadow duration-300 border-b ${
        isScrolled
          ? "shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] border-[#E4E4E7]"
          : "border-transparent"
      }`}
    >
      <nav className="max-w-290 mx-auto px-8 h-19 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 font-semibold text-[19px] text-[#18181B]">
          <span className="w-8 h-8 rounded-[9px] bg-[#C8102E] text-white flex items-center justify-center text-sm font-bold">
            SA
          </span>
          Suriya Afrin
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <NavLink
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `relative text-[14.5px] font-medium transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:bg-[#C8102E] after:transition-all ${
                    isActive
                      ? "text-[#18181B] after:w-full"
                      : "text-[#52525B] hover:text-[#18181B] after:w-0 hover:after:w-full"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Social icons — desktop only */}
        <div className="hidden md:flex items-center gap-4.5">
          <a
            href="https://github.com/suriyaafrin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-[9px] border border-[#E4E4E7] flex items-center justify-center text-[#18181B] hover:border-[#C8102E] hover:text-[#C8102E] hover:-translate-y-0.5 transition-all"
          >
            <FaGithub size={17} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-[9px] border border-[#E4E4E7] flex items-center justify-center text-[#18181B] hover:border-[#C8102E] hover:text-[#C8102E] hover:-translate-y-0.5 transition-all"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="md:hidden w-9.5 h-9.5 rounded-[9px] border border-[#E4E4E7] bg-white flex items-center justify-center"
        >
          <span className="relative block w-4 h-0.5 bg-[#18181B]">
            <span
              className={`absolute left-0 w-4 h-0.5 bg-[#18181B] transition-all duration-200 ${
                isMenuOpen ? "top-0 rotate-45" : "-top-1.25 rotate-0"
              }`}
            />
            <span
              className={`absolute left-0 w-4 h-0.5 bg-[#18181B] transition-all duration-200 ${
                isMenuOpen ? "top-0 -rotate-45" : "top-1.25 rotate-0"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden absolute top-19 left-0 right-0 bg-white border-b border-[#E4E4E7] shadow-[0_16px_32px_-16px_rgba(24,24,27,0.14)] overflow-hidden transition-[max-height] duration-300 ${
          isMenuOpen ? "max-h-70" : "max-h-0"
        }`}
      >
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-b border-[#E4E4E7]">
              <NavLink
                to={link.href}
                end={link.href === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block w-full px-8 py-4 text-[14.5px] font-medium border-l-2 ${
                    isActive
                      ? "text-[#C8102E] border-l-[#C8102E] bg-[#FDEEEF]"
                      : "text-[#52525B] border-l-transparent"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Accent underline below the whole navbar */}
      <div className="h-0.5 w-full bg-linear-to-r from-transparent via-[#C8102E] to-transparent" />
    </header>
  );
}