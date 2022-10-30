# vite-plugin-clean

[![npm](https://d25lcipzij17d.cloudfront.net/badge.svg?id=js&r=r&type=6e&v=0.0.2&x2=0)](https://github.com/z-ti/vite-plugin-clean)

A vite plugin to remove/clean your build folder(s).

## Table of Contents

1.  [Installation](#installation)
2.  [Usage](#usage)
3.  [Issues](#issues)
4.  [License](#license)

### Installation

<a name="installation"></a>

```bash
  npm i --save-dev vite-plugin-clean
```

```bash
  yarn add --dev vite-plugin-clean
```

### Usage

<a name="usage"></a>

Here's an example vite config illustrating how to use this plugin

**vite.config.js**
```js
import cleanPlugin from 'vite-plugin-clean';
export default {
  plugins: [cleanPlugin()],
}
```
<h2 align="center">Options</h2>

You can pass a hash of configuration options to `vite-plugin-clean`.
Allowed values are as follows:

|Name|Type|Default|Description|
|:--:|:--:|:-----:|:----------|
|**`targetFiles`**|`{Array.<string>}`|`['dist']`|List of directories removed before packing the file|

Here's an example vite config illustrating how to use these options

**vite.config.js**
```js
import cleanPlugin from 'vite-plugin-clean';
export default {
  plugins: [cleanPlugin(
    {
      targetFiles: ['dist', 'test']
    }
  )],
}
```

### Issues

<a name="issues"></a>

If you encounter some problems during use, please click here [Issue Report](https://github.com/z-ti/vite-plugin-clean/issues)

### License

<a name="license"></a>

[MIT](https://github.com/z-ti/vite-plugin-clean/blob/master/LICENSE)

Copyright (c) 2022-present flyfox
