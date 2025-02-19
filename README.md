# vite-plugin-clean

[![npm](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&type=6e&v=2.0.1&x2=0)](https://github.com/z-ti/vite-plugin-clean)

A Vite plugin to remove/clean your build files or folders before building.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Options](#options)
4. [Notes](#notes)
5. [Issues](#issues)
6. [License](#license)

### Installation

<a name="installation"></a>

You can install the plugin using npm or yarn:

```bash
npm i --save-dev vite-plugin-clean
```

```bash
yarn add --dev vite-plugin-clean
```

### Usage

<a name="usage"></a>

To use the plugin, add it to your Vite configuration file (`vite.config.js` or `vite.config.ts`). Here's an example:

**vite.config.js**
```javascript
import { defineConfig } from 'vite'
import cleanPlugin from 'vite-plugin-clean'

export default defineConfig({
  plugins: [
    cleanPlugin()
  ]
})
```
By default, the plugin will clean the `dist` directory before building.


### Options

<a name="options"></a>

You can customize the plugin's behavior by passing a configuration object. The following options are available:

| Name           | Type                     | Default     | Description                                                                 |
|:---------------|:-------------------------|:------------|:----------------------------------------------------------------------------|
| **`targetFiles`** | `Array<string> \| string` | `['dist']`  | List of files or directories to be removed before the build process starts. |

### Example Configuration

**vite.config.js**
```javascript
import { defineConfig } from 'vite'
import cleanPlugin from 'vite-plugin-clean'

export default defineConfig({
  plugins: [
    cleanPlugin({
      targetFiles: ['dist', 'test'] // Clean both 'dist' and 'test' directories
    })
  ]
})
```

Or, if you want to clean specific files:

**vite.config.js**
```javascript
import { defineConfig } from 'vite'
import cleanPlugin from 'vite-plugin-clean'

export default defineConfig({
  plugins: [
    cleanPlugin({
      targetFiles: ['bak.zip', 'test.js', 'demo.html'] // Clean specific files
    })
  ]
})
```

### Notes

<a name="notes"></a>

- **Vite Version Compatibility**: This plugin is designed to work with the latest versions of Vite. Ensure you are using a recent version of Vite to avoid compatibility issues. If you encounter any problems, consider updating Vite to the latest version.
- **File Deletion**: Be cautious when specifying files or directories in the `targetFiles` option. The plugin will permanently delete the specified files or folders before the build process.

### Issues

<a name="issues"></a>

If you encounter any issues or have suggestions for improvements, please click here [Issue Report](https://github.com/z-ti/vite-plugin-clean/issues)

### License

<a name="license"></a>

[MIT](https://github.com/z-ti/vite-plugin-clean/blob/master/LICENSE)

Copyright (c) 2022-present flyfox
