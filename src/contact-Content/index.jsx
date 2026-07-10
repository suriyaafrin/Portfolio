import { Reveal } from "../front-Sec/hero";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const EmailIcon = ({ size = 24, color = "#C8102E", className = "" }) => {
  return <FaEnvelope size={size} color={color} className={className} />;
};

const GitHubIcon = ({ size = 24, color = "#C8102E", className = "" }) => {
  return <FaGithub size={size} color={color} className={className} />;
};

const LinkedInIcon = ({ size = 24, color = "#C8102E", className = "" }) => {
  return <FaLinkedin size={size} color={color} className={className} />;
};

const PhoneIcon = ({ size = 24, color = "#C8102E", className = "" }) => {
  return <FaPhoneAlt size={size} color={color} className={className} />;
};

const rows = [
  {
    icon: <EmailIcon />,
    label: "Email",
    value: "suriyaislamafrin@gmail.com",
    href: "mailto:suriyaislamafrin@gmail.com",
  },
  {
    icon: <PhoneIcon size={16} />,
    label: "Phone",
    value: "+880 1572-043140",
    href: "tel:+8801572043140",
  },
  {
    icon: <GitHubIcon size={16} />,
    label: "GitHub",
    value: "github.com/suriyaafrin",
    href: "https://github.com/suriyaafrin",
  },
  {
    icon: <LinkedInIcon />,
    label: "LinkedIn",
    value: "linkedin.com/in/suriya-islam-afrin",
    href: "https://www.linkedin.com/in/suriya-islam-afrin-6376a6253",
  },
];

export default function ContactContent() {
  return (
    <section id="contact" className="py-[120px] bg-sectionAlt">
      <div className="container mx-auto max-w-[1160px] px-8">
        <Reveal className="max-w-[600px] mx-auto bg-white border border-gray-200 rounded-3xl p-14 text-center shadow-[0_30px_60px_-30px_rgba(24,24,27,0.14)]">
          <h2 className="text-[30px] mb-3 text-heading font-bold">
            Let's Work Together
          </h2>
          <p className="text-[15.5px] mb-9 text-gray-600">
            Have a project in mind or just want to say hi? My inbox is open.
          </p>

          <div className="flex flex-col gap-3 mb-8 text-left">
            {rows.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target={r.href.startsWith("http") ? "_blank" : undefined}
                rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3.5 px-[18px] py-3.5 border border-gray-300 rounded-2xl hover:border-primary hover:bg-[#FDEEEF] hover:translate-x-1 transition-all"
              >
                <div className="w-[38px] h-[38px] rounded-[10px] bg-sectionAlt text-primary flex items-center justify-center shrink-0">
                  {r.icon}
                </div>
                <div>
                  <div className="text-[12px] text-[#8b8b93]">{r.label}</div>
                  <div className="text-[14.5px] font-semibold text-heading">
                    {r.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-[26px] py-[13px] rounded-xl bg-white text-heading border border-border hover:bg-[#FDEEEF] hover:border-primary hover:text-primary-hover hover:-translate-y-0.5 hover:scale-[1.02] transition-all"
              >
                Resume
              </a>
              <a
                href="mailto:suriyaislamafrin@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-[#C8102E] font-semibold text-[15px] px-[26px] py-[13px] rounded-xl bg-primary text-white shadow-primaryGlow hover:bg-primary-hover hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-primaryGlowHover transition-all"
              >
                Send Message
              </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}