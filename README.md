# Matematik 1.–6. klasse – studiemateriale

A bilingual (Danish/English) study website in mathematics for children in grades 1–6 at a
Danish friskole. Live at **https://matematik-1-6.web.app**. All subject content is based on the official Danish curriculum:
**Fælles Mål – Matematik** and the accompanying *Læseplan* and *Undervisningsvejledning*
from the Ministry of Children and Education (Børne- og Undervisningsministeriet).

See [docs/curriculum-notes.md](docs/curriculum-notes.md) for what the curriculum says and
the exact sources used.

## What's inside

Fælles Mål sets goals per *trinforløb* (grades 1–3 and 4–6), not per grade, and splits each
into three ordered *faser*. The site mirrors that: two levels, and every topic is tagged
with its fase (fase 1 ≈ first year, fase 3 ≈ last year of the trinforløb) so a per-grade
filter is possible without inventing a per-grade curriculum. The caveat is stated on the site.

- **1.–3. klasse – 13 topics** ("efter 3. klassetrin"): numbers to 1000, adding &
  subtracting, multiplying & dividing, patterns & rules, halves/quarters/decimals; flat &
  solid shapes, drawing/building/mirroring, positions & grids, length/time/weight,
  perimeter & area first steps; counting & showing data, chance; story problems.
- **4.–6. klasse – 21 topics** ("efter 6. klassetrin"): four operations, fractions,
  decimals, percent, negative numbers, powers & pi, equations, variables & formulas; angles &
  polygons, perimeter & area, circles, 3D shapes & volume, coordinate system,
  transformations, measurement & units, geometric drawing; tables & charts, statistical
  descriptors, your own investigation, probability; how to solve a maths problem.
- Every topic has: the official goals it covers (quoted from Fælles Mål), key words
  (DA ↔ EN), explanations, worked examples, practice questions with hidden answers,
  and a "I can do this now" check box (progress is stored in the browser only).
- **10 interactive widgets**: hundred square, bonds to 10/20, times-table trainer, clock
  reading, calculation trainer (small and large numbers), fraction explorer, guess-and-check
  equations, coordinate quiz, statistics calculator, dice simulator (one or two dice).
- Language toggle (DA/EN) in the top bar. Danish is the default, using Danish notation
  (decimal comma, `·` for multiplication, `:` for division).
- Works on phones and tablets. No build step, no external dependencies, no tracking.

## Run locally

Any static file server works, e.g.:

```bash
npx serve public
```

or with the Firebase CLI:

```bash
firebase serve
```

## Deploy to Firebase Hosting

1. Create a project in the [Firebase console](https://console.firebase.google.com/) (or
   use an existing one).
2. Log in and link the project (run once, from this folder):

   ```bash
   firebase login
   ```

   ```bash
   firebase use --add
   ```

   Pick your project and give it the alias `default`. This writes `.firebaserc`.

3. Deploy:

   ```bash
   firebase deploy --only hosting
   ```

`firebase.json` defines two hosting targets in the same Firebase project: `main`
(site `matematik-1-6`, serves `public/`) and `legacy` (site `matematik-6-klasse`, a
301 redirect to the main site). `firebase deploy --only hosting` updates both.

## Project layout

```
public/
  index.html            app shell
  404.html
  css/style.css
  js/app.js             router, language toggle, progress, rendering
  js/widgets.js         interactive widgets
  js/content/index.js            levels, areas, competence goals, attention points, sources page
  js/content/indskoling-*.js     1.–3. klasse topics (tal, geometri, statistik+kompetencer)
  js/content/tal.js              4.–6. klasse: Tal og algebra
  js/content/geometri.js         4.–6. klasse: Geometri og måling
  js/content/statistik.js        4.–6. klasse: Statistik og sandsynlighed
  js/content/kompetencer.js      4.–6. klasse: Matematiske kompetencer
docs/curriculum-notes.md  research notes with sources
firebase.json
```

## Editing content

Each topic is a plain JavaScript object in `public/js/content/*.js` with `da` and `en`
text. Sections can be `text`, `example`, `tip`, `fig` (inline SVG), `widget` or
`practice`. Add a topic by creating an object under `window.CONTENT.topics` (with a `phase` array)
and listing its id in the relevant level/area in `index.js`.
