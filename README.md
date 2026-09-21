# Udita Phookan — enchanted archive

A static-deployable React/Three.js portfolio designed as a set of interactive fairycore worlds.

## Run

```bash
npm install
npm run dev
npm run build
```

## Experience

- Six facet worlds with different palettes, spatial arrangements, motion, and content.
- Four discoverable objects per facet scene: mushroom, lantern, fairy wings, and a concealed clue orb.
- A persistent fairy companion follows the pointer and gives page-specific randomized whispers.
- Ambient petals, mist, parallax-like 3D particles, reactive objects, scene guardians, hover transformations, and page-specific secondary interactions.
- The six-word hunt persists locally. The finale moves from locked door to live keyhole to animated bloom reveal.
- Full-text archive of all 13 supplied documents, plus all 42 top-level Drive artifacts linked to their original files.
- Responsive mobile experience and `prefers-reduced-motion` support.

## Hidden interaction map

| Page | Discoveries |
|---|---|
| Home | Blushing mushroom, moth-filled lantern, tiny door, fairy whispers |
| Student | Mushroom secret, lantern dawn, wings, hidden word orb, interactive hope constellation, scene guardian |
| Illustrator | Mushroom secret, lantern dawn, wings, hidden word orb, shape-shifting artwork, scene guardian |
| Researcher | Mycelium neural-network message, lantern dawn, wings, hidden word orb, scene guardian |
| Builder | Mushroom secret, lantern dawn, wings, hidden word orb, 404 guardian message, terminal treatment |
| Writer | Mushroom secret, escaping sentence lantern, wings, hidden word orb, reactive quotation, scene guardian |
| Tai-Ahom | Mushroom secret, lantern dawn, loom-rhythm wings, hidden word orb, Yelon word cards, scene guardian |
| Archive | Restless inkpot, library moth, shelf key, randomized fairy, live full-text search |
| Finale | Six live word locks, animated keyhole, bloom reveal, four hover meanings, randomized fairy |

The `?all=1#finale` query is a QA-only shortcut for visually checking the ready-state finale. It does not affect normal visitors.

## V4 3D journey

The primary "3D journey" route is a full-viewport, continuous Three.js atlas. Scroll or arrow keys move the camera through seven landmarks; pointer drag steers the view; clicking the lit structure awakens the current space. A guided tour crosses the whole world automatically and can be stopped at any time.

The 13 canonical verbatim sources are preserved in `documents.json`. They are additionally parsed into 433 titled activity passages in `activities.json`, organized across the six worlds. Each passage is available through paged horizontal decks, full-space filtering and a readable dossier. Nothing is dropped: Archive remains the exact-text source of truth and indexes all 42 Drive artifacts.
