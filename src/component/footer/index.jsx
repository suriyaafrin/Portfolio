import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-card border-gray-200 border-t border-border py-8 bg-[#C8102E]">
      <div className="container mx-auto max-w-290 px-8 flex flex-col sm:flex-row items-center justify-between gap-3.5 text-[13.5px] text-white">
        <span>© 2026 Suriya Afrin. All rights reserved.</span>
        <div className="flex items-center gap-3">
            <a
              href="https://github.com/suriyaafrin"
              aria-label="GitHub"
              target="_blank"
              rel="noopener"
              className="w-8 h-8 rounded-[9px] border border-border flex items-center justify-center text-heading hover:border-primary hover:text-primary transition-colors"
            >
              <FaGithub size={15} />
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener"
              className="w-8 h-8 rounded-[9px] border border-border flex items-center justify-center text-heading hover:border-primary hover:text-primary transition-colors"
            >
              <FaLinkedinIn size={14} />
            </a>
        </div>
      </div>
    </footer>
  );
}