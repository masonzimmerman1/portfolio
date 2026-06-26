# Mason Zimmerman — Portfolio

Personal portfolio site for Mason Zimmerman (Finance & AI @ USC). Built with **Vite + React 19 + TypeScript**, deployed on **Netlify**, with a live **Claude API** insights feature running as a serverless function.

## Editing content

All site content lives in typed data files — edit these, no markup required:

| To change…                | Edit                      |
| ------------------------- | ------------------------- |
| Name, bio, stats, contact | `src/data/profile.ts`     |
| Jobs & leadership         | `src/data/experience.ts`  |
| Projects                  | `src/data/projects.ts`    |
| Education & certs         | `src/data/credentials.ts` |

Images and the dashboard demo live in `public/`. The original static version is archived in `_legacy/`.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
```

The live AI insight feature calls a serverless function, so it only works when run with the Netlify CLI (`netlify dev`) or once deployed — not under plain `npm run dev`.

## Build

```bash
npm run build    # type-checks and outputs to dist/
```

## Deploy

Pushing to the connected GitHub repo auto-deploys via Netlify (`netlify.toml` defines the build). The Claude feature needs an `ANTHROPIC_API_KEY` environment variable set in Netlify (never committed).
