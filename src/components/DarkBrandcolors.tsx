export const darkBrandColors = {
  primary: "#4BAEE8",          // Sky Blue Inspired (kept same for brand identity)
  text: "#F5F5F5",             // Near-White for readability
  secondary: "#8AB6E8",        // Softer Blue (contrast on dark bg)
  accent: "#FF7B73",           // Slightly brighter coral for visibility

  background: "#0F172A",       // Very Dark Blue/Gray background
  card: "#1E293B",             // Darker Card Surface
  highlight: "#334155",        // Subtle border/divider

  success: "#4ADE80",          // Bright Success Green
  warning: "#FBBF24",          // Warm Amber for warning
} as const;

export type DarkBrandColorKeys = keyof typeof darkBrandColors;
