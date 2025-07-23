# Code Editor

A modern, web-based code editor built with Angular 20 featuring syntax highlighting, line numbers, and support for multiple programming languages.

## Features

- **Syntax Highlighting**: Powered by highlight.js with support for 25+ programming languages
- **Line Numbers**: Visual line numbering for better code navigation
- **Language Selection**: Dropdown to select from supported programming languages
- **Tab Support**: Proper indentation with Tab/Shift+Tab functionality
- **Modern UI**: Clean, responsive design with dark mode support
- **Real-time Highlighting**: Code is highlighted as you type

## Supported Languages

- JavaScript, TypeScript
- Python, Java, C#, C++, C
- HTML, CSS, JSON, XML
- SQL, Markdown
- Bash, PowerShell
- PHP, Ruby, Go, Rust
- Kotlin, Swift, Dart, Scala
- YAML, Dockerfile
- And more...

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   └── code-editor/          # Main code editor component
│   │       ├── code-editor.component.ts
│   │       └── code-editor.component.css
│   ├── services/
│   │   └── syntax-highlighting.service.ts  # Highlight.js integration
│   ├── app.component.ts          # Main app component
│   ├── app.component.html        # App template
│   └── app.component.css         # App styles
└── styles.css                   # Global styles
```

## Technologies Used

- **Angular 20**: Latest Angular framework with signal-based reactivity
- **Highlight.js**: Syntax highlighting library
- **TypeScript**: Type-safe development
- **CSS3**: Modern styling with dark mode support

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project for production, run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. The production build is optimized for performance and speed.

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Open the application in your browser
2. Select a programming language from the dropdown
3. Start typing code in the editor
4. Watch as syntax highlighting is applied in real-time
5. Use Tab/Shift+Tab for indentation control

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Additional Resources

- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [Highlight.js Documentation](https://highlightjs.org/)
- [Angular Signals Guide](https://angular.dev/guide/signals)

---

*Built with Angular 20 and modern web technologies*
