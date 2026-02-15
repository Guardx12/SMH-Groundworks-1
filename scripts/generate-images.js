// This script runs before `next build` to ensure all images exist in public/images/.
// It generates real PNG/JPEG files programmatically using Node.js built-in modules.
// No external dependencies required.

const fs = require("fs");
const path = require("path");
const zlib = require("zlib");

// Resolve from cwd (project root) since __dirname may differ in sandbox vs Vercel
const IMAGES_DIR = path.resolve(process.cwd(), "public", "images");

// All required images referenced in the codebase
const requiredImages = [
  // Logo
  { name: "logo.png", type: "png", label: "SMH", w: 400, h: 400, bg: [30, 30, 30], fg: [200, 170, 100] },
  // Gallery / shared
  { name: "excavation-site.jpg", label: "Excavation Site", bg: [90, 75, 55], fg: [220, 200, 170] },
  { name: "new-build-foundations.jpg", label: "Foundations", bg: [100, 95, 85], fg: [220, 210, 190] },
  { name: "concrete-foundations.jpg", label: "Concrete Foundations", bg: [110, 105, 95], fg: [230, 220, 200] },
  { name: "beam-block-floor.jpg", label: "Beam & Block Floor", bg: [95, 90, 80], fg: [220, 210, 190] },
  { name: "curved-patio.jpg", label: "Curved Patio", bg: [130, 120, 100], fg: [240, 230, 210] },
  { name: "circle-patio.jpg", label: "Circle Patio", bg: [125, 115, 95], fg: [240, 230, 210] },
  { name: "drainage-trench.jpg", label: "Drainage Trench", bg: [80, 70, 55], fg: [210, 195, 170] },
  { name: "patio-paving.jpg", label: "Patio Paving", bg: [135, 125, 105], fg: [240, 230, 210] },
  { name: "site-clearance.jpg", label: "Site Clearance", bg: [85, 80, 60], fg: [215, 200, 175] },
  { name: "floor-structure.jpg", label: "Floor Structure", bg: [100, 95, 85], fg: [225, 215, 195] },
  { name: "building-extension.jpg", label: "Building Extension", bg: [105, 95, 80], fg: [225, 215, 195] },
  { name: "stone-paving-area.jpg", label: "Stone Paving", bg: [140, 130, 110], fg: [245, 235, 215] },
  { name: "excavation-groundworks.jpg", label: "Excavation Groundworks", bg: [85, 75, 55], fg: [215, 200, 170] },
  { name: "stone-pathway.jpg", label: "Stone Pathway", bg: [130, 125, 110], fg: [240, 235, 215] },
  { name: "gravel-base.jpg", label: "Gravel Base", bg: [120, 115, 105], fg: [235, 225, 210] },
  // Service images
  { name: "service-excavation.jpg", label: "Excavation Services", bg: [80, 70, 50], fg: [210, 195, 165] },
  { name: "service-dropped-kerb.jpg", label: "Dropped Kerbs", bg: [110, 105, 95], fg: [230, 220, 200] },
  { name: "service-driveway.jpg", label: "Driveways", bg: [115, 110, 95], fg: [230, 220, 200] },
  { name: "service-landscaping.jpg", label: "Landscaping", bg: [70, 100, 60], fg: [200, 230, 190] },
  { name: "service-fencing.jpg", label: "Fencing", bg: [100, 80, 55], fg: [225, 205, 175] },
  { name: "service-digger-hire.jpg", label: "Digger Hire", bg: [130, 110, 40], fg: [245, 235, 180] },
  { name: "service-extensions.jpg", label: "Extensions", bg: [105, 95, 80], fg: [225, 215, 195] },
  { name: "service-maintenance.jpg", label: "Maintenance", bg: [95, 90, 80], fg: [220, 210, 195] },
];

