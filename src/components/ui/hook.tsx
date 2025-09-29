import { useEffect } from "react";

export const useSmoothScroll = (offset: number = 70) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
  const anchor = (e.target as HTMLElement).closest("a");
  if (!anchor) return;

  const href = anchor.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  const section = document.querySelector<HTMLElement>(href);
  if (section) {
    e.preventDefault();
    const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
};


    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [offset]);
};
