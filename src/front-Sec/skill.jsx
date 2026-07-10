import { Reveal } from "./hero";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Vite",
  "Zustand",
  "Git",
  "REST API",
  "Python",
  "Django",
];

export default function Skills() {
  return (
    <section className="py-[120px] bg-card">
      <div className="container mx-auto max-w-[1160px] px-8">
        <Reveal className="text-center max-w-[600px] mx-auto mb-[60px]">
          <span className="mb-4 inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#C8102E]">
            <span className="h-0.5 w-4.5 rounded-sm bg-[#C8102E]" />
            Skills
          </span>
          <h2 className="text-[34px] text-heading font-bold">Tools I work with</h2>
          <p className="text-gray-600 font-semibold text-[16px] mt-3.5">
            A frontend-first toolkit, backed by enough backend and ML
            familiarity to work across the stack.
          </p>
        </Reveal>

        <Reveal className="flex flex-wrap gap-3.5 justify-center max-w-[760px] mx-auto">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-white border border-border border-gray-200 text-heading font-medium text-gray-600 text-[14.5px] px-[22px] py-[11px] rounded-full shadow-sm hover:border-primary hover:text-primary-hover hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(200,16,46,0.35)] transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
