import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const whyItems = [
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
    label: "מעבר ל-No-Code",
    title: "קוד ענן (Python/Azure)",
    description:
      "בעוד שרוב השוק מסתמך על פתרונות מדף מוגבלים, אני מתמחה בבניית אוטומציות ענן מותאמות אישית (Cloud-Native). פותר בעיות מורכבות ששום כלי גנרי לא יכול לפתור.",
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    label: "הטמעה אופרטיבית",
    title: "ניסיון מעשי בעסקים",
    description:
      "אני מביא איתי ניסיון מעשי בהטמעת תהליכי עבודה בעסקים חיים. אני יודע איך לגרום למערכת לשרת את האופרציה, ולא להפך.",
  },
  {
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    label: "ארכיטקטורה Monday.com",
    title: "תשתיות חכמות",
    description:
      "בניית בורדים חכמים, ניהול מלאי, מעקב אספקות וסנכרון מלא בין מחלקות על התשתית המוכרת.",
  },
];

const WhyUs = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="why" className="py-32 text-center relative section-glow-top">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-extrabold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          למה דווקא 'חיים אוטומציה'?
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-20 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          אני לא רק 'מחבר קוביות' – אני בונה ארכיטקטורה. אני מביא מעל 10 שנות
          ניסיון בחזית האוטומציה של הייטק הישראלי.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whyItems.map((item, i) => (
            <motion.div
              key={i}
              className="glass-card-hover p-10 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
            >
              <div className="text-accent mb-4 flex justify-center">{item.icon}</div>
              <span className="text-xs text-primary uppercase tracking-[0.15em] font-semibold">
                {item.label}
              </span>
              <h3 className="text-xl font-display font-bold mt-3 mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
