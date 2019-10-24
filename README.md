## aframe-lookingglass-component

[![Version](http://img.shields.io/npm/v/aframe-lookingglass-component.svg?style=flat-square)](https://npmjs.org/package/aframe-lookingglass-component)
[![License](http://img.shields.io/npm/l/aframe-lookingglass-component.svg?style=flat-square)](https://npmjs.org/package/aframe-lookingglass-component)

A component to add http://lookingglassfactory.com renderer to A-Frame

For [A-Frame](https://aframe.io).

### API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
|          |             |               |

### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.9.2/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-lookingglass-component@1.0.0/dist/aframe-lookingglass-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity lookingglass="foo: bar"></a-entity>
  </a-scene>
</body>
```

#### npm

Install via npm:

```bash
npm install aframe-lookingglass-component
```

Then require and use.

```js
require('aframe');
require('aframe-lookingglass-component');
```
