# SoloPay

Next.js (App Router) + TypeScript + Tailwind CSS + Biome + Supabase.

## Requirements

- Node.js 20+

## Getting started

Install deps:

```bash
npm i
```

Add env vars:

```bash
cp .env.example .env.local
```

Then set:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Run dev server:

```bash
npm run dev
```

## Code quality

```bash
npm run typecheck
npm run lint
npm run format
```

