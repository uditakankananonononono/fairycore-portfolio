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
