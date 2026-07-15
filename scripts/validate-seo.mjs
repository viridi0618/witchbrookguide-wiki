import fs from "node:fs";

const source = fs.readFileSync(new URL("../src/data/guides.ts", import.meta.url), "utf8");
const pick = (pattern) => [...source.matchAll(pattern)].map((match) => match[1]);
const titles = pick(/title: "([^"]+)"/g);
const descriptions = pick(/metaDescription: "([^"]+)"/g);
const slugs = pick(/slug: "([^"]+)"/g);
const errors = [];

if (titles.length !== 15 || descriptions.length !== 15 || slugs.length !== 15) errors.push("Expected 15 data-driven guide pages plus the homepage.");
for (const title of titles) if (title.length < 50 || title.length > 60) errors.push(`Title length ${title.length}: ${title}`);
for (const description of descriptions) if (description.length < 120 || description.length > 160) errors.push(`Description length ${description.length}: ${description}`);
for (const [label, values] of [["title", titles], ["description", descriptions], ["slug", slugs]]) if (new Set(values).size !== values.length) errors.push(`Duplicate ${label} detected.`);

const links = pick(/internalLinks: \[([^\]]*)\]/g).flatMap((chunk) => [...chunk.matchAll(/"([^"]+)"/g)].map((match) => match[1]));
const missing = [...new Set(links.filter((slug) => !slugs.includes(slug)))];
if (missing.length) errors.push(`Broken internal guide links: ${missing.join(", ")}`);

if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`SEO validation passed: ${titles.length + 1} pages, unique metadata, valid internal links.`);
