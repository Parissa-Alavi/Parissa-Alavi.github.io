# Parissa Alavi Portfolio Site

This repository contains my personal research and engineering portfolio, built as a lightweight static website for GitHub Pages.

## Files

- `index.html` — homepage and portfolio
- `styles.css` — styling and responsive layout
- `script.js` — mobile navigation and automatic copyright year
- `cv.html` — web version of the CV, with print / Save as PDF support
- `LICENSE` — repository license

## Preview locally

From the repository folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

You can also open `index.html` directly in a browser, but using a local server more closely matches the GitHub Pages environment.

## Publish on GitHub Pages

The GitHub profile linked from the site is:

```text
https://github.com/Parissa-Alavi
```

For a personal GitHub Pages site, the repository should therefore be named:

```text
Parissa-Alavi.github.io
```

After pushing the site files to that repository, the public site URL will be:

```text
https://parissa-alavi.github.io/
```

If GitHub Pages is not enabled automatically, open the repository on GitHub and go to:

**Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)`**

## Clone with SSH

```bash
git clone git@github.com:Parissa-Alavi/Parissa-Alavi.github.io.git
cd Parissa-Alavi.github.io
```

## Edit and publish changes

After modifying files locally:

```bash
git status
git add .
git commit -m "Update portfolio"
git push origin main
```

GitHub Pages will deploy the new version after the push.

## Main links used by the site

- Email: `ParissaAlavi@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/parissaalavi/`
- GitHub: `https://github.com/Parissa-Alavi`

## CV

The current site uses `cv.html` as the CV page. It includes a **Print / Save as PDF** button, so the browser can generate a PDF without storing a second CV file in the repository.


## Project figures
The portfolio now uses real research figures stored in `assets/` rather than abstract CSS placeholders. If you want to replace a project thumbnail, copy a new PNG/JPG into `assets/` and update the corresponding `<img src="assets/...">` path in `index.html`.
