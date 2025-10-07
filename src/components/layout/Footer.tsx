import { brandColors } from "../Brandcolors.tsx";
import type { FC } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-gray-600 text-center md:text-left">
          © {new Date().getFullYear()} Skills Bright HR Solutions. All rights
          reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/skillbrighthr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={22} style={{ color: brandColors.secondary }} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61581639960890"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={22} style={{ color: brandColors.secondary }} />
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
