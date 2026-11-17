# Joyce Valerie Olonan – Portfolio

React + Vite portfolio built from the approved design (Design Preview v19). The layout, colours,
animations and responsive behaviour are unchanged; the code is split into small reusable pieces.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # test the production build locally
```

## Folder guide

```
public/                      favicons (svg, 32px, 192px, apple-touch-icon)
src/
  main.jsx                   entry point (ErrorBoundary + App + styles)
  App.jsx                    page shell: header, sections, footer, 404 switch
  assets/images/             profile photo and project screenshots
  data/                      ALL editable content: site.js, projects.js, skills.js,
                             stats.js, journey.js, now.js
  components/
    common/                  Reveal, Typewriter, CountUp, Section, SectionTag/Title,
                             TechMarquee, ErrorBoundary
    layout/                  Header, Footer, Background, Loader, ScrollProgress, SectionCounter
    sections/                Home, About, Skills, Projects, Journey, Now, Contact, NotFound
  context/                   LoaderContext (first-visit loader), SectionContext (nav replay)
  hooks/                     useActiveSection, useHashRoute, useMediaQuery
  utils/                     motion.js (reduced-motion flag), text.js
  styles/                    original CSS split into ordered layers (01 → 08).
                             Keep the import order in index.css: later layers override earlier ones.
```

## Editing content

* Add or change a project → `src/data/projects.js` (and drop the image in `src/assets/images/projects/`).
* Add a skill → `src/data/skills.js`. Update the numbers → `src/data/stats.js`.
* Email, social links, footer text → `src/data/site.js`.

## Routing and refresh

Navigation uses hash links (`/#about`, `/#work`, …). Because the hash is handled in the browser,
opening or refreshing any of them works on any static host with no server rewrites. An unknown
hash (e.g. `/#nope`) shows the custom 404 page. `base: './'` in `vite.config.js` lets the build run
from a sub-folder (GitHub Pages) as well as a domain root (Netlify, Vercel).

## Deploy

Build command `npm run build`, output folder `dist`. Works as-is on Netlify, Vercel and GitHub Pages.

## Git (push to your Finals Activity 1 repo)

```bash
git clone https://github.com/shaiiiiiiii01/OLONAN_PORTFOLIO.git
# copy this project's files into the cloned folder, then:
git checkout -b final-portfolio
git add .
git commit -m "Final portfolio: React + Vite build from approved design"
git push -u origin final-portfolio
git checkout main && git merge final-portfolio && git push origin main
```
