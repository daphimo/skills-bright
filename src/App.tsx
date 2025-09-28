import { brandColors } from "./components/Brandcolors";

export default function ColorButtonsGrid() {
  const colorKeys = Object.keys(brandColors); // array of strings

  // Explicitly type the buttons array
  const buttons: React.ReactNode[] = [];

  colorKeys.forEach((bgKey) => {
    colorKeys.forEach((textKey) => {
      if (bgKey !== textKey) {
        buttons.push(
          <button
            key={`${bgKey}-${textKey}`}
            style={{
              backgroundColor: brandColors[bgKey as keyof typeof brandColors],
              color: brandColors[textKey as keyof typeof brandColors],
              border: "1px solid #ccc",
              padding: "10px 20px",
              margin: "5px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            {`${textKey} on ${bgKey}`}
          </button>
        );
      }
    });
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        padding: "20px",
        backgroundColor: "#f0f0f0",
      }}
    >
      {buttons}
    </div>
  );
}
