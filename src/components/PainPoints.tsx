import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const painItems = [
  {
    title: '"חור שחור" של טעויות אנוש',
    description:
      'עבודה ידנית היא לא רק מעייפת. הודעה בוואטסאפ שלא נענתה, הזמנה שלא סונכרנה ב-CRM, או שעות של העתק-הדבק בין מערכות. אלו הרגעים שבהם העסק שלכם נעצר.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: 'כאוס תפעולי',
    description:
      'אני כאן כדי להפוך את הכאוס למכונה שפועלת מעצמה, 24/7. הכל מסונכרן, מתועד ועובד חלק.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

const PainPoints = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="pain" className="py-28 relative section-glow-top">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-extrabold text-center mb-16 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          הליד שנעלם בין המיילים עולה לכם{" "}
          <span className="text-destructive">יותר ממה שחשבתם.</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {painItems.map((item, i) => (
            <motion.div
              key={i}
              className="glass-card p-10 cursor-default group border border-transparent hover:border-primary/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="text-primary mb-5 group-hover:text-accent transition-colors duration-300">{item.icon}</div>
              <h3 className="text-xl font-display font-bold text-heading mb-4 group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 60px -15px hsl(199 89% 60% / 0.2), 0 25px 50px -20px hsl(222 47% 5% / 0.8)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
