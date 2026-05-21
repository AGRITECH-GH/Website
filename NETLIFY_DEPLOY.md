# Netlify deploy

## Easiest drag-and-drop option
1. Open a terminal in the project root.
2. Run `npm install` if dependencies are not installed.
3. Run `npm run build`.
4. Drag the generated `dist` folder into Netlify Deploys.

## Git-connected option
This project includes `netlify.toml` and `public/_redirects`, so Netlify will build it as a Vite SPA and route refreshes correctly.

Build command: `npm run build`
Publish directory: `dist`
