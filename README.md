# Portfolio Website

This repository hosts the personal portfolio for Vinod Kumar Gorrepati along with the LaTeX source and generated PDF of his resume.

## Website

Open `index.html` in a browser to explore the site. Styles are defined in `styles.css` and basic interactivity is handled by `script.js`.

## Resume

Ensure `pdflatex` is installed and available on your `PATH` (e.g., via TeX Live).

To rebuild the PDF after editing the LaTeX source, run:

```bash
./build_resume.sh
```

The script runs `pdflatex` with options to halt on errors, producing an updated `resume.pdf`.
