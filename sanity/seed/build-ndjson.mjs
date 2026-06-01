/**
 * Builds sanity/seed/data.ndjson from sample-data.ts
 * Run: npm run seed:build
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  const { categories, menuItems } = await import("./sample-data.ts");
  const lines = [];

  for (const category of categories) {
    lines.push(JSON.stringify(category));
  }

  for (const item of menuItems) {
    lines.push(
      JSON.stringify({
        _id: item._id,
        _type: "menuItem",
        name: item.name,
        description: item.description,
        category: { _type: "reference", _ref: item.categoryRef },
        image: null,
        taxIncludedPrice: item.taxIncludedPrice,
        taxExcludedPrice: item.taxExcludedPrice,
        featured: item.featured,
        soldOutToday: item.soldOutToday,
        available: item.available,
        displayOrder: item.displayOrder,
      })
    );
  }

  const outPath = join(__dirname, "data.ndjson");
  writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
  console.log(`Wrote ${lines.length} documents to ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
