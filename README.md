# Frontend React Template

A clean starter template for React projects that use **npm** and **Vite**. It gives you a ready-to-run dev server, production builds, ESLint with React-aware rules, and a minimal `src/` structure.

This template is intentionally lightweight: no TypeScript, Sass, Prettier, or testing setup by default. Add those pieces only when a project actually needs them.

## Getting Started

This repository is marked as a GitHub template, click **Use this template** and create a new repository from it.

Try it in the browser with [StackBlitz](https://stackblitz.com/github/soikat27/frontend-react-template).

Or start locally with a clean copy (no commit history from this template):

```bash
npx tiged soikat27/frontend-react-template <my-app>
cd my-app
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Available Scripts

- `npm run dev` starts the local Vite development server.
- `npm run build` creates a production build in `dist/`.
- `npm run preview` serves the production build locally so you can check it before deploying.
- `npm run lint` checks project files with ESLint.

## Linting

This template uses **ESLint** for linting. Configuration lives in the project so every clone uses the same rules:

- `eslint.config.js` — ESLint rules and ignored paths (`dist/` is ignored)

Run checks from the terminal:

```bash
npm run lint
```

For editor support, install the ESLint extension if available in your code editor (available in VS Code). The extension should detect the package and config file in this repo. Use the project setup as the source of truth rather than relying only on global editor settings.

## Vite Config

`vite.config.js` enables the React plugin and opens the browser automatically when you run the development server.

## Customizing the Template

After creating a new project from this template:

- Update the document title in `index.html`
- Build your UI in `src/App.jsx`
- Adjust styles in `src/App.css` and `src/index.css`
- Put static files (favicons, images served as-is) in `public/`
- Update package metadata in `package.json`
- Remove scripts or dependencies you do not need

## Author

- **Soikat Saha**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
