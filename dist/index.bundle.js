/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `table,
tr,
tbody {
  border-spacing: 0px;
  margin: 5px;
  padding: 0px;
}

.rotated {
  transform: rotate(90deg);
}

h3 {
  margin: 0px;
}

#carrier,
#computer-carrier {
  max-height: 180px;
}

#submarine,
#battleship,
#computer-submarine,
#computer-battleship {
  max-height: 100px;
}

#destroyer,
#vessel,
#computer-destroyer,
#computer-vessel {
  max-height: 50px;
}

.imgBox {
  display: flex;
  align-items: flex-end;
}

.gameboard {
  display: flex;
  max-height: 300px;
  flex-wrap: nowrap;
  justify-content: space-evenly;
}
.vl {
  border-left: 6px solid green;
  height: 100vh;
}

img {
  margin: 0px;
}

.row-data {
  margin: 5px;
  padding: 0px;
  border-spacing: 0px;
  max-height: 30px;
}
body {
  margin: 0px;
}

.grid {
  border: 1px solid blue;
}

.grid-box {
  border: 1px solid blue;
  height: 30px;
  width: 30px;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,WAAW;AACb;;AAEA;;EAEE,iBAAiB;AACnB;;AAEA;;;;EAIE,iBAAiB;AACnB;;AAEA;;;;EAIE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,iBAAiB;EACjB,6BAA6B;AAC/B;AACA;EACE,4BAA4B;EAC5B,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;AACb;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,WAAW;AACb","sourcesContent":["table,\ntr,\ntbody {\n  border-spacing: 0px;\n  margin: 5px;\n  padding: 0px;\n}\n\n.rotated {\n  transform: rotate(90deg);\n}\n\nh3 {\n  margin: 0px;\n}\n\n#carrier,\n#computer-carrier {\n  max-height: 180px;\n}\n\n#submarine,\n#battleship,\n#computer-submarine,\n#computer-battleship {\n  max-height: 100px;\n}\n\n#destroyer,\n#vessel,\n#computer-destroyer,\n#computer-vessel {\n  max-height: 50px;\n}\n\n.imgBox {\n  display: flex;\n  align-items: flex-end;\n}\n\n.gameboard {\n  display: flex;\n  max-height: 300px;\n  flex-wrap: nowrap;\n  justify-content: space-evenly;\n}\n.vl {\n  border-left: 6px solid green;\n  height: 100vh;\n}\n\nimg {\n  margin: 0px;\n}\n\n.row-data {\n  margin: 5px;\n  padding: 0px;\n  border-spacing: 0px;\n  max-height: 30px;\n}\nbody {\n  margin: 0px;\n}\n\n.grid {\n  border: 1px solid blue;\n}\n\n.grid-box {\n  border: 1px solid blue;\n  height: 30px;\n  width: 30px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/computerTurn.js":
/*!*************************************!*\
  !*** ./src/modules/computerTurn.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt),
/* harmony export */   placeRandomAttack: () => (/* binding */ placeRandomAttack)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./players */ "./src/modules/players.js");



function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
console.log(getRandomInt(8));

function placeRandomAttack(yCo, xCo) {
  const selectedCell = document.querySelector(
    `[y-data="${yCo}"][x-data="${xCo}"]`
  );

  if (!selectedCell) {
    console.error(`couldn't find grid cell - tried ${yCo} and ${xCo}`);
    return;
  }

  // Check the gameboard BEFORE calling receiveAttack
  const isShipHit = _players__WEBPACK_IMPORTED_MODULE_1__.humanPlayer.gameboard[yCo][xCo] === "x";

  if (
    (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.receiveAttack)(yCo, xCo, _players__WEBPACK_IMPORTED_MODULE_1__.humanPlayer, _players__WEBPACK_IMPORTED_MODULE_1__.computerPlayer) === "already been hit!"
  ) {
    placeRandomAttack(getRandomInt(8), getRandomInt(8));
  } else if (isShipHit) {
    selectedCell.src = "./img/explode.png";
  } else {
    selectedCell.src = "./img/miss.png";
  }
}


/***/ }),

/***/ "./src/modules/dragDrop.js":
/*!*********************************!*\
  !*** ./src/modules/dragDrop.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allowDrop: () => (/* binding */ allowDrop),
/* harmony export */   drop: () => (/* binding */ drop),
/* harmony export */   initializeDragAndDrop: () => (/* binding */ initializeDragAndDrop)
/* harmony export */ });
/* harmony import */ var _htmlChangeAspect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlChangeAspect.js */ "./src/modules/htmlChangeAspect.js");
/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ "./src/modules/gameboard.js");

 // Assuming this exists

function drag(ev) {
  const shipType = ev.target.id;
  console.log("Dragging shipType:", shipType);
  ev.dataTransfer.setData("text/plain", shipType); // Use standard MIME type
}

function allowDrop(event) {
  event.preventDefault(); // Allow the drop
}

function drop(event) {
  event.preventDefault();

  const shipType = event.dataTransfer.getData("shipType"); // `shipType` should match a `shipId`
  console.log("Dropping ship:", shipType);

  const configEntry = _htmlChangeAspect_js__WEBPACK_IMPORTED_MODULE_0__.shipsConfig.find((config) => config.shipId === shipType);
  if (!configEntry) {
    console.error(`Ship ID "${shipType}" not found in shipsConfig.`);
    return; // Stop if no match found
  }

  const aspectElement = document.querySelector(`#${configEntry.aspectId}`);
  if (!aspectElement) {
    console.error(`Aspect element not found for "${shipType}"`);
    return;
  }

  const aspect = aspectElement.textContent.split(": ")[1];
  const x = parseInt(event.target.getAttribute("x-data"));
  const y = parseInt(event.target.getAttribute("y-data"));

  const result = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__.placeShip)(y, x, _gameboard_js__WEBPACK_IMPORTED_MODULE_1__.humanPlayer, aspect.toLowerCase(), shipType);

  if (result === "placement out of bounds or taken") {
    console.log("Invalid placement!");
  } else {
    console.log(`Placed ${shipType} at (${y}, ${x}) facing ${aspect}`);
    document.getElementById(shipType).draggable = false;
  }
}

function initializeDragAndDrop() {
  _htmlChangeAspect_js__WEBPACK_IMPORTED_MODULE_0__.shipsConfig.forEach(({ shipId }) => {
    const shipElement = document.getElementById(shipId);
    if (shipElement) {
      console.log(`Attaching dragstart to ship: ${shipId}`);
      shipElement.addEventListener("dragstart", drag);
    } else {
      console.error(`Ship element not found: ${shipId}`);
    }
  });
}


/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   missedAttack: () => (/* binding */ missedAttack),
/* harmony export */   placeShip: () => (/* binding */ placeShip),
/* harmony export */   receiveAttack: () => (/* binding */ receiveAttack)
/* harmony export */ });
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players */ "./src/modules/players.js");
// Create a Gameboard class/factory.
// Note that we have not yet created any User Interface. We should know our code is coming together by running the tests. You shouldn’t be relying on console.log or DOM methods to make sure your code is doing what you expect it to.
// Gameboards should be able to place ships at specific coordinates by calling the ship factory or class.
// Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.
// Gameboards should keep track of missed attacks so they can display them properly.
// Gameboards should be able to report whether or not all of their ships have been sunk.



//Aspect = North, South, East, West
//yCo = where the starting pos of the placement is on the y axis
//xCo = where the starting pos of the placement is on the x axis
//shipLength = the ships.{ship}.length - how many places it will be put across
//Idea is that you choose an X/Y starting spot, and an aspect. Then we do an if formula to check that you can place there. If you can't becuse you're out of bounds throw an error.
//If you can place there, push an o to the gameboard array, and sequentially push based on the aspect (N,E,S,W) until the length of the ship has been reached.

function isPlacementValid(yCo, xCo, player, aspect, shipType) {
  const shipLength = player.ships[shipType].length;
  let tempY = yCo;
  let tempX = xCo;

  for (let index = 0; index < shipLength; index++) {
    // Check if the current coordinates are out of bounds
    if (
      tempY < 0 ||
      tempY >= player.gameboard.length ||
      tempX < 0 ||
      tempX >= player.gameboard[0].length
    ) {
      console.error(`Out of bounds: yCo=${tempY}, xCo=${tempX}`);
      return false;
    }

    // Check if the cell is already occupied
    if (player.gameboard[tempY][tempX] === "x") {
      console.error(`Overlap detected at: yCo=${tempY}, xCo=${tempX}`);
      return false;
    }

    // Adjust tempY and tempX based on the aspect for the next cell
    switch (aspect) {
      case "north":
        tempY--;
        break;
      case "east":
        tempX++;
        break;
      case "south":
        tempY++;
        break;
      case "west":
        tempX--;
        break;
    }
  }

  // If all checks pass, the placement is valid
  return true;
}

