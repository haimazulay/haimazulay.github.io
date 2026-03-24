import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const techs = [
  {
    name: "Monday.com",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none">
        <circle cx="10" cy="46" r="6" fill="#FF3D57" />
        <circle cx="32" cy="46" r="6" fill="#00CA72" />
        <circle cx="54" cy="46" r="6" fill="#FDAB3D" />
        <rect x="7" y="18" width="6" height="24" rx="3" fill="#FF3D57" transform="rotate(-15 10 30)" />
        <rect x="29" y="14" width="6" height="28" rx="3" fill="#00CA72" transform="rotate(-5 32 28)" />
        <rect x="51" y="18" width="6" height="24" rx="3" fill="#FDAB3D" transform="rotate(10 54 30)" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 256 255" fill="none">
        <defs>
          <linearGradient id="pyBlue" x1="12.96%" y1="12.04%" x2="79.64%" y2="78.01%">
            <stop offset="0%" stopColor="#387EB8" />
            <stop offset="100%" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="pyYellow" x1="19.13%" y1="20.58%" x2="90.43%" y2="88.01%">
            <stop offset="0%" stopColor="#FFE052" />
            <stop offset="100%" stopColor="#FFC331" />
          </linearGradient>
        </defs>
        <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#pyBlue)" />
        <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.519 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#pyYellow)" />
      </svg>
    ),
  },
  {
    name: "Azure",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 96 96" fill="none">
        <defs>
          <linearGradient id="azureGrad" x1="58.97%" y1="7.41%" x2="37.19%" y2="103.56%">
            <stop offset="0%" stopColor="#114A8B" />
            <stop offset="100%" stopColor="#0669BC" />
          </linearGradient>
        </defs>
        <path d="M33.338 6.544h26.038l-27.03 80.087a4.152 4.152 0 0 1-3.933 2.824H8.149a4.145 4.145 0 0 1-3.928-5.47L29.404 9.368a4.152 4.152 0 0 1 3.934-2.825z" fill="url(#azureGrad)" />
        <path d="M71.175 60.261H41.616a1.911 1.911 0 0 0-1.305 3.309l26.532 24.764a4.171 4.171 0 0 0 2.846 1.121h23.586L71.175 60.261z" fill="#0078D4" />
        <path d="M33.338 6.544a4.118 4.118 0 0 0-3.943 2.879L4.252 83.917a4.14 4.14 0 0 0 3.908 5.538h20.787a4.443 4.443 0 0 0 3.41-2.9l5.014-14.777 17.91 16.705a4.237 4.237 0 0 0 2.666.972h23.472L62.05 60.261l-29.6-.046L59.45 6.544H33.338z" fill="hsl(var(--foreground)/0.15)" />
        <path d="M66.595 9.364a4.145 4.145 0 0 0-3.928-2.82H33.648a4.146 4.146 0 0 1 3.928 2.82l25.184 74.62a4.146 4.146 0 0 1-3.928 5.472h29.02a4.146 4.146 0 0 0 3.927-5.472L66.595 9.364z" fill="#1490DF" />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 256 153" fill="none">
        <path d="M72.392 55.438c0 3.137.34 5.68.933 7.545a45.373 45.373 0 0 0 2.712 6.103c.424.678.593 1.356.593 1.95 0 .848-.509 1.695-1.61 2.543l-5.34 3.56c-.763.508-1.526.763-2.205.763-.848 0-1.695-.424-2.543-1.187a26.224 26.224 0 0 1-3.052-3.984c-.848-1.44-1.695-3.052-2.627-4.917-6.612 7.798-14.92 11.698-24.922 11.698-7.12 0-12.8-2.035-16.954-6.103-4.153-4.07-6.272-9.495-6.272-16.276 0-7.205 2.543-13.054 7.714-17.462 5.17-4.407 12.037-6.612 20.768-6.612 2.882 0 5.849.254 8.985.678 3.137.424 6.358 1.102 9.749 1.78V29.93c0-6.441-1.356-10.934-3.984-13.562-2.712-2.627-7.29-3.9-13.817-3.9-2.966 0-6.018.34-9.155 1.102a67.573 67.573 0 0 0-9.155 2.882 24.502 24.502 0 0 1-2.966 1.102c-.593.17-1.017.254-1.356.254-1.187 0-1.78-.848-1.78-2.627v-4.153c0-1.356.17-2.373.593-2.966.424-.593 1.187-1.187 2.373-1.78 2.967-1.526 6.527-2.797 10.68-3.815C33.908.932 38.315.424 42.977.424c10.002 0 17.293 2.289 21.955 6.781 4.577 4.493 6.95 11.275 6.95 20.345v26.787l.51 1.102z" fill="#252F3E" />
        <path d="M141.1 77.737c-18.224 13.478-44.672 20.684-67.459 20.684-31.94 0-60.692-11.782-82.445-31.38-1.695-1.525-.17-3.645 1.864-2.458 23.484 13.647 52.49 21.87 82.444 21.87 20.175 0 42.384-4.238 62.898-12.885 3.052-1.356 5.68 1.95 2.712 4.153l-.013.017z" fill="#FF9900" />
        <path d="M148.086 69.77c-2.289-2.966-15.258-1.44-21.107-.678-1.78.17-2.035-1.356-.424-2.458 10.34-7.29 27.296-5.17 29.254-2.712 1.95 2.543-.509 19.921-10.256 28.227-1.44 1.271-2.882.593-2.204-1.017 2.12-5.34 6.95-17.293 4.747-21.362h-.01z" fill="#FF9900" />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 256 185" fill="none">
        <path d="M250.716 70.497c-5.446-3.734-17.961-5.092-27.618-3.226-1.257-9.26-6.4-17.345-15.694-24.583l-5.344-3.58-3.734 5.242c-4.747 7.017-7.565 16.786-6.714 26.443.306 3.48 1.41 9.717 5.293 15.215-3.734 2.07-11.045 4.9-20.703 4.9H.483l-.483 2.07c-1.768 10.478-1.768 43.175 24.684 68.267C43.887 180.463 67.812 190.987 100 190.987c70.94 0 123.476-32.544 148.057-91.72 9.666.203 30.47.103 41.15-20.295l2.07-4.238-5.343-3.58-.218-.657zM140.244 0h-23.98v21.608h23.98V0zm0 25.445h-23.98v21.608h23.98V25.445zM112.264 25.445H88.284v21.608h23.98V25.445zM84.284 25.445H60.304v21.608h23.98V25.445zm-28 25.445H32.304v21.608h23.98V50.89zm28 0H60.304v21.608h23.98V50.89zm28 0H88.284v21.608h23.98V50.89zm28 0h-23.98v21.608h23.98V50.89zm28 0h-23.98v21.608h23.98V50.89z" fill="#2496ED" />
      </svg>
    ),
  },
  {
    name: "API Integration",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="8" cy="6" r="2" fill="hsl(var(--primary))" stroke="none" />
        <circle cx="16" cy="12" r="2" fill="hsl(var(--primary))" stroke="none" />
        <circle cx="12" cy="18" r="2" fill="hsl(var(--primary))" stroke="none" />
      </svg>
    ),
  },
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
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-all duration-500 cursor-default"
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 0.5, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ opacity: 1, scale: 1.12, y: -4 }}
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl glass-card p-2">
                {tech.icon}
              </div>
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
