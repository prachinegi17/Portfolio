import { useState, useEffect } from "react";
import {
  Menu, X,
  House,
  UserRound,
  Presentation,
  FileText
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home", icon: House },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Projects", href: "#projects", icon: Presentation },
  { label: "Resume", href: "#resume", icon: FileText },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#0a0a1a]/90 backdrop-blur-md shadow-lg shadow-violet-900/10"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div
          className="text-3xl font-bold text-[#bc7bf9] tracking-wide"
        >
          Pn.
        </div>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-15 lg:flex">
          {NAV_LINKS.map((link) => {
            const Icon = link.icon;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className=" flex gap-3 relative text-lg font-medium text-gray-100 transition-colors duration-200   after:absolute after:-bottom-1 after:left-0 after:h-[4px] after:w-0
                 after:bg-violet-500 after:rounded-lg after:transition-all after:duration-300 hover:after:w-full"
                >
                  <div className="flex items-center justify-center">
                     <Icon size={20} />
                  </div>
                 
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen ? "max-h-96" : "max-h-0"
          }`}
      >
        <ul className="flex flex-col gap-6 bg-[#0a0a1a]/95 px-6 py-6 backdrop-blur-md">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-base font-medium text-gray-300 transition-colors hover:text-violet-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;