# Resume Build Instructions

This repository contains `resume.tex`, the source of the resume, and the generated `resume.pdf`.

## Build

Ensure `pdflatex` is installed and available on your `PATH` (e.g., via TeX Live).

To rebuild the PDF after editing the LaTeX source, run:

```bash
./build_resume.sh
```

The script runs `pdflatex` with options to halt on errors, producing an updated `resume.pdf`.
