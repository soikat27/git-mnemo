# gitMnemo

`GitMnemo` is a browser-based memory-card game for Git commands: fifteen cards shuffle after every click, you only score if you pick one you haven’t clicked yet this round, and you try to beat your Best score. GitMnemo is a fantastic tool to train recall under a little pressure — the same muscle you need when a git command won’t stick at work.

There is no backend yet. Everything runs in the browser: Vite bundles React and CSS, commands load from a local `commands.json` (curated from `MySafeInfo`’s Git commands API), and score lives in memory for the session. Hit **Start Game** to open the board and kick off the background music; correct picks play a soft happy sound, a repeat pick plays a soft sad sound and resets the round. Instruction and Value explain how to play and why it matters. The look is a forest backdrop with stone-framed cards, Jersey 25 for body text, and Pixelify for display.

This project was built as part of The Odin Project curriculum (thanks to The Odin Project community). If you are reading the repo, you will see how **App** owns the chrome (header, dialogs, footer), **GameArea** owns the start modal, score, and music start, **CardGrid** fetches commands, shuffles the board, and tracks what you already clicked, and **GitCard** / **ScoreBoard** stay mostly presentational.

## What’s on main (current code)

The default branch is a Vite + React app. The important pieces:

- **App** — header, Instruction / Value dialogs, footer
- **GameArea** — start dialog, score state, background music on Start, mounts the board when the game is on
- **CardGrid** — loads `public/commands.json`, shuffles 15 cards, round / click tracking, SFX
- **GitCard** — one command + description card
- **ScoreBoard** — current score and best score
- **InfoDialog** — reusable modal + open button

The UI is bundled with Vite (dev server, production build). Styling is plain CSS and contains modules: tokens, component sheets for the shell, grid, cards, scoreboard, and start dialog.

## Getting Started

### Try it online

Live app: [https://gitmnemo.vercel.app/](https://gitmnemo.vercel.app/) — opens in the browser; no account or backend required.

### Run it locally

You need Node.js and npm for the Vite dev server and production build.

**Prerequisites**

- Node.js (LTS recommended) and npm
- Git (only if you use `git clone` below; otherwise use GitHub **Code → Download ZIP**)

Check that Git is installed (only if you clone):

```bash
git --version
```

**Installing**

1. Clone this repository and open the project directory

```bash
git clone https://github.com/soikat27/git-mnemo.git
cd git-mnemo
```

2. Install dependencies

```bash
npm install
```

**Running locally**

Start the development server (opens in the browser):

```bash
npm run dev
```

**Production build**

```bash
npm run build
```

Built files are written to `dist/` (gitignored). Preview the build with `npm run preview`.

## Using the app

### Features

- Start modal — welcome screen before the board mounts
- Soft audio — looped background track on Start; happy / sad cues on click
- Instruction & Value — how to play and why recall under pressure matters
- Responsive grid — five-by-three on desktop, three-by-five on small screens; no page scroll

### How to play

1. Open the app → **Start Game**
2. Read a card → click one you have not chosen yet this round → score goes up, board shuffles
3. Keep going until you misclick a repeat — score resets; try to beat Best
4. Optional: open Instruction or Value anytime from the header

## Available Scripts

- `npm run dev` — Vite dev server
- `npm run build` — production build into `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint

## Deployment

This project is hosted on Vercel. Vercel runs `npm run build` and serves the output. `dist/` stays out of git. Live site: [https://gitmnemo.vercel.app/](https://gitmnemo.vercel.app/)

You could also host the same `dist/` output on Netlify, Cloudflare Pages, or GitHub Pages.

## Built with

- React 19 — function components and hooks
- Vite 8 — dev server and production bundle
- CSS — tokens, layout, cards, scoreboard, dialogs
- Jersey 25 and Pixelify Sans — bundled fonts
- Local `commands.json` — Git command + description deck
- Web Audio (`Audio`) — background music and click SFX

## Contributing

Contributions are welcome and appreciated. Open an issue or send a PR if you want to grow the command list, tighten audio, improve mobile layout, or teach me something I missed.

## Author

Soikat Saha — design and implementation

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- The Odin Project community and curriculum — Memory Card assignment and guidance
- [MySafeInfo Git Commands](https://mysafeinfo.com/content/datasets/gitcommands) — command deck curated from their Data API (`https://mysafeinfo.com/api/data/gitcommands`)
- MDN — dialogs, flex layouts, and browser audio docs when things got fiddly
