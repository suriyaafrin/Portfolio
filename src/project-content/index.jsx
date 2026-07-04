
import { FaWhatsapp, FaCloudSun } from "react-icons/fa";
import { Reveal } from "../front-Sec/hero";

const featured = [
  {
    name: "CineVault",
    tag: "Movie Discovery Platform",
    desc: "Netflix-inspired interface with watchlist, live search, trailers and TMDb-powered discovery across trending, top-rated and genre-based collections.",
    tech: ["React", "Tailwind", "Zustand", "TMDb API"],
    demo: "https://cine-vault-red.vercel.app",
    gradient: "from-heading to-[#3f1420]",
  },
  {
    name: "Hater-Kaz",
    tag: "Home Services Marketplace",
    desc: "A slug-routed marketplace for booking home service technicians, with filterable results, reviews, and a full booking flow.",
    tech: ["React", "Tailwind", "Zustand", "React Router"],
    demo: "https://hater-kaz.vercel.app",
    gradient: "from-[#1E3A5F] to-[#3a1a2a]",
  },
];

const minis = [
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp UI Clone",
    desc: "A pixel-accurate recreation of the WhatsApp Web interface, focused on layout precision and component structure.",
  },
  {
    icon: <FaCloudSun />,
    title: "Weather Update App",
    desc: "A responsive weather app pulling live conditions and forecasts through a public weather API.",
  },
];

export default function Projects() {
  return (
    <>
      <section id="projects" className="py-[120px] bg-sectionAlt">
        <div className="container mx-auto max-w-[1160px] px-8">
          <Reveal className="text-center max-w-[600px] mx-auto mb-[60px]">
            <span className="text-[#C8102E] inline-flex justify-center items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-primary mb-4 before:content-[''] before:w-[18px] before:h-[2px] before:bg-primary before:rounded-full">
              Featured Projects
            </span>
            <h2 className="text-[34px] font-bold text-heading ">Things I've built</h2>
            <p className="text-[16px] mt-3.5 text-gray-600">
              Real, deployed products — from a movie discovery platform to a
              home services marketplace.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((p) => (
              <Reveal
                key={p.name}
                className="bg-white border border-border border-gray-200 rounded-[20px] overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-cardHover hover:border-[#F1D3D8] transition-all duration-300"
              >
                <div
                  className={`aspect-[16/10] bg-gradient-to-br ${p.gradient} flex items-center justify-center`}
                >
                  <span className="font-head font-bold text-[26px] text-white/90 tracking-wide">
                    {p.name}
                  </span>
                </div>
                <div className="p-7 pb-[30px] flex flex-col flex-1">
                  <span className="text-[12px] font-semibold text-primary uppercase tracking-[.06em] mb-2">
                    {p.tag}
                  </span>
                  <h3 className="text-[22px] mb-2.5 text-heading">{p.name}</h3>
                  <p className="text-[14.5px] text-body mb-[18px] flex-1">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-[22px]">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[12px] font-medium bg-sectionAlt text-body px-3 py-1.5 rounded-[7px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener"
                      className="text-[14px] font-semibold px-[18px] py-2.5 rounded-[10px] bg-primary text-white hover:bg-primary-hover transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/suriyaafrin"
                      target="_blank"
                      rel="noopener"
                      className="text-[14px] font-semibold px-[18px] py-2.5 rounded-[10px] border border-border text-heading hover:bg-sectionAlt transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {minis.map((m) => (
              <Reveal
                key={m.title}
                className="bg-white border border-border rounded-2xl p-[26px] flex gap-4 items-start hover:-translate-y-1 hover:shadow-[0_16px_32px_-14px_rgba(24,24,27,0.14)] hover:border-[#F1D3D8] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-[11px] bg-sectionAlt flex items-center justify-center text-primary shrink-0 text-[18px]">
                  {m.icon}
                </div>
                <div>
                  <h4 className="text-[16.5px] mb-1 text-heading">{m.title}</h4>
                  <p className="text-[13.5px]">{m.desc}</p>
                  <div className="flex gap-3 mt-2.5">
                    <a
                      href="https://github.com/suriyaafrin"
                      target="_blank"
                      rel="noopener"
                      className="text-[13px] font-semibold text-primary hover:text-primary-hover"
                    >
                      GitHub →
                    </a>
                  </div>
                </div>
              
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}