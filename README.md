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

### Evidence constellation

The Journey HUD includes an Evidence Constellation linking organized passages to their exact source scroll and, only where distinctive name/text terms match, to supplied Drive artifacts. Current deterministic graph: 433 passage nodes, 13 source-scroll nodes, 42 artifact nodes, 356 passage-to-artifact edges, and 278 passages explicitly left without an artifact link. The UI can filter linked vs unresolved nodes, search claims/activities, open exact dossiers, and open supplied Drive artifacts. Provenance is not proof: these links do not authenticate sources, independently verify claims, or prove that an artifact depicts a passage.

### Portfolio curator

The Journey HUD includes a bounded Portfolio Curator for real visitors. A visitor selects an audience (research mentor, admissions reader, collaborator, investor/incubator, or general visitor) and a 2-, 5-, or 10-minute budget. The mode deterministically assembles 4, 8, or 14 stops from existing passages using declared keyword coverage plus source/content-type diversity. Every stop explains why it was selected and opens the complete dossier. This is not a quality ranking, admissions prediction, investment recommendation, or scientific assessment, and it never replaces the full atlas.

### Relationship weave

The Journey HUD includes a Relationship Weave derived only from literal mentions in the 13 supplied documents. It currently maps 47 named people, institutions, programs, companies and projects to 362 passage mentions. Selecting a node opens every matching passage and its exact dossier. A six-item collision ledger keeps broad acronyms and unresolved identity variants explicit (including MIT, Harvard, Oxford, HMS, Dr. Su/X. Su, and Giannikou/K. Giannikou). Appearance in supplied text is not proof of affiliation, endorsement, mentorship, employment or collaboration; no external identity reconciliation is claimed.

### Question garden

The Journey HUD includes a Question Garden extracted from literal question marks in the supplied writing. After removing URL noise and fragments, it preserves 30 explicit questions across six navigational domains: living systems, intelligence, society, creation, responsibility, and becoming. Every question is displayed as open unless the source explicitly says otherwise; selecting a plant opens its source section and exact passage. Related work is not treated as proof that the question is answered.

### Artifact cinema

The Journey HUD includes an Artifact Cinema for all 42 supplied Drive artifacts. Visitors can filter by image, video, presentation, document, folder or other; search titles; view optimized local versions of selected images; and open every original Drive item. The screening room reverse-links artifacts to Evidence Constellation passages only where grounded matches exist. Unmatched artifacts remain explicit. Display or proximity does not authenticate an artifact or prove a passage.

### Skills observatory

The Journey HUD includes a Skills Observatory across seven transparent groups: Laboratory Methods, Computational Biology, Product and Software, Research Practice, Communication, Leadership and Community, and Art and Design. Each matched passage is classified as **mentioned** or conservatively **described doing** using first-person active-verb patterns; an independent **artifact linked** marker reuses Evidence Constellation matches. These are source-evidence states, not proficiency ratings, and they do not verify quality, recency, independence or authorship.

### Values compass

The Journey HUD includes a descriptive Values Compass built from explicit configured words in source passages. It indexes Access, Care, Imagination, Honesty, Responsibility, Heritage, Curiosity, and Community, with supporting and tension passages linked to exact dossiers. A ninth candidate, “Tradition over change,” demonstrates the **insufficient evidence** state and is not inferred. Counts are literal term matches, not strength-of-belief or personality scores; tension terms do not prove contradiction.

### Project galaxy

The Journey HUD includes a Project Galaxy that groups configured project names and distinctive terms into ten navigational systems: SugarCode, BioNet, Yelon, Engineered Bacteriophages, Hope for Neuro, BioHackers/Community, Algal Bioreactor, Oncolytic Virus Research, Seed-ball Experiment, and Embryo Culture. Each cluster exposes source passages by problem, methods, outputs and open gaps, plus grounded supplied artifacts. Grouping is labeled **grouped-by-name**, not a definitive product taxonomy. Yelon and Seed-ball demonstrate thin/zero parsed-passage states; no project story is invented. Output-related wording does not independently verify completion, ownership, performance or product status.

### Source integrity desk

The Journey HUD includes a Source Integrity Desk backed by `scripts/build-content-audit.mjs`. Every production build regenerates `public/audit/content-integrity.json`. Current checked-in totals: 13 documents, 288,181 characters, 39,367 words, 433 passages, 42 Drive artifacts, 356 artifact edges, and 160 surfaced heuristic anomalies. Per-source views show counts, artifact-linked coverage, duplicate-looking headings, short parsed sections and URL-fragment passages. The JSON report is downloadable. Counts prove checked-in inclusion, not source authenticity; anomalies are review flags, not confirmed errors.

### Review Queue

The Source Integrity Desk includes an actionable Review Queue for all 160 heuristic flags. Reviewers can filter by flag type, source and status; search labels and passage IDs; inspect adjacent verbatim passage context; and mark a flag as open, reviewed, accepted as intentional, or needing source cleanup. Decisions are stored only in the current browser under `udita-integrity-reviews` and can be exported as a timestamped JSON review file. This workflow never edits `documents.json`, `activities.json`, or the generated audit. Local decisions are annotations, not corrections, validation, or proof.


### Provenance Diff Lab