// Create a minimal valid JPEG file (a solid color block)
// JPEG structure: SOI + APP0 + DQT + SOF0 + DHT + SOS + scan data + EOI
function createJpeg(width, height, r, g, b) {
  // Use a 8x8 block approach - create smallest valid JPEG
  const w = Math.max(8, Math.min(width, 800));
  const h = Math.max(8, Math.min(height, 600));

  // For simplicity, create a raw uncompressed JPEG using a minimal encoder
  // Instead, let's create a BMP and use that - but JPEG is required...
  // Simplest approach: create a valid minimal JPEG with solid color

  // Minimal JPEG with solid color - hand-crafted
  const buf = Buffer.alloc(624);
  let off = 0;

  // SOI
  buf[off++] = 0xFF; buf[off++] = 0xD8;
  // APP0 JFIF
  buf[off++] = 0xFF; buf[off++] = 0xE0;
  buf[off++] = 0x00; buf[off++] = 0x10;
  buf.write("JFIF", off, "ascii"); off += 4;
  buf[off++] = 0x00; // null
  buf[off++] = 0x01; buf[off++] = 0x01; // version
  buf[off++] = 0x00; // units
  buf[off++] = 0x00; buf[off++] = 0x01; // Xdensity
  buf[off++] = 0x00; buf[off++] = 0x01; // Ydensity
  buf[off++] = 0x00; buf[off++] = 0x00; // thumbnail

  // DQT (quantization table)
  buf[off++] = 0xFF; buf[off++] = 0xDB;
  buf[off++] = 0x00; buf[off++] = 0x43; // length
  buf[off++] = 0x00; // table 0, 8-bit
  for (let i = 0; i < 64; i++) buf[off++] = 0x01;

  // SOF0 (start of frame) - 8x8 image, 1 component (grayscale)
  buf[off++] = 0xFF; buf[off++] = 0xC0;
  buf[off++] = 0x00; buf[off++] = 0x0B; // length
  buf[off++] = 0x08; // precision
  buf[off++] = 0x00; buf[off++] = 0x08; // height = 8
  buf[off++] = 0x00; buf[off++] = 0x08; // width = 8
  buf[off++] = 0x01; // 1 component
  buf[off++] = 0x01; // component ID
  buf[off++] = 0x11; // sampling
  buf[off++] = 0x00; // quant table 0

  // DHT (Huffman table) - DC table
  buf[off++] = 0xFF; buf[off++] = 0xC4;
  buf[off++] = 0x00; buf[off++] = 0x1F; // length
  buf[off++] = 0x00; // DC table 0
  // bits (16 bytes)
  buf[off++] = 0x00; buf[off++] = 0x01; buf[off++] = 0x05;
  buf[off++] = 0x01; buf[off++] = 0x01; buf[off++] = 0x01;
  buf[off++] = 0x01; buf[off++] = 0x01; buf[off++] = 0x01;
  buf[off++] = 0x00; buf[off++] = 0x00; buf[off++] = 0x00;
  buf[off++] = 0x00; buf[off++] = 0x00; buf[off++] = 0x00;
  buf[off++] = 0x00;
  // values
  buf[off++] = 0x00; buf[off++] = 0x01; buf[off++] = 0x02;
  buf[off++] = 0x03; buf[off++] = 0x04; buf[off++] = 0x05;
  buf[off++] = 0x06; buf[off++] = 0x07; buf[off++] = 0x08;
  buf[off++] = 0x09; buf[off++] = 0x0A; buf[off++] = 0x0B;

  // DHT (Huffman table) - AC table
  buf[off++] = 0xFF; buf[off++] = 0xC4;
  buf[off++] = 0x00; buf[off++] = 0xB5; // length
  buf[off++] = 0x10; // AC table 0
  // bits
  buf[off++] = 0x00; buf[off++] = 0x02; buf[off++] = 0x01;
  buf[off++] = 0x03; buf[off++] = 0x03; buf[off++] = 0x02;
  buf[off++] = 0x04; buf[off++] = 0x03; buf[off++] = 0x05;
  buf[off++] = 0x05; buf[off++] = 0x04; buf[off++] = 0x04;
  buf[off++] = 0x00; buf[off++] = 0x00; buf[off++] = 0x01;
  buf[off++] = 0x7D;
  // values (162 bytes)
  const acValues = [
    0x01,0x02,0x03,0x00,0x04,0x11,0x05,0x12,0x21,0x31,0x41,0x06,0x13,0x51,0x61,
    0x07,0x22,0x71,0x14,0x32,0x81,0x91,0xA1,0x08,0x23,0x42,0xB1,0xC1,0x15,0x52,
    0xD1,0xF0,0x24,0x33,0x62,0x72,0x82,0x09,0x0A,0x16,0x17,0x18,0x19,0x1A,0x25,
    0x26,0x27,0x28,0x29,0x2A,0x34,0x35,0x36,0x37,0x38,0x39,0x3A,0x43,0x44,0x45,
    0x46,0x47,0x48,0x49,0x4A,0x53,0x54,0x55,0x56,0x57,0x58,0x59,0x5A,0x63,0x64,
    0x65,0x66,0x67,0x68,0x69,0x6A,0x73,0x74,0x75,0x76,0x77,0x78,0x79,0x7A,0x83,
    0x84,0x85,0x86,0x87,0x88,0x89,0x8A,0x92,0x93,0x94,0x95,0x96,0x97,0x98,0x99,
    0x9A,0xA2,0xA3,0xA4,0xA5,0xA6,0xA7,0xA8,0xA9,0xAA,0xB2,0xB3,0xB4,0xB5,0xB6,
    0xB7,0xB8,0xB9,0xBA,0xC2,0xC3,0xC4,0xC5,0xC6,0xC7,0xC8,0xC9,0xCA,0xD2,0xD3,
    0xD4,0xD5,0xD6,0xD7,0xD8,0xD9,0xDA,0xE1,0xE2,0xE3,0xE4,0xE5,0xE6,0xE7,0xE8,
    0xE9,0xEA,0xF1,0xF2,0xF3,0xF4,0xF5,0xF6,0xF7,0xF8,0xF9,0xFA,
  ];
  for (const v of acValues) buf[off++] = v;

  // SOS (start of scan)
  buf[off++] = 0xFF; buf[off++] = 0xDA;
  buf[off++] = 0x00; buf[off++] = 0x08; // length
  buf[off++] = 0x01; // 1 component
  buf[off++] = 0x01; // component 1
  buf[off++] = 0x00; // DC/AC table selectors
  buf[off++] = 0x00; buf[off++] = 0x3F; buf[off++] = 0x00; // spectral selection

  // Minimal scan data - encode DC coefficient based on luminance
  const Y = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
  // Encode as: category + value for DC, then EOB for AC
  // Simple approach: just emit enough bytes for valid 8x8 block
  buf[off++] = Y > 128 ? 0xFB : 0x05;
  buf[off++] = 0x50;

  // EOI
  buf[off++] = 0xFF; buf[off++] = 0xD9;

  return buf.subarray(0, off);
}