function placeShip(yCo, xCo, player, aspect, shipType) {
  if (isPlacementValid(yCo, xCo, player, aspect, shipType) === false) {
    if (player === _players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer) {
      const randInt = Math.floor(Math.random() * player.gameboard.length);
      placeShip(randInt, randInt, _players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer, aspect, shipType);
      console.log(_players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer.gameboard);
    } else {
      return "out of bounds";
    }
  } else {
    // Reset the ship's coordinates
    player.ships[shipType].coords = [];

    let tempY = yCo;
    let tempX = xCo;
    for (let index = 0; index < player.ships[shipType].length; index++) {
      player.gameboard[tempY][tempX] = "x";
      player.ships[shipType].coords.push([tempY, tempX]);

      // Adjust tempY and tempX based on the aspect for the next cell
      switch (aspect) {
        case "north":
          tempY--;
          break;
        case "east":
          tempX++;
          break;
        case "south":
          tempY++;
          break;
        case "west":
          tempX--;
          break;
      }
    }
    return "success";
  }
}

//receive attack
//Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.

function receiveAttack(yCo, xCo, beingAttacked, attacker) {
  console.log("y: ", yCo, "x: ", xCo);
  //check if place has already been hit
  if (beingAttacked.gameboard[yCo][xCo] === "o") {
    console.log("already been hit!");
  } else {
    //mark gameboard as hit
    beingAttacked.gameboard[yCo][xCo] = "o";
    let conditionMet = false;
    //loop through playeroneships.ship.coords and check if any of the value coords match yco/xco

    for (const [key, value] of Object.entries(beingAttacked.ships)) {
      if (value.coords) {
        for (const [shipY, shipX] of value.coords) {
          // console.log(
          //   `Checking coordinates: ${shipY}, ${shipX} against ${yCo}, ${xCo}`
          // );
          if (
            parseInt(shipY) === parseInt(yCo) &&
            parseInt(shipX) === parseInt(xCo)
          ) {
            conditionMet = true;
            console.log("Hit detected on ship:", key);
            beingAttacked.ships[key].getHit();
            beingAttacked.ships[key].isSunk();
            beingAttacked.totalLengthRemaining--;
            console.log(
              `Total ship spaces remaining for player: ${beingAttacked.totalLengthRemaining}!`
            );
            if (beingAttacked.ships[key].sunk) {
              console.log(`You sunk the ${key}!`);
            }
            return;
          }
        }
      }
    }

    if (!conditionMet) {
      missedAttack(attacker);
      console.log("Miss!");
    }
  }
}

// Gameboards should keep track of missed attacks so they can display them properly.
function missedAttack(currentPlayer) {
  currentPlayer.missedAttacksTotal++;
}


/***/ }),

/***/ "./src/modules/htmlChangeAspect.js":
/*!*****************************************!*\
  !*** ./src/modules/htmlChangeAspect.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAspectSwitching: () => (/* binding */ addAspectSwitching),
/* harmony export */   shipsConfig: () => (/* binding */ shipsConfig)
/* harmony export */ });
const shipsConfig = [
  {
    shipId: "carrier",
    buttonId: "human-button-carrier",
    aspectId: "human-aspect-carrier",
  },
  {
    shipId: "submarine",
    buttonId: "human-button-submarine",
    aspectId: "human-aspect-submarine",
  },
  {
    shipId: "battleship",
    buttonId: "human-button-battleship",
    aspectId: "human-aspect-battleship",
  },
  {
    shipId: "vessel",
    buttonId: "human-button-vessel",
    aspectId: "human-aspect-vessel",
  },
  {
    shipId: "destroyer",
    buttonId: "human-button-destroyer",
    aspectId: "human-aspect-destroyer",
  },
];

function addAspectSwitching(shipId, buttonId, aspectId) {
  const button = document.querySelector(`#${buttonId}`);
  const ship = document.querySelector(`#${shipId}`);
  const aspectText = document.querySelector(`#${aspectId}`);

  if (!button || !ship || !aspectText) {
    console.error(
      `Missing elements for shipId=${shipId}, buttonId=${buttonId}, aspectId=${aspectId}`
    );
    return; // Skip if any element is missing
  }

  let rotTracker = 0;

  button.addEventListener("click", () => {
    rotTracker = (rotTracker + 1) % 4; // Cycle through 0, 1, 2, 3
    const aspect = ["North", "East", "South", "West"][rotTracker];
    ship.classList.toggle("rotated");
    aspectText.textContent = `Aspect: ${aspect}`;
  });
}

// Loop through the configuration array and add event listeners
shipsConfig.forEach(({ shipId, buttonId, aspectId }) => {
  addAspectSwitching(shipId, buttonId, aspectId);
});


/***/ }),

/***/ "./src/modules/playGame.js":
/*!*********************************!*\
  !*** ./src/modules/playGame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   startGame: () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players */ "./src/modules/players.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _computerTurn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computerTurn */ "./src/modules/computerTurn.js");
/* harmony import */ var _htmlChangeAspect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./htmlChangeAspect */ "./src/modules/htmlChangeAspect.js");





function createGridElement(x, y, player) {
  const rows = document.querySelectorAll(".row-data");
  const lastRow = rows[rows.length - 1];
  const newImg = document.createElement("img");
  newImg.src = "./img/image.png";

  // Set class based on player
  if (player === _players__WEBPACK_IMPORTED_MODULE_0__.humanPlayer) {
    newImg.className = "grid-box human-grid-box";
  } else {
    newImg.className = "grid-box computer-grid-box";
  }

  // Set attributes for x and y coordinates
  newImg.style.margin = "1px";
  newImg.setAttribute("y-data", y);
  newImg.setAttribute("x-data", x);

  // Add event listeners
  if (player === _players__WEBPACK_IMPORTED_MODULE_0__.humanPlayer) {
    // Add dragover and drop event listeners
    newImg.addEventListener("dragover", (event) => {
      event.preventDefault(); // Allow the drop
    });
    newImg.addEventListener("drop", dropHandler); // Use dropHandler function
  } else {
    // For computer grid, add click event listener for attacks
    newImg.addEventListener("click", handlePlayerClick);
  }

  lastRow.append(newImg);
}

function dropHandler(event) {
  event.preventDefault();

  const shipType = event.dataTransfer.getData("text/plain");
  console.log("Dropped shipType:", shipType);

  if (!shipType) {
    console.error("No shipType found in dataTransfer.");
    return;
  }

  const configEntry = _htmlChangeAspect__WEBPACK_IMPORTED_MODULE_3__.shipsConfig.find((config) => config.shipId === shipType);

  if (!configEntry) {
    console.error(`Ship ID "${shipType}" not found in shipsConfig.`);
    return;
  }

  const aspectElement = document.querySelector(`#${configEntry.aspectId}`);
  if (!aspectElement) {
    console.error(`Aspect element not found for "${shipType}"`);
    return;
  }

  const aspect = aspectElement.textContent.split(": ")[1];
  const x = parseInt(event.target.getAttribute("x-data"));
  const y = parseInt(event.target.getAttribute("y-data"));

  const result = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(y, x, _players__WEBPACK_IMPORTED_MODULE_0__.humanPlayer, aspect.toLowerCase(), shipType);

  if (result === "out of bounds") {
    console.log("Invalid placement!");
  } else {
    console.log(`Placed ${shipType} at (${y}, ${x}) facing ${aspect}`);
    document.getElementById(shipType).draggable = false; // Disable further dragging

    // Update the aspect text to indicate the ship is placed
    aspectElement.textContent = `Ship Placed`;

    // Get the ship's coordinates
    const shipCoords = _players__WEBPACK_IMPORTED_MODULE_0__.humanPlayer.ships[shipType].coords;

    // Update the grid cells by changing the border to blue
    shipCoords.forEach(([yCoord, xCoord]) => {
      const gridCell = document.querySelector(
        `.human-grid-box[x-data="${xCoord}"][y-data="${yCoord}"]`
      );

      if (gridCell) {
        // Change the border to blue
        gridCell.style.border = "2px solid blue";
      } else {
        console.error(`Grid cell not found at x=${xCoord}, y=${yCoord}`);
      }
    });
  }
}

const humanTable = document.querySelector(".human-rows");
const computerTable = document.querySelector(".computer-rows");

function createNewRows(player) {
  const newRows = document.createElement("tr");
  newRows.className = "row-data";
  if (player === _players__WEBPACK_IMPORTED_MODULE_0__.humanPlayer) {
    humanTable.appendChild(newRows);
  } else {
    computerTable.appendChild(newRows);
  }
}

function createBoard(player) {
  for (let index = 0; index < player.gameboard[0].length; index++) {
    let y = index;
    createNewRows(player);
    for (let index = 0; index < player.gameboard[0].length; index++) {
      createGridElement(index, y, player);
    }
  }
}

// placeShip(5, 5, humanPlayer, "north", "carrier");
// placeShip(4, 4, humanPlayer, "north", "battleship");
// placeShip(3, 3, humanPlayer, "north", "submarine");
// placeShip(2, 2, humanPlayer, "north", "vessel");
// placeShip(1, 1, humanPlayer, "north", "destroyer");

