import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 glass-header ${scrolled ? "py-2 md:py-3" : "py-3 md:py-5"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-lg md:text-xl font-display font-bold text-heading tracking-tight">
          חיים <span className="gradient-text">אוטומציה</span>
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo("contact")}
          className="hidden md:block btn-glow px-6 py-2.5 text-sm tracking-wide"
        >
          בואו נדבר
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav className="container mx-auto px-4 pb-4 pt-2 flex flex-col gap-3">
          <button onClick={() => scrollTo("pain")} className="text-right text-sm text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border">
            כאבים עסקיים
          </button>
          <button onClick={() => scrollTo("why")} className="text-right text-sm text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border">
            למה אנחנו
          </button>
          <button onClick={() => scrollTo("services")} className="text-right text-sm text-muted-foreground hover:text-foreground transition-colors py-2 border-b border-border">
            שירותים
          </button>
          <button onClick={() => scrollTo("contact")} className="btn-glow py-3 text-sm tracking-wide text-center mt-1">
            בואו נדבר
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;