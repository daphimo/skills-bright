export const brandColors = {
  primary: "#4BAEE8",          // Sky Blue Inspired
  text: "#1A1A1A",             // Near-Black
  secondary: "#1C3F74",        // Deep Blue
  accent: "#F25C54",           // Warm Coral (CTA, Buttons)

  background: "#F7F9FC",       // Light Background
  card: "#E1E6EB",             // Card / Section Gray
  highlight: "#C9D6E3",        // Neutral Border/Divider

  success: "#3BA776",          // Success Green
  warning: "#E9A13B",          // Warning Amber
} as const;

export type BrandColorKeys = keyof typeof brandColors;
