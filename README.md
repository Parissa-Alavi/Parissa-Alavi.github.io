# Parissa Alavi — GitHub Pages Portfolio (v6)

A responsive static portfolio for GitHub Pages, focused on computational mechanics,
materials modelling, scientific computing, and industrial R&D.

## Key improvements in v6

- Cleaned and consolidated CSS
- Reordered flagship projects
- Added project impact statements
- Added Education & Teaching section
- Highlighted EPFL thesis distinction
- Added favicon and Open Graph / social-sharing metadata
- Added a real downloadable PDF CV
- Updated LinkedIn URL
- Improved mobile navigation, keyboard support, focus states, and reduced-motion behavior
- Separated flagship projects from additional computational work

## Main files

- `index.html` — homepage
- `styles.css` — cleaned responsive styles
- `script.js` — navigation and accessibility behavior
- `cv.html` — web CV
- `assets/Parissa_Alavi_CV.pdf` — downloadable PDF CV
- `assets/favicon.svg` — favicon
- `assets/social-preview.jpg` — LinkedIn / social preview image

## Preview locally

```bash
python3 -m http.server 8000
```

Then open:

`http://localhost:8000`

## Publish with GitHub Pages

For GitHub user `Parissa-Alavi`, use the repository:

`Parissa-Alavi.github.io`

and publish from the `main` branch, `/ (root)`.

The site URL is:

`https://parissa-alavi.github.io/`

## Push an update

```bash
git add .
git commit -m "Portfolio v6 cleanup and improvements"
git push origin main
```


## Contact-link update in v6.1
- Email: `mailto:ParissaAlavi@gmail.com`
- GitLab / TAMAAS: `https://gitlab.com/parissa_al/tamaas`


## Email fix in v6.2
The contact Email button now opens a Gmail compose window directly:
`https://mail.google.com/mail/?view=cm&fs=1&to=ParissaAlavi@gmail.com`

A `Copy email` fallback button is also included.


## Contact cleanup in v6.3
Removed the boxed `Copy email` button. The contact section now keeps only:
- the Email button
- the visible email address underneath


## Experimental research update
Added an Experimental Research & Characterization section, a navigation link, and supporting styling. The archive only contains the files supplied in the conversation; preserve the existing `assets/` directory in the deployed repository. The EPFL/Novelis testing description explicitly distinguishes industrial measurement analysis from personally conducting tests.


## Experimental figures update
The `assets/stainless_*.webp` figures are cropped from the user's own 2020 peer-reviewed paper, `Simulation of recrystallization and martensite revision in 304L austenitic stainless steel after multi-pass rolling processes` (DOI: 10.1007/s41939-020-00072-4). Figure numbers and credits are shown on the website. Before public deployment, confirm any publisher permission required for figure republication. These are the user's own research figures, but publisher rights may still apply. No stock or internet images were introduced.

Existing tribology figure links still refer to assets in your original website `assets/` folder, which should be merged into this package.
