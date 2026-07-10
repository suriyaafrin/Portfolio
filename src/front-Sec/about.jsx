import { useEffect, useRef, useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaFileAlt,
  FaBullseye,
  FaDownload,
} from "react-icons/fa";

const FACTS = [
  {
    icon: FaGraduationCap,
    label: "Education",
    value: "B.Sc. in CSE",
  },
  {
    icon: FaBriefcase,
    label: "Experience",
    value: "React Frontend Dev",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Dhaka, Bangladesh",
  },
  {
    icon: FaFileAlt,
    label: "Research",
    value: "ICCIT 2025 Author",
  },
];

// Small local hook so this section fades/slides in the first time it
// scrolls into view — mirrors the .reveal / .reveal.in behavior from
// the static markup, without needing a global store for it.
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function About() {
  const [photoRef, photoVisible] = useReveal();
  const [contentRef, contentVisible] = useReveal();

  return (
    <section id="about" className="bg-[#F4F4F5] py-20 md:py-[120px]">
      <div className="mx-auto max-w-290 px-8">
        <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-[72px]">
          {/* Photo */}
          <div
            ref={photoRef}
            className={`aspect-[1/1.05] w-full rounded-3xl border border-[#E4E4E7] bg-gradient-to-br from-white to-[#F4F4F5] flex items-center justify-center font-['Space_Grotesk',sans-serif] text-6xl font-bold text-[#C8102E] transition-all duration-700 ease-out ${
              photoVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            SA
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className={`transition-all duration-700 ease-out ${
              contentVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <span className="mb-4 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#C8102E]">
              <span className="h-0.5 w-4.5 rounded-sm bg-[#C8102E]" />
              About Me
            </span>

            <h2 className="mb-4.5 font-['Space_Grotesk',sans-serif] text-[34px] font-bold leading-[1.15] tracking-[-0.02em] text-[#18181B]">
              Hello!
            </h2>

            <p className="mb-4 max-w-[520px] text-base text-[#52525B]">
              I'm Suriya Afrin, a frontend developer who enjoys building
              websites that are both functional and enjoyable to use.
            </p>
            <p className="mb-4 max-w-[520px] text-base text-[#52525B]">
              I primarily work with React, JavaScript, and Tailwind CSS to
              create responsive interfaces with reusable components and clean
              architecture. I like paying attention to the small details —
              smooth interactions, consistent design, and code that's easy to
              maintain.
            </p>
            <p className="mb-4 max-w-[520px] text-base text-[#52525B]">
              Outside of frontend development, I enjoy exploring artificial
              intelligence, which led me to contribute to research accepted at
              ICCIT 2025. I'm always excited to take on new challenges and keep
              growing as a developer.
            </p>

            {/* Download CV button */}
            <a
              href="/resume.pdf"
              download="Suriya-Afrin-Resume.pdf"
              className="mb-8 inline-flex items-center gap-2 rounded-xl bg-[#C8102E] px-6 py-3 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#a80d26]"
            >
              <FaDownload size={14} />
              Download CV
            </a>

            {/* Facts grid */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-5">
              {FACTS.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[#FDEEEF] text-[#C8102E]">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-[12.5px] uppercase tracking-[0.06em] text-[#8b8b93]">
                      {label}
                    </div>
                    <div className="mt-0.5 text-[14.5px] font-semibold text-[#18181B]">
                      {value}
                    </div>
                  </div>
                </div>
              ))}

              {/* Focus — spans both columns like the static markup */}
              <div className="flex items-start gap-3 sm:col-span-2">
                <div className="flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[#FDEEEF] text-[#C8102E]">
                  <FaBullseye size={16} />
                </div>
                <div>
                  <div className="text-[12.5px] uppercase tracking-[0.06em] text-[#8b8b93]">
                    Focus
                  </div>
                  <div className="mt-0.5 text-[14.5px] font-semibold text-[#18181B]">
                    Building Modern Web Applications
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}