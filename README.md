<img src="public/favicon.svg" alt="Evergreen Code Editor" width="32" height="32">

# Evergreen Code Editor

A lightweight Angular 20 app showcasing a custom code editor with live syntax highlighting, line numbers, and basic editing helpers. Designed for integration into Evergreen ILS.

## Highlights

- Live syntax highlighting via highlight.js
- Custom TT2 (Template Toolkit) syntax highlighting, originally built for the Evergreen Docs site and refined for this project
   - Source: https://github.com/IanSkelskey/tt2-highlight.js
- Line numbers and cursor position indicator
- Tab/Shift+Tab indentation across single and multi-line selections
- File load/save using the File System Access API with a safe download fallback

## What’s in this repo

- `src/app/components/code-editor/` – standalone editor component (template, styles, behavior)
- `src/app/services/syntax-highlighting.service.ts` – highlight.js integration and language wiring
- `src/app/services/language-grammars.ts` – language configuration, including TT2
- `vendor/tt2-highlight/` – vendored assets used by the TT2 highlighter

## Supported languages (core)

JavaScript/TypeScript, HTML/CSS, JSON, Markdown, Bash, Python, and TT2 (Template Toolkit). Additional highlight.js grammars can be added as needed.

## Run locally

1) Install dependencies

```bash
npm install
```

2) Start the dev server

```bash
npm start
```

Open http://localhost:4200/ in your browser. The app reloads on file changes.

## Build

```bash
npm run build
```

Outputs production assets to `dist/`.

## License

MIT
