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
___CSS_LOADER_EXPORT___.push([module.id, `/* Main game styles */
body {
    font-family: 'Comic Sans MS', cursive, sans-serif;
    background-color: #f0f0f0;
    background-image: linear-gradient(#e5e5e5 1px, transparent 1px),
                      linear-gradient(90deg, #e5e5e5 1px, transparent 1px);
    background-size: 20px 20px;
    margin: 0;
    padding: 20px;
    color: #333;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #2a5885;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  .game-area {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin-bottom: 30px;
  }
  
  .board-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .board-title {
    margin-bottom: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    color: #2a5885;
  }
  
  .board {
    display: inline-block;
    background-color: #fff;
    padding: 5px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    border: 2px solid #333;
    border-radius: 5px;
  }
  
  .board-header, .board-row {
    display: flex;
  }
  
  .header-cell, .row-label {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #2a5885;
  }
  
  .disabled-button {
    background-color: #9bafc2 !important;
    cursor: not-allowed !important;
    opacity: 0.6;
  }
  
  .disabled-button:hover {
    background-color: #9bafc2 !important;
  }

  .cell {
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s;
  }
  
  /* Cell states */
  .water {
    background-color: #e6f7ff;
  }
  
  .ship {
    background-color: #6b6b6b;
    border: 1px solid #555;
  }
  
  .miss {
    background-color: #e6f7ff;
    position: relative;
  }
  
  .miss::after {
    content: '•';
    font-size: 24px;
    color: #333;
  }
  
  .hit {
    background-color: #ff6b6b;
    position: relative;
  }
  
  .hit::after {
    content: '×';
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
  
  /* Player boards interaction */
  #computer-board .cell:hover:not(.hit):not(.miss) {
    background-color: rgba(42, 88, 133, 0.2);
  }
  
  /* Player cannot click on their own board */
  #player-board .cell {
    cursor: default;
  }
  
  /* Message area */
  .message-area {
    text-align: center;
    padding: 15px;
    margin: 20px 0;
    background-color: #fff;
    border: 2px solid #333;
    border-radius: 5px;
    font-size: 1.2rem;
    min-height: 50px;
  }
  
  /* Controls */
  .controls {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 15px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #2a5885;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-family: inherit;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #1d3e5f;
  }
  
  /* Game over overlay */
  .game-over {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
  }
  
  .game-over-content {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    max-width: 500px;
  }
  
  .hidden {
    display: none;
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
    .game-area {
      flex-direction: column;
      align-items: center;
    }
    
    .board-container {
      margin-bottom: 30px;
    }
  }`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;IACI,iDAAiD;IACjD,yBAAyB;IACzB;0EACsE;IACtE,0BAA0B;IAC1B,SAAS;IACT,aAAa;IACb,WAAW;EACb;;EAEA;IACE,iBAAiB;IACjB,cAAc;IACd,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,kBAAkB;IAClB,mBAAmB;IACnB,cAAc;IACd,2CAA2C;EAC7C;;EAEA;IACE,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,SAAS;IACT,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,cAAc;EAChB;;EAEA;IACE,qBAAqB;IACrB,sBAAsB;IACtB,YAAY;IACZ,2CAA2C;IAC3C,sBAAsB;IACtB,kBAAkB;EACpB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,cAAc;EAChB;;EAEA;IACE,oCAAoC;IACpC,8BAA8B;IAC9B,YAAY;EACd;;EAEA;IACE,oCAAoC;EACtC;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,oBAAoB;EACtB;;EAEA,gBAAgB;EAChB;IACE,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;IACzB,sBAAsB;EACxB;;EAEA;IACE,yBAAyB;IACzB,kBAAkB;EACpB;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,WAAW;EACb;;EAEA;IACE,yBAAyB;IACzB,kBAAkB;EACpB;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,WAAW;EACb;;EAEA,8BAA8B;EAC9B;IACE,wCAAwC;EAC1C;;EAEA,2CAA2C;EAC3C;IACE,eAAe;EACjB;;EAEA,iBAAiB;EACjB;IACE,kBAAkB;IAClB,aAAa;IACb,cAAc;IACd,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;EAClB;;EAEA,aAAa;EACb;IACE,aAAa;IACb,uBAAuB;IACvB,gBAAgB;IAChB,SAAS;EACX;;EAEA;IACE,kBAAkB;IAClB,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,eAAe;IACf,oBAAoB;IACpB,iCAAiC;EACnC;;EAEA;IACE,yBAAyB;EAC3B;;EAEA,sBAAsB;EACtB;IACE,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;EACd;;EAEA;IACE,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf;;EAEA,sBAAsB;EACtB;IACE;MACE,sBAAsB;MACtB,mBAAmB;IACrB;;IAEA;MACE,mBAAmB;IACrB;EACF","sourcesContent":["/* Main game styles */\nbody {\n    font-family: 'Comic Sans MS', cursive, sans-serif;\n    background-color: #f0f0f0;\n    background-image: linear-gradient(#e5e5e5 1px, transparent 1px),\n                      linear-gradient(90deg, #e5e5e5 1px, transparent 1px);\n    background-size: 20px 20px;\n    margin: 0;\n    padding: 20px;\n    color: #333;\n  }\n  \n  .container {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 20px;\n    box-sizing: border-box;\n  }\n  \n  h1 {\n    text-align: center;\n    margin-bottom: 30px;\n    color: #2a5885;\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);\n  }\n  \n  .game-area {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 40px;\n    margin-bottom: 30px;\n  }\n  \n  .board-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  \n  .board-title {\n    margin-bottom: 10px;\n    font-size: 1.5rem;\n    font-weight: bold;\n    color: #2a5885;\n  }\n  \n  .board {\n    display: inline-block;\n    background-color: #fff;\n    padding: 5px;\n    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);\n    border: 2px solid #333;\n    border-radius: 5px;\n  }\n  \n  .board-header, .board-row {\n    display: flex;\n  }\n  \n  .header-cell, .row-label {\n    width: 30px;\n    height: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: bold;\n    color: #2a5885;\n  }\n  \n  .disabled-button {\n    background-color: #9bafc2 !important;\n    cursor: not-allowed !important;\n    opacity: 0.6;\n  }\n  \n  .disabled-button:hover {\n    background-color: #9bafc2 !important;\n  }\n\n  .cell {\n    width: 30px;\n    height: 30px;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    transition: all 0.2s;\n  }\n  \n  /* Cell states */\n  .water {\n    background-color: #e6f7ff;\n  }\n  \n  .ship {\n    background-color: #6b6b6b;\n    border: 1px solid #555;\n  }\n  \n  .miss {\n    background-color: #e6f7ff;\n    position: relative;\n  }\n  \n  .miss::after {\n    content: '•';\n    font-size: 24px;\n    color: #333;\n  }\n  \n  .hit {\n    background-color: #ff6b6b;\n    position: relative;\n  }\n  \n  .hit::after {\n    content: '×';\n    font-size: 24px;\n    font-weight: bold;\n    color: #333;\n  }\n  \n  /* Player boards interaction */\n  #computer-board .cell:hover:not(.hit):not(.miss) {\n    background-color: rgba(42, 88, 133, 0.2);\n  }\n  \n  /* Player cannot click on their own board */\n  #player-board .cell {\n    cursor: default;\n  }\n  \n  /* Message area */\n  .message-area {\n    text-align: center;\n    padding: 15px;\n    margin: 20px 0;\n    background-color: #fff;\n    border: 2px solid #333;\n    border-radius: 5px;\n    font-size: 1.2rem;\n    min-height: 50px;\n  }\n  \n  /* Controls */\n  .controls {\n    display: flex;\n    justify-content: center;\n    margin-top: 20px;\n    gap: 15px;\n  }\n  \n  button {\n    padding: 10px 20px;\n    background-color: #2a5885;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    font-size: 1rem;\n    font-family: inherit;\n    transition: background-color 0.3s;\n  }\n  \n  button:hover {\n    background-color: #1d3e5f;\n  }\n  \n  /* Game over overlay */\n  .game-over {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 999;\n  }\n  \n  .game-over-content {\n    background-color: white;\n    padding: 30px;\n    border-radius: 10px;\n    text-align: center;\n    max-width: 500px;\n  }\n  \n  .hidden {\n    display: none;\n  }\n  \n  /* Responsive design */\n  @media (max-width: 768px) {\n    .game-area {\n      flex-direction: column;\n      align-items: center;\n    }\n    \n    .board-container {\n      margin-bottom: 30px;\n    }\n  }"],"sourceRoot":""}]);
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

/***/ "./src/UI/dom.js":
/*!***********************!*\
  !*** ./src/UI/dom.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// dom.js - Handles DOM manipulation and UI rendering
const { Battleship } = __webpack_require__(/*! ../game/game */ "./src/game/game.js");

class DOMHandler {
  constructor() {
    this.game = new Battleship();
    this.playerBoardElement = document.getElementById('player-board');
    this.computerBoardElement = document.getElementById('computer-board');
    this.messageElement = document.getElementById('message');
    this.resetButton = document.getElementById('reset-game');
  }

  initialize() {
    this.game.setup();
    this.renderBoards();
    this.updateMessage('Game is ready! You can randomly place your ships before starting or click on the computer\'s board to attack.');
  }

  renderBoards() {
    this.renderBoard(this.playerBoardElement, this.game.playerBoard.getBoardState(), true);
    
    const computerBoardView = this.game.computer.gameBoard.getBoardState().map(row => {
      return row.map(cell => {
        if (cell === 'S') return '~'; // Hide computer's ships
        return cell;
      });
    });
    
    this.renderBoard(this.computerBoardElement, computerBoardView, false);
  }

  renderBoard(boardElement, boardState, isPlayerBoard) {
    boardElement.innerHTML = '';
    
    // Create board header (column numbers)
    const headerRow = document.createElement('div');
    headerRow.className = 'board-header';
    
    const emptyCell = document.createElement('div');
    emptyCell.className = 'header-cell';
    headerRow.appendChild(emptyCell);
    
    for (let i = 0; i < 10; i++) {
      const headerCell = document.createElement('div');
      headerCell.className = 'header-cell';
      headerCell.textContent = i;
      headerRow.appendChild(headerCell);
    }
    
    boardElement.appendChild(headerRow);
    
    // Create board rows
    for (let i = 0; i < 10; i++) {
      const row = document.createElement('div');
      row.className = 'board-row';
      
      // Row label (row number)
      const rowLabel = document.createElement('div');
      rowLabel.className = 'row-label';
      rowLabel.textContent = i;
      row.appendChild(rowLabel);
      
      // Cells
      for (let j = 0; j < 10; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.x = i;
        cell.dataset.y = j;
        
        // Apply cell state styling
        switch (boardState[i][j]) {
          case 'S':
            cell.classList.add('ship');
            break;
          case 'O':
            cell.classList.add('miss');
            break;
          case 'X':
            cell.classList.add('hit');
            break;
          default:
            cell.classList.add('water');
        }
        
        row.appendChild(cell);
      }
      
      boardElement.appendChild(row);
    }
  }

  updateMessage(message) {
    this.messageElement.textContent = message;
  }

  showGameOver(winner) {
    const gameOverMessage = winner === 'player' 
      ? 'Congratulations! You won the battle!' 
      : 'You lost! The computer sank all your ships.';
    
    this.updateMessage(gameOverMessage);
    document.getElementById('game-over').classList.remove('hidden');
    document.getElementById('game-over-message').textContent = gameOverMessage;
  }

  playerRandomPlacement() {
    this.game.placePlayerShipsRandomly();
    this.renderBoards();
    this.updateMessage('Your ships were randomly placed! Click on the computer\'s board to start attacking.');
  }

  resetGame() {
    this.game = new Battleship();
    this.game.setup();
    this.renderBoards();
    this.updateMessage('Game reset! You can randomly place your ships before starting or click on the computer\'s board to attack.');
    document.getElementById('game-over').classList.add('hidden');
  }
}

module.exports = { DOMHandler };

/***/ }),

