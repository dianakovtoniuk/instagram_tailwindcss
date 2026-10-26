const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const out = path.join(root, "public");

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, "dist"), { recursive: true });

fs.copyFileSync(path.join(root, "src", "index.html"), path.join(out, "index.html"));
fs.copyFileSync(
  path.join(root, "dist", "output.css"),
  path.join(out, "dist", "output.css")
);

console.log("Site built to public/");
