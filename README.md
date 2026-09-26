# Your Agency — Landing Page

## Run it
```
npm install
npm run dev
```
Then open the local URL Vite prints (usually http://localhost:5173).

## Where to drop your assets
- `public/assets/logo.png` — navbar logo (circle, ~42x42+)
- `public/assets/hero.png` — hero section image
- `public/assets/clients/client-01.png` ... `client-12.png` — client/brand logos shown in the grid

Add or remove client logos by editing the `clients` array at the top of
`src/components/LogoGrid.jsx`.

## Where to edit copy
- Brand name: `src/components/Navbar.jsx`
- Hero heading/subtext/banner: `src/components/Hero.jsx`
- Services cards: `src/components/Services.jsx`
- Colors: CSS variables at the top of `src/index.css` (`--bg`, `--gold`, etc.)
