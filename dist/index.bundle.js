/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";
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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";
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

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   missedAttack: () => (/* binding */ missedAttack),
/* harmony export */   placeShip: () => (/* binding */ placeShip),
/* harmony export */   receiveAttack: () => (/* binding */ receiveAttack)
/* harmony export */ });
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

function placeShip(yCo, xCo, player, aspect, shipType) {
  // Prevent xCo or yCo being out of bounds
  //todo: do I need to add the ship length + yCo/xCo within the aspect to initially determine whether or not the ship is within bounds?

  if (yCo >= 8 || xCo >= 8 || player.gameboard[yCo][xCo] === "x") {
    return "placement out of bounds or taken";
  } else {
    for (let index = 0; index < player.ships[shipType].length; index++) {
      if (yCo >= 8 || xCo >= 8 || player.gameboard[yCo][xCo] === "x") {
        return "placement out of bounds";
      } else {
        player.gameboard[yCo][xCo] = "x";
        player.ships[shipType].coords.push([yCo, xCo]);
        switch (aspect) {
          case "north":
            yCo--;
            break;
          case "east":
            xCo++;
            break;
          case "south":
            yCo++;
            break;
          case "west":
            xCo--;
            break;
        }
      }
    }
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
/***/ (() => {

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
  {
    shipId: "computer-carrier",
    buttonId: "computer-button-carrier",
    aspectId: "human-aspect-carrier",
  },
  {
    shipId: "computer-submarine",
    buttonId: "computer-button-submarine",
    aspectId: "computer-aspect-submarine",
  },
  {
    shipId: "computer-battleship",
    buttonId: "computer-button-battleship",
    aspectId: "computer-aspect-battleship",
  },
  {
    shipId: "computer-vessel",
    buttonId: "computer-button-vessel",
    aspectId: "computer-aspect-vessel",
  },
  {
    shipId: "computer-destroyer",
    buttonId: "computer-button-destroyer",
    aspectId: "computer-aspect-destroyer",
  },
];

function addAspectSwitching(shipId, buttonId, aspectId) {
  const button = document.querySelector(`#${buttonId}`);
  const ship = document.querySelector(`#${shipId}`);
  const aspectText = document.querySelector(`#${aspectId}`);
  let rotTracker = 0;

  button.addEventListener("click", () => {
    rotTracker = (rotTracker + 1) % 4; // Cycle through 0, 1, 2, 3
    let aspect = "North";
    ship.classList.toggle("rotated");

    // Determine aspect based on rotTracker
    switch (rotTracker) {
      case 0:
        aspect = "North";
        break;
      case 1:
        aspect = "East";
        break;
      case 2:
        aspect = "South";
        break;
      case 3:
        aspect = "West";
        break;
    }

    // Update the aspect text
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./players */ "./src/modules/players.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _computerTurn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./computerTurn */ "./src/modules/computerTurn.js");




function createGridElement(x, y) {
  const rows = document.querySelectorAll(".row-data");
  const lastRow = rows[rows.length - 1]; // Get the most recently added row
  const newImg = document.createElement("img");
  newImg.src = "./img/image.png";
  newImg.className = "grid-box";

  newImg.style.margin = "1px";
  newImg.setAttribute("y-data", y);
  newImg.setAttribute("x-data", x);
  lastRow.append(newImg);
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
      createGridElement(index, y);
    }
  }
}

function placeShipDummyData() {
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(5, 5, _players__WEBPACK_IMPORTED_MODULE_0__.humanPlayer, "north", "carrier");
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(4, 4, _players__WEBPACK_IMPORTED_MODULE_0__.humanPlayer, "north", "battleship");
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(3, 3, _players__WEBPACK_IMPORTED_MODULE_0__.humanPlayer, "north", "submarine");
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(2, 2, _players__WEBPACK_IMPORTED_MODULE_0__.humanPlayer, "north", "vessel");
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(1, 1, _players__WEBPACK_IMPORTED_MODULE_0__.humanPlayer, "north", "destroyer");

  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(5, 5, _players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer, "north", "carrier");
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(4, 4, _players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer, "north", "battleship");
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(3, 3, _players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer, "north", "submarine");
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(2, 2, _players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer, "north", "vessel");
  (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__.placeShip)(1, 1, _players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer, "north", "destroyer");
}
function startGame() {
  createBoard(_players__WEBPACK_IMPORTED_MODULE_0__.humanPlayer);
  createBoard(_players__WEBPACK_IMPORTED_MODULE_0__.computerPlayer);
  placeShipDummyData();
  nextTurn(); // Start the first turn
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

startGame();


/***/ }),

/***/ "./src/modules/players.js":
/*!********************************!*\
  !*** ./src/modules/players.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_playGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/playGame.js */ "./src/modules/playGame.js");
/* harmony import */ var _modules_htmlChangeAspect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/htmlChangeAspect.js */ "./src/modules/htmlChangeAspect.js");
/* harmony import */ var _modules_htmlChangeAspect_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_htmlChangeAspect_js__WEBPACK_IMPORTED_MODULE_2__);

 // Importing playGame.js, which contains console.log("a")


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDVSxDQUFDO0FBQ08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2pzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2pzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2pzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2pzLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2NvbXB1dGVyVHVybi5qcyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2h0bWxDaGFuZ2VBc3BlY3QuanMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9wbGF5R2FtZS5qcyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL3BsYXllcnMuanMiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2pzLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pzLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pzLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qcy10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pzLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vanMtdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2pzLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGB0YWJsZSxcbnRyLFxudGJvZHkge1xuICBib3JkZXItc3BhY2luZzogMHB4O1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ucm90YXRlZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuaDMge1xuICBtYXJnaW46IDBweDtcbn1cblxuI2NhcnJpZXIsXG4jY29tcHV0ZXItY2FycmllciB7XG4gIG1heC1oZWlnaHQ6IDE4MHB4O1xufVxuXG4jc3VibWFyaW5lLFxuI2JhdHRsZXNoaXAsXG4jY29tcHV0ZXItc3VibWFyaW5lLFxuI2NvbXB1dGVyLWJhdHRsZXNoaXAge1xuICBtYXgtaGVpZ2h0OiAxMDBweDtcbn1cblxuI2Rlc3Ryb3llcixcbiN2ZXNzZWwsXG4jY29tcHV0ZXItZGVzdHJveWVyLFxuI2NvbXB1dGVyLXZlc3NlbCB7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG59XG5cbi5pbWdCb3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5nYW1lYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLnZsIHtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBncmVlbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuaW1nIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5yb3ctZGF0YSB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XG4gIG1heC1oZWlnaHQ6IDMwcHg7XG59XG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5ncmlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbn1cblxuLmdyaWQtYm94IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmx1ZTtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBOzs7O0VBSUUsaUJBQWlCO0FBQ25COztBQUVBOzs7O0VBSUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1widGFibGUsXFxudHIsXFxudGJvZHkge1xcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogMHB4O1xcbn1cXG5cXG4ucm90YXRlZCB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4jY2FycmllcixcXG4jY29tcHV0ZXItY2FycmllciB7XFxuICBtYXgtaGVpZ2h0OiAxODBweDtcXG59XFxuXFxuI3N1Ym1hcmluZSxcXG4jYmF0dGxlc2hpcCxcXG4jY29tcHV0ZXItc3VibWFyaW5lLFxcbiNjb21wdXRlci1iYXR0bGVzaGlwIHtcXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jZGVzdHJveWVyLFxcbiN2ZXNzZWwsXFxuI2NvbXB1dGVyLWRlc3Ryb3llcixcXG4jY29tcHV0ZXItdmVzc2VsIHtcXG4gIG1heC1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5pbWdCb3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4udmwge1xcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBncmVlbjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbmltZyB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnJvdy1kYXRhIHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogMHB4O1xcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcXG4gIG1heC1oZWlnaHQ6IDMwcHg7XFxufVxcbmJvZHkge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5ncmlkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxufVxcblxcbi5ncmlkLWJveCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcmVjZWl2ZUF0dGFjayB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgaHVtYW5QbGF5ZXIsIGNvbXB1dGVyUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KTtcbn1cbmNvbnNvbGUubG9nKGdldFJhbmRvbUludCg4KSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGFjZVJhbmRvbUF0dGFjayh5Q28sIHhDbykge1xuICBjb25zdCBzZWxlY3RlZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIGBbeS1kYXRhPVwiJHt5Q299XCJdW3gtZGF0YT1cIiR7eENvfVwiXWBcbiAgKTtcblxuICBpZiAoIXNlbGVjdGVkQ2VsbCkge1xuICAgIGNvbnNvbGUuZXJyb3IoYGNvdWxkbid0IGZpbmQgZ3JpZCBjZWxsIC0gdHJpZWQgJHt5Q299IGFuZCAke3hDb31gKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBDaGVjayB0aGUgZ2FtZWJvYXJkIEJFRk9SRSBjYWxsaW5nIHJlY2VpdmVBdHRhY2tcbiAgY29uc3QgaXNTaGlwSGl0ID0gaHVtYW5QbGF5ZXIuZ2FtZWJvYXJkW3lDb11beENvXSA9PT0gXCJ4XCI7XG5cbiAgaWYgKFxuICAgIHJlY2VpdmVBdHRhY2soeUNvLCB4Q28sIGh1bWFuUGxheWVyLCBjb21wdXRlclBsYXllcikgPT09IFwiYWxyZWFkeSBiZWVuIGhpdCFcIlxuICApIHtcbiAgICBwbGFjZVJhbmRvbUF0dGFjayhnZXRSYW5kb21JbnQoOCksIGdldFJhbmRvbUludCg4KSk7XG4gIH0gZWxzZSBpZiAoaXNTaGlwSGl0KSB7XG4gICAgc2VsZWN0ZWRDZWxsLnNyYyA9IFwiLi9pbWcvZXhwbG9kZS5wbmdcIjtcbiAgfSBlbHNlIHtcbiAgICBzZWxlY3RlZENlbGwuc3JjID0gXCIuL2ltZy9taXNzLnBuZ1wiO1xuICB9XG59XG4iLCIvLyBDcmVhdGUgYSBHYW1lYm9hcmQgY2xhc3MvZmFjdG9yeS5cbi8vIE5vdGUgdGhhdCB3ZSBoYXZlIG5vdCB5ZXQgY3JlYXRlZCBhbnkgVXNlciBJbnRlcmZhY2UuIFdlIHNob3VsZCBrbm93IG91ciBjb2RlIGlzIGNvbWluZyB0b2dldGhlciBieSBydW5uaW5nIHRoZSB0ZXN0cy4gWW91IHNob3VsZG7igJl0IGJlIHJlbHlpbmcgb24gY29uc29sZS5sb2cgb3IgRE9NIG1ldGhvZHMgdG8gbWFrZSBzdXJlIHlvdXIgY29kZSBpcyBkb2luZyB3aGF0IHlvdSBleHBlY3QgaXQgdG8uXG4vLyBHYW1lYm9hcmRzIHNob3VsZCBiZSBhYmxlIHRvIHBsYWNlIHNoaXBzIGF0IHNwZWNpZmljIGNvb3JkaW5hdGVzIGJ5IGNhbGxpbmcgdGhlIHNoaXAgZmFjdG9yeSBvciBjbGFzcy5cbi8vIEdhbWVib2FyZHMgc2hvdWxkIGhhdmUgYSByZWNlaXZlQXR0YWNrIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBwYWlyIG9mIGNvb3JkaW5hdGVzLCBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBhdHRhY2sgaGl0IGEgc2hpcCBhbmQgdGhlbiBzZW5kcyB0aGUg4oCYaGl04oCZIGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXAsIG9yIHJlY29yZHMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtaXNzZWQgc2hvdC5cbi8vIEdhbWVib2FyZHMgc2hvdWxkIGtlZXAgdHJhY2sgb2YgbWlzc2VkIGF0dGFja3Mgc28gdGhleSBjYW4gZGlzcGxheSB0aGVtIHByb3Blcmx5LlxuLy8gR2FtZWJvYXJkcyBzaG91bGQgYmUgYWJsZSB0byByZXBvcnQgd2hldGhlciBvciBub3QgYWxsIG9mIHRoZWlyIHNoaXBzIGhhdmUgYmVlbiBzdW5rLlxuXG4vL0FzcGVjdCA9IE5vcnRoLCBTb3V0aCwgRWFzdCwgV2VzdFxuLy95Q28gPSB3aGVyZSB0aGUgc3RhcnRpbmcgcG9zIG9mIHRoZSBwbGFjZW1lbnQgaXMgb24gdGhlIHkgYXhpc1xuLy94Q28gPSB3aGVyZSB0aGUgc3RhcnRpbmcgcG9zIG9mIHRoZSBwbGFjZW1lbnQgaXMgb24gdGhlIHggYXhpc1xuLy9zaGlwTGVuZ3RoID0gdGhlIHNoaXBzLntzaGlwfS5sZW5ndGggLSBob3cgbWFueSBwbGFjZXMgaXQgd2lsbCBiZSBwdXQgYWNyb3NzXG4vL0lkZWEgaXMgdGhhdCB5b3UgY2hvb3NlIGFuIFgvWSBzdGFydGluZyBzcG90LCBhbmQgYW4gYXNwZWN0LiBUaGVuIHdlIGRvIGFuIGlmIGZvcm11bGEgdG8gY2hlY2sgdGhhdCB5b3UgY2FuIHBsYWNlIHRoZXJlLiBJZiB5b3UgY2FuJ3QgYmVjdXNlIHlvdSdyZSBvdXQgb2YgYm91bmRzIHRocm93IGFuIGVycm9yLlxuLy9JZiB5b3UgY2FuIHBsYWNlIHRoZXJlLCBwdXNoIGFuIG8gdG8gdGhlIGdhbWVib2FyZCBhcnJheSwgYW5kIHNlcXVlbnRpYWxseSBwdXNoIGJhc2VkIG9uIHRoZSBhc3BlY3QgKE4sRSxTLFcpIHVudGlsIHRoZSBsZW5ndGggb2YgdGhlIHNoaXAgaGFzIGJlZW4gcmVhY2hlZC5cblxuZXhwb3J0IGZ1bmN0aW9uIHBsYWNlU2hpcCh5Q28sIHhDbywgcGxheWVyLCBhc3BlY3QsIHNoaXBUeXBlKSB7XG4gIC8vIFByZXZlbnQgeENvIG9yIHlDbyBiZWluZyBvdXQgb2YgYm91bmRzXG4gIC8vdG9kbzogZG8gSSBuZWVkIHRvIGFkZCB0aGUgc2hpcCBsZW5ndGggKyB5Q28veENvIHdpdGhpbiB0aGUgYXNwZWN0IHRvIGluaXRpYWxseSBkZXRlcm1pbmUgd2hldGhlciBvciBub3QgdGhlIHNoaXAgaXMgd2l0aGluIGJvdW5kcz9cblxuICBpZiAoeUNvID49IDggfHwgeENvID49IDggfHwgcGxheWVyLmdhbWVib2FyZFt5Q29dW3hDb10gPT09IFwieFwiKSB7XG4gICAgcmV0dXJuIFwicGxhY2VtZW50IG91dCBvZiBib3VuZHMgb3IgdGFrZW5cIjtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGxheWVyLnNoaXBzW3NoaXBUeXBlXS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGlmICh5Q28gPj0gOCB8fCB4Q28gPj0gOCB8fCBwbGF5ZXIuZ2FtZWJvYXJkW3lDb11beENvXSA9PT0gXCJ4XCIpIHtcbiAgICAgICAgcmV0dXJuIFwicGxhY2VtZW50IG91dCBvZiBib3VuZHNcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllci5nYW1lYm9hcmRbeUNvXVt4Q29dID0gXCJ4XCI7XG4gICAgICAgIHBsYXllci5zaGlwc1tzaGlwVHlwZV0uY29vcmRzLnB1c2goW3lDbywgeENvXSk7XG4gICAgICAgIHN3aXRjaCAoYXNwZWN0KSB7XG4gICAgICAgICAgY2FzZSBcIm5vcnRoXCI6XG4gICAgICAgICAgICB5Q28tLTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJlYXN0XCI6XG4gICAgICAgICAgICB4Q28rKztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJzb3V0aFwiOlxuICAgICAgICAgICAgeUNvKys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwid2VzdFwiOlxuICAgICAgICAgICAgeENvLS07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vL3JlY2VpdmUgYXR0YWNrXG4vL0dhbWVib2FyZHMgc2hvdWxkIGhhdmUgYSByZWNlaXZlQXR0YWNrIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBwYWlyIG9mIGNvb3JkaW5hdGVzLCBkZXRlcm1pbmVzIHdoZXRoZXIgb3Igbm90IHRoZSBhdHRhY2sgaGl0IGEgc2hpcCBhbmQgdGhlbiBzZW5kcyB0aGUg4oCYaGl04oCZIGZ1bmN0aW9uIHRvIHRoZSBjb3JyZWN0IHNoaXAsIG9yIHJlY29yZHMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBtaXNzZWQgc2hvdC5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeUNvLCB4Q28sIGJlaW5nQXR0YWNrZWQsIGF0dGFja2VyKSB7XG4gIGNvbnNvbGUubG9nKFwieTogXCIsIHlDbywgXCJ4OiBcIiwgeENvKTtcbiAgLy9jaGVjayBpZiBwbGFjZSBoYXMgYWxyZWFkeSBiZWVuIGhpdFxuICBpZiAoYmVpbmdBdHRhY2tlZC5nYW1lYm9hcmRbeUNvXVt4Q29dID09PSBcIm9cIikge1xuICAgIGNvbnNvbGUubG9nKFwiYWxyZWFkeSBiZWVuIGhpdCFcIik7XG4gIH0gZWxzZSB7XG4gICAgLy9tYXJrIGdhbWVib2FyZCBhcyBoaXRcbiAgICBiZWluZ0F0dGFja2VkLmdhbWVib2FyZFt5Q29dW3hDb10gPSBcIm9cIjtcbiAgICBsZXQgY29uZGl0aW9uTWV0ID0gZmFsc2U7XG4gICAgLy9sb29wIHRocm91Z2ggcGxheWVyb25lc2hpcHMuc2hpcC5jb29yZHMgYW5kIGNoZWNrIGlmIGFueSBvZiB0aGUgdmFsdWUgY29vcmRzIG1hdGNoIHljby94Y29cblxuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGJlaW5nQXR0YWNrZWQuc2hpcHMpKSB7XG4gICAgICBpZiAodmFsdWUuY29vcmRzKSB7XG4gICAgICAgIGZvciAoY29uc3QgW3NoaXBZLCBzaGlwWF0gb2YgdmFsdWUuY29vcmRzKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXG4gICAgICAgICAgLy8gICBgQ2hlY2tpbmcgY29vcmRpbmF0ZXM6ICR7c2hpcFl9LCAke3NoaXBYfSBhZ2FpbnN0ICR7eUNvfSwgJHt4Q299YFxuICAgICAgICAgIC8vICk7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgcGFyc2VJbnQoc2hpcFkpID09PSBwYXJzZUludCh5Q28pICYmXG4gICAgICAgICAgICBwYXJzZUludChzaGlwWCkgPT09IHBhcnNlSW50KHhDbylcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbk1ldCA9IHRydWU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhpdCBkZXRlY3RlZCBvbiBzaGlwOlwiLCBrZXkpO1xuICAgICAgICAgICAgYmVpbmdBdHRhY2tlZC5zaGlwc1trZXldLmdldEhpdCgpO1xuICAgICAgICAgICAgYmVpbmdBdHRhY2tlZC5zaGlwc1trZXldLmlzU3VuaygpO1xuICAgICAgICAgICAgYmVpbmdBdHRhY2tlZC50b3RhbExlbmd0aFJlbWFpbmluZy0tO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgIGBUb3RhbCBzaGlwIHNwYWNlcyByZW1haW5pbmcgZm9yIHBsYXllcjogJHtiZWluZ0F0dGFja2VkLnRvdGFsTGVuZ3RoUmVtYWluaW5nfSFgXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGJlaW5nQXR0YWNrZWQuc2hpcHNba2V5XS5zdW5rKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3Ugc3VuayB0aGUgJHtrZXl9IWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uTWV0KSB7XG4gICAgICBtaXNzZWRBdHRhY2soYXR0YWNrZXIpO1xuICAgICAgY29uc29sZS5sb2coXCJNaXNzIVwiKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gR2FtZWJvYXJkcyBzaG91bGQga2VlcCB0cmFjayBvZiBtaXNzZWQgYXR0YWNrcyBzbyB0aGV5IGNhbiBkaXNwbGF5IHRoZW0gcHJvcGVybHkuXG5leHBvcnQgZnVuY3Rpb24gbWlzc2VkQXR0YWNrKGN1cnJlbnRQbGF5ZXIpIHtcbiAgY3VycmVudFBsYXllci5taXNzZWRBdHRhY2tzVG90YWwrKztcbn1cbiIsImNvbnN0IHNoaXBzQ29uZmlnID0gW1xuICB7XG4gICAgc2hpcElkOiBcImNhcnJpZXJcIixcbiAgICBidXR0b25JZDogXCJodW1hbi1idXR0b24tY2FycmllclwiLFxuICAgIGFzcGVjdElkOiBcImh1bWFuLWFzcGVjdC1jYXJyaWVyXCIsXG4gIH0sXG4gIHtcbiAgICBzaGlwSWQ6IFwic3VibWFyaW5lXCIsXG4gICAgYnV0dG9uSWQ6IFwiaHVtYW4tYnV0dG9uLXN1Ym1hcmluZVwiLFxuICAgIGFzcGVjdElkOiBcImh1bWFuLWFzcGVjdC1zdWJtYXJpbmVcIixcbiAgfSxcbiAge1xuICAgIHNoaXBJZDogXCJiYXR0bGVzaGlwXCIsXG4gICAgYnV0dG9uSWQ6IFwiaHVtYW4tYnV0dG9uLWJhdHRsZXNoaXBcIixcbiAgICBhc3BlY3RJZDogXCJodW1hbi1hc3BlY3QtYmF0dGxlc2hpcFwiLFxuICB9LFxuICB7XG4gICAgc2hpcElkOiBcInZlc3NlbFwiLFxuICAgIGJ1dHRvbklkOiBcImh1bWFuLWJ1dHRvbi12ZXNzZWxcIixcbiAgICBhc3BlY3RJZDogXCJodW1hbi1hc3BlY3QtdmVzc2VsXCIsXG4gIH0sXG4gIHtcbiAgICBzaGlwSWQ6IFwiZGVzdHJveWVyXCIsXG4gICAgYnV0dG9uSWQ6IFwiaHVtYW4tYnV0dG9uLWRlc3Ryb3llclwiLFxuICAgIGFzcGVjdElkOiBcImh1bWFuLWFzcGVjdC1kZXN0cm95ZXJcIixcbiAgfSxcbiAge1xuICAgIHNoaXBJZDogXCJjb21wdXRlci1jYXJyaWVyXCIsXG4gICAgYnV0dG9uSWQ6IFwiY29tcHV0ZXItYnV0dG9uLWNhcnJpZXJcIixcbiAgICBhc3BlY3RJZDogXCJodW1hbi1hc3BlY3QtY2FycmllclwiLFxuICB9LFxuICB7XG4gICAgc2hpcElkOiBcImNvbXB1dGVyLXN1Ym1hcmluZVwiLFxuICAgIGJ1dHRvbklkOiBcImNvbXB1dGVyLWJ1dHRvbi1zdWJtYXJpbmVcIixcbiAgICBhc3BlY3RJZDogXCJjb21wdXRlci1hc3BlY3Qtc3VibWFyaW5lXCIsXG4gIH0sXG4gIHtcbiAgICBzaGlwSWQ6IFwiY29tcHV0ZXItYmF0dGxlc2hpcFwiLFxuICAgIGJ1dHRvbklkOiBcImNvbXB1dGVyLWJ1dHRvbi1iYXR0bGVzaGlwXCIsXG4gICAgYXNwZWN0SWQ6IFwiY29tcHV0ZXItYXNwZWN0LWJhdHRsZXNoaXBcIixcbiAgfSxcbiAge1xuICAgIHNoaXBJZDogXCJjb21wdXRlci12ZXNzZWxcIixcbiAgICBidXR0b25JZDogXCJjb21wdXRlci1idXR0b24tdmVzc2VsXCIsXG4gICAgYXNwZWN0SWQ6IFwiY29tcHV0ZXItYXNwZWN0LXZlc3NlbFwiLFxuICB9LFxuICB7XG4gICAgc2hpcElkOiBcImNvbXB1dGVyLWRlc3Ryb3llclwiLFxuICAgIGJ1dHRvbklkOiBcImNvbXB1dGVyLWJ1dHRvbi1kZXN0cm95ZXJcIixcbiAgICBhc3BlY3RJZDogXCJjb21wdXRlci1hc3BlY3QtZGVzdHJveWVyXCIsXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBhZGRBc3BlY3RTd2l0Y2hpbmcoc2hpcElkLCBidXR0b25JZCwgYXNwZWN0SWQpIHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7YnV0dG9uSWR9YCk7XG4gIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzaGlwSWR9YCk7XG4gIGNvbnN0IGFzcGVjdFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHthc3BlY3RJZH1gKTtcbiAgbGV0IHJvdFRyYWNrZXIgPSAwO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHJvdFRyYWNrZXIgPSAocm90VHJhY2tlciArIDEpICUgNDsgLy8gQ3ljbGUgdGhyb3VnaCAwLCAxLCAyLCAzXG4gICAgbGV0IGFzcGVjdCA9IFwiTm9ydGhcIjtcbiAgICBzaGlwLmNsYXNzTGlzdC50b2dnbGUoXCJyb3RhdGVkXCIpO1xuXG4gICAgLy8gRGV0ZXJtaW5lIGFzcGVjdCBiYXNlZCBvbiByb3RUcmFja2VyXG4gICAgc3dpdGNoIChyb3RUcmFja2VyKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGFzcGVjdCA9IFwiTm9ydGhcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGFzcGVjdCA9IFwiRWFzdFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgYXNwZWN0ID0gXCJTb3V0aFwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgYXNwZWN0ID0gXCJXZXN0XCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSB0aGUgYXNwZWN0IHRleHRcbiAgICBhc3BlY3RUZXh0LnRleHRDb250ZW50ID0gYEFzcGVjdDogJHthc3BlY3R9YDtcbiAgfSk7XG59XG5cbi8vIExvb3AgdGhyb3VnaCB0aGUgY29uZmlndXJhdGlvbiBhcnJheSBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyc1xuc2hpcHNDb25maWcuZm9yRWFjaCgoeyBzaGlwSWQsIGJ1dHRvbklkLCBhc3BlY3RJZCB9KSA9PiB7XG4gIGFkZEFzcGVjdFN3aXRjaGluZyhzaGlwSWQsIGJ1dHRvbklkLCBhc3BlY3RJZCk7XG59KTtcbiIsImltcG9ydCB7IGh1bWFuUGxheWVyLCBjb21wdXRlclBsYXllciB9IGZyb20gXCIuL3BsYXllcnNcIjtcbmltcG9ydCB7IHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjayB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHsgcGxhY2VSYW5kb21BdHRhY2ssIGdldFJhbmRvbUludCB9IGZyb20gXCIuL2NvbXB1dGVyVHVyblwiO1xuXG5mdW5jdGlvbiBjcmVhdGVHcmlkRWxlbWVudCh4LCB5KSB7XG4gIGNvbnN0IHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJvdy1kYXRhXCIpO1xuICBjb25zdCBsYXN0Um93ID0gcm93c1tyb3dzLmxlbmd0aCAtIDFdOyAvLyBHZXQgdGhlIG1vc3QgcmVjZW50bHkgYWRkZWQgcm93XG4gIGNvbnN0IG5ld0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG5ld0ltZy5zcmMgPSBcIi4vaW1nL2ltYWdlLnBuZ1wiO1xuICBuZXdJbWcuY2xhc3NOYW1lID0gXCJncmlkLWJveFwiO1xuXG4gIG5ld0ltZy5zdHlsZS5tYXJnaW4gPSBcIjFweFwiO1xuICBuZXdJbWcuc2V0QXR0cmlidXRlKFwieS1kYXRhXCIsIHkpO1xuICBuZXdJbWcuc2V0QXR0cmlidXRlKFwieC1kYXRhXCIsIHgpO1xuICBsYXN0Um93LmFwcGVuZChuZXdJbWcpO1xufVxuXG5jb25zdCBodW1hblRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1hbi1yb3dzXCIpO1xuY29uc3QgY29tcHV0ZXJUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItcm93c1wiKTtcblxuZnVuY3Rpb24gY3JlYXRlTmV3Um93cyhwbGF5ZXIpIHtcbiAgY29uc3QgbmV3Um93cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgbmV3Um93cy5jbGFzc05hbWUgPSBcInJvdy1kYXRhXCI7XG4gIGlmIChwbGF5ZXIgPT09IGh1bWFuUGxheWVyKSB7XG4gICAgaHVtYW5UYWJsZS5hcHBlbmRDaGlsZChuZXdSb3dzKTtcbiAgfSBlbHNlIHtcbiAgICBjb21wdXRlclRhYmxlLmFwcGVuZENoaWxkKG5ld1Jvd3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkKHBsYXllcikge1xuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGxheWVyLmdhbWVib2FyZFswXS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBsZXQgeSA9IGluZGV4O1xuICAgIGNyZWF0ZU5ld1Jvd3MocGxheWVyKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGxheWVyLmdhbWVib2FyZFswXS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGNyZWF0ZUdyaWRFbGVtZW50KGluZGV4LCB5KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwRHVtbXlEYXRhKCkge1xuICBwbGFjZVNoaXAoNSwgNSwgaHVtYW5QbGF5ZXIsIFwibm9ydGhcIiwgXCJjYXJyaWVyXCIpO1xuICBwbGFjZVNoaXAoNCwgNCwgaHVtYW5QbGF5ZXIsIFwibm9ydGhcIiwgXCJiYXR0bGVzaGlwXCIpO1xuICBwbGFjZVNoaXAoMywgMywgaHVtYW5QbGF5ZXIsIFwibm9ydGhcIiwgXCJzdWJtYXJpbmVcIik7XG4gIHBsYWNlU2hpcCgyLCAyLCBodW1hblBsYXllciwgXCJub3J0aFwiLCBcInZlc3NlbFwiKTtcbiAgcGxhY2VTaGlwKDEsIDEsIGh1bWFuUGxheWVyLCBcIm5vcnRoXCIsIFwiZGVzdHJveWVyXCIpO1xuXG4gIHBsYWNlU2hpcCg1LCA1LCBjb21wdXRlclBsYXllciwgXCJub3J0aFwiLCBcImNhcnJpZXJcIik7XG4gIHBsYWNlU2hpcCg0LCA0LCBjb21wdXRlclBsYXllciwgXCJub3J0aFwiLCBcImJhdHRsZXNoaXBcIik7XG4gIHBsYWNlU2hpcCgzLCAzLCBjb21wdXRlclBsYXllciwgXCJub3J0aFwiLCBcInN1Ym1hcmluZVwiKTtcbiAgcGxhY2VTaGlwKDIsIDIsIGNvbXB1dGVyUGxheWVyLCBcIm5vcnRoXCIsIFwidmVzc2VsXCIpO1xuICBwbGFjZVNoaXAoMSwgMSwgY29tcHV0ZXJQbGF5ZXIsIFwibm9ydGhcIiwgXCJkZXN0cm95ZXJcIik7XG59XG5mdW5jdGlvbiBzdGFydEdhbWUoKSB7XG4gIGNyZWF0ZUJvYXJkKGh1bWFuUGxheWVyKTtcbiAgY3JlYXRlQm9hcmQoY29tcHV0ZXJQbGF5ZXIpO1xuICBwbGFjZVNoaXBEdW1teURhdGEoKTtcbiAgbmV4dFR1cm4oKTsgLy8gU3RhcnQgdGhlIGZpcnN0IHR1cm5cbn1cblxuZnVuY3Rpb24gbmV4dFR1cm4oKSB7XG4gIC8vIENoZWNrIGlmIHRoZSBnYW1lIGlzIG92ZXIgYmVmb3JlIHByb2NlZWRpbmdcbiAgaWYgKGh1bWFuUGxheWVyLnRvdGFsTGVuZ3RoUmVtYWluaW5nIDw9IDApIHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbXB1dGVyIHdpbnMhXCIpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmIChjb21wdXRlclBsYXllci50b3RhbExlbmd0aFJlbWFpbmluZyA8PSAwKSB7XG4gICAgY29uc29sZS5sb2coXCJIdW1hbiB3aW5zIVwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBBbHRlcm5hdGUgdHVybnMgYmFzZWQgb24gdHVyblRyYWNrZXJcbiAgaWYgKHR1cm5UcmFja2VyICUgMiA9PT0gMCkge1xuICAgIGNvbnNvbGUubG9nKFwiSHVtYW4gcGxheWVyJ3MgdHVyblwiKTtcbiAgICBwbGF5ZXJUdXJuKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJDb21wdXRlciBwbGF5ZXIncyB0dXJuXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcGxhY2VSYW5kb21BdHRhY2soZ2V0UmFuZG9tSW50KDgpLCBnZXRSYW5kb21JbnQoOCkpO1xuICAgICAgdHVyblRyYWNrZXIrKztcbiAgICAgIG5leHRUdXJuKCk7IC8vIENhbGwgbmV4dCB0dXJuIGFmdGVyIGNvbXB1dGVyJ3MgbW92ZVxuICAgIH0sIDEwMDApOyAvLyBBZGQgYSBkZWxheSBmb3IgdGhlIGNvbXB1dGVyJ3MgbW92ZVxuICB9XG59XG5cbmxldCB0dXJuVHJhY2tlciA9IDA7XG5cbmZ1bmN0aW9uIHBsYXllclR1cm4oKSB7XG4gIGNvbXB1dGVyVGFibGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVBsYXllckNsaWNrKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUGxheWVyQ2xpY2soZXZlbnQpIHtcbiAgY29uc3QgeERhdGEgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwieC1kYXRhXCIpO1xuICBjb25zdCB5RGF0YSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ5LWRhdGFcIik7XG5cbiAgaWYgKCF4RGF0YSB8fCAheURhdGEpIHJldHVybjtcblxuICBpZiAoY29tcHV0ZXJQbGF5ZXIuZ2FtZWJvYXJkW3lEYXRhXVt4RGF0YV0gPT09IFwieFwiKSB7XG4gICAgZXZlbnQudGFyZ2V0LnNyYyA9IFwiLi9pbWcvZXhwbG9kZS5wbmdcIjtcbiAgICBjb25zb2xlLmxvZyhcIkhpdCFcIik7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnQudGFyZ2V0LnNyYyA9IFwiLi9pbWcvbWlzcy5wbmdcIjtcbiAgICBjb25zb2xlLmxvZyhcIk1pc3MhXCIpO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayh5RGF0YSwgeERhdGEsIGNvbXB1dGVyUGxheWVyLCBodW1hblBsYXllcik7XG5cbiAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIGFmdGVyIHBsYXllcidzIHR1cm4gdG8gcHJldmVudCBtdWx0aXBsZSBjbGlja3NcbiAgY29tcHV0ZXJUYWJsZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlUGxheWVyQ2xpY2spO1xuXG4gIC8vIEluY3JlbWVudCB0dXJuIHRyYWNrZXIgYW5kIHByb2NlZWQgdG8gdGhlIG5leHQgdHVyblxuICB0dXJuVHJhY2tlcisrO1xuICBuZXh0VHVybigpO1xufVxuXG5zdGFydEdhbWUoKTtcbiIsImltcG9ydCB7IHBsYXllclNoaXBzIGFzIHNocHMgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZCgpIHtcbiAgcmV0dXJuIFtcbiAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgXTtcbn1cblxuLy8gQ3JlYXRlIGEgUGxheWVyIGNsYXNzL2ZhY3RvcnkuXG4vLyBUaGVyZSB3aWxsIGJlIHR3byB0eXBlcyBvZiBwbGF5ZXJzIGluIHRoZSBnYW1lLCDigJhyZWFs4oCZIHBsYXllcnMgYW5kIOKAmGNvbXB1dGVy4oCZIHBsYXllcnMuXG4vLyBFYWNoIHBsYXllciBvYmplY3Qgc2hvdWxkIGNvbnRhaW4gaXRzIG93biBnYW1lYm9hcmQuXG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcihnYW1lYm9hcmQsIHNoaXBzKSB7XG4gICAgKHRoaXMuZ2FtZWJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCkpLFxuICAgICAgKHRoaXMuc2hpcHMgPSBzaGlwcyksXG4gICAgICAodGhpcy50b3RhbExlbmd0aFJlbWFpbmluZyA9IDE1KTsgLy8gTW92ZWQgaGVyZVxuICAgIHRoaXMubWlzc2VkQXR0YWNrc1RvdGFsID0gMDsgLy8gTW92ZWQgaGVyZVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBodW1hblBsYXllciA9IG5ldyBQbGF5ZXIoY3JlYXRlR2FtZWJvYXJkKCksIHNocHMpO1xuZXhwb3J0IGNvbnN0IGNvbXB1dGVyUGxheWVyID0gbmV3IFBsYXllcihjcmVhdGVHYW1lYm9hcmQoKSwgc2hwcyk7XG4iLCJleHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIHRoaXMuY29vcmRzID0gW107XG4gICAgdGhpcy5oaXQgPSAwO1xuICB9XG5cbiAgZ2V0SGl0KCkge1xuICAgIHJldHVybiB0aGlzLmhpdCsrO1xuICB9XG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXQgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAodGhpcy5zdW5rID0gdHJ1ZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBwbGF5ZXJTaGlwcyA9IHtcbiAgY2FycmllcjogbmV3IFNoaXAoNSksXG4gIGJhdHRsZXNoaXA6IG5ldyBTaGlwKDMpLFxuICBzdWJtYXJpbmU6IG5ldyBTaGlwKDQpLFxuICB2ZXNzZWw6IG5ldyBTaGlwKDIpLFxuICBkZXN0cm95ZXI6IG5ldyBTaGlwKDEpLFxufTtcblxuZXhwb3J0IGNvbnN0IHBsYXllclR3b1NoaXBzID0ge1xuICBjYXJyaWVyOiBuZXcgU2hpcCg1KSxcbiAgYmF0dGxlc2hpcDogbmV3IFNoaXAoMyksXG4gIHN1Ym1hcmluZTogbmV3IFNoaXAoNCksXG4gIHZlc3NlbDogbmV3IFNoaXAoMiksXG4gIGRlc3Ryb3llcjogbmV3IFNoaXAoMSksXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9wbGF5R2FtZS5qc1wiOyAvLyBJbXBvcnRpbmcgcGxheUdhbWUuanMsIHdoaWNoIGNvbnRhaW5zIGNvbnNvbGUubG9nKFwiYVwiKVxuaW1wb3J0IFwiLi9tb2R1bGVzL2h0bWxDaGFuZ2VBc3BlY3QuanNcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==