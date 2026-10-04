# APEX Business Solutions — weekly briefing

Mobile-first site for the ten weekly presentations. Classmates open one address and follow the current week on their phones. The site is updated before each presentation.

## Run it locally

```bash
npm install
npm run dev
```

Open the local address Vite prints, usually `http://localhost:5173`.

## Update the site each week

1. Open `src/data/weeks.js` and replace that week's placeholder text: what the presentation is about, summary, objectives, progress, key concepts, and next week.
2. Open `src/config.js` and set `CURRENT_WEEK` to the week you are presenting. That week is highlighted on the home page, in the header, and in the week list.

## Publishing

The build is set up for GitHub Pages under `/Apex_Fantasy/` (see `base` in `vite.config.js`). Routes use a hash (`/#/week/1`) so a refresh on GitHub Pages still opens the right briefing.
