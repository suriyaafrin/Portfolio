import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const stats = [
  { target: 4, label: "Projects Shipped" },
  { target: 9, label: "Technologies" },
  { target: 1, label: "Published Paper" },
];

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  startVisible = false,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(startVisible);

  useEffect(() => {
    if (startVisible) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startVisible]);

  return (
    <Tag ref={ref} className={`reveal ${visible ? "in" : ""} ${className}`}>
      {children}
    </Tag>
  );
}

function Counter({ target }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !done) {
            const step = Math.max(1, Math.round(target / 30));
            let cur = 0;
            const tick = () => {
              cur += step;
              if (cur >= target) {
                setValue(target);
                setDone(true);
                return;
              }
              setValue(cur);
              requestAnimationFrame(tick);
            };
            tick();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, done]);

  return (
    <div ref={ref} className="font-head text-[30px] font-bold text-heading">
      {value}
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <section className="pt-47.5 pb-30 bg-sectionAlt overflow-hidden">
        <div className="container mx-auto max-w-290 px-8 grid md:grid-cols-[1.05fr_0.85fr] gap-16 items-center">
          <Reveal startVisible>
            <span className="inline-flex items-center gap-2 text-[#C8102E] text-[13px] font-semibold uppercase tracking-[0.08em] text-primary mb-4 before:content-[''] before:w-4.5 before:h-0.5 before:bg-primary before:rounded-full">
              Available for opportunities
            </span>
            <span className="font-head text-[22px] font-semibold text-heading block mb-1">
              Hi, I'm
            </span>
            <h1 className="text-[56px] leading-[1.15] mb-1 text-heading">
              Suriya <span className="text-primary text-[#C8102E]">Afrin</span>
            </h1>
            <span className="font-head text-[22px] font-semibold text-heading block mt-1 mb-6">
              React Frontend Developer
            </span>
            <p className="text-[17px] max-w-115 mb-9 text-body">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-6.5 py-3.25 rounded-xl bg-primary text-white bg-[#C8102E] shadow-primaryGlow hover:bg-primary-hover hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-primaryGlowHover transition-all mr-4"
              >
                View Projects
              </Link>

              <a
                href="/resume.pdf"
                download="Suriya-Afrin-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-6.5 py-3.25 rounded-xl bg-white text-heading border border-border hover:bg-[#FDEEEF] hover:border-primary hover:text-primary-hover hover:-translate-y-0.5 hover:scale-[1.02] transition-all"
              >
                Download CV
              </a>
            </p>
            <div className="flex gap-11 flex-wrap">
              {stats.map((s) => (
                <div key={s.label}>
                  <Counter target={s.target} />
                  <div className="text-[13px] text-body mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal
           
            className="order-first md:order-last flex items-center justify-center relative"
          >
            <div className="absolute w-95 h-95 rounded-full bg-[radial-gradient(circle,rgba(200,16,46,0.28)_0%,rgba(200,16,46,0.08)_45%,rgba(200,16,46,0)_70%)] blur-[10px]" />
            <div className="relative z-10 w-85 h-85 rounded-4xl bg-linear-to-br from-sectionAlt text-[#C8102E] to-white border border-border flex items-center justify-center font-head text-[88px] font-bold text-primary shadow-card">
              SA
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