The Journey HUD’s `⇄ compare` control opens a read-only comparison surface for any two of the 433 canonical passages. Search or limit by source, swap sides, inspect complete passage text side by side, and review each passage’s heuristic artifact/evidence edges. A deterministic lexical scan surfaces up to 20 exact normalized 4–8 word sequences while excluding URLs and punctuation. It makes no claim about copying, influence, authorship, identity, chronology, affiliation, or relationship. The export action downloads a timestamped comparison manifest containing passage identities, evidence leads, scan method, observed phrases, and the same truth boundaries. Comparison never edits canonical content or audit data.

### Narrative Trail Composer

The Journey HUD’s `⌁ trail` control opens a private browser-local composer over all 433 canonical passages. Visitors can search across full text, filter by source, add passages, reorder or remove them, and add optional labels that are always marked “visitor-authored.” A preview mode presents the route linearly without truncating canonical text. Trails persist only in `udita-private-trail`; they are never published or shared by the site. Export creates a small timestamped JSON manifest of passage IDs, order and visitor labels. Import validates IDs against the checked-in passage corpus, ignores unknown IDs, bounds label length, and does not ingest replacement source text. The route’s order is a visitor reading aid, not Udita’s chronology, categorization, wording, endorsement, or intended narrative.

### Audience Lens Studio

The Journey HUD’s `◫ lenses` control provides four transparent evidence-retrieval lenses: admissions, research collaborator, creative commissioner, and general visitor. Each lens declares named rule groups and the exact term vocabulary it scans. Results are deterministically ranked by count of case-insensitive substring matches in canonical title + text; ties resolve by matched rule-group count, source ID, then passage ID. Every result displays its score, matching terms grouped by rule, canonical excerpt and source identity. Content-type and source filters do not change the rules. A result can open its full dossier or be appended to the browser-local private trail.

This does not duplicate Portfolio Curator. Lens Studio exposes the ranked evidence set and every lexical reason, with no route or time budget. Curator creates a short guided route and adds source/type diversity for a chosen time budget. Neither verifies claims, predicts admissions or collaborator decisions, assesses proficiency, promises suitability/completeness, or represents an audience endorsement. Scores measure declared vocabulary coverage only.

### Claim Context Matrix

The Journey HUD’s `▦ claims` control opens a focused, read-only review index over four textual shapes: quantified statements, date-bearing statements, recognition wording, and first-person project claims. A passage can match several shapes. Reviewers can filter by shape, source and artifact-link state, search exact wording, and inspect the surfaced passage together with adjacent canonical passages, Source Integrity heuristic flags, and Evidence Constellation artifact edges. The export action creates a timestamped review manifest containing active filters, the human-readable rulebook, passage identities, shape tags, integrity flags and artifact leads. It does not export or modify replacement source text.

This matrix classifies wording patterns only. It does not declare any statement true or false. Inclusion, nearby context and provenance links do not verify claims, awards, dates, amounts, project completion, independence, affiliations or authorship. Integrity flags remain heuristics rather than confirmed source errors.

### Archive Query Workbench

The Journey HUD’s `⌕ query` control provides deterministic advanced search across all 433 canonical passages. It combines an ALL-term group (AND), ANY-term group (OR), one exact contiguous phrase, source, content type, artifact-link state, and Claim Context wording shape. Every result lists the literal terms/phrase/shape that caused its match. Matching is case-insensitive and literal; no semantic expansion, embeddings or inferred synonyms are used. Up to 150 results render at once, with a prompt to narrow visible rules when more match.

Named queries persist only in `udita-archive-queries`. Exported/imported manifests contain query rules and timestamps only, never canonical source text. Imports bound field sizes and validate structural filters against checked-in source/type/shape choices. Results do not imply truth, relevance quality, relationships, endorsement or completeness.

### Portfolio State Capsule

The Journey HUD’s `◌ state` control opens “What is actually shipped,” an in-site view backed by `public/audit/portfolio-state.json`. `scripts/build-state-capsule.mjs` runs after the content audit during every production prebuild and records: implemented system inventory with working launch routes; canonical counts; SHA-256 fingerprints and record counts for nine canonical/derived datasets; browser-local storage keys; package scripts and pinned dependency versions; checked-in Vercel configuration; repository URL; and permanent truth boundaries. The JSON is downloadable.

Hashes prove byte identity of checked-in files, not authenticity or truth. The inventory describes checked-in implementation and a successful local production build, not public deployment status, uptime, or Vercel account state. Derived views retain their own heuristic limits, and local visitor data remains neither published nor shared.

### HUD Tool Cabinet and command palette

The always-visible `☷ tools` control opens a single accessible launcher for all 18 advanced reading/review systems, including the Verbatim Archive. It replaces the need to expose every specialist control on small screens without removing any capability. Tools are searchable by title, purpose, or group and filterable across Explore, Trace, Present, Review, Audit, and Search. Browser-local decision/trail/query counts appear as count-only badges; their contents are never displayed in the launcher or synced.

From the Journey, `/` or Ctrl/Command+K opens the cabinet unless focus is in a text field. Search receives focus on open, Escape closes the modal, all controls have keyboard focus behavior, and every system is launchable without pointer precision. On mobile, the cabinet entry remains fixed above the viewport edge while the previously crowded specialist buttons stay hidden.