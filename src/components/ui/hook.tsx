import { useEffect } from "react";

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName !== "A") return;

      const anchor = target as HTMLAnchorElement;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const section = document.querySelector(href);
      if (section) {
        e.preventDefault();
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
};
