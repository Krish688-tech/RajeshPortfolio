import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
  ];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-[#0b0b0d]/80 px-6 py-5 backdrop-blur-xl md:px-12 lg:px-[6%]">
      <div className="relative flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-bold tracking-wide text-white"
        >
          RAJESH<span className="text-blue-400">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-white/60 transition duration-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-6 py-3 text-xs font-bold tracking-wide text-white transition duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            LET'S TALK
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md md:hidden"
        >
          <div className="relative h-5 w-5">
            {/* Top line */}
            <span
              className={`absolute left-0 top-1/2 h-px w-5 bg-white transition-all duration-300 ease-out ${
                menuOpen
                  ? "rotate-45"
                  : "-translate-y-1.5"
              }`}
            />

            {/* Middle line */}
            <span
              className={`absolute left-0 top-1/2 h-px w-5 bg-white transition-all duration-200 ease-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Bottom line */}
            <span
              className={`absolute left-0 top-1/2 h-px w-5 bg-white transition-all duration-300 ease-out ${
                menuOpen
                  ? "-rotate-45"
                  : "translate-y-1.5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-4 right-4 top-18 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0f]/95 shadow-2xl backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          menuOpen
            ? "pointer-events-auto max-h-130 translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
        }`}
      >
        <div className="p-3">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="group flex items-center justify-between border-b border-white/5 px-4 py-4 text-sm text-white/70 transition-all duration-300 hover:bg-white/5 hover:text-white"
              style={{
                transitionDelay: menuOpen
                  ? `${index * 40}ms`
                  : "0ms",
              }}
            >
              <span>{link.name}</span>

              <span className="text-white/25 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white">
                ↗
              </span>
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex items-center justify-center rounded-full bg-white px-5 py-3 text-xs font-bold tracking-wider text-black transition-transform duration-300 hover:scale-[1.02]"
          >
            LET'S TALK →
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;