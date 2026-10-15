# Vichai website (React + Vite)

## Run it
1. Install Node.js 18 or newer
2. `npm install`
3. `npm run dev`     - local preview
4. `npm run build`   - creates `dist/`, upload its contents to your hosting

## Folder guide
- `src/data/content.js`  - all website text (edit copy here)
- `src/components/`      - one file per section (Navbar, Hero, Services, Product, Commitment, About, Contact, Footer) plus small shared pieces (Logo, Tabs, Reveal, OrbitDiagram, AdminConsole)
- `src/hooks/`           - `useScrolled` (navbar background) and `useReveal` (scroll animation)
- `src/styles/`          - one CSS file per section; design tokens (colors) are at the top of `base.css`
- `public/favicon.svg`   - browser tab icon

## Contact form
It currently opens the visitor's email app (mailto). To send requests directly, connect Formspree, Web3Forms or EmailJS inside `src/components/Contact.jsx`.