/***/ "./src/UI/events.js":
/*!**************************!*\
  !*** ./src/UI/events.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// events.js - Handles game events and user interactions
const { DOMHandler } = __webpack_require__(/*! ./dom */ "./src/UI/dom.js");

class EventHandler {
  constructor() {
    this.domHandler = new DOMHandler();
    this.isPlayerTurn = true;
    this.gameStarted = false; // Додаємо прапорець для відстеження, чи почалася гра
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Get computer board element
    const computerBoard = document.getElementById('computer-board');
    computerBoard.addEventListener('click', (e) => this.handleBoardClick(e));
    
    // Reset button
    const resetBtn = document.getElementById('reset-game');
    resetBtn.addEventListener('click', () => this.handleReset());
    
    // Random placement button
    const randomBtn = document.getElementById('random-placement');
    randomBtn.addEventListener('click', () => this.handleRandomPlacement());
  }

  handleBoardClick(event) {
    // Only allow clicks when it's player's turn
    if (!this.isPlayerTurn) return;
    
    const cell = event.target;
    
    // Ensure we clicked on a cell and not the board or row header
    if (!cell.classList.contains('cell')) return;
    
    const x = parseInt(cell.dataset.x);
    const y = parseInt(cell.dataset.y);
    
    // Prevent clicking on already attacked cells
    if (cell.classList.contains('hit') || cell.classList.contains('miss')) {
      this.domHandler.updateMessage('You already attacked this position! Try another one.');
      return;
    }
    
    // Якщо це перший хід гри, позначаємо що гра почалася і деактивуємо кнопку
    if (!this.gameStarted) {
      this.gameStarted = true;
      this.disableRandomPlacementButton();
    }
    
    this.processPlayerTurn(x, y);
  }
  
  processPlayerTurn(x, y) {
    try {
      // Execute player's move
      const result = this.domHandler.game.playerTurn(x, y);
      
      // Check for game over
      if (result && result.gameOver) {
        this.domHandler.renderBoards();
        this.domHandler.showGameOver('player');
        return;
      }
      
      // Check if hit - player gets another turn
      if (result && result.result === 'hit') {
        this.domHandler.renderBoards();
        this.domHandler.updateMessage('Hit! You get another turn. Attack again!');
        return;
      }
      
      // If miss, it's computer's turn
      this.isPlayerTurn = false;
      this.domHandler.updateMessage('Miss! Computer is thinking...');
      this.domHandler.renderBoards();
      
      // Give a slight delay before computer's move for better UX
      setTimeout(() => this.processComputerTurn(), 1000);
      
    } catch (error) {
      this.domHandler.updateMessage(`Error: ${error.message}`);
    }
  }
  
  processComputerTurn() {
    if (this.isPlayerTurn) return;
    
    // Execute computer's move
    const result = this.domHandler.game.computerTurn();
    
    // Check for game over
    if (result && result.gameOver) {
      this.domHandler.renderBoards();
      this.domHandler.showGameOver('computer');
      return;
    }
    
    // Check if hit - computer gets another turn
    if (result && result.result === 'hit') {
      this.domHandler.renderBoards();
      this.domHandler.updateMessage('Computer hit your ship! Computer gets another turn.');
      
      // Give a slight delay before computer's next move
      setTimeout(() => this.processComputerTurn(), 1000);
      return;
    }
    
    // If miss, it's player's turn again
    this.isPlayerTurn = true;
    this.domHandler.updateMessage('Computer missed! Your turn now.');
    this.domHandler.renderBoards();
  }
  
  handleReset() {
    this.domHandler.resetGame();
    this.isPlayerTurn = true;
    this.gameStarted = false; // Скидаємо прапорець початку гри
    this.enableRandomPlacementButton(); // Активуємо кнопку після скидання
  }

  handleRandomPlacement() {
    // Дозволяємо випадкове розміщення тільки якщо гра ще не почалася
    if (!this.gameStarted) {
      this.domHandler.playerRandomPlacement();
    }
  }
  
  // Метод для деактивації кнопки випадкового розміщення
  disableRandomPlacementButton() {
    const randomBtn = document.getElementById('random-placement');
    randomBtn.disabled = true;
    randomBtn.classList.add('disabled-button');
  }
  
  // Метод для активації кнопки випадкового розміщення
  enableRandomPlacementButton() {
    const randomBtn = document.getElementById('random-placement');
    randomBtn.disabled = false;
    randomBtn.classList.remove('disabled-button');
  }
  
  initialize() {
    this.domHandler.initialize();
    this.gameStarted = false; // Встановлюємо початковий стан гри
    this.enableRandomPlacementButton(); // Впевнюємося, що кнопка активна на початку
  }
}

module.exports = { EventHandler };

/***/ }),

/***/ "./src/game/computerPlayer.js":
/*!************************************!*\
  !*** ./src/game/computerPlayer.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { GameBoard } = __webpack_require__(/*! ./gameboard */ "./src/game/gameboard.js");
const { Player } = __webpack_require__(/*! ./player */ "./src/game/player.js");

class ComputerPlayer extends Player{
    constructor(){
        super('Computer');
        this.gameBoard = new GameBoard();
        this.lastHitCoordinates = [];
        this.potentialTargets = [];
    }

    placeShipRandomly(){
        const shipLengths = [4,3,3,2,2,2,1,1,1,1]; //All ships for game 

        for(const length of shipLengths){
            let placed = false;
            while(!placed){
                try {
                    const direction = Math.random() > 0.5? 'horizontal':'vertical';
                    const x = Math.floor(Math.random()*10);
                    const y = Math.floor(Math.random()*10);

                    this.gameBoard.addShip(direction,{x,y},length);
                    placed = true;
                } catch (error) {
                    
                }
            }
        }
    }

    makeSmartMove(enemyBoard) {
        if (this.lastHitCoordinates.length > 0) {
            if (this.potentialTargets.length > 0) {
                const target = this.potentialTargets.pop();
                try {
                    const result = enemyBoard.receiveAttack(target.x, target.y);
                    
                    if (result.result === 'hit') {
                        this.lastHitCoordinates.push({x: target.x, y: target.y});
                        this.addAdjacentCells(target.x, target.y);
                    }
                    return result;
                } catch (error) {
                    
                    return this.randomAttack(enemyBoard);
                }
            } else {
                const lastHit = this.lastHitCoordinates[this.lastHitCoordinates.length-1];
                this.addAdjacentCells(lastHit.x, lastHit.y);
                
                if (this.potentialTargets.length === 0) {
                    this.lastHitCoordinates = [];
                    return this.randomAttack(enemyBoard);
                }
                
                const target = this.potentialTargets.pop();
                try {
                    return enemyBoard.receiveAttack(target.x, target.y);
                } catch (error) {
                    return this.randomAttack(enemyBoard);
                }
            }
        }
        
        const attackResult = this.randomAttack(enemyBoard);
        
        if (attackResult.result === 'hit') {
            this.lastHitCoordinates.push({ x: attackResult.x, y: attackResult.y });
            this.addAdjacentCells(attackResult.x, attackResult.y);
        }
        
        return { result: attackResult.result, message: attackResult.message };
    }

