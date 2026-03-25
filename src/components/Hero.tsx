import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid px-4">
      {/* Background glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-[hsl(199_89%_60%/0.06)] blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-[hsl(160_84%_39%/0.04)] blur-[60px] md:blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-2 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-6 md:mb-8 px-3 md:px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs md:text-sm font-medium tracking-wide">
            DevOps & Automation Consultant
          </div>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-display font-extrabold mb-6 md:mb-8 leading-[1.15] tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        >
          כשמערכת עובדת,
          <br />
          אתם <span className="gradient-text">פנויים לצמוח.</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 md:mb-14 leading-relaxed px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          פתרונות אוטומציה מבוססי ענן, תשתיות Monday.com חכמות ואינטגרציות קוד
          (Python) שתופרות את כל הקצוות – מהליד הראשון ועד לשורת הרווח.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-glow px-8 md:px-12 py-3 md:py-4 text-base md:text-lg pulse-glow"
          >
            בואו נתכנן את השקט שלכם
          </button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;