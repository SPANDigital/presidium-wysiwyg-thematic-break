![](https://badgen.net/badge/CodeX%20Editor/v2.0/blue)

# Delimiter Tool for CodeX Editor

Delimiter Tool for the [CodeX Editor](https://ifmo.su/editor).

![](https://capella.pics/de70e7f8-56cd-4779-848f-52c3f68deb47.jpg)

## Installation

### Install via NPM

Get the package

```shell
npm i --save-dev codex.editor.delimiter
```

Include module at your application

```javascript
const Delimiter = require('codex.editor.delimiter');
```

### Download to your project's source dir

1. Upload folder `dist` from repository
2. Add `dist/bundle.js` file to your page.

### Load from CDN

Get newest bundle path from [RawGit](https://rawgit.com) — open site and paste link to JS bundle in repository.

`https://github.com/codex-editor/delimiter/blob/master/dist/bundle.js`

> Note: use `production` link with commit hash to avoid issues with caching.

Then require this script on page with CodeX Editor.

```html
<script src="..."></script>
```

## Usage

Add a new Tool to the `tools` property of the CodeX Editor initial config.

```javascript
var editor = CodexEditor({
  ...
  
  tools: {
    ...
    delimiter: Delimiter,
  }
  
  ...
});
```

## Config Params

This Tool has no config params

## Output data

This Tool returns empty object.

```json
{
    "type" : "delimiter",
    "data" : {}
}
```
