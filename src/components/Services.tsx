import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    title: "אוטומציית ענן וקוד",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    items: ["פיתוח פתרונות Custom יציבים", "אבטחה מתקדמת לניהול מידע מורכב", "אינטגרציות API עמוקות"],
  },
  {
    title: "ארכיטקטורת Monday.com",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    items: ["בורדים חכמים לניהול פרויקטים", "ניהול מלאי ומעקב אספקות", "סנכרון מלא בין מחלקות"],
  },
  {
    title: "דפי נחיתה ממירים",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    items: ["עיצוב ובניית דפי נחיתה מקצועיים", "חיבור ישיר לאוטומציה", "מקסום המרות מפרסום"],
  },
  {
    title: "מעטפת תחזוקה כוללת",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    items: ["שירות SLA מקיף לכל פתרון", "ניטור תקלות יזום", "עדכוני API ואופטימיזציה שוטפת"],
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="services" className="py-32 relative section-glow-top">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-extrabold text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          סל השירותים
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="glass-card p-8 md:p-10 cursor-default group border border-transparent hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="text-primary group-hover:text-accent transition-colors duration-300">{service.icon}</div>
                <h3 className="text-xl font-display font-bold text-heading group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted-foreground">
                    <svg
                      className="w-4 h-4 text-accent mt-1 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 60px -15px hsl(199 89% 60% / 0.2), 0 25px 50px -20px hsl(222 47% 5% / 0.8)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
