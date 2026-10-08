BLACKOUT FABRICS | CLEAN / MODERN FLIPBOOK V2

DEPLOY ON GITHUB PAGES
1. Create a new public GitHub repository.
2. Upload the CONTENTS of this ZIP (index.html must be in repository root).
3. Open Settings > Pages > Deploy from a branch > main > /(root) > Save.
4. Wait a few minutes and visit https://YOUR_USERNAME.github.io/YOUR_REPO/

Contents:
- index.html, styles.css, script.js: responsive flipbook UI
- assets/pages/*.webp: fast page-flip previews
- assets/Blackout-Fabrics.pdf: exact source PDF for full-resolution reading/download

High-resolution reading:
The 'ซูมคมชัด' button renders pages of the SOURCE PDF using PDF.js fetched at first use from cdnjs (cdnjs.cloudflare.com). If PDF.js is blocked or offline, the site's fallback embeds the original PDF using the browser's PDF viewer. Internet is needed for the PDF.js enhanced zoom only; page-flipping and native PDF work without any 3rd party service.

IMPORTANT: This PDF contains rasterized pages (original page artwork ~4135×5847 pixels). The high-res viewer can preserve its original visual quality, but cannot create detail beyond the original artwork.

Controls: click edges, drag/swipe, keyboard arrows, thumbnails, zoom (up to 500%), sound toggle, fullscreen, share, PDF download.

GitHub Pages is case-sensitive: preserve filenames and paths. Do not upload the ZIP without extracting unless using a tool that automatically extracts it.
