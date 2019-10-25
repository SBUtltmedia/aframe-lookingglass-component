(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/holoplay.min.js":
/*!******************************!*\
  !*** ./dist/holoplay.min.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//Copyright 2017-2019 Looking Glass Factory Inc. All rights reserved. Unauthorized copying or distribution of this file, and the source code contained herein, is strictly prohibited. Version 0.2.3\nfunction HoloPlay(c, f, w, m, p, g) {\n  var l,\n      u,\n      h,\n      E,\n      x,\n      H,\n      b,\n      y,\n      T,\n      R,\n      V,\n      W,\n      X,\n      z,\n      I,\n      M,\n      Y,\n      O,\n      C,\n      P,\n      k,\n      S,\n      d,\n      q,\n      s,\n      v = this,\n      D = !1,\n      F = !1,\n      L = [\"square\", \"left\", \"right\", \"circle\"];\n  this.useButtons = !0;\n  var U = {\n    configVersion: \"1.0\",\n    serial: \"00000\",\n    pitch: {\n      value: 49.825218200683594\n    },\n    slope: {\n      value: 5.2160325050354\n    },\n    center: {\n      value: -.23396748304367065\n    },\n    viewCone: {\n      value: 40\n    },\n    invView: {\n      value: 1\n    },\n    verticalAngle: {\n      value: 0\n    },\n    DPI: {\n      value: 338\n    },\n    screenW: {\n      value: 2560\n    },\n    screenH: {\n      value: 1600\n    },\n    flipImageX: {\n      value: 0\n    },\n    flipImageY: {\n      value: 0\n    },\n    flipSubp: {\n      value: 0\n    }\n  };\n\n  function j(e, n, o, i, t, r, a, l, u) {\n    var d = n * (window.innerWidth / e);\n    d *= Math.cos(Math.atan(1 / o)), C.uniforms.pitch.value = d;\n    var s = window.innerHeight / (window.innerWidth * o);\n    1 == a && (s *= -1), C.uniforms.tilt.value = s, C.uniforms.center.value = r;\n    var v = document.body.getBoundingClientRect();\n    document.body.getBoundingClientRect().left, document.body.getBoundingClientRect().top;\n    C.uniforms.screenW.value = t, C.uniforms.screenH.value = i, C.uniforms.windowInnerW.value = v.width, C.uniforms.windowInnerH.value = v.height, C.uniforms.windowOuterW.value = window.outerWidth, C.uniforms.windowOuterH.value = window.outerHeight, C.uniforms.windowInnerX.value = window.screenX + v.left, C.uniforms.windowInnerY.value = window.screenY + v.top + (window.outerHeight - window.innerHeight), C.uniforms.windowOuterX.value = window.screenX, C.uniforms.windowOuterY.value = window.screenY, C.uniforms.invView.value = u, C.uniforms.flipX.value = a, C.uniforms.flipY.value = l, C.uniforms.subp.value = 1 / (3 * t), C.uniforms.tilesX.value = X, C.uniforms.tilesY.value = z, C.needsUpdate = !0;\n  }\n\n  function e(e, n, o) {\n    e.addEventListener ? e.addEventListener(n, o, !1) : e.attachEvent && e.attachEvent(\"on\" + n, o);\n  }\n\n  HoloPlay.prototype.lookAt = function (e, n) {\n    e instanceof THREE.Vector3 ? (W = e, console.log(x), void 0 === n && (n = x), n.lookAt(e)) : e instanceof THREE.Object3D ? (W = e.position, void 0 === n && (n = x), n.lookAt(e)) : console.logWarning(\"Target must be a THREE.Vector3.\");\n  }, HoloPlay.prototype.render = function (e, n, o) {\n    if (D) {\n      if (s && v.useButtons) {\n        for (var i = navigator.getGamepads(), t = 0; t < i.length; t++) if (null != i[t] && -1 < i[t].id.indexOf(\"HoloPlay\")) {\n          d = i[t].buttons;\n          break;\n        }\n\n        for (t = 0; t < d.length; t++) (void 0 !== q || d[t].pressed) && (void 0 === q && d[t].pressed ? (B.index = t, B.name = L[t], document.dispatchEvent(B)) : !q[t] && d[t].pressed ? (B.index = t, B.name = L[t], document.dispatchEvent(B)) : q[t] && d[t].pressed ? (G.index = t, G.name = L[t], document.dispatchEvent(G)) : q[t] && !d[t].pressed && (A.index = t, A.name = L[t], document.dispatchEvent(A)), q[t] = d[t].pressed);\n      }\n\n      if (void 0 === e && (e = E), void 0 === n && (n = x), void 0 === o && (o = h), H) {\n        if (null == b) return void alert(\"No calibration found! Please ensure that your Looking Glass is plugged in.\");\n        F && (l == window.screenX && u == window.screenY || j(b.DPI.value, b.pitch.value, b.slope.value, b.screenH.value, b.screenW.value, b.center.value, b.flipImageX.value, b.flipImageY.value, b.invView.value), l = window.screenX, u = window.screenY);\n        var r = new THREE.Vector3(1, 0, 0);\n        if (n.right = r.applyQuaternion(n.quaternion), !1 === T) n.getWorldDirection(R), R.multiplyScalar(V), W.addVectors(n.position, R);else {\n          var a = n.position.distanceTo(W);\n          n.near = Y * a / V, n.far = O * a / V, n.updateProjectionMatrix();\n        }\n        !function (e, n) {\n          var o = new THREE.Vector3(n.position.x, n.position.y, n.position.z),\n              i = -M / 2,\n              t = M / 2,\n              r = W.distanceTo(n.position),\n              a = 2 * r * Math.tan(.5 * THREE.Math.degToRad(n.fov));\n          y.copy(n);\n\n          for (var l = 0; l < I; l++) {\n            var u = y.cameras[l];\n            u.position.copy(o), u.rotation.copy(n.rotation);\n            var d = THREE.Math.degToRad(THREE.Math.lerp(i, t, l / (I - 1))),\n                s = r * Math.tan(d),\n                v = new THREE.Vector3(n.right.x * s, n.right.y * s, n.right.z * s);\n            u.position.add(v), u.updateMatrixWorld(), u.projectionMatrix.copy(n.projectionMatrix), u.projectionMatrix.elements[8] = -2 * s / (a * n.aspect);\n          }\n\n          w.setRenderTarget(P), w.render(e, y);\n        }(e, n), o.setRenderTarget(null), o.render(k, S);\n      } else 0 != n.projectionMatrix.elements[8] && (n.projectionMatrix.elements[8] = 0), o.setRenderTarget(null), o.render(e, n);\n    }\n  };\n  var B = new CustomEvent(\"buttonDown\", {\n    bubbles: !0,\n    cancelable: !1,\n    name: \"none\",\n    index: -1\n  }),\n      G = new CustomEvent(\"buttonPressed\", {\n    bubbles: !0,\n    cancelable: !1,\n    name: \"none\",\n    index: -1\n  }),\n      A = new CustomEvent(\"buttonUp\", {\n    bubbles: !0,\n    cancelable: !1,\n    name: \"none\",\n    index: -1\n  });\n  e(window, \"gamepadconnected\", function (e) {\n    var n = navigator.getGamepads()[e.gamepad.index];\n    console.log(\"Gamepad connected at index %d: %s. %d buttons, %d axes.\", n.index, n.id, n.buttons.length, n.axes.length), -1 < n.id.indexOf(\"HoloPlay\") && (s = !0);\n  }), e(document, \"mouseout\", function (e) {\n    var n = (e = e || window.event).relatedTarget || e.toElement;\n    n && \"HTML\" != n.nodeName || F || (F = !0);\n  }), e(document, \"mouseover\", function (e) {\n    \"HTML\" != ((e = e || window.event).relatedTarget || e.toElement) && F && (F = !1);\n  }), e(window, \"resize\", function (e) {\n    e = e || window.event, j(b.DPI.value, b.pitch.value, b.slope.value, b.screenH.value, b.screenW.value, b.center.value, b.flipImageX.value, b.flipImageY.value, b.invView.value);\n  }), e(document, \"keydown\", function (e) {\n    220 === (e = e || window.event).keyCode && (H = !H);\n  });\n  var N = \"varying vec2 iUv;void main() {iUv = uv;vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);gl_Position = projectionMatrix * modelViewPosition;}\",\n      _ = \"uniform sampler2D quiltTexture;uniform float pitch;uniform float tilt;uniform float center;uniform float invView;uniform float flipX;uniform float flipY;uniform float subp;uniform float tilesX;uniform float tilesY;uniform float windowInnerW;uniform float windowInnerH;uniform float windowOuterW;uniform float windowOuterH;uniform float windowInnerX;uniform float windowInnerY;uniform float windowOuterX;uniform float windowOuterY;uniform float screenW;uniform float screenH;varying vec2 iUv;vec2 texArr(vec3 uvz) {float z = floor(uvz.z * tilesX * tilesY);float x = (mod(z, tilesX) + uvz.x) / tilesX;float y = (floor(z / tilesX) + uvz.y) / tilesY;return vec2(x, y);}float Remap(float value, float from1, float to1, float from2, float to2){return (value - from1) / (to1 - from1) * (to2 - from2) + from2;}void main(){vec4 rgb[3];vec3 nuv = vec3(iUv.xy, 0.0);nuv.x = (1.0 - flipX) * nuv.x + flipX * (1.0 - nuv.x);nuv.y = (1.0 - flipY) * nuv.y + flipY * (1.0 - nuv.y);for (int i = 0; i < 3; i++) {nuv.z = (iUv.x + float(i) * subp + iUv.y * tilt) * pitch - center;nuv.z = mod(nuv.z + ceil(abs(nuv.z)), 1.0);nuv.z = (1.0 - invView) * nuv.z + invView * (1.0 - nuv.z);rgb[i] = texture2D(quiltTexture, texArr(vec3(iUv.x, iUv.y, nuv.z)));}gl_FragColor = vec4(rgb[0].r, rgb[1].g, rgb[2].b, 1);}\";\n  !function () {\n    if (function (n) {\n      navigator.appVersion.indexOf(\"Win\"), navigator.appVersion.indexOf(\"Mac\"), navigator.appVersion.indexOf(\"X11\"), navigator.appVersion.indexOf(\"Linux\");\n\n      var e = new WebSocket(\"ws://localhost:11222/\"),\n          i = function () {\n        e.close();\n      },\n          t = setTimeout(function () {\n        var e = \"Calibration not found in internal memory.\";\n        n ? console.log(e) : alert(e), i();\n      }, 800);\n\n      e.onmessage = function (e) {\n        var n, o;\n        console.log(\"New calibration loaded from internal memory.\"), n = e.data, console.log(\"Calibration in local storage overwritten.\"), localStorage.Config = n, void 0 === (o = e.data) || \"\" === o ? (b = U, alert(\"No Looking Glass display connected; using default calibration data. Please ensure your Looking Glass is connected to your computer via USB and reload the page.\")) : b = JSON.parse(o), j(b.DPI.value, b.pitch.value, b.slope.value, b.screenH.value, b.screenW.value, b.center.value, b.flipImageX.value, b.flipImageY.value), M = b.viewCone.value, clearTimeout(t), D = !0, i();\n      }, e.onerror = function (e) {\n        confirm(\"Three.js driver not detected! Click OK to download. If you have already installed the driver, please make sure port 11222 is open.\") && (window.location.href = \"http://look.glass/threejsdriver\"), i();\n      };\n    }(!0), H = !0, b = null, void 0 === g && (g = !0), void 0 === m) {\n      var e = new THREE.Vector3();\n      f.getWorldDirection(e), V = Math.max(f.position.length(), 1), W = new THREE.Vector3(0, 0, 0), e.multiplyScalar(V), m = [f.position.x + e.x, f.position.y + e.y, f.position.z + e.z];\n    } else m instanceof THREE.Vector3 && (m = [m.x, m.y, m.z]), W = new THREE.Vector3(m[0], m[1], m[2]), V = Math.max(W.distanceTo(f.position), 1);\n\n    void 0 === p && (p = !0), h = w, x = f, E = c, T = p, R = new THREE.Vector3(), f.getWorldDirection(R);\n    var n = 2048;\n    X = 4, z = 8, g && (n = 4096, X = 5, z = 9), P = new THREE.WebGLRenderTarget(n, n, {\n      format: THREE.RGBFormat\n    }), I = X * z, M = 40, Y = f.near, O = f.far;\n\n    for (var o = n / X, i = n / z, t = [], r = 0; r < z; r++) for (var a = 0; a < X; a++) {\n      var l = new THREE.PerspectiveCamera();\n      l.viewport = new THREE.Vector4(a * o, r * i, o, i), t.push(l);\n    }\n\n    y = new THREE.ArrayCamera(t);\n    var u = {\n      uniforms: {\n        quiltTexture: {\n          value: P.texture\n        },\n        pitch: {\n          value: 0\n        },\n        tilt: {\n          value: 0\n        },\n        center: {\n          value: 0\n        },\n        invView: {\n          value: 0\n        },\n        flipX: {\n          value: 0\n        },\n        flipY: {\n          value: 0\n        },\n        subp: {\n          value: 0\n        },\n        ri: {\n          value: 0\n        },\n        bi: {\n          value: 2\n        },\n        numViews: {\n          value: 0\n        },\n        tilesX: {\n          value: 0\n        },\n        tilesY: {\n          value: 0\n        },\n        windowInnerW: {\n          value: 0\n        },\n        windowInnerH: {\n          value: 0\n        },\n        windowOuterW: {\n          value: 0\n        },\n        windowOuterH: {\n          value: 0\n        },\n        windowInnerX: {\n          value: 0\n        },\n        windowInnerY: {\n          value: 0\n        },\n        windowOuterX: {\n          value: 0\n        },\n        windowOuterY: {\n          value: 0\n        },\n        screenW: {\n          value: 0\n        },\n        screenH: {\n          value: 0\n        }\n      },\n      vertexShader: N,\n      fragmentShader: _\n    };\n    C = new THREE.ShaderMaterial(u), k = new THREE.Scene();\n    var d,\n        s = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight),\n        v = new THREE.Mesh(s, C);\n    k.add(v), (S = new THREE.OrthographicCamera(-window.innerWidth / 2, window.innerWidth / 2, window.innerHeight / 2, -window.innerHeight / 2, 1, 3)).position.z = 2, k.add(S), q = [!1, !1, !1, !1], (d = document.createElement(\"div\")).innerHTML = '<input type=\"button\" style=\"margin:20px; position:fixed; top:0px; right:0px; z-index: 10000; height:50px; width:150px;\" id=\"fullscreenButton\" value=\"Enter Full Screen Mode\"/>', d.setAttribute(\"id\", \"fullscreen\"), document.body.appendChild(d), document.getElementById(\"fullscreen\").addEventListener(\"click\", function () {\n      h.domElement.requestFullscreen ? h.domElement.requestFullscreen() : h.domElement.mozRequestFullScreen ? h.domElement.mozRequestFullScreen() : h.domElement.webkitRequestFullscreen ? h.domElement.webkitRequestFullscreen() : h.msRequestFullscreen && h.domElement.msRequestFullscreen();\n    });\n  }();\n}\n\n//# sourceURL=webpack:///./dist/holoplay.min.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* global AFRAME */\nif (typeof AFRAME === 'undefined') {\n  throw new Error('Component attempted to register before AFRAME was available.');\n}\n/**\n * Looking Glass component for A-Frame.\n */\n\n\nAFRAME.registerComponent('lookingglass', {\n  schema: {},\n\n  /**\n   * Set if component needs multiple instancing.\n   */\n  multiple: false,\n\n  /**\n   * Called once when component is attached. Generally for initial setup.\n   */\n  init: function () {\n    var scene = this.el.sceneEl.object3D;\n    var renderer = this.el.renderer; // var camera = this.el.camera;\n\n    var camera = new THREE.PerspectiveCamera(12.5, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.set(0, 0, 20);\n    this.el.camera = null;\n    console.log(scene, camera, renderer); // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n    // var scene = document.querySelector('a-scene').object3D;\n    // var renderer = this.el.renderer;\n    //\n    // var cameraEl = document.querySelector('a-entity[camera]');\n    // if (!cameraEl) {\n    //   cameraEl = document.querySelector('a-camera');\n    // }\n    // console.log(scene, renderer, cameraEl)\n    // var camera = new THREE.PerspectiveCamera(13.5, window.innerWidth / window.innerHeight, 0.1, 1000);\n    // camera.position.set(0, 0, 20);\n    // console.log(camera)\n    // scene.onAfterRender = (renderer, scene, camera)=> {   this.holoplay.render() }\n    // console.log(cameraEl)\n    // document.querySelector('#cameraHolder').setObject3D('camera', camera);\n    // cameraEl.parentNode.removeChild(cameraEl);\n    // renderer = console.log()\n\n    this.holoplay = new HoloPlay(scene, camera, renderer); // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n    // var holoplay = this.holoplay\n    //   var oldRender = this.el.renderer.render;\n    //   this.el.renderer.render = function() {\n    //     //  console.log(arguments[1].type)\n    //\n    //     if (arguments[1].type == \"PerspectiveCamera\") {\n    //       oldRender.apply(this, arguments)\n    //\n    //     } else {\n    //       holoplay.render()\n    //     }\n    // }\n    // scene.remove(cameraEl.getObject3D('camera'))\n    // var tmpRender= renderer.render().clone()\n    // renderer.render= ()=>{\n    //   tmpRender()\n    // this.holoplay.render()\n    // scene.onAfterRender = (renderer, scene, camera)=> {   this.holoplay.render() }\n    //     var scene2 = document.querySelector('a-scene').getAttribute('lookingglass');\n    //\n    //         // THREE may swap the camera used for the rendering if in VR, so we pass it to tock\n    //         if (self.isPlaying) { self.tock(self.time, self.delta, camera); }\n    //       };\n    // console.log(this.el.renderer);\n  },\n\n  /**\n   * Called when component is attached and when component data changes.\n   * Generally modifies the entity based on the data.\n   */\n  update: function () {},\n\n  /**\n   * Called when a component is removed (e.g., via removeAttribute).\n   * Generally undoes all modifications to the entity.\n   */\n  remove: function () {},\n\n  /**\n   * Called on each scene tick.\n   */\n  tick: function () {\n    this.holoplay.render();\n  },\n\n  /**\n   * Called when entity pauses.\n   * Use to stop or remove any dynamic or background behavior such as events.\n   */\n  pause: function () {},\n\n  /**\n   * Called when entity resumes.\n   * Use to continue or add any dynamic or background behavior such as events.\n   */\n  play: function () {},\n\n  /**\n   * Event handlers that automatically get attached or detached based on scene state.\n   */\n  events: {// click: function (evt) { }\n  }\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi ./index.js ./dist/holoplay.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! /Users/mogao/Desktop/aframe-lookingglass-component/index.js */\"./index.js\");\nmodule.exports = __webpack_require__(/*! /Users/mogao/Desktop/aframe-lookingglass-component/dist/holoplay.min.js */\"./dist/holoplay.min.js\");\n\n\n//# sourceURL=webpack:///multi_./index.js_./dist/holoplay.min.js?");

/***/ })

/******/ });
});