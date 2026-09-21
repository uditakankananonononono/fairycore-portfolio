# Udita Phookan — Enchanted Atlas

A commercial, static-deployable portfolio that turns Udita’s work into a continuous fairycore 3D journey. It includes every supplied document verbatim, reorganizes the same material into activity dossiers, indexes the complete top-level Drive portfolio, and hides a six-part clue hunt across the worlds.

## What actually works

### Continuous 3D journey

Open `/#journey` or select **3D journey** in the navigation.

- Scroll or trackpad moves the camera forward and backward through a 118-unit forest route.
- Pointer drag steers the camera; ordinary cursor movement adds parallax.
- Arrow Left/Up/Page Up move back; Arrow Right/Down/Page Down move forward.
- Seven real Three.js landmarks mark the route: Moonlit Academy, Pigment Greenhouse, Bioluminescent Lab, Moss Terminal, Library Under Roots, Ancestral Loom, and Heart of the Forest.
- The landmarks are built from animated cylinders, custom petal geometry, a double helix, rotating cubes, book stacks, loom rings and a torus-knot heart.
- 240 crystals, 80 emissive mushrooms, fog, terrain, aura volumes and colored point lights make the path spatial.
- Clicking a glowing landmark awakens its world and syncs the content layer.
- Persistent chapter markers jump among worlds.
- **Guided tour** traverses the route automatically and can be stopped at any time.
- Reduced-motion mode freezes decorative ambient motion while keeping manual navigation available.

### Embedded information from all 13 documents

The portfolio does not rely on summaries alone.

- `src/content/documents.json` contains all 13 requested documents as canonical verbatim text.
- `src/content/activities.json` contains 433 organized activity passages parsed from those same sources, totaling over 263,000 characters.
- Every passage is embedded in a relevant journey space through horizontal activity decks.
- Activity decks support live filtering, 40-item pagination, keyboard/touch navigation and full dossier readers.
- Student also includes general/info/life passages, which ensures the two passages without narrower category matches are still embedded.
- Archive provides full-text search and exact source readers for all 13 documents.
- `src/content/drive.json` indexes all 42 top-level portfolio Drive artifacts with their original links.

### Six content-grounded clue trials

Clues are solved through world-specific sequences, not collected from generic buttons.

| World | Trial | Correct sequence |
|---|---|---|
| Student | Light the syllabus | wonder → test → share |
| Illustrator | Grow an impossible pigment | agar → neon pastel → living seed |
| Researcher | Rebuild the living question | design → build → test → learn |
| Builder | Boot the moss terminal | plain-language prompt → model and simulate → export for the lab |
| Writer | Open the sentence-door | failed model → boy on water → coffee vortex |
| Tai-Ahom | Wake the golden loom | grandmother → Tai-Ahom word → Yelon |

Each trial has keyboard/touch controls, progress feedback, a content-grounded decoy and reset-on-error behavior. Solved words persist in `localStorage`. The finale becomes available after all six trials, then opens through an animated keyhole and bloom reveal.

### Page-level hidden interactions

The non-journey pages remain complete and functional:

- Home: blushing mushroom, moth-filled lantern, tiny door and following fairy.
- Student: interactive hope constellation, scene objects and guardian.
- Illustrator: shape-shifting artwork and pigment-world interactions.
- Researcher: mycelium neural-network message and laboratory objects.
- Builder: terminal guardian and moss-computing scene.
- Writer: escaping sentence, reactive quotation and library guardian.
- Tai-Ahom: loom-rhythm wings, Yelon and Tai-Ahom word cards.
- Archive: restless inkpot, library moth, shelf key, full search and source readers.
- Finale: six word locks, animated keyhole, bloom reveal and phrase-level hover meanings.

A winged fairy follows the pointer across the site and gives randomized, page-specific whispers when selected.

## Content provenance and source status

All 13 links supplied by Udita were readable. Two links that looked like Google Docs were actually DOCX uploads:

- `Engineered Bacteriophages`
- `Mother`

They were downloaded and extracted directly. No requested source was inaccessible or returned 404.

The supplied portfolio folder contained 42 top-level artifacts. All remain indexed. The four images used in the rendered site were resized and converted to WebP for production; large videos and remaining artifacts are linked to their original Drive files instead of being copied into the bundle.

## Routes

The app uses hash routes and is safe for static hosting:

- `/#home`
- `/#journey`
- `/#student`
- `/#artist`
- `/#researcher`
- `/#builder`
- `/#writer`
- `/#heritage`
- `/#archive`
- `/#finale`

`?all=1#finale` is a QA-only shortcut for checking the ready-state finale. Normal visitors must complete the six trials.

## Run locally

Requirements: a current Node.js LTS release and npm.

```bash
npm ci
npm run dev
```

Build production assets:

```bash
npm run build
npm run preview
```

No server, database, secret or environment variable is required.

## Production implementation

- React + Vite + Three.js.
- Three.js is code-split and lazy-loaded. A styled fallback renders immediately.
- Four used portfolio images are optimized WebP files with dimensions, alt text, lazy loading and async decoding.
- Vercel headers cache hashed assets immutably and set `nosniff`, strict referrer policy and a restricted permissions policy.
- A React error boundary prevents a blank-screen failure and offers Reload Journey or Open Archive recovery.
- Full-document readers use labeled dialogs, initial focus, Escape/backdrop close, body scroll lock and focus restoration.
- Visible focus treatment, skip link, minimum touch targets, high-contrast mode and reduced-motion handling are included.
- The current production build is approximately 1.4 MB before network compression.

## Repository map

```text
src/
  main.jsx                 UI, worlds, trials, archive, dossiers and finale
  Forest3D.jsx             Continuous Three.js journey and input system
  style.css                Responsive design and interaction states
  content/
    documents.json         13 canonical verbatim documents
    activities.json        433 organized embedded passages
    drive.json             42 top-level Drive artifacts
  assets/                  Optimized portfolio WebP images
index.html                 Metadata and application entry
vercel.json                SPA rewrite, cache and security headers
DEPLOY.md                  Exact Vercel steps and acceptance checks
```

## QA completed

- Production `npm run build` passes.
- Browser smoke tests confirm Home, Journey, Researcher and Archive mount without uncaught reference/type errors.
- Journey was visually checked at 1280×900 and 390×844.
- All nine original routes were previously checked at desktop and mobile widths.
- Automated content assertions verify 13 documents, 433 activity passages and 42 Drive artifacts.
- Journey checks cover wheel/drag/pointer/keyboard travel, chapter syncing, guided tour, paged activity decks and dossiers.
- Trial assertions verify all six content-specific clue sequences.

See [DEPLOY.md](./DEPLOY.md) for deployment and production acceptance testing.

### Timeline observatory

The Journey HUD includes an exploratory Timeline Observatory. It groups the checked-in activity passages into five broad narrative eras: Origins, Foundation, Research Rooms, Systems, and Forward Questions. It shows source-document orbits, counts and linked passage cards. Because many source documents omit exact dates, the interface explicitly treats this as a navigational interpretation, not a dated CV; no dates are invented.
