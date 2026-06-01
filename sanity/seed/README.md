# Sanity sample content

Bilingual (EN / JA) seed data for **Leaf & Bean** menu.

## Contents

| Type | Count |
|------|------:|
| Categories | 4 (Food, Drinks, Desserts, Seasonal) |
| Menu items | 16 (5 + 5 + 3 + 3) |

Menu items are imported **without images** (`image: null`). Upload images in Sanity Studio after import.

Prices use typical Japanese café tax display: **tax-included (税込)** with **tax-excluded (税抜)** at 10% consumption tax.

## Import into Sanity

1. Set env vars (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`).
2. Log in: `npx sanity login`
3. Import (replace `production` with your dataset name if different):

```bash
npm run seed:sanity
```

Or manually:

```bash
npx sanity dataset import sanity/seed/data.ndjson production --replace
```

`--replace` overwrites documents with the same `_id`. Remove it to merge without replacing.

## Regenerate `data.ndjson`

After editing `sample-data.ts`:

```bash
npm run seed:build
```

## Source files

- `sample-data.ts` — editable seed definitions
- `data.ndjson` — generated import file (committed for convenience)
