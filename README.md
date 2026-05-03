# Skills to ZIP Converter

A small browser-only page for converting `.skill` files into `.zip` downloads.

The conversion runs locally in the browser. Files are not uploaded to a server; the page validates that the selected `.skill` file is ZIP-backed, then downloads the same archive contents with a `.zip` extension.

## Live page

After GitHub Pages finishes deploying, the converter will be available at:

https://vikast908.github.io/skills2zipconvertor/

## Features

- Upload one or multiple `.skill` files
- Drag-and-drop support
- ZIP signature validation
- Individual ZIP downloads
- `Download all ZIPs` action for multiple converted files
- Appends newly uploaded files instead of replacing the current list
- Duplicate-file detection
- Per-file remove actions
- Local-only privacy note
- Sample `.skill` demo button
- Clear success and error states
- Mobile-friendly sticky batch download action
- No build step or server required

## Usage

Open `index.html` in a browser, upload one or more `.skill` files, then download the converted `.zip` files.

## Testing

Install dev dependencies and run the Playwright check:

```bash
npm install
npm test
```

## Development

This is a static HTML, CSS, and JavaScript project. Edit `index.html` directly and refresh the browser to test changes.

## Privacy

The app does not upload files. Conversion happens in the browser using the selected file contents.
