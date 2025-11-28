# Project 2 — Full Stack REST API (Starter)

Live demo: deploy to Render — https://contactsproject2.onrender.com 
Repo: https://github.com/VBE1994/ContactsProject2

## Summary
Small full stack REST API project with a simple contacts CRUD API and a minimal frontend. Backend is Node/Express and serves the static files in `/public`.

## Features
- List, create, update, delete contacts (CRUD)
- Simple file-based storage (`data.json`) for coursework purposes
- Frontend UI that consumes the REST API

## Run locally (Windows & macOS)
1. Clone the repo
```bash
git clone https://github.com/VBE1994/ContactsProject2
cd YOUR_REPO
```
2. Install
```bash
npm install
```
3. Start
```bash
npm start
```
Open http://localhost:3000 in your browser.

## Run in development (optional)
```bash
npm run dev
```
(this uses nodemon if installed as devDependency)

## Deploy to Render (recommended for this assignment)
1. Push your repo to GitHub.
2. Go to https://render.com, sign in and click **New** → **Web Service**.
3. Connect your GitHub repository and select it.
4. Settings:
   - Environment: Node
   - Build command: `npm install`
   - Start command: `npm start`
5. Create the service and wait. Copy the public URL and test in an incognito window.

**Important:** For this assignment you must paste the Render public URL into the Return box.

## Deploy frontend-only to GitHub Pages (NOT for API)
- If you only had a static frontend, you'd use GitHub Pages. Since this project contains a backend, use Render.

## Screenshots
Add screenshots into `/docs/screenshots/` and reference them here.

## Demo video (3-5 minutes)
Upload to YouTube (unlisted) and paste the link here. Include timestamps in the README, e.g.:
- 0:00 Intro
- 0:30 Run locally
- 1:00 Create contact
- 2:00 Edit & delete
- 3:00 Deployment & reflection

## Reflection (example - 220 words)
Work on this project emphasised building a small yet complete full stack application. I planned minimal API endpoints and a simple frontend to keep scope achievable. Using Express allowed quick setup of REST endpoints; file-based storage avoids database overhead for coursework but is documented for later replacement.
Testing was manual using the UI and browser DevTools; errors were logged in the server console and fixed. Deploying to Render taught me to handle environment variables via the Render dashboard rather than local .env files. A future improvement would be adding automated tests and moving storage to a managed database service.

## Self-assessment
- Functionality: 8/8 — core CRUD implemented and deployed.
- Code quality: 4/4 — readable, modular, .gitignore present.
- Deployment & docs: 4/4 — README, deployment instructions included.
- Security & repo hygiene: 4/4 — .env ignored, node_modules ignored.

## Notes for markers
- This starter uses `data.json` for persistence. For production use, replace with a database.