    addAdjacentCells(x, y) {
        const directions = [
          { dx: -1, dy: 0 }, 
          { dx: 1, dy: 0 },  
          { dx: 0, dy: -1 }, 
          { dx: 0, dy: 1 }   
        ];
        
        for (const dir of directions) {
          const newX = x + dir.dx;
          const newY = y + dir.dy;
          
          // Check if coordinates in board field 
          if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
            // Add coordinates if they not in the potential targets list 
            if (!this.potentialTargets.some(target => target.x === newX && target.y === newY) &&
                !this.lastHitCoordinates.some(hit => hit.x === newX && hit.y === newY)) {
              this.potentialTargets.push({ x: newX, y: newY });
            }
          }
        }
      }
}

module.exports = {ComputerPlayer};

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {Ship} = __webpack_require__(/*! ./ship */ "./src/game/ship.js");
const {Player} = __webpack_require__(/*! ./player */ "./src/game/player.js");
const {GameBoard} = __webpack_require__(/*! ./gameboard */ "./src/game/gameboard.js");
const {ComputerPlayer} = __webpack_require__(/*! ./computerPlayer */ "./src/game/computerPlayer.js");

class Battleship{
    constructor(){
        this.playerBoard = new GameBoard();
        this.player = new Player('Human');
        this.computer = new ComputerPlayer();
        this.currentTurn = 'player';
    }

    setup(){
        this.computer.placeShipRandomly();

        
        this.placePlayerShipsDefault();
    }

    placePlayerShipsDefault() {
        this.playerBoard.addShip('horizontal', { x: 0, y: 0 }, 4);
        this.playerBoard.addShip('vertical', { x: 2, y: 2 }, 3);   
        this.playerBoard.addShip('horizontal', { x: 5, y: 5 }, 3);
        this.playerBoard.addShip('horizontal', { x: 9, y: 0 }, 2);   
        this.playerBoard.addShip('horizontal', { x: 7, y: 7 }, 2);
        this.playerBoard.addShip('vertical', { x: 0, y: 5 }, 2);  
        this.playerBoard.addShip('horizontal', { x: 3, y: 9 }, 1);
        this.playerBoard.addShip('vertical', { x: 5, y: 0 }, 1);   
        this.playerBoard.addShip('horizontal', { x: 9, y: 5 }, 1); 
        this.playerBoard.addShip('vertical', { x: 7, y: 3 }, 1);
    }

    
    placePlayerShipsRandomly() {
        this.playerBoard.placeShipsRandomly();
    }

    playerTurn(x,y){
        if(this.currentTurn !== 'player'){
            return { error: 'Not your turn' };
        }

        try {
            const result = this.player.attack(this.computer.gameBoard, x, y);

            if(this.computer.gameBoard.isGameOver()){
                return { gameOver: true, winner: 'player' };
            }

            // Only switch turns if it's a miss
            if(result.result === 'miss') {
                this.currentTurn = 'computer';
            }
            
            return { result: result.result };
        } catch (error) {
            console.log(`Error ${error.message}`);
            return { error: error.message };
        }
    }

    computerTurn(){
        if(this.currentTurn !== 'computer'){
            return { error: 'Not computer turn' };
        }

        const result = this.computer.makeSmartMove(this.playerBoard);
    
        if (this.playerBoard.isGameOver()) {
            return { gameOver: true, winner: 'computer' };
        }
    
        // Only switch turns if it's a miss
        if(result.result === 'miss') {
            this.currentTurn = 'player';
        }
        
        return { result: result.result };
    }

    playTurn(x, y) {
        let result = { gameOver: false };
        
        if (this.currentTurn === 'player') {
          result = this.playerTurn(x, y);
          if (!result.gameOver && !result.error && result.result === 'miss') {
            result = { ...result, ...this.computerTurn() };
          }
        }
        
        if (!result.gameOver) {
          this.displayBoards();
        }
        
        return result;
    }
}

module.exports = { Battleship };


/***/ }),

/***/ "./src/game/gameboard.js":
/*!*******************************!*\
  !*** ./src/game/gameboard.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const {Ship} = __webpack_require__(/*! ./ship */ "./src/game/ship.js");

class GameBoard{
  constructor(){
    this.boardSize = 10;
    this.board = [];
    this.ships = [];

    for(let i = 0;i < this.boardSize; i++){
      this.board[i] = [];
      for(let j = 0;j < this.boardSize; j++){
        this.board[i][j] = null;
      }
    }
  }

  addShip(direction,start,length){
    const newShip = new Ship(length);

    if (direction === 'horizontal') {
      if (!(start.y + length <= this.boardSize)) {
        throw new Error('Ship out gameBoard');
      }
    } else {
      if (!(start.x + length <= this.boardSize)) {
        throw new Error('Ship out gameBoard');
      }
    }

    for (let i = 0; i < length; i++) {
      const x = direction === 'horizontal' ? start.x : start.x + i;
      const y = direction === 'horizontal' ? start.y + i : start.y;
      if (this.board[x][y] !== null) throw new Error('Ships collision');
    }

    for (let i = 0; i < length; i++) {
      const x = direction === 'horizontal' ? start.x : start.x + i;
      const y = direction === 'horizontal' ? start.y + i : start.y;
      this.board[x][y] = newShip;
    }

    this.ships.push(newShip);
    return newShip;
  }

  placeShipsRandomly(){
    // Clear the current board and ships
    this.board = [];
    this.ships = [];
    
    // Reinitialize empty board
    for(let i = 0; i < this.boardSize; i++){
      this.board[i] = [];
      for(let j = 0; j < this.boardSize; j++){
        this.board[i][j] = null;
      }
    }

    const shipLengths = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]; // All ships for game 

    for(const length of shipLengths){
        let placed = false;
        let attempts = 0;
        const maxAttempts = 100; // Prevent infinite loop
        
        while(!placed && attempts < maxAttempts){
            try {
                const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
                const x = Math.floor(Math.random() * 10);
                const y = Math.floor(Math.random() * 10);

                this.addShip(direction, {x, y}, length);
                placed = true;
            } catch (error) {
                attempts++;
            }
        }
    }
  }

  receiveAttack(x,y){
    const target = this.board[x][y];

    if (target === 0 || target === 'hit') {
      throw new Error('Oops you already shot in this cell');
    }

    if (target === null) {
      this.board[x][y] = 0;
      return { result: 'miss', message: 'Oops! You missed.' };
    } else {
      target.addHit();
      this.board[x][y] = 'hit';
      return { result: 'hit', message: 'Hit!' };
    }
  }

  isGameOver() {
    return this.ships.every(ship => ship.isShipSunk());
  }

  getBoardState() {
    return this.board.map(row => {
      return row.map(cell => {
        if (cell === null) return '~';
        if (cell === 0) return 'O';
        if (cell === 'hit') return 'X';
        return 'S';
      });
    });
  }
}

module.exports = {GameBoard};

/***/ }),

/***/ "./src/game/player.js":
/*!****************************!*\
  !*** ./src/game/player.js ***!
  \****************************/
/***/ ((module) => {

class Player{
  constructor(name){
    this.name = name;
    this.isAI = name.toLowerCase() === 'computer';
  }

  attack(enemyBoard,x,y){
    return enemyBoard.receiveAttack(x,y);
  }

  addPlayerShip(board,dir,x,y,length){
    return board.addShip(dir,{x,y},length);
  }

  randomAttack(enemyBoard) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);

    try {
      const result = enemyBoard.receiveAttack(x, y);
      return { result: result.result, message: result.message, x, y };
    } catch (error) {
      // If cell already hit, try again 
      return this.randomAttack(enemyBoard);
    }
  }
}

module.exports = {Player};

/***/ }),

/***/ "./src/game/ship.js":
/*!**************************!*\
  !*** ./src/game/ship.js ***!
  \**************************/
