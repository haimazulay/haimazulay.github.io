import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 glass-header ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-display font-bold text-heading tracking-tight">
          חיים <span className="gradient-text">אוטומציה</span>
        </div>
        <a
          href="#contact"
          className="btn-glow px-6 py-2.5 text-sm tracking-wide"
        >
          בואו נדבר
        </a>
      </div>
    </header>
  );
};

export default Header;
