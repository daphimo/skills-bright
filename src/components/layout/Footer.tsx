import type { FC } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-sm text-gray-600 text-center md:text-left">
          © {new Date().getFullYear()} Skills Bright HR Solutions. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-600 hover:text-[#E1306C] transition-colors duration-300"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-[#0A66C2] transition-colors duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Made in India Line */}
      <div className="bg-gray-50 py-3 text-center">
        <a
          href="https://codenirmata.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-700 hover:text-[#4BAEE8] transition-colors duration-300"
        >
          Made in India with ❤️ by Deepak Sharma
        </a>
      </div>
    </footer>
  );
};

export default Footer;
