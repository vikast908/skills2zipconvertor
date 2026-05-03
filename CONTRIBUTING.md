# Contributing

Thanks for improving Skills to ZIP Converter.

## Local setup

Open `index.html` directly in a browser for manual testing.

For automated UI checks:

```bash
npm install
npm test
```

## Guidelines

- Keep the converter browser-only.
- Do not upload user files to a server.
- Keep dependencies out of the runtime page unless they are clearly needed.
- Test single-file, multiple-file, duplicate-file, and invalid-file flows.
