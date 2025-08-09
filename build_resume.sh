#!/usr/bin/env bash
set -euo pipefail

# Compile resume.tex into resume.pdf using pdflatex.
pdflatex -interaction=nonstopmode -halt-on-error resume.tex