function placeComputerShips() {
  function randInt(max) {
    return Math.floor(Math.random() * max);
  }
  function aspect() {
    const number = randInt(4);
    switch (number) {
      case 0:
        return "north";
      case 1:
        return "east";

      case 2:
        return "south";

      case 3:
        return "west";
    }
    return aspect;
  }
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(randInt(8), randInt(8), _players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer, aspect(), "carrier");
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(randInt(8), randInt(8), _players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer, aspect(), "battleship");
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(randInt(8), randInt(8), _players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer, aspect(), "submarine");
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(randInt(8), randInt(8), _players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer, aspect(), "vessel");
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(randInt(8), randInt(8), _players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer, aspect(), "destroyer");
  console.table(_players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer.gameboard);
}
function startGame() {
  createBoard(_players__WEBPACK_IMPORTED_MODULE_0__.humanPlayer);
  createBoard(_players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer);
  placeComputerShips();
}

function nextTurn() {
  // Check if the game is over before proceeding
  if (_players__WEBPACK_IMPORTED_MODULE_0__.humanPlayer.totalLengthRemaining <= 0) {
    console.log("Computer wins!");
    return;
  } else if (_players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer.totalLengthRemaining <= 0) {
    console.log("Human wins!");
    return;
  }

  // Alternate turns based on turnTracker
  if (turnTracker % 2 === 0) {
    console.log("Human player's turn");
    playerTurn();
  } else {
    console.log("Computer player's turn");
    setTimeout(() => {
      (0,_computerTurn__WEBPACK_IMPORTED_MODULE_2__.placeRandomAttack)((0,_computerTurn__WEBPACK_IMPORTED_MODULE_2__.getRandomInt)(8), (0,_computerTurn__WEBPACK_IMPORTED_MODULE_2__.getRandomInt)(8));
      turnTracker++;
      nextTurn(); // Call next turn after computer's move
    }, 1000); // Add a delay for the computer's move
  }
}

let turnTracker = 0;

function playerTurn() {
  computerTable.addEventListener("click", handlePlayerClick);
}

function handlePlayerClick(event) {
  const xData = event.target.getAttribute("x-data");
  const yData = event.target.getAttribute("y-data");

  if (!xData || !yData) return;

  if (_players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer.gameboard[yData][xData] === "x") {
    event.target.src = "./img/explode.png";
    console.log("Hit!");
  } else {
    event.target.src = "./img/miss.png";
    console.log("Miss!");
  }

  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.receiveAttack)(yData, xData, _players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer, _players__WEBPACK_IMPORTED_MODULE_0__.humanPlayer);

  // Remove event listener after player's turn to prevent multiple clicks
  computerTable.removeEventListener("click", handlePlayerClick);

  // Increment turn tracker and proceed to the next turn
  turnTracker++;
  nextTurn();
}


/***/ }),

/***/ "./src/modules/players.js":
/*!********************************!*\
  !*** ./src/modules/players.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   computerPlayer: () => (/* binding */ computerPlayer),
/* harmony export */   humanPlayer: () => (/* binding */ humanPlayer)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");


function createGameboard() {
  return [
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], []],
  ];
}

// Create a Player class/factory.
// There will be two types of players in the game, ‘real’ players and ‘computer’ players.
// Each player object should contain its own gameboard.

class Player {
  constructor(gameboard, ships) {
    (this.gameboard = createGameboard()),
      (this.ships = ships),
      (this.totalLengthRemaining = 15); // Moved here
    this.missedAttacksTotal = 0; // Moved here
  }
}

const humanPlayer = new Player(createGameboard(), _ship__WEBPACK_IMPORTED_MODULE_0__.playerShips);
const computerPlayer = new Player(createGameboard(), _ship__WEBPACK_IMPORTED_MODULE_0__.playerShips);


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship),
/* harmony export */   playerShips: () => (/* binding */ playerShips),
/* harmony export */   playerTwoShips: () => (/* binding */ playerTwoShips)
/* harmony export */ });
class Ship {
  constructor(length) {
    this.length = length;
    this.sunk = false;
    this.coords = [];
    this.hit = 0;
  }

  getHit() {
    return this.hit++;
  }
  isSunk() {
    if (this.hit >= this.length) {
      return (this.sunk = true);
    }
  }
}

const playerShips = {
  carrier: new Ship(5),
  battleship: new Ship(3),
  submarine: new Ship(4),
  vessel: new Ship(2),
  destroyer: new Ship(1),
};

const playerTwoShips = {
  carrier: new Ship(5),
  battleship: new Ship(3),
  submarine: new Ship(4),
  vessel: new Ship(2),
  destroyer: new Ship(1),
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_dragDrop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/dragDrop.js */ "./src/modules/dragDrop.js");
/* harmony import */ var _modules_htmlChangeAspect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/htmlChangeAspect.js */ "./src/modules/htmlChangeAspect.js");
/* harmony import */ var _modules_playGame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/playGame.js */ "./src/modules/playGame.js");





