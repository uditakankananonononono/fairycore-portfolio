# Deploy to Vercel

The repository is ready for Vercel without any server, database, secret, or environment variable.

## Dashboard route

1. Open https://vercel.com/new and import `uditakankananonononono/fairycore-portfolio`.
2. Keep the detected framework as **Vite**.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Install command: `npm install`.
6. No environment variables are required.
7. Select **Deploy**.

`vercel.json` already provides SPA rewrites and production headers. Every hash route works through the one static entrypoint.

## CLI route

From the repository root:

```bash
npm install
npm run build
npx vercel
```

For the production deployment after checking the preview URL:

```bash
npx vercel --prod
```

When prompted on the first run:

- Set up and deploy: `Y`
- Scope: the intended Vercel account/team
- Link to existing project: choose `N` for a new project, unless one was already created in the dashboard
- Project name: `fairycore-portfolio`
- Directory: `./`
- Override detected settings: `N`

## Deployment acceptance checks

Check the production URL in a private browser window:

- Home renders immediately before the 3D chunk finishes.
- Navigation opens all six facet worlds, Archive, and Finale.
- Click the fairy and at least three scene objects.
- Collect one clue, refresh, and confirm the satchel still shows it.
- Open a full source scroll and close it with Escape.
- Search the Archive for `phage`, then open the matching paper.
- Test at 390 px width or on a phone.
- Complete all six clues and touch the finale keyhole.
- Confirm the 42 Drive artifact links open in a new tab.

## Optional custom domain

In Vercel: Project → Settings → Domains → add the chosen domain. Keep the generated `vercel.app` URL until DNS shows **Valid Configuration**. No code change is needed.

## V4 journey acceptance

- Open `/#journey` and verify the moonlit tower is visibly rendered in the world.
- Scroll forward and backward; confirm both camera depth and the active chapter marker change.
- Drag horizontally; confirm the camera steers.
- Use Arrow Down/Right and Arrow Up/Left; confirm keyboard travel matches wheel travel.
- Start and stop Guided tour.
- Click a glowing 3D landmark and confirm its space awakens.
- Open the current world's trial, solve the content-specific sequence, refresh, and verify the word persists.
- Page beyond the first 40 activity cards, filter the current space and open a full dossier.
- Complete all six trials and open the finale keyhole.

## Content acceptance

The deployed site is complete only if these counts remain true:

- Archive reports 13 source scrolls.
- Journey activity decks collectively read from 433 organized passages.
- Portfolio Drive index reports 42 artifacts.
- Searching Archive for `phage` returns the engineered bacteriophages paper.
- Searching the Student journey space for `Protein Folding` returns its activity passage.
- Opening a dossier shows the complete organized passage, not placeholder copy.

These counts are asserted from the checked-in JSON during the release build. Do not replace the JSON with manually shortened marketing copy.
