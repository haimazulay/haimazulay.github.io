import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} id="contact" className="py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[hsl(199_89%_60%/0.03)] blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-display font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          דברו איתי
        </motion.h2>

        <motion.div
          className="max-w-xl mx-auto glass-card p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-center text-muted-foreground mb-10 leading-relaxed">
            בואו נתכנן את השקט שלכם. שלחו פרטים ואחזור אליכם בהקדם.
          </p>
          <form
            action="https://formspree.io/f/xyknrjzd"
            method="POST"
            className="space-y-8"
            dir="rtl"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-3"
              >
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="input-premium"
                placeholder="הכניסו את שמכם"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-3"
              >
                טלפון
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="input-premium"
                placeholder="050-000-0000"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-3"
              >
                אימייל
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="input-premium"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="problem"
                className="block text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-3"
              >
                מה התהליך שהכי מעכב אתכם היום?
              </label>
              <textarea
                id="problem"
                name="problem"
                rows={4}
                className="input-premium resize-y"
                placeholder="ספרו לנו..."
              />
            </div>
            <button
              type="submit"
              className="btn-glow w-full py-4 text-lg font-bold tracking-wide pulse-glow mt-4"
            >
              אני רוצה שקט בניהול
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