/***/ ((module) => {

class Ship{
  constructor(length){
    this.length = length;
    this.hits = 0;
  }

  getLength(){
    return this.length;
  }

  addHit(){
    this.hits++;
  }

  isShipSunk(){
    return this.hits >= this.length;
  }
}

module.exports = {Ship};

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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

const { EventHandler } = __webpack_require__(/*! ./UI/events */ "./src/UI/events.js");

document.addEventListener('DOMContentLoaded', () => {
  const game = new EventHandler();
  game.initialize();
  
  // Handle Play Again button in game over screen
  document.getElementById('play-again').addEventListener('click', () => {
    game.handleReset();
    document.getElementById('game-over').classList.add('hidden');
  });

  document.getElementById('random-placement').addEventListener('click', () =>{
    game.handleRandomPlacement();
  });
});




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxhQUFhLE1BQU0sT0FBTyxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtB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QUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL3NyYy9VSS9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vc3JjL1VJL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvZ2FtZS9jb21wdXRlclBsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvZ2FtZS9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL3NyYy9nYW1lL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvZ2FtZS9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vc3JjL2dhbWUvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBNYWluIGdhbWUgc3R5bGVzICovXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ0NvbWljIFNhbnMgTVMnLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNlNWU1ZTUgMXB4LCB0cmFuc3BhcmVudCAxcHgpLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2U1ZTVlNSAxcHgsIHRyYW5zcGFyZW50IDFweCk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMHB4IDIwcHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIC5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGNvbG9yOiAjMmE1ODg1O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgXG4gIC5nYW1lLWFyZWEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIFxuICAuYm9hcmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmJvYXJkLXRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiAjMmE1ODg1O1xuICB9XG4gIFxuICAuYm9hcmQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIFxuICAuYm9hcmQtaGVhZGVyLCAuYm9hcmQtcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG4gIFxuICAuaGVhZGVyLWNlbGwsIC5yb3ctbGFiZWwge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMyYTU4ODU7XG4gIH1cbiAgXG4gIC5kaXNhYmxlZC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YmFmYzIgIWltcG9ydGFudDtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG4gIFxuICAuZGlzYWJsZWQtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWJhZmMyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2VsbCB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB9XG4gIFxuICAvKiBDZWxsIHN0YXRlcyAqL1xuICAud2F0ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmY3ZmY7XG4gIH1cbiAgXG4gIC5zaGlwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI2YjZiO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XG4gIH1cbiAgXG4gIC5taXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZmN2ZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuICBcbiAgLm1pc3M6OmFmdGVyIHtcbiAgICBjb250ZW50OiAn4oCiJztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIC5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjZiNmI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuaGl0OjphZnRlciB7XG4gICAgY29udGVudDogJ8OXJztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIC8qIFBsYXllciBib2FyZHMgaW50ZXJhY3Rpb24gKi9cbiAgI2NvbXB1dGVyLWJvYXJkIC5jZWxsOmhvdmVyOm5vdCguaGl0KTpub3QoLm1pc3MpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQyLCA4OCwgMTMzLCAwLjIpO1xuICB9XG4gIFxuICAvKiBQbGF5ZXIgY2Fubm90IGNsaWNrIG9uIHRoZWlyIG93biBib2FyZCAqL1xuICAjcGxheWVyLWJvYXJkIC5jZWxsIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbiAgXG4gIC8qIE1lc3NhZ2UgYXJlYSAqL1xuICAubWVzc2FnZS1hcmVhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIH1cbiAgXG4gIC8qIENvbnRyb2xzICovXG4gIC5jb250cm9scyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGdhcDogMTVweDtcbiAgfVxuICBcbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhNTg4NTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgfVxuICBcbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQzZTVmO1xuICB9XG4gIFxuICAvKiBHYW1lIG92ZXIgb3ZlcmxheSAqL1xuICAuZ2FtZS1vdmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogOTk5O1xuICB9XG4gIFxuICAuZ2FtZS1vdmVyLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgfVxuICBcbiAgLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLyogUmVzcG9uc2l2ZSBkZXNpZ24gKi9cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmdhbWUtYXJlYSB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLmJvYXJkLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7QUFDckI7SUFDSSxpREFBaUQ7SUFDakQseUJBQXlCO0lBQ3pCOzBFQUNzRTtJQUN0RSwwQkFBMEI7SUFDMUIsU0FBUztJQUNULGFBQWE7SUFDYixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCwyQ0FBMkM7RUFDN0M7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLDhCQUE4QjtJQUM5QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG9CQUFvQjtFQUN0Qjs7RUFFQSxnQkFBZ0I7RUFDaEI7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7RUFFQSw4QkFBOEI7RUFDOUI7SUFDRSx3Q0FBd0M7RUFDMUM7O0VBRUEsMkNBQTJDO0VBQzNDO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQSxpQkFBaUI7RUFDakI7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBLGFBQWE7RUFDYjtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBLHNCQUFzQjtFQUN0QjtJQUNFLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUEsc0JBQXNCO0VBQ3RCO0lBQ0U7TUFDRSxzQkFBc0I7TUFDdEIsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCO0VBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogTWFpbiBnYW1lIHN0eWxlcyAqL1xcbmJvZHkge1xcbiAgICBmb250LWZhbWlseTogJ0NvbWljIFNhbnMgTVMnLCBjdXJzaXZlLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2U1ZTVlNSAxcHgsIHRyYW5zcGFyZW50IDFweCksXFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2U1ZTVlNSAxcHgsIHRyYW5zcGFyZW50IDFweCk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGNvbG9yOiAjMzMzO1xcbiAgfVxcbiAgXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgfVxcbiAgXFxuICBoMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgY29sb3I6ICMyYTU4ODU7XFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICB9XFxuICBcXG4gIC5nYW1lLWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDQwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICB9XFxuICBcXG4gIC5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgXFxuICAuYm9hcmQtdGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjMmE1ODg1O1xcbiAgfVxcbiAgXFxuICAuYm9hcmQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzMzMztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgfVxcbiAgXFxuICAuYm9hcmQtaGVhZGVyLCAuYm9hcmQtcm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG4gIFxcbiAgLmhlYWRlci1jZWxsLCAucm93LWxhYmVsIHtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogIzJhNTg4NTtcXG4gIH1cXG4gIFxcbiAgLmRpc2FibGVkLWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YmFmYzIgIWltcG9ydGFudDtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICB9XFxuICBcXG4gIC5kaXNhYmxlZC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWJhZmMyICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuY2VsbCB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbiAgfVxcbiAgXFxuICAvKiBDZWxsIHN0YXRlcyAqL1xcbiAgLndhdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZjdmZjtcXG4gIH1cXG4gIFxcbiAgLnNoaXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI2YjZiO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xcbiAgfVxcbiAgXFxuICAubWlzcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmY3ZmY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG4gIFxcbiAgLm1pc3M6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ+KAoic7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICB9XFxuICBcXG4gIC5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2YjZiO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuICBcXG4gIC5oaXQ6OmFmdGVyIHtcXG4gICAgY29udGVudDogJ8OXJztcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICMzMzM7XFxuICB9XFxuICBcXG4gIC8qIFBsYXllciBib2FyZHMgaW50ZXJhY3Rpb24gKi9cXG4gICNjb21wdXRlci1ib2FyZCAuY2VsbDpob3Zlcjpub3QoLmhpdCk6bm90KC5taXNzKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDg4LCAxMzMsIDAuMik7XFxuICB9XFxuICBcXG4gIC8qIFBsYXllciBjYW5ub3QgY2xpY2sgb24gdGhlaXIgb3duIGJvYXJkICovXFxuICAjcGxheWVyLWJvYXJkIC5jZWxsIHtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgfVxcbiAgXFxuICAvKiBNZXNzYWdlIGFyZWEgKi9cXG4gIC5tZXNzYWdlLWFyZWEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgfVxcbiAgXFxuICAvKiBDb250cm9scyAqL1xcbiAgLmNvbnRyb2xzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGdhcDogMTVweDtcXG4gIH1cXG4gIFxcbiAgYnV0dG9uIHtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE1ODg1O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcXG4gIH1cXG4gIFxcbiAgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFkM2U1ZjtcXG4gIH1cXG4gIFxcbiAgLyogR2FtZSBvdmVyIG92ZXJsYXkgKi9cXG4gIC5nYW1lLW92ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgfVxcbiAgXFxuICAuZ2FtZS1vdmVyLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMzBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgfVxcbiAgXFxuICAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcbiAgLyogUmVzcG9uc2l2ZSBkZXNpZ24gKi9cXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgICAuZ2FtZS1hcmVhIHtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgXFxuICAgIC5ib2FyZC1jb250YWluZXIge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIH1cXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gZG9tLmpzIC0gSGFuZGxlcyBET00gbWFuaXB1bGF0aW9uIGFuZCBVSSByZW5kZXJpbmdcbmNvbnN0IHsgQmF0dGxlc2hpcCB9ID0gcmVxdWlyZSgnLi4vZ2FtZS9nYW1lJyk7XG5cbmNsYXNzIERPTUhhbmRsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmdhbWUgPSBuZXcgQmF0dGxlc2hpcCgpO1xuICAgIHRoaXMucGxheWVyQm9hcmRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllci1ib2FyZCcpO1xuICAgIHRoaXMuY29tcHV0ZXJCb2FyZEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXItYm9hcmQnKTtcbiAgICB0aGlzLm1lc3NhZ2VFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKTtcbiAgICB0aGlzLnJlc2V0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0LWdhbWUnKTtcbiAgfVxuXG4gIGluaXRpYWxpemUoKSB7XG4gICAgdGhpcy5nYW1lLnNldHVwKCk7XG4gICAgdGhpcy5yZW5kZXJCb2FyZHMoKTtcbiAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoJ0dhbWUgaXMgcmVhZHkhIFlvdSBjYW4gcmFuZG9tbHkgcGxhY2UgeW91ciBzaGlwcyBiZWZvcmUgc3RhcnRpbmcgb3IgY2xpY2sgb24gdGhlIGNvbXB1dGVyXFwncyBib2FyZCB0byBhdHRhY2suJyk7XG4gIH1cblxuICByZW5kZXJCb2FyZHMoKSB7XG4gICAgdGhpcy5yZW5kZXJCb2FyZCh0aGlzLnBsYXllckJvYXJkRWxlbWVudCwgdGhpcy5nYW1lLnBsYXllckJvYXJkLmdldEJvYXJkU3RhdGUoKSwgdHJ1ZSk7XG4gICAgXG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZFZpZXcgPSB0aGlzLmdhbWUuY29tcHV0ZXIuZ2FtZUJvYXJkLmdldEJvYXJkU3RhdGUoKS5tYXAocm93ID0+IHtcbiAgICAgIHJldHVybiByb3cubWFwKGNlbGwgPT4ge1xuICAgICAgICBpZiAoY2VsbCA9PT0gJ1MnKSByZXR1cm4gJ34nOyAvLyBIaWRlIGNvbXB1dGVyJ3Mgc2hpcHNcbiAgICAgICAgcmV0dXJuIGNlbGw7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBcbiAgICB0aGlzLnJlbmRlckJvYXJkKHRoaXMuY29tcHV0ZXJCb2FyZEVsZW1lbnQsIGNvbXB1dGVyQm9hcmRWaWV3LCBmYWxzZSk7XG4gIH1cblxuICByZW5kZXJCb2FyZChib2FyZEVsZW1lbnQsIGJvYXJkU3RhdGUsIGlzUGxheWVyQm9hcmQpIHtcbiAgICBib2FyZEVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgXG4gICAgLy8gQ3JlYXRlIGJvYXJkIGhlYWRlciAoY29sdW1uIG51bWJlcnMpXG4gICAgY29uc3QgaGVhZGVyUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyUm93LmNsYXNzTmFtZSA9ICdib2FyZC1oZWFkZXInO1xuICAgIFxuICAgIGNvbnN0IGVtcHR5Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVtcHR5Q2VsbC5jbGFzc05hbWUgPSAnaGVhZGVyLWNlbGwnO1xuICAgIGhlYWRlclJvdy5hcHBlbmRDaGlsZChlbXB0eUNlbGwpO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3QgaGVhZGVyQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgaGVhZGVyQ2VsbC5jbGFzc05hbWUgPSAnaGVhZGVyLWNlbGwnO1xuICAgICAgaGVhZGVyQ2VsbC50ZXh0Q29udGVudCA9IGk7XG4gICAgICBoZWFkZXJSb3cuYXBwZW5kQ2hpbGQoaGVhZGVyQ2VsbCk7XG4gICAgfVxuICAgIFxuICAgIGJvYXJkRWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXJSb3cpO1xuICAgIFxuICAgIC8vIENyZWF0ZSBib2FyZCByb3dzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvdy5jbGFzc05hbWUgPSAnYm9hcmQtcm93JztcbiAgICAgIFxuICAgICAgLy8gUm93IGxhYmVsIChyb3cgbnVtYmVyKVxuICAgICAgY29uc3Qgcm93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJvd0xhYmVsLmNsYXNzTmFtZSA9ICdyb3ctbGFiZWwnO1xuICAgICAgcm93TGFiZWwudGV4dENvbnRlbnQgPSBpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKHJvd0xhYmVsKTtcbiAgICAgIFxuICAgICAgLy8gQ2VsbHNcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xuICAgICAgICBjZWxsLmRhdGFzZXQueCA9IGk7XG4gICAgICAgIGNlbGwuZGF0YXNldC55ID0gajtcbiAgICAgICAgXG4gICAgICAgIC8vIEFwcGx5IGNlbGwgc3RhdGUgc3R5bGluZ1xuICAgICAgICBzd2l0Y2ggKGJvYXJkU3RhdGVbaV1bal0pIHtcbiAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnTyc6XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3MnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1gnOlxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3dhdGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgYm9hcmRFbGVtZW50LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlRWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gIH1cblxuICBzaG93R2FtZU92ZXIod2lubmVyKSB7XG4gICAgY29uc3QgZ2FtZU92ZXJNZXNzYWdlID0gd2lubmVyID09PSAncGxheWVyJyBcbiAgICAgID8gJ0NvbmdyYXR1bGF0aW9ucyEgWW91IHdvbiB0aGUgYmF0dGxlIScgXG4gICAgICA6ICdZb3UgbG9zdCEgVGhlIGNvbXB1dGVyIHNhbmsgYWxsIHlvdXIgc2hpcHMuJztcbiAgICBcbiAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoZ2FtZU92ZXJNZXNzYWdlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1vdmVyJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUtb3Zlci1tZXNzYWdlJykudGV4dENvbnRlbnQgPSBnYW1lT3Zlck1lc3NhZ2U7XG4gIH1cblxuICBwbGF5ZXJSYW5kb21QbGFjZW1lbnQoKSB7XG4gICAgdGhpcy5nYW1lLnBsYWNlUGxheWVyU2hpcHNSYW5kb21seSgpO1xuICAgIHRoaXMucmVuZGVyQm9hcmRzKCk7XG4gICAgdGhpcy51cGRhdGVNZXNzYWdlKCdZb3VyIHNoaXBzIHdlcmUgcmFuZG9tbHkgcGxhY2VkISBDbGljayBvbiB0aGUgY29tcHV0ZXJcXCdzIGJvYXJkIHRvIHN0YXJ0IGF0dGFja2luZy4nKTtcbiAgfVxuXG4gIHJlc2V0R2FtZSgpIHtcbiAgICB0aGlzLmdhbWUgPSBuZXcgQmF0dGxlc2hpcCgpO1xuICAgIHRoaXMuZ2FtZS5zZXR1cCgpO1xuICAgIHRoaXMucmVuZGVyQm9hcmRzKCk7XG4gICAgdGhpcy51cGRhdGVNZXNzYWdlKCdHYW1lIHJlc2V0ISBZb3UgY2FuIHJhbmRvbWx5IHBsYWNlIHlvdXIgc2hpcHMgYmVmb3JlIHN0YXJ0aW5nIG9yIGNsaWNrIG9uIHRoZSBjb21wdXRlclxcJ3MgYm9hcmQgdG8gYXR0YWNrLicpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLW92ZXInKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgRE9NSGFuZGxlciB9OyIsIi8vIGV2ZW50cy5qcyAtIEhhbmRsZXMgZ2FtZSBldmVudHMgYW5kIHVzZXIgaW50ZXJhY3Rpb25zXG5jb25zdCB7IERPTUhhbmRsZXIgfSA9IHJlcXVpcmUoJy4vZG9tJyk7XG5cbmNsYXNzIEV2ZW50SGFuZGxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZG9tSGFuZGxlciA9IG5ldyBET01IYW5kbGVyKCk7XG4gICAgdGhpcy5pc1BsYXllclR1cm4gPSB0cnVlO1xuICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSBmYWxzZTsgLy8g0JTQvtC00LDRlNC80L4g0L/RgNCw0L/QvtGA0LXRhtGMINC00LvRjyDQstGW0LTRgdGC0LXQttC10L3QvdGPLCDRh9C4INC/0L7Rh9Cw0LvQsNGB0Y8g0LPRgNCwXG4gICAgdGhpcy5zZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gIH1cblxuICBzZXR1cEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8vIEdldCBjb21wdXRlciBib2FyZCBlbGVtZW50XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlci1ib2FyZCcpO1xuICAgIGNvbXB1dGVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5oYW5kbGVCb2FyZENsaWNrKGUpKTtcbiAgICBcbiAgICAvLyBSZXNldCBidXR0b25cbiAgICBjb25zdCByZXNldEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNldC1nYW1lJyk7XG4gICAgcmVzZXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZVJlc2V0KCkpO1xuICAgIFxuICAgIC8vIFJhbmRvbSBwbGFjZW1lbnQgYnV0dG9uXG4gICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbS1wbGFjZW1lbnQnKTtcbiAgICByYW5kb21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmhhbmRsZVJhbmRvbVBsYWNlbWVudCgpKTtcbiAgfVxuXG4gIGhhbmRsZUJvYXJkQ2xpY2soZXZlbnQpIHtcbiAgICAvLyBPbmx5IGFsbG93IGNsaWNrcyB3aGVuIGl0J3MgcGxheWVyJ3MgdHVyblxuICAgIGlmICghdGhpcy5pc1BsYXllclR1cm4pIHJldHVybjtcbiAgICBcbiAgICBjb25zdCBjZWxsID0gZXZlbnQudGFyZ2V0O1xuICAgIFxuICAgIC8vIEVuc3VyZSB3ZSBjbGlja2VkIG9uIGEgY2VsbCBhbmQgbm90IHRoZSBib2FyZCBvciByb3cgaGVhZGVyXG4gICAgaWYgKCFjZWxsLmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgeCA9IHBhcnNlSW50KGNlbGwuZGF0YXNldC54KTtcbiAgICBjb25zdCB5ID0gcGFyc2VJbnQoY2VsbC5kYXRhc2V0LnkpO1xuICAgIFxuICAgIC8vIFByZXZlbnQgY2xpY2tpbmcgb24gYWxyZWFkeSBhdHRhY2tlZCBjZWxsc1xuICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgfHwgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSkge1xuICAgICAgdGhpcy5kb21IYW5kbGVyLnVwZGF0ZU1lc3NhZ2UoJ1lvdSBhbHJlYWR5IGF0dGFja2VkIHRoaXMgcG9zaXRpb24hIFRyeSBhbm90aGVyIG9uZS4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgLy8g0K/QutGJ0L4g0YbQtSDQv9C10YDRiNC40Lkg0YXRltC0INCz0YDQuCwg0L/QvtC30L3QsNGH0LDRlNC80L4g0YnQviDQs9GA0LAg0L/QvtGH0LDQu9Cw0YHRjyDRliDQtNC10LDQutGC0LjQstGD0ZTQvNC+INC60L3QvtC/0LrRg1xuICAgIGlmICghdGhpcy5nYW1lU3RhcnRlZCkge1xuICAgICAgdGhpcy5nYW1lU3RhcnRlZCA9IHRydWU7XG4gICAgICB0aGlzLmRpc2FibGVSYW5kb21QbGFjZW1lbnRCdXR0b24oKTtcbiAgICB9XG4gICAgXG4gICAgdGhpcy5wcm9jZXNzUGxheWVyVHVybih4LCB5KTtcbiAgfVxuICBcbiAgcHJvY2Vzc1BsYXllclR1cm4oeCwgeSkge1xuICAgIHRyeSB7XG4gICAgICAvLyBFeGVjdXRlIHBsYXllcidzIG1vdmVcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZG9tSGFuZGxlci5nYW1lLnBsYXllclR1cm4oeCwgeSk7XG4gICAgICBcbiAgICAgIC8vIENoZWNrIGZvciBnYW1lIG92ZXJcbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmdhbWVPdmVyKSB7XG4gICAgICAgIHRoaXMuZG9tSGFuZGxlci5yZW5kZXJCb2FyZHMoKTtcbiAgICAgICAgdGhpcy5kb21IYW5kbGVyLnNob3dHYW1lT3ZlcigncGxheWVyJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQ2hlY2sgaWYgaGl0IC0gcGxheWVyIGdldHMgYW5vdGhlciB0dXJuXG4gICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC5yZXN1bHQgPT09ICdoaXQnKSB7XG4gICAgICAgIHRoaXMuZG9tSGFuZGxlci5yZW5kZXJCb2FyZHMoKTtcbiAgICAgICAgdGhpcy5kb21IYW5kbGVyLnVwZGF0ZU1lc3NhZ2UoJ0hpdCEgWW91IGdldCBhbm90aGVyIHR1cm4uIEF0dGFjayBhZ2FpbiEnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBJZiBtaXNzLCBpdCdzIGNvbXB1dGVyJ3MgdHVyblxuICAgICAgdGhpcy5pc1BsYXllclR1cm4gPSBmYWxzZTtcbiAgICAgIHRoaXMuZG9tSGFuZGxlci51cGRhdGVNZXNzYWdlKCdNaXNzISBDb21wdXRlciBpcyB0aGlua2luZy4uLicpO1xuICAgICAgdGhpcy5kb21IYW5kbGVyLnJlbmRlckJvYXJkcygpO1xuICAgICAgXG4gICAgICAvLyBHaXZlIGEgc2xpZ2h0IGRlbGF5IGJlZm9yZSBjb21wdXRlcidzIG1vdmUgZm9yIGJldHRlciBVWFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnByb2Nlc3NDb21wdXRlclR1cm4oKSwgMTAwMCk7XG4gICAgICBcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5kb21IYW5kbGVyLnVwZGF0ZU1lc3NhZ2UoYEVycm9yOiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9XG4gIFxuICBwcm9jZXNzQ29tcHV0ZXJUdXJuKCkge1xuICAgIGlmICh0aGlzLmlzUGxheWVyVHVybikgcmV0dXJuO1xuICAgIFxuICAgIC8vIEV4ZWN1dGUgY29tcHV0ZXIncyBtb3ZlXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5kb21IYW5kbGVyLmdhbWUuY29tcHV0ZXJUdXJuKCk7XG4gICAgXG4gICAgLy8gQ2hlY2sgZm9yIGdhbWUgb3ZlclxuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LmdhbWVPdmVyKSB7XG4gICAgICB0aGlzLmRvbUhhbmRsZXIucmVuZGVyQm9hcmRzKCk7XG4gICAgICB0aGlzLmRvbUhhbmRsZXIuc2hvd0dhbWVPdmVyKCdjb21wdXRlcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvLyBDaGVjayBpZiBoaXQgLSBjb21wdXRlciBnZXRzIGFub3RoZXIgdHVyblxuICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnJlc3VsdCA9PT0gJ2hpdCcpIHtcbiAgICAgIHRoaXMuZG9tSGFuZGxlci5yZW5kZXJCb2FyZHMoKTtcbiAgICAgIHRoaXMuZG9tSGFuZGxlci51cGRhdGVNZXNzYWdlKCdDb21wdXRlciBoaXQgeW91ciBzaGlwISBDb21wdXRlciBnZXRzIGFub3RoZXIgdHVybi4nKTtcbiAgICAgIFxuICAgICAgLy8gR2l2ZSBhIHNsaWdodCBkZWxheSBiZWZvcmUgY29tcHV0ZXIncyBuZXh0IG1vdmVcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5wcm9jZXNzQ29tcHV0ZXJUdXJuKCksIDEwMDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICAvLyBJZiBtaXNzLCBpdCdzIHBsYXllcidzIHR1cm4gYWdhaW5cbiAgICB0aGlzLmlzUGxheWVyVHVybiA9IHRydWU7XG4gICAgdGhpcy5kb21IYW5kbGVyLnVwZGF0ZU1lc3NhZ2UoJ0NvbXB1dGVyIG1pc3NlZCEgWW91ciB0dXJuIG5vdy4nKTtcbiAgICB0aGlzLmRvbUhhbmRsZXIucmVuZGVyQm9hcmRzKCk7XG4gIH1cbiAgXG4gIGhhbmRsZVJlc2V0KCkge1xuICAgIHRoaXMuZG9tSGFuZGxlci5yZXNldEdhbWUoKTtcbiAgICB0aGlzLmlzUGxheWVyVHVybiA9IHRydWU7XG4gICAgdGhpcy5nYW1lU3RhcnRlZCA9IGZhbHNlOyAvLyDQodC60LjQtNCw0ZTQvNC+INC/0YDQsNC/0L7RgNC10YbRjCDQv9C+0YfQsNGC0LrRgyDQs9GA0LhcbiAgICB0aGlzLmVuYWJsZVJhbmRvbVBsYWNlbWVudEJ1dHRvbigpOyAvLyDQkNC60YLQuNCy0YPRlNC80L4g0LrQvdC+0L/QutGDINC/0ZbRgdC70Y8g0YHQutC40LTQsNC90L3Rj1xuICB9XG5cbiAgaGFuZGxlUmFuZG9tUGxhY2VtZW50KCkge1xuICAgIC8vINCU0L7Qt9Cy0L7Qu9GP0ZTQvNC+INCy0LjQv9Cw0LTQutC+0LLQtSDRgNC+0LfQvNGW0YnQtdC90L3RjyDRgtGW0LvRjNC60Lgg0Y/QutGJ0L4g0LPRgNCwINGJ0LUg0L3QtSDQv9C+0YfQsNC70LDRgdGPXG4gICAgaWYgKCF0aGlzLmdhbWVTdGFydGVkKSB7XG4gICAgICB0aGlzLmRvbUhhbmRsZXIucGxheWVyUmFuZG9tUGxhY2VtZW50KCk7XG4gICAgfVxuICB9XG4gIFxuICAvLyDQnNC10YLQvtC0INC00LvRjyDQtNC10LDQutGC0LjQstCw0YbRltGXINC60L3QvtC/0LrQuCDQstC40L/QsNC00LrQvtCy0L7Qs9C+INGA0L7Qt9C80ZbRidC10L3QvdGPXG4gIGRpc2FibGVSYW5kb21QbGFjZW1lbnRCdXR0b24oKSB7XG4gICAgY29uc3QgcmFuZG9tQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbS1wbGFjZW1lbnQnKTtcbiAgICByYW5kb21CdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHJhbmRvbUJ0bi5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC1idXR0b24nKTtcbiAgfVxuICBcbiAgLy8g0JzQtdGC0L7QtCDQtNC70Y8g0LDQutGC0LjQstCw0YbRltGXINC60L3QvtC/0LrQuCDQstC40L/QsNC00LrQvtCy0L7Qs9C+INGA0L7Qt9C80ZbRidC10L3QvdGPXG4gIGVuYWJsZVJhbmRvbVBsYWNlbWVudEJ1dHRvbigpIHtcbiAgICBjb25zdCByYW5kb21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9tLXBsYWNlbWVudCcpO1xuICAgIHJhbmRvbUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHJhbmRvbUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZC1idXR0b24nKTtcbiAgfVxuICBcbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICB0aGlzLmRvbUhhbmRsZXIuaW5pdGlhbGl6ZSgpO1xuICAgIHRoaXMuZ2FtZVN0YXJ0ZWQgPSBmYWxzZTsgLy8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INC/0L7Rh9Cw0YLQutC+0LLQuNC5INGB0YLQsNC9INCz0YDQuFxuICAgIHRoaXMuZW5hYmxlUmFuZG9tUGxhY2VtZW50QnV0dG9uKCk7IC8vINCS0L/QtdCy0L3RjtGU0LzQvtGB0Y8sINGJ0L4g0LrQvdC+0L/QutCwINCw0LrRgtC40LLQvdCwINC90LAg0L/QvtGH0LDRgtC60YNcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgRXZlbnRIYW5kbGVyIH07IiwiY29uc3QgeyBHYW1lQm9hcmQgfSA9IHJlcXVpcmUoXCIuL2dhbWVib2FyZFwiKTtcbmNvbnN0IHsgUGxheWVyIH0gPSByZXF1aXJlKFwiLi9wbGF5ZXJcIik7XG5cbmNsYXNzIENvbXB1dGVyUGxheWVyIGV4dGVuZHMgUGxheWVye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCdDb21wdXRlcicpO1xuICAgICAgICB0aGlzLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgICAgICAgdGhpcy5sYXN0SGl0Q29vcmRpbmF0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wb3RlbnRpYWxUYXJnZXRzID0gW107XG4gICAgfVxuXG4gICAgcGxhY2VTaGlwUmFuZG9tbHkoKXtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNCwzLDMsMiwyLDIsMSwxLDEsMV07IC8vQWxsIHNoaXBzIGZvciBnYW1lIFxuXG4gICAgICAgIGZvcihjb25zdCBsZW5ndGggb2Ygc2hpcExlbmd0aHMpe1xuICAgICAgICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUoIXBsYWNlZCl7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gTWF0aC5yYW5kb20oKSA+IDAuNT8gJ2hvcml6b250YWwnOid2ZXJ0aWNhbCc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjEwKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWVCb2FyZC5hZGRTaGlwKGRpcmVjdGlvbix7eCx5fSxsZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2VTbWFydE1vdmUoZW5lbXlCb2FyZCkge1xuICAgICAgICBpZiAodGhpcy5sYXN0SGl0Q29vcmRpbmF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucG90ZW50aWFsVGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5wb3RlbnRpYWxUYXJnZXRzLnBvcCgpO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh0YXJnZXQueCwgdGFyZ2V0LnkpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHQgPT09ICdoaXQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RIaXRDb29yZGluYXRlcy5wdXNoKHt4OiB0YXJnZXQueCwgeTogdGFyZ2V0Lnl9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkQWRqYWNlbnRDZWxscyh0YXJnZXQueCwgdGFyZ2V0LnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmRvbUF0dGFjayhlbmVteUJvYXJkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RIaXQgPSB0aGlzLmxhc3RIaXRDb29yZGluYXRlc1t0aGlzLmxhc3RIaXRDb29yZGluYXRlcy5sZW5ndGgtMV07XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBZGphY2VudENlbGxzKGxhc3RIaXQueCwgbGFzdEhpdC55KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3RlbnRpYWxUYXJnZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RIaXRDb29yZGluYXRlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21BdHRhY2soZW5lbXlCb2FyZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMucG90ZW50aWFsVGFyZ2V0cy5wb3AoKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHRhcmdldC54LCB0YXJnZXQueSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tQXR0YWNrKGVuZW15Qm9hcmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgYXR0YWNrUmVzdWx0ID0gdGhpcy5yYW5kb21BdHRhY2soZW5lbXlCb2FyZCk7XG4gICAgICAgIFxuICAgICAgICBpZiAoYXR0YWNrUmVzdWx0LnJlc3VsdCA9PT0gJ2hpdCcpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdEhpdENvb3JkaW5hdGVzLnB1c2goeyB4OiBhdHRhY2tSZXN1bHQueCwgeTogYXR0YWNrUmVzdWx0LnkgfSk7XG4gICAgICAgICAgICB0aGlzLmFkZEFkamFjZW50Q2VsbHMoYXR0YWNrUmVzdWx0LngsIGF0dGFja1Jlc3VsdC55KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiBhdHRhY2tSZXN1bHQucmVzdWx0LCBtZXNzYWdlOiBhdHRhY2tSZXN1bHQubWVzc2FnZSB9O1xuICAgIH1cblxuICAgIGFkZEFkamFjZW50Q2VsbHMoeCwgeSkge1xuICAgICAgICBjb25zdCBkaXJlY3Rpb25zID0gW1xuICAgICAgICAgIHsgZHg6IC0xLCBkeTogMCB9LCBcbiAgICAgICAgICB7IGR4OiAxLCBkeTogMCB9LCAgXG4gICAgICAgICAgeyBkeDogMCwgZHk6IC0xIH0sIFxuICAgICAgICAgIHsgZHg6IDAsIGR5OiAxIH0gICBcbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAoY29uc3QgZGlyIG9mIGRpcmVjdGlvbnMpIHtcbiAgICAgICAgICBjb25zdCBuZXdYID0geCArIGRpci5keDtcbiAgICAgICAgICBjb25zdCBuZXdZID0geSArIGRpci5keTtcbiAgICAgICAgICBcbiAgICAgICAgICAvLyBDaGVjayBpZiBjb29yZGluYXRlcyBpbiBib2FyZCBmaWVsZCBcbiAgICAgICAgICBpZiAobmV3WCA+PSAwICYmIG5ld1ggPCAxMCAmJiBuZXdZID49IDAgJiYgbmV3WSA8IDEwKSB7XG4gICAgICAgICAgICAvLyBBZGQgY29vcmRpbmF0ZXMgaWYgdGhleSBub3QgaW4gdGhlIHBvdGVudGlhbCB0YXJnZXRzIGxpc3QgXG4gICAgICAgICAgICBpZiAoIXRoaXMucG90ZW50aWFsVGFyZ2V0cy5zb21lKHRhcmdldCA9PiB0YXJnZXQueCA9PT0gbmV3WCAmJiB0YXJnZXQueSA9PT0gbmV3WSkgJiZcbiAgICAgICAgICAgICAgICAhdGhpcy5sYXN0SGl0Q29vcmRpbmF0ZXMuc29tZShoaXQgPT4gaGl0LnggPT09IG5ld1ggJiYgaGl0LnkgPT09IG5ld1kpKSB7XG4gICAgICAgICAgICAgIHRoaXMucG90ZW50aWFsVGFyZ2V0cy5wdXNoKHsgeDogbmV3WCwgeTogbmV3WSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7Q29tcHV0ZXJQbGF5ZXJ9OyIsImNvbnN0IHtTaGlwfSA9IHJlcXVpcmUoJy4vc2hpcCcpO1xuY29uc3Qge1BsYXllcn0gPSByZXF1aXJlKCcuL3BsYXllcicpO1xuY29uc3Qge0dhbWVCb2FyZH0gPSByZXF1aXJlKCcuL2dhbWVib2FyZCcpO1xuY29uc3Qge0NvbXB1dGVyUGxheWVyfSA9IHJlcXVpcmUoJy4vY29tcHV0ZXJQbGF5ZXInKTtcblxuY2xhc3MgQmF0dGxlc2hpcHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnBsYXllckJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoJ0h1bWFuJyk7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIgPSBuZXcgQ29tcHV0ZXJQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VHVybiA9ICdwbGF5ZXInO1xuICAgIH1cblxuICAgIHNldHVwKCl7XG4gICAgICAgIHRoaXMuY29tcHV0ZXIucGxhY2VTaGlwUmFuZG9tbHkoKTtcblxuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGFjZVBsYXllclNoaXBzRGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHBsYWNlUGxheWVyU2hpcHNEZWZhdWx0KCkge1xuICAgICAgICB0aGlzLnBsYXllckJvYXJkLmFkZFNoaXAoJ2hvcml6b250YWwnLCB7IHg6IDAsIHk6IDAgfSwgNCk7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQuYWRkU2hpcCgndmVydGljYWwnLCB7IHg6IDIsIHk6IDIgfSwgMyk7ICAgXG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQuYWRkU2hpcCgnaG9yaXpvbnRhbCcsIHsgeDogNSwgeTogNSB9LCAzKTtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5hZGRTaGlwKCdob3Jpem9udGFsJywgeyB4OiA5LCB5OiAwIH0sIDIpOyAgIFxuICAgICAgICB0aGlzLnBsYXllckJvYXJkLmFkZFNoaXAoJ2hvcml6b250YWwnLCB7IHg6IDcsIHk6IDcgfSwgMik7XG4gICAgICAgIHRoaXMucGxheWVyQm9hcmQuYWRkU2hpcCgndmVydGljYWwnLCB7IHg6IDAsIHk6IDUgfSwgMik7ICBcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5hZGRTaGlwKCdob3Jpem9udGFsJywgeyB4OiAzLCB5OiA5IH0sIDEpO1xuICAgICAgICB0aGlzLnBsYXllckJvYXJkLmFkZFNoaXAoJ3ZlcnRpY2FsJywgeyB4OiA1LCB5OiAwIH0sIDEpOyAgIFxuICAgICAgICB0aGlzLnBsYXllckJvYXJkLmFkZFNoaXAoJ2hvcml6b250YWwnLCB7IHg6IDksIHk6IDUgfSwgMSk7IFxuICAgICAgICB0aGlzLnBsYXllckJvYXJkLmFkZFNoaXAoJ3ZlcnRpY2FsJywgeyB4OiA3LCB5OiAzIH0sIDEpO1xuICAgIH1cblxuICAgIFxuICAgIHBsYWNlUGxheWVyU2hpcHNSYW5kb21seSgpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJCb2FyZC5wbGFjZVNoaXBzUmFuZG9tbHkoKTtcbiAgICB9XG5cbiAgICBwbGF5ZXJUdXJuKHgseSl7XG4gICAgICAgIGlmKHRoaXMuY3VycmVudFR1cm4gIT09ICdwbGF5ZXInKXtcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiAnTm90IHlvdXIgdHVybicgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnBsYXllci5hdHRhY2sodGhpcy5jb21wdXRlci5nYW1lQm9hcmQsIHgsIHkpO1xuXG4gICAgICAgICAgICBpZih0aGlzLmNvbXB1dGVyLmdhbWVCb2FyZC5pc0dhbWVPdmVyKCkpe1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGdhbWVPdmVyOiB0cnVlLCB3aW5uZXI6ICdwbGF5ZXInIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9ubHkgc3dpdGNoIHR1cm5zIGlmIGl0J3MgYSBtaXNzXG4gICAgICAgICAgICBpZihyZXN1bHQucmVzdWx0ID09PSAnbWlzcycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUdXJuID0gJ2NvbXB1dGVyJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHsgcmVzdWx0OiByZXN1bHQucmVzdWx0IH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXB1dGVyVHVybigpe1xuICAgICAgICBpZih0aGlzLmN1cnJlbnRUdXJuICE9PSAnY29tcHV0ZXInKXtcbiAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiAnTm90IGNvbXB1dGVyIHR1cm4nIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNvbXB1dGVyLm1ha2VTbWFydE1vdmUodGhpcy5wbGF5ZXJCb2FyZCk7XG4gICAgXG4gICAgICAgIGlmICh0aGlzLnBsYXllckJvYXJkLmlzR2FtZU92ZXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgZ2FtZU92ZXI6IHRydWUsIHdpbm5lcjogJ2NvbXB1dGVyJyB9O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIE9ubHkgc3dpdGNoIHR1cm5zIGlmIGl0J3MgYSBtaXNzXG4gICAgICAgIGlmKHJlc3VsdC5yZXN1bHQgPT09ICdtaXNzJykge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VHVybiA9ICdwbGF5ZXInO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4geyByZXN1bHQ6IHJlc3VsdC5yZXN1bHQgfTtcbiAgICB9XG5cbiAgICBwbGF5VHVybih4LCB5KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB7IGdhbWVPdmVyOiBmYWxzZSB9O1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFR1cm4gPT09ICdwbGF5ZXInKSB7XG4gICAgICAgICAgcmVzdWx0ID0gdGhpcy5wbGF5ZXJUdXJuKHgsIHkpO1xuICAgICAgICAgIGlmICghcmVzdWx0LmdhbWVPdmVyICYmICFyZXN1bHQuZXJyb3IgJiYgcmVzdWx0LnJlc3VsdCA9PT0gJ21pc3MnKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB7IC4uLnJlc3VsdCwgLi4udGhpcy5jb21wdXRlclR1cm4oKSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKCFyZXN1bHQuZ2FtZU92ZXIpIHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlCb2FyZHMoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0geyBCYXR0bGVzaGlwIH07XG4iLCJjb25zdCB7U2hpcH0gPSByZXF1aXJlKCcuL3NoaXAnKTtcblxuY2xhc3MgR2FtZUJvYXJke1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuYm9hcmRTaXplID0gMTA7XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDA7aSA8IHRoaXMuYm9hcmRTaXplOyBpKyspe1xuICAgICAgdGhpcy5ib2FyZFtpXSA9IFtdO1xuICAgICAgZm9yKGxldCBqID0gMDtqIDwgdGhpcy5ib2FyZFNpemU7IGorKyl7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFkZFNoaXAoZGlyZWN0aW9uLHN0YXJ0LGxlbmd0aCl7XG4gICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG5cbiAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGlmICghKHN0YXJ0LnkgKyBsZW5ndGggPD0gdGhpcy5ib2FyZFNpemUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBvdXQgZ2FtZUJvYXJkJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghKHN0YXJ0LnggKyBsZW5ndGggPD0gdGhpcy5ib2FyZFNpemUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU2hpcCBvdXQgZ2FtZUJvYXJkJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gc3RhcnQueCA6IHN0YXJ0LnggKyBpO1xuICAgICAgY29uc3QgeSA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gc3RhcnQueSArIGkgOiBzdGFydC55O1xuICAgICAgaWYgKHRoaXMuYm9hcmRbeF1beV0gIT09IG51bGwpIHRocm93IG5ldyBFcnJvcignU2hpcHMgY29sbGlzaW9uJyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgeCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gc3RhcnQueCA6IHN0YXJ0LnggKyBpO1xuICAgICAgY29uc3QgeSA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnID8gc3RhcnQueSArIGkgOiBzdGFydC55O1xuICAgICAgdGhpcy5ib2FyZFt4XVt5XSA9IG5ld1NoaXA7XG4gICAgfVxuXG4gICAgdGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuICAgIHJldHVybiBuZXdTaGlwO1xuICB9XG5cbiAgcGxhY2VTaGlwc1JhbmRvbWx5KCl7XG4gICAgLy8gQ2xlYXIgdGhlIGN1cnJlbnQgYm9hcmQgYW5kIHNoaXBzXG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICBcbiAgICAvLyBSZWluaXRpYWxpemUgZW1wdHkgYm9hcmRcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZFNpemU7IGkrKyl7XG4gICAgICB0aGlzLmJvYXJkW2ldID0gW107XG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5ib2FyZFNpemU7IGorKyl7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzQsIDMsIDMsIDIsIDIsIDIsIDEsIDEsIDEsIDFdOyAvLyBBbGwgc2hpcHMgZm9yIGdhbWUgXG5cbiAgICBmb3IoY29uc3QgbGVuZ3RoIG9mIHNoaXBMZW5ndGhzKXtcbiAgICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBjb25zdCBtYXhBdHRlbXB0cyA9IDEwMDsgLy8gUHJldmVudCBpbmZpbml0ZSBsb29wXG4gICAgICAgIFxuICAgICAgICB3aGlsZSghcGxhY2VkICYmIGF0dGVtcHRzIDwgbWF4QXR0ZW1wdHMpe1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJztcbiAgICAgICAgICAgICAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFkZFNoaXAoZGlyZWN0aW9uLCB7eCwgeX0sIGxlbmd0aCk7XG4gICAgICAgICAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlY2VpdmVBdHRhY2soeCx5KXtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmJvYXJkW3hdW3ldO1xuXG4gICAgaWYgKHRhcmdldCA9PT0gMCB8fCB0YXJnZXQgPT09ICdoaXQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09vcHMgeW91IGFscmVhZHkgc2hvdCBpbiB0aGlzIGNlbGwnKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICB0aGlzLmJvYXJkW3hdW3ldID0gMDtcbiAgICAgIHJldHVybiB7IHJlc3VsdDogJ21pc3MnLCBtZXNzYWdlOiAnT29wcyEgWW91IG1pc3NlZC4nIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hZGRIaXQoKTtcbiAgICAgIHRoaXMuYm9hcmRbeF1beV0gPSAnaGl0JztcbiAgICAgIHJldHVybiB7IHJlc3VsdDogJ2hpdCcsIG1lc3NhZ2U6ICdIaXQhJyB9O1xuICAgIH1cbiAgfVxuXG4gIGlzR2FtZU92ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLmlzU2hpcFN1bmsoKSk7XG4gIH1cblxuICBnZXRCb2FyZFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLmJvYXJkLm1hcChyb3cgPT4ge1xuICAgICAgcmV0dXJuIHJvdy5tYXAoY2VsbCA9PiB7XG4gICAgICAgIGlmIChjZWxsID09PSBudWxsKSByZXR1cm4gJ34nO1xuICAgICAgICBpZiAoY2VsbCA9PT0gMCkgcmV0dXJuICdPJztcbiAgICAgICAgaWYgKGNlbGwgPT09ICdoaXQnKSByZXR1cm4gJ1gnO1xuICAgICAgICByZXR1cm4gJ1MnO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7R2FtZUJvYXJkfTsiLCJjbGFzcyBQbGF5ZXJ7XG4gIGNvbnN0cnVjdG9yKG5hbWUpe1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pc0FJID0gbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY29tcHV0ZXInO1xuICB9XG5cbiAgYXR0YWNrKGVuZW15Qm9hcmQseCx5KXtcbiAgICByZXR1cm4gZW5lbXlCb2FyZC5yZWNlaXZlQXR0YWNrKHgseSk7XG4gIH1cblxuICBhZGRQbGF5ZXJTaGlwKGJvYXJkLGRpcix4LHksbGVuZ3RoKXtcbiAgICByZXR1cm4gYm9hcmQuYWRkU2hpcChkaXIse3gseX0sbGVuZ3RoKTtcbiAgfVxuXG4gIHJhbmRvbUF0dGFjayhlbmVteUJvYXJkKSB7XG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgIHJldHVybiB7IHJlc3VsdDogcmVzdWx0LnJlc3VsdCwgbWVzc2FnZTogcmVzdWx0Lm1lc3NhZ2UsIHgsIHkgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSWYgY2VsbCBhbHJlYWR5IGhpdCwgdHJ5IGFnYWluIFxuICAgICAgcmV0dXJuIHRoaXMucmFuZG9tQXR0YWNrKGVuZW15Qm9hcmQpO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtQbGF5ZXJ9OyIsImNsYXNzIFNoaXB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCl7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gMDtcbiAgfVxuXG4gIGdldExlbmd0aCgpe1xuICAgIHJldHVybiB0aGlzLmxlbmd0aDtcbiAgfVxuXG4gIGFkZEhpdCgpe1xuICAgIHRoaXMuaGl0cysrO1xuICB9XG5cbiAgaXNTaGlwU3Vuaygpe1xuICAgIHJldHVybiB0aGlzLmhpdHMgPj0gdGhpcy5sZW5ndGg7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7U2hpcH07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5jb25zdCB7IEV2ZW50SGFuZGxlciB9ID0gcmVxdWlyZSgnLi9VSS9ldmVudHMnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgZ2FtZSA9IG5ldyBFdmVudEhhbmRsZXIoKTtcbiAgZ2FtZS5pbml0aWFsaXplKCk7XG4gIFxuICAvLyBIYW5kbGUgUGxheSBBZ2FpbiBidXR0b24gaW4gZ2FtZSBvdmVyIHNjcmVlblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1hZ2FpbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGdhbWUuaGFuZGxlUmVzZXQoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1vdmVyJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb20tcGxhY2VtZW50JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICBnYW1lLmhhbmRsZVJhbmRvbVBsYWNlbWVudCgpO1xuICB9KTtcbn0pO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9