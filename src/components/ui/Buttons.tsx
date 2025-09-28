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

  // Define text color based on variant
  const textColor = isPrimary ? "#F7F9FC" : "#4BAEE8";

  return (
    <a
      href={link}
      aria-label={ariaLabel || label}
      className={`inline-flex items-center justify-center px-4 py-1 font-medium rounded-[6px] border-2
        ${isPrimary
          ? "bg-[#4BAEE8] border-[#4BAEE8]"
          : "bg-[#F7F9FC] border-[#4BAEE8]"
        }`}
    >
      {/* Button content */}
      <span
        className="flex items-center"
        style={{ color: textColor }}
      >
        {label }
       
      </span>
    </a>
  );
};

export default Button;