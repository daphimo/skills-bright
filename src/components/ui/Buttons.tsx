import type { FC } from "react";

interface ButtonProps {
  label: string;
  link: string;
  ariaLabel?: string;
  variant?: "primary" | "secondary";
}

const Button: FC<ButtonProps> = ({
  label,
  link,
  ariaLabel,
  variant = "primary",
}) => {
  const isPrimary = variant === "primary";

  return (
    <a
      href={link}
      aria-label={ariaLabel || label}
      className={`inline-flex relative items-center justify-center px-4 py-1 font-medium rounded-[6px] border-2
        ${
          isPrimary
            ? "bg-[#1c3f74] border-[#1c3f74] text-white"
            : "bg-white border-[#1c3f74] text-[#1c3f74]"
        }`}
    >
      <span className="flex items-center">{label}</span>
    </a>
  );
};

export default Button;