document.addEventListener("DOMContentLoaded", () => {
  _modules_htmlChangeAspect_js__WEBPACK_IMPORTED_MODULE_2__.shipsConfig.forEach(({ shipId, buttonId, aspectId }) => {
    (0,_modules_htmlChangeAspect_js__WEBPACK_IMPORTED_MODULE_2__.addAspectSwitching)(shipId, buttonId, aspectId);
  });

  (0,_modules_playGame_js__WEBPACK_IMPORTED_MODULE_3__.startGame)(); // Create the grid and other elements
  (0,_modules_dragDrop_js__WEBPACK_IMPORTED_MODULE_1__.initializeDragAndDrop)(); // Attach event listeners after elements are in the DOM
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDaENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDeUM7QUFDa0I7QUFDOUI7O0FBRWxEO0FBQ0EsRUFBRSxxRUFBVyxZQUFZLDRCQUE0QjtBQUNyRCxJQUFJLGdGQUFrQjtBQUN0QixHQUFHOztBQUVILEVBQUUsK0RBQVMsSUFBSTtBQUNmLEVBQUUsMkVBQXFCLElBQUk7QUFDM0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2pzLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvY29tcHV0ZXJUdXJuLmpzIiwid2VicGFjazovL2pzLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvZHJhZ0Ryb3AuanMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9odG1sQ2hhbmdlQXNwZWN0LmpzIiwid2VicGFjazovL2pzLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvcGxheUdhbWUuanMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9wbGF5ZXJzLmpzIiwid2VicGFjazovL2pzLXRlbXBsYXRlLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pzLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgdGFibGUsXG50cixcbnRib2R5IHtcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnJvdGF0ZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbmgzIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbiNjYXJyaWVyLFxuI2NvbXB1dGVyLWNhcnJpZXIge1xuICBtYXgtaGVpZ2h0OiAxODBweDtcbn1cblxuI3N1Ym1hcmluZSxcbiNiYXR0bGVzaGlwLFxuI2NvbXB1dGVyLXN1Ym1hcmluZSxcbiNjb21wdXRlci1iYXR0bGVzaGlwIHtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG59XG5cbiNkZXN0cm95ZXIsXG4jdmVzc2VsLFxuI2NvbXB1dGVyLWRlc3Ryb3llcixcbiNjb21wdXRlci12ZXNzZWwge1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xufVxuXG4uaW1nQm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uZ2FtZWJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cbi52bCB7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgZ3JlZW47XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmltZyB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucm93LWRhdGEge1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItc3BhY2luZzogMHB4O1xuICBtYXgtaGVpZ2h0OiAzMHB4O1xufVxuYm9keSB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZ3JpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG59XG5cbi5ncmlkLWJveCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjs7QUFFQTs7OztFQUlFLGlCQUFpQjtBQUNuQjs7QUFFQTs7OztFQUlFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLDRCQUE0QjtFQUM1QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcInRhYmxlLFxcbnRyLFxcbnRib2R5IHtcXG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLnJvdGF0ZWQge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuI2NhcnJpZXIsXFxuI2NvbXB1dGVyLWNhcnJpZXIge1xcbiAgbWF4LWhlaWdodDogMTgwcHg7XFxufVxcblxcbiNzdWJtYXJpbmUsXFxuI2JhdHRsZXNoaXAsXFxuI2NvbXB1dGVyLXN1Ym1hcmluZSxcXG4jY29tcHV0ZXItYmF0dGxlc2hpcCB7XFxuICBtYXgtaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI2Rlc3Ryb3llcixcXG4jdmVzc2VsLFxcbiNjb21wdXRlci1kZXN0cm95ZXIsXFxuI2NvbXB1dGVyLXZlc3NlbCB7XFxuICBtYXgtaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uaW1nQm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuLnZsIHtcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgZ3JlZW47XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG5pbWcge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5yb3ctZGF0YSB7XFxuICBtYXJnaW46IDVweDtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XFxuICBtYXgtaGVpZ2h0OiAzMHB4O1xcbn1cXG5ib2R5IHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbn1cXG5cXG4uZ3JpZC1ib3gge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHJlY2VpdmVBdHRhY2sgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IGh1bWFuUGxheWVyLCBjb21wdXRlclBsYXllciB9IGZyb20gXCIuL3BsYXllcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCk7XG59XG5jb25zb2xlLmxvZyhnZXRSYW5kb21JbnQoOCkpO1xuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VSYW5kb21BdHRhY2soeUNvLCB4Q28pIHtcbiAgY29uc3Qgc2VsZWN0ZWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBgW3ktZGF0YT1cIiR7eUNvfVwiXVt4LWRhdGE9XCIke3hDb31cIl1gXG4gICk7XG5cbiAgaWYgKCFzZWxlY3RlZENlbGwpIHtcbiAgICBjb25zb2xlLmVycm9yKGBjb3VsZG4ndCBmaW5kIGdyaWQgY2VsbCAtIHRyaWVkICR7eUNvfSBhbmQgJHt4Q299YCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gQ2hlY2sgdGhlIGdhbWVib2FyZCBCRUZPUkUgY2FsbGluZyByZWNlaXZlQXR0YWNrXG4gIGNvbnN0IGlzU2hpcEhpdCA9IGh1bWFuUGxheWVyLmdhbWVib2FyZFt5Q29dW3hDb10gPT09IFwieFwiO1xuXG4gIGlmIChcbiAgICByZWNlaXZlQXR0YWNrKHlDbywgeENvLCBodW1hblBsYXllciwgY29tcHV0ZXJQbGF5ZXIpID09PSBcImFscmVhZHkgYmVlbiBoaXQhXCJcbiAgKSB7XG4gICAgcGxhY2VSYW5kb21BdHRhY2soZ2V0UmFuZG9tSW50KDgpLCBnZXRSYW5kb21JbnQoOCkpO1xuICB9IGVsc2UgaWYgKGlzU2hpcEhpdCkge1xuICAgIHNlbGVjdGVkQ2VsbC5zcmMgPSBcIi4vaW1nL2V4cGxvZGUucG5nXCI7XG4gIH0gZWxzZSB7XG4gICAgc2VsZWN0ZWRDZWxsLnNyYyA9IFwiLi9pbWcvbWlzcy5wbmdcIjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgc2hpcHNDb25maWcgfSBmcm9tIFwiLi9odG1sQ2hhbmdlQXNwZWN0LmpzXCI7XG5pbXBvcnQgeyBodW1hblBsYXllciwgcGxhY2VTaGlwIH0gZnJvbSBcIi4vZ2FtZWJvYXJkLmpzXCI7IC8vIEFzc3VtaW5nIHRoaXMgZXhpc3RzXG5cbmZ1bmN0aW9uIGRyYWcoZXYpIHtcbiAgY29uc3Qgc2hpcFR5cGUgPSBldi50YXJnZXQuaWQ7XG4gIGNvbnNvbGUubG9nKFwiRHJhZ2dpbmcgc2hpcFR5cGU6XCIsIHNoaXBUeXBlKTtcbiAgZXYuZGF0YVRyYW5zZmVyLnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIHNoaXBUeXBlKTsgLy8gVXNlIHN0YW5kYXJkIE1JTUUgdHlwZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWxsb3dEcm9wKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIEFsbG93IHRoZSBkcm9wXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcm9wKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3Qgc2hpcFR5cGUgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInNoaXBUeXBlXCIpOyAvLyBgc2hpcFR5cGVgIHNob3VsZCBtYXRjaCBhIGBzaGlwSWRgXG4gIGNvbnNvbGUubG9nKFwiRHJvcHBpbmcgc2hpcDpcIiwgc2hpcFR5cGUpO1xuXG4gIGNvbnN0IGNvbmZpZ0VudHJ5ID0gc2hpcHNDb25maWcuZmluZCgoY29uZmlnKSA9PiBjb25maWcuc2hpcElkID09PSBzaGlwVHlwZSk7XG4gIGlmICghY29uZmlnRW50cnkpIHtcbiAgICBjb25zb2xlLmVycm9yKGBTaGlwIElEIFwiJHtzaGlwVHlwZX1cIiBub3QgZm91bmQgaW4gc2hpcHNDb25maWcuYCk7XG4gICAgcmV0dXJuOyAvLyBTdG9wIGlmIG5vIG1hdGNoIGZvdW5kXG4gIH1cblxuICBjb25zdCBhc3BlY3RFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7Y29uZmlnRW50cnkuYXNwZWN0SWR9YCk7XG4gIGlmICghYXNwZWN0RWxlbWVudCkge1xuICAgIGNvbnNvbGUuZXJyb3IoYEFzcGVjdCBlbGVtZW50IG5vdCBmb3VuZCBmb3IgXCIke3NoaXBUeXBlfVwiYCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgYXNwZWN0ID0gYXNwZWN0RWxlbWVudC50ZXh0Q29udGVudC5zcGxpdChcIjogXCIpWzFdO1xuICBjb25zdCB4ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcIngtZGF0YVwiKSk7XG4gIGNvbnN0IHkgPSBwYXJzZUludChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwieS1kYXRhXCIpKTtcblxuICBjb25zdCByZXN1bHQgPSBwbGFjZVNoaXAoeSwgeCwgaHVtYW5QbGF5ZXIsIGFzcGVjdC50b0xvd2VyQ2FzZSgpLCBzaGlwVHlwZSk7XG5cbiAgaWYgKHJlc3VsdCA9PT0gXCJwbGFjZW1lbnQgb3V0IG9mIGJvdW5kcyBvciB0YWtlblwiKSB7XG4gICAgY29uc29sZS5sb2coXCJJbnZhbGlkIHBsYWNlbWVudCFcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coYFBsYWNlZCAke3NoaXBUeXBlfSBhdCAoJHt5fSwgJHt4fSkgZmFjaW5nICR7YXNwZWN0fWApO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNoaXBUeXBlKS5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZURyYWdBbmREcm9wKCkge1xuICBzaGlwc0NvbmZpZy5mb3JFYWNoKCh7IHNoaXBJZCB9KSA9PiB7XG4gICAgY29uc3Qgc2hpcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGlwSWQpO1xuICAgIGlmIChzaGlwRWxlbWVudCkge1xuICAgICAgY29uc29sZS5sb2coYEF0dGFjaGluZyBkcmFnc3RhcnQgdG8gc2hpcDogJHtzaGlwSWR9YCk7XG4gICAgICBzaGlwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsIGRyYWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBTaGlwIGVsZW1lbnQgbm90IGZvdW5kOiAke3NoaXBJZH1gKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiLy8gQ3JlYXRlIGEgR2FtZWJvYXJkIGNsYXNzL2ZhY3RvcnkuXG4vLyBOb3RlIHRoYXQgd2UgaGF2ZSBub3QgeWV0IGNyZWF0ZWQgYW55IFVzZXIgSW50ZXJmYWNlLiBXZSBzaG91bGQga25vdyBvdXIgY29kZSBpcyBjb21pbmcgdG9nZXRoZXIgYnkgcnVubmluZyB0aGUgdGVzdHMuIFlvdSBzaG91bGRu4oCZdCBiZSByZWx5aW5nIG9uIGNvbnNvbGUubG9nIG9yIERPTSBtZXRob2RzIHRvIG1ha2Ugc3VyZSB5b3VyIGNvZGUgaXMgZG9pbmcgd2hhdCB5b3UgZXhwZWN0IGl0IHRvLlxuLy8gR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byBwbGFjZSBzaGlwcyBhdCBzcGVjaWZpYyBjb29yZGluYXRlcyBieSBjYWxsaW5nIHRoZSBzaGlwIGZhY3Rvcnkgb3IgY2xhc3MuXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBoYXZlIGEgcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFpciBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgYW5kIHRoZW4gc2VuZHMgdGhlIOKAmGhpdOKAmSBmdW5jdGlvbiB0byB0aGUgY29ycmVjdCBzaGlwLCBvciByZWNvcmRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWlzc2VkIHNob3QuXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBrZWVwIHRyYWNrIG9mIG1pc3NlZCBhdHRhY2tzIHNvIHRoZXkgY2FuIGRpc3BsYXkgdGhlbSBwcm9wZXJseS5cbi8vIEdhbWVib2FyZHMgc2hvdWxkIGJlIGFibGUgdG8gcmVwb3J0IHdoZXRoZXIgb3Igbm90IGFsbCBvZiB0aGVpciBzaGlwcyBoYXZlIGJlZW4gc3Vuay5cblxuaW1wb3J0IHsgY29tcHV0ZXJQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5cbi8vQXNwZWN0ID0gTm9ydGgsIFNvdXRoLCBFYXN0LCBXZXN0XG4vL3lDbyA9IHdoZXJlIHRoZSBzdGFydGluZyBwb3Mgb2YgdGhlIHBsYWNlbWVudCBpcyBvbiB0aGUgeSBheGlzXG4vL3hDbyA9IHdoZXJlIHRoZSBzdGFydGluZyBwb3Mgb2YgdGhlIHBsYWNlbWVudCBpcyBvbiB0aGUgeCBheGlzXG4vL3NoaXBMZW5ndGggPSB0aGUgc2hpcHMue3NoaXB9Lmxlbmd0aCAtIGhvdyBtYW55IHBsYWNlcyBpdCB3aWxsIGJlIHB1dCBhY3Jvc3Ncbi8vSWRlYSBpcyB0aGF0IHlvdSBjaG9vc2UgYW4gWC9ZIHN0YXJ0aW5nIHNwb3QsIGFuZCBhbiBhc3BlY3QuIFRoZW4gd2UgZG8gYW4gaWYgZm9ybXVsYSB0byBjaGVjayB0aGF0IHlvdSBjYW4gcGxhY2UgdGhlcmUuIElmIHlvdSBjYW4ndCBiZWN1c2UgeW91J3JlIG91dCBvZiBib3VuZHMgdGhyb3cgYW4gZXJyb3IuXG4vL0lmIHlvdSBjYW4gcGxhY2UgdGhlcmUsIHB1c2ggYW4gbyB0byB0aGUgZ2FtZWJvYXJkIGFycmF5LCBhbmQgc2VxdWVudGlhbGx5IHB1c2ggYmFzZWQgb24gdGhlIGFzcGVjdCAoTixFLFMsVykgdW50aWwgdGhlIGxlbmd0aCBvZiB0aGUgc2hpcCBoYXMgYmVlbiByZWFjaGVkLlxuXG5mdW5jdGlvbiBpc1BsYWNlbWVudFZhbGlkKHlDbywgeENvLCBwbGF5ZXIsIGFzcGVjdCwgc2hpcFR5cGUpIHtcbiAgY29uc3Qgc2hpcExlbmd0aCA9IHBsYXllci5zaGlwc1tzaGlwVHlwZV0ubGVuZ3RoO1xuICBsZXQgdGVtcFkgPSB5Q287XG4gIGxldCB0ZW1wWCA9IHhDbztcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2hpcExlbmd0aDsgaW5kZXgrKykge1xuICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IGNvb3JkaW5hdGVzIGFyZSBvdXQgb2YgYm91bmRzXG4gICAgaWYgKFxuICAgICAgdGVtcFkgPCAwIHx8XG4gICAgICB0ZW1wWSA+PSBwbGF5ZXIuZ2FtZWJvYXJkLmxlbmd0aCB8fFxuICAgICAgdGVtcFggPCAwIHx8XG4gICAgICB0ZW1wWCA+PSBwbGF5ZXIuZ2FtZWJvYXJkWzBdLmxlbmd0aFxuICAgICkge1xuICAgICAgY29uc29sZS5lcnJvcihgT3V0IG9mIGJvdW5kczogeUNvPSR7dGVtcFl9LCB4Q289JHt0ZW1wWH1gKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgY2VsbCBpcyBhbHJlYWR5IG9jY3VwaWVkXG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmRbdGVtcFldW3RlbXBYXSA9PT0gXCJ4XCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE92ZXJsYXAgZGV0ZWN0ZWQgYXQ6IHlDbz0ke3RlbXBZfSwgeENvPSR7dGVtcFh9YCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQWRqdXN0IHRlbXBZIGFuZCB0ZW1wWCBiYXNlZCBvbiB0aGUgYXNwZWN0IGZvciB0aGUgbmV4dCBjZWxsXG4gICAgc3dpdGNoIChhc3BlY3QpIHtcbiAgICAgIGNhc2UgXCJub3J0aFwiOlxuICAgICAgICB0ZW1wWS0tO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJlYXN0XCI6XG4gICAgICAgIHRlbXBYKys7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNvdXRoXCI6XG4gICAgICAgIHRlbXBZKys7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIndlc3RcIjpcbiAgICAgICAgdGVtcFgtLTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgYWxsIGNoZWNrcyBwYXNzLCB0aGUgcGxhY2VtZW50IGlzIHZhbGlkXG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VTaGlwKHlDbywgeENvLCBwbGF5ZXIsIGFzcGVjdCwgc2hpcFR5cGUpIHtcbiAgaWYgKGlzUGxhY2VtZW50VmFsaWQoeUNvLCB4Q28sIHBsYXllciwgYXNwZWN0LCBzaGlwVHlwZSkgPT09IGZhbHNlKSB7XG4gICAgaWYgKHBsYXllciA9PT0gY29tcHV0ZXJQbGF5ZXIpIHtcbiAgICAgIGNvbnN0IHJhbmRJbnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwbGF5ZXIuZ2FtZWJvYXJkLmxlbmd0aCk7XG4gICAgICBwbGFjZVNoaXAocmFuZEludCwgcmFuZEludCwgY29tcHV0ZXJQbGF5ZXIsIGFzcGVjdCwgc2hpcFR5cGUpO1xuICAgICAgY29uc29sZS5sb2coY29tcHV0ZXJQbGF5ZXIuZ2FtZWJvYXJkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwib3V0IG9mIGJvdW5kc1wiO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBSZXNldCB0aGUgc2hpcCdzIGNvb3JkaW5hdGVzXG4gICAgcGxheWVyLnNoaXBzW3NoaXBUeXBlXS5jb29yZHMgPSBbXTtcblxuICAgIGxldCB0ZW1wWSA9IHlDbztcbiAgICBsZXQgdGVtcFggPSB4Q287XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBsYXllci5zaGlwc1tzaGlwVHlwZV0ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkW3RlbXBZXVt0ZW1wWF0gPSBcInhcIjtcbiAgICAgIHBsYXllci5zaGlwc1tzaGlwVHlwZV0uY29vcmRzLnB1c2goW3RlbXBZLCB0ZW1wWF0pO1xuXG4gICAgICAvLyBBZGp1c3QgdGVtcFkgYW5kIHRlbXBYIGJhc2VkIG9uIHRoZSBhc3BlY3QgZm9yIHRoZSBuZXh0IGNlbGxcbiAgICAgIHN3aXRjaCAoYXNwZWN0KSB7XG4gICAgICAgIGNhc2UgXCJub3J0aFwiOlxuICAgICAgICAgIHRlbXBZLS07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJlYXN0XCI6XG4gICAgICAgICAgdGVtcFgrKztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNvdXRoXCI6XG4gICAgICAgICAgdGVtcFkrKztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIndlc3RcIjpcbiAgICAgICAgICB0ZW1wWC0tO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gXCJzdWNjZXNzXCI7XG4gIH1cbn1cblxuLy9yZWNlaXZlIGF0dGFja1xuLy9HYW1lYm9hcmRzIHNob3VsZCBoYXZlIGEgcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFpciBvZiBjb29yZGluYXRlcywgZGV0ZXJtaW5lcyB3aGV0aGVyIG9yIG5vdCB0aGUgYXR0YWNrIGhpdCBhIHNoaXAgYW5kIHRoZW4gc2VuZHMgdGhlIOKAmGhpdOKAmSBmdW5jdGlvbiB0byB0aGUgY29ycmVjdCBzaGlwLCBvciByZWNvcmRzIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgbWlzc2VkIHNob3QuXG5cbmV4cG9ydCBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHlDbywgeENvLCBiZWluZ0F0dGFja2VkLCBhdHRhY2tlcikge1xuICBjb25zb2xlLmxvZyhcInk6IFwiLCB5Q28sIFwieDogXCIsIHhDbyk7XG4gIC8vY2hlY2sgaWYgcGxhY2UgaGFzIGFscmVhZHkgYmVlbiBoaXRcbiAgaWYgKGJlaW5nQXR0YWNrZWQuZ2FtZWJvYXJkW3lDb11beENvXSA9PT0gXCJvXCIpIHtcbiAgICBjb25zb2xlLmxvZyhcImFscmVhZHkgYmVlbiBoaXQhXCIpO1xuICB9IGVsc2Uge1xuICAgIC8vbWFyayBnYW1lYm9hcmQgYXMgaGl0XG4gICAgYmVpbmdBdHRhY2tlZC5nYW1lYm9hcmRbeUNvXVt4Q29dID0gXCJvXCI7XG4gICAgbGV0IGNvbmRpdGlvbk1ldCA9IGZhbHNlO1xuICAgIC8vbG9vcCB0aHJvdWdoIHBsYXllcm9uZXNoaXBzLnNoaXAuY29vcmRzIGFuZCBjaGVjayBpZiBhbnkgb2YgdGhlIHZhbHVlIGNvb3JkcyBtYXRjaCB5Y28veGNvXG5cbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhiZWluZ0F0dGFja2VkLnNoaXBzKSkge1xuICAgICAgaWYgKHZhbHVlLmNvb3Jkcykge1xuICAgICAgICBmb3IgKGNvbnN0IFtzaGlwWSwgc2hpcFhdIG9mIHZhbHVlLmNvb3Jkcykge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFxuICAgICAgICAgIC8vICAgYENoZWNraW5nIGNvb3JkaW5hdGVzOiAke3NoaXBZfSwgJHtzaGlwWH0gYWdhaW5zdCAke3lDb30sICR7eENvfWBcbiAgICAgICAgICAvLyApO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHBhcnNlSW50KHNoaXBZKSA9PT0gcGFyc2VJbnQoeUNvKSAmJlxuICAgICAgICAgICAgcGFyc2VJbnQoc2hpcFgpID09PSBwYXJzZUludCh4Q28pXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25kaXRpb25NZXQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJIaXQgZGV0ZWN0ZWQgb24gc2hpcDpcIiwga2V5KTtcbiAgICAgICAgICAgIGJlaW5nQXR0YWNrZWQuc2hpcHNba2V5XS5nZXRIaXQoKTtcbiAgICAgICAgICAgIGJlaW5nQXR0YWNrZWQuc2hpcHNba2V5XS5pc1N1bmsoKTtcbiAgICAgICAgICAgIGJlaW5nQXR0YWNrZWQudG90YWxMZW5ndGhSZW1haW5pbmctLTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICBgVG90YWwgc2hpcCBzcGFjZXMgcmVtYWluaW5nIGZvciBwbGF5ZXI6ICR7YmVpbmdBdHRhY2tlZC50b3RhbExlbmd0aFJlbWFpbmluZ30hYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChiZWluZ0F0dGFja2VkLnNoaXBzW2tleV0uc3Vuaykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWW91IHN1bmsgdGhlICR7a2V5fSFgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbk1ldCkge1xuICAgICAgbWlzc2VkQXR0YWNrKGF0dGFja2VyKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiTWlzcyFcIik7XG4gICAgfVxuICB9XG59XG5cbi8vIEdhbWVib2FyZHMgc2hvdWxkIGtlZXAgdHJhY2sgb2YgbWlzc2VkIGF0dGFja3Mgc28gdGhleSBjYW4gZGlzcGxheSB0aGVtIHByb3Blcmx5LlxuZXhwb3J0IGZ1bmN0aW9uIG1pc3NlZEF0dGFjayhjdXJyZW50UGxheWVyKSB7XG4gIGN1cnJlbnRQbGF5ZXIubWlzc2VkQXR0YWNrc1RvdGFsKys7XG59XG4iLCJleHBvcnQgY29uc3Qgc2hpcHNDb25maWcgPSBbXG4gIHtcbiAgICBzaGlwSWQ6IFwiY2FycmllclwiLFxuICAgIGJ1dHRvbklkOiBcImh1bWFuLWJ1dHRvbi1jYXJyaWVyXCIsXG4gICAgYXNwZWN0SWQ6IFwiaHVtYW4tYXNwZWN0LWNhcnJpZXJcIixcbiAgfSxcbiAge1xuICAgIHNoaXBJZDogXCJzdWJtYXJpbmVcIixcbiAgICBidXR0b25JZDogXCJodW1hbi1idXR0b24tc3VibWFyaW5lXCIsXG4gICAgYXNwZWN0SWQ6IFwiaHVtYW4tYXNwZWN0LXN1Ym1hcmluZVwiLFxuICB9LFxuICB7XG4gICAgc2hpcElkOiBcImJhdHRsZXNoaXBcIixcbiAgICBidXR0b25JZDogXCJodW1hbi1idXR0b24tYmF0dGxlc2hpcFwiLFxuICAgIGFzcGVjdElkOiBcImh1bWFuLWFzcGVjdC1iYXR0bGVzaGlwXCIsXG4gIH0sXG4gIHtcbiAgICBzaGlwSWQ6IFwidmVzc2VsXCIsXG4gICAgYnV0dG9uSWQ6IFwiaHVtYW4tYnV0dG9uLXZlc3NlbFwiLFxuICAgIGFzcGVjdElkOiBcImh1bWFuLWFzcGVjdC12ZXNzZWxcIixcbiAgfSxcbiAge1xuICAgIHNoaXBJZDogXCJkZXN0cm95ZXJcIixcbiAgICBidXR0b25JZDogXCJodW1hbi1idXR0b24tZGVzdHJveWVyXCIsXG4gICAgYXNwZWN0SWQ6IFwiaHVtYW4tYXNwZWN0LWRlc3Ryb3llclwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFzcGVjdFN3aXRjaGluZyhzaGlwSWQsIGJ1dHRvbklkLCBhc3BlY3RJZCkge1xuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtidXR0b25JZH1gKTtcbiAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3NoaXBJZH1gKTtcbiAgY29uc3QgYXNwZWN0VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2FzcGVjdElkfWApO1xuXG4gIGlmICghYnV0dG9uIHx8ICFzaGlwIHx8ICFhc3BlY3RUZXh0KSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBNaXNzaW5nIGVsZW1lbnRzIGZvciBzaGlwSWQ9JHtzaGlwSWR9LCBidXR0b25JZD0ke2J1dHRvbklkfSwgYXNwZWN0SWQ9JHthc3BlY3RJZH1gXG4gICAgKTtcbiAgICByZXR1cm47IC8vIFNraXAgaWYgYW55IGVsZW1lbnQgaXMgbWlzc2luZ1xuICB9XG5cbiAgbGV0IHJvdFRyYWNrZXIgPSAwO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJvdFRyYWNrZXIgPSAocm90VHJhY2tlciArIDEpICUgNDsgLy8gQ3ljbGUgdGhyb3VnaCAwLCAxLCAyLCAzXG4gICAgY29uc3QgYXNwZWN0ID0gW1wiTm9ydGhcIiwgXCJFYXN0XCIsIFwiU291dGhcIiwgXCJXZXN0XCJdW3JvdFRyYWNrZXJdO1xuICAgIHNoaXAuY2xhc3NMaXN0LnRvZ2dsZShcInJvdGF0ZWRcIik7XG4gICAgYXNwZWN0VGV4dC50ZXh0Q29udGVudCA9IGBBc3BlY3Q6ICR7YXNwZWN0fWA7XG4gIH0pO1xufVxuXG4vLyBMb29wIHRocm91Z2ggdGhlIGNvbmZpZ3VyYXRpb24gYXJyYXkgYW5kIGFkZCBldmVudCBsaXN0ZW5lcnNcbnNoaXBzQ29uZmlnLmZvckVhY2goKHsgc2hpcElkLCBidXR0b25JZCwgYXNwZWN0SWQgfSkgPT4ge1xuICBhZGRBc3BlY3RTd2l0Y2hpbmcoc2hpcElkLCBidXR0b25JZCwgYXNwZWN0SWQpO1xufSk7XG4iLCJpbXBvcnQgeyBodW1hblBsYXllciwgY29tcHV0ZXJQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJzXCI7XG5pbXBvcnQgeyBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2sgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB7IHBsYWNlUmFuZG9tQXR0YWNrLCBnZXRSYW5kb21JbnQgfSBmcm9tIFwiLi9jb21wdXRlclR1cm5cIjtcbmltcG9ydCB7IHNoaXBzQ29uZmlnIH0gZnJvbSBcIi4vaHRtbENoYW5nZUFzcGVjdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVHcmlkRWxlbWVudCh4LCB5LCBwbGF5ZXIpIHtcbiAgY29uc3Qgcm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucm93LWRhdGFcIik7XG4gIGNvbnN0IGxhc3RSb3cgPSByb3dzW3Jvd3MubGVuZ3RoIC0gMV07XG4gIGNvbnN0IG5ld0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG5ld0ltZy5zcmMgPSBcIi4vaW1nL2ltYWdlLnBuZ1wiO1xuXG4gIC8vIFNldCBjbGFzcyBiYXNlZCBvbiBwbGF5ZXJcbiAgaWYgKHBsYXllciA9PT0gaHVtYW5QbGF5ZXIpIHtcbiAgICBuZXdJbWcuY2xhc3NOYW1lID0gXCJncmlkLWJveCBodW1hbi1ncmlkLWJveFwiO1xuICB9IGVsc2Uge1xuICAgIG5ld0ltZy5jbGFzc05hbWUgPSBcImdyaWQtYm94IGNvbXB1dGVyLWdyaWQtYm94XCI7XG4gIH1cblxuICAvLyBTZXQgYXR0cmlidXRlcyBmb3IgeCBhbmQgeSBjb29yZGluYXRlc1xuICBuZXdJbWcuc3R5bGUubWFyZ2luID0gXCIxcHhcIjtcbiAgbmV3SW1nLnNldEF0dHJpYnV0ZShcInktZGF0YVwiLCB5KTtcbiAgbmV3SW1nLnNldEF0dHJpYnV0ZShcIngtZGF0YVwiLCB4KTtcblxuICAvLyBBZGQgZXZlbnQgbGlzdGVuZXJzXG4gIGlmIChwbGF5ZXIgPT09IGh1bWFuUGxheWVyKSB7XG4gICAgLy8gQWRkIGRyYWdvdmVyIGFuZCBkcm9wIGV2ZW50IGxpc3RlbmVyc1xuICAgIG5ld0ltZy5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBBbGxvdyB0aGUgZHJvcFxuICAgIH0pO1xuICAgIG5ld0ltZy5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBkcm9wSGFuZGxlcik7IC8vIFVzZSBkcm9wSGFuZGxlciBmdW5jdGlvblxuICB9IGVsc2Uge1xuICAgIC8vIEZvciBjb21wdXRlciBncmlkLCBhZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIGF0dGFja3NcbiAgICBuZXdJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVBsYXllckNsaWNrKTtcbiAgfVxuXG4gIGxhc3RSb3cuYXBwZW5kKG5ld0ltZyk7XG59XG5cbmZ1bmN0aW9uIGRyb3BIYW5kbGVyKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgY29uc3Qgc2hpcFR5cGUgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcInRleHQvcGxhaW5cIik7XG4gIGNvbnNvbGUubG9nKFwiRHJvcHBlZCBzaGlwVHlwZTpcIiwgc2hpcFR5cGUpO1xuXG4gIGlmICghc2hpcFR5cGUpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiTm8gc2hpcFR5cGUgZm91bmQgaW4gZGF0YVRyYW5zZmVyLlwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjb25maWdFbnRyeSA9IHNoaXBzQ29uZmlnLmZpbmQoKGNvbmZpZykgPT4gY29uZmlnLnNoaXBJZCA9PT0gc2hpcFR5cGUpO1xuXG4gIGlmICghY29uZmlnRW50cnkpIHtcbiAgICBjb25zb2xlLmVycm9yKGBTaGlwIElEIFwiJHtzaGlwVHlwZX1cIiBub3QgZm91bmQgaW4gc2hpcHNDb25maWcuYCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgYXNwZWN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2NvbmZpZ0VudHJ5LmFzcGVjdElkfWApO1xuICBpZiAoIWFzcGVjdEVsZW1lbnQpIHtcbiAgICBjb25zb2xlLmVycm9yKGBBc3BlY3QgZWxlbWVudCBub3QgZm91bmQgZm9yIFwiJHtzaGlwVHlwZX1cImApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGFzcGVjdCA9IGFzcGVjdEVsZW1lbnQudGV4dENvbnRlbnQuc3BsaXQoXCI6IFwiKVsxXTtcbiAgY29uc3QgeCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ4LWRhdGFcIikpO1xuICBjb25zdCB5ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcInktZGF0YVwiKSk7XG5cbiAgY29uc3QgcmVzdWx0ID0gcGxhY2VTaGlwKHksIHgsIGh1bWFuUGxheWVyLCBhc3BlY3QudG9Mb3dlckNhc2UoKSwgc2hpcFR5cGUpO1xuXG4gIGlmIChyZXN1bHQgPT09IFwib3V0IG9mIGJvdW5kc1wiKSB7XG4gICAgY29uc29sZS5sb2coXCJJbnZhbGlkIHBsYWNlbWVudCFcIik7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coYFBsYWNlZCAke3NoaXBUeXBlfSBhdCAoJHt5fSwgJHt4fSkgZmFjaW5nICR7YXNwZWN0fWApO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNoaXBUeXBlKS5kcmFnZ2FibGUgPSBmYWxzZTsgLy8gRGlzYWJsZSBmdXJ0aGVyIGRyYWdnaW5nXG5cbiAgICAvLyBVcGRhdGUgdGhlIGFzcGVjdCB0ZXh0IHRvIGluZGljYXRlIHRoZSBzaGlwIGlzIHBsYWNlZFxuICAgIGFzcGVjdEVsZW1lbnQudGV4dENvbnRlbnQgPSBgU2hpcCBQbGFjZWRgO1xuXG4gICAgLy8gR2V0IHRoZSBzaGlwJ3MgY29vcmRpbmF0ZXNcbiAgICBjb25zdCBzaGlwQ29vcmRzID0gaHVtYW5QbGF5ZXIuc2hpcHNbc2hpcFR5cGVdLmNvb3JkcztcblxuICAgIC8vIFVwZGF0ZSB0aGUgZ3JpZCBjZWxscyBieSBjaGFuZ2luZyB0aGUgYm9yZGVyIHRvIGJsdWVcbiAgICBzaGlwQ29vcmRzLmZvckVhY2goKFt5Q29vcmQsIHhDb29yZF0pID0+IHtcbiAgICAgIGNvbnN0IGdyaWRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC5odW1hbi1ncmlkLWJveFt4LWRhdGE9XCIke3hDb29yZH1cIl1beS1kYXRhPVwiJHt5Q29vcmR9XCJdYFxuICAgICAgKTtcblxuICAgICAgaWYgKGdyaWRDZWxsKSB7XG4gICAgICAgIC8vIENoYW5nZSB0aGUgYm9yZGVyIHRvIGJsdWVcbiAgICAgICAgZ3JpZENlbGwuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgYmx1ZVwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgR3JpZCBjZWxsIG5vdCBmb3VuZCBhdCB4PSR7eENvb3JkfSwgeT0ke3lDb29yZH1gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBodW1hblRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1hbi1yb3dzXCIpO1xuY29uc3QgY29tcHV0ZXJUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItcm93c1wiKTtcblxuZnVuY3Rpb24gY3JlYXRlTmV3Um93cyhwbGF5ZXIpIHtcbiAgY29uc3QgbmV3Um93cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgbmV3Um93cy5jbGFzc05hbWUgPSBcInJvdy1kYXRhXCI7XG4gIGlmIChwbGF5ZXIgPT09IGh1bWFuUGxheWVyKSB7XG4gICAgaHVtYW5UYWJsZS5hcHBlbmRDaGlsZChuZXdSb3dzKTtcbiAgfSBlbHNlIHtcbiAgICBjb21wdXRlclRhYmxlLmFwcGVuZENoaWxkKG5ld1Jvd3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkKHBsYXllcikge1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGxheWVyLmdhbWVib2FyZFswXS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBsZXQgeSA9IGluZGV4O1xuICAgIGNyZWF0ZU5ld1Jvd3MocGxheWVyKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGxheWVyLmdhbWVib2FyZFswXS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNyZWF0ZUdyaWRFbGVtZW50KGluZGV4LCB5LCBwbGF5ZXIpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBwbGFjZVNoaXAoNSwgNSwgaHVtYW5QbGF5ZXIsIFwibm9ydGhcIiwgXCJjYXJyaWVyXCIpO1xuLy8gcGxhY2VTaGlwKDQsIDQsIGh1bWFuUGxheWVyLCBcIm5vcnRoXCIsIFwiYmF0dGxlc2hpcFwiKTtcbi8vIHBsYWNlU2hpcCgzLCAzLCBodW1hblBsYXllciwgXCJub3J0aFwiLCBcInN1Ym1hcmluZVwiKTtcbi8vIHBsYWNlU2hpcCgyLCAyLCBodW1hblBsYXllciwgXCJub3J0aFwiLCBcInZlc3NlbFwiKTtcbi8vIHBsYWNlU2hpcCgxLCAxLCBodW1hblBsYXllciwgXCJub3J0aFwiLCBcImRlc3Ryb3llclwiKTtcblxuZnVuY3Rpb24gcGxhY2VDb21wdXRlclNoaXBzKCkge1xuICBmdW5jdGlvbiByYW5kSW50KG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpO1xuICB9XG4gIGZ1bmN0aW9uIGFzcGVjdCgpIHtcbiAgICBjb25zdCBudW1iZXIgPSByYW5kSW50KDQpO1xuICAgIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBcIm5vcnRoXCI7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBcImVhc3RcIjtcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gXCJzb3V0aFwiO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBcIndlc3RcIjtcbiAgICB9XG4gICAgcmV0dXJuIGFzcGVjdDtcbiAgfVxuICBwbGFjZVNoaXAocmFuZEludCg4KSwgcmFuZEludCg4KSwgY29tcHV0ZXJQbGF5ZXIsIGFzcGVjdCgpLCBcImNhcnJpZXJcIik7XG4gIHBsYWNlU2hpcChyYW5kSW50KDgpLCByYW5kSW50KDgpLCBjb21wdXRlclBsYXllciwgYXNwZWN0KCksIFwiYmF0dGxlc2hpcFwiKTtcbiAgcGxhY2VTaGlwKHJhbmRJbnQoOCksIHJhbmRJbnQoOCksIGNvbXB1dGVyUGxheWVyLCBhc3BlY3QoKSwgXCJzdWJtYXJpbmVcIik7XG4gIHBsYWNlU2hpcChyYW5kSW50KDgpLCByYW5kSW50KDgpLCBjb21wdXRlclBsYXllciwgYXNwZWN0KCksIFwidmVzc2VsXCIpO1xuICBwbGFjZVNoaXAocmFuZEludCg4KSwgcmFuZEludCg4KSwgY29tcHV0ZXJQbGF5ZXIsIGFzcGVjdCgpLCBcImRlc3Ryb3llclwiKTtcbiAgY29uc29sZS50YWJsZShjb21wdXRlclBsYXllci5nYW1lYm9hcmQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgY3JlYXRlQm9hcmQoaHVtYW5QbGF5ZXIpO1xuICBjcmVhdGVCb2FyZChjb21wdXRlclBsYXllcik7XG4gIHBsYWNlQ29tcHV0ZXJTaGlwcygpO1xufVxuXG5mdW5jdGlvbiBuZXh0VHVybigpIHtcbiAgLy8gQ2hlY2sgaWYgdGhlIGdhbWUgaXMgb3ZlciBiZWZvcmUgcHJvY2VlZGluZ1xuICBpZiAoaHVtYW5QbGF5ZXIudG90YWxMZW5ndGhSZW1haW5pbmcgPD0gMCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ29tcHV0ZXIgd2lucyFcIik7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGNvbXB1dGVyUGxheWVyLnRvdGFsTGVuZ3RoUmVtYWluaW5nIDw9IDApIHtcbiAgICBjb25zb2xlLmxvZyhcIkh1bWFuIHdpbnMhXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEFsdGVybmF0ZSB0dXJucyBiYXNlZCBvbiB0dXJuVHJhY2tlclxuICBpZiAodHVyblRyYWNrZXIgJSAyID09PSAwKSB7XG4gICAgY29uc29sZS5sb2coXCJIdW1hbiBwbGF5ZXIncyB0dXJuXCIpO1xuICAgIHBsYXllclR1cm4oKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXB1dGVyIHBsYXllcidzIHR1cm5cIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBwbGFjZVJhbmRvbUF0dGFjayhnZXRSYW5kb21JbnQoOCksIGdldFJhbmRvbUludCg4KSk7XG4gICAgICB0dXJuVHJhY2tlcisrO1xuICAgICAgbmV4dFR1cm4oKTsgLy8gQ2FsbCBuZXh0IHR1cm4gYWZ0ZXIgY29tcHV0ZXIncyBtb3ZlXG4gICAgfSwgMTAwMCk7IC8vIEFkZCBhIGRlbGF5IGZvciB0aGUgY29tcHV0ZXIncyBtb3ZlXG4gIH1cbn1cblxubGV0IHR1cm5UcmFja2VyID0gMDtcblxuZnVuY3Rpb24gcGxheWVyVHVybigpIHtcbiAgY29tcHV0ZXJUYWJsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUGxheWVyQ2xpY2spO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQbGF5ZXJDbGljayhldmVudCkge1xuICBjb25zdCB4RGF0YSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ4LWRhdGFcIik7XG4gIGNvbnN0IHlEYXRhID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcInktZGF0YVwiKTtcblxuICBpZiAoIXhEYXRhIHx8ICF5RGF0YSkgcmV0dXJuO1xuXG4gIGlmIChjb21wdXRlclBsYXllci5nYW1lYm9hcmRbeURhdGFdW3hEYXRhXSA9PT0gXCJ4XCIpIHtcbiAgICBldmVudC50YXJnZXQuc3JjID0gXCIuL2ltZy9leHBsb2RlLnBuZ1wiO1xuICAgIGNvbnNvbGUubG9nKFwiSGl0IVwiKTtcbiAgfSBlbHNlIHtcbiAgICBldmVudC50YXJnZXQuc3JjID0gXCIuL2ltZy9taXNzLnBuZ1wiO1xuICAgIGNvbnNvbGUubG9nKFwiTWlzcyFcIik7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKHlEYXRhLCB4RGF0YSwgY29tcHV0ZXJQbGF5ZXIsIGh1bWFuUGxheWVyKTtcblxuICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgYWZ0ZXIgcGxheWVyJ3MgdHVybiB0byBwcmV2ZW50IG11bHRpcGxlIGNsaWNrc1xuICBjb21wdXRlclRhYmxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQbGF5ZXJDbGljayk7XG5cbiAgLy8gSW5jcmVtZW50IHR1cm4gdHJhY2tlciBhbmQgcHJvY2VlZCB0byB0aGUgbmV4dCB0dXJuXG4gIHR1cm5UcmFja2VyKys7XG4gIG5leHRUdXJuKCk7XG59XG4iLCJpbXBvcnQgeyBwbGF5ZXJTaGlwcyBhcyBzaHBzIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmQoKSB7XG4gIHJldHVybiBbXG4gICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gIF07XG59XG5cbi8vIENyZWF0ZSBhIFBsYXllciBjbGFzcy9mYWN0b3J5LlxuLy8gVGhlcmUgd2lsbCBiZSB0d28gdHlwZXMgb2YgcGxheWVycyBpbiB0aGUgZ2FtZSwg4oCYcmVhbOKAmSBwbGF5ZXJzIGFuZCDigJhjb21wdXRlcuKAmSBwbGF5ZXJzLlxuLy8gRWFjaCBwbGF5ZXIgb2JqZWN0IHNob3VsZCBjb250YWluIGl0cyBvd24gZ2FtZWJvYXJkLlxuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoZ2FtZWJvYXJkLCBzaGlwcykge1xuICAgICh0aGlzLmdhbWVib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpKSxcbiAgICAgICh0aGlzLnNoaXBzID0gc2hpcHMpLFxuICAgICAgKHRoaXMudG90YWxMZW5ndGhSZW1haW5pbmcgPSAxNSk7IC8vIE1vdmVkIGhlcmVcbiAgICB0aGlzLm1pc3NlZEF0dGFja3NUb3RhbCA9IDA7IC8vIE1vdmVkIGhlcmVcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgaHVtYW5QbGF5ZXIgPSBuZXcgUGxheWVyKGNyZWF0ZUdhbWVib2FyZCgpLCBzaHBzKTtcbmV4cG9ydCBjb25zdCBjb21wdXRlclBsYXllciA9IG5ldyBQbGF5ZXIoY3JlYXRlR2FtZWJvYXJkKCksIHNocHMpO1xuIiwiZXhwb3J0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLmNvb3JkcyA9IFtdO1xuICAgIHRoaXMuaGl0ID0gMDtcbiAgfVxuXG4gIGdldEhpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5oaXQrKztcbiAgfVxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0ID49IHRoaXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gKHRoaXMuc3VuayA9IHRydWUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcGxheWVyU2hpcHMgPSB7XG4gIGNhcnJpZXI6IG5ldyBTaGlwKDUpLFxuICBiYXR0bGVzaGlwOiBuZXcgU2hpcCgzKSxcbiAgc3VibWFyaW5lOiBuZXcgU2hpcCg0KSxcbiAgdmVzc2VsOiBuZXcgU2hpcCgyKSxcbiAgZGVzdHJveWVyOiBuZXcgU2hpcCgxKSxcbn07XG5cbmV4cG9ydCBjb25zdCBwbGF5ZXJUd29TaGlwcyA9IHtcbiAgY2FycmllcjogbmV3IFNoaXAoNSksXG4gIGJhdHRsZXNoaXA6IG5ldyBTaGlwKDMpLFxuICBzdWJtYXJpbmU6IG5ldyBTaGlwKDQpLFxuICB2ZXNzZWw6IG5ldyBTaGlwKDIpLFxuICBkZXN0cm95ZXI6IG5ldyBTaGlwKDEpLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplRHJhZ0FuZERyb3AgfSBmcm9tIFwiLi9tb2R1bGVzL2RyYWdEcm9wLmpzXCI7XG5pbXBvcnQgeyBzaGlwc0NvbmZpZywgYWRkQXNwZWN0U3dpdGNoaW5nIH0gZnJvbSBcIi4vbW9kdWxlcy9odG1sQ2hhbmdlQXNwZWN0LmpzXCI7XG5pbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9tb2R1bGVzL3BsYXlHYW1lLmpzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgc2hpcHNDb25maWcuZm9yRWFjaCgoeyBzaGlwSWQsIGJ1dHRvbklkLCBhc3BlY3RJZCB9KSA9PiB7XG4gICAgYWRkQXNwZWN0U3dpdGNoaW5nKHNoaXBJZCwgYnV0dG9uSWQsIGFzcGVjdElkKTtcbiAgfSk7XG5cbiAgc3RhcnRHYW1lKCk7IC8vIENyZWF0ZSB0aGUgZ3JpZCBhbmQgb3RoZXIgZWxlbWVudHNcbiAgaW5pdGlhbGl6ZURyYWdBbmREcm9wKCk7IC8vIEF0dGFjaCBldmVudCBsaXN0ZW5lcnMgYWZ0ZXIgZWxlbWVudHMgYXJlIGluIHRoZSBET01cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9