// Create a proper PNG file with solid color (more reliable than JPEG hand-crafting)
function createPng(width, height, r, g, b) {
  const w = width || 400;
  const h = height || 400;

  function crc32(buf) {
    let c = 0xFFFFFFFF;
    const table = [];
    for (let n = 0; n < 256; n++) {
      let k = n;
      for (let i = 0; i < 8; i++) k = (k & 1) ? (0xEDB88320 ^ (k >>> 1)) : (k >>> 1);
      table[n] = k;
    }
    for (let i = 0; i < buf.length; i++) c = table[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
    return (c ^ 0xFFFFFFFF) >>> 0;
  }

  function chunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length);
    const typeData = Buffer.concat([Buffer.from(type, "ascii"), data]);
    const crc = Buffer.alloc(4);
    crc.writeUInt32BE(crc32(typeData));
    return Buffer.concat([len, typeData, crc]);
  }

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0);
  ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type RGB
  ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

  // IDAT - raw image data
  const rawRow = Buffer.alloc(1 + w * 3);
  rawRow[0] = 0; // filter: none
  for (let x = 0; x < w; x++) {
    rawRow[1 + x * 3] = r;
    rawRow[1 + x * 3 + 1] = g;
    rawRow[1 + x * 3 + 2] = b;
  }
  const rawData = Buffer.concat(Array(h).fill(rawRow));
  const compressed = zlib.deflateSync(rawData);

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  return Buffer.concat([
    sig,
    chunk("IHDR", ihdr),
    chunk("IDAT", compressed),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

// Main
console.log("=== Generating images for public/images/ ===");
fs.mkdirSync(IMAGES_DIR, { recursive: true });

let generated = 0;
let skipped = 0;

for (const img of requiredImages) {
  const filePath = path.join(IMAGES_DIR, img.name);

  // Always skip logo.png - the real logo is committed to git via the repo
  if (img.name === "logo.png") {
    if (fs.existsSync(filePath)) {
      console.log(`  SKIP (committed asset): ${img.name}`);
      skipped++;
      continue;
    }
  }

  // Skip if file already exists AND is larger than 100 bytes (real image, not empty)
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    if (stat.size > 100) {
      console.log(`  SKIP (exists, ${stat.size} bytes): ${img.name}`);
      skipped++;
      continue;
    }
  }

  const [r, g, b] = img.bg || [100, 90, 80];

  if (img.name.endsWith(".png")) {
    const png = createPng(img.w || 400, img.h || 400, r, g, b);
    fs.writeFileSync(filePath, png);
    console.log(`  CREATED PNG (${png.length} bytes): ${img.name}`);
  } else {
    // Create PNG for JPG too (browsers display PNG with .jpg extension fine)
    // This is more reliable than hand-crafted JPEG
    const png = createPng(img.w || 800, img.h || 600, r, g, b);
    fs.writeFileSync(filePath, png);
    console.log(`  CREATED (${png.length} bytes): ${img.name}`);
  }
  generated++;
}

console.log(`\n=== Done: ${generated} generated, ${skipped} skipped ===`);
