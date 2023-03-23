# Thematic Break Tool for Presidium WYSIWYG Editor

## Installation

### Install via NPM

Get the package

```shell
yarn add @spandigital/presidium-wysiwyg-thematic-break
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...
  
  tools: {
    ...
    thematic: ThematicBreak
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
    "type" : "thematic",
    "data" : {}
}
```
## Releases

### Master
To release a new non-beta version, do the following:

1. Merge your changes into `master`
2. Increment the version in `package.json` (The release GitHub action will not run unless this is done)
3. run `npm i`
4. Commit and push

The package will then be published to the @spandigital registry.

### Develop
Beta packages are automatically published whenever a commit is pushed to the `develop` branch.