import { Reveal } from "../front-Sec/hero";
import { FaGraduationCap } from "react-icons/fa";

const CapGradIcon = ({ size = 24, color = "#C8102E", className = "" }) => {
  return <FaGraduationCap size={size} color={color} className={className} />;
};

export default function ResearchContent() {
  return (
    <section className="py-[120px] bg-card">
      <div className="container mx-auto max-w-[840px] px-8">
        <Reveal className="text-center max-w-[600px] mx-auto mb-[60px]">
          <span className="text-[#C8102E] inline-flex justify-center items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.08em] text-primary mb-4 before:content-[''] before:w-[18px] before:h-[2px] before:bg-primary before:rounded-full">
            Research
          </span>
          <h2 className="text-[34px] font-bold text-heading">Published work</h2>
        </Reveal>

        <Reveal className="relative overflow-hidden bg-white border border-border border-gray-200 rounded-3xl p-14 grid sm:grid-cols-[auto_1fr] gap-9 items-start">
          <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(200,16,46,0.07),transparent_70%)]" />
          <div className="relative w-[76px] h-[76px] rounded-[18px] bg-[#FDEEEF] flex items-center justify-center text-primary shrink-0">
            <CapGradIcon size={32} />
          </div>
          <div className="relative">
            <span className="inline-block text-[12px] font-bold tracking-[.05em] text-success text-[#0d8138] bg-[#bfeed1] px-3 py-1.5 rounded-full mb-3.5">
              Accepted · ICCIT 2025 · IEEE
            </span>
            <h3 className="text-[24px] mb-1.5 text-heading font-bold">
              Swin-APSNet: A Transformer-Based Framework for Multi-Class
              Alzheimer's Disease Classification Using MRI
            </h3>
            <div className="font-head text-[15px] font-semibold text-gray-500 text-body mb-4">
              Mahbub, N.H.B., Shuvro, T.B., Afrin, S.I., Haque, F., Helaly, T. (2025)
            </div>
            <p className="text-[15px] text-gray-600 mb-5 max-w-[560px]">
              Published in the Proceedings of the International Conference on
              Computer and Information Technology (ICCIT 2025), IEEE. Proposes
              a Swin Transformer-based framework for classifying Alzheimer's
              disease severity across multiple stages from MRI scans.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Python", "PyTorch", "Vision Transformers", "Medical Imaging"].map(
                (t) => (
                  <span
                    key={t}
                    className="text-[12px] text-gray-500 bg-gray-100 font-medium bg-sectionAlt text-body px-3 py-1.5 rounded-[7px]"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
            <p className="text-[13.5px] text-body mb-4">
              DOI:{" "}
              <a
                href="https://doi.org/10.1109/ICCIT68739.2025.11491601"
                target="_blank"
                rel="noopener"
                className="text-primary font-medium hover:text-primary-hover underline hover:text-red-500"
              >
                10.1109/ICCIT68739.2025.11491601
              </a>
            </p>
            <a
              href="https://doi.org/10.1109/ICCIT68739.2025.11491601"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-[14px] font-semibold px-[18px] py-2.5 rounded-[10px] bg-primary text-white hover:bg-primary-hover transition-colors"
            >
              View Paper (DOI) →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}