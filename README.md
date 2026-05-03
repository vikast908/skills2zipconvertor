# Skills to ZIP Converter

A small browser-only page for converting `.skill` files into `.zip` downloads.

The conversion runs locally in the browser. Files are not uploaded to a server; the page validates that the selected `.skill` file is ZIP-backed, then downloads the same archive contents with a `.zip` extension.

## Features

- Upload one or multiple `.skill` files
- Drag-and-drop support
- ZIP signature validation
- Individual ZIP downloads
- `Download all ZIPs` action for multiple converted files
- Clear success and error states
- No build step or server required

## Usage

Open `index.html` in a browser, upload one or more `.skill` files, then download the converted `.zip` files.

## Development

This is a static HTML, CSS, and JavaScript project. Edit `index.html` directly and refresh the browser to test changes.
