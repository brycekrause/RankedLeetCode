# 404 — The Learning Protocol: Landing Page

**HackGB 2026 — milestone 01.** This ZIP is a clean, standalone **React + Vite landing page** for your AI-powered coding arena. It is NOT the compiler/backend or multiplayer implementation yet; those are the next development milestones.

## What is already working

- Responsive landing with custom styling and animations (desktop + mobile)
- Sticky navigation and mobile menu
- Game modes: **PROBLEMS (real-time 1v1 PvP)** and **AI CHALLENGE (solo with Google Gemini)**
- Interactive preview in hero: click **PvP DUEL** or **AI TRAINING** to switch the mock code-editor preview
- Live links to separate `/problems` and `/ai-challenge` **placeholder** routes (clearly labeled as unfinished)
- Sections: Game Modes, How It Works, Team-Calibrated Difficulty, Final CTA
- Accessibility: focus indicators, semantic nav, reduced-motion preference
- No API keys needed for this first milestone

## Run in VS Code

**Requirements:** Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser.

On Windows: unzip, open the folder in VS Code, press **Terminal → New Terminal**, and run the commands above.

For production:

```bash
npm run build
npm run preview
```

The static production files will be in `dist/`. Deployment can go to Vercel or Netlify. Since we use HashRouter, it can also work on GitHub Pages without server-side route rewrites (adjust the Vite base path for a GitHub Pages repo subdirectory if needed).

## File structure

```
404-landing-page/
  index.html
  package.json
  vite.config.js
  public/
    favicon.svg
  src/
    main.jsx                  # React entry point
    App.jsx                   # App routing
    data/
      site.js                 # Modes and steps: edit copy here
    components/
      Header.jsx              # Sticky nav and mobile menu
      Brand.jsx               # Wordmark
      HeroVisual.jsx          # Interactive PvP/AI mock editor
      Icons.jsx               # Local SVG icons (no icon dependency)
      ModeCard.jsx            # Reusable mode cards
      Footer.jsx
    pages/
      Landing.jsx             # Full landing sections
      ModePlaceholder.jsx     # Clearly marked next-step pages
    styles/
      globals.css             # Colors, buttons, design tokens
      layout.css              # Page styles and responsive layout
      animations.css          # Animations + reduced motion
```

## What to build next

1. **PvP Problems:** player lobby, room codes, synchronized duel timer, shared problems, authoritative judging.
2. **AI Challenge:** Python or other language code editor, structured Gemini problem generation and BYTE tutoring.
3. **Code execution:** Monaco editor UI plus a secure isolated code execution service like Judge0 for graded submissions. NEVER run arbitrary user code directly on the Express server; keep secret Gemini keys server-side.
4. **Difficulty calibration:** team-approved Easy/Medium/Hard rubric and reviewed questions, performance feedback. This is *not* fine-tuning Gemini; feed the rubric, labeled examples, and ratings into generation prompts.
5. **Database and accounts:** persisted player state, problem bank and results (after core flows work).

**Important:** the fake code editor on the landing is an interactive visual **preview**, not a functioning code compiler. The future coding workspace will use Monaco and a safely isolated execution service.
