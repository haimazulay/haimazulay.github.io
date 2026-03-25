const Footer = () => {
  return (
    <footer className="py-10 md:py-16 text-center relative section-glow-top">
      <div className="container mx-auto px-4 md:px-6 space-y-2 md:space-y-3">
        <p className="text-muted-foreground text-xs md:text-sm">
          &copy; 2024 חיים אוטומציה. כל הזכויות שמורות.
        </p>
        <p className="text-[10px] md:text-xs text-muted-foreground/60 tracking-wider">
          אוטומציה · ענן · Python · Monday.com
        </p>
        <p className="text-[10px] md:text-xs text-primary/60 tracking-wider">azulay.uk</p>
      </div>
    </footer>
  );
};

export default Footer;