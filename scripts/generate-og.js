const sharp = require("sharp");

const W = 1200;
const H = 630;

function textLayer(text, x, y, fontSize, color, font = "Georgia, serif") {
  return `<text x="${x}" y="${y}" font-family="${font}" font-size="${fontSize}" fill="${color}">${text}</text>`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#141414"/>
  <rect x="80" y="80" width="${W - 160}" height="${H - 160}" fill="none" stroke="#c8a96a" stroke-width="1" opacity="0.3"/>
  ${textLayer("Warren Moore", 100, 270, 76, "#c8a96a")}
  ${textLayer("Book Promotion Agency", 100, 360, 38, "#f0ebe3")}
  ${textLayer("Professional promotion for authors who believe their work deserves to be found.", 100, 440, 20, "#888888", "Inter, sans-serif")}
  <line x1="100" y1="490" x2="420" y2="490" stroke="#c8a96a" stroke-width="2"/>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile("public/og-image.png")
  .then(() => {
    console.log("OG image created: public/og-image.png");
  })
  .catch((err) => {
    console.error("Failed:", err);
    process.exit(1);
  });
