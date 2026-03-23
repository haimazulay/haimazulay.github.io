import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const techs = [
  { name: "Monday.com", icon: "📋" },
  { name: "Python", icon: "🐍" },
  { name: "Azure", icon: "☁️" },
  { name: "AWS", icon: "⚡" },
  { name: "Docker", icon: "🐳" },
  { name: "API", icon: "🔗" },
];

const TrustLogos = () => {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section ref={ref} className="py-20 relative section-glow-top">
      <div className="container mx-auto px-6">
        <motion.p
          className="text-center text-sm text-muted-foreground uppercase tracking-[0.2em] mb-12 font-medium"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experienced With
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center gap-2 opacity-40 hover:opacity-80 transition-opacity duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 0.4, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ opacity: 0.9, scale: 1.05 }}
            >
              <span className="text-3xl grayscale">{tech.icon}</span>
              <span className="text-xs text-muted-foreground font-medium tracking-wider">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;
