/*!
 * ReDoc - OpenAPI/Swagger-generated API Reference Documentation
 * -------------------------------------------------------------
 *   Version: "2.0.0-alpha.18"
 *   Repo: https://github.com/Rebilly/ReDoc
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Redoc"] = factory();
	else
		root["Redoc"] = factory();
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return media; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return injectGlobal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeProvider; });
/* unused harmony export withTheme */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return withProps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function withProps(styledFunction) {
    return styledFunction;
}
var _a = styled_components__WEBPACK_IMPORTED_MODULE_1__, styled = _a.default, css = _a.css, injectGlobal = _a.injectGlobal, keyframes = _a.keyframes, ThemeProvider = _a.ThemeProvider, withTheme = _a.withTheme;
var media = {
    lessThan: function (breakpoint) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return css(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n      @media (max-width: ", ") {\n        ", ";\n      }\n    "], ["\n      @media (max-width: ", ") {\n        ", ";\n      }\n    "])), function (props) { return props.theme.breakpoints[breakpoint]; }, css.apply(void 0, args));
        };
    },
    greaterThan: function (breakpoint) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return css(templateObject_2 || (templateObject_2 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n      @media (min-width: ", ") {\n        ", ";\n      }\n    "], ["\n      @media (min-width: ", ") {\n        ", ";\n      }\n    "])), function (props) { return props.theme.breakpoints[breakpoint]; }, css.apply(void 0, args));
        };
    },
    between: function (firstBreakpoint, secondBreakpoint) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return css(templateObject_3 || (templateObject_3 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n      @media (min-width: ", ") and (max-width: ", ") {\n        ", ";\n      }\n    "], ["\n      @media (min-width: ", ") and (max-width: ", ") {\n        ", ";\n      }\n    "])), function (props) { return props.theme.breakpoints[firstBreakpoint]; }, function (props) { return props.theme.breakpoints[secondBreakpoint]; }, css.apply(void 0, args));
        };
    }
};

/* harmony default export */ __webpack_exports__["c"] = (styled);
var templateObject_1, templateObject_2, templateObject_3;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./src/utils/JsonPointer.ts
var JsonPointer = __webpack_require__(12);

// EXTERNAL MODULE: ./src/utils/openapi.ts
var openapi = __webpack_require__(7);

// EXTERNAL MODULE: ./src/utils/helpers.ts
var helpers = __webpack_require__(13);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(1);

// EXTERNAL MODULE: external "prismjs"
var external_prismjs_ = __webpack_require__(21);

// EXTERNAL MODULE: external "prismjs/components/prism-bash.js"
var prism_bash_js_ = __webpack_require__(64);

// EXTERNAL MODULE: external "prismjs/components/prism-c.js"
var prism_c_js_ = __webpack_require__(63);

// EXTERNAL MODULE: external "prismjs/components/prism-coffeescript.js"
var prism_coffeescript_js_ = __webpack_require__(62);

// EXTERNAL MODULE: external "prismjs/components/prism-cpp.js"
var prism_cpp_js_ = __webpack_require__(61);

// EXTERNAL MODULE: external "prismjs/components/prism-csharp.js"
var prism_csharp_js_ = __webpack_require__(60);

// EXTERNAL MODULE: external "prismjs/components/prism-go.js"
var prism_go_js_ = __webpack_require__(59);

// EXTERNAL MODULE: external "prismjs/components/prism-java.js"
var prism_java_js_ = __webpack_require__(58);

// EXTERNAL MODULE: external "prismjs/components/prism-lua.js"
var prism_lua_js_ = __webpack_require__(57);

// EXTERNAL MODULE: external "prismjs/components/prism-markup.js"
var prism_markup_js_ = __webpack_require__(56);

// EXTERNAL MODULE: external "prismjs/components/prism-objectivec.js"
var prism_objectivec_js_ = __webpack_require__(55);

// EXTERNAL MODULE: external "prismjs/components/prism-perl.js"
var prism_perl_js_ = __webpack_require__(54);

// EXTERNAL MODULE: external "prismjs/components/prism-php.js"
var prism_php_js_ = __webpack_require__(53);

// EXTERNAL MODULE: external "prismjs/components/prism-python.js"
var prism_python_js_ = __webpack_require__(52);

// EXTERNAL MODULE: external "prismjs/components/prism-ruby.js"
var prism_ruby_js_ = __webpack_require__(51);

// EXTERNAL MODULE: external "prismjs/components/prism-scala.js"
var prism_scala_js_ = __webpack_require__(50);

// EXTERNAL MODULE: external "prismjs/components/prism-swift.js"
var prism_swift_js_ = __webpack_require__(49);

// EXTERNAL MODULE: ./src/styled-components.ts
var styled_components = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/prismjs/themes/prism-dark.css
var prism_dark = __webpack_require__(36);
var prism_dark_default = /*#__PURE__*/__webpack_require__.n(prism_dark);

// CONCATENATED MODULE: ./src/utils/highlight.ts










 // xml








 // dark theme
Object(styled_components["d" /* injectGlobal */])(highlight_templateObject_1 || (highlight_templateObject_1 = external_tslib_["__makeTemplateObject"](["", ""], ["", ""])), prism_dark_default.a);
var highlight_DEFAULT_LANG = 'clike';
/**
 * map language names to Prism.js names
 */
function highlight_mapLang(lang) {
    return {
        json: 'js',
        'c++': 'cpp',
        'c#': 'csharp',
        'objective-c': 'objectivec',
        shell: 'bash',
        viml: 'vim'
    }[lang] || highlight_DEFAULT_LANG;
}
/**
 * Highlight source code string using Prism.js
 * @param source source code to highlight
 * @param lang highlight language
 * @return highlighted souce code as **html string**
 */
function highlight_highlight(source, lang) {
    var grammar = external_prismjs_["languages"][lang];
    if (!grammar) {
        grammar = external_prismjs_["languages"][highlight_mapLang(lang)];
    }
    return external_prismjs_["highlight"](source, grammar);
}
var highlight_templateObject_1;

// EXTERNAL MODULE: ./src/utils/loadAndBundleSpec.ts
var loadAndBundleSpec = __webpack_require__(17);

// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(11);

// CONCATENATED MODULE: ./src/utils/decorators.ts
function throttle(func, wait) {
    var context;
    var args;
    var result;
    var timeout = null;
    var previous = 0;
    var later = function () {
        previous = new Date().getTime();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) {
            context = args = null;
        }
    };
    return function () {
        var now = new Date().getTime();
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) {
                context = args = null;
            }
        }
        else if (!timeout) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
function Throttle(delay) {
    return function (_, _2, desc) {
        desc.value = throttle(desc.value, delay);
    };
}

// CONCATENATED MODULE: ./src/utils/debug.ts
function debugTime(label) {
    if (false) {}
}
function debugTimeEnd(label) {
    if (false) {}
}

// CONCATENATED MODULE: ./src/utils/index.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "b", function() { return JsonPointer["a" /* JsonPointer */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "l", function() { return openapi["d" /* getStatusCodeType */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "t", function() { return openapi["h" /* isOperationName */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "k", function() { return openapi["c" /* getOperationSummary */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "i", function() { return openapi["b" /* detectType */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "u", function() { return openapi["i" /* isPrimitiveType */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "q", function() { return openapi["f" /* isJsonLike */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "v", function() { return openapi["j" /* langFromMime */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "r", function() { return openapi["g" /* isNamedDefinition */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "o", function() { return openapi["e" /* humanizeConstraints */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "D", function() { return openapi["k" /* sortByRequired */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "c", function() { return openapi["a" /* SECURITY_SCHEMES_SECTION */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "z", function() { return helpers["f" /* mapWithLast */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "y", function() { return helpers["e" /* mapValues */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "j", function() { return helpers["b" /* flattenByProp */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "E", function() { return helpers["h" /* stripTrailingSlash */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "p", function() { return helpers["c" /* isAbsolutePath */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "s", function() { return helpers["d" /* isNumeric */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "e", function() { return helpers["a" /* appendToMdHeading */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "A", function() { return helpers["g" /* mergeObjects */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "x", function() { return highlight_mapLang; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "m", function() { return highlight_highlight; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "w", function() { return loadAndBundleSpec["b" /* loadAndBundleSpec */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "f", function() { return loadAndBundleSpec["a" /* convertSwagger2OpenAPI */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "a", function() { return dom["a" /* IS_BROWSER */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "C", function() { return dom["d" /* querySelector */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "n", function() { return dom["b" /* html2Str */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "B", function() { return dom["c" /* normalizeHash */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "d", function() { return Throttle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "g", function() { return debugTime; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "h", function() { return debugTimeEnd; });










/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("mobx-react");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getStatusCodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isOperationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getOperationSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isPrimitiveType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isJsonLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return langFromMime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isNamedDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return humanizeConstraints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return sortByRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SECURITY_SCHEMES_SECTION; });
function getStatusCodeType(statusCode, defaultAsError) {
    if (defaultAsError === void 0) { defaultAsError = false; }
    if (statusCode === 'default') {
        return defaultAsError ? 'error' : 'success';
    }
    if (statusCode < 100 || statusCode > 599) {
        throw new Error('invalid HTTP code');
    }
    var res = 'success';
    if (statusCode >= 300 && statusCode < 400) {
        res = 'redirect';
    }
    else if (statusCode >= 400) {
        res = 'error';
    }
    else if (statusCode < 200) {
        res = 'info';
    }
    return res;
}
var operationNames = {
    get: true,
    post: true,
    put: true,
    head: true,
    patch: true,
    delete: true,
    options: true
};
function isOperationName(key) {
    return key in operationNames;
}
function getOperationSummary(operation) {
    return operation.summary || operation.operationId || operation.description && operation.description.substring(0, 50) || '<no summary>';
}
var schemaKeywordTypes = {
    multipleOf: 'number',
    maximum: 'number',
    exclusiveMaximum: 'number',
    minimum: 'number',
    exclusiveMinimum: 'number',
    maxLength: 'string',
    minLength: 'string',
    pattern: 'string',
    items: 'array',
    maxItems: 'array',
    minItems: 'array',
    uniqueItems: 'array',
    maxProperties: 'object',
    minProperties: 'object',
    required: 'object',
    additionalProperties: 'object',
    properties: 'object'
};
function detectType(schema) {
    if (schema.type !== undefined) {
        return schema.type;
    }
    var keywords = Object.keys(schemaKeywordTypes);
    for (var _i = 0, keywords_1 = keywords; _i < keywords_1.length; _i++) {
        var keyword = keywords_1[_i];
        var type = schemaKeywordTypes[keyword];
        if (schema[keyword] !== undefined) {
            return type;
        }
    }
    return 'any';
}
function isPrimitiveType(schema) {
    if (schema.oneOf !== undefined || schema.anyOf !== undefined) {
        return false;
    }
    if (schema.type === 'object') {
        return schema.properties !== undefined ? Object.keys(schema.properties).length === 0 : schema.additionalProperties === undefined;
    }
    if (schema.type === 'array') {
        if (schema.items === undefined) {
            return true;
        }
        return false;
    }
    return true;
}
function isJsonLike(contentType) {
    return contentType.search(/json/i) !== -1;
}
function langFromMime(contentType) {
    if (contentType.search(/xml/i) !== -1) {
        return 'xml';
    }
    return 'clike';
}
function isNamedDefinition(pointer) {
    return /^#\/components\/schemas\/[^\/]+$/.test(pointer || '');
}
function humanizeConstraints(schema) {
    var res = [];
    var stringRange;
    if (schema.minLength !== undefined && schema.maxLength !== undefined) {
        if (schema.minLength === schema.maxLength) {
            stringRange = schema.minLength + " characters";
        }
        else {
            stringRange = "[ " + schema.minLength + " .. " + schema.maxLength + " ] characters";
        }
    }
    else if (schema.maxLength !== undefined) {
        stringRange = "<= " + schema.maxLength + " characters";
    }
    else if (schema.minLength !== undefined) {
        if (schema.minLength === 1) {
            stringRange = 'non-empty';
        }
        else {
            stringRange = ">= " + schema.minLength + " characters";
        }
    }
    if (stringRange !== undefined) {
        res.push(stringRange);
    }
    var numberRange;
    if (schema.minimum !== undefined && schema.maximum !== undefined) {
        numberRange = schema.exclusiveMinimum ? '( ' : '[ ';
        numberRange += schema.minimum;
        numberRange += ' .. ';
        numberRange += schema.maximum;
        numberRange += schema.exclusiveMaximum ? ' )' : ' ]';
    }
    else if (schema.maximum !== undefined) {
        numberRange = schema.exclusiveMaximum ? '< ' : '<= ';
        numberRange += schema.maximum;
    }
    else if (schema.minimum !== undefined) {
        numberRange = schema.exclusiveMinimum ? '> ' : '>= ';
        numberRange += schema.minimum;
    }
    if (numberRange !== undefined) {
        res.push(numberRange);
    }
    return res;
}
function sortByRequired(fields, order) {
    if (order === void 0) { order = []; }
    fields.sort(function (a, b) {
        if (!a.required && b.required) {
            return 1;
        }
        else if (a.required && !b.required) {
            return -1;
        }
        else if (a.required && b.required) {
            return order.indexOf(a.name) > order.indexOf(b.name) ? 1 : -1;
        }
        else {
            return 0;
        }
    });
}
var SECURITY_SCHEMES_SECTION = 'section/Authentication/';


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("json-pointer");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IS_BROWSER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return querySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return html2Str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return normalizeHash; });
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
function querySelector(selector) {
    if (typeof document !== 'undefined') {
        return document.querySelector(selector);
    }
    return null;
}
/**
 * Drop everything inside <...> (i.e., tags/elements), and keep the text.
 * Unlike browser innerText, this removes newlines; it also doesn't handle
 * un-encoded `<` or `>` characters very well, so don't feed it malformed HTML
 */
function html2Str(html) {
    return html.split(/<[^>]+>/).map(function (chunk) {
        return chunk.trim();
    }).filter(function (trimmedChunk) {
        return trimmedChunk.length > 0;
    }).join(' ');
}
function normalizeHash(hash) {
    return hash.startsWith('#') ? hash.substr(1) : hash;
} // scrollIntoViewIfNeeded polyfill
if (typeof Element !== 'undefined' && !Element.prototype.scrollIntoViewIfNeeded) {
    Element.prototype.scrollIntoViewIfNeeded = function (centerIfNeeded) {
        centerIfNeeded = arguments.length === 0 ? true : !!centerIfNeeded;
        var parent = this.parentNode;
        var parentComputedStyle = window.getComputedStyle(parent, undefined);
        var parentBorderTopWidth = parseInt(parentComputedStyle.getPropertyValue('border-top-width'), 10);
        var parentBorderLeftWidth = parseInt(parentComputedStyle.getPropertyValue('border-left-width'), 10);
        var overTop = this.offsetTop - parent.offsetTop < parent.scrollTop;
        var overBottom = this.offsetTop - parent.offsetTop + this.clientHeight - parentBorderTopWidth > parent.scrollTop + parent.clientHeight;
        var overLeft = this.offsetLeft - parent.offsetLeft < parent.scrollLeft;
        var overRight = this.offsetLeft - parent.offsetLeft + this.clientWidth - parentBorderLeftWidth > parent.scrollLeft + parent.clientWidth;
        var alignWithTop = overTop && !overBottom;
        if ((overTop || overBottom) && centerIfNeeded) {
            parent.scrollTop = this.offsetTop - parent.offsetTop - parent.clientHeight / 2 - parentBorderTopWidth + this.clientHeight / 2;
        }
        if ((overLeft || overRight) && centerIfNeeded) {
            parent.scrollLeft = this.offsetLeft - parent.offsetLeft - parent.clientWidth / 2 - parentBorderLeftWidth + this.clientWidth / 2;
        }
        if ((overTop || overBottom || overLeft || overRight) && !centerIfNeeded) {
            this.scrollIntoView(alignWithTop);
        }
    };
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonPointer; });
/* harmony import */ var json_pointer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var json_pointer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(json_pointer__WEBPACK_IMPORTED_MODULE_0__);


var origParse = json_pointer__WEBPACK_IMPORTED_MODULE_0__["parse"];
/**
 * Wrapper for JsonPointer. Provides common operations
 */
var JsonPointer = /** @class */ (function () {
    function JsonPointer() {
    }
    /**
     * returns last JsonPointer token
     * if level > 1 returns levels last (second last/third last)
     * @example
     * // returns subpath
     * JsonPointerHelper.baseName('/path/0/subpath')
     * // returns foo
     * JsonPointerHelper.baseName('/path/foo/subpath', 2)
     */
    JsonPointer.baseName = function (pointer, level) {
        if (level === void 0) { level = 1; }
        var tokens = JsonPointer.parse(pointer);
        return tokens[tokens.length - level];
    };
    /**
     * returns dirname of pointer
     * if level > 1 returns corresponding dirname in the hierarchy
     * @example
     * // returns /path/0
     * JsonPointerHelper.dirName('/path/0/subpath')
     * // returns /path
     * JsonPointerHelper.dirName('/path/foo/subpath', 2)
     */
    JsonPointer.dirName = function (pointer, level) {
        if (level === void 0) { level = 1; }
        var tokens = JsonPointer.parse(pointer);
        return json_pointer__WEBPACK_IMPORTED_MODULE_0__["compile"](tokens.slice(0, tokens.length - level));
    };
    /**
     * returns relative path tokens
     * @example
     * // returns ['subpath']
     * JsonPointerHelper.relative('/path/0', '/path/0/subpath')
     * // returns ['foo', 'subpath']
     * JsonPointerHelper.relative('/path', '/path/foo/subpath')
     */
    JsonPointer.relative = function (from, to) {
        var fromTokens = JsonPointer.parse(from);
        var toTokens = JsonPointer.parse(to);
        return toTokens.slice(fromTokens.length);
    };
    /**
     * overridden JsonPointer original parse to take care of prefixing '#' symbol
     * that is not valid JsonPointer
     */
    JsonPointer.parse = function (pointer) {
        var ptr = pointer;
        if (ptr.charAt(0) === '#') {
            ptr = ptr.substring(1);
        }
        return origParse(ptr);
    };
    /**
     * Creates a JSON pointer path, by joining one or more tokens to a base path.
     *
     * @param {string} base - The base path
     * @param {string|string[]} tokens - The token(s) to append (e.g. ["name", "first"])
     * @returns {string}
     */
    JsonPointer.join = function (base, tokens) {
        // TODO: optimize
        var baseTokens = JsonPointer.parse(base);
        var resTokens = baseTokens.concat(tokens);
        return json_pointer__WEBPACK_IMPORTED_MODULE_0__["compile"](resTokens);
    };
    JsonPointer.get = function (object, pointer) {
        return json_pointer__WEBPACK_IMPORTED_MODULE_0__["get"](object, pointer);
    };
    JsonPointer.compile = function (tokens) {
        return json_pointer__WEBPACK_IMPORTED_MODULE_0__["compile"](tokens);
    };
    JsonPointer.escape = function (pointer) {
        return json_pointer__WEBPACK_IMPORTED_MODULE_0__["escape"](pointer);
    };
    return JsonPointer;
}());

json_pointer__WEBPACK_IMPORTED_MODULE_0__["parse"] = JsonPointer.parse;
Object.assign(JsonPointer, json_pointer__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony default export */ var _unused_webpack_default_export = (JsonPointer);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return mapWithLast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mapValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return flattenByProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return stripTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isAbsolutePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isNumeric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appendToMdHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return mergeObjects; });
/**
 * Maps over array passing `isLast` bool to iterator as the second arguemnt
 */
function mapWithLast(array, iteratee) {
    var res = [];
    for (var i = 0; i < array.length - 1; i++) {
        res.push(iteratee(array[i], false));
    }
    if (array.length !== 0) {
        res.push(iteratee(array[array.length - 1], true));
    }
    return res;
}
/**
 * Creates an object with the same keys as object and values generated by running each
 * own enumerable string keyed property of object thru iteratee.
 * The iteratee is invoked with three arguments: (value, key, object).
 *
 * @param object the object to iterate over
 * @param iteratee the function invoked per iteration.
 */
function mapValues(object, iteratee) {
    var res = {};
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            res[key] = iteratee(object[key], key, object);
        }
    }
    return res;
}
/**
 * flattens collection using `prop` field as a children
 * @param collectionItems collection items
 * @param prop item property with child elements
 */
function flattenByProp(collectionItems, prop) {
    var res = [];
    var iterate = function (items) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            res.push(item);
            if (item[prop]) {
                iterate(item[prop]);
            }
        }
    };
    iterate(collectionItems);
    return res;
}
function stripTrailingSlash(path) {
    if (path.endsWith('/')) {
        return path.substring(0, path.length - 1);
    }
    return path;
}
function isAbsolutePath(path) {
    return /^(?:[a-z]+:)?/i.test(path);
}
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function appendToMdHeading(md, heading, content) {
    // if  heading is already in md and append to the end of it
    var testRegex = new RegExp("(^|\\n)#\\s?" + heading + "\\s*\\n", 'i');
    var replaceRegex = new RegExp("((\\n|^)#\\s*" + heading + "\\s*(\\n|$)(?:.|\\n)*?)(\\n#|$)", 'i');
    if (testRegex.test(md)) {
        return md.replace(replaceRegex, "$1\n\n" + content + "\n$4");
    }
    else {
        // else append heading itself
        var br = md === '' || md.endsWith('\n\n') ? '' : md.endsWith('\n') ? '\n' : '\n\n';
        return "" + md + br + "# " + heading + "\n\n" + content;
    }
} // credits https://stackoverflow.com/a/46973278/1749888
var mergeObjects = function (target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (!sources.length) {
        return target;
    }
    var source = sources.shift();
    if (source === undefined) {
        return target;
    }
    if (isMergebleObject(target) && isMergebleObject(source)) {
        Object.keys(source).forEach(function (key) {
            if (isMergebleObject(source[key])) {
                if (!target[key]) {
                    target[key] = {};
                }
                mergeObjects(target[key], source[key]);
            }
            else {
                target[key] = source[key];
            }
        });
    }
    return mergeObjects.apply(void 0, [target].concat(sources));
};
var isObject = function (item) {
    return item !== null && typeof item === 'object';
};
var isMergebleObject = function (item) {
    return isObject(item) && !Array.isArray(item);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("decko");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiInfoModel; });
/* harmony import */ var _utils___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

var ApiInfoModel = /** @class */ (function () {
    function ApiInfoModel(parser, options) {
        this.parser = parser;
        this.options = options;
        Object.assign(this, parser.spec.info);
    }
    Object.defineProperty(ApiInfoModel.prototype, "downloadLink", {
        get: function () {
            if (this.options.hideDownloadButton) {
                return undefined;
            }
            if (this.parser.specUrl) {
                return this.parser.specUrl;
            }
            if (_utils___WEBPACK_IMPORTED_MODULE_0__[/* IS_BROWSER */ "a"] && window.Blob && window.URL) {
                var blob = new Blob([JSON.stringify(this.parser.spec, null, 2)], {
                    type: 'application/json'
                });
                return window.URL.createObjectURL(blob);
            }
            else if (!_utils___WEBPACK_IMPORTED_MODULE_0__[/* IS_BROWSER */ "a"]) {
                return 'data:application/octet-stream;base64,' + new Buffer(JSON.stringify(this.parser.spec, null, 2)).toString('base64');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiInfoModel.prototype, "downloadFileName", {
        get: function () {
            if (!this.parser.specUrl) {
                return 'swagger.json';
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    return ApiInfoModel;
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(48).Buffer))

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loadAndBundleSpec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertSwagger2OpenAPI; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var json_schema_ref_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var json_schema_ref_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_schema_ref_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swagger2openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var swagger2openapi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swagger2openapi__WEBPACK_IMPORTED_MODULE_2__);



function loadAndBundleSpec(specUrlOrObject) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
        var parser, spec;
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0:
                    parser = new json_schema_ref_parser__WEBPACK_IMPORTED_MODULE_1__();
                    return [4 /*yield*/, parser.bundle(specUrlOrObject, {
                            resolve: {
                                http: {
                                    withCredentials: false
                                }
                            }
                        })];
                case 1:
                    spec = _a.sent();
                    if (spec.swagger !== undefined) {
                        return [2 /*return*/, convertSwagger2OpenAPI(spec)];
                    }
                    else {
                        return [2 /*return*/, spec];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function convertSwagger2OpenAPI(spec) {
    console.warn('[ReDoc Compatibility mode]: Converting OpenAPI 2.0 to OpenAPI 3.0');
    return new Promise(function (resolve, reject) { return Object(swagger2openapi__WEBPACK_IMPORTED_MODULE_2__["convertObj"])(spec, {
        patch: true,
        warnOnly: true
    }, function (err, res) {
        // TODO: log any warnings
        if (err) {
            return reject(err);
        }
        resolve(res && res.openapi);
    }); });
}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("slugify");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("eventemitter3");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("prismjs");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
* escapes JSON Pointer using ~0 for ~ and ~1 for /
* @param s the string to escape
* @return the escaped string
*/
function jpescape(s) {
    s = s.split('~').join('~0');
    s = s.split('/').join('~1');
    return s;
}

/**
* unescapes JSON Pointer using ~0 for ~ and ~1 for /
* @param s the string to unescape
* @return the unescaped string
*/
function jpunescape(s) {
    s = s.split('~1').join('/');
    s = s.split('~0').join('~');
    return s;
}

// JSON Pointer specification: http://tools.ietf.org/html/rfc6901

/**
* from obj, return the property with a JSON Pointer prop, optionally setting it
* to newValue
* @param obj the object to point into
* @param prop the JSON Pointer or JSON Reference
* @param newValue optional value to set the property to
* @return the found property, or false
*/
function jptr(obj, prop, newValue) {
    if (typeof obj === 'undefined') return false;
    if (!prop || (prop === '#')) return (typeof newValue !== 'undefined' ? newValue : obj);

    if (prop.indexOf('#')>=0) {
        let parts = prop.split('#');
        let uri = parts[0];
        if (uri) return false; // we do internal resolution only
        prop = parts[1];
        prop = decodeURIComponent(prop.slice(1));
    }
    if (prop.startsWith('/')) prop = prop.slice(1);

    let components = prop.split('/');
    for (let i=0;i<components.length;i++) {
        components[i] = jpunescape(components[i]);

        let setAndLast = (typeof newValue !== 'undefined') && (i == components.length-1);

        let index = parseInt(components[i],10);
        if (!Array.isArray(obj) || isNaN(index) || (index.toString() !== components[i])) {
            index = (Array.isArray(obj) && components[i] === '-') ? -2 : -1;
        }
        else {
            components[i] = (i > 0) ? components[i-1] : ''; // backtrack to indexed property name
        }

        if ((index != -1) || obj.hasOwnProperty(components[i])) {
            if (index >= 0) {
                if (setAndLast) {
                    obj[index] = newValue;
                }
                obj = obj[index];
            }
            else if (index === -2) {
                if (setAndLast) {
                    if (Array.isArray(obj)) {
                        obj.push(newValue);
                    }
                    return newValue;
                }
                else return undefined;
            }
            else {
                if (setAndLast) {
                    obj[components[i]] = newValue;
                }
                obj = obj[components[i]];
            }
        }
        else {
            if ((typeof newValue !== 'undefined') && (typeof obj === 'object') &&
                (!Array.isArray(obj))) {
                obj[components[i]] = (setAndLast ? newValue : ((components[i+1] === '0' || components[i+1] === '-') ? [] : {}));
                obj = obj[components[i]];
            }
            else return false;
        }
    }
    return obj;
}

module.exports = {
    jptr : jptr,
    jpescape : jpescape,
    jpunescape : jpunescape
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(74)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, ".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{height:15px;bottom:0}.ps__rail-x,.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;position:absolute}.ps__rail-y{width:15px;right:0}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps__rail-x:focus,.ps__rail-x:hover,.ps__rail-y:focus,.ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px}.ps__thumb-x,.ps__thumb-y{background-color:#aaa;border-radius:6px;position:absolute}.ps__thumb-y{transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px}.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("perfect-scrollbar");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("openapi-sampler");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("mark.js");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("js-yaml");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = undefined;

/***/ }),
/* 32 */
/***/ (function(module, exports) {



/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("dompurify");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("react-dropdown");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// imports


// module
exports.push([module.i, "code[class*=language-],pre[class*=language-]{color:#fff;background:none;text-shadow:0 -.1em .2em #000;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}:not(pre)>code[class*=language-],pre[class*=language-]{background:#4d4033}pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto;border:.3em solid #7a6652;border-radius:.5em;box-shadow:inset 1px 1px .5em #000}:not(pre)>code[class*=language-]{padding:.15em .2em .05em;border-radius:.3em;border:.13em solid #7a6652;box-shadow:inset 1px 1px .3em -.1em #000;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#998066}.namespace,.token.punctuation{opacity:.7}.token.boolean,.token.constant,.token.number,.token.property,.token.symbol,.token.tag{color:#d1949e}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#bde052}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url,.token.variable{color:#f5b83d}.token.atrule,.token.attr-value,.token.keyword{color:#d1949e}.token.important,.token.regex{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}.token.deleted{color:red}", ""]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// @ts-check


const fs = __webpack_require__(32);
const url = __webpack_require__(10);
const pathlib = __webpack_require__(23);

const co = __webpack_require__(73);
const maybe = __webpack_require__(72);
const fetch = __webpack_require__(31);
const yaml = __webpack_require__(30);
const jptr = __webpack_require__(22);

const common = __webpack_require__(71);
const walkSchema = __webpack_require__(67).walkSchema;
const statusCodes = __webpack_require__(65).statusCodes;

// TODO split out into params, security etc
// TODO handle specification-extensions with plugins?

const targetVersion = '3.0.0';
var componentNames; // initialised in main

function throwError(message, options) {
    let err = new Error(message);
    err.options = options;
    if (options.promise) {
        options.promise.reject(err);
    }
    else {
        throw err;
    }
}

function throwOrWarn(message, container, options) {
    if (options.warnOnly) {
        container[options.warnProperty||'x-s2o-warning'] = message;
    }
    else {
        throwError(message, options);
    }
}

function fixUpSubSchema(schema,parent) {
    if (schema.discriminator && typeof schema.discriminator === 'string') {
        schema.discriminator = { propertyName: schema.discriminator };
    }
    if (schema.items && Array.isArray(schema.items)) {
        if (schema.items.length === 0) {
            schema.items = {};
        }
        else if (schema.items.length === 1) {
            schema.items = schema.items[0];
        }
        else schema.items = { anyOf: schema.items };
    }
    if (schema.type && Array.isArray(schema.type)) {
        if (schema.type.length === 0) {
            delete schema.type;
        }
        else {
            if (!schema.oneOf) schema.oneOf = [];
            for (let type of schema.type) {
                let newSchema = {};
                if (type === 'null') {
                    schema.nullable = true;
                }
                else {
                    newSchema.type = type;
                    for (let prop of common.arrayProperties) {
                        if (typeof schema.prop !== 'undefined') {
                            newSchema[prop] = schema[prop];
                            delete schema[prop];
                        }
                    }
                }
                if (newSchema.type) {
                    schema.oneOf.push(newSchema);
                }
            }
            delete schema.type;
            if (schema.oneOf.length === 0) {
                delete schema.oneOf; // means was just null => nullable
            }
            else if (schema.oneOf.length < 2) {
                schema.type = schema.oneOf[0].type;
                if (Object.keys(schema.oneOf[0]).length > 1) {
                    throwOrWarn('Lost properties from oneOf',schema,options);
                }
                delete schema.oneOf;

            }
        }
        // do not else this
        if (schema.type && Array.isArray(schema.type) && schema.type.length === 1) {
            schema.type = schema.type[0];
        }
    }
    if (schema.type && schema.type === 'null') {
        delete schema.type;
        schema.nullable = true;
    }
    if ((schema.type === 'array') && (!schema.items)) {
        schema.items = {};
    }
    if (typeof schema.required === 'boolean') {
        if (schema.required && schema.name) {
            if (typeof parent.required === 'undefined') {
                parent.required = [];
            }
            if (Array.isArray(parent.required)) parent.required.push(schema.name);
        }
        delete schema.required;
    }

    // TODO if we have a nested properties (object inside an object) and the
    // *parent* type is not set, force it to object
    // TODO if default is set but type is not set, force type to typeof default
}

function fixUpSubSchemaExtensions(schema,parent) {
    if (schema["x-required"] && Array.isArray(schema["x-required"])) {
        if (!schema.required) schema.required = [];
        schema.required = schema.required.concat(schema["x-required"]);
        delete schema["x-required"];
    }
    if (schema["x-anyOf"]) {
        schema.anyOf = schema["x-anyOf"];
        delete schema["x-anyOf"];
    }
    if (schema["x-oneOf"]) {
        schema.anyOf = schema["x-oneOf"];
        delete schema["x-oneOf"];
    }
    if (schema["x-not"]) {
        schema.anyOf = schema["x-not"];
        delete schema["x-not"];
    }
    if (typeof schema["x-nullable"] === 'boolean') {
        schema.nullable = schema["x-nullable"];
        delete schema["x-nullable"];
    }
}

function fixUpSchema(schema) {
    walkSchema(schema,{},{},function(schema,parent,state){
        fixUpSubSchemaExtensions(schema,parent);
        fixUpSubSchema(schema,parent);
    });
}

function fixupRefs(obj, key, state) {
    let options = state.payload.options;
    if (common.isRef(obj,key)) {
        if (obj[key].startsWith('#/components/')) {
            // nop
        }
        else if (obj[key].startsWith('#/definitions/')) {
            //only the first part of a schema component name must be sanitised
            let keys = obj[key].replace('#/definitions/', '').split('/');
            let newKey = componentNames.schemas[decodeURIComponent(keys[0])]; // lookup, resolves a $ref
            if (!newKey) {
                throwOrWarn('Could not resolve reference '+obj[key],obj,options);
            }
            else {
                keys[0] = newKey;
            }
            obj[key] = '#/components/schemas/' + keys.join('/');
        }
        else if (obj[key].startsWith('#/parameters/')) {
            // for extensions like Apigee's x-templates
            obj[key] = '#/components/parameters/' + common.sanitise(obj[key].replace('#/parameters/', ''));
        }
        else if (obj[key].startsWith('#/responses/')) {
            // for extensions like Apigee's x-templates
            obj[key] = '#/components/responses/' + common.sanitise(obj[key].replace('#/responses/', ''));
        }
        else if (obj[key].startsWith('#')) {
            // fixes up direct $refs or those created by resolvers
            let target = common.clone(jptr.jptr(options.openapi,obj[key]));
            if (target === false) throwOrWarn('direct $ref not found '+obj[key],obj,options)
            else if (options.refmap[obj[key]]) {
                obj[key] = options.refmap[obj[key]];
            }
            else {
                // we use a heuristic to determine what kind of thing is being referenced
                let oldRef = obj[key];
                oldRef = oldRef.replace('/properties/headers/','');
                oldRef = oldRef.replace('/properties/responses/','');
                oldRef = oldRef.replace('/properties/parameters/','');
                oldRef = oldRef.replace('/properties/schemas/','');
                let type = 'schemas';
                let schemaIndex = oldRef.lastIndexOf('/schema');
                type = (oldRef.indexOf('/headers/')>schemaIndex) ? 'headers' :
                    ((oldRef.indexOf('/responses/')>schemaIndex) ? 'responses' :
                    ((oldRef.indexOf('/example')>schemaIndex) ? 'examples' :
                    ((oldRef.indexOf('/parameters/')>schemaIndex) ? 'parameters' : 'schemas')));

                // non-body/form parameters have not moved in the overall structure (like responses)
                // but extracting the requestBodies can cause the *number* of parameters to change

                if (type === 'schemas') {
                    fixUpSchema(target);
                }

                if (type !== 'responses') {
                    let prefix = type.substr(0,type.length-1);
                    if ((prefix === 'parameter') && target.name && (target.name === common.sanitise(target.name))) {
                        prefix = encodeURIComponent(target.name);
                    }
                    let suffix = 1;
                    while (jptr.jptr(options.openapi,'#/components/'+type+'/'+prefix+suffix)) suffix++;
                    let newRef = '#/components/'+type+'/'+prefix+suffix;
                    let refSuffix = '';

                    if (type === 'examples') {
                        target = { value: target };
                        refSuffix = '/value';
                    }

                    jptr.jptr(options.openapi,newRef,target);
                    options.refmap[obj[key]] = newRef+refSuffix;
                    obj[key] = newRef+refSuffix;
                }
            }
        }
    }
    if ((key === 'x-ms-odata') && (typeof obj[key] === 'string') && (obj[key].startsWith('#/'))) {
        let keys = obj[key].replace('#/definitions/', '').replace('#/components/schemas/','').split('/');
        let newKey = componentNames.schemas[decodeURIComponent(keys[0])]; // lookup, resolves a $ref
        if (!newKey) {
            throwOrWarn('Could not resolve reference '+obj[key],obj,options);
        }
        else {
            keys[0] = newKey;
        }
        obj[key] = '#/components/schemas/' + keys.join('/');
    }
}

/*
* This has to happen as a separate pass because multiple $refs may point
* through elements of the same path
*/
function dedupeRefs(openapi, options) {
    for (let ref in options.refmap) {
        jptr.jptr(openapi,ref,{ $ref: options.refmap[ref] });
    }
}

function processSecurity(securityObject) {
    for (let s in securityObject) {
        for (let k in securityObject[s]) {
            let sname = common.sanitise(k);
            if (k != sname) {
                securityObject[s][sname] = securityObject[s][k];
                delete securityObject[s][k];
            }
        }
    }
}

function processSecurityScheme(scheme, options) {
    if (scheme.type === 'basic') {
        scheme.type = 'http';
        scheme.scheme = 'basic';
    }
    if (scheme.type === 'oauth2') {
        let flow = {};
        let flowName = scheme.flow;
        if (scheme.flow === 'application') flowName = 'clientCredentials';
        if (scheme.flow === 'accessCode') flowName = 'authorizationCode';
        if (typeof scheme.authorizationUrl !== 'undefined') flow.authorizationUrl = scheme.authorizationUrl.split('?')[0].trim() || '/';
        if (typeof scheme.tokenUrl !== 'undefined') flow.tokenUrl = scheme.tokenUrl.split('?')[0].trim() || '/';
        flow.scopes = scheme.scopes || {};
        scheme.flows = {};
        scheme.flows[flowName] = flow;
        delete scheme.flow;
        delete scheme.authorizationUrl;
        delete scheme.tokenUrl;
        delete scheme.scopes;
        if (typeof scheme.name !== 'undefined') {
            if (options.patch) {
                delete scheme.name;
            }
            else {
                throwError('(Patchable) oauth2 securitySchemes should not have name property', options);
            }
        }
    }
}

function deleteParameters(value) {
    return !value["x-s2o-delete"];
}

function processHeader(header, options) {
    if (header.$ref) {
        header.$ref = header.$ref.replace('#/responses/', '#/components/responses/');
    }
    else {
        if (header.type && !header.schema) {
            header.schema = {};
        }
        if (header.type) header.schema.type = header.type;
        if (header.items && header.items.collectionFormat) {
            if (header.items.type && header.items.type != 'array') {
                if (header.items.collectionFormat != header.collectionFormat) {
                    throwOrWarn('Nested collectionFormats are not supported', header, options);
                }
                delete header.items.collectionFormat;
            }
        }
        if (typeof header.collectionFormat !== 'undefined') {
            if (header.type != 'array') {
                if (options.patch) {
                    delete header.collectionFormat;
                }
                else {
                    throwError('(Patchable) collectionFormat is only applicable to header.type array', options);
                }
            }
            if (header.collectionFormat === 'csv') {
                header.style = 'simple';
            }
            if (header.collectionFormat === 'ssv') {
                throwOrWarn('collectionFormat:ssv is no longer supported for headers', header, options); // not lossless
            }
            if (header.collectionFormat === 'pipes') {
                throwOrWarn('collectionFormat:pipes is no longer supported for headers', header, options); // not lossless
            }
            if (header.collectionFormat === 'multi') {
                header.explode = true;
            }
            if (header.collectionFormat === 'tsv') {
                throwOrWarn('collectionFormat:tsv is no longer supported', header, options); // not lossless
                header["x-collectionFormat"] = 'tsv';
            }
            delete header.collectionFormat;
        }
        delete header.type;
        for (let prop of common.parameterTypeProperties) {
            if (typeof header[prop] !== 'undefined') {
                header.schema[prop] = header[prop];
                delete header[prop];
            }
        }
        for (let prop of common.arrayProperties) {
            if (typeof header[prop] !== 'undefined') {
                header.schema[prop] = header[prop];
                delete header[prop];
            }
        }
    }
}

function fixParamRef(param, options) {
    if (param.$ref.indexOf('#/parameters/') >= 0) {
        let refComponents = param.$ref.split('#/parameters/');
        param.$ref = refComponents[0] + '#/components/parameters/' + common.sanitise(refComponents[1]);
    }
    if (param.$ref.indexOf('#/definitions/') >= 0) {
        throwOrWarn('Definition used as parameter', param, options);
    }
}

/**
 * @returns requestBody
 */
function processParameter(param, op, path, index, openapi, options) {
    let result = {};
    let singularRequestBody = true;

    let consumes = ((op && op.consumes) || (openapi.consumes || [])).filter(common.uniqueOnly);

    if (param.$ref && (typeof param.$ref === 'string')) {
        // if we still have a ref here, it must be an internal one
        fixParamRef(param, options);
        var ptr = decodeURIComponent(param.$ref.replace('#/components/parameters/', ''));
        var rbody = false;
        let target = openapi.components.parameters[ptr]; // resolves a $ref, must have been sanitised already

        if (((!target) || (target["x-s2o-delete"])) && param.$ref.startsWith('#/')) {
            // if it's gone, chances are it's a requestBody component now unless spec was broken
            param["x-s2o-delete"] = true;
            rbody = true;
        }

        // shared formData parameters from swagger or path level could be used in any combination.
        // we dereference all op.requestBody's then hash them and pull out common ones later

        if (rbody) {
            let ref = param.$ref;
            let newParam = common.resolveInternal(openapi, param.$ref);
            if (!newParam && ref.startsWith('#/')) {
                throwOrWarn('Could not resolve reference ' + ref, param, options);
            }
            else {
                if (newParam) param = newParam; // preserve reference
            }
        }
    }

    if (param.name || param.in) { // if it's a real parameter OR we've dereferenced it

        if (typeof param['x-deprecated'] === 'boolean') {
            param.deprecated = param['x-deprecated'];
            delete param['x-deprecated'];
        }

        if (typeof param['x-example'] !== 'undefined') {
            param.example = param['x-example'];
            delete param['x-example'];
        }

        if ((param.in != 'body') && (!param.type)) {
            if (options.patch) {
                param.type = 'string';
            }
            else {
                throwError('(Patchable) parameter.type is mandatory for non-body parameters', options);
            }
        }
        if (param.type && typeof param.type === 'object' && param.type.$ref) {
            // $ref anywhere sensibility
            param.type = resolveInternal(openapi, param.type.$ref);
        }
        if (param.description && typeof param.description === 'object' && param.description.$ref) {
            // $ref anywhere sensibility
            param.description = resolveInternal(openapi, param.description.$ref);
        }

        var oldCollectionFormat = param.collectionFormat;
        if (param.collectionFormat) {
            if (param.type != 'array') {
                if (options.patch) {
                    delete param.collectionFormat;
                }
                else {
                    throwError('(Patchable) collectionFormat is only applicable to param.type array', options);
                }
            }
            if ((param.collectionFormat === 'csv') && ((param.in === 'query') || (param.in === 'cookie'))) {
                param.style = 'form';
            }
            if ((param.collectionFormat === 'csv') && ((param.in === 'path') || (param.in === 'header'))) {
                param.style = 'simple';
            }
            if (param.collectionFormat === 'ssv') {
                if (param.in === 'query') {
                    param.style = 'spaceDelimited';
                }
                else {
                    throwOrWarn('collectionFormat:ssv is no longer supported except for in:query parameters', param, options); // not lossless
                }
            }
            if (param.collectionFormat === 'pipes') {
                if (param.in === 'query') {
                    param.style = 'pipeDelimited';
                }
                else {
                    throwOrWarn('collectionFormat:pipes is no longer supported except for in:query parameters', param, options); // not lossless
                }
            }
            if (param.collectionFormat === 'multi') {
                param.explode = true;
            }
            if (param.collectionFormat === 'tsv') {
                throwOrWarn('collectionFormat:tsv is no longer supported', param, options); // not lossless
                param["x-collectionFormat"] = 'tsv';
            }
            delete param.collectionFormat;
        }

        if (param.type && (param.type != 'object') && (param.type != 'body') && (param.in != 'formData')) {
            if (param.items && param.schema) {
                throwOrWarn('parameter has array,items and schema', param, options);
            }
            else {
                if ((!param.schema) || (typeof param.schema !== 'object')) param.schema = {};
                param.schema.type = param.type;
                if (param.items) {
                    param.schema.items = param.items;
                    delete param.items;
                    common.recurse(param.schema.items, null, function (obj, key, state) {
                        if ((key === 'collectionFormat') && (typeof obj[key] === 'string')) {
                            if (oldCollectionFormat && obj[key] !== oldCollectionFormat) {
                                throwOrWarn('Nested collectionFormats are not supported', param, options);
                            }
                            delete obj[key]; // not lossless
                        }
                        // items in 2.0 was a subset of JSON-Schema items object, it gets
                        // fixed up below
                    });
                }
                for (let prop of common.parameterTypeProperties) {
                    if (typeof param[prop] !== 'undefined') param.schema[prop] = param[prop];
                    delete param[prop];
                }
            }
        }

        if (param.schema) {
            fixUpSchema(param.schema);
        }

        if (param["x-ms-skip-url-encoding"]) {
            if (param.in === 'query') { // might be in:path, not allowed in OAS3
                param.allowReserved = true;
                delete param["x-ms-skip-url-encoding"];
            }
        }
    }

    if (param.in === 'formData') {
        // convert to requestBody component
        singularRequestBody = false;
        result.content = {};
        var contentType = 'application/x-www-form-urlencoded';
        if ((consumes.length) && (consumes.indexOf('multipart/form-data') >= 0)) {
            contentType = 'multipart/form-data';
        }

        result.content[contentType] = {};
        if (param.schema) {
            result.content[contentType].schema = param.schema;
            if (param.schema.$ref) {
                result['x-s2o-name'] = decodeURIComponent(param.schema.$ref.replace('#/components/schemas/', ''));
            }
        }
        else {
            result.content[contentType].schema = {};
            result.content[contentType].schema.type = 'object';
            result.content[contentType].schema.properties = {};
            result.content[contentType].schema.properties[param.name] = {};
            var schema = result.content[contentType].schema;
            let target = result.content[contentType].schema.properties[param.name];
            if (param.description) target.description = param.description;
            if (param.example) target.example = param.example;
            if (param.type) target.type = param.type;

            for (let prop of common.parameterTypeProperties) {
                if (typeof param[prop] !== 'undefined') target[prop] = param[prop];
            }
            if (param.required === true) {
                if (!schema.required) schema.required = [];
                schema.required.push(param.name);
            }
            if (typeof param.default !== 'undefined') target.default = param.default;
            if (target.properties) target.properties = param.properties;
            if (param.allOf) target.allOf = param.allOf; // new are anyOf, oneOf, not, x- vendor extensions?
            if ((param.type === 'array') && (param.items)) {
                target.items = param.items;
                if (target.items.collectionFormat) delete target.items.collectionFormat;
            }
            if (param.type === 'file') {
                target.type = 'string';
                target.format = 'binary';
            }
        }
    }
    else if (param.type === 'file') {
        // convert to requestBody
        if (param.required) result.required = param.required;
        result.content = {};
        result.content["application/octet-stream"] = {};
        result.content["application/octet-stream"].schema = {};
        result.content["application/octet-stream"].schema.type = 'string';
        result.content["application/octet-stream"].schema.format = 'binary';
    }
    if (param.in === 'body') {
        result.content = {};
        if (param.name) result['x-s2o-name'] = (op && op.operationId ? common.sanitiseAll(op.operationId) : '') + ('_' + param.name).toCamelCase();
        if (param.description) result.description = param.description;
        if (param.required) result.required = param.required;

        if (param.schema && param.schema.$ref) {
            result['x-s2o-name'] = decodeURIComponent(param.schema.$ref.replace('#/components/schemas/', ''));
        }
        else if (param.schema && (param.schema.type === 'array') && param.schema.items && param.schema.items.$ref) {
            result['x-s2o-name'] = decodeURIComponent(param.schema.items.$ref.replace('#/components/schemas/', '')) + 'Array';
        }

        if (!consumes.length) {
            consumes.push('application/json'); // TODO verify default
        }

        for (let mimetype of consumes) {
            result.content[mimetype] = {};
            result.content[mimetype].schema = common.clone(param.schema) || {};
            fixUpSchema(result.content[mimetype].schema);
        }
    }

    if (Object.keys(result).length > 0) {
        param["x-s2o-delete"] = true;
        // work out where to attach the requestBody
        if (op) {
            if (op.requestBody && singularRequestBody) {
                op.requestBody["x-s2o-overloaded"] = true;
                let opId = op.operationId || index;

                throwOrWarn('Operation ' + opId + ' has multiple requestBodies', op, options);
            }
            else {
                op.requestBody = Object.assign({}, op.requestBody); // make sure we have one
                if ((op.requestBody.content && op.requestBody.content["multipart/form-data"])
                    && (result.content["multipart/form-data"])) {
                    op.requestBody.content["multipart/form-data"].schema.properties =
                        Object.assign(op.requestBody.content["multipart/form-data"].schema.properties, result.content["multipart/form-data"].schema.properties);
                    op.requestBody.content["multipart/form-data"].schema.required = (op.requestBody.content["multipart/form-data"].schema.required || []).concat(result.content["multipart/form-data"].schema.required||[]);
                    if (!op.requestBody.content["multipart/form-data"].schema.required.length) {
                        delete op.requestBody.content["multipart/form-data"].schema.required;
                    }
                }
                else if ((op.requestBody.content && op.requestBody.content["application/x-www-form-urlencoded"])
                    && (result.content["application/x-www-form-urlencoded"])) {
                    op.requestBody.content["application/x-www-form-urlencoded"].schema.properties =
                        Object.assign(op.requestBody.content["application/x-www-form-urlencoded"].schema.properties, result.content["application/x-www-form-urlencoded"].schema.properties);
                    op.requestBody.content["application/x-www-form-urlencoded"].schema.required = (op.requestBody.content["application/x-www-form-urlencoded"].schema.required || []).concat(result.content["application/x-www-form-urlencoded"].schema.required||[]);
                    if (!op.requestBody.content["application/x-www-form-urlencoded"].schema.required.length) {
                        delete op.requestBody.content["application/x-www-form-urlencoded"].schema.required;
                    }
                }
                else {
                    op.requestBody = Object.assign(op.requestBody, result);
                    if (!op.requestBody['x-s2o-name']) {
                        if (op.requestBody.schema && op.requestBody.schema.$ref) {
                            op.requestBody['x-s2o-name'] = decodeURIComponent(op.requestBody.schema.$ref.replace('#/components/schemas/', '')).split('/').join('');
                        }
                        else if (op.operationId) {
                            op.requestBody['x-s2o-name'] = common.sanitiseAll(op.operationId);
                        }
                    }
                }
            }
        }
    }

    // tidy up
    delete param.type;
    for (let prop of common.parameterTypeProperties) {
        delete param[prop];
    }

    if ((param.in === 'path') && ((typeof param.required === 'undefined') || (param.required !== true))) {
        if (options.patch) {
            param.required = true;
        }
        else {
            throwError('(Patchable) path parameters must be required:true', options);
        }
    }

    return result;
}

function processResponse(response, name, op, openapi, options) {
    if (response.$ref && (typeof response.$ref === 'string')) {
        if (response.$ref.indexOf('#/definitions/') >= 0) {
            //response.$ref = '#/components/schemas/'+common.sanitise(response.$ref.replace('#/definitions/',''));
            throwOrWarn('definition used as response: ' + response.$ref, response, options);
        }
        else {
            if (response.$ref.startsWith('#/responses/')) {
                response.$ref = '#/components/responses/' + common.sanitise(decodeURIComponent(response.$ref.replace('#/responses/', '')));
            }
        }
    }
    else {
        if ((typeof response.description === 'undefined') || (response.description === null)
            || ((response.description === '') && options.patch)) {
            if (options.patch) {
                let sc = statusCodes.find(function (e) {
                    return e.code === name;
                });
                if ((typeof response === 'object') && (!Array.isArray(response))) {
                    response.description = (sc ? sc.phrase : '');
                }
            }
            else {
                throwError('(Patchable) response.description is mandatory', options);
            }
        }
        if (response.schema) {

            fixUpSchema(response.schema);

            if (response.schema.$ref && (typeof response.schema.$ref === 'string') && response.schema.$ref.startsWith('#/responses/')) {
                response.schema.$ref = '#/components/responses/' + common.sanitise(decodeURIComponent(response.schema.$ref.replace('#/responses/', '')));
            }

            let produces = ((op && op.produces) || (openapi.produces || [])).filter(common.uniqueOnly);
            if (!produces.length) produces.push('*/*'); // TODO verify default

            response.content = {};
            for (let mimetype of produces) {
                response.content[mimetype] = {};
                response.content[mimetype].schema = common.clone(response.schema);
                if (response.examples && response.examples[mimetype]) {
                    let example = {};
                    example.value = response.examples[mimetype];
                    response.content[mimetype].examples = {};
                    response.content[mimetype].examples.response = example;
                    delete response.examples[mimetype];
                }
                if (response.content[mimetype].schema.type === 'file') {
                    response.content[mimetype].schema = { type: 'string', format: 'binary' };
                }
            }
            delete response.schema;
        }
        // examples for content-types not listed in produces
        for (let mimetype in response.examples) {
            if (!response.content) response.content = {};
            if (!response.content[mimetype]) response.content[mimetype] = {};
            response.content[mimetype].examples = {};
            response.content[mimetype].examples.response = {};
            response.content[mimetype].examples.response.value = response.examples[mimetype];
        }
        delete response.examples;

        if (response.headers) {
            for (let h in response.headers) {
                if (h.toLowerCase() === 'status code') {
                    if (options.patch) {
                        delete response.headers[h];
                    }
                    else {
                        throwError('(Patchable) "Status Code" is not a valid header', options);
                    }
                }
                else {
                    processHeader(response.headers[h], options);
                }
            }
        }
    }
}

function processPaths(container, containerName, options, requestBodyCache, openapi) {
    for (let p in container) {
        var path = container[p];
        // path.$ref is external only
        if ((path['x-trace']) && (typeof path['x-trace'] === 'object')) {
            path.trace = path['x-trace'];
            delete path['x-trace'];
        }
        if ((path['x-summary']) && (typeof path['x-summary'] === 'string')) {
            path.summary = path['x-summary'];
            delete path['x-summary'];
        }
        if ((path['x-description']) && (typeof path['x-description'] === 'string')) {
            path.description = path['x-description'];
            delete path['x-description'];
        }
        if ((path['x-servers']) && (Array.isArray(path['x-servers']))) {
            path.servers = path['x-servers'];
            delete path['x-servers'];
        }
        for (let method in path) {
            if ((common.httpVerbs.indexOf(method) >= 0) || (method === 'x-amazon-apigateway-any-method')) {
                var op = path[method];

                if (op.parameters && Array.isArray(op.parameters)) {
                    if (path.parameters) {
                        for (let param of path.parameters) {
                            if (typeof param.$ref === 'string') {
                                fixParamRef(param, options);
                                param = common.resolveInternal(openapi, param.$ref);
                            }
                            var match = op.parameters.find(function (e, i, a) {
                                return ((e.name === param.name) && (e.in === param.in));
                            });

                            if (!match && (param.in === 'formData') || (param.in === 'body') || (param.type === 'file')) {
                                processParameter(param, op, path, p, openapi, options);
                            }
                        }
                    }
                    for (let param of op.parameters) {
                        processParameter(param, op, path, method + ':' + p, openapi, options);
                    }
                    if (!options.debug) {
                        op.parameters = op.parameters.filter(deleteParameters);
                    }
                }

                if (op.security) processSecurity(op.security);

                //don't need to remove requestBody for non-supported ops as they "SHALL be ignored"

                // responses
                if (!op.responses) {
                    var defaultResp = {};
                    defaultResp.description = 'Default response';
                    op.responses = { default: defaultResp };
                }
                for (let r in op.responses) {
                    var response = op.responses[r];
                    processResponse(response, r, op, openapi, options);
                }

                if ((op['x-servers']) && (Array.isArray(op['x-servers']))) {
                    op.servers = op['x-servers'];
                    delete op['x-servers'];
                } else if (op.schemes && op.schemes.length) {
                    for (let scheme of op.schemes) {
                        if ((!openapi.schemes) || (openapi.schemes.indexOf(scheme) < 0)) {
                            if (!op.servers) {
                                op.servers = [];
                            }
                            for (let server of openapi.servers) {
                                let newServer = common.clone(server);
                                let serverUrl = url.parse(newServer.url);
                                serverUrl.protocol = scheme;
                                newServer.url = serverUrl.format();
                                op.servers.push(newServer);
                            }
                        }
                    }
                }

                if (options.debug) {
                    op["x-s2o-consumes"] = op.consumes || [];
                    op["x-s2o-produces"] = op.produces || [];
                }
                delete op.consumes;
                delete op.produces;
                delete op.schemes;

                if (op["x-ms-examples"]) {
                    for (let e in op["x-ms-examples"]) {
                        let example = op["x-ms-examples"][e];
                        let se = common.sanitiseAll(e);
                        if (example.parameters) {
                            for (let p in example.parameters) {
                                let value = example.parameters[p];
                                for (var param of (op.parameters||[]).concat(path.parameters||[])) {
                                    if (param.$ref) {
                                        param = jptr.jptr(openapi,param.$ref);
                                    }
                                    if ((param.name === p) && (!param.example)) {
                                        if (!param.examples) {
                                            param.examples = {};
                                        }
                                        param.examples[e] = {value: value};
                                    }
                                }
                            }
                        }
                        if (example.responses) {
                            for (let r in example.responses) {
                                if (example.responses[r].headers) {
                                    for (let h in example.responses[r].headers) {
                                        let value = example.responses[r].headers[h];
                                        for (let rh in op.responses[r].headers) {
                                            if (rh === h) {
                                                let header = op.responses[r].headers[rh];
                                                header.example = value;
                                            }
                                        }
                                    }
                                }
                                if (example.responses[r].body) {
                                    openapi.components.examples[se] = { value: common.clone(example.responses[r].body) };
                                    if (op.responses[r] && op.responses[r].content) {
                                        for (let ct in op.responses[r].content) {
                                            let contentType = op.responses[r].content[ct];
                                            if (!contentType.examples) {
                                                contentType.examples = {};
                                            }
                                            contentType.examples[e] = { $ref: '#/components/examples/'+se };
                                        }
                                    }
                                }

                            }
                        }
                    }
                    delete op["x-ms-examples"];
                }

                if (op.parameters && op.parameters.length === 0) delete op.parameters;

                if (op.requestBody) {
                    var effectiveOperationId = op.operationId ? common.sanitiseAll(op.operationId) : common.sanitiseAll(method + p).toCamelCase();
                    var rbName = common.sanitise(op.requestBody['x-s2o-name'] || effectiveOperationId || '');
                    delete op.requestBody['x-s2o-name'];
                    var rbStr = JSON.stringify(op.requestBody);
                    var rbHash = common.hash(rbStr);
                    if (!requestBodyCache[rbHash]) {
                        var entry = {};
                        entry.name = rbName;
                        entry.body = op.requestBody;
                        entry.refs = [];
                        requestBodyCache[rbHash] = entry;
                    }
                    let ptr = '#/'+containerName+'/'+encodeURIComponent(jptr.jpescape(p))+'/'+method+'/requestBody';
                    requestBodyCache[rbHash].refs.push(ptr);
                }

            }
        }
        if (path.parameters) {
            for (let p2 in path.parameters) {
                var param = path.parameters[p2];
                processParameter(param, null, path, p, openapi, options); // index here is the path string
            }
            if (!options.debug) {
                path.parameters = path.parameters.filter(deleteParameters);
            }
        }
    }
}

function main(openapi, options) {

    var requestBodyCache = {};
    componentNames = { schemas: {} };

    if (openapi.security) processSecurity(openapi.security);

    for (let s in openapi.components.securitySchemes) {
        let sname = common.sanitise(s);
        if (s != sname) {
            if (openapi.components.securitySchemes[sname]) {
                throwError('Duplicate sanitised securityScheme name ' + sname, options);
            }
            openapi.components.securitySchemes[sname] = openapi.components.securitySchemes[s];
            delete openapi.components.securitySchemes[s];
        }
        processSecurityScheme(openapi.components.securitySchemes[sname], options);
    }

    for (let s in openapi.components.schemas) {
        let sname = common.sanitiseAll(s);
        let suffix = '';
        if (s != sname) {
            while (openapi.components.schemas[sname + suffix]) {
                // @ts-ignore
                suffix = (suffix ? ++suffix : 2);
            }
            openapi.components.schemas[sname + suffix] = openapi.components.schemas[s];
            delete openapi.components.schemas[s];
        }
        componentNames.schemas[s] = sname + suffix;
        fixUpSchema(openapi.components.schemas[sname+suffix])
    }

    // fix all $refs to their new locations (and potentially new names)
    options.refmap = {};
    common.recurse(openapi, { payload: { options: options } }, fixupRefs);
    dedupeRefs(openapi,options);

    for (let p in openapi.components.parameters) {
        let sname = common.sanitise(p);
        if (p != sname) {
            if (openapi.components.parameters[sname]) {
                throwError('Duplicate sanitised parameter name ' + sname, options);
            }
            openapi.components.parameters[sname] = openapi.components.parameters[p];
            delete openapi.components.parameters[p];
        }
        let param = openapi.components.parameters[sname];
        processParameter(param, null, null, sname, openapi, options);
    }

    for (let r in openapi.components.responses) {
        let sname = common.sanitise(r);
        if (r != sname) {
            if (openapi.components.responses[sname]) {
                throwError('Duplicate sanitised response name ' + sname, options);
            }
            openapi.components.responses[sname] = openapi.components.responses[r];
            delete openapi.components.responses[r];
        }
        var response = openapi.components.responses[sname];
        processResponse(response, sname, null, openapi, options);
        if (response.headers) {
            for (let h in response.headers) {
                if (h.toLowerCase() === 'status code') {
                    if (options.patch) {
                        delete response.headers[h];
                    }
                    else {
                        throwError('(Patchable) "Status Code" is not a valid header', options);
                    }
                }
                else {
                    processHeader(response.headers[h], options);
                }
            }
        }
    }

    for (let r in openapi.components.requestBodies) { // converted ones
        let rb = openapi.components.requestBodies[r];
        let rbStr = JSON.stringify(rb);
        let rbHash = common.hash(rbStr);
        let entry = {};
        entry.name = r;
        entry.body = rb;
        entry.refs = [];
        requestBodyCache[rbHash] = entry;
    }

    processPaths(openapi.paths, 'paths', options, requestBodyCache, openapi);
    if (openapi["x-ms-paths"]) {
        processPaths(openapi["x-ms-paths"], 'x-ms-paths', options, requestBodyCache, openapi);
    }

    if (!options.debug) {
        for (let p in openapi.components.parameters) {
            let param = openapi.components.parameters[p];
            if (param["x-s2o-delete"]) {
                delete openapi.components.parameters[p];
            }
        }
    }

    if (options.debug) {
        openapi["x-s2o-consumes"] = openapi.consumes || [];
        openapi["x-s2o-produces"] = openapi.produces || [];
    }
    delete openapi.consumes;
    delete openapi.produces;
    delete openapi.schemes;

    var rbNamesGenerated = [];

    openapi.components.requestBodies = {}; // for now as we've dereffed them

    var counter = 1;
    for (let e in requestBodyCache) {
        let entry = requestBodyCache[e];
        if (entry.refs.length > 1) {
            // create a shared requestBody
            var suffix = '';
            if (!entry.name) {
                entry.name = 'requestBody';
                // @ts-ignore
                suffix = counter++;
            }
            while (rbNamesGenerated.indexOf(entry.name + suffix) >= 0) {
                // @ts-ignore - this can happen if descriptions are not exactly the same (e.g. bitbucket)
                suffix = (suffix ? ++suffix : 2);
            }
            entry.name = entry.name + suffix;
            rbNamesGenerated.push(entry.name);
            openapi.components.requestBodies[entry.name] = common.clone(entry.body);
            for (let r in entry.refs) {
                var ref = {};
                ref.$ref = '#/components/requestBodies/' + entry.name;
                jptr.jptr(openapi,entry.refs[r],ref);
            }
        }
    }

    if (openapi.components.responses && Object.keys(openapi.components.responses).length === 0) {
        delete openapi.components.responses;
    }
    if (openapi.components.parameters && Object.keys(openapi.components.parameters).length === 0) {
        delete openapi.components.parameters;
    }
    if (openapi.components.examples && Object.keys(openapi.components.examples).length === 0) {
        delete openapi.components.examples;
    }
    if (openapi.components.requestBodies && Object.keys(openapi.components.requestBodies).length === 0) {
        delete openapi.components.requestBodies;
    }
    if (openapi.components.securitySchemes && Object.keys(openapi.components.securitySchemes).length === 0) {
        delete openapi.components.securitySchemes;
    }
    if (openapi.components.headers && Object.keys(openapi.components.headers).length === 0) {
        delete openapi.components.headers;
    }
    if (openapi.components.schemas && Object.keys(openapi.components.schemas).length === 0) {
        delete openapi.components.schemas;
    }
    if (openapi.components && Object.keys(openapi.components).length === 0) {
        delete openapi.components;
    }

    return openapi;
}

function extractServerParameters(server) {
    server.url = server.url.split('{{').join('{');
    server.url = server.url.split('}}').join('}');
    server.url.replace(/\{(.+?)\}/g, function (match, group1) { // TODO extend to :parameters (not port)?
        if (!server.variables) {
            server.variables = {};
        }
        server.variables[group1] = { default: 'unknown' };
    });
}

function findExternalRefs(master,options,actions) {
    common.recurse(master, null, function (obj, key, state) {
        if (common.isRef(obj,key)) {
            if (!obj[key].startsWith('#')) {
                actions.push(common.resolveExternal(master, obj[key], options, function (data, source) {
                    let external = {};
                    external.context = state.path;
                    external.$ref = obj[key];
                    external.original = common.clone(data);
                    external.updated = data;
                    external.source = source;
                    options.externals.push(external);
                    let localOptions = Object.assign({},options,{source:source});
                    findExternalRefs(data,localOptions,actions);
                    if (options.patch && obj.description && !data.description) {
                        data.description = obj.description;
                    }
                    state.parent[state.pkey] = data;
                }));
            }
        }
    });
}

function fixInfo(openapi, options, reject) {
    if (!openapi.info) {
        if (options.patch) {
            openapi.info = { version: '', title: '' };
        }
        else {
            return reject(new Error('(Patchable) info object is mandatory'));
        }
    }
    if ((typeof openapi.info.title === 'undefined') || (openapi.info.title === null)) {
        if (options.patch) {
            openapi.info.title = '';
        }
        else {
            return reject(new Error('(Patchable) info.title cannot be null'));
        }
    }
    if ((typeof openapi.info.version === 'undefined') || (openapi.info.version === null)) {
        if (options.patch) {
            openapi.info.version = '';
        }
        else {
            return reject(new Error('(Patchable) info.version cannot be null'));
        }
    }
    if (typeof openapi.info.version !== 'string') {
        if (options.patch) {
            openapi.info.version = openapi.info.version.toString();
        }
        else {
            return reject(new Error('(Patchable) info.version cannot be null'));
        }
    }
    if (typeof openapi.info.logo !== 'undefined') {
        if (options.patch) {
            openapi.info['x-logo'] = openapi.info.logo;
            delete openapi.info.logo;
        }
        else return reject(new Error('(Patchable) info should not have logo property'));
    }
    if (typeof openapi.info.termsOfService !== 'undefined') {
        if (openapi.info.termsOfService === null) {
            if (options.patch) {
                openapi.info.termsOfService = '';
            }
            else {
                return reject(new Error('(Patchable) info.termsOfService cannot be null'));
            }
        }
        if (url.URL && options.whatwg) {
            try {
                url.URL.parse(openapi.info.termsOfService);
            }
            catch (ex) {
                if (options.patch) {
                    delete openapi.info.termsOfService;
                }
                else return reject(new Error('(Patchable) info.termsOfService must be a URL'));
            }
        }
    }
}

function fixPaths(openapi, options, reject) {
    if (!openapi.paths) {
        if (options.patch) {
            openapi.paths = {};
        }
        else {
            return reject(new Error('(Patchable) paths object is mandatory'));
        }
    }
}

function convertObj(swagger, options, callback) {
    return maybe(callback, new Promise(function (resolve, reject) {
        options.externals = [];
        options.promise = {};
        options.promise.resolve = resolve;
        options.promise.reject = reject;
        if (!options.cache) options.cache = {};
        if (swagger.openapi && (typeof swagger.openapi === 'string') && swagger.openapi.startsWith('3.')) {
            options.openapi = common.clone(swagger);
            fixInfo(options.openapi, options, reject);
            fixPaths(options.openapi, options, reject);
            let actions = [];
            if (options.resolve) {
                findExternalRefs(options.openapi, options, actions);
            }

            co(function* () {
                // resolve multiple promises in parallel
                for (let action of actions) {
                    yield action; // because we can mutate the array
                }
                if (options.direct) {
                    resolve(options.openapi);
                }
                else {
                    resolve(options);
                }
            })
            .catch(function (err) {
                reject(err);
            });
            return; // we should have resolved or rejected by now
        }

        if ((!swagger.swagger) || (swagger.swagger != "2.0")) {
            return reject(new Error('Unsupported swagger/OpenAPI version: ' + (swagger.openapi ? swagger.openapi : swagger.swagger)));
        }

        var openapi = options.openapi = {};
        openapi.openapi = targetVersion; // semver

        if (options.origin) {
            if (!openapi["x-origin"]) {
                openapi["x-origin"] = [];
            }
            let origin = {};
            origin.url = options.origin;
            origin.format = 'swagger';
            origin.version = swagger.swagger;
            origin.converter = {};
            origin.converter.url = 'https://github.com/mermade/swagger2openapi';
            origin.converter.version = common.getVersion();
            openapi["x-origin"].push(origin);
        }

        // we want the new and existing properties to appear in a sensible order. Not guaranteed
        openapi = Object.assign(openapi, common.clone(swagger));
        delete openapi.swagger;

        if (swagger.host) {
            for (let s of swagger.schemes || ['']) {
                let server = {};
                server.url = (s ? s+':' : '') + '//' + swagger.host + (swagger.basePath ? swagger.basePath : '/');
                extractServerParameters(server);
                if (!openapi.servers) openapi.servers = [];
                openapi.servers.push(server);
            }
        }
        else if (swagger.basePath) {
            let server = {};
            server.url = swagger.basePath;
            extractServerParameters(server);
            if (!openapi.servers) openapi.servers = [];
            openapi.servers.push(server);
        }
        delete openapi.host;
        delete openapi.basePath;

        if (openapi['x-servers'] && Array.isArray(openapi['x-servers'])) {
            openapi.servers = openapi['x-servers'];
            delete openapi['x-servers'];
        }

        // TODO APIMatic extensions (x-server-configuration) ?

        if (swagger['x-ms-parameterized-host']) {
            let xMsPHost = swagger['x-ms-parameterized-host'];
            let server = {};
            server.url = xMsPHost.hostTemplate;
            server.variables = {};
            for (let msp in xMsPHost.parameters) {
                let param = xMsPHost.parameters[msp];
                if (param.$ref) {
                    param = common.resolveInternal(openapi, param.$ref);
                }
                if (!msp.startsWith('x-')) {
                    delete param.required; // all true
                    delete param.type; // all strings
                    delete param.in; // all 'host'
                    if (typeof param.default === 'undefined') {
                        if (param.enum) {
                            param.default = param.enum[0];
                        }
                        else {
                            param.default = '';
                        }
                    }
                    server.variables[param.name] = param;
                    delete param.name;
                }
            }
            if (!openapi.servers) openapi.servers = [];
            openapi.servers.push(server);
            delete openapi['x-ms-parameterized-host'];
        }

        fixInfo(openapi, options, reject);
        fixPaths(openapi, options, reject);

        openapi.components = {};
        if (openapi['x-callbacks']) {
            openapi.components.callbacks = openapi['x-callbacks'];
            delete openapi['x-callbacks'];
        }
        openapi.components.examples = {};
        openapi.components.headers = {};
        if (openapi['x-links']) {
            openapi.components.links = openapi['x-links'];
            delete openapi['x-links'];
        }
        openapi.components.parameters = openapi.parameters || {};
        openapi.components.responses = openapi.responses || {};
        openapi.components.requestBodies = {};
        openapi.components.securitySchemes = openapi.securityDefinitions || {};
        openapi.components.schemas = openapi.definitions || {};
        delete openapi.definitions;
        delete openapi.responses;
        delete openapi.parameters;
        delete openapi.securityDefinitions;

        let actions = [];
        if (options.resolve) {
            findExternalRefs(openapi, options, actions);
        }

        co(function* () {
            // resolve multiple promises in parallel
            for (let action of actions) {
                yield action; // because we can mutate the array
            }
            main(openapi, options);
            if (options.direct) {
                return resolve(options.openapi);
            }
            else {
                return resolve(options);
            }
        })
        .catch(function (err) {
            reject(err);
        });
    }));
}

function convertStr(str, options, callback) {
    return maybe(callback, new Promise(function (resolve, reject) {
        let obj = null;
        try {
            obj = JSON.parse(str);
        }
        catch (ex) {
            try {
                obj = yaml.safeLoad(str, { json: true });
                options.sourceYaml = true;
            }
            catch (ex) { }
        }
        if (obj) {
            options.original = obj;
            convertObj(obj, options)
            .then(options => resolve(options))
            .catch(ex => reject(ex));
        }
        else {
            reject(new Error('Could not parse string'));
        }
    }));
}

function convertUrl(url, options, callback) {
    return maybe(callback, new Promise(function (resolve, reject) {
        if (!options.origin) {
            options.origin = url;
        }
        if (options.verbose) {
            console.log('GET ' + url);
        }
        fetch(url, {agent:options.agent}).then(function (res) {
            if (res.status !== 200) throw new Error(`Received status code ${res.status}`);
            return res.text();
        }).then(function (body) {
            convertStr(body, options)
            .then(options => resolve(options))
            .catch(ex => reject(ex));
        }).catch(function (err) {
            reject(err);
        });
    }));
}

function convertFile(filename, options, callback) {
    return maybe(callback, new Promise(function (resolve, reject) {
        fs.readFile(filename, options.encoding || 'utf8', function (err, s) {
            if (err) {
                reject(err);
            }
            else {
                options.sourceFile = filename;
                convertStr(s, options)
                .then(options => resolve(options))
                .catch(ex => reject(ex));
            }
        });
    }));
}

function convertStream(readable, options, callback) {
    return maybe(callback, new Promise(function (resolve, reject) {
        let data = '';
        readable.on('data', function (chunk) {
            data += chunk;
        })
        .on('end', function () {
            convertStr(data, options)
            .then(options => resolve(options))
            .catch(ex => reject(ex));
        });
    }));
}

module.exports = {
    targetVersion: targetVersion,
    convert: convertObj,
    convertObj: convertObj,
    convertUrl: convertUrl,
    convertStr: convertStr,
    convertFile: convertFile,
    convertStream: convertStream
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("json-schema-ref-parser");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(1);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(20);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);

// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(6);

// CONCATENATED MODULE: ./src/theme.ts

var theme_defaultTheme = {
    spacingUnit: 20,
    breakpoints: {
        small: '50rem',
        medium: '85rem',
        large: '105rem'
    },
    colors: {
        main: '#32329f',
        success: '#00aa13',
        redirect: '#ffa500',
        error: '#e53935',
        info: '#87ceeb',
        text: '#263238',
        warning: '#f1c400',
        http: {
            get: '#6bbd5b',
            post: '#248fb2',
            put: '#9b708b',
            options: '#d3ca12',
            patch: '#e09d43',
            delete: '#e27a7a',
            basic: '#999',
            link: '#31bbb6'
        }
    },
    schemaView: {
        linesColor: function (theme) { return Object(external_polished_["lighten"])(0.25, Object(external_polished_["desaturate"])(0.35, theme.colors.main)); },
        defaultDetailsWidth: '75%',
        typeNameColor: function (theme) { return Object(external_polished_["transparentize"])(0.2, theme.colors.text); },
        typeTitleColor: function (theme) { return theme.schemaView.typeNameColor; },
        requireLabelColor: function (theme) { return theme.colors.error; }
    },
    baseFont: {
        size: '14px',
        lineHeight: '1.5',
        weight: '300',
        family: 'Roboto, sans-serif',
        smoothing: 'antialiased',
        optimizeSpeed: true
    },
    headingsFont: {
        family: 'Montserrat, sans-serif'
    },
    code: {
        fontSize: '13px',
        fontFamily: 'Courier, monospace'
    },
    links: {
        color: function (_a) {
            var colors = _a.colors;
            return colors.main;
        },
        visited: function (_a) {
            var colors = _a.colors;
            return colors.main;
        },
        hover: function (_a) {
            var colors = _a.colors;
            return Object(external_polished_["lighten"])(0.2, colors.main);
        }
    },
    menu: {
        width: '260px',
        backgroundColor: '#fafafa'
    },
    logo: {
        maxHeight: function (_a) {
            var menu = _a.menu;
            return menu.width;
        },
        maxWidth: function (_a) {
            var menu = _a.menu;
            return menu.width;
        }
    },
    rightPanel: {
        backgroundColor: '#263238',
        width: '40%'
    }
};
/* harmony default export */ var src_theme = (theme_defaultTheme);
function theme_resolveTheme(theme) {
    var resolvedValues = {};
    var counter = 0;
    var setProxy = function (obj, path) {
        Object.keys(obj).forEach(function (k) {
            var currentPath = (path ? path + '.' : '') + k;
            var val = obj[k];
            if (typeof val === 'function') {
                Object.defineProperty(obj, k, {
                    get: function () {
                        if (!resolvedValues[currentPath]) {
                            counter++;
                            if (counter > 1000) {
                                throw new Error("Theme probably contains cirucal dependency at " + currentPath + ": " + val.toString());
                            }
                            resolvedValues[currentPath] = val(theme);
                        }
                        return resolvedValues[currentPath];
                    },
                    enumerable: true
                });
            }
            else if (typeof val === 'object') {
                setProxy(val, currentPath);
            }
        });
    };
    setProxy(theme, '');
    return JSON.parse(JSON.stringify(theme));
}

// EXTERNAL MODULE: ./src/utils/dom.ts
var dom = __webpack_require__(11);

// EXTERNAL MODULE: ./src/utils/helpers.ts
var helpers = __webpack_require__(13);

// CONCATENATED MODULE: ./src/services/RedocNormalizedOptions.ts



function RedocNormalizedOptions_argValueToBoolean(val) {
    if (val === undefined) {
        return false;
    }
    if (typeof val === 'string') {
        return true;
    }
    return val;
}
var RedocNormalizedOptions_RedocNormalizedOptions = /** @class */ (function () {
    function RedocNormalizedOptions(raw) {
        this.theme = theme_resolveTheme(Object(helpers["g" /* mergeObjects */])({}, src_theme, raw.theme || {}));
        this.scrollYOffset = RedocNormalizedOptions.normalizeScrollYOffset(raw.scrollYOffset);
        this.hideHostname = RedocNormalizedOptions.normalizeHideHostname(raw.hideHostname);
        this.expandResponses = RedocNormalizedOptions.normalizeExpandResponses(raw.expandResponses);
        this.requiredPropsFirst = RedocNormalizedOptions_argValueToBoolean(raw.requiredPropsFirst);
        this.noAutoAuth = RedocNormalizedOptions_argValueToBoolean(raw.noAutoAuth);
        this.nativeScrollbars = RedocNormalizedOptions_argValueToBoolean(raw.nativeScrollbars);
        this.pathInMiddlePanel = RedocNormalizedOptions_argValueToBoolean(raw.pathInMiddlePanel);
        this.untrustedSpec = RedocNormalizedOptions_argValueToBoolean(raw.untrustedSpec);
        this.hideDownloadButton = RedocNormalizedOptions_argValueToBoolean(raw.hideDownloadButton);
    }
    RedocNormalizedOptions.normalizeExpandResponses = function (value) {
        if (value === 'all') {
            return 'all';
        }
        if (typeof value === 'string') {
            var res_1 = {};
            value.split(',').forEach(function (code) {
                res_1[code.trim()] = true;
            });
            return res_1;
        }
        else if (value !== undefined) {
            console.warn("expandResponses must be a string but received value \"" + value + "\" of type " + typeof value);
        }
        return {};
    };
    RedocNormalizedOptions.normalizeHideHostname = function (value) {
        return !!value;
    };
    RedocNormalizedOptions.normalizeScrollYOffset = function (value) {
        // just number is not valid selector and leads to crash so checking if isNumeric here
        if (typeof value === 'string' && !Object(helpers["d" /* isNumeric */])(value)) {
            var el = Object(dom["d" /* querySelector */])(value);
            if (!el) {
                console.warn('scrollYOffset value is a selector to non-existing element. Using offset 0 by default');
            }
            var bottom_1 = el && el.getBoundingClientRect().bottom || 0;
            return function () { return bottom_1; };
        }
        else if (typeof value === 'number' || Object(helpers["d" /* isNumeric */])(value)) {
            return function () { return typeof value === 'number' ? value : parseFloat(value); };
        }
        else if (typeof value === 'function') {
            return function () {
                var res = value();
                if (typeof res !== 'number') {
                    console.warn("scrollYOffset should return number but returned value \"" + res + "\" of type " + typeof res);
                }
                return res;
            };
        }
        else if (value !== undefined) {
            console.warn('Wrong value for scrollYOffset ReDoc option: should be string, number or function');
        }
        return function () { return 0; };
    };
    return RedocNormalizedOptions;
}());


// EXTERNAL MODULE: ./src/styled-components.ts
var styled_components = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/ErrorBoundary.tsx



var ErrorBoundary_ErrorWrapper = styled_components["c" /* default */].div(["padding:20px;color:red;"]);
var ErrorBoundary_ErrorBoundary = /** @class */ (function (_super) {
    external_tslib_["__extends"](ErrorBoundary, _super);
    function ErrorBoundary(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            error: undefined
        };
        return _this;
    }
    ErrorBoundary.prototype.componentDidCatch = function (error) {
        this.setState({
            error: error
        });
        return false;
    };
    ErrorBoundary.prototype.render = function () {
        if (this.state.error) {
            return external_react_["createElement"](ErrorBoundary_ErrorWrapper, null,
                external_react_["createElement"]("h1", null, "Something went wrong..."),
                external_react_["createElement"]("small", null,
                    " ",
                    this.state.error.message,
                    " "),
                external_react_["createElement"]("p", null,
                    external_react_["createElement"]("details", null,
                        external_react_["createElement"]("summary", null, "Stack trace"),
                        external_react_["createElement"]("pre", null, this.state.error.stack))),
                external_react_["createElement"]("small", null,
                    " ReDoc Version: ",
                    "2.0.0-alpha.18"),
                " ",
                external_react_["createElement"]("br", null),
                external_react_["createElement"]("small", null,
                    " Commit: ",
                    "1aa7d5d"));
        }
        return external_react_["Children"].only(this.props.children);
    };
    return ErrorBoundary;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/Loading/Spinner.svg.tsx


var Spinner_svg_Spinner = function (props) { return external_react_["createElement"]("svg", { className: props.className, version: "1.1", width: "512", height: "512", viewBox: "0 0 512 512" },
    external_react_["createElement"]("path", { d: "M275.682 147.999c0 10.864-8.837 19.661-19.682 19.661v0c-10.875 0-19.681-8.796-19.681-19.661v-96.635c0-10.885 8.806-19.661 19.681-19.661v0c10.844 0 19.682 8.776 19.682 19.661v96.635z" }),
    external_react_["createElement"]("path", { d: "M275.682 460.615c0 10.865-8.837 19.682-19.682 19.682v0c-10.875 0-19.681-8.817-19.681-19.682v-96.604c0-10.885 8.806-19.681 19.681-19.681v0c10.844 0 19.682 8.796 19.682 19.682v96.604z" }),
    external_react_["createElement"]("path", { d: "M147.978 236.339c10.885 0 19.681 8.755 19.681 19.641v0c0 10.885-8.796 19.702-19.681 19.702h-96.624c-10.864 0-19.661-8.817-19.661-19.702v0c0-10.885 8.796-19.641 19.661-19.641h96.624z" }),
    external_react_["createElement"]("path", { d: "M460.615 236.339c10.865 0 19.682 8.755 19.682 19.641v0c0 10.885-8.817 19.702-19.682 19.702h-96.584c-10.885 0-19.722-8.817-19.722-19.702v0c0-10.885 8.837-19.641 19.722-19.641h96.584z" }),
    external_react_["createElement"]("path", { d: "M193.546 165.703c7.69 7.66 7.68 20.142 0 27.822v0c-7.701 7.701-20.162 7.701-27.853 0.020l-68.311-68.322c-7.68-7.701-7.68-20.142 0-27.863v0c7.68-7.68 20.121-7.68 27.822 0l68.342 68.342z" }),
    external_react_["createElement"]("path", { d: "M414.597 386.775c7.7 7.68 7.7 20.163 0.021 27.863v0c-7.7 7.659-20.142 7.659-27.843-0.062l-68.311-68.26c-7.68-7.7-7.68-20.204 0-27.863v0c7.68-7.7 20.163-7.7 27.842 0l68.291 68.322z" }),
    external_react_["createElement"]("path", { d: "M165.694 318.464c7.69-7.7 20.153-7.7 27.853 0v0c7.68 7.659 7.69 20.163 0 27.863l-68.342 68.322c-7.67 7.659-20.142 7.659-27.822-0.062v0c-7.68-7.68-7.68-20.122 0-27.801l68.311-68.322z" }),
    external_react_["createElement"]("path", { d: "M386.775 97.362c7.7-7.68 20.142-7.68 27.822 0v0c7.7 7.68 7.7 20.183 0.021 27.863l-68.322 68.311c-7.68 7.68-20.163 7.68-27.843-0.020v0c-7.68-7.68-7.68-20.162 0-27.822l68.322-68.332z" })); };
var Spinner_svg_rotate = Object(styled_components["e" /* keyframes */])(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]);
var Loading_Spinner_svg_Spinner = Object(styled_components["c" /* default */])(Spinner_svg_Spinner)(["animation:2s ", " linear infinite;width:50px;height:50px;content:'';display:inline-block;margin-left:-25px;path{fill:", ";}"], Spinner_svg_rotate, function (props) { return props.color; });

// CONCATENATED MODULE: ./src/components/Loading/Loading.tsx




var Loading_LoadingMessage = Object(styled_components["g" /* withProps */])(styled_components["c" /* default */].div)(Loading_templateObject_1 || (Loading_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n  font-family: helvetica, sans;\n  width: 100%;\n  text-align: center;\n  font-size: 25px;\n  margin: 30px 0 20px 0;\n  color: ", ";\n"], ["\n  font-family: helvetica, sans;\n  width: 100%;\n  text-align: center;\n  font-size: 25px;\n  margin: 30px 0 20px 0;\n  color: ", ";\n"])), function (props) { return props.color; });
var Loading_Loading = /** @class */ (function (_super) {
    external_tslib_["__extends"](Loading, _super);
    function Loading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Loading.prototype.render = function () {
        return external_react_["createElement"]("div", { style: {
                textAlign: 'center'
            } },
            external_react_["createElement"](Loading_LoadingMessage, { color: this.props.color }, "Loading ..."),
            external_react_["createElement"](Loading_Spinner_svg_Spinner, { color: this.props.color }));
    };
    return Loading;
}(external_react_["PureComponent"]));

var Loading_templateObject_1;

// EXTERNAL MODULE: external "mobx"
var external_mobx_ = __webpack_require__(4);

// EXTERNAL MODULE: ./src/utils/loadAndBundleSpec.ts
var loadAndBundleSpec = __webpack_require__(17);

// EXTERNAL MODULE: external "decko"
var external_decko_ = __webpack_require__(14);

// EXTERNAL MODULE: external "eventemitter3"
var external_eventemitter3_ = __webpack_require__(19);

// EXTERNAL MODULE: ./src/utils/index.ts + 3 modules
var utils = __webpack_require__(3);

// CONCATENATED MODULE: ./src/services/HistoryService.ts




var HistoryService_EVENT = 'hashchange';
function HistoryService_isSameHash(a, b) {
    return a === b || '#' + a === b || a === '#' + b;
}
var HistoryService_IntHistoryService = /** @class */ (function () {
    function IntHistoryService() {
        var _this = this;
        this.causedHashChange = false;
        this.emit = function () {
            if (_this.causedHashChange) {
                _this.causedHashChange = false;
                return;
            }
            _this._emiter.emit(HistoryService_EVENT, _this.hash);
        };
        this._emiter = new external_eventemitter3_["EventEmitter"]();
        this.bind();
    }
    Object.defineProperty(IntHistoryService.prototype, "hash", {
        get: function () {
            return utils["a" /* IS_BROWSER */] ? window.location.hash : '';
        },
        enumerable: true,
        configurable: true
    });
    IntHistoryService.prototype.subscribe = function (cb) {
        var emmiter = this._emiter.addListener(HistoryService_EVENT, cb);
        return function () { return emmiter.removeListener(HistoryService_EVENT, cb); };
    };
    IntHistoryService.prototype.bind = function () {
        if (utils["a" /* IS_BROWSER */]) {
            window.addEventListener('hashchange', this.emit, false);
        }
    };
    IntHistoryService.prototype.dispose = function () {
        if (utils["a" /* IS_BROWSER */]) {
            window.removeEventListener('hashchange', this.emit);
        }
        this.causedHashChange = false;
    };
    IntHistoryService.prototype.update = function (hash, rewriteHistory) {
        if (rewriteHistory === void 0) { rewriteHistory = false; }
        if (hash == null || HistoryService_isSameHash(hash, this.hash)) {
            return;
        }
        if (rewriteHistory) {
            if (utils["a" /* IS_BROWSER */]) {
                window.history.replaceState(null, '', window.location.href.split('#')[0] + '#' + hash);
            }
            return;
        }
        this.causedHashChange = true;
        if (utils["a" /* IS_BROWSER */]) {
            window.location.hash = hash;
        }
    };
    external_tslib_["__decorate"]([
        external_decko_["bind"],
        external_decko_["debounce"]
    ], IntHistoryService.prototype, "update", null);
    return IntHistoryService;
}());
var HistoryService_HistoryService = new HistoryService_IntHistoryService();
if (false) {}

// EXTERNAL MODULE: external "mark.js"
var external_mark_js_ = __webpack_require__(27);

// CONCATENATED MODULE: ./src/services/MarkerService.ts

var MarkerService_MarkerService = /** @class */ (function () {
    function MarkerService() {
        this.map = new Map();
        this.prevTerm = '';
    }
    MarkerService.prototype.add = function (el) {
        this.map.set(el, new external_mark_js_(el));
    };
    MarkerService.prototype.delete = function (el) {
        this.map.delete(el);
    };
    MarkerService.prototype.addOnly = function (elements) {
        var _this = this;
        this.map.forEach(function (inst, elem) {
            if (elements.indexOf(elem) === -1) {
                inst.unmark();
                _this.map.delete(elem);
            }
        });
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var el = elements_1[_i];
            if (!this.map.has(el)) {
                this.map.set(el, new external_mark_js_(el));
            }
        }
    };
    MarkerService.prototype.clearAll = function () {
        this.unmark();
        this.map.clear();
    };
    MarkerService.prototype.mark = function (term) {
        var _this = this;
        if (!term && !this.prevTerm) {
            return;
        }
        this.map.forEach(function (val) {
            val.unmark();
            val.mark(term || _this.prevTerm);
        });
        this.prevTerm = term || this.prevTerm;
    };
    MarkerService.prototype.unmark = function () {
        this.map.forEach(function (val) { return val.unmark(); });
        this.prevTerm = '';
    };
    return MarkerService;
}());


// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__(15);

// EXTERNAL MODULE: external "slugify"
var external_slugify_ = __webpack_require__(18);
var external_slugify_default = /*#__PURE__*/__webpack_require__.n(external_slugify_);

// CONCATENATED MODULE: ./src/services/MarkdownRenderer.ts





var MarkdownRenderer_renderer = new external_marked_["Renderer"]();
external_marked_["setOptions"]({
    renderer: MarkdownRenderer_renderer,
    highlight: function (str, lang) {
        return Object(utils["m" /* highlight */])(str, lang);
    }
});
var MarkdownRenderer_COMPONENT_REGEXP = '^\\s*<!-- ReDoc-Inject:\\s+?{component}\\s+?-->\\s*$';
function MarkdownRenderer_buildComponentComment(name) {
    return "<!-- ReDoc-Inject: <" + name + "> -->";
}
var MarkdownRenderer_MarkdownRenderer = /** @class */ (function () {
    function MarkdownRenderer() {
        var _this = this;
        this.headings = [];
        this.headingRule = function (text, level, raw) {
            if (level === 1) {
                _this.currentTopHeading = _this.saveHeading(text);
                var id = _this.currentTopHeading.id;
                return "<a name=\"" + id + "\"></a>" + ("<h" + level + " " + MenuStore_SECTION_ATTR + "=\"" + id + "\" id=\"" + id + "\">") + ("<a class=\"share-link\" href=\"#" + id + "\"></a>" + text + "</h" + level + ">");
            }
            else if (level === 2) {
                var id = _this.saveHeading(text, _this.currentTopHeading && _this.currentTopHeading.items).id;
                return "<a name=\"" + id + "\"></a>" + ("<h" + level + " " + MenuStore_SECTION_ATTR + "=\"" + id + "\" id=\"" + id + "\">") + ("<a class=\"share-link\" href=\"#" + id + "\"></a>" + text + "</h" + level + ">");
            }
            else {
                return _this.originalHeadingRule(text, level, raw);
            }
        };
        this.headingEnhanceRenderer = new external_marked_["Renderer"]();
        this.originalHeadingRule = this.headingEnhanceRenderer.heading.bind(this.headingEnhanceRenderer);
        this.headingEnhanceRenderer.heading = this.headingRule;
    }
    MarkdownRenderer.prototype.saveHeading = function (name, container) {
        if (container === void 0) { container = this.headings; }
        var item = {
            id: 'section' + '/' + external_slugify_default()(name),
            name: name,
            items: []
        };
        container.push(item);
        return item;
    };
    MarkdownRenderer.prototype.flattenHeadings = function (container) {
        if (container === undefined) {
            return [];
        }
        var res = [];
        for (var _i = 0, container_1 = container; _i < container_1.length; _i++) {
            var heading = container_1[_i];
            res.push(heading);
            res.push.apply(res, this.flattenHeadings(heading.items));
        }
        return res;
    };
    MarkdownRenderer.prototype.attachHeadingsDescriptions = function (rawText) {
        var buildRegexp = function (heading) { return new RegExp("<h\\d " + MenuStore_SECTION_ATTR + "=\"" + heading.id + "\" id=\"" + heading.id + "\">"); };
        var flatHeadings = this.flattenHeadings(this.headings);
        if (flatHeadings.length < 1) {
            return;
        }
        var prevHeading = flatHeadings[0];
        var prevPos = rawText.search(buildRegexp(prevHeading));
        for (var i = 1; i < flatHeadings.length; i++) {
            var heading = flatHeadings[i];
            var currentPos = rawText.substr(prevPos + 1).search(buildRegexp(heading)) + prevPos + 1;
            prevHeading.description = Object(utils["n" /* html2Str */])(rawText.substring(prevPos, currentPos));
            prevHeading = heading;
            prevPos = currentPos;
        }
        prevHeading.description = Object(utils["n" /* html2Str */])(rawText.substring(prevPos));
    };
    MarkdownRenderer.prototype.renderMd = function (rawText, raw) {
        if (raw === void 0) { raw = true; }
        var opts = raw ? undefined : {
            renderer: this.headingEnhanceRenderer
        };
        var res = external_marked_(rawText.toString(), opts);
        return res;
    };
    MarkdownRenderer.prototype.extractHeadings = function (rawText) {
        var text = this.renderMd(rawText, false);
        this.attachHeadingsDescriptions(text);
        var res = this.headings;
        this.headings = [];
        return res;
    };
    MarkdownRenderer.prototype.renderMdWithComponents = function (rawText, components, raw) {
        if (raw === void 0) { raw = true; }
        var componentDefs = [];
        var anyCompRegexp = new RegExp(MarkdownRenderer_COMPONENT_REGEXP.replace('{component}', '(.*?)'), 'gmi');
        var match = anyCompRegexp.exec(rawText);
        while (match) {
            componentDefs.push(match[1]);
            match = anyCompRegexp.exec(rawText);
        }
        var splitCompRegexp = new RegExp(MarkdownRenderer_COMPONENT_REGEXP.replace('{component}', '.*?'), 'mi');
        var htmlParts = rawText.split(splitCompRegexp);
        var res = [];
        for (var i = 0; i < htmlParts.length; i++) {
            var htmlPart = htmlParts[i];
            if (htmlPart) {
                res.push(this.renderMd(htmlPart, raw));
            }
            if (componentDefs[i]) {
                var _a = MarkdownRenderer_parseComponent(componentDefs[i]), componentName = _a.componentName, attrs = _a.attrs;
                if (!componentName) {
                    continue;
                }
                res.push(external_tslib_["__assign"]({}, components[componentName], { attrs: attrs }));
            }
        }
        return res;
    };
    return MarkdownRenderer;
}());

function MarkdownRenderer_parseComponent(htmlTag) {
    var match = /<([\w_-]+).*?>/.exec(htmlTag);
    if (match === null || match.length <= 1) {
        return {
            componentName: undefined,
            attrs: {}
        };
    }
    var componentName = match[1];
    return {
        componentName: componentName,
        attrs: {} // TODO
    };
}

// EXTERNAL MODULE: ./src/services/models/ApiInfo.ts
var models_ApiInfo = __webpack_require__(16);

// EXTERNAL MODULE: ./src/utils/openapi.ts
var openapi = __webpack_require__(7);

// CONCATENATED MODULE: ./src/services/models/SecuritySchemes.ts

var SecuritySchemes_SecuritySchemeModel = /** @class */ (function () {
    function SecuritySchemeModel(parser, id, scheme) {
        var info = parser.deref(scheme);
        this.id = id;
        this.sectionId = openapi["a" /* SECURITY_SCHEMES_SECTION */] + id;
        this.type = info.type;
        this.description = info.description || '';
        if (info.type === 'apiKey') {
            this.apiKey = {
                name: info.name,
                in: info.in
            };
        }
        if (info.type === 'http') {
            this.http = {
                scheme: info.scheme,
                bearerFormat: info.bearerFormat
            };
        }
        if (info.type === 'openIdConnect') {
            this.openId = {
                connectUrl: info.openIdConnectUrl
            };
        }
        if (info.type === 'oauth2' && info.flows) {
            this.flows = info.flows;
        }
    }
    return SecuritySchemeModel;
}());

var SecuritySchemes_SecuritySchemesModel = /** @class */ (function () {
    function SecuritySchemesModel(parser) {
        var schemes = parser.spec.components && parser.spec.components.securitySchemes || {};
        this.schemes = Object.keys(schemes).map(function (name) { return new SecuritySchemes_SecuritySchemeModel(parser, name, schemes[name]); });
    }
    return SecuritySchemesModel;
}());


// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(10);

// EXTERNAL MODULE: ./src/utils/JsonPointer.ts
var JsonPointer = __webpack_require__(12);

// CONCATENATED MODULE: ./src/services/OpenAPIParser.ts







/**
 * Helper class to keep track of visited references to avoid
 * endless recursion because of circular refs
 */
var OpenAPIParser_RefCounter = /** @class */ (function () {
    function RefCounter() {
        this._counter = {};
    }
    RefCounter.prototype.reset = function () {
        this._counter = {};
    };
    RefCounter.prototype.visit = function (ref) {
        this._counter[ref] = this._counter[ref] ? this._counter[ref] + 1 : 1;
    };
    RefCounter.prototype.exit = function (ref) {
        this._counter[ref] = this._counter[ref] && this._counter[ref] - 1;
    };
    RefCounter.prototype.visited = function (ref) {
        return !!this._counter[ref];
    };
    return RefCounter;
}());
/**
 * Loads and keeps spec. Provides raw spec operations
 */
var OpenAPIParser_OpenAPIParser = /** @class */ (function () {
    function OpenAPIParser(spec, specUrl, options) {
        var _this = this;
        this.options = options;
        this._refCounter = new OpenAPIParser_RefCounter();
        /**
         * get spec part by JsonPointer ($ref)
         */
        this.byRef = function (ref) {
            var res;
            if (!_this.spec) {
                return;
            }
            if (ref.charAt(0) !== '#') {
                ref = '#' + ref;
            }
            ref = decodeURIComponent(ref);
            try {
                res = JsonPointer["a" /* JsonPointer */].get(_this.spec, ref);
            }
            catch (e) { // do nothing
            }
            return res || {};
        };
        this.validate(spec);
        this.preprocess(spec);
        this.spec = spec;
        var href = utils["a" /* IS_BROWSER */] ? window.location.href : '';
        if (typeof specUrl === 'string') {
            this.specUrl = Object(external_url_["resolve"])(href, specUrl);
        }
        else {
            this.specUrl = href;
        }
    }
    OpenAPIParser.prototype.validate = function (spec) {
        if (spec.openapi === undefined) {
            throw new Error('Document must be valid OpenAPI 3.0.0 definition');
        }
    };
    OpenAPIParser.prototype.preprocess = function (spec) {
        if (!this.options.noAutoAuth && spec.info && spec.components && spec.components.securitySchemes) {
            // Automatically inject Authentication section with SecurityDefinitions component
            var description = spec.info.description || '';
            var securityRegexp = new RegExp(MarkdownRenderer_COMPONENT_REGEXP.replace('{component}', '<security-definitions>'), 'gmi');
            if (!securityRegexp.test(description)) {
                var comment = MarkdownRenderer_buildComponentComment('security-definitions');
                spec.info.description = Object(utils["e" /* appendToMdHeading */])(description, 'Authentication', comment);
            }
        }
    };
    /**
     * checks if the objectt is OpenAPI reference (containts $ref property)
     */
    OpenAPIParser.prototype.isRef = function (obj) {
        if (!obj) {
            return false;
        }
        return obj.$ref !== undefined && obj.$ref !== null;
    };
    /**
     * resets visited enpoints. should be run after
     */
    OpenAPIParser.prototype.resetVisited = function () {
        if (false) { var k; }
        this._refCounter = new OpenAPIParser_RefCounter();
    };
    OpenAPIParser.prototype.exitRef = function (ref) {
        if (!this.isRef(ref)) {
            return;
        }
        this._refCounter.exit(ref.$ref);
    };
    /**
     * Resolve given reference object or return as is if it is not a reference
     * @param obj object to dereference
     * @param forceCircular whether to dereference even if it is cirular ref
     */
    OpenAPIParser.prototype.deref = function (obj, forceCircular) {
        if (forceCircular === void 0) { forceCircular = false; }
        if (this.isRef(obj)) {
            var resolved = this.byRef(obj.$ref);
            var visited = this._refCounter.visited(obj.$ref);
            this._refCounter.visit(obj.$ref);
            if (visited && !forceCircular) {
                // circular reference detected
                // tslint:disable-next-line
                return Object.assign({}, resolved, {
                    'x-circular-ref': true
                });
            } // deref again in case one more $ref is here
            if (this.isRef(resolved)) {
                var res = this.deref(resolved);
                this.exitRef(resolved);
                return res;
            }
            return resolved;
        }
        return obj;
    };
    /**
     * Merge allOf contsraints.
     * @param schema schema with allOF
     * @param $ref pointer of the schema
     * @param forceCircular whether to dereference children even if it is a cirular ref
     */
    OpenAPIParser.prototype.mergeAllOf = function (schema, $ref, forceCircular) {
        var _this = this;
        if (forceCircular === void 0) { forceCircular = false; }
        if (schema.allOf === undefined) {
            return schema;
        }
        var receiver = external_tslib_["__assign"]({}, schema, { allOf: undefined, parentRefs: [] });
        var allOfSchemas = schema.allOf.map(function (subSchema) {
            var resolved = _this.deref(subSchema, forceCircular);
            var subRef = subSchema.$ref || undefined;
            var subMerged = _this.mergeAllOf(resolved, subRef, forceCircular);
            (_a = receiver.parentRefs).push.apply(_a, (subMerged.parentRefs || []));
            return {
                $ref: subRef,
                schema: subMerged
            };
            var _a;
        });
        for (var _i = 0, allOfSchemas_1 = allOfSchemas; _i < allOfSchemas_1.length; _i++) {
            var _a = allOfSchemas_1[_i], subSchemaRef = _a.$ref, subSchema = _a.schema;
            if (receiver.type !== subSchema.type && receiver.type !== undefined && subSchema.type !== undefined) {
                throw new Error("Uncopatible types in allOf at \"" + $ref + "\"");
            }
            if (subSchema.type !== undefined) {
                receiver.type = subSchema.type;
            }
            if (subSchema.properties !== undefined) {
                receiver.properties = receiver.properties || {};
                for (var prop in subSchema.properties) {
                    if (!receiver.properties[prop]) {
                        receiver.properties[prop] = subSchema.properties[prop];
                    }
                    else {
                        // merge inner properties
                        receiver.properties[prop] = this.mergeAllOf({
                            allOf: [receiver.properties[prop], subSchema.properties[prop]]
                        }, $ref + '/properties/' + prop);
                    }
                }
            }
            if (subSchema.required !== undefined) {
                receiver.required = (receiver.required || []).concat(subSchema.required);
            } // merge rest of constraints
            // TODO: do more intelegent merge
            receiver = external_tslib_["__assign"]({}, subSchema, receiver);
            if (subSchemaRef) {
                receiver.parentRefs.push(subSchemaRef);
                if (receiver.title === undefined && Object(openapi["g" /* isNamedDefinition */])(subSchemaRef)) {
                    receiver.title = JsonPointer["a" /* JsonPointer */].baseName(subSchemaRef);
                }
            }
        } // name of definition or title on top level
        if (schema.title === undefined && Object(openapi["g" /* isNamedDefinition */])($ref)) {
            receiver.title = JsonPointer["a" /* JsonPointer */].baseName($ref);
        }
        return receiver;
    };
    /**
     * Find all derived definitions among #/components/schemas from any of $refs
     * returns map of definition pointer to definition name
     * @param $refs array of references to find derived from
     */
    OpenAPIParser.prototype.findDerived = function ($refs) {
        var res = {};
        var schemas = this.spec.components && this.spec.components.schemas || {};
        for (var defName in schemas) {
            var def = this.deref(schemas[defName]);
            if (def.allOf !== undefined && def.allOf.find(function (obj) { return obj.$ref !== undefined && $refs.indexOf(obj.$ref) > -1; })) {
                res['#/components/schemas/' + defName] = defName;
            }
        }
        return res;
    };
    external_tslib_["__decorate"]([
        external_mobx_["observable"]
    ], OpenAPIParser.prototype, "specUrl", void 0);
    external_tslib_["__decorate"]([
        external_mobx_["observable"].ref
    ], OpenAPIParser.prototype, "spec", void 0);
    return OpenAPIParser;
}());


// CONCATENATED MODULE: ./src/services/SpecStore.ts






/**
 * Store that containts all the specification related information in the form of tree
 */
var SpecStore_SpecStore = /** @class */ (function () {
    function SpecStore(spec, specUrl, options) {
        this.options = options;
        this.parser = new OpenAPIParser_OpenAPIParser(spec, specUrl, options);
    }
    Object.defineProperty(SpecStore.prototype, "info", {
        get: function () {
            return new models_ApiInfo["a" /* ApiInfoModel */](this.parser, this.options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecStore.prototype, "externalDocs", {
        get: function () {
            return this.parser.spec.externalDocs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecStore.prototype, "operationGroups", {
        get: function () {
            return MenuBuilder_MenuBuilder.buildStructure(this.parser, this.options);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpecStore.prototype, "securitySchemes", {
        get: function () {
            var schemes = this.parser.spec.components && this.parser.spec.components.securitySchemes;
            return schemes && new SecuritySchemes_SecuritySchemesModel(this.parser);
        },
        enumerable: true,
        configurable: true
    });
    external_tslib_["__decorate"]([
        external_mobx_["observable"].ref
    ], SpecStore.prototype, "parser", void 0);
    external_tslib_["__decorate"]([
        external_mobx_["computed"]
    ], SpecStore.prototype, "info", null);
    external_tslib_["__decorate"]([
        external_mobx_["computed"]
    ], SpecStore.prototype, "externalDocs", null);
    external_tslib_["__decorate"]([
        external_mobx_["computed"]
    ], SpecStore.prototype, "operationGroups", null);
    external_tslib_["__decorate"]([
        external_mobx_["computed"]
    ], SpecStore.prototype, "securitySchemes", null);
    return SpecStore;
}());


// CONCATENATED MODULE: ./src/services/models/Group.model.ts



/**
 * Operations Group model ready to be used by components
 */
var Group_model_GroupModel = /** @class */ (function () {
    function GroupModel(type, tagOrGroup, parent) {
        this.items = [];
        this.active = false;
        this.id = type + '/' + external_slugify_default()(tagOrGroup.name);
        this.type = type;
        this.name = tagOrGroup['x-displayName'] || tagOrGroup.name;
        this.description = tagOrGroup.description || '';
        this.parent = parent;
        this.externalDocs = tagOrGroup.externalDocs; // groups are active (expanded) by default
        if (this.type === 'group') {
            this.active = true;
        }
    }
    GroupModel.prototype.activate = function () {
        this.active = true;
    };
    GroupModel.prototype.deactivate = function () {
        // disallow deactivating groups
        if (this.type === 'group') {
            return;
        }
        this.active = false;
    };
    external_tslib_["__decorate"]([
        external_mobx_["observable"]
    ], GroupModel.prototype, "active", void 0);
    external_tslib_["__decorate"]([
        external_mobx_["action"]
    ], GroupModel.prototype, "activate", null);
    external_tslib_["__decorate"]([
        external_mobx_["action"]
    ], GroupModel.prototype, "deactivate", null);
    return GroupModel;
}());


// EXTERNAL MODULE: ./node_modules/path-browserify/index.js
var path_browserify = __webpack_require__(23);

// CONCATENATED MODULE: ./src/services/models/SecurityRequirement.ts

var SecurityRequirement_SecurityRequirementModel = /** @class */ (function () {
    function SecurityRequirementModel(requirement, parser) {
        var schemes = parser.spec.components && parser.spec.components.securitySchemes || {};
        this.schemes = Object.keys(requirement || {}).map(function (id) {
            var scheme = parser.deref(schemes[id]);
            var scopes = requirement[id] || [];
            if (!scheme) {
                console.warn("Non existing security scheme referenced: " + id + ". Skipping");
                return undefined;
            }
            return {
                id: id,
                sectionId: openapi["a" /* SECURITY_SCHEMES_SECTION */] + id,
                type: scheme.type,
                scopes: scopes
            };
        }).filter(function (scheme) { return scheme !== undefined; });
    }
    return SecurityRequirementModel;
}());


// CONCATENATED MODULE: ./src/services/models/Schema.ts



 // TODO: refactor this model, maybe use getters instead of copying all the values
var Schema_SchemaModel = /** @class */ (function () {
    /**
     * @param isChild if schema discriminator Child
     * When true forces dereferencing in allOfs even if circular
     */
    function SchemaModel(parser, schemaOrRef, $ref, options, isChild) {
        if (isChild === void 0) { isChild = false; }
        this.options = options;
        this.typePrefix = '';
        this.isCircular = false;
        this.activeOneOf = 0;
        this._$ref = schemaOrRef.$ref || $ref || '';
        this.rawSchema = parser.deref(schemaOrRef);
        this.schema = parser.mergeAllOf(this.rawSchema, this._$ref, isChild);
        this.init(parser, isChild);
        parser.exitRef(schemaOrRef);
        for (var _i = 0, _a = this.schema.parentRefs || []; _i < _a.length; _i++) {
            var parent$ref = _a[_i];
            // exit all the refs visited during allOf traverse
            parser.exitRef({
                $ref: parent$ref
            });
        }
    }
    /**
     * Set specified alternative schema as active
     * @param idx oneOf index
     */
    SchemaModel.prototype.activateOneOf = function (idx) {
        this.activeOneOf = idx;
    };
    SchemaModel.prototype.init = function (parser, isChild) {
        var schema = this.schema;
        this.isCircular = schema['x-circular-ref'];
        this.title = schema.title || Object(utils["r" /* isNamedDefinition */])(this._$ref) && utils["b" /* JsonPointer */].baseName(this._$ref) || '';
        this.description = schema.description || '';
        this.type = schema.type || Object(utils["i" /* detectType */])(schema);
        this.format = schema.format;
        this.nullable = !!schema.nullable;
        this.enum = schema.enum || [];
        this.example = schema.example;
        this.deprecated = !!schema.deprecated;
        this.pattern = schema.pattern;
        this.constraints = Object(utils["o" /* humanizeConstraints */])(schema);
        this.displayType = this.type;
        this.isPrimitive = Object(utils["u" /* isPrimitiveType */])(schema);
        this.default = schema.default;
        this.readOnly = !!schema.readOnly;
        this.writeOnly = !!schema.writeOnly;
        if (this.isCircular) {
            return;
        }
        if (!isChild && schema.discriminator !== undefined) {
            this.initDiscriminator(schema, parser);
            return;
        }
        if (schema.oneOf !== undefined) {
            this.initOneOf(schema.oneOf, parser);
            this.oneOfType = 'One of';
            if (schema.anyOf !== undefined) {
                console.warn("oneOf and anyOf are not supported on the same level. Skipping anyOf at " + this._$ref);
            }
            return;
        }
        if (schema.anyOf !== undefined) {
            this.initOneOf(schema.anyOf, parser);
            this.oneOfType = 'Any of';
            return;
        }
        if (this.type === 'object') {
            this.fields = Schema_buildFields(parser, schema, this._$ref, this.options);
        }
        else if (this.type === 'array' && schema.items) {
            this.items = new SchemaModel(parser, schema.items, this._$ref + '/items', this.options);
            this.displayType = this.items.displayType;
            this.typePrefix = this.items.typePrefix + 'Array of ';
            this.isPrimitive = this.items.isPrimitive;
            if (this.example === undefined && this.items.example !== undefined) {
                this.example = [this.items.example];
            }
            if (this.items.isPrimitive) {
                this.enum = this.items.enum;
            }
        }
    };
    SchemaModel.prototype.initOneOf = function (oneOf, parser) {
        var _this = this;
        this.oneOf = oneOf.map(function (variant, idx) { return new SchemaModel(parser, {
            // merge base schema into each of oneOf's subschemas
            allOf: [variant, external_tslib_["__assign"]({}, _this.schema, { oneOf: undefined, anyOf: undefined })]
        }, _this._$ref + '/oneOf/' + idx, _this.options); });
        this.displayType = this.oneOf.map(function (schema) { return schema.displayType; }).join(' or ');
    };
    SchemaModel.prototype.initDiscriminator = function (schema, parser) {
        var _this = this;
        this.discriminatorProp = schema.discriminator.propertyName;
        var derived = parser.findDerived((schema.parentRefs || []).concat([this._$ref]));
        if (schema.oneOf) {
            for (var _i = 0, _a = schema.oneOf; _i < _a.length; _i++) {
                var variant = _a[_i];
                if (variant.$ref === undefined) {
                    continue;
                }
                var name_1 = utils["b" /* JsonPointer */].dirName(variant.$ref);
                derived[variant.$ref] = name_1;
            }
        }
        var mapping = schema.discriminator.mapping || {};
        for (var name_2 in mapping) {
            derived[mapping[name_2]] = name_2;
        }
        var refs = Object.keys(derived);
        this.oneOf = refs.map(function (ref) {
            var innerSchema = new SchemaModel(parser, parser.byRef(ref), ref, _this.options, true);
            innerSchema.title = derived[ref];
            return innerSchema;
        });
    };
    external_tslib_["__decorate"]([
        external_mobx_["observable"]
    ], SchemaModel.prototype, "activeOneOf", void 0);
    external_tslib_["__decorate"]([
        external_mobx_["action"]
    ], SchemaModel.prototype, "activateOneOf", null);
    return SchemaModel;
}());

function Schema_buildFields(parser, schema, $ref, options) {
    var props = schema.properties || {};
    var additionalProps = schema.additionalProperties;
    var defaults = schema.default || {};
    var fields = Object.keys(props || []).map(function (fieldName) {
        var field = props[fieldName];
        if (!field) {
            console.warn("Field \"" + fieldName + "\" is invalid, skipping.\n Field must be an object but got " + typeof field + " at \"" + $ref + "\"");
            field = {};
        }
        var required = schema.required === undefined ? false : schema.required.indexOf(fieldName) > -1;
        return new Field_FieldModel(parser, {
            name: fieldName,
            required: required,
            schema: external_tslib_["__assign"]({}, field, { default: field.default || defaults[fieldName] })
        }, $ref + '/properties/' + fieldName, options);
    });
    if (options.requiredPropsFirst) {
        Object(utils["D" /* sortByRequired */])(fields, schema.required);
    }
    if (typeof additionalProps === 'object') {
        fields.push(new Field_FieldModel(parser, {
            name: '[property name] *',
            required: false,
            schema: additionalProps
        }, $ref + '/additionalProperties', options));
    }
    return fields;
}

// CONCATENATED MODULE: ./src/services/models/Field.ts



/**
 * Field or Parameter model ready to be used by components
 */
var Field_FieldModel = /** @class */ (function () {
    function FieldModel(parser, infoOrRef, pointer, options) {
        this.expanded = false;
        var info = parser.deref(infoOrRef);
        this.name = infoOrRef.name || info.name;
        this.in = info.in;
        this.required = !!info.required;
        var schemaPointer = (parser.isRef(infoOrRef) ? infoOrRef.$ref : pointer) + '/schema';
        this.schema = new Schema_SchemaModel(parser, info.schema || {}, schemaPointer, options);
        this.description = info.description === undefined ? this.schema.description || '' : info.description;
        this.example = info.example || this.schema.example;
        this.deprecated = info.deprecated === undefined ? !!this.schema.deprecated : info.deprecated;
        parser.exitRef(infoOrRef);
    }
    FieldModel.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    external_tslib_["__decorate"]([
        external_mobx_["observable"]
    ], FieldModel.prototype, "expanded", void 0);
    external_tslib_["__decorate"]([
        external_mobx_["action"]
    ], FieldModel.prototype, "toggle", null);
    return FieldModel;
}());


// EXTERNAL MODULE: external "openapi-sampler"
var external_openapi_sampler_ = __webpack_require__(26);

// CONCATENATED MODULE: ./src/services/models/Example.ts
var ExampleModel = /** @class */ (function () {
    function ExampleModel(parser, infoOrRef) {
        Object.assign(this, parser.deref(infoOrRef));
        parser.exitRef(infoOrRef);
    }
    return ExampleModel;
}());


// CONCATENATED MODULE: ./src/services/models/MediaType.ts




var MediaType_MediaTypeModel = /** @class */ (function () {
    /**
     * @param isRequestType needed to know if skipe RO/RW fields in objects
     */
    function MediaTypeModel(parser, name, isRequestType, info, options) {
        this.name = name;
        this.isRequestType = isRequestType;
        this.schema = info.schema && new Schema_SchemaModel(parser, info.schema, '', options);
        if (info.examples !== undefined) {
            this.examples = Object(utils["y" /* mapValues */])(info.examples, function (example) { return new ExampleModel(parser, example); });
        }
        else if (info.example !== undefined) {
            this.examples = {
                default: new ExampleModel(parser, {
                    value: info.example
                })
            };
        }
        else if (Object(utils["q" /* isJsonLike */])(name)) {
            this.generateExample(parser, info);
        }
    }
    MediaTypeModel.prototype.generateExample = function (parser, info) {
        if (this.schema && this.schema.oneOf) {
            this.examples = {};
            for (var _i = 0, _a = this.schema.oneOf; _i < _a.length; _i++) {
                var subSchema = _a[_i];
                this.examples[subSchema.title] = {
                    value: external_openapi_sampler_["sample"](subSchema.rawSchema, {
                        skipReadOnly: this.isRequestType,
                        skipWriteOnly: !this.isRequestType
                    }, parser.spec)
                };
            }
        }
        else {
            this.examples = {
                default: new ExampleModel(parser, {
                    value: external_openapi_sampler_["sample"](info.schema, {
                        skipReadOnly: this.isRequestType,
                        skipWriteOnly: !this.isRequestType
                    }, parser.spec)
                })
            };
        }
    };
    return MediaTypeModel;
}());


// CONCATENATED MODULE: ./src/services/models/MediaContent.ts



/**
 * MediaContent model ready to be sued by React components
 * Contains multiple MediaTypes and keeps track of the currently active on
 */
var MediaContent_MediaContentModel = /** @class */ (function () {
    /**
     * @param isRequestType needed to know if skipe RO/RW fields in objects
     */
    function MediaContentModel(parser, info, isRequestType, options) {
        this.parser = parser;
        this.isRequestType = isRequestType;
        this.activeMimeIdx = 0;
        this.mediaTypes = Object.keys(info).map(function (name) {
            var mime = info[name]; // reset deref cache just in case something is left there
            parser.resetVisited();
            return new MediaType_MediaTypeModel(parser, name, isRequestType, mime, options);
        });
    }
    /**
     * Set active media type by index
     * @param idx media type index
     */
    MediaContentModel.prototype.activate = function (idx) {
        this.activeMimeIdx = idx;
    };
    Object.defineProperty(MediaContentModel.prototype, "active", {
        get: function () {
            return this.mediaTypes[this.activeMimeIdx];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaContentModel.prototype, "hasSample", {
        get: function () {
            return this.mediaTypes.filter(function (mime) { return !!mime.examples; }).length > 0;
        },
        enumerable: true,
        configurable: true
    });
    external_tslib_["__decorate"]([
        external_mobx_["observable"]
    ], MediaContentModel.prototype, "activeMimeIdx", void 0);
    external_tslib_["__decorate"]([
        external_mobx_["action"]
    ], MediaContentModel.prototype, "activate", null);
    external_tslib_["__decorate"]([
        external_mobx_["computed"]
    ], MediaContentModel.prototype, "active", null);
    return MediaContentModel;
}());


// CONCATENATED MODULE: ./src/services/models/RequestBody.ts

var RequestBody_RequestBodyModel = /** @class */ (function () {
    function RequestBodyModel(parser, infoOrRef, options) {
        var info = parser.deref(infoOrRef);
        this.description = info.description || '';
        this.required = !!info.required;
        parser.exitRef(infoOrRef);
        if (info.content !== undefined) {
            this.content = new MediaContent_MediaContentModel(parser, info.content, true, options);
        }
    }
    return RequestBodyModel;
}());


// CONCATENATED MODULE: ./src/services/models/Response.ts





var Response_ResponseModel = /** @class */ (function () {
    function ResponseModel(parser, code, defaultAsError, infoOrRef, options) {
        this.headers = [];
        this.expanded = options.expandResponses === 'all' || options.expandResponses[code];
        var info = parser.deref(infoOrRef);
        parser.exitRef(infoOrRef);
        this.code = code;
        if (info.content !== undefined) {
            this.content = new MediaContent_MediaContentModel(parser, info.content, false, options);
        }
        this.description = info.description || '';
        this.type = Object(utils["l" /* getStatusCodeType */])(code, defaultAsError);
        var headers = info.headers;
        if (headers !== undefined) {
            this.headers = Object.keys(headers).map(function (name) {
                var header = headers[name];
                return new Field_FieldModel(parser, external_tslib_["__assign"]({}, header, { name: name }), '', options);
            });
        }
    }
    ResponseModel.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    external_tslib_["__decorate"]([
        external_mobx_["observable"]
    ], ResponseModel.prototype, "expanded", void 0);
    external_tslib_["__decorate"]([
        external_mobx_["action"]
    ], ResponseModel.prototype, "toggle", null);
    return ResponseModel;
}());


// CONCATENATED MODULE: ./src/services/models/Operation.ts









/**
 * Operation model ready to be used by components
 */
var Operation_OperationModel = /** @class */ (function () {
    function OperationModel(parser, operationSpec, parent, options) {
        var _this = this;
        this.type = 'operation';
        this.items = [];
        this.ready = true;
        this.active = false; //#endregion
        this.id = operationSpec.operationId !== undefined ? 'operation/' + operationSpec.operationId : this.parent !== undefined ? this.parent.id + operationSpec._$ref : operationSpec._$ref;
        this.name = Object(utils["k" /* getOperationSummary */])(operationSpec);
        this.description = operationSpec.description;
        this.parent = parent;
        this.externalDocs = operationSpec.externalDocs;
        this._$ref = operationSpec._$ref;
        this.deprecated = !!operationSpec.deprecated;
        this.httpVerb = operationSpec.httpVerb;
        this.deprecated = !!operationSpec.deprecated;
        this.operationId = operationSpec.operationId;
        this.requestBody = operationSpec.requestBody && new RequestBody_RequestBodyModel(parser, operationSpec.requestBody, options);
        this.codeSamples = operationSpec['x-code-samples'] || [];
        this.path = utils["b" /* JsonPointer */].baseName(this._$ref, 2);
        this.parameters = operationSpec.pathParameters.concat(operationSpec.parameters || []).map(function (paramOrRef) { return new Field_FieldModel(parser, paramOrRef, _this._$ref, options); });
        if (options.requiredPropsFirst) {
            Object(utils["D" /* sortByRequired */])(this.parameters);
        }
        var hasSuccessResponses = false;
        this.responses = Object.keys(operationSpec.responses || []).filter(function (code) {
            if (parseInt(code, 10) >= 100 && parseInt(code, 10) <= 399) {
                hasSuccessResponses = true;
            }
            return Operation_isNumeric(code) || code === 'default';
        }) // filter out other props (e.g. x-props)
            .map(function (code) {
            return new Response_ResponseModel(parser, code, hasSuccessResponses, operationSpec.responses[code], options);
        });
        this.servers = Operation_normalizeServers(parser.specUrl, operationSpec.servers || parser.spec.servers || []);
        this.security = (operationSpec.security || parser.spec.security || []).map(function (security) { return new SecurityRequirement_SecurityRequirementModel(security, parser); });
    }
    /**
     * set operation as active (used by side menu)
     */
    OperationModel.prototype.activate = function () {
        this.active = true;
    };
    /**
     * set operation as inactive (used by side menu)
     */
    OperationModel.prototype.deactivate = function () {
        this.active = false;
    };
    external_tslib_["__decorate"]([
        external_mobx_["observable"]
    ], OperationModel.prototype, "ready", void 0);
    external_tslib_["__decorate"]([
        external_mobx_["observable"]
    ], OperationModel.prototype, "active", void 0);
    external_tslib_["__decorate"]([
        external_mobx_["action"]
    ], OperationModel.prototype, "activate", null);
    external_tslib_["__decorate"]([
        external_mobx_["action"]
    ], OperationModel.prototype, "deactivate", null);
    return OperationModel;
}());

function Operation_isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function Operation_normalizeServers(specUrl, servers) {
    if (servers.length === 0) {
        return [{
                url: specUrl
            }];
    }
    function normalizeUrl(url) {
        url = Object(utils["p" /* isAbsolutePath */])(url) ? url : Object(path_browserify["join"])(specUrl, url);
        return Object(utils["E" /* stripTrailingSlash */])(url.startsWith('//') ? "" + specProtocol + url : url);
    }
    var specProtocol = Object(external_url_["parse"])(specUrl).protocol;
    return servers.map(function (server) {
        return external_tslib_["__assign"]({}, server, { url: normalizeUrl(server.url), description: server.description || '' });
    });
}

// CONCATENATED MODULE: ./src/services/models/index.ts













// CONCATENATED MODULE: ./src/services/MenuBuilder.ts




var MenuBuilder_GROUP_DEPTH = 0;
var MenuBuilder_MenuBuilder = /** @class */ (function () {
    function MenuBuilder() {
    }
    /**
     * Builds page content structure based on tags
     */
    MenuBuilder.buildStructure = function (parser, options) {
        var spec = parser.spec;
        var items = [];
        var tagsMap = MenuBuilder.getTagsWithOperations(spec);
        items.push.apply(items, MenuBuilder.addMarkdownItems(spec.info.description || ''));
        if (spec['x-tagGroups']) {
            items.push.apply(items, MenuBuilder.getTagGroupsItems(parser, undefined, spec['x-tagGroups'], tagsMap, options));
        }
        else {
            items.push.apply(items, MenuBuilder.getTagsItems(parser, tagsMap, undefined, undefined, options));
        }
        return items;
    };
    /**
     * extracts items from markdown description
     * @param description - markdown source
     */
    MenuBuilder.addMarkdownItems = function (description) {
        var renderer = new MarkdownRenderer_MarkdownRenderer();
        var headings = renderer.extractHeadings(description || '');
        var mapHeadingsDeep = function (parent, items, depth) {
            if (depth === void 0) { depth = 1; }
            return items.map(function (heading) {
                var group = new Group_model_GroupModel('section', heading, parent);
                group.depth = depth;
                if (heading.items) {
                    group.items = mapHeadingsDeep(group, heading.items, depth + 1);
                }
                return group;
            });
        };
        return mapHeadingsDeep(undefined, headings);
    };
    /**
     * Returns array of OperationsGroup items for the tag groups (x-tagGroups vendor extenstion)
     * @param tags value of `x-tagGroups` vendor extension
     */
    MenuBuilder.getTagGroupsItems = function (parser, parent, groups, tags, options) {
        var res = [];
        for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
            var group = groups_1[_i];
            var item = new Group_model_GroupModel('group', group, parent);
            item.depth = MenuBuilder_GROUP_DEPTH;
            item.items = MenuBuilder.getTagsItems(parser, tags, item, group, options);
            res.push(item);
        } // TODO checkAllTagsUsedInGroups
        return res;
    };
    /**
     * Returns array of OperationsGroup items for the tags of the group or for all tags
     * @param tagsMap tags info returned from `getTagsWithOperations`
     * @param parent parent item
     * @param group group which this tag belongs to. if not provided gets all tags
     */
    MenuBuilder.getTagsItems = function (parser, tagsMap, parent, group, options) {
        var tagNames;
        if (group === undefined) {
            tagNames = Object.keys(tagsMap); // all tags
        }
        else {
            tagNames = group.tags;
        }
        var tags = tagNames.map(function (tagName) {
            if (!tagsMap[tagName]) {
                console.warn("Non-existing tag \"" + tagName + "\" is added to the group \"" + group.name + "\"");
                return null;
            }
            tagsMap[tagName].used = true;
            return tagsMap[tagName];
        });
        var res = [];
        for (var _i = 0, tags_1 = tags; _i < tags_1.length; _i++) {
            var tag = tags_1[_i];
            if (!tag) {
                continue;
            }
            var item = new Group_model_GroupModel('tag', tag, parent);
            item.depth = MenuBuilder_GROUP_DEPTH + 1;
            item.items = this.getOperationsItems(parser, item, tag, item.depth + 1, options); // don't put empty tag into content, instead put its operations
            if (tag.name === '') {
                var items = this.getOperationsItems(parser, undefined, tag, item.depth + 1, options);
                res.push.apply(res, items);
                continue;
            }
            res.push(item);
        }
        return res;
    };
    /**
     * Returns array of Operation items for the tag
     * @param parent parent OperationsGroup
     * @param tag tag info returned from `getTagsWithOperations`
     * @param depth items depth
     */
    MenuBuilder.getOperationsItems = function (parser, parent, tag, depth, options) {
        if (tag.operations.length === 0) {
            return [];
        }
        var res = [];
        for (var _i = 0, _a = tag.operations; _i < _a.length; _i++) {
            var operationInfo = _a[_i];
            var operation = new Operation_OperationModel(parser, operationInfo, parent, options);
            operation.depth = depth;
            res.push(operation);
        }
        return res;
    };
    /**
     * collects tags and maps each tag to list of operations belonging to this tag
     */
    MenuBuilder.getTagsWithOperations = function (spec) {
        var tags = {};
        for (var _i = 0, _a = spec.tags || []; _i < _a.length; _i++) {
            var tag = _a[_i];
            tags[tag.name] = external_tslib_["__assign"]({}, tag, { operations: [] });
        }
        var paths = spec.paths;
        for (var _b = 0, _c = Object.keys(paths); _b < _c.length; _b++) {
            var pathName = _c[_b];
            var path = paths[pathName];
            var operations = Object.keys(path).filter(utils["t" /* isOperationName */]);
            for (var _d = 0, operations_1 = operations; _d < operations_1.length; _d++) {
                var operationName = operations_1[_d];
                var operationInfo = path[operationName];
                var operationTags = operationInfo.tags;
                if (!operationTags || !operationTags.length) {
                    // empty tag
                    operationTags = [''];
                }
                var operationPointer = utils["b" /* JsonPointer */].compile(['paths', pathName, operationName]);
                for (var _e = 0, operationTags_1 = operationTags; _e < operationTags_1.length; _e++) {
                    var tagName = operationTags_1[_e];
                    var tag = tags[tagName];
                    if (tag === undefined) {
                        tag = {
                            name: tagName,
                            operations: []
                        };
                        tags[tagName] = tag;
                    }
                    if (tag['x-traitTag']) {
                        continue;
                    }
                    tag.operations.push(external_tslib_["__assign"]({}, operationInfo, { _$ref: operationPointer, httpVerb: operationName, pathParameters: path.parameters || [] }));
                }
            }
        }
        return tags;
    };
    return MenuBuilder;
}());


// CONCATENATED MODULE: ./src/services/MenuStore.ts






var MenuStore_SECTION_ATTR = 'data-section-id';
/**
 * Stores all side-menu related information
 */
var MenuStore_MenuStore = /** @class */ (function () {
    /**
     *
     * @param spec [SpecStore](#SpecStore) which contains page content structure
     * @param _scrollService scroll service instance used by this menu
     */
    function MenuStore(spec, _scrollService) {
        var _this = this;
        this.spec = spec;
        this._scrollService = _scrollService;
        /**
         * active item absolute index (when flattened). -1 means nothing is selected
         */
        this.activeItemIdx = -1;
        /**
         * whether sidebar with menu is opened or not
         */
        this.sideBarOpened = false;
        this.getItemById = function (id) {
            return _this.flatItems.find(function (item) { return item.id === id; });
        };
        this._unsubscribe = _scrollService.subscribe(this.updateOnScroll);
        this._hashUnsubscribe = HistoryService_HistoryService.subscribe(this.updateOnHash);
    }
    /**
     * Statically try update scroll position
     * Used before hydrating from server-side rendered html to scroll page faster
     */
    MenuStore.updateOnHash = function (hash, scroll) {
        if (hash === void 0) { hash = HistoryService_HistoryService.hash; }
        if (!hash) {
            return;
        }
        scroll.scrollIntoViewBySelector("[" + MenuStore_SECTION_ATTR + "=\"" + Object(utils["B" /* normalizeHash */])(hash) + "\"]");
    };
    MenuStore.prototype.toggleSidebar = function () {
        this.sideBarOpened = this.sideBarOpened ? false : true;
    };
    MenuStore.prototype.closeSidebar = function () {
        this.sideBarOpened = false;
    };
    Object.defineProperty(MenuStore.prototype, "items", {
        /**
         * top level menu items (not flattened)
         */
        get: function () {
            if (!this._items) {
                this._items = this.spec.operationGroups;
            }
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * update active items on scroll
     * @param isScrolledDown whether last scroll was downside
     */
    MenuStore.prototype.updateOnScroll = function (isScrolledDown) {
        var step = isScrolledDown ? 1 : -1;
        var itemIdx = this.activeItemIdx;
        while (true) {
            if (itemIdx === -1 && !isScrolledDown) {
                break;
            }
            if (itemIdx >= this.flatItems.length - 1 && isScrolledDown) {
                break;
            }
            if (isScrolledDown) {
                var el = this.getElementAt(itemIdx + 1);
                if (this._scrollService.isElementBellow(el)) {
                    break;
                }
            }
            else {
                var el = this.getElementAt(itemIdx);
                if (this._scrollService.isElementAbove(el)) {
                    break;
                }
            }
            itemIdx += step;
        }
        this.activate(this.flatItems[itemIdx], true, true);
    };
    /**
     * update active items on hash change
     * @param hash current hash
     */
    MenuStore.prototype.updateOnHash = function (hash) {
        if (hash === void 0) { hash = HistoryService_HistoryService.hash; }
        if (!hash) {
            return false;
        }
        var item;
        hash = Object(utils["B" /* normalizeHash */])(hash);
        item = this.flatItems.find(function (i) { return i.id === hash; });
        if (item) {
            this.activateAndScroll(item, false);
        }
        else {
            this._scrollService.scrollIntoViewBySelector("[" + MenuStore_SECTION_ATTR + "=\"" + hash + "\"]");
        }
        return item !== undefined;
    };
    /**
     * get section/operation DOM Node related to the item or null if it doesn't exist
     * @param idx item absolute index
     */
    MenuStore.prototype.getElementAt = function (idx) {
        var item = this.flatItems[idx];
        return item && Object(dom["d" /* querySelector */])("[" + MenuStore_SECTION_ATTR + "=\"" + item.id + "\"]") || null;
    };
    Object.defineProperty(MenuStore.prototype, "activeItem", {
        /**
         * current active item
         */
        get: function () {
            return this.flatItems[this.activeItemIdx] || undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MenuStore.prototype, "flatItems", {
        /**
         * flattened items as they appear in the tree depth-first (top to bottom in the view)
         */
        get: function () {
            var flatItems = Object(utils["j" /* flattenByProp */])(this._items || [], 'items');
            flatItems.forEach(function (item, idx) { return item.absoluteIdx = idx; });
            return flatItems;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * activate menu item
     * @param item item to activate
     * @param updateHash [true] whether to update location hash
     * @param rewriteHistory [false] whether to rewrite browser history (do not create new enrty)
     */
    MenuStore.prototype.activate = function (item, updateHash, rewriteHistory) {
        if (updateHash === void 0) { updateHash = true; }
        if (rewriteHistory === void 0) { rewriteHistory = false; }
        if ((this.activeItem && this.activeItem.id) === (item && item.id)) {
            return;
        }
        this.deactivate(this.activeItem);
        if (!item) {
            HistoryService_HistoryService.update('', rewriteHistory);
            return;
        } // do not allow activating group items
        // TODO: control over options
        if (item.depth <= MenuBuilder_GROUP_DEPTH) {
            return;
        }
        this.activeItemIdx = item.absoluteIdx;
        if (updateHash) {
            HistoryService_HistoryService.update(item.id, rewriteHistory);
        }
        while (item !== undefined) {
            item.activate();
            item = item.parent;
        }
    };
    /**
     * makes item and all the parents not active
     * @param item item to deactivate
     */
    MenuStore.prototype.deactivate = function (item) {
        while (item !== undefined) {
            item.deactivate();
            item = item.parent;
        }
    };
    /**
     * activate menu item and scroll to it
     * @see MenuStore.activate
     */
    MenuStore.prototype.activateAndScroll = function (item, updateHash, rewriteHistory) {
        // item here can be a copy from search results so find corresponding item from menu
        var menuItem = item && this.getItemById(item.id) || item;
        this.activate(menuItem, updateHash, rewriteHistory);
        this.scrollToActive();
        if (!menuItem || !menuItem.items.length) {
            this.closeSidebar();
        }
    };
    /**
     * scrolls to active section
     */
    MenuStore.prototype.scrollToActive = function () {
        this._scrollService.scrollIntoView(this.getElementAt(this.activeItemIdx));
    };
    MenuStore.prototype.dispose = function () {
        this._unsubscribe();
        this._hashUnsubscribe();
    };
    external_tslib_["__decorate"]([
        external_mobx_["observable"]
    ], MenuStore.prototype, "activeItemIdx", void 0);
    external_tslib_["__decorate"]([
        external_mobx_["observable"]
    ], MenuStore.prototype, "sideBarOpened", void 0);
    external_tslib_["__decorate"]([
        external_mobx_["action"]
    ], MenuStore.prototype, "toggleSidebar", null);
    external_tslib_["__decorate"]([
        external_mobx_["action"]
    ], MenuStore.prototype, "closeSidebar", null);
    external_tslib_["__decorate"]([
        external_mobx_["computed"]
    ], MenuStore.prototype, "items", null);
    external_tslib_["__decorate"]([
        external_mobx_["action"].bound
    ], MenuStore.prototype, "updateOnScroll", null);
    external_tslib_["__decorate"]([
        external_mobx_["action"].bound
    ], MenuStore.prototype, "updateOnHash", null);
    external_tslib_["__decorate"]([
        external_mobx_["computed"]
    ], MenuStore.prototype, "flatItems", null);
    external_tslib_["__decorate"]([
        external_mobx_["action"]
    ], MenuStore.prototype, "activate", null);
    external_tslib_["__decorate"]([
        external_mobx_["action"].bound
    ], MenuStore.prototype, "activateAndScroll", null);
    return MenuStore;
}());


// CONCATENATED MODULE: ./src/services/ScrollService.ts




var ScrollService_EVENT = 'scroll';
var ScrollService_ScrollService = /** @class */ (function () {
    function ScrollService(options) {
        this.options = options;
        this._prevOffsetY = 0;
        this._scrollParent = utils["a" /* IS_BROWSER */] ? window : undefined;
        this._emiter = new external_eventemitter3_();
        this.bind();
    }
    ScrollService.prototype.bind = function () {
        this._prevOffsetY = this.scrollY();
        if (this._scrollParent) {
            this._scrollParent.addEventListener('scroll', this.handleScroll);
        }
    };
    ScrollService.prototype.dispose = function () {
        if (this._scrollParent) {
            this._scrollParent.removeEventListener('scroll', this.handleScroll);
        }
        this._emiter.removeAllListeners(ScrollService_EVENT);
    };
    ScrollService.prototype.scrollY = function () {
        if (typeof HTMLElement !== 'undefined' && this._scrollParent instanceof HTMLElement) {
            return this._scrollParent.scrollTop;
        }
        else if (this._scrollParent !== undefined) {
            return this._scrollParent.pageYOffset;
        }
        else {
            return 0;
        }
    };
    ScrollService.prototype.isElementBellow = function (el) {
        if (el === null) {
            return;
        }
        return el.getBoundingClientRect().top > this.options.scrollYOffset();
    };
    ScrollService.prototype.isElementAbove = function (el) {
        if (el === null) {
            return;
        }
        return Math.trunc(el.getBoundingClientRect().top) <= this.options.scrollYOffset();
    };
    ScrollService.prototype.subscribe = function (cb) {
        var emmiter = this._emiter.addListener(ScrollService_EVENT, cb);
        return function () { return emmiter.removeListener(ScrollService_EVENT, cb); };
    };
    ScrollService.prototype.scrollIntoView = function (element) {
        if (element === null) {
            return;
        }
        element.scrollIntoView();
        if (this._scrollParent && this._scrollParent.scrollBy) {
            this._scrollParent.scrollBy(0, -this.options.scrollYOffset());
        }
    };
    ScrollService.prototype.scrollIntoViewBySelector = function (selector) {
        var element = Object(utils["C" /* querySelector */])(selector);
        this.scrollIntoView(element);
    };
    ScrollService.prototype.handleScroll = function () {
        var scrollY = this.scrollY();
        var isScrolledDown = scrollY - this._prevOffsetY > 0;
        this._prevOffsetY = this.scrollY();
        this._emiter.emit(ScrollService_EVENT, isScrolledDown);
    };
    external_tslib_["__decorate"]([
        external_decko_["bind"],
        Object(utils["d" /* Throttle */])(100)
    ], ScrollService.prototype, "handleScroll", null);
    return ScrollService;
}());


// CONCATENATED MODULE: ./src/services/SearchStore.ts


var SearchStore_worker;
if (utils["a" /* IS_BROWSER */]) {
    try {
        // tslint:disable-next-line
        SearchStore_worker = __webpack_require__(43);
    }
    catch (e) {
        SearchStore_worker = __webpack_require__(28).default;
    }
}
else {
    SearchStore_worker = __webpack_require__(28).default;
}
var SearchStore_SearchStore = /** @class */ (function () {
    function SearchStore() {
        this.searchWorker = new SearchStore_worker();
    }
    SearchStore.prototype.indexItems = function (groups) {
        var _this = this;
        var recurse = function (items) {
            items.forEach(function (group) {
                if (group.type !== 'group') {
                    _this.add(group.name, group.description || '', group.id);
                }
                recurse(group.items);
            });
        };
        recurse(groups);
        this.searchWorker.done();
    };
    SearchStore.prototype.add = function (title, body, ref) {
        this.searchWorker.add(title, body, ref);
    };
    SearchStore.prototype.search = function (q) {
        return this.searchWorker.search(q);
    };
    SearchStore.prototype.toJS = function () {
        return external_tslib_["__awaiter"](this, void 0, void 0, function () {
            return external_tslib_["__generator"](this, function (_a) {
                return [2 /*return*/, this.searchWorker.toJS()];
            });
        });
    };
    SearchStore.prototype.load = function (state) {
        this.searchWorker.load(state);
    };
    return SearchStore;
}());


// CONCATENATED MODULE: ./src/services/AppStore.ts










function AppStore_createStore(spec, specUrl, options) {
    if (options === void 0) { options = {}; }
    return external_tslib_["__awaiter"](this, void 0, void 0, function () {
        var resolvedSpec;
        return external_tslib_["__generator"](this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Object(loadAndBundleSpec["b" /* loadAndBundleSpec */])(spec || specUrl)];
                case 1:
                    resolvedSpec = _a.sent();
                    return [2 /*return*/, new AppStore_AppStore(resolvedSpec, specUrl, options)];
            }
        });
    });
}
var AppStore_AppStore = /** @class */ (function () {
    function AppStore(spec, specUrl, options, createSearchIndex) {
        if (options === void 0) { options = {}; }
        if (createSearchIndex === void 0) { createSearchIndex = true; }
        var _this = this;
        this.marker = new MarkerService_MarkerService();
        this.rawOptions = options;
        this.options = new RedocNormalizedOptions_RedocNormalizedOptions(options);
        this.scroll = new ScrollService_ScrollService(this.options); // update position statically based on hash (in case of SSR)
        MenuStore_MenuStore.updateOnHash(HistoryService_HistoryService.hash, this.scroll);
        this.spec = new SpecStore_SpecStore(spec, specUrl, this.options);
        this.menu = new MenuStore_MenuStore(this.spec, this.scroll);
        this.search = new SearchStore_SearchStore();
        if (createSearchIndex) {
            this.search.indexItems(this.menu.items);
        }
        this.disposer = Object(external_mobx_["observe"])(this.menu, 'activeItemIdx', function (change) {
            _this.updateMarkOnMenu(change.newValue);
        });
    }
    /**
     * deserialize store
     * **SUPER HACKY AND NOT OPTIMAL IMPLEMENTATION**
     */
    // TODO:
    AppStore.fromJS = function (state) {
        var inst = new AppStore(state.spec.data, state.spec.url, state.options, false);
        inst.menu.activeItemIdx = state.menu.activeItemIdx || 0;
        inst.menu.activate(inst.menu.flatItems[inst.menu.activeItemIdx]);
        inst.search.load(state.searchIndex);
        return inst;
    };
    AppStore.prototype.onDidMount = function () {
        this.menu.updateOnHash();
        this.updateMarkOnMenu(this.menu.activeItemIdx);
    };
    AppStore.prototype.updateMarkOnMenu = function (idx) {
        var start = Math.max(0, idx);
        var end = Math.min(this.menu.flatItems.length, start + 5);
        var elements = [];
        for (var i = start; i < end; i++) {
            var elem = this.menu.getElementAt(i);
            if (!elem) {
                continue;
            }
            if (this.menu.flatItems[i].type === 'section') {
                elem = elem.parentElement.parentElement;
            }
            if (elem) {
                elements.push(elem);
            }
        }
        this.marker.addOnly(elements);
        this.marker.mark();
    };
    AppStore.prototype.dispose = function () {
        this.scroll.dispose();
        this.menu.dispose();
        this.disposer();
    };
    /**
     * serializes store
     * **SUPER HACKY AND NOT OPTIMAL IMPLEMENTATION**
     */
    // TODO:
    AppStore.prototype.toJS = function () {
        return external_tslib_["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return external_tslib_["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {
                            menu: {
                                activeItemIdx: this.menu.activeItemIdx
                            },
                            spec: {
                                url: this.spec.parser.specUrl,
                                data: this.spec.parser.spec
                            }
                        };
                        return [4 /*yield*/, this.search.toJS()];
                    case 1: return [2 /*return*/, (_a.searchIndex = _b.sent(),
                            _a.options = this.rawOptions,
                            _a)];
                }
            });
        });
    };
    return AppStore;
}());


// CONCATENATED MODULE: ./src/services/ClipboardService.ts
var isSupported = typeof document !== 'undefined' && document.queryCommandSupported && document.queryCommandSupported('copy');
var ClipboardService = /** @class */ (function () {
    function ClipboardService() {
    }
    ClipboardService.isSupported = function () {
        return isSupported;
    };
    ClipboardService.selectElement = function (element) {
        var range;
        var selection;
        if (document.body.createTextRange) {
            range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        }
        else if (document.createRange && window.getSelection) {
            selection = window.getSelection();
            range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };
    ClipboardService.deselect = function () {
        if (document.selection) {
            document.selection.empty();
        }
        else if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    };
    ClipboardService.copySelected = function () {
        var result;
        try {
            result = document.execCommand('copy');
        }
        catch (err) {
            result = false;
        }
        return result;
    };
    ClipboardService.copyElement = function (element) {
        ClipboardService.selectElement(element);
        var res = ClipboardService.copySelected();
        if (res) {
            ClipboardService.deselect();
        }
        return res;
    };
    ClipboardService.copyCustom = function (text) {
        var textArea = document.createElement('textarea');
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0'; // Ensure it has a small width and height. Setting to 1px / 1em
        // doesn't work as this gives a negative w/h on some browsers.
        textArea.style.width = '2em';
        textArea.style.height = '2em'; // We don't need padding, reducing the size if it does flash render.
        textArea.style.padding = '0'; // Clean up any borders.
        textArea.style.border = 'none';
        textArea.style.outline = 'none';
        textArea.style.boxShadow = 'none'; // Avoid flash of white box if rendered for any reason.
        textArea.style.background = 'transparent';
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        var res = ClipboardService.copySelected();
        document.body.removeChild(textArea);
        return res;
    };
    return ClipboardService;
}());


// CONCATENATED MODULE: ./src/services/index.ts














// EXTERNAL MODULE: external "mobx-react"
var external_mobx_react_ = __webpack_require__(5);

// CONCATENATED MODULE: ./src/common-elements/panels.ts


var panels_MiddlePanel = styled_components["c" /* default */].div(["width:calc(100% - ", ");padding:", "px;", ";"], function (props) { return props.theme.rightPanel.width; }, function (props) { return props.theme.spacingUnit * 2; }, styled_components["f" /* media */].lessThan('medium')(panels_templateObject_1 || (panels_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n    width: 100%;\n  "], ["\n    width: 100%;\n  "]))));
var panels_RightPanel = styled_components["c" /* default */].div(["width:", ";color:#fafbfc;background-color:", ";padding:", "px;", ";"], function (props) { return props.theme.rightPanel.width; }, function (props) { return props.theme.rightPanel.backgroundColor; }, function (props) { return props.theme.spacingUnit * 2; }, styled_components["f" /* media */].lessThan('medium')(panels_templateObject_2 || (panels_templateObject_2 = external_tslib_["__makeTemplateObject"](["\n    width: 100%;\n  "], ["\n    width: 100%;\n  "]))));
var panels_DarkRightPanel = panels_RightPanel.extend(panels_templateObject_3 || (panels_templateObject_3 = external_tslib_["__makeTemplateObject"](["\n  background-color: ", ";\n"], ["\n  background-color: ", ";\n"])), function (props) { return props.theme.rightPanel.backgroundColor; });
var panels_EmptyDarkRightPanel = panels_DarkRightPanel.extend(panels_templateObject_4 || (panels_templateObject_4 = external_tslib_["__makeTemplateObject"](["\n  ", ";\n"], ["\n  ",
    ";\n"])), styled_components["f" /* media */].lessThan('medium')(panels_templateObject_5 || (panels_templateObject_5 = external_tslib_["__makeTemplateObject"](["\n    padding: 0\n  "], ["\n    padding: 0\n  "]))));
var panels_Row = styled_components["c" /* default */].div(["display:flex;width:100%;", ";"], styled_components["f" /* media */].lessThan('medium')(panels_templateObject_6 || (panels_templateObject_6 = external_tslib_["__makeTemplateObject"](["\n    flex-direction: column;\n  "], ["\n    flex-direction: column;\n  "]))));
var panels_templateObject_1, panels_templateObject_2, panels_templateObject_3, panels_templateObject_5, panels_templateObject_4, panels_templateObject_6;

// CONCATENATED MODULE: ./src/common-elements/headers.ts

var headers_headerFontSize = {
    1: '1.85714em',
    2: '1.57143em',
    3: '1.27em'
};
var headers_headerCommonMixin = function (level) { return Object(styled_components["b" /* css */])(["font-family:", ";font-weight:400;font-size:", ";"], function (props) { return props.theme.headingsFont.family; }, headers_headerFontSize[level]); };
var headers_H1 = styled_components["c" /* default */].h1(["", ";color:", ";text-transform:capitalize;"], headers_headerCommonMixin(1), function (props) { return props.theme.colors.main; });
var headers_H2 = styled_components["c" /* default */].h2(["", ";color:black;"], headers_headerCommonMixin(2));
var headers_H3 = styled_components["c" /* default */].h2(["", ";color:black;"], headers_headerCommonMixin(3));
var headers_UnderlinedHeader = styled_components["c" /* default */].h5(["border-bottom:1px solid rgba(38,50,56,0.3);margin:1em 0 1em 0;color:rgba(38,50,56,0.5);font-weight:normal;text-transform:uppercase;font-size:0.929em;line-height:20px;"]);

// CONCATENATED MODULE: ./src/common-elements/linkify.ts
 // tslint:disable-next-line
var linkify_linkifyMixin = function (className) { return Object(styled_components["b" /* css */])(["", "{cursor:pointer;margin-left:-20px;padding:0;line-height:1;width:20px;display:inline-block;}", ":before{content:'';width:15px;height:15px;background-size:contain;background-image:url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNNDU5LjcgMjMzLjRsLTkwLjUgOTAuNWMtNTAgNTAtMTMxIDUwLTE4MSAwIC03LjktNy44LTE0LTE2LjctMTkuNC0yNS44bDQyLjEtNDIuMWMyLTIgNC41LTMuMiA2LjgtNC41IDIuOSA5LjkgOCAxOS4zIDE1LjggMjcuMiAyNSAyNSA2NS42IDI0LjkgOTAuNSAwbDkwLjUtOTAuNWMyNS0yNSAyNS02NS42IDAtOTAuNSAtMjQuOS0yNS02NS41LTI1LTkwLjUgMGwtMzIuMiAzMi4yYy0yNi4xLTEwLjItNTQuMi0xMi45LTgxLjYtOC45bDY4LjYtNjguNmM1MC01MCAxMzEtNTAgMTgxIDBDNTA5LjYgMTAyLjMgNTA5LjYgMTgzLjQgNDU5LjcgMjMzLjR6TTIyMC4zIDM4Mi4ybC0zMi4yIDMyLjJjLTI1IDI0LjktNjUuNiAyNC45LTkwLjUgMCAtMjUtMjUtMjUtNjUuNiAwLTkwLjVsOTAuNS05MC41YzI1LTI1IDY1LjUtMjUgOTAuNSAwIDcuOCA3LjggMTIuOSAxNy4yIDE1LjggMjcuMSAyLjQtMS40IDQuOC0yLjUgNi44LTQuNWw0Mi4xLTQyYy01LjQtOS4yLTExLjYtMTgtMTkuNC0yNS44IC01MC01MC0xMzEtNTAtMTgxIDBsLTkwLjUgOTAuNWMtNTAgNTAtNTAgMTMxIDAgMTgxIDUwIDUwIDEzMSA1MCAxODEgMGw2OC42LTY4LjZDMjc0LjYgMzk1LjEgMjQ2LjQgMzkyLjMgMjIwLjMgMzgyLjJ6Ii8+PC9zdmc+Cg==');opacity:0.5;visibility:hidden;display:inline-block;vertical-align:middle;}h1:hover > ", "::before,h2:hover > ", "::before,", ":hover::before{visibility:visible;}"], className, className, className, className, className); };
var linkify_ShareLink = styled_components["c" /* default */].a(["", ";"], linkify_linkifyMixin('&'));

// CONCATENATED MODULE: ./src/common-elements/shelfs.tsx



var shelfs_directionMap = {
    left: '90deg',
    right: '-90deg',
    up: '-180deg',
    down: '0'
};
var shelfs_IntShelfIcon = /** @class */ (function (_super) {
    external_tslib_["__extends"](IntShelfIcon, _super);
    function IntShelfIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntShelfIcon.prototype.render = function () {
        return external_react_["createElement"]("svg", { className: this.props.className, style: this.props.style, version: "1.1", viewBox: "0 0 24 24", x: "0", xmlns: "http://www.w3.org/2000/svg", y: "0" },
            external_react_["createElement"]("polygon", { points: "17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 " }));
    };
    return IntShelfIcon;
}(external_react_["PureComponent"]));
var shelfs_ShelfIcon = Object(styled_components["c" /* default */])(shelfs_IntShelfIcon)(["height:", ";width:", ";vertical-align:middle;float:", ";transition:transform 0.2s ease-out;transform:rotateZ(", ");polygon{fill:", ";}"], function (props) { return props.size || '18px'; }, function (props) { return props.size || '18px'; }, function (props) { return props.float || ''; }, function (props) { return shelfs_directionMap[props.direction || 'down']; }, function (props) { return props.color && props.theme.colors[props.color] || props.color; });
var shelfs_Badge = Object(styled_components["g" /* withProps */])(styled_components["c" /* default */].span)(shelfs_templateObject_1 || (shelfs_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n  display: inline-block;\n  padding: 0 5px;\n  margin: 0;\n  background-color: ", ";\n  color: white;\n  font-size: ", ";;\n  vertical-align: text-top;\n"], ["\n  display: inline-block;\n  padding: 0 5px;\n  margin: 0;\n  background-color: ", ";\n  color: white;\n  font-size: ", ";;\n  vertical-align: text-top;\n"])), function (props) { return props.theme.colors[props.type]; }, function (props) { return props.theme.code.fontSize; });
var shelfs_templateObject_1;

// CONCATENATED MODULE: ./src/common-elements/mixins.ts

var mixins_deprecatedCss = Object(styled_components["b" /* css */])(["text-decoration:line-through;color:#bdccd3;"]);

// CONCATENATED MODULE: ./src/common-elements/fields-layout.ts




var fields_layout_PropertiesTableCaption = styled_components["c" /* default */].caption(["text-align:right;font-size:0.9em;font-weight:normal;color:", ";"], function (props) { return Object(external_polished_["transparentize"])(0.6, props.theme.colors.text); });
var fields_layout_PropertyCell = styled_components["c" /* default */].td(["border-left:1px solid ", ";box-sizing:border-box;position:relative;padding:10px 10px 10px 0;tr:first-of-type > &,tr.last > &{border-left-width:0;background-position:top left;background-repeat:no-repeat;background-size:1px 100%;}tr:first-of-type > &{background-image:linear-gradient( to bottom,transparent 0%,transparent 22px,", " 22px,", " 100% );}tr.last > &{background-image:linear-gradient( to bottom,", " 0%,", " 22px,transparent 22px,transparent 100% );}tr.last + tr > &{border-left-color:transparent;}tr:only-child > &{background:none;border-left-color:transparent;}"], function (props) { return props.theme.schemaView.linesColor; }, function (props) { return props.theme.schemaView.linesColor; }, function (props) { return props.theme.schemaView.linesColor; }, function (props) { return props.theme.schemaView.linesColor; }, function (props) { return props.theme.schemaView.linesColor; });
var fields_layout_PropertyCellWithInner = fields_layout_PropertyCell.extend(fields_layout_templateObject_1 || (fields_layout_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n  padding: 0;\n"], ["\n  padding: 0;\n"])));
var fields_layout_PropertyNameCell = fields_layout_PropertyCell.extend(fields_layout_templateObject_2 || (fields_layout_templateObject_2 = external_tslib_["__makeTemplateObject"](["\n  vertical-align: top;\n  line-height: 20px;\n  white-space: nowrap;\n  font-size: 0.929em;\n  font-weight: 300;\n  font-family: ", ";\n\n  &.deprecated {\n    ", ";\n  }\n"], ["\n  vertical-align: top;\n  line-height: 20px;\n  white-space: nowrap;\n  font-size: 0.929em;\n  font-weight: 300;\n  font-family: ", ";\n\n  &.deprecated {\n    ", ";\n  }\n"])), function (props) { return props.theme.headingsFont.family; }, mixins_deprecatedCss);
var fields_layout_PropertyDetailsCell = styled_components["c" /* default */].td(["border-bottom:1px solid #9fb4be;padding:10px 0;width:", ";box-sizing:border-box;tr.expanded &{border-bottom:none;}"], function (props) { return props.theme.schemaView.defaultDetailsWidth; });
var fields_layout_PropertyBullet = styled_components["c" /* default */].span(["color:", ";font-family:", ";margin-right:10px;&::before{content:'';display:inline-block;vertical-align:middle;width:10px;height:1px;background:", ";}&::after{content:'';display:inline-block;vertical-align:middle;width:1px;background:", ";height:7px;}"], function (props) { return props.theme.schemaView.linesColor; }, function (props) { return props.theme.code.fontFamily; }, function (props) { return props.theme.schemaView.linesColor; }, function (props) { return props.theme.schemaView.linesColor; });
var fields_layout_InnerPropertiesWrap = styled_components["c" /* default */].div(["padding:1em;"]);
var fields_layout_PropertiesTable = styled_components["c" /* default */].table(["border-collapse:collapse;border-radius:3px;border-spacing:0;width:100%;> tr{vertical-align:middle;}& ", ",& ", " ", " ", ",& ", " ", " ", " ", " ", "{margin:1em 0 1em 1em;background:#f0f0f0;}& ", " ", ",& ", " ", " ", " ", ",& ", " ", " ", " ", " ", " ", "{background:#ffffff;}"], fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap, fields_layout_InnerPropertiesWrap);
var fields_layout_templateObject_1, fields_layout_templateObject_2;

// CONCATENATED MODULE: ./src/common-elements/schema.ts


var schema_OneOfList = styled_components["c" /* default */].ul(["margin:0;padding:0;list-style:none;display:inline-block;"]);
var schema_OneOfLabel = styled_components["c" /* default */].span(["font-size:0.9em;margin-right:10px;color:", ";font-family:Montserrat;}"], function (props) { return props.theme.colors.main; });
var schema_OneOfButton = Object(styled_components["g" /* withProps */])(styled_components["c" /* default */].li)(schema_templateObject_1 || (schema_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n  display: inline-block;\n  margin-right: 10px;\n  font-size: 0.8em;\n  cursor: pointer;\n  border: 1px solid ", ";\n  padding: 2px 10px;\n\n  ", "\n"], ["\n  display: inline-block;\n  margin-right: 10px;\n  font-size: 0.8em;\n  cursor: pointer;\n  border: 1px solid ", ";\n  padding: 2px 10px;\n\n  ",
    "\n"])), function (props) { return props.theme.colors.main; }, function (props) {
    if (props.active) {
        return "\n      color: white;\n      background-color: " + props.theme.colors.main + ";\n      ";
    }
    else {
        return "\n        color: " + props.theme.colors.main + ";\n        background-color: white;\n      ";
    }
});
var schema_ArrayOpenningLabel = styled_components["c" /* default */].div(["font-size:0.9em;font-family:", ";&::after{content:' [';}"], function (props) { return props.theme.code.fontFamily; });
var schema_ArrayClosingLabel = styled_components["c" /* default */].div(["font-size:0.9em;font-family:", ";&::after{content:']';}"], function (props) { return props.theme.code.fontFamily; });
var schema_templateObject_1;

// EXTERNAL MODULE: external "react-dropdown"
var external_react_dropdown_ = __webpack_require__(35);
var external_react_dropdown_default = /*#__PURE__*/__webpack_require__.n(external_react_dropdown_);

// CONCATENATED MODULE: ./src/common-elements/dropdown.ts



var dropdown_StyledDropdown = Object(styled_components["g" /* withProps */])(Object(styled_components["c" /* default */])(external_react_dropdown_default.a))(dropdown_templateObject_1 || (dropdown_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n  min-width: 100px;\n  display: inline-block;\n  position: relative;\n  width: auto;\n  font-family: ", ";\n\n  .Dropdown-control  {\n    font-family: ", ";\n    position: relative;\n    font-size: .929em;\n    width: 100%;\n    line-height: 1.5em;\n    vertical-align: middle;\n    cursor: pointer;\n    border-color: rgba(38, 50, 56, 0.5);\n    color: #263238;\n    outline: none;\n    padding: 0.15em 1.5em 0.2em 0.5em;\n    border-radius: 2px;\n    border-width: 1px;\n    border-style: solid;\n    margin-top: 5px;\n    background: white;\n\n    &:hover {\n      border-color: ", ";\n      color: ", ";\n      box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12);\n    }\n  }\n\n  .Dropdown-arrow {\n    border-color: ", " transparent transparent;\n    border-style: solid;\n    border-width: 0.35em 0.35em 0;\n    content: ' ';\n    display: block;\n    height: 0;\n    position: absolute;\n    right: 0.35em;\n    top: 50%;\n    margin-top: -0.125em;\n    width: 0;\n  }\n\n  .Dropdown-menu {\n    position: absolute;\n    margin-top: 2px;\n    left: 0;\n    right: 0;\n\n    z-index: 10;\n    min-width: 100px;\n\n    background: white;\n    border: 1px solid rgba(38, 50, 56, 0.2);\n    box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.08);\n  }\n\n  .Dropdown-option {\n    font-size: 0.9em;\n    color: #263238;\n    cursor: pointer;\n    padding: 0.4em;\n\n    &.is-selected {\n      background-color: rgba(0, 0, 0, 0.05)\n    }\n\n    &:hover {\n      background-color: rgba(38, 50, 56, 0.12)\n    }\n  }\n"], ["\n  min-width: 100px;\n  display: inline-block;\n  position: relative;\n  width: auto;\n  font-family: ", ";\n\n  .Dropdown-control  {\n    font-family: ", ";\n    position: relative;\n    font-size: .929em;\n    width: 100%;\n    line-height: 1.5em;\n    vertical-align: middle;\n    cursor: pointer;\n    border-color: rgba(38, 50, 56, 0.5);\n    color: #263238;\n    outline: none;\n    padding: 0.15em 1.5em 0.2em 0.5em;\n    border-radius: 2px;\n    border-width: 1px;\n    border-style: solid;\n    margin-top: 5px;\n    background: white;\n\n    &:hover {\n      border-color: ", ";\n      color: ", ";\n      box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12);\n    }\n  }\n\n  .Dropdown-arrow {\n    border-color: ", " transparent transparent;\n    border-style: solid;\n    border-width: 0.35em 0.35em 0;\n    content: ' ';\n    display: block;\n    height: 0;\n    position: absolute;\n    right: 0.35em;\n    top: 50%;\n    margin-top: -0.125em;\n    width: 0;\n  }\n\n  .Dropdown-menu {\n    position: absolute;\n    margin-top: 2px;\n    left: 0;\n    right: 0;\n\n    z-index: 10;\n    min-width: 100px;\n\n    background: white;\n    border: 1px solid rgba(38, 50, 56, 0.2);\n    box-shadow: 0px 2px 4px 0px rgba(34, 36, 38, 0.12), 0px 2px 10px 0px rgba(34, 36, 38, 0.08);\n  }\n\n  .Dropdown-option {\n    font-size: 0.9em;\n    color: #263238;\n    cursor: pointer;\n    padding: 0.4em;\n\n    &.is-selected {\n      background-color: rgba(0, 0, 0, 0.05)\n    }\n\n    &:hover {\n      background-color: rgba(38, 50, 56, 0.12)\n    }\n  }\n"])), function (props) { return props.theme.headingsFont.family; }, function (props) { return props.theme.headingsFont.family; }, function (props) { return props.theme.colors.main; }, function (props) { return props.theme.colors.main; }, function (props) { return props.theme.colors.main; });
var dropdown_SimpleDropdown = dropdown_StyledDropdown.extend(dropdown_templateObject_2 || (dropdown_templateObject_2 = external_tslib_["__makeTemplateObject"](["\n  margin-left: 10px;\n  text-transform: none;\n  font-size: 0.929em;\n\n  .Dropdown-control  {\n    font-size: 1em;\n    border: none;\n    padding: 0 1.2em 0 0;\n    background: transparent;\n\n    &:hover {\n      color: ", ";\n      box-shadow: none;\n    }\n"], ["\n  margin-left: 10px;\n  text-transform: none;\n  font-size: 0.929em;\n\n  .Dropdown-control  {\n    font-size: 1em;\n    border: none;\n    padding: 0 1.2em 0 0;\n    background: transparent;\n\n    &:hover {\n      color: ", ";\n      box-shadow: none;\n    }\n"])), function (props) { return props.theme.colors.main; });
var dropdown_MimeLabel = styled_components["c" /* default */].span(["margin-left:10px;text-transform:none;font-size:0.929em;color:black;"]);
var dropdown_templateObject_1, dropdown_templateObject_2;

// EXTERNAL MODULE: external "react-tabs"
var external_react_tabs_ = __webpack_require__(9);

// CONCATENATED MODULE: ./src/common-elements/tabs.ts




var tabs_Tabs = Object(styled_components["c" /* default */])(external_react_tabs_["Tabs"])(["> ul{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;> li{padding:5px 10px;display:inline-block;flex:1;background-color:rgba(0,0,0,0.2);border-bottom:1px solid rgba(0,0,0,0.5);cursor:pointer;text-align:center;outline:none;color:#ccc;&.react-tabs__tab--selected{color:#fff;background:rgba(0,0,0,0.5);border-bottom:1px solid ", ";}&:only-child{flex:none;min-width:100px;}&.tab-success{color:", ";}&.tab-redirect{color:", ";}&.tab-info{color:", ";}&.tab-error{color:", ";}}}> .react-tabs__tab-panel{background:#171e21;& > div,& > pre{padding:20px;margin:0;}}"], function (props) { return props.theme.schemaView.linesColor; }, function (props) { return props.theme.colors.success; }, function (props) { return props.theme.colors.redirect; }, function (props) { return props.theme.colors.info; }, function (props) { return props.theme.colors.error; });
var tabs_SmallTabs = tabs_Tabs.extend(tabs_templateObject_1 || (tabs_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n  > ul {\n    display: block;\n    > li {\n      padding: 0;\n      margin-right: 20px;\n      font-size: 12px;\n      padding: 2px 0;\n      border-bottom: 1px dashed;\n      color: #787b7d;\n      backgrond: none;\n\n      &:last-child {\n        margin-right: 0;\n      }\n\n      &.react-tabs__tab--selected {\n        backgrond: none;\n        color: #babcbf;\n      }\n    }\n  }\n  > .react-tabs__tab-panel {\n    & > div,\n    & > pre {\n      padding: 10px 0;\n      margin: 0;\n    }\n  }\n"], ["\n  > ul {\n    display: block;\n    > li {\n      padding: 0;\n      margin-right: 20px;\n      font-size: 12px;\n      padding: 2px 0;\n      border-bottom: 1px dashed;\n      color: #787b7d;\n      backgrond: none;\n\n      &:last-child {\n        margin-right: 0;\n      }\n\n      &.react-tabs__tab--selected {\n        backgrond: none;\n        color: #babcbf;\n      }\n    }\n  }\n  > .react-tabs__tab-panel {\n    & > div,\n    & > pre {\n      padding: 10px 0;\n      margin: 0;\n    }\n  }\n"])));
var tabs_templateObject_1;

// CONCATENATED MODULE: ./src/common-elements/samples.tsx

var samples_SampleControls = styled_components["c" /* default */].div(["opacity:0.4;transition:opacity 0.3s ease;text-align:right;> span{display:inline-block;padding:2px 10px;cursor:pointer;:hover{background:rgba(255,255,255,0.1);}}"]);
var samples_SampleControlsWrap = styled_components["c" /* default */].div(["&:hover ", "{opacity:1;}"], samples_SampleControls);

// EXTERNAL MODULE: external "perfect-scrollbar"
var external_perfect_scrollbar_ = __webpack_require__(25);
var external_perfect_scrollbar_default = /*#__PURE__*/__webpack_require__.n(external_perfect_scrollbar_);

// EXTERNAL MODULE: ./node_modules/perfect-scrollbar/css/perfect-scrollbar.css
var perfect_scrollbar = __webpack_require__(24);
var perfect_scrollbar_default = /*#__PURE__*/__webpack_require__.n(perfect_scrollbar);

// CONCATENATED MODULE: ./src/common-elements/perfect-scrollbar.tsx





/*
 * perfect scrollbar umd bundle uses exports assignment while module uses default export
 * so when bundled with webpack default export works but with jest it crashes
 * That's why the following ugly fix is required
 */
var perfect_scrollbar_PerfectScrollbarConstructor = external_perfect_scrollbar_default.a || external_perfect_scrollbar_;
Object(styled_components["d" /* injectGlobal */])(perfect_scrollbar_templateObject_1 || (perfect_scrollbar_templateObject_1 = external_tslib_["__makeTemplateObject"](["", ""], ["", ""])), perfect_scrollbar_default.a && perfect_scrollbar_default.a.toString());
var perfect_scrollbar_StyledScrollWrapper = styled_components["c" /* default */].div(["position:relative;"]);
var perfect_scrollbar_PerfectScrollbar = /** @class */ (function (_super) {
    external_tslib_["__extends"](PerfectScrollbar, _super);
    function PerfectScrollbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleRef = function (ref) {
            _this._container = ref;
        };
        return _this;
    }
    PerfectScrollbar.prototype.componentDidMount = function () {
        this.inst = new perfect_scrollbar_PerfectScrollbarConstructor(this._container, this.props.options || {});
    };
    PerfectScrollbar.prototype.componentDidUpdate = function () {
        this.inst.update();
    };
    PerfectScrollbar.prototype.componentWillUnmount = function () {
        this.inst.destroy();
    };
    PerfectScrollbar.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, updateFn = _a.updateFn;
        updateFn(this.componentDidUpdate.bind(this));
        return external_react_["createElement"](perfect_scrollbar_StyledScrollWrapper, { className: "scrollbar-container " + className, innerRef: this.handleRef }, children);
    };
    return PerfectScrollbar;
}(external_react_["Component"]));

var perfect_scrollbar_templateObject_1;

// CONCATENATED MODULE: ./src/common-elements/index.ts












// EXTERNAL MODULE: external "dompurify"
var external_dompurify_ = __webpack_require__(34);

// CONCATENATED MODULE: ./src/components/OptionsProvider.ts

 // TODO: contribute declarations to @types/react once 16.3 is released
var OptionsProvider_OptionsContext = external_react_["createContext"](new RedocNormalizedOptions_RedocNormalizedOptions({}));
var OptionsProvider_OptionsProvider = OptionsProvider_OptionsContext.Provider;
var OptionsProvider_OptionsConsumer = OptionsProvider_OptionsContext.Consumer;

// CONCATENATED MODULE: ./src/components/Markdown/styles.ts


var styles_markdownCss = Object(styled_components["b" /* css */])(["p{&:last-of-type{margin-bottom:0;}}&.-dense p{margin:0;}&.-inline p{display:inline-block;}h1{", ";color:", ";margin-top:0;}h2{", ";color:", ";}code{color:#e53935;background-color:rgba(38,50,56,0.04);font-family:", ";border-radius:2px;border:1px solid rgba(38,50,56,0.1);padding:0.1em 0.25em 0.2em;font-size:", ";}pre{font-family:", ";white-space:pre-wrap;background-color:#263238;color:white;padding:12px 14px 15px 14px;overflow-x:auto;line-height:normal;border-radius:0px border:1px solid rgba(38,50,56,0.1);code{background-color:transparent;color:white;&:before,&:after{content:none;}}}blockquote{margin:0;margin-bottom:1em;padding:0 15px;color:#777;border-left:4px solid #ddd;}img{max-width:100%;box-sizing:content-box;}ul,ol{padding-left:2em;margin:0;margin-bottom:1em;font-family:", ";font-weight:", ";line-height:", ";> li{margin:1em 0;}}table{display:block;width:100%;overflow:auto;word-break:normal;word-break:keep-all;border-collapse:collapse;border-spacing:0;margin-top:1.5em;margin-bottom:1.5em;}table tr{background-color:#fff;border-top:1px solid #ccc;&:nth-child(2n){background-color:#f8f8f8;}}table th,table td{padding:6px 13px;border:1px solid #ddd;}table th{text-align:left;font-weight:bold;}", ";"], headers_headerCommonMixin(1), function (props) { return props.theme.colors.main; }, headers_headerCommonMixin(2), function (props) { return props.theme.colors.text; }, function (props) { return props.theme.code.fontFamily; }, function (props) { return props.theme.code.fontSize; }, function (props) { return props.theme.code.fontFamily; }, function (props) { return props.theme.baseFont.family; }, function (props) { return props.theme.baseFont.weight; }, function (props) { return props.theme.baseFont.lineHeight; }, linkify_linkifyMixin('.share-link'));

// CONCATENATED MODULE: ./src/components/Markdown/Markdown.tsx







var Markdown_InternalMarkdown = /** @class */ (function (_super) {
    external_tslib_["__extends"](InternalMarkdown, _super);
    function InternalMarkdown(props) {
        var _this = _super.call(this, props) || this;
        if (props.components && props.inline) {
            throw new Error('Markdown Component: "inline" mode doesn\'t support "components"');
        }
        return _this;
    }
    InternalMarkdown.prototype.render = function () {
        var _a = this.props, source = _a.source, raw = _a.raw, className = _a.className, components = _a.components, inline = _a.inline, dense = _a.dense, store = _a.store;
        if (components && !store) {
            throw new Error('When using components with Markdwon in ReDoc, store prop must be provided');
        }
        var sanitize = function (untrustedSpec, html) { return untrustedSpec ? external_dompurify_["sanitize"](html) : html; };
        var renderer = new MarkdownRenderer_MarkdownRenderer();
        var parts = components ? renderer.renderMdWithComponents(source, components, raw) : [renderer.renderMd(source, raw)];
        if (!parts.length) {
            return null;
        }
        var appendClass = ' redoc-markdown';
        if (dense) {
            appendClass += ' -dense';
        }
        if (inline) {
            appendClass += ' -inline';
        }
        return external_react_["createElement"](OptionsProvider_OptionsContext.Consumer, null, function (options) { return inline ? external_react_["createElement"]("span", { className: className + appendClass, dangerouslySetInnerHTML: {
                __html: sanitize(options.untrustedSpec, parts[0])
            } }) : external_react_["createElement"]("div", { className: className + appendClass }, parts.map(function (part, idx) { return typeof part === 'string' ? external_react_["createElement"]("div", { key: idx, dangerouslySetInnerHTML: {
                __html: sanitize(options.untrustedSpec, part)
            } }) : external_react_["createElement"](part.component, external_tslib_["__assign"]({ key: idx }, external_tslib_["__assign"]({}, part.attrs, part.propsSelector(store)))); })); });
    };
    return InternalMarkdown;
}(external_react_["Component"]));
var Markdown_Markdown = Object(styled_components["c" /* default */])(Markdown_InternalMarkdown)(["", ";"], styles_markdownCss);

// CONCATENATED MODULE: ./src/components/SecuritySchemes/SecuritySchemes.tsx





var SecuritySchemes_AUTH_TYPES = {
    oauth2: 'OAuth2',
    apiKey: 'API Key',
    http: 'HTTP',
    openIdConnect: 'Open ID Connect'
};
var SecuritySchemes_AuthTable = styled_components["c" /* default */].table(["ul > li{margin:0.5em 0 !important;}th{text-transform:capitalize;}"]);
var SecuritySchemes_OAuthFlow = /** @class */ (function (_super) {
    external_tslib_["__extends"](OAuthFlow, _super);
    function OAuthFlow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OAuthFlow.prototype.render = function () {
        var _a = this.props, type = _a.type, flow = _a.flow;
        return external_react_["createElement"]("tr", null,
            external_react_["createElement"]("th", null,
                " ",
                type,
                " OAuth Flow "),
            external_react_["createElement"]("td", null,
                type === 'implicit' || type === 'authorizationCode' ? external_react_["createElement"]("div", null,
                    external_react_["createElement"]("strong", null, " Authorization URL: "),
                    flow.authorizationUrl) : null,
                type === 'password' || type === 'clientCredentials' || type === 'authorizationCode' ? external_react_["createElement"]("div", null,
                    external_react_["createElement"]("strong", null, " Token URL: "),
                    flow.tokenUrl) : null,
                flow.refreshUrl && external_react_["createElement"]("div", null,
                    external_react_["createElement"]("strong", null, " Refresh URL: "),
                    flow.refreshUrl),
                external_react_["createElement"]("div", null,
                    external_react_["createElement"]("strong", null, " Scopes: ")),
                external_react_["createElement"]("ul", null, Object.keys(flow.scopes).map(function (scope) { return external_react_["createElement"]("li", { key: scope },
                    external_react_["createElement"]("code", null, scope),
                    " - ",
                    flow.scopes[scope]); }))));
    };
    return OAuthFlow;
}(external_react_["PureComponent"]));

var SecuritySchemes_SecurityDefs = /** @class */ (function (_super) {
    external_tslib_["__extends"](SecurityDefs, _super);
    function SecurityDefs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDefs.prototype.render = function () {
        if (!this.props.securitySchemes) {
            return null;
        }
        return external_react_["createElement"]("div", null, this.props.securitySchemes.schemes.map(function (scheme) { return external_react_["createElement"]("div", { "data-section-id": scheme.sectionId, key: scheme.id },
            external_react_["createElement"](headers_H2, null,
                external_react_["createElement"](linkify_ShareLink, { href: '#' + scheme.sectionId }),
                scheme.id),
            external_react_["createElement"](Markdown_Markdown, { source: scheme.description || '' }),
            external_react_["createElement"](SecuritySchemes_AuthTable, { className: "security-details" },
                external_react_["createElement"]("tbody", null,
                    external_react_["createElement"]("tr", null,
                        external_react_["createElement"]("th", null, " Security scheme type: "),
                        external_react_["createElement"]("td", null,
                            " ",
                            SecuritySchemes_AUTH_TYPES[scheme.type] || scheme.type,
                            " ")),
                    scheme.apiKey ? external_react_["createElement"]("tr", null,
                        external_react_["createElement"]("th", null,
                            " ",
                            scheme.apiKey.in,
                            " parameter name:"),
                        external_react_["createElement"]("td", null,
                            " ",
                            scheme.apiKey.name,
                            " ")) : scheme.http ? [external_react_["createElement"]("tr", { key: "scheme" },
                            external_react_["createElement"]("th", null, " HTTP Authorization Scheme "),
                            external_react_["createElement"]("td", null,
                                " ",
                                scheme.http.scheme,
                                " ")), scheme.http.scheme === 'bearer' && scheme.http.bearerFormat && external_react_["createElement"]("tr", { key: "bearer" },
                            external_react_["createElement"]("th", null, " Bearer format "),
                            external_react_["createElement"]("td", null,
                                " \"",
                                scheme.http.bearerFormat,
                                "\" "))] : scheme.openId ? external_react_["createElement"]("tr", null,
                        external_react_["createElement"]("th", null, " Connect URL "),
                        external_react_["createElement"]("td", null,
                            external_react_["createElement"]("a", { target: "_blank", href: scheme.openId.connectUrl }, scheme.openId.connectUrl))) : scheme.flows ? Object.keys(scheme.flows).map(function (type) { return external_react_["createElement"](SecuritySchemes_OAuthFlow, { key: type, type: type, flow: scheme.flows[type] }); }) : null))); }));
    };
    return SecurityDefs;
}(external_react_["PureComponent"]));


// CONCATENATED MODULE: ./src/components/ApiInfo/styled.elements.ts



var styled_elements_delimiterWidth = 15;
var styled_elements_ApiInfoWrap = panels_MiddlePanel;
var styled_elements_ApiHeader = headers_H1.extend(styled_elements_templateObject_1 || (styled_elements_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n  margin-top: 0;\n  margin-bottom: 0.5em;\n"], ["\n  margin-top: 0;\n  margin-bottom: 0.5em;\n"])));
var styled_elements_DownloadButton = styled_components["c" /* default */].a(["border:1px solid ", ";color:", ";font-weight:normal;margin-left:0.5em;padding:4px 8px 4px;display:inline-block;text-decoration:none;"], function (props) { return props.theme.colors.main; }, function (props) { return props.theme.colors.main; });
var styled_elements_InfoSpan = styled_components["c" /* default */].span(["&::before{content:'|';display:inline-block;opacity:0.5;width:", "px;text-align:center;}&:last-child::after{display:none;}"], styled_elements_delimiterWidth);
var styled_elements_InfoSpanBoxWrap = styled_components["c" /* default */].div(["overflow:hidden;"]);
var styled_elements_InfoSpanBox = styled_components["c" /* default */].div(["display:flex;flex-wrap:wrap;margin-left:-", "px;"], styled_elements_delimiterWidth);
var styled_elements_templateObject_1;

// CONCATENATED MODULE: ./src/components/ApiInfo/ApiInfo.tsx







var ApiInfo_ApiInfo = /** @class */ (function (_super) {
    external_tslib_["__extends"](ApiInfo, _super);
    function ApiInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApiInfo.prototype.render = function () {
        var store = this.props.store;
        var _a = store.spec, info = _a.info, externalDocs = _a.externalDocs;
        var downloadFilename = info.downloadFileName;
        var downloadLink = info.downloadLink;
        var license = info.license && external_react_["createElement"](styled_elements_InfoSpan, null,
            "License: ",
            external_react_["createElement"]("a", { href: info.license.url }, info.license.name)) || null;
        var website = info.contact && info.contact.url && external_react_["createElement"](styled_elements_InfoSpan, null,
            "URL: ",
            external_react_["createElement"]("a", { href: info.contact.url }, info.contact.url)) || null;
        var email = info.contact && info.contact.email && external_react_["createElement"](styled_elements_InfoSpan, null,
            info.contact.name || 'E-mail',
            ":",
            ' ',
            external_react_["createElement"]("a", { href: 'mailto:' + info.contact.email }, info.contact.email)) || null;
        var terms = info.termsOfService && external_react_["createElement"](styled_elements_InfoSpan, null,
            external_react_["createElement"]("a", { href: info.termsOfService }, "Terms of Service")) || null;
        return external_react_["createElement"](panels_Row, null,
            external_react_["createElement"](panels_MiddlePanel, { className: "api-info" },
                external_react_["createElement"](styled_elements_ApiHeader, null,
                    info.title,
                    " ",
                    external_react_["createElement"]("span", null,
                        "(",
                        info.version,
                        ")")),
                downloadLink && external_react_["createElement"]("p", null,
                    "Download OpenAPI specification:",
                    external_react_["createElement"](styled_elements_DownloadButton, { download: downloadFilename, target: "_blank", href: downloadLink }, "Download")),
                (info.license || info.contact || info.termsOfService) && external_react_["createElement"](styled_elements_InfoSpanBoxWrap, null,
                    external_react_["createElement"](styled_elements_InfoSpanBox, null,
                        email,
                        " ",
                        website,
                        " ",
                        license,
                        " ",
                        terms)) || null,
                externalDocs && external_react_["createElement"]("p", null,
                    external_react_["createElement"]("a", { href: externalDocs.url }, externalDocs.description || externalDocs.url)) || null,
                external_react_["createElement"]("div", null,
                    external_react_["createElement"](Markdown_Markdown, { source: info.description || '', raw: false, components: {
                            'security-definitions': {
                                component: SecuritySchemes_SecurityDefs,
                                propsSelector: function (_store) { return ({
                                    securitySchemes: _store.spec.securitySchemes
                                }); }
                            }
                        }, store: store }))),
            external_react_["createElement"](panels_EmptyDarkRightPanel, null));
    };
    ApiInfo = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], ApiInfo);
    return ApiInfo;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/ApiLogo/styled.elements.tsx


var styled_elements_LogoImgEl = styled_components["c" /* default */].img(["max-height:", ";max-width:", ";width:100%;display:block;"], function (props) { return props.theme.logo.maxHeight; }, function (props) { return props.theme.logo.maxWidth; });
var styled_elements_LogoWrap = styled_components["c" /* default */].div(["text-align:center;"]);
var styled_elements_Link = styled_components["c" /* default */].a(["display:inline-block;"]);
var styled_elements_LinkWrap = function (url) { return function (Component) { return external_react_["createElement"](styled_elements_Link, { href: url }, Component); }; };

// CONCATENATED MODULE: ./src/components/ApiLogo/ApiLogo.tsx




var ApiLogo_ApiLogo = /** @class */ (function (_super) {
    external_tslib_["__extends"](ApiLogo, _super);
    function ApiLogo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApiLogo.prototype.render = function () {
        var info = this.props.info;
        var logoInfo = info['x-logo'];
        if (!logoInfo || !logoInfo.url) {
            return null;
        }
        var logo = external_react_["createElement"](styled_elements_LogoImgEl, { src: logoInfo.url, style: {
                backgroundColor: logoInfo.backgroundColor
            } });
        return external_react_["createElement"](styled_elements_LogoWrap, null,
            info.contact && info.contact.url ? styled_elements_LinkWrap(info.contact.url)(logo) : logo,
            ' ');
    };
    ApiLogo = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], ApiLogo);
    return ApiLogo;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/SecurityRequirement/SecuirityRequirement.tsx





var SecuirityRequirement_ScopeName = styled_components["c" /* default */].code(["font-size:", ";font-family:", ";border:1px solid ", ";margin:0 3px;padding:0.2em;display:inline-block;line-height:1;"], function (props) { return props.theme.code.fontSize; }, function (props) { return props.theme.code.fontFamily; }, function (props) { return Object(external_polished_["transparentize"])(0.85, props.theme.colors.text); });
var SecuirityRequirement_SecurityRequirement = /** @class */ (function (_super) {
    external_tslib_["__extends"](SecurityRequirement, _super);
    function SecurityRequirement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityRequirement.prototype.render = function () {
        var security = this.props.security;
        return security.schemes.map(function (scheme, idx) {
            return external_react_["createElement"]("div", { key: scheme.id },
                external_react_["createElement"]("a", { href: '#' + scheme.sectionId }, scheme.id),
                scheme.scopes.length > 0 && ' (',
                scheme.scopes.map(function (scope) { return external_react_["createElement"](SecuirityRequirement_ScopeName, { key: scope }, scope); }),
                scheme.scopes.length > 0 && ') ',
                idx < security.schemes.length - 1 && ' and ');
        });
    };
    return SecurityRequirement;
}(external_react_["PureComponent"]));

var SecuirityRequirement_AuthHeaderColumn = styled_components["c" /* default */].td([""]);
var SecuirityRequirement_SecuritiesColumn = styled_components["c" /* default */].td(["width:", ";"], function (props) { return props.theme.schemaView.defaultDetailsWidth; });
var SecuirityRequirement_AuthHeader = headers_UnderlinedHeader.extend(SecuirityRequirement_templateObject_1 || (SecuirityRequirement_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
var SecuirityRequirement_Table = styled_components["c" /* default */].table(["width:100%;"]);
var SecuirityRequirement_SecurityRequirements = /** @class */ (function (_super) {
    external_tslib_["__extends"](SecurityRequirements, _super);
    function SecurityRequirements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityRequirements.prototype.render = function () {
        var securities = this.props.securities;
        if (!securities.length) {
            return null;
        }
        return external_react_["createElement"](SecuirityRequirement_Table, null,
            external_react_["createElement"]("tbody", null,
                external_react_["createElement"]("tr", null,
                    external_react_["createElement"](SecuirityRequirement_AuthHeaderColumn, null,
                        external_react_["createElement"](SecuirityRequirement_AuthHeader, null, "Authorizations: ")),
                    external_react_["createElement"](SecuirityRequirement_SecuritiesColumn, null, securities.map(function (security, idx) { return external_react_["createElement"](SecuirityRequirement_SecurityRequirement, { key: idx, security: security }); })))));
    };
    return SecurityRequirements;
}(external_react_["PureComponent"]));

var SecuirityRequirement_templateObject_1;

// CONCATENATED MODULE: ./src/components/SelectOnClick/SelectOnClick.tsx



var SelectOnClick_SelectOnClick = /** @class */ (function (_super) {
    external_tslib_["__extends"](SelectOnClick, _super);
    function SelectOnClick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            ClipboardService.selectElement(_this.child);
        };
        return _this;
    }
    SelectOnClick.prototype.render = function () {
        var _this = this;
        var children = this.props.children;
        return external_react_["createElement"]("div", { ref: function (el) { return _this.child = el; }, onClick: this.handleClick }, children);
    };
    return SelectOnClick;
}(external_react_["PureComponent"]));


// CONCATENATED MODULE: ./src/components/Endpoint/styled.elements.ts


var styled_elements_OperationEndpointWrap = styled_components["c" /* default */].div(["cursor:pointer;position:relative;margin-bottom:5px;"]);
var styled_elements_ServerRelativeURL = styled_components["c" /* default */].span(["font-family:", ";margin-left:10px;"], function (props) { return props.theme.headingsFont.family; });
var styled_elements_EndpointInfo = Object(styled_components["g" /* withProps */])(styled_components["c" /* default */].div)(Endpoint_styled_elements_templateObject_1 || (Endpoint_styled_elements_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n  padding: 10px 30px 10px ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  display: block;\n  font-weight: 300;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  border: ", ";\n  border-bottom: ", ";\n  transition: border-color 0.25s ease;\n\n  ", "\n\n  .", " {\n    color: ", "\n  }\n"], ["\n  padding: 10px 30px 10px ", ";\n  border-radius: ", ";\n  background-color: ", ";\n  display: block;\n  font-weight: 300;\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  border: ", ";\n  border-bottom: ", ";\n  transition: border-color 0.25s ease;\n\n  ", "\n\n  .", " {\n    color: ", "\n  }\n"])), function (props) { return props.inverted ? '10px' : '20px'; }, function (props) { return props.inverted ? '0' : '4px 4px 0 0'; }, function (props) { return props.inverted ? 'transparent' : '#222d32'; }, function (props) { return props.inverted ? '0' : '1px solid transparent'; }, function (props) { return props.inverted ? '1px solid #ccc' : '0'; }, function (props) { return props.expanded && !props.inverted && 'border-color: #3c4448;' || ''; }, styled_elements_ServerRelativeURL, function (props) { return props.inverted ? props.theme.colors.text : '#ffffff'; });
var styled_elements_HttpVerb = Object(styled_components["g" /* withProps */])(styled_components["c" /* default */].span).attrs({
    className: function (props) { return "http-verb " + props.type; }
})(styled_elements_templateObject_2 || (styled_elements_templateObject_2 = external_tslib_["__makeTemplateObject"](["\n  font-size: 0.929em;\n  line-height: 20px;\n  background-color: ", ";\n  color: #ffffff;\n  padding: 3px 10px;\n  text-transform: uppercase;\n  font-family: ", ";\n  margin: 0;\n"], ["\n  font-size: 0.929em;\n  line-height: 20px;\n  background-color: ", ";\n  color: #ffffff;\n  padding: 3px 10px;\n  text-transform: uppercase;\n  font-family: ", ";\n  margin: 0;\n"])), function (props) { return props.theme.colors.http[props.type] || '#999999'; }, function (props) { return props.theme.headingsFont.family; }); // background: transparent;
// border-bottom: 1px solid #cccccc;
// border-color: transparent;
// border-bottom: 1px solid rgba(0,0,0,0.33);
// padding-left: 10px;
var styled_elements_ServersOverlay = Object(styled_components["g" /* withProps */])(styled_components["c" /* default */].div)(styled_elements_templateObject_3 || (styled_elements_templateObject_3 = external_tslib_["__makeTemplateObject"](["\n  position: absolute;\n  width: 100%;\n  z-index: 100;\n  background: #fafafa;\n  color: #263238;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.33);\n  overflow: hidden;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  transition: all 0.25s ease;\n\n  ", "\n"], ["\n  position: absolute;\n  width: 100%;\n  z-index: 100;\n  background: #fafafa;\n  color: #263238;\n  box-sizing: border-box;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.33);\n  overflow: hidden;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  transition: all 0.25s ease;\n\n  ", "\n"])), function (props) { return props.expanded ? '' : 'transform: translateY(-50%) scaleY(0);'; });
var styled_elements_ServerItem = styled_components["c" /* default */].div(["padding:10px;"]);
var styled_elements_ServerUrl = styled_components["c" /* default */].div(["padding:5px;border:1px solid #ccc;background:#fff;word-break:break-all;color:", ";> span{color:", ";}"], function (props) { return props.theme.colors.main; }, function (props) { return props.theme.colors.text; });
var Endpoint_styled_elements_templateObject_1, styled_elements_templateObject_2, styled_elements_templateObject_3;

// CONCATENATED MODULE: ./src/components/Endpoint/Endpoint.tsx






var Endpoint_Endpoint = /** @class */ (function (_super) {
    external_tslib_["__extends"](Endpoint, _super);
    function Endpoint(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = function () {
            _this.setState({
                expanded: !_this.state.expanded
            });
        };
        _this.state = {
            expanded: false
        };
        return _this;
    }
    Endpoint.prototype.render = function () {
        var _this = this;
        var _a = this.props, operation = _a.operation, inverted = _a.inverted, hideHostname = _a.hideHostname;
        var expanded = this.state.expanded; // TODO: highlight server variables, e.g. https://{user}.test.com
        return external_react_["createElement"](OptionsProvider_OptionsContext.Consumer, null, function (options) { return external_react_["createElement"](styled_elements_OperationEndpointWrap, null,
            external_react_["createElement"](styled_elements_EndpointInfo, { onClick: _this.toggle, expanded: expanded, inverted: inverted },
                external_react_["createElement"](styled_elements_HttpVerb, { type: operation.httpVerb },
                    " ",
                    operation.httpVerb),
                ' ',
                external_react_["createElement"](styled_elements_ServerRelativeURL, null, operation.path),
                external_react_["createElement"](shelfs_ShelfIcon, { float: 'right', color: inverted ? 'black' : 'white', size: '20px', direction: expanded ? 'up' : 'down', style: {
                        marginRight: '-25px'
                    } })),
            external_react_["createElement"](styled_elements_ServersOverlay, { expanded: expanded }, operation.servers.map(function (server) { return external_react_["createElement"](styled_elements_ServerItem, { key: server.url },
                external_react_["createElement"]("div", null, server.description),
                external_react_["createElement"](SelectOnClick_SelectOnClick, null,
                    external_react_["createElement"](styled_elements_ServerUrl, null,
                        !(hideHostname || options.hideHostname) && external_react_["createElement"]("span", null, server.url),
                        operation.path))); }))); });
    };
    return Endpoint;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/DropdownOrLabel/DropdownOrLabel.tsx



function DropdownOrLabel_DropdownOrLabel(props) {
    var _a = props.Label, Label = _a === void 0 ? dropdown_MimeLabel : _a, _b = props.Dropdown, Dropdown = _b === void 0 ? dropdown_SimpleDropdown : _b;
    if (props.options.length === 1) {
        return external_react_["createElement"](Label, null, props.options[0].label);
    }
    return external_react_["createElement"](Dropdown, external_tslib_["__assign"]({}, props));
}

// CONCATENATED MODULE: ./src/common-elements/fields.ts




var fields_ClickablePropertyNameCell = fields_layout_PropertyNameCell.extend(fields_templateObject_1 || (fields_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
var fields_FieldLabel = styled_components["c" /* default */].span(["vertical-align:middle;font-size:0.929em;line-height:20px;"]);
var fields_TypePrefix = fields_FieldLabel.extend(fields_templateObject_2 || (fields_templateObject_2 = external_tslib_["__makeTemplateObject"](["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return Object(external_polished_["transparentize"])(0.2, props.theme.schemaView.typeNameColor); });
var fields_TypeName = fields_FieldLabel.extend(fields_templateObject_3 || (fields_templateObject_3 = external_tslib_["__makeTemplateObject"](["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return props.theme.schemaView.typeNameColor; });
var fields_TypeTitle = fields_FieldLabel.extend(fields_templateObject_4 || (fields_templateObject_4 = external_tslib_["__makeTemplateObject"](["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), function (props) { return props.theme.schemaView.typeTitleColor; });
var fields_TypeFormat = fields_TypeName;
var fields_RequiredLabel = fields_FieldLabel.withComponent('div').extend(fields_templateObject_5 || (fields_templateObject_5 = external_tslib_["__makeTemplateObject"](["\n  color: ", ";\n  font-size: 11px;\n  font-weight: normal;\n  margin-left: 20px;\n  line-height: 1;\n  font-weight: normal;\n"], ["\n  color: ", ";\n  font-size: 11px;\n  font-weight: normal;\n  margin-left: 20px;\n  line-height: 1;\n  font-weight: normal;\n"])), function (props) { return props.theme.schemaView.requireLabelColor; });
var fields_RecursiveLabel = fields_FieldLabel.extend(fields_templateObject_6 || (fields_templateObject_6 = external_tslib_["__makeTemplateObject"](["\n  color: #dd9900;\n  font-size: 13px;\n"], ["\n  color: #dd9900;\n  font-size: 13px;\n"])));
var fields_NullableLabel = fields_FieldLabel.extend(fields_templateObject_7 || (fields_templateObject_7 = external_tslib_["__makeTemplateObject"](["\n  color: #3195a6;\n  font-size: 13px;\n"], ["\n  color: #3195a6;\n  font-size: 13px;\n"])));
var fields_PatternLabel = fields_FieldLabel.extend(fields_templateObject_8 || (fields_templateObject_8 = external_tslib_["__makeTemplateObject"](["\n  color: #3195a6;\n  &::before,\n  &::after {\n    content: '/';\n    font-weight: bold;\n  }\n"], ["\n  color: #3195a6;\n  &::before,\n  &::after {\n    content: '/';\n    font-weight: bold;\n  }\n"])));
var fields_ExampleValue = styled_components["c" /* default */].span(["font-family:", ";background-color:", ";border:1px solid ", ";margin:0 3px;padding:0.4em 0.2em 0.2em;font-size:0.8em;border-radius:2px;color:", ";display:inline-block;min-width:20px;text-align:center;line-height:1;vertical-align:middle;"], function (props) { return props.theme.code.fontFamily; }, function (props) { return Object(external_polished_["transparentize"])(0.98, props.theme.colors.text); }, function (props) { return Object(external_polished_["transparentize"])(0.85, props.theme.colors.text); }, function (props) { return Object(external_polished_["transparentize"])(0.1, props.theme.colors.text); });
var fields_ConstraintItem = fields_FieldLabel.extend(fields_templateObject_9 || (fields_templateObject_9 = external_tslib_["__makeTemplateObject"](["\n  background-color: ", ";\n  color: ", ";\n  margin-right: 6px;\n  margin-left: 6px;\n  border-radius: 2px;\n  padding: 0 4px;\n"], ["\n  background-color: ", ";\n  color: ", ";\n  margin-right: 6px;\n  margin-left: 6px;\n  border-radius: 2px;\n  padding: 0 4px;\n"])), function (props) { return Object(external_polished_["transparentize"])(0.85, props.theme.colors.main); }, function (props) { return Object(external_polished_["transparentize"])(0.4, props.theme.colors.main); });
var fields_templateObject_1, fields_templateObject_2, fields_templateObject_3, fields_templateObject_4, fields_templateObject_5, fields_templateObject_6, fields_templateObject_7, fields_templateObject_8, fields_templateObject_9;

// CONCATENATED MODULE: ./src/components/Fields/EnumValues.tsx



var EnumValues_EnumValues = /** @class */ (function (_super) {
    external_tslib_["__extends"](EnumValues, _super);
    function EnumValues() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EnumValues.prototype.render = function () {
        var _a = this.props, values = _a.values, type = _a.type;
        if (!values.length) {
            return null;
        }
        return external_react_["createElement"]("div", null,
            external_react_["createElement"](fields_FieldLabel, null,
                type === 'array' ? 'Items' : '',
                " Enum:"),
            values.map(function (value, idx) { return external_react_["createElement"](fields_ExampleValue, { key: idx },
                JSON.stringify(value),
                " "); }));
    };
    return EnumValues;
}(external_react_["PureComponent"]));


// CONCATENATED MODULE: ./src/components/Fields/FieldContstraints.tsx



var FieldContstraints_ConstraintsView = /** @class */ (function (_super) {
    external_tslib_["__extends"](ConstraintsView, _super);
    function ConstraintsView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConstraintsView.prototype.render = function () {
        if (this.props.constraints.length === 0) {
            return null;
        }
        return external_react_["createElement"]("span", null,
            ' ',
            this.props.constraints.map(function (constraint) { return external_react_["createElement"](fields_ConstraintItem, { key: constraint },
                " ",
                constraint,
                " "); }));
    };
    return ConstraintsView;
}(external_react_["PureComponent"]));


// CONCATENATED MODULE: ./src/components/Fields/FieldDetail.tsx



var FieldDetail_FieldDetail = /** @class */ (function (_super) {
    external_tslib_["__extends"](FieldDetail, _super);
    function FieldDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldDetail.prototype.render = function () {
        if (this.props.value === undefined) {
            return null;
        }
        return external_react_["createElement"]("div", null,
            external_react_["createElement"](fields_FieldLabel, null,
                " ",
                this.props.label,
                " "),
            ' ',
            external_react_["createElement"](fields_ExampleValue, null,
                " ",
                JSON.stringify(this.props.value),
                " "));
    };
    return FieldDetail;
}(external_react_["PureComponent"]));


// CONCATENATED MODULE: ./src/components/Fields/FieldDetails.tsx








var FieldDetails_FieldDetails = /** @class */ (function (_super) {
    external_tslib_["__extends"](FieldDetails, _super);
    function FieldDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FieldDetails.prototype.render = function () {
        var _a = this.props, showExamples = _a.showExamples, field = _a.field, renderDiscriminatorSwitch = _a.renderDiscriminatorSwitch;
        var schema = field.schema, description = field.description, example = field.example, deprecated = field.deprecated;
        return external_react_["createElement"]("div", null,
            external_react_["createElement"]("div", null,
                external_react_["createElement"](fields_TypePrefix, null, schema.typePrefix),
                external_react_["createElement"](fields_TypeName, null, schema.displayType),
                schema.format && external_react_["createElement"](fields_TypeFormat, null,
                    ' <',
                    schema.format,
                    ">"),
                schema.title && external_react_["createElement"](fields_TypeTitle, null,
                    " (",
                    schema.title,
                    ") "),
                external_react_["createElement"](FieldContstraints_ConstraintsView, { constraints: schema.constraints }),
                schema.nullable && external_react_["createElement"](fields_NullableLabel, null, " Nullable "),
                schema.pattern && external_react_["createElement"](fields_PatternLabel, null, schema.pattern),
                schema.isCircular && external_react_["createElement"](fields_RecursiveLabel, null, " Recursive ")),
            deprecated && external_react_["createElement"]("div", null,
                external_react_["createElement"](shelfs_Badge, { type: "warning" }, " Deprecated ")),
            external_react_["createElement"](FieldDetail_FieldDetail, { label: 'Default:', value: schema.default }),
            !renderDiscriminatorSwitch && external_react_["createElement"](EnumValues_EnumValues, { type: schema.type, values: schema.enum }),
            ' ',
            showExamples && external_react_["createElement"](FieldDetail_FieldDetail, { label: 'Example:', value: example }),
            external_react_["createElement"]("div", null,
                external_react_["createElement"](Markdown_Markdown, { dense: true, source: description })),
            renderDiscriminatorSwitch && renderDiscriminatorSwitch(this.props) || null);
    };
    return FieldDetails;
}(external_react_["PureComponent"]));


// CONCATENATED MODULE: ./src/components/Schema/ArraySchema.tsx




var ArraySchema_ArraySchema = /** @class */ (function (_super) {
    external_tslib_["__extends"](ArraySchema, _super);
    function ArraySchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArraySchema.prototype.render = function () {
        var itemsSchema = this.props.schema.items;
        return external_react_["createElement"]("div", null,
            external_react_["createElement"](schema_ArrayOpenningLabel, null, " Array "),
            external_react_["createElement"](Schema_Schema, external_tslib_["__assign"]({}, this.props, { schema: itemsSchema })),
            external_react_["createElement"](schema_ArrayClosingLabel, null));
    };
    return ArraySchema;
}(external_react_["PureComponent"]));


// CONCATENATED MODULE: ./src/components/Schema/DiscriminatorDropdown.tsx




var DiscriminatorDropdown_DiscriminatorDropdown = /** @class */ (function (_super) {
    external_tslib_["__extends"](DiscriminatorDropdown, _super);
    function DiscriminatorDropdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changeActiveChild = function (_a) {
            var value = _a.value;
            var idx = parseInt(value, 10);
            _this.props.parent.activateOneOf(idx);
        };
        return _this;
    }
    DiscriminatorDropdown.prototype.sortOptions = function (options, enumValues) {
        if (enumValues.length === 0) {
            return;
        }
        var enumOrder = {};
        enumValues.forEach(function (enumItem, idx) {
            enumOrder[enumItem] = idx;
        });
        options.sort(function (a, b) {
            return enumOrder[a.label] > enumOrder[b.label] ? 1 : -1;
        });
    };
    DiscriminatorDropdown.prototype.render = function () {
        var _a = this.props, parent = _a.parent, enumValues = _a.enumValues;
        if (parent.oneOf === undefined) {
            return null;
        }
        var options = parent.oneOf.map(function (subSchema, idx) {
            return {
                value: idx.toString(),
                label: subSchema.title
            };
        });
        var activeItem = options[parent.activeOneOf];
        this.sortOptions(options, enumValues);
        return external_react_["createElement"](dropdown_StyledDropdown, { value: activeItem, options: options, onChange: this.changeActiveChild });
    };
    DiscriminatorDropdown = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], DiscriminatorDropdown);
    return DiscriminatorDropdown;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/Schema/ObjectSchema.tsx







var ObjectSchema_ObjectSchema = /** @class */ (function (_super) {
    external_tslib_["__extends"](ObjectSchema, _super);
    function ObjectSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ObjectSchema.prototype, "parentSchema", {
        get: function () {
            return this.props.discriminator.parentSchema;
        },
        enumerable: true,
        configurable: true
    });
    ObjectSchema.prototype.render = function () {
        var _this = this;
        var _a = this.props, _b = _a.schema.fields, fields = _b === void 0 ? [] : _b, showTitle = _a.showTitle, discriminator = _a.discriminator;
        var needFilter = this.props.skipReadOnly || this.props.skipWriteOnly;
        var filteredFields = needFilter ? fields.filter(function (item) {
            return _this.props.skipReadOnly && !item.schema.readOnly || _this.props.skipWriteOnly && !item.schema.writeOnly;
        }) : fields;
        return external_react_["createElement"](fields_layout_PropertiesTable, null,
            showTitle && external_react_["createElement"](fields_layout_PropertiesTableCaption, null, this.props.schema.title),
            external_react_["createElement"]("tbody", null, Object(utils["z" /* mapWithLast */])(filteredFields, function (field, isLast) {
                return external_react_["createElement"](Field_Field, { key: field.name, isLast: isLast, field: field, renderDiscriminatorSwitch: discriminator && discriminator.fieldName === field.name && (function () { return external_react_["createElement"](DiscriminatorDropdown_DiscriminatorDropdown, { parent: _this.parentSchema, enumValues: field.schema.enum }); }) || undefined, className: field.expanded ? 'expanded' : undefined, showExamples: false, skipReadOnly: _this.props.skipReadOnly, skipWriteOnly: _this.props.skipWriteOnly, showTitle: _this.props.showTitle });
            })));
    };
    ObjectSchema = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], ObjectSchema);
    return ObjectSchema;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/Schema/OneOfSchema.tsx





var OneOfSchema_OneOfButton = /** @class */ (function (_super) {
    external_tslib_["__extends"](OneOfButton, _super);
    function OneOfButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activateOneOf = function () {
            _this.props.schema.activateOneOf(_this.props.idx);
        };
        return _this;
    }
    OneOfButton.prototype.render = function () {
        var _a = this.props, idx = _a.idx, schema = _a.schema, subSchema = _a.subSchema;
        return external_react_["createElement"](schema_OneOfButton, { active: idx === schema.activeOneOf, onClick: this.activateOneOf }, subSchema.title || subSchema.typePrefix + subSchema.displayType);
    };
    OneOfButton = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], OneOfButton);
    return OneOfButton;
}(external_react_["PureComponent"]));

var OneOfSchema_OneOfSchema = /** @class */ (function (_super) {
    external_tslib_["__extends"](OneOfSchema, _super);
    function OneOfSchema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OneOfSchema.prototype.render = function () {
        var _a = this.props, oneOf = _a.schema.oneOf, schema = _a.schema;
        if (oneOf === undefined) {
            return null;
        }
        return external_react_["createElement"]("div", null,
            external_react_["createElement"](schema_OneOfLabel, null,
                " ",
                schema.oneOfType,
                " "),
            external_react_["createElement"](schema_OneOfList, null, oneOf.map(function (subSchema, idx) { return external_react_["createElement"](OneOfSchema_OneOfButton, { key: subSchema._$ref, schema: schema, subSchema: subSchema, idx: idx }); })),
            external_react_["createElement"](Schema_Schema, external_tslib_["__assign"]({}, this.props, { schema: oneOf[schema.activeOneOf] })));
    };
    OneOfSchema = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], OneOfSchema);
    return OneOfSchema;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/Schema/Schema.tsx








var Schema_Schema = /** @class */ (function (_super) {
    external_tslib_["__extends"](Schema, _super);
    function Schema() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Schema.prototype.render = function () {
        var schema = this.props.schema;
        if (!schema) {
            return external_react_["createElement"]("em", null, " Schema not provided ");
        }
        var type = schema.type, oneOf = schema.oneOf, discriminatorProp = schema.discriminatorProp, isCircular = schema.isCircular;
        if (isCircular) {
            return external_react_["createElement"]("div", null,
                external_react_["createElement"](fields_TypeName, null, schema.displayType),
                schema.title && external_react_["createElement"](fields_TypeTitle, null,
                    " ",
                    schema.title,
                    " "),
                external_react_["createElement"](fields_RecursiveLabel, null, " Recursive "));
        }
        if (discriminatorProp !== undefined) {
            return external_react_["createElement"](ObjectSchema_ObjectSchema, external_tslib_["__assign"]({}, external_tslib_["__assign"]({}, this.props, { schema: oneOf[schema.activeOneOf] }), { discriminator: {
                    fieldName: discriminatorProp,
                    parentSchema: schema
                } }));
        }
        if (oneOf !== undefined) {
            return external_react_["createElement"](OneOfSchema_OneOfSchema, external_tslib_["__assign"]({ schema: schema }, this.props));
        }
        switch (type) {
            case 'object':
                return external_react_["createElement"](ObjectSchema_ObjectSchema, external_tslib_["__assign"]({}, this.props));
            case 'array':
                return external_react_["createElement"](ArraySchema_ArraySchema, external_tslib_["__assign"]({}, this.props));
        } // TODO: maybe adjust FieldDetails to accept schema
        var field = {
            schema: schema,
            name: '',
            required: false,
            description: schema.description,
            deprecated: false,
            toggle: function () { return null; },
            expanded: false
        }; // cast needed for hot-loader to not fail
        return external_react_["createElement"]("div", null,
            external_react_["createElement"](FieldDetails_FieldDetails, { field: field }));
    };
    Schema = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], Schema);
    return Schema;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/Fields/Field.tsx







var Field_Field = /** @class */ (function (_super) {
    external_tslib_["__extends"](Field, _super);
    function Field() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggle = function () {
            _this.props.field.toggle();
        };
        return _this;
    }
    Field.prototype.render = function () {
        var _a = this.props, className = _a.className, field = _a.field, isLast = _a.isLast;
        var name = field.name, expanded = field.expanded, deprecated = field.deprecated, required = field.required;
        var withSubSchema = !field.schema.isPrimitive && !field.schema.isCircular;
        var paramName = withSubSchema ? external_react_["createElement"](fields_ClickablePropertyNameCell, { onClick: this.toggle, className: deprecated ? 'deprecated' : '' },
            external_react_["createElement"](fields_layout_PropertyBullet, null),
            name,
            external_react_["createElement"](shelfs_ShelfIcon, { size: '1.2em', direction: expanded ? 'down' : 'right' }),
            required && external_react_["createElement"](fields_RequiredLabel, null, " required ")) : external_react_["createElement"](fields_layout_PropertyNameCell, { className: deprecated ? 'deprecated' : undefined },
            external_react_["createElement"](fields_layout_PropertyBullet, null),
            name,
            required && external_react_["createElement"](fields_RequiredLabel, null, " required "));
        return external_react_["createElement"](external_react_["Fragment"], null,
            external_react_["createElement"]("tr", { className: isLast ? 'last ' + className : className },
                paramName,
                external_react_["createElement"](fields_layout_PropertyDetailsCell, null,
                    external_react_["createElement"](FieldDetails_FieldDetails, external_tslib_["__assign"]({}, this.props)))),
            field.expanded && withSubSchema && external_react_["createElement"]("tr", { key: field.name + 'inner' },
                external_react_["createElement"](fields_layout_PropertyCellWithInner, { colSpan: 2 },
                    external_react_["createElement"](fields_layout_InnerPropertiesWrap, null,
                        external_react_["createElement"](Schema_Schema, { schema: field.schema, skipReadOnly: this.props.skipReadOnly, skipWriteOnly: this.props.skipWriteOnly, showTitle: this.props.showTitle })))));
    };
    return Field;
}(external_react_["PureComponent"]));


// CONCATENATED MODULE: ./src/components/Parameters/ParametersGroup.tsx






var ParametersGroup_ParametersGroup = /** @class */ (function (_super) {
    external_tslib_["__extends"](ParametersGroup, _super);
    function ParametersGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ParametersGroup.prototype.render = function () {
        var _a = this.props, place = _a.place, parameters = _a.parameters;
        if (!parameters || !parameters.length) {
            return null;
        }
        return external_react_["createElement"]("div", { key: place },
            external_react_["createElement"](headers_UnderlinedHeader, null,
                place,
                " Parameters"),
            external_react_["createElement"](fields_layout_PropertiesTable, null,
                external_react_["createElement"]("tbody", null, Object(utils["z" /* mapWithLast */])(parameters, function (field, isLast) { return external_react_["createElement"](Field_Field, { key: field.name, isLast: isLast, field: field, showExamples: true }); }))));
    };
    return ParametersGroup;
}(external_react_["PureComponent"]));


// CONCATENATED MODULE: ./src/components/MediaTypeSwitch/MediaTypesSwitch.tsx



var MediaTypesSwitch_MediaTypesSwitch = /** @class */ (function (_super) {
    external_tslib_["__extends"](MediaTypesSwitch, _super);
    function MediaTypesSwitch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.switchMedia = function (_a) {
            var value = _a.value;
            if (_this.props.content) {
                _this.props.content.activate(parseInt(value, 10));
            }
        };
        return _this;
    }
    MediaTypesSwitch.prototype.render = function () {
        var content = this.props.content;
        if (!content || !content.mediaTypes || !content.mediaTypes.length) {
            return null;
        }
        var activeMimeIdx = content.activeMimeIdx;
        var options = content.mediaTypes.map(function (mime, idx) {
            return {
                label: mime.name,
                value: idx.toString()
            };
        });
        return external_react_["createElement"]("div", null,
            this.props.renderDropdown({
                value: options[activeMimeIdx],
                options: options,
                onChange: this.switchMedia
            }),
            this.props.children(content.active));
    };
    MediaTypesSwitch = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], MediaTypesSwitch);
    return MediaTypesSwitch;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/Schema/index.ts






// CONCATENATED MODULE: ./src/components/Parameters/Parameters.tsx







function Parameters_safePush(obj, prop, item) {
    if (!obj[prop]) {
        obj[prop] = [];
    }
    obj[prop].push(item);
}
var Parameters_PARAM_PLACES = ['path', 'query', 'cookie', 'header'];
var Parameters_Parameters = /** @class */ (function (_super) {
    external_tslib_["__extends"](Parameters, _super);
    function Parameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Parameters.prototype.orderParams = function (params) {
        var res = {};
        params.forEach(function (param) {
            Parameters_safePush(res, param.in, param);
        });
        return res;
    };
    Parameters.prototype.render = function () {
        var _a = this.props, body = _a.body, _b = _a.parameters, parameters = _b === void 0 ? [] : _b;
        if (body === undefined && parameters === undefined) {
            return null;
        }
        var paramsMap = this.orderParams(parameters);
        var paramsPlaces = parameters.length > 0 ? Parameters_PARAM_PLACES : [];
        var bodyContent = body && body.content;
        return external_react_["createElement"]("div", null,
            paramsPlaces.map(function (place) { return external_react_["createElement"](ParametersGroup_ParametersGroup, { key: place, place: place, parameters: paramsMap[place] }); }),
            bodyContent && external_react_["createElement"](Parameters_BodyContent, { content: bodyContent }));
    };
    return Parameters;
}(external_react_["PureComponent"]));

function Parameters_DropdownWithinHeader(props) {
    return external_react_["createElement"](headers_UnderlinedHeader, { key: "header" },
        "Request Body schema: ",
        external_react_["createElement"](DropdownOrLabel_DropdownOrLabel, external_tslib_["__assign"]({}, props)));
}
function Parameters_BodyContent(props) {
    var content = props.content;
    return external_react_["createElement"](MediaTypesSwitch_MediaTypesSwitch, { content: content, renderDropdown: Parameters_DropdownWithinHeader }, function (_a) {
        var schema = _a.schema;
        return external_react_["createElement"](Schema_Schema, { skipReadOnly: true, key: "schema", schema: schema });
    });
}

// CONCATENATED MODULE: ./src/common-elements/Tooltip.tsx



var Tooltip_Wrapper = styled_components["c" /* default */].div(["position:relative;"]);
var Tooltip_Tip = styled_components["c" /* default */].div(["position:absolute;min-width:80px;max-width:500px;background:#fff;bottom:100%;left:50%;margin-bottom:10px;transform:translateX(-50%);border-radius:4px;padding:0.3em 0.6em;text-align:center;"]);
var Tooltip_Content = styled_components["c" /* default */].div(["background:#fff;color:#000;display:inline;font-size:0.85em;white-space:nowrap;"]);
var Tooltip_Arrow = styled_components["c" /* default */].div(["position:absolute;width:0;height:0;bottom:-5px;left:50%;margin-left:-5px;border-left:solid transparent 5px;border-right:solid transparent 5px;border-top:solid #fff 5px;"]);
var Tooltip_Gap = styled_components["c" /* default */].div(["position:absolute;width:100%;height:20px;bottom:-20px;"]);
var Tooltip_Tooltip = /** @class */ (function (_super) {
    external_tslib_["__extends"](Tooltip, _super);
    function Tooltip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tooltip.prototype.render = function () {
        var _a = this.props, open = _a.open, title = _a.title, children = _a.children;
        return external_react_["createElement"](Tooltip_Wrapper, null,
            children,
            open && external_react_["createElement"](Tooltip_Tip, null,
                external_react_["createElement"](Tooltip_Content, null, title),
                external_react_["createElement"](Tooltip_Arrow, null),
                external_react_["createElement"](Tooltip_Gap, null)));
    };
    return Tooltip;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/common-elements/CopyButtonWrapper.tsx




var CopyButtonWrapper_CopyButtonWrapper = /** @class */ (function (_super) {
    external_tslib_["__extends"](CopyButtonWrapper, _super);
    function CopyButtonWrapper(props) {
        var _this = _super.call(this, props) || this;
        _this.copy = function () {
            var content = typeof _this.props.data === 'string' ? _this.props.data : JSON.stringify(_this.props.data, null, 2);
            ClipboardService.copyCustom(content);
            _this.showTooltip();
        };
        _this.renderCopyButton = function () {
            return external_react_["createElement"]("span", { onClick: _this.copy },
                external_react_["createElement"](Tooltip_Tooltip, { title: ClipboardService.isSupported() ? 'Copied' : 'Not supported in your browser', open: _this.state.tooltipShown }, "Copy"));
        };
        _this.state = {
            tooltipShown: false
        };
        return _this;
    }
    CopyButtonWrapper.prototype.render = function () {
        return this.props.children({
            renderCopyButton: this.renderCopyButton
        });
    };
    CopyButtonWrapper.prototype.showTooltip = function () {
        var _this = this;
        this.setState({
            tooltipShown: true
        });
        setTimeout(function () {
            _this.setState({
                tooltipShown: false
            });
        }, 1500);
    };
    return CopyButtonWrapper;
}(external_react_["PureComponent"]));


// CONCATENATED MODULE: ./src/utils/jsonToHtml.ts
var jsonToHtml_level = 1;
var COLLAPSE_LEVEL = 2;
function jsonToHTML(json) {
    jsonToHtml_level = 1;
    var output = '';
    output += '<div class="redoc-json">';
    output += valueToHTML(json);
    output += '</div>';
    return output;
}
function htmlEncode(t) {
    return t !== undefined ? t.toString().replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
}
function decorateWithSpan(value, className) {
    return '<span class="' + className + '">' + htmlEncode(value) + '</span>';
}
function valueToHTML(value) {
    var valueType = typeof value;
    var output = '';
    if (value === undefined || value === null) {
        output += decorateWithSpan('null', 'type-null');
    }
    else if (value && value.constructor === Array) {
        jsonToHtml_level++;
        output += arrayToHTML(value);
        jsonToHtml_level--;
    }
    else if (value && value.constructor === Date) {
        output += decorateWithSpan('"' + value.toISOString() + '"', 'type-string');
    }
    else if (valueType === 'object') {
        jsonToHtml_level++;
        output += objectToHTML(value);
        jsonToHtml_level--;
    }
    else if (valueType === 'number') {
        output += decorateWithSpan(value, 'type-number');
    }
    else if (valueType === 'string') {
        if (/^(http|https):\/\/[^\s]+$/.test(value)) {
            output += decorateWithSpan('"', 'type-string') + '<a href="' + value + '">' + htmlEncode(value) + '</a>' + decorateWithSpan('"', 'type-string');
        }
        else {
            output += decorateWithSpan('"' + value + '"', 'type-string');
        }
    }
    else if (valueType === 'boolean') {
        output += decorateWithSpan(value, 'type-boolean');
    }
    return output;
}
function arrayToHTML(json) {
    var collapsed = jsonToHtml_level > COLLAPSE_LEVEL ? 'collapsed' : '';
    var output = '<div class="collapser"></div>[<span class="ellipsis"></span><ul class="array collapsible">';
    var hasContents = false;
    var length = json.length;
    for (var i = 0; i < length; i++) {
        hasContents = true;
        output += '<li><div class="hoverable ' + collapsed + '">';
        output += valueToHTML(json[i]);
        if (i < length - 1) {
            output += ',';
        }
        output += '</div></li>';
    }
    output += '</ul>]';
    if (!hasContents) {
        output = '[ ]';
    }
    return output;
}
function objectToHTML(json) {
    var collapsed = jsonToHtml_level > COLLAPSE_LEVEL ? 'collapsed' : '';
    var keys = Object.keys(json);
    var length = keys.length;
    var output = '<div class="collapser"></div>{<span class="ellipsis"></span><ul class="obj collapsible">';
    var hasContents = false;
    for (var i = 0; i < length; i++) {
        var key = keys[i];
        hasContents = true;
        output += '<li><div class="hoverable ' + collapsed + '">';
        output += '<span class="property">"' + htmlEncode(key) + '"</span>: ';
        output += valueToHTML(json[key]);
        if (i < length - 1) {
            output += ',';
        }
        output += '</div></li>';
    }
    output += '</ul>}';
    if (!hasContents) {
        output = '{ }';
    }
    return output;
}

// CONCATENATED MODULE: ./src/components/JsonViewer/style.ts

var style_jsonStyles = Object(styled_components["b" /* css */])([".redoc-json > .collapser{display:none;}font-family:", ";font-size:", ";word-break:break-all;word-wrap:break-word;white-space:pre-wrap;.type-null{color:gray;}.type-boolean{color:firebrick;}.type-number{color:#4a8bb3;}.type-string{color:#66b16e;& + a{color:#66b16e;text-decoration:underline;}}.callback-function{color:gray;}.collapser:after{content:'-';cursor:pointer;}.collapsed > .collapser:after{content:'+';cursor:pointer;}.ellipsis:after{content:' \u2026 ';}.collapsible{margin-left:2em;}.hoverable{padding-top:1px;padding-bottom:1px;padding-left:2px;padding-right:2px;border-radius:2px;}.hovered{background-color:rgba(235,238,249,1);}.collapser{padding-right:6px;padding-left:6px;}ul{list-style-type:none;padding:0px;margin:0px 0px 0px 26px;}li{position:relative;display:block;}.hoverable{display:inline-block;}.selected{outline-style:solid;outline-width:1px;outline-style:dotted;}.collapsed > .collapsible{display:none;}.ellipsis{display:none;}.collapsed > .ellipsis{display:inherit;}.collapser{position:absolute;top:1px;left:-1.5em;cursor:default;user-select:none;-webkit-user-select:none;}"], function (props) { return props.theme.code.fontFamily; }, function (props) { return props.theme.code.fontSize; });

// CONCATENATED MODULE: ./src/components/JsonViewer/JsonViewer.tsx







var JsonViewer_JsonViewerWrap = styled_components["c" /* default */].div(["&:hover > ", "{opacity:1;}"], samples_SampleControls);
var JsonViewer_Json = /** @class */ (function (_super) {
    external_tslib_["__extends"](Json, _super);
    function Json() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderInner = function (_a) {
            var renderCopyButton = _a.renderCopyButton;
            return external_react_["createElement"](JsonViewer_JsonViewerWrap, null,
                external_react_["createElement"](samples_SampleControls, null,
                    renderCopyButton(),
                    external_react_["createElement"]("span", { onClick: _this.expandAll }, " Expand all "),
                    external_react_["createElement"]("span", { onClick: _this.collapseAll }, " Collapse all ")),
                external_react_["createElement"]("div", { className: _this.props.className, ref: function (node) { return _this.node = node; }, dangerouslySetInnerHTML: {
                        __html: jsonToHTML(_this.props.data)
                    } }));
        };
        _this.expandAll = function () {
            var elements = _this.node.getElementsByClassName('collapsible');
            for (var _i = 0, _a = Array.prototype.slice.call(elements); _i < _a.length; _i++) {
                var collapsed = _a[_i];
                collapsed.parentNode.classList.remove('collapsed');
            }
        };
        _this.collapseAll = function () {
            var elements = _this.node.getElementsByClassName('collapsible');
            for (var _i = 0, _a = Array.prototype.slice.call(elements); _i < _a.length; _i++) {
                var expanded = _a[_i];
                // const collapsed = elements[i];
                if (expanded.parentNode.classList.contains('redoc-json')) {
                    continue;
                }
                expanded.parentNode.classList.add('collapsed');
            }
        };
        _this.clickListener = function (event) {
            var collapsed;
            var target = event.target;
            if (target.className === 'collapser') {
                collapsed = target.parentElement.getElementsByClassName('collapsible')[0];
                if (collapsed.parentElement.classList.contains('collapsed')) {
                    collapsed.parentElement.classList.remove('collapsed');
                }
                else {
                    collapsed.parentElement.classList.add('collapsed');
                }
            }
        };
        return _this;
    }
    Json.prototype.render = function () {
        return external_react_["createElement"](CopyButtonWrapper_CopyButtonWrapper, { data: this.props.data }, this.renderInner);
    };
    Json.prototype.componentDidMount = function () {
        this.node.addEventListener('click', this.clickListener);
    };
    Json.prototype.componentWillUnmount = function () {
        this.node.removeEventListener('click', this.clickListener);
    };
    return Json;
}(external_react_["PureComponent"]));
var JsonViewer_JsonViewer = Object(styled_components["c" /* default */])(JsonViewer_Json)(["", ";"], style_jsonStyles);

// CONCATENATED MODULE: ./src/components/SourceCode/SourceCode.tsx






var SourceCode_StyledPre = styled_components["c" /* default */].pre(["font-family:", ";font-size:", ";overflow-x:auto;margin:0;word-break:break-all;word-wrap:break-word;white-space:pre-wrap;"], function (props) { return props.theme.code.fontFamily; }, function (props) { return props.theme.code.fontSize; });
var SourceCode_SourceCode = /** @class */ (function (_super) {
    external_tslib_["__extends"](SourceCode, _super);
    function SourceCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SourceCode.prototype.render = function () {
        var _a = this.props, source = _a.source, lang = _a.lang;
        return external_react_["createElement"](SourceCode_StyledPre, { dangerouslySetInnerHTML: {
                __html: Object(utils["m" /* highlight */])(source, lang)
            } });
    };
    return SourceCode;
}(external_react_["PureComponent"]));

var SourceCode_SourceCodeWithCopy = /** @class */ (function (_super) {
    external_tslib_["__extends"](SourceCodeWithCopy, _super);
    function SourceCodeWithCopy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SourceCodeWithCopy.prototype.render = function () {
        var _this = this;
        return external_react_["createElement"](CopyButtonWrapper_CopyButtonWrapper, { data: this.props.source }, function (_a) {
            var renderCopyButton = _a.renderCopyButton;
            return external_react_["createElement"](samples_SampleControlsWrap, null,
                external_react_["createElement"](samples_SampleControls, null, renderCopyButton()),
                external_react_["createElement"](SourceCode_SourceCode, { lang: _this.props.lang, source: _this.props.source }));
        });
    };
    return SourceCodeWithCopy;
}(external_react_["PureComponent"]));


// CONCATENATED MODULE: ./src/components/PayloadSamples/styled.elements.ts



var styled_elements_MimeLabel = styled_components["c" /* default */].div(["border-bottom:1px solid rgba(255,255,255,0.9);margin:0 0 10px 0;display:block;color:rgba(255,255,255,0.8);"]);
var styled_elements_InvertedSimpleDropdown = dropdown_StyledDropdown.extend(PayloadSamples_styled_elements_templateObject_1 || (PayloadSamples_styled_elements_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n  margin-left: 10px;\n  text-transform: none;\n  font-size: 0.929em;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.9);\n  margin: 0 0 10px 0;\n  display: block;\n\n  .Dropdown-control,\n  .Dropdown-control:hover {\n    font-size: 1em;\n    border: none;\n    padding: 0 1.2em 0 0;\n    background: transparent;\n    color: rgba(255, 255, 255, 0.9);\n    box-shadow: none;\n\n    .Dropdown-arrow {\n      border-top-color: rgba(255, 255, 255, 0.9);\n    }\n  }\n  .Dropdown-menu {\n    margin: 0;\n  }\n"], ["\n  margin-left: 10px;\n  text-transform: none;\n  font-size: 0.929em;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.9);\n  margin: 0 0 10px 0;\n  display: block;\n\n  .Dropdown-control,\n  .Dropdown-control:hover {\n    font-size: 1em;\n    border: none;\n    padding: 0 1.2em 0 0;\n    background: transparent;\n    color: rgba(255, 255, 255, 0.9);\n    box-shadow: none;\n\n    .Dropdown-arrow {\n      border-top-color: rgba(255, 255, 255, 0.9);\n    }\n  }\n  .Dropdown-menu {\n    margin: 0;\n  }\n"])));
var styled_elements_NoSampleLabel = styled_components["c" /* default */].div(["font-family:", ";font-size:12px;color:#ee807f;"], function (props) { return props.theme.code.fontFamily; });
var PayloadSamples_styled_elements_templateObject_1;

// CONCATENATED MODULE: ./src/components/PayloadSamples/MediaTypeSamples.tsx







var MediaTypeSamples_MediaTypeSamples = /** @class */ (function (_super) {
    external_tslib_["__extends"](MediaTypeSamples, _super);
    function MediaTypeSamples() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaTypeSamples.prototype.render = function () {
        var examples = this.props.mediaType.examples || {};
        var mimeType = this.props.mediaType.name;
        var noSample = external_react_["createElement"](styled_elements_NoSampleLabel, null, "No sample");
        var sampleView = Object(utils["q" /* isJsonLike */])(mimeType) ? function (sample) { return external_react_["createElement"](JsonViewer_JsonViewer, { data: sample }); } : function (sample) { return sample && external_react_["createElement"](SourceCode_SourceCodeWithCopy, { lang: Object(utils["v" /* langFromMime */])(mimeType), source: sample }) || {
            noSample: noSample
        }; };
        var examplesNames = Object.keys(examples);
        if (examplesNames.length === 0) {
            return noSample;
        }
        if (examplesNames.length > 1) {
            return external_react_["createElement"](tabs_SmallTabs, null,
                external_react_["createElement"](external_react_tabs_["TabList"], null, examplesNames.map(function (name) { return external_react_["createElement"](external_react_tabs_["Tab"], { key: name },
                    " ",
                    examples[name].summary || name,
                    " "); })),
                examplesNames.map(function (name) { return external_react_["createElement"](external_react_tabs_["TabPanel"], { key: name }, sampleView(examples[name].value)); }));
        }
        else {
            var name_1 = examplesNames[0];
            return external_react_["createElement"]("div", null, sampleView(examples[name_1].value));
        }
    };
    return MediaTypeSamples;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/PayloadSamples/PayloadSamples.tsx







var PayloadSamples_PayloadSamples = /** @class */ (function (_super) {
    external_tslib_["__extends"](PayloadSamples, _super);
    function PayloadSamples() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderDropdown = function (props) {
            return external_react_["createElement"](DropdownOrLabel_DropdownOrLabel, external_tslib_["__assign"]({ Label: styled_elements_MimeLabel, Dropdown: styled_elements_InvertedSimpleDropdown }, props));
        };
        return _this;
    }
    PayloadSamples.prototype.render = function () {
        var mimeContent = this.props.content;
        if (mimeContent === undefined) {
            return null;
        }
        return external_react_["createElement"](MediaTypesSwitch_MediaTypesSwitch, { content: mimeContent, renderDropdown: this.renderDropdown }, function (mediaType) { return external_react_["createElement"](MediaTypeSamples_MediaTypeSamples, { key: "samples", mediaType: mediaType }); });
    };
    PayloadSamples = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], PayloadSamples);
    return PayloadSamples;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/RequestSamples/RequestSamples.tsx






var RequestSamples_RequestSamples = /** @class */ (function (_super) {
    external_tslib_["__extends"](RequestSamples, _super);
    function RequestSamples() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.visited = new Set();
        return _this;
    }
    RequestSamples.prototype.render = function () {
        var operation = this.props.operation;
        var requestBodyContent = operation.requestBody && operation.requestBody.content;
        var hasBodySample = requestBodyContent && requestBodyContent.hasSample;
        var samples = operation.codeSamples;
        var hasSamples = hasBodySample || samples.length > 0;
        return hasSamples && external_react_["createElement"]("div", null,
            external_react_["createElement"]("h3", null, " Request samples "),
            external_react_["createElement"](tabs_Tabs, { defaultIndex: 0 },
                external_react_["createElement"](external_react_tabs_["TabList"], null,
                    hasBodySample && external_react_["createElement"](external_react_tabs_["Tab"], { key: "payload" }, " Payload "),
                    samples.map(function (sample) { return external_react_["createElement"](external_react_tabs_["Tab"], { key: sample.lang }, sample.lang); })),
                hasBodySample && external_react_["createElement"](external_react_tabs_["TabPanel"], { key: "payload" },
                    external_react_["createElement"](PayloadSamples_PayloadSamples, { content: requestBodyContent })),
                samples.map(function (sample) { return external_react_["createElement"](external_react_tabs_["TabPanel"], { key: sample.lang },
                    external_react_["createElement"](SourceCode_SourceCodeWithCopy, { lang: sample.lang, source: sample.source })); }))) || null;
    };
    RequestSamples = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], RequestSamples);
    return RequestSamples;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/Responses/ResponseTitle.tsx




var ResponseTitle_ResponseTitle = /** @class */ (function (_super) {
    external_tslib_["__extends"](ResponseTitle, _super);
    function ResponseTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResponseTitle.prototype.render = function () {
        var _a = this.props, title = _a.title, type = _a.type, empty = _a.empty, code = _a.code, opened = _a.opened, className = _a.className, onClick = _a.onClick;
        return external_react_["createElement"]("div", { className: className, onClick: !empty && onClick || undefined },
            !empty && external_react_["createElement"](shelfs_ShelfIcon, { size: '1.5em', color: type, direction: opened ? 'up' : 'down', float: 'left' }),
            external_react_["createElement"]("strong", null,
                code,
                " "),
            external_react_["createElement"](Markdown_Markdown, { dense: true, inline: true, source: title }));
    };
    return ResponseTitle;
}(external_react_["PureComponent"]));


// CONCATENATED MODULE: ./src/components/Responses/styled.elements.ts





var styled_elements_StyledResponseTitle = Object(styled_components["c" /* default */])(ResponseTitle_ResponseTitle)(["padding:10px;border-radius:2px;margin-bottom:4px;line-height:1.5em;background-color:#f2f2f2;cursor:pointer;color:", ";background-color:", ";", ";"], function (props) { return props.theme.colors[props.type]; }, function (props) { return Object(external_polished_["transparentize"])(0.92, props.theme.colors[props.type]); }, function (props) { return props.empty && "\ncursor: default;\n&::before {\n  content: \"\u2014\";\n  font-weight: bold;\n  width: 1.5em;\n  text-align: center;\n  display: inline-block;\n}\n" || ''; });
var styled_elements_ResponseDetailsWrap = styled_components["c" /* default */].div(["padding:10px;"]);
var styled_elements_HeadersCaption = headers_UnderlinedHeader.withComponent('caption').extend(Responses_styled_elements_templateObject_1 || (Responses_styled_elements_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n  text-align: left;\n  margin-top: 1em;\n"], ["\n  text-align: left;\n  margin-top: 1em;\n"])));
var Responses_styled_elements_templateObject_1;

// CONCATENATED MODULE: ./src/components/Responses/ResponseHeaders.tsx






var ResponseHeaders_ResponseHeaders = /** @class */ (function (_super) {
    external_tslib_["__extends"](ResponseHeaders, _super);
    function ResponseHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResponseHeaders.prototype.render = function () {
        var headers = this.props.headers;
        if (headers === undefined || headers.length === 0) {
            return null;
        }
        return external_react_["createElement"](fields_layout_PropertiesTable, null,
            external_react_["createElement"](styled_elements_HeadersCaption, null, " Response Headers "),
            external_react_["createElement"]("tbody", null, Object(utils["z" /* mapWithLast */])(headers, function (header, isLast) { return external_react_["createElement"](Field_Field, { isLast: isLast, key: header.name, field: header }); })));
    };
    return ResponseHeaders;
}(external_react_["PureComponent"]));


// CONCATENATED MODULE: ./src/components/Responses/Response.tsx









var Response_ResponseView = /** @class */ (function (_super) {
    external_tslib_["__extends"](ResponseView, _super);
    function ResponseView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggle = function () {
            _this.props.response.toggle();
        };
        _this.renderDropdown = function (props) {
            return external_react_["createElement"](headers_UnderlinedHeader, { key: "header" },
                "Response Schema: ",
                external_react_["createElement"](DropdownOrLabel_DropdownOrLabel, external_tslib_["__assign"]({}, props)));
        };
        return _this;
    }
    ResponseView.prototype.render = function () {
        var _a = this.props.response, headers = _a.headers, type = _a.type, description = _a.description, code = _a.code, expanded = _a.expanded, content = _a.content;
        var mimes = content === undefined ? [] : content.mediaTypes.filter(function (mime) { return mime.schema !== undefined; });
        var empty = headers.length === 0 && mimes.length === 0;
        return external_react_["createElement"]("div", null,
            external_react_["createElement"](styled_elements_StyledResponseTitle, { onClick: this.toggle, type: type, empty: empty, title: description || '', code: code, opened: expanded }),
            expanded && !empty && external_react_["createElement"](styled_elements_ResponseDetailsWrap, null,
                external_react_["createElement"](ResponseHeaders_ResponseHeaders, { headers: headers }),
                external_react_["createElement"](MediaTypesSwitch_MediaTypesSwitch, { content: content, renderDropdown: this.renderDropdown }, function (_a) {
                    var schema = _a.schema;
                    return external_react_["createElement"](Schema_Schema, { skipWriteOnly: true, key: "schema", schema: schema });
                })));
    };
    ResponseView = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], ResponseView);
    return ResponseView;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/Responses/ResponsesList.tsx




var ResponsesList_ResponsesHeader = styled_components["c" /* default */].h3(["font-size:18px;padding:0.2em 0;margin:3em 0 1.1em;color:#253137;font-weight:normal;"]);
var ResponsesList_ResponsesList = /** @class */ (function (_super) {
    external_tslib_["__extends"](ResponsesList, _super);
    function ResponsesList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResponsesList.prototype.render = function () {
        var responses = this.props.responses;
        if (!responses || responses.length === 0) {
            return null;
        }
        return external_react_["createElement"]("div", null,
            external_react_["createElement"](ResponsesList_ResponsesHeader, null, " Responses "),
            responses.map(function (response) {
                return external_react_["createElement"](Response_ResponseView, { key: response.code, response: response });
            }));
    };
    return ResponsesList;
}(external_react_["PureComponent"]));


// CONCATENATED MODULE: ./src/components/ResponseSamples/ResponseSamples.tsx





var ResponseSamples_ResponseSample = /** @class */ (function (_super) {
    external_tslib_["__extends"](ResponseSample, _super);
    function ResponseSample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResponseSample.prototype.render = function () {
        return external_react_["createElement"](PayloadSamples_PayloadSamples, { content: this.props.content });
    };
    return ResponseSample;
}(external_react_["Component"]));
var ResponseSamples_ResponseSamples = /** @class */ (function (_super) {
    external_tslib_["__extends"](ResponseSamples, _super);
    function ResponseSamples() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.visited = new Set();
        return _this;
    }
    ResponseSamples.prototype.render = function () {
        var operation = this.props.operation;
        var responses = operation.responses.filter(function (response) {
            return response.content && response.content.hasSample;
        });
        return responses.length > 0 && external_react_["createElement"]("div", null,
            external_react_["createElement"]("h3", null, " Response samples "),
            external_react_["createElement"](tabs_Tabs, { defaultIndex: 0 },
                external_react_["createElement"](external_react_tabs_["TabList"], null, responses.map(function (response) { return external_react_["createElement"](external_react_tabs_["Tab"], { className: 'tab-' + response.type, key: response.code }, response.code); })),
                responses.map(function (response) { return external_react_["createElement"](external_react_tabs_["TabPanel"], { key: response.code },
                    external_react_["createElement"](ResponseSamples_ResponseSample, { content: response.content })); }))) || null;
    };
    ResponseSamples = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], ResponseSamples);
    return ResponseSamples;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/Operation/Operation.tsx













var Operation_OperationRow = panels_Row.extend(Operation_templateObject_1 || (Operation_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n  backface-visibility: hidden;\n  contain: content;\n\n  overflow: hidden;\n  position: relative;\n\n  &:after {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    display: block;\n    content: '';\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  }\n"], ["\n  backface-visibility: hidden;\n  contain: content;\n\n  overflow: hidden;\n  position: relative;\n\n  &:after {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    display: block;\n    content: '';\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  }\n"])));
var Operation_Operation = /** @class */ (function (_super) {
    external_tslib_["__extends"](Operation, _super);
    function Operation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Operation.prototype.render = function () {
        var operation = this.props.operation;
        var summary = operation.name, description = operation.description, deprecated = operation.deprecated;
        return external_react_["createElement"](OptionsProvider_OptionsContext.Consumer, null, function (options) { return external_react_["createElement"](Operation_OperationRow, null,
            external_react_["createElement"](panels_MiddlePanel, null,
                external_react_["createElement"](headers_H2, null,
                    external_react_["createElement"](linkify_ShareLink, { href: '#' + operation.id }),
                    summary,
                    " ",
                    deprecated && external_react_["createElement"](shelfs_Badge, { type: "warning" }, " Deprecated ")),
                options.pathInMiddlePanel && external_react_["createElement"](Endpoint_Endpoint, { operation: operation, inverted: true }),
                description !== undefined && external_react_["createElement"](Markdown_Markdown, { source: description }),
                external_react_["createElement"](SecuirityRequirement_SecurityRequirements, { securities: operation.security }),
                external_react_["createElement"](Parameters_Parameters, { parameters: operation.parameters, body: operation.requestBody }),
                external_react_["createElement"](ResponsesList_ResponsesList, { responses: operation.responses })),
            external_react_["createElement"](panels_DarkRightPanel, null,
                !options.pathInMiddlePanel && external_react_["createElement"](Endpoint_Endpoint, { operation: operation }),
                external_react_["createElement"](RequestSamples_RequestSamples, { operation: operation }),
                external_react_["createElement"](ResponseSamples_ResponseSamples, { operation: operation }))); });
    };
    Operation = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], Operation);
    return Operation;
}(external_react_["Component"]));

var Operation_templateObject_1;

// CONCATENATED MODULE: ./src/components/ContentItems/ContentItems.tsx







var ContentItems_ContentItems = /** @class */ (function (_super) {
    external_tslib_["__extends"](ContentItems, _super);
    function ContentItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentItems.prototype.render = function () {
        var items = this.props.items;
        if (items.length === 0) {
            return null;
        }
        return items.map(function (item) { return external_react_["createElement"](ContentItems_ContentItem, { item: item, key: item.id }); });
    };
    ContentItems = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], ContentItems);
    return ContentItems;
}(external_react_["Component"]));

var ContentItems_ContentItem = /** @class */ (function (_super) {
    external_tslib_["__extends"](ContentItem, _super);
    function ContentItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentItem.prototype.render = function () {
        var item = this.props.item;
        var content;
        var type = item.type;
        switch (type) {
            case 'group':
                content = null;
                break;
            case 'tag':
                content = external_react_["createElement"](ContentItems_TagItem, { item: item });
                break;
            case 'section':
                return null;
            case 'operation':
                content = external_react_["createElement"](ContentItems_OperationItem, { item: item });
                break;
            default:
                throw new Error('Unknown item type');
        }
        return [external_react_["createElement"]("div", external_tslib_["__assign"]({ key: "section" }, (_a = {},
                _a[MenuStore_SECTION_ATTR] = item.id,
                _a)), content), item.items && external_react_["createElement"](ContentItems_ContentItems, { key: "content", items: item.items })];
        var _a;
    };
    ContentItem = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], ContentItem);
    return ContentItem;
}(external_react_["Component"]));

var ContentItems_TagItem = /** @class */ (function (_super) {
    external_tslib_["__extends"](TagItem, _super);
    function TagItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TagItem.prototype.render = function () {
        var _a = this.props.item, name = _a.name, description = _a.description;
        return external_react_["createElement"](panels_Row, null,
            external_react_["createElement"](panels_MiddlePanel, { key: "middle" },
                external_react_["createElement"](headers_H1, null,
                    external_react_["createElement"](linkify_ShareLink, { href: '#' + this.props.item.id }),
                    name),
                description !== undefined && external_react_["createElement"](Markdown_Markdown, { source: description })),
            external_react_["createElement"](panels_EmptyDarkRightPanel, { key: "right" }));
    };
    TagItem = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], TagItem);
    return TagItem;
}(external_react_["Component"]));

var ContentItems_OperationItem = /** @class */ (function (_super) {
    external_tslib_["__extends"](OperationItem, _super);
    function OperationItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperationItem.prototype.render = function () {
        return external_react_["createElement"](Operation_Operation, { operation: this.props.item });
    };
    OperationItem = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], OperationItem);
    return OperationItem;
}(external_react_["Component"]));


// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(33);

// CONCATENATED MODULE: ./src/components/SideMenu/styled.elements.ts




var styled_elements_OperationBadge = Object(styled_components["g" /* withProps */])(styled_components["c" /* default */].span).attrs({
    className: function (props) { return "operation-type " + props.type; }
})(SideMenu_styled_elements_templateObject_1 || (SideMenu_styled_elements_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n  width: 26px;\n  display: inline-block;\n  height: ", ";;\n  background-color: #333;\n  border-radius: 3px;\n  vertical-align: top;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAACgCAYAAADuDlcXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNjQ5N0JDQUE3OTYxMUU0ODNGMUE0RUM3NjRDRTQyNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNjQ5N0JDQkE3OTYxMUU0ODNGMUE0RUM3NjRDRTQyNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU2NDk3QkM4QTc5NjExRTQ4M0YxQTRFQzc2NENFNDI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU2NDk3QkM5QTc5NjExRTQ4M0YxQTRFQzc2NENFNDI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mIrGwQAAAZ9JREFUeNrsmtuOwyAMRBmU//9lbx9208ayjQ1EarSDVFW56ARIGGZIIK/S3gWvX3X7LN3a6WxDHdPnnDBpcZHEOe3wrmLUMg2zatKykPOq1/5fK71tLIQR9jjYsaJfWdWAAcRsM2W1z9LNGcFkRlmtPhvpf7qmHAGEESZqLFr/qbHaCy4Is6oxLdvT+nWr0lLPCCPsFn+mA5e2UjLycL1o6qLMiapqRGoifVCDinrgU2mRyJthzZg3CSPs+2HhIM4YGq0a4oDgiGjYTKw20/OwUzAEuXz73YSqtdsV+F1a3eZpweFEGGG7Y3ULbJRk4nYPlEHbUi86wpNtbz4oB37PICOrLEdC9DKzFv7EkQ8tYY8Nr8tuyJrRsdpMrIJ0n4GPBmGEEUbYzRMKnFwug1B7rppmbCiyBjBrQ1vC8KW/CxrF7osNrRbxMjofWsIIuwU2vapnZfTRq4/wFXl3hG9bMzP6ZWV47LoB+Gym1/EyUleKI2GEPW8pQpu80bHLvsifSWFVAVEzo2VDTxxb9T16eO7sF0vmxPNPxPFHgAEA/rGUMXq/uWcAAAAASUVORK5CYII=\");\n  background-repeat: no-repeat;\n  background-position: 6px 4px;\n  text-indent: -9000px;\n  margin-right: 6px;\n  margin-top: 2px;\n\n  &.get {\n    background-position: 8px -12px;\n    background-color: ", ";\n  }\n\n  &.post {\n    background-position: 6px 4px;\n    background-color: ", ";\n  }\n\n  &.put {\n    background-position: 8px -28px;\n    background-color: ", ";\n  }\n\n  &.options {\n    background-position: 4px -148px;\n    background-color: ", ";\n  }\n\n  &.patch {\n    background-position: 4px -114px;\n    background-color: ", ";\n  }\n\n  &.delete {\n    background-position: 4px -44px;\n    background-color: ", ";\n  }\n\n  &.basic {\n    background-position: 5px -79px;\n    background-color: ", ";\n  }\n\n  &.link {\n    background-position: 4px -131px;\n    background-color: ", ";\n  }\n"], ["\n  width: 26px;\n  display: inline-block;\n  height: ", ";;\n  background-color: #333;\n  border-radius: 3px;\n  vertical-align: top;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAACgCAYAAADuDlcXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNjQ5N0JDQUE3OTYxMUU0ODNGMUE0RUM3NjRDRTQyNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNjQ5N0JDQkE3OTYxMUU0ODNGMUE0RUM3NjRDRTQyNyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU2NDk3QkM4QTc5NjExRTQ4M0YxQTRFQzc2NENFNDI3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU2NDk3QkM5QTc5NjExRTQ4M0YxQTRFQzc2NENFNDI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mIrGwQAAAZ9JREFUeNrsmtuOwyAMRBmU//9lbx9208ayjQ1EarSDVFW56ARIGGZIIK/S3gWvX3X7LN3a6WxDHdPnnDBpcZHEOe3wrmLUMg2zatKykPOq1/5fK71tLIQR9jjYsaJfWdWAAcRsM2W1z9LNGcFkRlmtPhvpf7qmHAGEESZqLFr/qbHaCy4Is6oxLdvT+nWr0lLPCCPsFn+mA5e2UjLycL1o6qLMiapqRGoifVCDinrgU2mRyJthzZg3CSPs+2HhIM4YGq0a4oDgiGjYTKw20/OwUzAEuXz73YSqtdsV+F1a3eZpweFEGGG7Y3ULbJRk4nYPlEHbUi86wpNtbz4oB37PICOrLEdC9DKzFv7EkQ8tYY8Nr8tuyJrRsdpMrIJ0n4GPBmGEEUbYzRMKnFwug1B7rppmbCiyBjBrQ1vC8KW/CxrF7osNrRbxMjofWsIIuwU2vapnZfTRq4/wFXl3hG9bMzP6ZWV47LoB+Gym1/EyUleKI2GEPW8pQpu80bHLvsifSWFVAVEzo2VDTxxb9T16eO7sF0vmxPNPxPFHgAEA/rGUMXq/uWcAAAAASUVORK5CYII=\");\n  background-repeat: no-repeat;\n  background-position: 6px 4px;\n  text-indent: -9000px;\n  margin-right: 6px;\n  margin-top: 2px;\n\n  &.get {\n    background-position: 8px -12px;\n    background-color: ", ";\n  }\n\n  &.post {\n    background-position: 6px 4px;\n    background-color: ", ";\n  }\n\n  &.put {\n    background-position: 8px -28px;\n    background-color: ", ";\n  }\n\n  &.options {\n    background-position: 4px -148px;\n    background-color: ", ";\n  }\n\n  &.patch {\n    background-position: 4px -114px;\n    background-color: ", ";\n  }\n\n  &.delete {\n    background-position: 4px -44px;\n    background-color: ", ";\n  }\n\n  &.basic {\n    background-position: 5px -79px;\n    background-color: ", ";\n  }\n\n  &.link {\n    background-position: 4px -131px;\n    background-color: ", ";\n  }\n"])), function (props) { return props.theme.code.fontSize; }, function (props) { return props.theme.colors.http.get; }, function (props) { return props.theme.colors.http.post; }, function (props) { return props.theme.colors.http.put; }, function (props) { return props.theme.colors.http.options; }, function (props) { return props.theme.colors.http.patch; }, function (props) { return props.theme.colors.http.delete; }, function (props) { return props.theme.colors.http.basic; }, function (props) { return props.theme.colors.http.link; });
function styled_elements_menuItemActiveBg(depth) {
    if (depth > 1) {
        return '#e1e1e1';
    }
    else if (depth === 1) {
        return '#f0f0f0';
    }
    else {
        return '';
    }
}
var styled_elements_MenuItemUl = Object(styled_components["g" /* withProps */])(styled_components["c" /* default */].ul)(SideMenu_styled_elements_templateObject_2 || (SideMenu_styled_elements_templateObject_2 = external_tslib_["__makeTemplateObject"](["\n  margin: 0;\n  padding: 0;\n\n  & & {\n    font-size: 0.929em;\n  }\n\n  ", ";\n"], ["\n  margin: 0;\n  padding: 0;\n\n  & & {\n    font-size: 0.929em;\n  }\n\n  ", ";\n"])), function (props) { return props.active ? '' : 'display: none;'; });
var styled_elements_MenuItemLi = Object(styled_components["g" /* withProps */])(styled_components["c" /* default */].li)(SideMenu_styled_elements_templateObject_3 || (SideMenu_styled_elements_templateObject_3 = external_tslib_["__makeTemplateObject"](["\n  list-style: none inside none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0;\n  ", ";\n"], ["\n  list-style: none inside none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0;\n  ", ";\n"])), function (props) { return props.depth === 0 ? 'margin-top: 15px' : ''; });
var styled_elements_menuItemDepth = {
    0: Object(styled_components["b" /* css */])(["opacity:0.7;text-transform:uppercase;font-size:0.8em;padding-bottom:0;cursor:default;color:", ";"], function (props) { return props.theme.colors.text; }),
    1: Object(styled_components["b" /* css */])(["font-size:0.929em;text-transform:uppercase;&:hover{color:", ";}"], function (props) { return props.theme.colors.main; }),
    2: Object(styled_components["b" /* css */])(["color:", ";"], function (props) { return props.theme.colors.text; })
};
var styled_elements_MenuItemLabel = Object(styled_components["g" /* withProps */])(styled_components["c" /* default */].label).attrs({
    role: 'menuitem',
    className: function (props) { return external_classnames_('-depth' + props.depth, {
        active: props.active
    }); }
})(styled_elements_templateObject_4 || (styled_elements_templateObject_4 = external_tslib_["__makeTemplateObject"](["\n  cursor: pointer;\n  color: ", ";\n  margin: 0;\n  padding: 12.5px ", "px;\n  ", "\n  display: flex;\n  justify-content: space-between;\n  font-family: ", ";\n  ", ";\n  background-color: ", ";\n\n  ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  cursor: pointer;\n  color: ", ";\n  margin: 0;\n  padding: 12.5px ", "px;\n  ",
    "\n  display: flex;\n  justify-content: space-between;\n  font-family: ", ";\n  ", ";\n  background-color: ", ";\n\n  ", ";\n\n  &:hover {\n    background-color: ", ";\n  }\n"])), function (props) { return props.active ? props.theme.colors.main : props.theme.colors.text; }, function (props) { return props.theme.spacingUnit; }, function (_a) {
    var depth = _a.depth, type = _a.type, theme = _a.theme;
    return type === 'section' && depth > 1 && 'padding-left: ' + theme.spacingUnit * 2 + 'px;' || '';
}, function (props) { return props.theme.headingsFont.family; }, function (props) { return styled_elements_menuItemDepth[props.depth]; }, function (props) { return props.active ? styled_elements_menuItemActiveBg(props.depth) : ''; }, function (props) { return props.deprecated && mixins_deprecatedCss || ''; }, function (props) { return styled_elements_menuItemActiveBg(props.depth); });
var styled_elements_MenuItemTitle = Object(styled_components["g" /* withProps */])(styled_components["c" /* default */].span)(styled_elements_templateObject_5 || (styled_elements_templateObject_5 = external_tslib_["__makeTemplateObject"](["\n  display: inline-block;\n  vertical-align: middle;\n  width: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  display: inline-block;\n  vertical-align: middle;\n  width: ", ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])), function (props) { return props.width ? props.width : 'auto'; });
var SideMenu_styled_elements_templateObject_1, SideMenu_styled_elements_templateObject_2, SideMenu_styled_elements_templateObject_3, styled_elements_templateObject_4, styled_elements_templateObject_5;

// CONCATENATED MODULE: ./src/components/SideMenu/MenuItem.tsx






var MenuItem_MenuItem = /** @class */ (function (_super) {
    external_tslib_["__extends"](MenuItem, _super);
    function MenuItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activate = function (evt) {
            _this.props.onActivate(_this.props.item);
            evt.stopPropagation();
        };
        _this.saveRef = function (ref) {
            _this.ref = ref;
        };
        return _this;
    }
    MenuItem.prototype.componentDidUpdate = function () {
        if (this.props.item.active) {
            this.scrollIntoView();
        }
    };
    MenuItem.prototype.scrollIntoView = function () {
        if (this.ref) {
            this.ref.scrollIntoViewIfNeeded();
        }
    };
    MenuItem.prototype.render = function () {
        var _a = this.props, item = _a.item, withoutChildren = _a.withoutChildren;
        return external_react_["createElement"](styled_elements_MenuItemLi, { onClick: this.activate, depth: item.depth, innerRef: this.saveRef, "data-item-id": item.id },
            item.type === 'operation' ? external_react_["createElement"](MenuItem_OperationMenuItemContent, { item: item }) : external_react_["createElement"](styled_elements_MenuItemLabel, { depth: item.depth, active: item.active, type: item.type },
                external_react_["createElement"](styled_elements_MenuItemTitle, { title: item.name }, item.name),
                item.depth > 0 && item.items.length > 0 && external_react_["createElement"](shelfs_ShelfIcon, { float: 'right', direction: item.active ? 'down' : 'right' }) || null),
            !withoutChildren && item.items && item.items.length > 0 && external_react_["createElement"](MenuItems_MenuItems, { active: item.active, items: item.items, onActivate: this.props.onActivate }));
    };
    MenuItem = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], MenuItem);
    return MenuItem;
}(external_react_["Component"]));

var MenuItem_OperationMenuItemContent = /** @class */ (function (_super) {
    external_tslib_["__extends"](OperationMenuItemContent, _super);
    function OperationMenuItemContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OperationMenuItemContent.prototype.render = function () {
        var _a = this.props, item = _a.item, className = _a.className;
        return external_react_["createElement"](styled_elements_MenuItemLabel, { className: className, depth: item.depth, active: item.active, deprecated: item.deprecated },
            external_react_["createElement"](styled_elements_OperationBadge, { type: item.httpVerb }),
            external_react_["createElement"](styled_elements_MenuItemTitle, { width: "calc(100% - 32px)" }, item.name));
    };
    OperationMenuItemContent = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], OperationMenuItemContent);
    return OperationMenuItemContent;
}(external_react_["Component"]));

// CONCATENATED MODULE: ./src/components/SideMenu/MenuItems.tsx





var MenuItems_MenuItems = /** @class */ (function (_super) {
    external_tslib_["__extends"](MenuItems, _super);
    function MenuItems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuItems.prototype.render = function () {
        var _this = this;
        var _a = this.props, items = _a.items, root = _a.root;
        var active = this.props.active == null ? true : this.props.active;
        return external_react_["createElement"](styled_elements_MenuItemUl, external_tslib_["__assign"]({ style: this.props.style, active: active }, root ? {
            role: 'navigation'
        } : {}), items.map(function (item, idx) { return external_react_["createElement"](MenuItem_MenuItem, { key: idx, item: item, onActivate: _this.props.onActivate }); }));
    };
    MenuItems = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], MenuItems);
    return MenuItems;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/SideMenu/SideMenu.tsx






var SideMenu_SideMenu = /** @class */ (function (_super) {
    external_tslib_["__extends"](SideMenu, _super);
    function SideMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activate = function (item) {
            _this.props.menu.activateAndScroll(item, true);
            setTimeout(function () {
                if (_this._updateScroll) {
                    _this._updateScroll();
                }
            });
        };
        _this.saveScrollUpdate = function (upd) {
            _this._updateScroll = upd;
        };
        return _this;
    }
    SideMenu.prototype.render = function () {
        var _this = this;
        var store = this.props.menu;
        return external_react_["createElement"](OptionsProvider_OptionsContext.Consumer, null, function (options) { return options.nativeScrollbars ? external_react_["createElement"](MenuItems_MenuItems, { style: {
                overflow: 'auto',
                msOverflowStyle: '-ms-autohiding-scrollbar'
            }, items: store.items, onActivate: _this.activate, root: true }) : external_react_["createElement"](perfect_scrollbar_PerfectScrollbar, { updateFn: _this.saveScrollUpdate },
            external_react_["createElement"](MenuItems_MenuItems, { items: store.items, onActivate: _this.activate, root: true })); });
    };
    SideMenu = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], SideMenu);
    return SideMenu;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/StickySidebar/ChevronSvg.tsx


var ChevronSvg_AnimatedChevronButton = function (_a) {
    var open = _a.open;
    var iconOffset = open ? 8 : -4;
    return external_react_["createElement"](ChevronSvg_ChevronContainer, null,
        external_react_["createElement"](ChevronSvg_ChevronSvg, { size: 15, style: {
                transform: "translate(2px, " + iconOffset + "px) rotate(180deg)",
                transition: 'transform 0.2s ease'
            } }),
        external_react_["createElement"](ChevronSvg_ChevronSvg, { size: 15, style: {
                transform: "translate(2px, " + (0 - iconOffset) + "px)",
                transition: 'transform 0.2s ease'
            } }));
}; // adapted from reactjs.org
var ChevronSvg_ChevronSvg = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 10 : _b, _c = _a.className, className = _c === void 0 ? '' : _c, style = _a.style;
    return external_react_["createElement"]("svg", { className: className, style: style || {}, viewBox: "0 0 926.23699 573.74994", version: "1.1", x: "0px", y: "0px", width: size, height: size },
        external_react_["createElement"]("g", { transform: "translate(904.92214,-879.1482)" },
            external_react_["createElement"]("path", { d: "\n          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n          -174.68583 0.6895,0 26.281,25.03215 56.8701,\n          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n          -104.0616 -231.873,-231.248 z\n        ", fill: "currentColor" })));
};
var ChevronSvg_ChevronContainer = styled_components["c" /* default */].div(["user-select:none;width:20px;height:20px;align-self:center;display:flex;flex-direction:column;color:", ";"], function (props) { return props.theme.colors.main; });

// CONCATENATED MODULE: ./src/components/StickySidebar/StickyResponsiveSidebar.tsx








var StickyResponsiveSidebar_Stickyfill;
if (utils["a" /* IS_BROWSER */]) {
    StickyResponsiveSidebar_Stickyfill = __webpack_require__(41).default;
}
var StickyResponsiveSidebar_stickyfill = StickyResponsiveSidebar_Stickyfill && StickyResponsiveSidebar_Stickyfill();
var StickyResponsiveSidebar_StyledStickySidebar = Object(styled_components["g" /* withProps */])(styled_components["c" /* default */].div)(StickyResponsiveSidebar_templateObject_1 || (StickyResponsiveSidebar_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n  width: ", ";\n  background-color: ", ";\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n\n  backface-visibility: hidden;\n  contain: strict;\n\n  height: 100vh;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n\n  ", ";\n"], ["\n  width: ", ";\n  background-color: ", ";\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n\n  backface-visibility: hidden;\n  contain: strict;\n\n  height: 100vh;\n  position: sticky;\n  position: -webkit-sticky;\n  top: 0;\n\n  ",
    ";\n"])), function (props) { return props.theme.menu.width; }, function (props) { return props.theme.menu.backgroundColor; }, styled_components["f" /* media */].lessThan('small')(StickyResponsiveSidebar_templateObject_2 || (StickyResponsiveSidebar_templateObject_2 = external_tslib_["__makeTemplateObject"](["\n    position: fixed;\n    z-index: 20;\n    width: 100%;\n    background: #ffffff;\n    display: ", ";\n  "], ["\n    position: fixed;\n    z-index: 20;\n    width: 100%;\n    background: #ffffff;\n    display: ", ";\n  "])), function (props) { return props.open ? 'flex' : 'none'; }));
var StickyResponsiveSidebar_FloatingButton = styled_components["c" /* default */].div(["outline:none;user-select:none;background-color:#f2f2f2;color:", ";display:none;cursor:pointer;position:fixed;right:20px;z-index:100;border-radius:50%;box-shadow:0 0 20px rgba(0,0,0,0.3);", ";bottom:44px;width:60px;height:60px;padding:0 20px;"], function (props) { return props.theme.colors.main; }, styled_components["f" /* media */].lessThan('small')(StickyResponsiveSidebar_templateObject_3 || (StickyResponsiveSidebar_templateObject_3 = external_tslib_["__makeTemplateObject"](["\n    display: flex;\n  "], ["\n    display: flex;\n  "]))));
var StickyResponsiveSidebar_StickyResponsiveSidebar = /** @class */ (function (_super) {
    external_tslib_["__extends"](StickyResponsiveSidebar, _super);
    function StickyResponsiveSidebar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggleNavMenu = function () {
            _this.props.menu.toggleSidebar();
        }; // private closeNavMenu = () => {
        return _this;
        //   this.setState({ open: false });
        // };
    }
    StickyResponsiveSidebar.prototype.componentDidMount = function () {
        if (StickyResponsiveSidebar_stickyfill) {
            StickyResponsiveSidebar_stickyfill.add(this.stickyElement);
        }
    };
    StickyResponsiveSidebar.prototype.componentWillUnmount = function () {
        if (StickyResponsiveSidebar_stickyfill) {
            StickyResponsiveSidebar_stickyfill.remove(this.stickyElement);
        }
    };
    StickyResponsiveSidebar.prototype.getScrollYOffset = function (options) {
        var top;
        if (this.props.scrollYOffset !== undefined) {
            top = RedocNormalizedOptions_RedocNormalizedOptions.normalizeScrollYOffset(this.props.scrollYOffset)();
        }
        else {
            top = options.scrollYOffset();
        }
        return top + 'px';
    };
    StickyResponsiveSidebar.prototype.render = function () {
        var _this = this;
        var open = this.props.menu.sideBarOpened;
        var style = function (options) {
            var top = _this.getScrollYOffset(options);
            return {
                top: top,
                height: "calc(100vh - " + top + ")"
            };
        };
        return external_react_["createElement"](OptionsProvider_OptionsContext.Consumer, null, function (options) { return external_react_["createElement"](external_react_["Fragment"], null,
            external_react_["createElement"](StickyResponsiveSidebar_StyledStickySidebar, { open: open, className: _this.props.className, style: style(options), innerRef: function (el) {
                    _this.stickyElement = el;
                } }, _this.props.children),
            external_react_["createElement"](StickyResponsiveSidebar_FloatingButton, { onClick: _this.toggleNavMenu },
                external_react_["createElement"](ChevronSvg_AnimatedChevronButton, { open: open }))); });
    };
    StickyResponsiveSidebar = external_tslib_["__decorate"]([
        external_mobx_react_["observer"]
    ], StickyResponsiveSidebar);
    return StickyResponsiveSidebar;
}(external_react_["Component"]));

var StickyResponsiveSidebar_templateObject_2, StickyResponsiveSidebar_templateObject_1, StickyResponsiveSidebar_templateObject_3;

// CONCATENATED MODULE: ./src/components/Redoc/elements.tsx


var elements_RedocWrap = styled_components["c" /* default */].div(["font-family:", ";font-size:", ";line-height:", ";color:", ";display:flex;position:relative;text-align:left;-webkit-font-smoothing:", ";font-smoothing:", ";", ";tap-highlight-color:rgba(0,0,0,0);text-size-adjust:100%;*{box-sizing:border-box;-webkit-tap-highlight-color:rgba(255,255,255,0);}.redoc-markdown h1{padding-top:", "px;}a{text-decoration:none;color:", ";&:visited{color:", ";}&:hover{color:", ";}}"], function (props) { return props.theme.baseFont.family; }, function (props) { return props.theme.baseFont.size; }, function (props) { return props.theme.baseFont.lineHeight; }, function (props) { return props.theme.colors.text; }, function (props) { return props.theme.baseFont.smoothing; }, function (props) { return props.theme.baseFont.smoothing; }, function (props) { return props.theme.baseFont.optimizeSpeed && 'text-rendering: optimizeSpeed !important' || ''; }, function (props) { return props.theme.spacingUnit * 4; }, function (props) { return props.theme.links.color; }, function (props) { return props.theme.links.visited; }, function (props) { return props.theme.links.hover; });
var elements_ApiContent = styled_components["c" /* default */].div(["z-index:1;position:relative;overflow:hidden;width:calc(100% - ", ");", ";contain:layout;"], function (props) { return props.theme.menu.width; }, styled_components["f" /* media */].lessThan('small')(elements_templateObject_1 || (elements_templateObject_1 = external_tslib_["__makeTemplateObject"](["\n    width: 100%;\n  "], ["\n    width: 100%;\n  "]))));
var elements_BackgroundStub = styled_components["c" /* default */].div(["background:", ";position:absolute;top:0;bottom:0;right:0;width:calc((100% - ", ") * 0.4);", ";"], function (props) { return props.theme.rightPanel.backgroundColor; }, function (props) { return props.theme.menu.width; }, styled_components["f" /* media */].lessThan('medium')(elements_templateObject_2 || (elements_templateObject_2 = external_tslib_["__makeTemplateObject"](["\n    display: none;\n  "], ["\n    display: none;\n  "]))));
var elements_templateObject_1, elements_templateObject_2;

// CONCATENATED MODULE: ./src/components/SearchBox/elements.tsx



var elements_SearchWrap = styled_components["c" /* default */].div(["padding:5px 0;"]);
var elements_SearchInput = styled_components["c" /* default */].input.attrs({
    className: 'search-input'
})(["width:calc(100% - ", "px);box-sizing:border-box;margin:0 ", "px;padding:5px ", "px 5px ", "px;border:0;border-bottom:1px solid #e1e1e1;font-weight:bold;font-size:13px;color:", ";background-color:transparent;outline:none;"], function (props) { return props.theme.spacingUnit * 2; }, function (props) { return props.theme.spacingUnit; }, function (props) { return props.theme.spacingUnit / 2; }, function (props) { return props.theme.spacingUnit; }, function (props) { return props.theme.colors.text; });
var elements_SearchIcon = Object(styled_components["c" /* default */])(function (props) { return external_react_["createElement"]("svg", { className: props.className, version: "1.1", viewBox: "0 0 1000 1000", x: "0px", xmlns: "http://www.w3.org/2000/svg", y: "0px" },
    external_react_["createElement"]("path", { d: "M968.2,849.4L667.3,549c83.9-136.5,66.7-317.4-51.7-435.6C477.1-25,252.5-25,113.9,113.4c-138.5,138.3-138.5,362.6,0,501C219.2,730.1,413.2,743,547.6,666.5l301.9,301.4c43.6,43.6,76.9,14.9,104.2-12.4C981,928.3,1011.8,893,968.2,849.4z M524.5,522c-88.9,88.7-233,88.7-321.8,0c-88.9-88.7-88.9-232.6,0-321.3c88.9-88.7,233-88.7,321.8,0C613.4,289.4,613.4,433.3,524.5,522z" })); }).attrs({
    className: 'search-icon'
})(["position:absolute;left:", "px;height:1.8em;width:0.9em;path{fill:", ";}"], function (props) { return props.theme.spacingUnit; }, function (props) { return props.theme.colors.text; });
var elements_SearchResultsBox = styled_components["c" /* default */].div(["padding:", "px 0;background-color:#ededed;min-height:150px;max-height:250px;border-top:1px solid #e1e1e1;border-bottom:1px solid #e1e1e1;margin-top:10px;line-height:1.4;font-size:0.9em;overflow:auto;", "{padding-top:6px;padding-bottom:6px;&:hover{background-color:#e1e1e1;}> svg{display:none;}&.active{background-color:#e1e1e1;}}"], function (props) { return props.theme.spacingUnit / 4; }, styled_elements_MenuItemLabel);
var elements_ClearIcon = styled_components["c" /* default */].i(["position:absolute;display:inline-block;width:", "px;text-align:center;right:", "px;line-height:2em;vertical-align:middle;margin-right:2px;cursor:pointer;font-style:normal;color:'#666';"], function (props) { return props.theme.spacingUnit / 2; }, function (props) { return props.theme.spacingUnit; });

// CONCATENATED MODULE: ./src/components/SearchBox/SearchBox.tsx




var SearchBox_SearchBox = /** @class */ (function (_super) {
    external_tslib_["__extends"](SearchBox, _super);
    function SearchBox(props) {
        var _this = _super.call(this, props) || this;
        _this.activeItemRef = null;
        _this.clear = function () {
            _this.setState({
                results: [],
                term: '',
                activeItemIdx: -1
            });
            _this.props.marker.unmark();
        };
        _this.handleKeyDown = function (event) {
            if (event.keyCode === 27) {
                // ESQ
                _this.clear();
            }
            if (event.keyCode === 40) {
                // Arrow down
                _this.setState({
                    activeItemIdx: Math.min(_this.state.activeItemIdx + 1, _this.state.results.length - 1)
                });
                event.preventDefault();
            }
            if (event.keyCode === 38) {
                // Arrow up
                _this.setState({
                    activeItemIdx: Math.max(0, _this.state.activeItemIdx - 1)
                });
                event.preventDefault();
            }
            if (event.keyCode === 13) {
                // enter
                var activeResult = _this.state.results[_this.state.activeItemIdx];
                if (activeResult) {
                    var item = _this.props.getItemById(activeResult.id);
                    if (item) {
                        _this.props.onActivate(item);
                    }
                }
            }
        };
        _this.search = function (event) {
            var q = event.target.value;
            if (q.length < 3) {
                _this.clearResults(q);
                return;
            }
            _this.setState({
                term: q
            });
            _this.props.search.search(event.target.value).then(function (res) {
                _this.setResults(res, q);
            });
        };
        _this.state = {
            results: [],
            term: '',
            activeItemIdx: -1
        };
        return _this;
    }
    SearchBox.prototype.clearResults = function (term) {
        this.setState({
            results: [],
            term: term
        });
        this.props.marker.unmark();
    };
    SearchBox.prototype.setResults = function (results, term) {
        this.setState({
            results: results,
            term: term
        });
        this.props.marker.mark(term);
    };
    SearchBox.prototype.render = function () {
        var _this = this;
        var activeItemIdx = this.state.activeItemIdx;
        var results = this.state.results.map(function (res) { return ({
            item: _this.props.getItemById(res.id),
            score: res.score
        }); });
        results.sort(function (a, b) { return b.score - a.score; });
        return external_react_["createElement"](elements_SearchWrap, { role: "search" },
            this.state.term && external_react_["createElement"](elements_ClearIcon, { onClick: this.clear }, "\u00D7"),
            external_react_["createElement"](elements_SearchIcon, null),
            external_react_["createElement"](elements_SearchInput, { value: this.state.term, onKeyDown: this.handleKeyDown, placeholder: "Search...", type: "text", onChange: this.search }),
            results.length > 0 && external_react_["createElement"](elements_SearchResultsBox, { "data-role": "search:results" }, results.map(function (res, idx) { return external_react_["createElement"](MenuItem_MenuItem, { item: Object.create(res.item, {
                    active: {
                        value: idx === activeItemIdx
                    }
                }), onActivate: _this.props.onActivate, withoutChildren: true, key: res.item.id, "data-role": "search:result" }); })));
    };
    return SearchBox;
}(external_react_["PureComponent"]));


// CONCATENATED MODULE: ./src/components/Redoc/Redoc.tsx













var Redoc_Redoc = /** @class */ (function (_super) {
    external_tslib_["__extends"](Redoc, _super);
    function Redoc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Redoc.prototype.componentDidMount = function () {
        this.props.store.onDidMount();
    };
    Redoc.prototype.componentWillUnmount = function () {
        this.props.store.dispose();
    };
    Redoc.prototype.render = function () {
        var _a = this.props.store, spec = _a.spec, menu = _a.menu, options = _a.options, search = _a.search, marker = _a.marker;
        var store = this.props.store;
        return external_react_["createElement"](styled_components["a" /* ThemeProvider */], { theme: options.theme },
            external_react_["createElement"](OptionsProvider_OptionsProvider, { value: options },
                external_react_["createElement"](elements_RedocWrap, { className: "redoc-wrap" },
                    external_react_["createElement"](StickyResponsiveSidebar_StickyResponsiveSidebar, { menu: menu, className: "menu-content" },
                        external_react_["createElement"](ApiLogo_ApiLogo, { info: spec.info }),
                        external_react_["createElement"](SearchBox_SearchBox, { search: search, marker: marker, getItemById: menu.getItemById, onActivate: menu.activateAndScroll }),
                        external_react_["createElement"](SideMenu_SideMenu, { menu: menu })),
                    external_react_["createElement"](elements_ApiContent, { className: "api-content" },
                        external_react_["createElement"](ApiInfo_ApiInfo, { store: store }),
                        external_react_["createElement"](ContentItems_ContentItems, { items: menu.items })),
                    external_react_["createElement"](elements_BackgroundStub, null))));
    };
    Redoc.propTypes = {
        store: external_prop_types_["instanceOf"](AppStore_AppStore).isRequired
    };
    return Redoc;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/StoreProvider.ts




var StoreProvider_StoreProvider = /** @class */ (function (_super) {
    external_tslib_["__extends"](StoreProvider, _super);
    function StoreProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loading: true
        };
        return _this;
    }
    StoreProvider.prototype.componentDidMount = function () {
        this.load();
    };
    StoreProvider.prototype.load = function () {
        return external_tslib_["__awaiter"](this, void 0, void 0, function () {
            var _a, specUrl, spec, options, _b, e_1;
            return external_tslib_["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, specUrl = _a.specUrl, spec = _a.spec, options = _a.options;
                        this.setState({
                            loading: true
                        });
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        _b = this;
                        return [4 /*yield*/, Object(utils["w" /* loadAndBundleSpec */])(spec || specUrl)];
                    case 2:
                        _b._resolvedSpec = _c.sent();
                        this.updateStore(this._resolvedSpec, specUrl, options);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _c.sent();
                        this.setState({
                            error: e_1
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    StoreProvider.prototype.updateStore = function (resolvedSpec, specUrl, options) {
        try {
            this.setState({
                loading: false,
                store: new AppStore_AppStore(resolvedSpec, specUrl, options),
                error: undefined
            });
        }
        catch (e) {
            this.setState({
                error: e
            });
        }
    };
    StoreProvider.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (this.props.specUrl !== nextProps.specUrl || this.props.spec !== nextProps.spec) {
            setTimeout(function () { return _this.load(); }, 0);
            return;
        }
        if (this.props.options !== nextProps.options && this._resolvedSpec) {
            this.updateStore(this._resolvedSpec, nextProps.specUrl, nextProps.options);
        }
    };
    StoreProvider.prototype.setError = function (e) {
        this.setState({
            error: e
        });
    };
    StoreProvider.prototype.render = function () {
        if (this.state.error) {
            throw this.state.error;
        }
        return this.props.children(this.state);
    };
    return StoreProvider;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/RedocStandalone.tsx








var RedocStandalone_RedocStandalone = /** @class */ (function (_super) {
    external_tslib_["__extends"](RedocStandalone, _super);
    function RedocStandalone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RedocStandalone.prototype.render = function () {
        var _a = this.props, spec = _a.spec, specUrl = _a.specUrl, _b = _a.options, options = _b === void 0 ? {} : _b;
        var hideLoading = options.hideLoading !== undefined;
        var normalizedOpts = new RedocNormalizedOptions_RedocNormalizedOptions(options);
        return external_react_["createElement"](ErrorBoundary_ErrorBoundary, null,
            external_react_["createElement"](StoreProvider_StoreProvider, { spec: spec, specUrl: specUrl, options: options }, function (_a) {
                var loading = _a.loading, store = _a.store;
                return !loading ? external_react_["createElement"](Redoc_Redoc, { store: store }) : hideLoading ? null : external_react_["createElement"](Loading_Loading, { color: normalizedOpts.theme.colors.main });
            }));
    };
    RedocStandalone.propTypes = {
        spec: function (props, _, componentName) {
            if (!props.spec && !props.specUrl) {
                return new Error("One of props 'spec' or 'specUrl' was not specified in '" + componentName + "'.");
            }
            return null;
        },
        specUrl: function (props, _, componentName) {
            if (!props.spec && !props.specUrl) {
                return new Error("One of props 'spec' or 'specUrl' was not specified in '" + componentName + "'.");
            }
            return null;
        },
        options: external_prop_types_["object"]
    };
    return RedocStandalone;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./src/components/JsonViewer/index.tsx


// CONCATENATED MODULE: ./src/components/index.ts

 // export * from './Redoc/elements';







 // re-export the rest of components

// CONCATENATED MODULE: ./src/index.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "RedocStandalone", function() { return RedocStandalone_RedocStandalone; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Redoc", function() { return Redoc_Redoc; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SearchBox", function() { return SearchBox_SearchBox; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Operation", function() { return Operation_Operation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Loading", function() { return Loading_Loading; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ErrorBoundary", function() { return ErrorBoundary_ErrorBoundary; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "StoreProvider", function() { return StoreProvider_StoreProvider; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Schema", function() { return Schema_Schema; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ObjectSchema", function() { return ObjectSchema_ObjectSchema; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "OneOfButton", function() { return OneOfSchema_OneOfButton; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "OneOfSchema", function() { return OneOfSchema_OneOfSchema; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ArraySchema", function() { return ArraySchema_ArraySchema; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DiscriminatorDropdown", function() { return DiscriminatorDropdown_DiscriminatorDropdown; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "JsonViewer", function() { return JsonViewer_JsonViewer; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "createStore", function() { return AppStore_createStore; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "AppStore", function() { return AppStore_AppStore; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "OpenAPIParser", function() { return OpenAPIParser_OpenAPIParser; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "COMPONENT_REGEXP", function() { return MarkdownRenderer_COMPONENT_REGEXP; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "buildComponentComment", function() { return MarkdownRenderer_buildComponentComment; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MarkdownRenderer", function() { return MarkdownRenderer_MarkdownRenderer; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SECTION_ATTR", function() { return MenuStore_SECTION_ATTR; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MenuStore", function() { return MenuStore_MenuStore; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ScrollService", function() { return ScrollService_ScrollService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SpecStore", function() { return SpecStore_SpecStore; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ClipboardService", function() { return ClipboardService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService_HistoryService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ApiInfoModel", function() { return models_ApiInfo["a" /* ApiInfoModel */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SecuritySchemeModel", function() { return SecuritySchemes_SecuritySchemeModel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SecuritySchemesModel", function() { return SecuritySchemes_SecuritySchemesModel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "RedocNormalizedOptions", function() { return RedocNormalizedOptions_RedocNormalizedOptions; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GROUP_DEPTH", function() { return MenuBuilder_GROUP_DEPTH; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MenuBuilder", function() { return MenuBuilder_MenuBuilder; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SearchStore", function() { return SearchStore_SearchStore; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MarkerService", function() { return MarkerService_MarkerService; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "GroupModel", function() { return Group_model_GroupModel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "OperationModel", function() { return Operation_OperationModel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "RequestBodyModel", function() { return RequestBody_RequestBodyModel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ExampleModel", function() { return ExampleModel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MediaContentModel", function() { return MediaContent_MediaContentModel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MediaTypeModel", function() { return MediaType_MediaTypeModel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ResponseModel", function() { return Response_ResponseModel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SchemaModel", function() { return Schema_SchemaModel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "FieldModel", function() { return Field_FieldModel; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "JsonPointer", function() { return utils["b" /* JsonPointer */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "getStatusCodeType", function() { return utils["l" /* getStatusCodeType */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "isOperationName", function() { return utils["t" /* isOperationName */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "getOperationSummary", function() { return utils["k" /* getOperationSummary */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "detectType", function() { return utils["i" /* detectType */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "isPrimitiveType", function() { return utils["u" /* isPrimitiveType */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "isJsonLike", function() { return utils["q" /* isJsonLike */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "langFromMime", function() { return utils["v" /* langFromMime */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "isNamedDefinition", function() { return utils["r" /* isNamedDefinition */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "humanizeConstraints", function() { return utils["o" /* humanizeConstraints */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "sortByRequired", function() { return utils["D" /* sortByRequired */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "SECURITY_SCHEMES_SECTION", function() { return utils["c" /* SECURITY_SCHEMES_SECTION */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "mapWithLast", function() { return utils["z" /* mapWithLast */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "mapValues", function() { return utils["y" /* mapValues */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "flattenByProp", function() { return utils["j" /* flattenByProp */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "stripTrailingSlash", function() { return utils["E" /* stripTrailingSlash */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "isAbsolutePath", function() { return utils["p" /* isAbsolutePath */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "isNumeric", function() { return utils["s" /* isNumeric */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "appendToMdHeading", function() { return utils["e" /* appendToMdHeading */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "mergeObjects", function() { return utils["A" /* mergeObjects */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "mapLang", function() { return utils["x" /* mapLang */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "highlight", function() { return utils["m" /* highlight */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "loadAndBundleSpec", function() { return utils["w" /* loadAndBundleSpec */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "convertSwagger2OpenAPI", function() { return utils["f" /* convertSwagger2OpenAPI */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "IS_BROWSER", function() { return utils["a" /* IS_BROWSER */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "querySelector", function() { return utils["C" /* querySelector */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "html2Str", function() { return utils["n" /* html2Str */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "normalizeHash", function() { return utils["B" /* normalizeHash */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Throttle", function() { return utils["d" /* Throttle */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "debugTime", function() { return utils["g" /* debugTime */]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "debugTimeEnd", function() { return utils["h" /* debugTimeEnd */]; });





/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("stickyfill");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

function addMethods(worker, methods) {
    var c = 0;
    var callbacks = {};
    worker.addEventListener('message', function (e) {
        var d = e.data;
        if (d.type !== 'RPC') 
            { return; }
        if (d.id) {
            var f = callbacks[d.id];
            if (f) {
                delete callbacks[d.id];
                if (d.error) 
                    { f[1](d.error); }
                 else 
                    { f[0](d.result); }
            }
        } else {
            var evt = document.createEvent('Event');
            evt.initEvent(d.method);
            evt.data = d.params;
            worker.dispatchEvent(evt);
        }
    });
    methods.forEach(function (method) {
        worker[method] = (function () {
            var params = [], len = arguments.length;
            while ( len-- ) params[ len ] = arguments[ len ];

            return new Promise(function (a, b) {
            var id = ++c;
            callbacks[id] = [a,b];
            worker.postMessage({
                type: 'RPC',
                id: id,
                method: method,
                params: params
            });
        });
        });
    });
}

module.exports = addMethods;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {


				var addMethods = __webpack_require__(42)
				var methods = ["add","done","toJS","load","search"]
				module.exports = function() {
					var w = new Worker(URL.createObjectURL(new Blob(["/*!\n * ReDoc - OpenAPI/Swagger-generated API Reference Documentation\n * -------------------------------------------------------------\n *   Version: \"2.0.0-alpha.18\"\n *   Repo: https://github.com/Rebilly/ReDoc\n */\n/******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = 1);\n/******/ })\n/************************************************************************/\n/******/ ([\n/* 0 */\n/***/ (function(module, exports, __webpack_require__) {\n\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**\n * lunr - http://lunrjs.com - A bit like Solr, but much smaller and not as bright - 2.1.6\n * Copyright (C) 2018 Oliver Nightingale\n * @license MIT\n */\n\n;(function(){\n\n/**\n * A convenience function for configuring and constructing\n * a new lunr Index.\n *\n * A lunr.Builder instance is created and the pipeline setup\n * with a trimmer, stop word filter and stemmer.\n *\n * This builder object is yielded to the configuration function\n * that is passed as a parameter, allowing the list of fields\n * and other builder parameters to be customised.\n *\n * All documents _must_ be added within the passed config function.\n *\n * @example\n * var idx = lunr(function () {\n *   this.field('title')\n *   this.field('body')\n *   this.ref('id')\n *\n *   documents.forEach(function (doc) {\n *     this.add(doc)\n *   }, this)\n * })\n *\n * @see {@link lunr.Builder}\n * @see {@link lunr.Pipeline}\n * @see {@link lunr.trimmer}\n * @see {@link lunr.stopWordFilter}\n * @see {@link lunr.stemmer}\n * @namespace {function} lunr\n */\nvar lunr = function (config) {\n  var builder = new lunr.Builder\n\n  builder.pipeline.add(\n    lunr.trimmer,\n    lunr.stopWordFilter,\n    lunr.stemmer\n  )\n\n  builder.searchPipeline.add(\n    lunr.stemmer\n  )\n\n  config.call(builder, builder)\n  return builder.build()\n}\n\nlunr.version = \"2.1.6\"\n/*!\n * lunr.utils\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * A namespace containing utils for the rest of the lunr library\n */\nlunr.utils = {}\n\n/**\n * Print a warning message to the console.\n *\n * @param {String} message The message to be printed.\n * @memberOf Utils\n */\nlunr.utils.warn = (function (global) {\n  /* eslint-disable no-console */\n  return function (message) {\n    if (global.console && console.warn) {\n      console.warn(message)\n    }\n  }\n  /* eslint-enable no-console */\n})(this)\n\n/**\n * Convert an object to a string.\n *\n * In the case of `null` and `undefined` the function returns\n * the empty string, in all other cases the result of calling\n * `toString` on the passed object is returned.\n *\n * @param {Any} obj The object to convert to a string.\n * @return {String} string representation of the passed object.\n * @memberOf Utils\n */\nlunr.utils.asString = function (obj) {\n  if (obj === void 0 || obj === null) {\n    return \"\"\n  } else {\n    return obj.toString()\n  }\n}\nlunr.FieldRef = function (docRef, fieldName, stringValue) {\n  this.docRef = docRef\n  this.fieldName = fieldName\n  this._stringValue = stringValue\n}\n\nlunr.FieldRef.joiner = \"/\"\n\nlunr.FieldRef.fromString = function (s) {\n  var n = s.indexOf(lunr.FieldRef.joiner)\n\n  if (n === -1) {\n    throw \"malformed field ref string\"\n  }\n\n  var fieldRef = s.slice(0, n),\n      docRef = s.slice(n + 1)\n\n  return new lunr.FieldRef (docRef, fieldRef, s)\n}\n\nlunr.FieldRef.prototype.toString = function () {\n  if (this._stringValue == undefined) {\n    this._stringValue = this.fieldName + lunr.FieldRef.joiner + this.docRef\n  }\n\n  return this._stringValue\n}\n/**\n * A function to calculate the inverse document frequency for\n * a posting. This is shared between the builder and the index\n *\n * @private\n * @param {object} posting - The posting for a given term\n * @param {number} documentCount - The total number of documents.\n */\nlunr.idf = function (posting, documentCount) {\n  var documentsWithTerm = 0\n\n  for (var fieldName in posting) {\n    if (fieldName == '_index') continue // Ignore the term index, its not a field\n    documentsWithTerm += Object.keys(posting[fieldName]).length\n  }\n\n  var x = (documentCount - documentsWithTerm + 0.5) / (documentsWithTerm + 0.5)\n\n  return Math.log(1 + Math.abs(x))\n}\n\n/**\n * A token wraps a string representation of a token\n * as it is passed through the text processing pipeline.\n *\n * @constructor\n * @param {string} [str=''] - The string token being wrapped.\n * @param {object} [metadata={}] - Metadata associated with this token.\n */\nlunr.Token = function (str, metadata) {\n  this.str = str || \"\"\n  this.metadata = metadata || {}\n}\n\n/**\n * Returns the token string that is being wrapped by this object.\n *\n * @returns {string}\n */\nlunr.Token.prototype.toString = function () {\n  return this.str\n}\n\n/**\n * A token update function is used when updating or optionally\n * when cloning a token.\n *\n * @callback lunr.Token~updateFunction\n * @param {string} str - The string representation of the token.\n * @param {Object} metadata - All metadata associated with this token.\n */\n\n/**\n * Applies the given function to the wrapped string token.\n *\n * @example\n * token.update(function (str, metadata) {\n *   return str.toUpperCase()\n * })\n *\n * @param {lunr.Token~updateFunction} fn - A function to apply to the token string.\n * @returns {lunr.Token}\n */\nlunr.Token.prototype.update = function (fn) {\n  this.str = fn(this.str, this.metadata)\n  return this\n}\n\n/**\n * Creates a clone of this token. Optionally a function can be\n * applied to the cloned token.\n *\n * @param {lunr.Token~updateFunction} [fn] - An optional function to apply to the cloned token.\n * @returns {lunr.Token}\n */\nlunr.Token.prototype.clone = function (fn) {\n  fn = fn || function (s) { return s }\n  return new lunr.Token (fn(this.str, this.metadata), this.metadata)\n}\n/*!\n * lunr.tokenizer\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * A function for splitting a string into tokens ready to be inserted into\n * the search index. Uses `lunr.tokenizer.separator` to split strings, change\n * the value of this property to change how strings are split into tokens.\n *\n * This tokenizer will convert its parameter to a string by calling `toString` and\n * then will split this string on the character in `lunr.tokenizer.separator`.\n * Arrays will have their elements converted to strings and wrapped in a lunr.Token.\n *\n * @static\n * @param {?(string|object|object[])} obj - The object to convert into tokens\n * @returns {lunr.Token[]}\n */\nlunr.tokenizer = function (obj) {\n  if (obj == null || obj == undefined) {\n    return []\n  }\n\n  if (Array.isArray(obj)) {\n    return obj.map(function (t) {\n      return new lunr.Token(lunr.utils.asString(t).toLowerCase())\n    })\n  }\n\n  var str = obj.toString().trim().toLowerCase(),\n      len = str.length,\n      tokens = []\n\n  for (var sliceEnd = 0, sliceStart = 0; sliceEnd <= len; sliceEnd++) {\n    var char = str.charAt(sliceEnd),\n        sliceLength = sliceEnd - sliceStart\n\n    if ((char.match(lunr.tokenizer.separator) || sliceEnd == len)) {\n\n      if (sliceLength > 0) {\n        tokens.push(\n          new lunr.Token (str.slice(sliceStart, sliceEnd), {\n            position: [sliceStart, sliceLength],\n            index: tokens.length\n          })\n        )\n      }\n\n      sliceStart = sliceEnd + 1\n    }\n\n  }\n\n  return tokens\n}\n\n/**\n * The separator used to split a string into tokens. Override this property to change the behaviour of\n * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.\n *\n * @static\n * @see lunr.tokenizer\n */\nlunr.tokenizer.separator = /[\\s\\-]+/\n/*!\n * lunr.Pipeline\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * lunr.Pipelines maintain an ordered list of functions to be applied to all\n * tokens in documents entering the search index and queries being ran against\n * the index.\n *\n * An instance of lunr.Index created with the lunr shortcut will contain a\n * pipeline with a stop word filter and an English language stemmer. Extra\n * functions can be added before or after either of these functions or these\n * default functions can be removed.\n *\n * When run the pipeline will call each function in turn, passing a token, the\n * index of that token in the original list of all tokens and finally a list of\n * all the original tokens.\n *\n * The output of functions in the pipeline will be passed to the next function\n * in the pipeline. To exclude a token from entering the index the function\n * should return undefined, the rest of the pipeline will not be called with\n * this token.\n *\n * For serialisation of pipelines to work, all functions used in an instance of\n * a pipeline should be registered with lunr.Pipeline. Registered functions can\n * then be loaded. If trying to load a serialised pipeline that uses functions\n * that are not registered an error will be thrown.\n *\n * If not planning on serialising the pipeline then registering pipeline functions\n * is not necessary.\n *\n * @constructor\n */\nlunr.Pipeline = function () {\n  this._stack = []\n}\n\nlunr.Pipeline.registeredFunctions = Object.create(null)\n\n/**\n * A pipeline function maps lunr.Token to lunr.Token. A lunr.Token contains the token\n * string as well as all known metadata. A pipeline function can mutate the token string\n * or mutate (or add) metadata for a given token.\n *\n * A pipeline function can indicate that the passed token should be discarded by returning\n * null. This token will not be passed to any downstream pipeline functions and will not be\n * added to the index.\n *\n * Multiple tokens can be returned by returning an array of tokens. Each token will be passed\n * to any downstream pipeline functions and all will returned tokens will be added to the index.\n *\n * Any number of pipeline functions may be chained together using a lunr.Pipeline.\n *\n * @interface lunr.PipelineFunction\n * @param {lunr.Token} token - A token from the document being processed.\n * @param {number} i - The index of this token in the complete list of tokens for this document/field.\n * @param {lunr.Token[]} tokens - All tokens for this document/field.\n * @returns {(?lunr.Token|lunr.Token[])}\n */\n\n/**\n * Register a function with the pipeline.\n *\n * Functions that are used in the pipeline should be registered if the pipeline\n * needs to be serialised, or a serialised pipeline needs to be loaded.\n *\n * Registering a function does not add it to a pipeline, functions must still be\n * added to instances of the pipeline for them to be used when running a pipeline.\n *\n * @param {lunr.PipelineFunction} fn - The function to check for.\n * @param {String} label - The label to register this function with\n */\nlunr.Pipeline.registerFunction = function (fn, label) {\n  if (label in this.registeredFunctions) {\n    lunr.utils.warn('Overwriting existing registered function: ' + label)\n  }\n\n  fn.label = label\n  lunr.Pipeline.registeredFunctions[fn.label] = fn\n}\n\n/**\n * Warns if the function is not registered as a Pipeline function.\n *\n * @param {lunr.PipelineFunction} fn - The function to check for.\n * @private\n */\nlunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {\n  var isRegistered = fn.label && (fn.label in this.registeredFunctions)\n\n  if (!isRegistered) {\n    lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\\n', fn)\n  }\n}\n\n/**\n * Loads a previously serialised pipeline.\n *\n * All functions to be loaded must already be registered with lunr.Pipeline.\n * If any function from the serialised data has not been registered then an\n * error will be thrown.\n *\n * @param {Object} serialised - The serialised pipeline to load.\n * @returns {lunr.Pipeline}\n */\nlunr.Pipeline.load = function (serialised) {\n  var pipeline = new lunr.Pipeline\n\n  serialised.forEach(function (fnName) {\n    var fn = lunr.Pipeline.registeredFunctions[fnName]\n\n    if (fn) {\n      pipeline.add(fn)\n    } else {\n      throw new Error('Cannot load unregistered function: ' + fnName)\n    }\n  })\n\n  return pipeline\n}\n\n/**\n * Adds new functions to the end of the pipeline.\n *\n * Logs a warning if the function has not been registered.\n *\n * @param {lunr.PipelineFunction[]} functions - Any number of functions to add to the pipeline.\n */\nlunr.Pipeline.prototype.add = function () {\n  var fns = Array.prototype.slice.call(arguments)\n\n  fns.forEach(function (fn) {\n    lunr.Pipeline.warnIfFunctionNotRegistered(fn)\n    this._stack.push(fn)\n  }, this)\n}\n\n/**\n * Adds a single function after a function that already exists in the\n * pipeline.\n *\n * Logs a warning if the function has not been registered.\n *\n * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.\n * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.\n */\nlunr.Pipeline.prototype.after = function (existingFn, newFn) {\n  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)\n\n  var pos = this._stack.indexOf(existingFn)\n  if (pos == -1) {\n    throw new Error('Cannot find existingFn')\n  }\n\n  pos = pos + 1\n  this._stack.splice(pos, 0, newFn)\n}\n\n/**\n * Adds a single function before a function that already exists in the\n * pipeline.\n *\n * Logs a warning if the function has not been registered.\n *\n * @param {lunr.PipelineFunction} existingFn - A function that already exists in the pipeline.\n * @param {lunr.PipelineFunction} newFn - The new function to add to the pipeline.\n */\nlunr.Pipeline.prototype.before = function (existingFn, newFn) {\n  lunr.Pipeline.warnIfFunctionNotRegistered(newFn)\n\n  var pos = this._stack.indexOf(existingFn)\n  if (pos == -1) {\n    throw new Error('Cannot find existingFn')\n  }\n\n  this._stack.splice(pos, 0, newFn)\n}\n\n/**\n * Removes a function from the pipeline.\n *\n * @param {lunr.PipelineFunction} fn The function to remove from the pipeline.\n */\nlunr.Pipeline.prototype.remove = function (fn) {\n  var pos = this._stack.indexOf(fn)\n  if (pos == -1) {\n    return\n  }\n\n  this._stack.splice(pos, 1)\n}\n\n/**\n * Runs the current list of functions that make up the pipeline against the\n * passed tokens.\n *\n * @param {Array} tokens The tokens to run through the pipeline.\n * @returns {Array}\n */\nlunr.Pipeline.prototype.run = function (tokens) {\n  var stackLength = this._stack.length\n\n  for (var i = 0; i < stackLength; i++) {\n    var fn = this._stack[i]\n    var memo = []\n\n    for (var j = 0; j < tokens.length; j++) {\n      var result = fn(tokens[j], j, tokens)\n\n      if (result === void 0 || result === '') continue\n\n      if (result instanceof Array) {\n        for (var k = 0; k < result.length; k++) {\n          memo.push(result[k])\n        }\n      } else {\n        memo.push(result)\n      }\n    }\n\n    tokens = memo\n  }\n\n  return tokens\n}\n\n/**\n * Convenience method for passing a string through a pipeline and getting\n * strings out. This method takes care of wrapping the passed string in a\n * token and mapping the resulting tokens back to strings.\n *\n * @param {string} str - The string to pass through the pipeline.\n * @returns {string[]}\n */\nlunr.Pipeline.prototype.runString = function (str) {\n  var token = new lunr.Token (str)\n\n  return this.run([token]).map(function (t) {\n    return t.toString()\n  })\n}\n\n/**\n * Resets the pipeline by removing any existing processors.\n *\n */\nlunr.Pipeline.prototype.reset = function () {\n  this._stack = []\n}\n\n/**\n * Returns a representation of the pipeline ready for serialisation.\n *\n * Logs a warning if the function has not been registered.\n *\n * @returns {Array}\n */\nlunr.Pipeline.prototype.toJSON = function () {\n  return this._stack.map(function (fn) {\n    lunr.Pipeline.warnIfFunctionNotRegistered(fn)\n\n    return fn.label\n  })\n}\n/*!\n * lunr.Vector\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * A vector is used to construct the vector space of documents and queries. These\n * vectors support operations to determine the similarity between two documents or\n * a document and a query.\n *\n * Normally no parameters are required for initializing a vector, but in the case of\n * loading a previously dumped vector the raw elements can be provided to the constructor.\n *\n * For performance reasons vectors are implemented with a flat array, where an elements\n * index is immediately followed by its value. E.g. [index, value, index, value]. This\n * allows the underlying array to be as sparse as possible and still offer decent\n * performance when being used for vector calculations.\n *\n * @constructor\n * @param {Number[]} [elements] - The flat list of element index and element value pairs.\n */\nlunr.Vector = function (elements) {\n  this._magnitude = 0\n  this.elements = elements || []\n}\n\n\n/**\n * Calculates the position within the vector to insert a given index.\n *\n * This is used internally by insert and upsert. If there are duplicate indexes then\n * the position is returned as if the value for that index were to be updated, but it\n * is the callers responsibility to check whether there is a duplicate at that index\n *\n * @param {Number} insertIdx - The index at which the element should be inserted.\n * @returns {Number}\n */\nlunr.Vector.prototype.positionForIndex = function (index) {\n  // For an empty vector the tuple can be inserted at the beginning\n  if (this.elements.length == 0) {\n    return 0\n  }\n\n  var start = 0,\n      end = this.elements.length / 2,\n      sliceLength = end - start,\n      pivotPoint = Math.floor(sliceLength / 2),\n      pivotIndex = this.elements[pivotPoint * 2]\n\n  while (sliceLength > 1) {\n    if (pivotIndex < index) {\n      start = pivotPoint\n    }\n\n    if (pivotIndex > index) {\n      end = pivotPoint\n    }\n\n    if (pivotIndex == index) {\n      break\n    }\n\n    sliceLength = end - start\n    pivotPoint = start + Math.floor(sliceLength / 2)\n    pivotIndex = this.elements[pivotPoint * 2]\n  }\n\n  if (pivotIndex == index) {\n    return pivotPoint * 2\n  }\n\n  if (pivotIndex > index) {\n    return pivotPoint * 2\n  }\n\n  if (pivotIndex < index) {\n    return (pivotPoint + 1) * 2\n  }\n}\n\n/**\n * Inserts an element at an index within the vector.\n *\n * Does not allow duplicates, will throw an error if there is already an entry\n * for this index.\n *\n * @param {Number} insertIdx - The index at which the element should be inserted.\n * @param {Number} val - The value to be inserted into the vector.\n */\nlunr.Vector.prototype.insert = function (insertIdx, val) {\n  this.upsert(insertIdx, val, function () {\n    throw \"duplicate index\"\n  })\n}\n\n/**\n * Inserts or updates an existing index within the vector.\n *\n * @param {Number} insertIdx - The index at which the element should be inserted.\n * @param {Number} val - The value to be inserted into the vector.\n * @param {function} fn - A function that is called for updates, the existing value and the\n * requested value are passed as arguments\n */\nlunr.Vector.prototype.upsert = function (insertIdx, val, fn) {\n  this._magnitude = 0\n  var position = this.positionForIndex(insertIdx)\n\n  if (this.elements[position] == insertIdx) {\n    this.elements[position + 1] = fn(this.elements[position + 1], val)\n  } else {\n    this.elements.splice(position, 0, insertIdx, val)\n  }\n}\n\n/**\n * Calculates the magnitude of this vector.\n *\n * @returns {Number}\n */\nlunr.Vector.prototype.magnitude = function () {\n  if (this._magnitude) return this._magnitude\n\n  var sumOfSquares = 0,\n      elementsLength = this.elements.length\n\n  for (var i = 1; i < elementsLength; i += 2) {\n    var val = this.elements[i]\n    sumOfSquares += val * val\n  }\n\n  return this._magnitude = Math.sqrt(sumOfSquares)\n}\n\n/**\n * Calculates the dot product of this vector and another vector.\n *\n * @param {lunr.Vector} otherVector - The vector to compute the dot product with.\n * @returns {Number}\n */\nlunr.Vector.prototype.dot = function (otherVector) {\n  var dotProduct = 0,\n      a = this.elements, b = otherVector.elements,\n      aLen = a.length, bLen = b.length,\n      aVal = 0, bVal = 0,\n      i = 0, j = 0\n\n  while (i < aLen && j < bLen) {\n    aVal = a[i], bVal = b[j]\n    if (aVal < bVal) {\n      i += 2\n    } else if (aVal > bVal) {\n      j += 2\n    } else if (aVal == bVal) {\n      dotProduct += a[i + 1] * b[j + 1]\n      i += 2\n      j += 2\n    }\n  }\n\n  return dotProduct\n}\n\n/**\n * Calculates the cosine similarity between this vector and another\n * vector.\n *\n * @param {lunr.Vector} otherVector - The other vector to calculate the\n * similarity with.\n * @returns {Number}\n */\nlunr.Vector.prototype.similarity = function (otherVector) {\n  return this.dot(otherVector) / (this.magnitude() * otherVector.magnitude())\n}\n\n/**\n * Converts the vector to an array of the elements within the vector.\n *\n * @returns {Number[]}\n */\nlunr.Vector.prototype.toArray = function () {\n  var output = new Array (this.elements.length / 2)\n\n  for (var i = 1, j = 0; i < this.elements.length; i += 2, j++) {\n    output[j] = this.elements[i]\n  }\n\n  return output\n}\n\n/**\n * A JSON serializable representation of the vector.\n *\n * @returns {Number[]}\n */\nlunr.Vector.prototype.toJSON = function () {\n  return this.elements\n}\n/* eslint-disable */\n/*!\n * lunr.stemmer\n * Copyright (C) 2018 Oliver Nightingale\n * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt\n */\n\n/**\n * lunr.stemmer is an english language stemmer, this is a JavaScript\n * implementation of the PorterStemmer taken from http://tartarus.org/~martin\n *\n * @static\n * @implements {lunr.PipelineFunction}\n * @param {lunr.Token} token - The string to stem\n * @returns {lunr.Token}\n * @see {@link lunr.Pipeline}\n */\nlunr.stemmer = (function(){\n  var step2list = {\n      \"ational\" : \"ate\",\n      \"tional\" : \"tion\",\n      \"enci\" : \"ence\",\n      \"anci\" : \"ance\",\n      \"izer\" : \"ize\",\n      \"bli\" : \"ble\",\n      \"alli\" : \"al\",\n      \"entli\" : \"ent\",\n      \"eli\" : \"e\",\n      \"ousli\" : \"ous\",\n      \"ization\" : \"ize\",\n      \"ation\" : \"ate\",\n      \"ator\" : \"ate\",\n      \"alism\" : \"al\",\n      \"iveness\" : \"ive\",\n      \"fulness\" : \"ful\",\n      \"ousness\" : \"ous\",\n      \"aliti\" : \"al\",\n      \"iviti\" : \"ive\",\n      \"biliti\" : \"ble\",\n      \"logi\" : \"log\"\n    },\n\n    step3list = {\n      \"icate\" : \"ic\",\n      \"ative\" : \"\",\n      \"alize\" : \"al\",\n      \"iciti\" : \"ic\",\n      \"ical\" : \"ic\",\n      \"ful\" : \"\",\n      \"ness\" : \"\"\n    },\n\n    c = \"[^aeiou]\",          // consonant\n    v = \"[aeiouy]\",          // vowel\n    C = c + \"[^aeiouy]*\",    // consonant sequence\n    V = v + \"[aeiou]*\",      // vowel sequence\n\n    mgr0 = \"^(\" + C + \")?\" + V + C,               // [C]VC... is m>0\n    meq1 = \"^(\" + C + \")?\" + V + C + \"(\" + V + \")?$\",  // [C]VC[V] is m=1\n    mgr1 = \"^(\" + C + \")?\" + V + C + V + C,       // [C]VCVC... is m>1\n    s_v = \"^(\" + C + \")?\" + v;                   // vowel in stem\n\n  var re_mgr0 = new RegExp(mgr0);\n  var re_mgr1 = new RegExp(mgr1);\n  var re_meq1 = new RegExp(meq1);\n  var re_s_v = new RegExp(s_v);\n\n  var re_1a = /^(.+?)(ss|i)es$/;\n  var re2_1a = /^(.+?)([^s])s$/;\n  var re_1b = /^(.+?)eed$/;\n  var re2_1b = /^(.+?)(ed|ing)$/;\n  var re_1b_2 = /.$/;\n  var re2_1b_2 = /(at|bl|iz)$/;\n  var re3_1b_2 = new RegExp(\"([^aeiouylsz])\\\\1$\");\n  var re4_1b_2 = new RegExp(\"^\" + C + v + \"[^aeiouwxy]$\");\n\n  var re_1c = /^(.+?[^aeiou])y$/;\n  var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;\n\n  var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;\n\n  var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;\n  var re2_4 = /^(.+?)(s|t)(ion)$/;\n\n  var re_5 = /^(.+?)e$/;\n  var re_5_1 = /ll$/;\n  var re3_5 = new RegExp(\"^\" + C + v + \"[^aeiouwxy]$\");\n\n  var porterStemmer = function porterStemmer(w) {\n    var stem,\n      suffix,\n      firstch,\n      re,\n      re2,\n      re3,\n      re4;\n\n    if (w.length < 3) { return w; }\n\n    firstch = w.substr(0,1);\n    if (firstch == \"y\") {\n      w = firstch.toUpperCase() + w.substr(1);\n    }\n\n    // Step 1a\n    re = re_1a\n    re2 = re2_1a;\n\n    if (re.test(w)) { w = w.replace(re,\"$1$2\"); }\n    else if (re2.test(w)) { w = w.replace(re2,\"$1$2\"); }\n\n    // Step 1b\n    re = re_1b;\n    re2 = re2_1b;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      re = re_mgr0;\n      if (re.test(fp[1])) {\n        re = re_1b_2;\n        w = w.replace(re,\"\");\n      }\n    } else if (re2.test(w)) {\n      var fp = re2.exec(w);\n      stem = fp[1];\n      re2 = re_s_v;\n      if (re2.test(stem)) {\n        w = stem;\n        re2 = re2_1b_2;\n        re3 = re3_1b_2;\n        re4 = re4_1b_2;\n        if (re2.test(w)) { w = w + \"e\"; }\n        else if (re3.test(w)) { re = re_1b_2; w = w.replace(re,\"\"); }\n        else if (re4.test(w)) { w = w + \"e\"; }\n      }\n    }\n\n    // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)\n    re = re_1c;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      stem = fp[1];\n      w = stem + \"i\";\n    }\n\n    // Step 2\n    re = re_2;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      stem = fp[1];\n      suffix = fp[2];\n      re = re_mgr0;\n      if (re.test(stem)) {\n        w = stem + step2list[suffix];\n      }\n    }\n\n    // Step 3\n    re = re_3;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      stem = fp[1];\n      suffix = fp[2];\n      re = re_mgr0;\n      if (re.test(stem)) {\n        w = stem + step3list[suffix];\n      }\n    }\n\n    // Step 4\n    re = re_4;\n    re2 = re2_4;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      stem = fp[1];\n      re = re_mgr1;\n      if (re.test(stem)) {\n        w = stem;\n      }\n    } else if (re2.test(w)) {\n      var fp = re2.exec(w);\n      stem = fp[1] + fp[2];\n      re2 = re_mgr1;\n      if (re2.test(stem)) {\n        w = stem;\n      }\n    }\n\n    // Step 5\n    re = re_5;\n    if (re.test(w)) {\n      var fp = re.exec(w);\n      stem = fp[1];\n      re = re_mgr1;\n      re2 = re_meq1;\n      re3 = re3_5;\n      if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {\n        w = stem;\n      }\n    }\n\n    re = re_5_1;\n    re2 = re_mgr1;\n    if (re.test(w) && re2.test(w)) {\n      re = re_1b_2;\n      w = w.replace(re,\"\");\n    }\n\n    // and turn initial Y back to y\n\n    if (firstch == \"y\") {\n      w = firstch.toLowerCase() + w.substr(1);\n    }\n\n    return w;\n  };\n\n  return function (token) {\n    return token.update(porterStemmer);\n  }\n})();\n\nlunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer')\n/*!\n * lunr.stopWordFilter\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * lunr.generateStopWordFilter builds a stopWordFilter function from the provided\n * list of stop words.\n *\n * The built in lunr.stopWordFilter is built using this generator and can be used\n * to generate custom stopWordFilters for applications or non English languages.\n *\n * @param {Array} token The token to pass through the filter\n * @returns {lunr.PipelineFunction}\n * @see lunr.Pipeline\n * @see lunr.stopWordFilter\n */\nlunr.generateStopWordFilter = function (stopWords) {\n  var words = stopWords.reduce(function (memo, stopWord) {\n    memo[stopWord] = stopWord\n    return memo\n  }, {})\n\n  return function (token) {\n    if (token && words[token.toString()] !== token.toString()) return token\n  }\n}\n\n/**\n * lunr.stopWordFilter is an English language stop word list filter, any words\n * contained in the list will not be passed through the filter.\n *\n * This is intended to be used in the Pipeline. If the token does not pass the\n * filter then undefined will be returned.\n *\n * @implements {lunr.PipelineFunction}\n * @params {lunr.Token} token - A token to check for being a stop word.\n * @returns {lunr.Token}\n * @see {@link lunr.Pipeline}\n */\nlunr.stopWordFilter = lunr.generateStopWordFilter([\n  'a',\n  'able',\n  'about',\n  'across',\n  'after',\n  'all',\n  'almost',\n  'also',\n  'am',\n  'among',\n  'an',\n  'and',\n  'any',\n  'are',\n  'as',\n  'at',\n  'be',\n  'because',\n  'been',\n  'but',\n  'by',\n  'can',\n  'cannot',\n  'could',\n  'dear',\n  'did',\n  'do',\n  'does',\n  'either',\n  'else',\n  'ever',\n  'every',\n  'for',\n  'from',\n  'get',\n  'got',\n  'had',\n  'has',\n  'have',\n  'he',\n  'her',\n  'hers',\n  'him',\n  'his',\n  'how',\n  'however',\n  'i',\n  'if',\n  'in',\n  'into',\n  'is',\n  'it',\n  'its',\n  'just',\n  'least',\n  'let',\n  'like',\n  'likely',\n  'may',\n  'me',\n  'might',\n  'most',\n  'must',\n  'my',\n  'neither',\n  'no',\n  'nor',\n  'not',\n  'of',\n  'off',\n  'often',\n  'on',\n  'only',\n  'or',\n  'other',\n  'our',\n  'own',\n  'rather',\n  'said',\n  'say',\n  'says',\n  'she',\n  'should',\n  'since',\n  'so',\n  'some',\n  'than',\n  'that',\n  'the',\n  'their',\n  'them',\n  'then',\n  'there',\n  'these',\n  'they',\n  'this',\n  'tis',\n  'to',\n  'too',\n  'twas',\n  'us',\n  'wants',\n  'was',\n  'we',\n  'were',\n  'what',\n  'when',\n  'where',\n  'which',\n  'while',\n  'who',\n  'whom',\n  'why',\n  'will',\n  'with',\n  'would',\n  'yet',\n  'you',\n  'your'\n])\n\nlunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter')\n/*!\n * lunr.trimmer\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * lunr.trimmer is a pipeline function for trimming non word\n * characters from the beginning and end of tokens before they\n * enter the index.\n *\n * This implementation may not work correctly for non latin\n * characters and should either be removed or adapted for use\n * with languages with non-latin characters.\n *\n * @static\n * @implements {lunr.PipelineFunction}\n * @param {lunr.Token} token The token to pass through the filter\n * @returns {lunr.Token}\n * @see lunr.Pipeline\n */\nlunr.trimmer = function (token) {\n  return token.update(function (s) {\n    return s.replace(/^\\W+/, '').replace(/\\W+$/, '')\n  })\n}\n\nlunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')\n/*!\n * lunr.TokenSet\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * A token set is used to store the unique list of all tokens\n * within an index. Token sets are also used to represent an\n * incoming query to the index, this query token set and index\n * token set are then intersected to find which tokens to look\n * up in the inverted index.\n *\n * A token set can hold multiple tokens, as in the case of the\n * index token set, or it can hold a single token as in the\n * case of a simple query token set.\n *\n * Additionally token sets are used to perform wildcard matching.\n * Leading, contained and trailing wildcards are supported, and\n * from this edit distance matching can also be provided.\n *\n * Token sets are implemented as a minimal finite state automata,\n * where both common prefixes and suffixes are shared between tokens.\n * This helps to reduce the space used for storing the token set.\n *\n * @constructor\n */\nlunr.TokenSet = function () {\n  this.final = false\n  this.edges = {}\n  this.id = lunr.TokenSet._nextId\n  lunr.TokenSet._nextId += 1\n}\n\n/**\n * Keeps track of the next, auto increment, identifier to assign\n * to a new tokenSet.\n *\n * TokenSets require a unique identifier to be correctly minimised.\n *\n * @private\n */\nlunr.TokenSet._nextId = 1\n\n/**\n * Creates a TokenSet instance from the given sorted array of words.\n *\n * @param {String[]} arr - A sorted array of strings to create the set from.\n * @returns {lunr.TokenSet}\n * @throws Will throw an error if the input array is not sorted.\n */\nlunr.TokenSet.fromArray = function (arr) {\n  var builder = new lunr.TokenSet.Builder\n\n  for (var i = 0, len = arr.length; i < len; i++) {\n    builder.insert(arr[i])\n  }\n\n  builder.finish()\n  return builder.root\n}\n\n/**\n * Creates a token set from a query clause.\n *\n * @private\n * @param {Object} clause - A single clause from lunr.Query.\n * @param {string} clause.term - The query clause term.\n * @param {number} [clause.editDistance] - The optional edit distance for the term.\n * @returns {lunr.TokenSet}\n */\nlunr.TokenSet.fromClause = function (clause) {\n  if ('editDistance' in clause) {\n    return lunr.TokenSet.fromFuzzyString(clause.term, clause.editDistance)\n  } else {\n    return lunr.TokenSet.fromString(clause.term)\n  }\n}\n\n/**\n * Creates a token set representing a single string with a specified\n * edit distance.\n *\n * Insertions, deletions, substitutions and transpositions are each\n * treated as an edit distance of 1.\n *\n * Increasing the allowed edit distance will have a dramatic impact\n * on the performance of both creating and intersecting these TokenSets.\n * It is advised to keep the edit distance less than 3.\n *\n * @param {string} str - The string to create the token set from.\n * @param {number} editDistance - The allowed edit distance to match.\n * @returns {lunr.Vector}\n */\nlunr.TokenSet.fromFuzzyString = function (str, editDistance) {\n  var root = new lunr.TokenSet\n\n  var stack = [{\n    node: root,\n    editsRemaining: editDistance,\n    str: str\n  }]\n\n  while (stack.length) {\n    var frame = stack.pop()\n\n    // no edit\n    if (frame.str.length > 0) {\n      var char = frame.str.charAt(0),\n          noEditNode\n\n      if (char in frame.node.edges) {\n        noEditNode = frame.node.edges[char]\n      } else {\n        noEditNode = new lunr.TokenSet\n        frame.node.edges[char] = noEditNode\n      }\n\n      if (frame.str.length == 1) {\n        noEditNode.final = true\n      } else {\n        stack.push({\n          node: noEditNode,\n          editsRemaining: frame.editsRemaining,\n          str: frame.str.slice(1)\n        })\n      }\n    }\n\n    // deletion\n    // can only do a deletion if we have enough edits remaining\n    // and if there are characters left to delete in the string\n    if (frame.editsRemaining > 0 && frame.str.length > 1) {\n      var char = frame.str.charAt(1),\n          deletionNode\n\n      if (char in frame.node.edges) {\n        deletionNode = frame.node.edges[char]\n      } else {\n        deletionNode = new lunr.TokenSet\n        frame.node.edges[char] = deletionNode\n      }\n\n      if (frame.str.length <= 2) {\n        deletionNode.final = true\n      } else {\n        stack.push({\n          node: deletionNode,\n          editsRemaining: frame.editsRemaining - 1,\n          str: frame.str.slice(2)\n        })\n      }\n    }\n\n    // deletion\n    // just removing the last character from the str\n    if (frame.editsRemaining > 0 && frame.str.length == 1) {\n      frame.node.final = true\n    }\n\n    // substitution\n    // can only do a substitution if we have enough edits remaining\n    // and if there are characters left to substitute\n    if (frame.editsRemaining > 0 && frame.str.length >= 1) {\n      if (\"*\" in frame.node.edges) {\n        var substitutionNode = frame.node.edges[\"*\"]\n      } else {\n        var substitutionNode = new lunr.TokenSet\n        frame.node.edges[\"*\"] = substitutionNode\n      }\n\n      if (frame.str.length == 1) {\n        substitutionNode.final = true\n      } else {\n        stack.push({\n          node: substitutionNode,\n          editsRemaining: frame.editsRemaining - 1,\n          str: frame.str.slice(1)\n        })\n      }\n    }\n\n    // insertion\n    // can only do insertion if there are edits remaining\n    if (frame.editsRemaining > 0) {\n      if (\"*\" in frame.node.edges) {\n        var insertionNode = frame.node.edges[\"*\"]\n      } else {\n        var insertionNode = new lunr.TokenSet\n        frame.node.edges[\"*\"] = insertionNode\n      }\n\n      if (frame.str.length == 0) {\n        insertionNode.final = true\n      } else {\n        stack.push({\n          node: insertionNode,\n          editsRemaining: frame.editsRemaining - 1,\n          str: frame.str\n        })\n      }\n    }\n\n    // transposition\n    // can only do a transposition if there are edits remaining\n    // and there are enough characters to transpose\n    if (frame.editsRemaining > 0 && frame.str.length > 1) {\n      var charA = frame.str.charAt(0),\n          charB = frame.str.charAt(1),\n          transposeNode\n\n      if (charB in frame.node.edges) {\n        transposeNode = frame.node.edges[charB]\n      } else {\n        transposeNode = new lunr.TokenSet\n        frame.node.edges[charB] = transposeNode\n      }\n\n      if (frame.str.length == 1) {\n        transposeNode.final = true\n      } else {\n        stack.push({\n          node: transposeNode,\n          editsRemaining: frame.editsRemaining - 1,\n          str: charA + frame.str.slice(2)\n        })\n      }\n    }\n  }\n\n  return root\n}\n\n/**\n * Creates a TokenSet from a string.\n *\n * The string may contain one or more wildcard characters (*)\n * that will allow wildcard matching when intersecting with\n * another TokenSet.\n *\n * @param {string} str - The string to create a TokenSet from.\n * @returns {lunr.TokenSet}\n */\nlunr.TokenSet.fromString = function (str) {\n  var node = new lunr.TokenSet,\n      root = node,\n      wildcardFound = false\n\n  /*\n   * Iterates through all characters within the passed string\n   * appending a node for each character.\n   *\n   * As soon as a wildcard character is found then a self\n   * referencing edge is introduced to continually match\n   * any number of any characters.\n   */\n  for (var i = 0, len = str.length; i < len; i++) {\n    var char = str[i],\n        final = (i == len - 1)\n\n    if (char == \"*\") {\n      wildcardFound = true\n      node.edges[char] = node\n      node.final = final\n\n    } else {\n      var next = new lunr.TokenSet\n      next.final = final\n\n      node.edges[char] = next\n      node = next\n\n      // TODO: is this needed anymore?\n      if (wildcardFound) {\n        node.edges[\"*\"] = root\n      }\n    }\n  }\n\n  return root\n}\n\n/**\n * Converts this TokenSet into an array of strings\n * contained within the TokenSet.\n *\n * @returns {string[]}\n */\nlunr.TokenSet.prototype.toArray = function () {\n  var words = []\n\n  var stack = [{\n    prefix: \"\",\n    node: this\n  }]\n\n  while (stack.length) {\n    var frame = stack.pop(),\n        edges = Object.keys(frame.node.edges),\n        len = edges.length\n\n    if (frame.node.final) {\n      words.push(frame.prefix)\n    }\n\n    for (var i = 0; i < len; i++) {\n      var edge = edges[i]\n\n      stack.push({\n        prefix: frame.prefix.concat(edge),\n        node: frame.node.edges[edge]\n      })\n    }\n  }\n\n  return words\n}\n\n/**\n * Generates a string representation of a TokenSet.\n *\n * This is intended to allow TokenSets to be used as keys\n * in objects, largely to aid the construction and minimisation\n * of a TokenSet. As such it is not designed to be a human\n * friendly representation of the TokenSet.\n *\n * @returns {string}\n */\nlunr.TokenSet.prototype.toString = function () {\n  // NOTE: Using Object.keys here as this.edges is very likely\n  // to enter 'hash-mode' with many keys being added\n  //\n  // avoiding a for-in loop here as it leads to the function\n  // being de-optimised (at least in V8). From some simple\n  // benchmarks the performance is comparable, but allowing\n  // V8 to optimize may mean easy performance wins in the future.\n\n  if (this._str) {\n    return this._str\n  }\n\n  var str = this.final ? '1' : '0',\n      labels = Object.keys(this.edges).sort(),\n      len = labels.length\n\n  for (var i = 0; i < len; i++) {\n    var label = labels[i],\n        node = this.edges[label]\n\n    str = str + label + node.id\n  }\n\n  return str\n}\n\n/**\n * Returns a new TokenSet that is the intersection of\n * this TokenSet and the passed TokenSet.\n *\n * This intersection will take into account any wildcards\n * contained within the TokenSet.\n *\n * @param {lunr.TokenSet} b - An other TokenSet to intersect with.\n * @returns {lunr.TokenSet}\n */\nlunr.TokenSet.prototype.intersect = function (b) {\n  var output = new lunr.TokenSet,\n      frame = undefined\n\n  var stack = [{\n    qNode: b,\n    output: output,\n    node: this\n  }]\n\n  while (stack.length) {\n    frame = stack.pop()\n\n    // NOTE: As with the #toString method, we are using\n    // Object.keys and a for loop instead of a for-in loop\n    // as both of these objects enter 'hash' mode, causing\n    // the function to be de-optimised in V8\n    var qEdges = Object.keys(frame.qNode.edges),\n        qLen = qEdges.length,\n        nEdges = Object.keys(frame.node.edges),\n        nLen = nEdges.length\n\n    for (var q = 0; q < qLen; q++) {\n      var qEdge = qEdges[q]\n\n      for (var n = 0; n < nLen; n++) {\n        var nEdge = nEdges[n]\n\n        if (nEdge == qEdge || qEdge == '*') {\n          var node = frame.node.edges[nEdge],\n              qNode = frame.qNode.edges[qEdge],\n              final = node.final && qNode.final,\n              next = undefined\n\n          if (nEdge in frame.output.edges) {\n            // an edge already exists for this character\n            // no need to create a new node, just set the finality\n            // bit unless this node is already final\n            next = frame.output.edges[nEdge]\n            next.final = next.final || final\n\n          } else {\n            // no edge exists yet, must create one\n            // set the finality bit and insert it\n            // into the output\n            next = new lunr.TokenSet\n            next.final = final\n            frame.output.edges[nEdge] = next\n          }\n\n          stack.push({\n            qNode: qNode,\n            output: next,\n            node: node\n          })\n        }\n      }\n    }\n  }\n\n  return output\n}\nlunr.TokenSet.Builder = function () {\n  this.previousWord = \"\"\n  this.root = new lunr.TokenSet\n  this.uncheckedNodes = []\n  this.minimizedNodes = {}\n}\n\nlunr.TokenSet.Builder.prototype.insert = function (word) {\n  var node,\n      commonPrefix = 0\n\n  if (word < this.previousWord) {\n    throw new Error (\"Out of order word insertion\")\n  }\n\n  for (var i = 0; i < word.length && i < this.previousWord.length; i++) {\n    if (word[i] != this.previousWord[i]) break\n    commonPrefix++\n  }\n\n  this.minimize(commonPrefix)\n\n  if (this.uncheckedNodes.length == 0) {\n    node = this.root\n  } else {\n    node = this.uncheckedNodes[this.uncheckedNodes.length - 1].child\n  }\n\n  for (var i = commonPrefix; i < word.length; i++) {\n    var nextNode = new lunr.TokenSet,\n        char = word[i]\n\n    node.edges[char] = nextNode\n\n    this.uncheckedNodes.push({\n      parent: node,\n      char: char,\n      child: nextNode\n    })\n\n    node = nextNode\n  }\n\n  node.final = true\n  this.previousWord = word\n}\n\nlunr.TokenSet.Builder.prototype.finish = function () {\n  this.minimize(0)\n}\n\nlunr.TokenSet.Builder.prototype.minimize = function (downTo) {\n  for (var i = this.uncheckedNodes.length - 1; i >= downTo; i--) {\n    var node = this.uncheckedNodes[i],\n        childKey = node.child.toString()\n\n    if (childKey in this.minimizedNodes) {\n      node.parent.edges[node.char] = this.minimizedNodes[childKey]\n    } else {\n      // Cache the key for this node since\n      // we know it can't change anymore\n      node.child._str = childKey\n\n      this.minimizedNodes[childKey] = node.child\n    }\n\n    this.uncheckedNodes.pop()\n  }\n}\n/*!\n * lunr.Index\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * An index contains the built index of all documents and provides a query interface\n * to the index.\n *\n * Usually instances of lunr.Index will not be created using this constructor, instead\n * lunr.Builder should be used to construct new indexes, or lunr.Index.load should be\n * used to load previously built and serialized indexes.\n *\n * @constructor\n * @param {Object} attrs - The attributes of the built search index.\n * @param {Object} attrs.invertedIndex - An index of term/field to document reference.\n * @param {Object<string, lunr.Vector>} attrs.documentVectors - Document vectors keyed by document reference.\n * @param {lunr.TokenSet} attrs.tokenSet - An set of all corpus tokens.\n * @param {string[]} attrs.fields - The names of indexed document fields.\n * @param {lunr.Pipeline} attrs.pipeline - The pipeline to use for search terms.\n */\nlunr.Index = function (attrs) {\n  this.invertedIndex = attrs.invertedIndex\n  this.fieldVectors = attrs.fieldVectors\n  this.tokenSet = attrs.tokenSet\n  this.fields = attrs.fields\n  this.pipeline = attrs.pipeline\n}\n\n/**\n * A result contains details of a document matching a search query.\n * @typedef {Object} lunr.Index~Result\n * @property {string} ref - The reference of the document this result represents.\n * @property {number} score - A number between 0 and 1 representing how similar this document is to the query.\n * @property {lunr.MatchData} matchData - Contains metadata about this match including which term(s) caused the match.\n */\n\n/**\n * Although lunr provides the ability to create queries using lunr.Query, it also provides a simple\n * query language which itself is parsed into an instance of lunr.Query.\n *\n * For programmatically building queries it is advised to directly use lunr.Query, the query language\n * is best used for human entered text rather than program generated text.\n *\n * At its simplest queries can just be a single term, e.g. `hello`, multiple terms are also supported\n * and will be combined with OR, e.g `hello world` will match documents that contain either 'hello'\n * or 'world', though those that contain both will rank higher in the results.\n *\n * Wildcards can be included in terms to match one or more unspecified characters, these wildcards can\n * be inserted anywhere within the term, and more than one wildcard can exist in a single term. Adding\n * wildcards will increase the number of documents that will be found but can also have a negative\n * impact on query performance, especially with wildcards at the beginning of a term.\n *\n * Terms can be restricted to specific fields, e.g. `title:hello`, only documents with the term\n * hello in the title field will match this query. Using a field not present in the index will lead\n * to an error being thrown.\n *\n * Modifiers can also be added to terms, lunr supports edit distance and boost modifiers on terms. A term\n * boost will make documents matching that term score higher, e.g. `foo^5`. Edit distance is also supported\n * to provide fuzzy matching, e.g. 'hello~2' will match documents with hello with an edit distance of 2.\n * Avoid large values for edit distance to improve query performance.\n *\n * To escape special characters the backslash character '\\' can be used, this allows searches to include\n * characters that would normally be considered modifiers, e.g. `foo\\~2` will search for a term \"foo~2\" instead\n * of attempting to apply a boost of 2 to the search term \"foo\".\n *\n * @typedef {string} lunr.Index~QueryString\n * @example <caption>Simple single term query</caption>\n * hello\n * @example <caption>Multiple term query</caption>\n * hello world\n * @example <caption>term scoped to a field</caption>\n * title:hello\n * @example <caption>term with a boost of 10</caption>\n * hello^10\n * @example <caption>term with an edit distance of 2</caption>\n * hello~2\n */\n\n/**\n * Performs a search against the index using lunr query syntax.\n *\n * Results will be returned sorted by their score, the most relevant results\n * will be returned first.\n *\n * For more programmatic querying use lunr.Index#query.\n *\n * @param {lunr.Index~QueryString} queryString - A string containing a lunr query.\n * @throws {lunr.QueryParseError} If the passed query string cannot be parsed.\n * @returns {lunr.Index~Result[]}\n */\nlunr.Index.prototype.search = function (queryString) {\n  return this.query(function (query) {\n    var parser = new lunr.QueryParser(queryString, query)\n    parser.parse()\n  })\n}\n\n/**\n * A query builder callback provides a query object to be used to express\n * the query to perform on the index.\n *\n * @callback lunr.Index~queryBuilder\n * @param {lunr.Query} query - The query object to build up.\n * @this lunr.Query\n */\n\n/**\n * Performs a query against the index using the yielded lunr.Query object.\n *\n * If performing programmatic queries against the index, this method is preferred\n * over lunr.Index#search so as to avoid the additional query parsing overhead.\n *\n * A query object is yielded to the supplied function which should be used to\n * express the query to be run against the index.\n *\n * Note that although this function takes a callback parameter it is _not_ an\n * asynchronous operation, the callback is just yielded a query object to be\n * customized.\n *\n * @param {lunr.Index~queryBuilder} fn - A function that is used to build the query.\n * @returns {lunr.Index~Result[]}\n */\nlunr.Index.prototype.query = function (fn) {\n  // for each query clause\n  // * process terms\n  // * expand terms from token set\n  // * find matching documents and metadata\n  // * get document vectors\n  // * score documents\n\n  var query = new lunr.Query(this.fields),\n      matchingFields = Object.create(null),\n      queryVectors = Object.create(null),\n      termFieldCache = Object.create(null)\n\n  fn.call(query, query)\n\n  for (var i = 0; i < query.clauses.length; i++) {\n    /*\n     * Unless the pipeline has been disabled for this term, which is\n     * the case for terms with wildcards, we need to pass the clause\n     * term through the search pipeline. A pipeline returns an array\n     * of processed terms. Pipeline functions may expand the passed\n     * term, which means we may end up performing multiple index lookups\n     * for a single query term.\n     */\n    var clause = query.clauses[i],\n        terms = null\n\n    if (clause.usePipeline) {\n      terms = this.pipeline.runString(clause.term)\n    } else {\n      terms = [clause.term]\n    }\n\n    for (var m = 0; m < terms.length; m++) {\n      var term = terms[m]\n\n      /*\n       * Each term returned from the pipeline needs to use the same query\n       * clause object, e.g. the same boost and or edit distance. The\n       * simplest way to do this is to re-use the clause object but mutate\n       * its term property.\n       */\n      clause.term = term\n\n      /*\n       * From the term in the clause we create a token set which will then\n       * be used to intersect the indexes token set to get a list of terms\n       * to lookup in the inverted index\n       */\n      var termTokenSet = lunr.TokenSet.fromClause(clause),\n          expandedTerms = this.tokenSet.intersect(termTokenSet).toArray()\n\n      for (var j = 0; j < expandedTerms.length; j++) {\n        /*\n         * For each term get the posting and termIndex, this is required for\n         * building the query vector.\n         */\n        var expandedTerm = expandedTerms[j],\n            posting = this.invertedIndex[expandedTerm],\n            termIndex = posting._index\n\n        for (var k = 0; k < clause.fields.length; k++) {\n          /*\n           * For each field that this query term is scoped by (by default\n           * all fields are in scope) we need to get all the document refs\n           * that have this term in that field.\n           *\n           * The posting is the entry in the invertedIndex for the matching\n           * term from above.\n           */\n          var field = clause.fields[k],\n              fieldPosting = posting[field],\n              matchingDocumentRefs = Object.keys(fieldPosting),\n              termField = expandedTerm + \"/\" + field\n\n          /*\n           * To support field level boosts a query vector is created per\n           * field. This vector is populated using the termIndex found for\n           * the term and a unit value with the appropriate boost applied.\n           *\n           * If the query vector for this field does not exist yet it needs\n           * to be created.\n           */\n          if (queryVectors[field] === undefined) {\n            queryVectors[field] = new lunr.Vector\n          }\n\n          /*\n           * Using upsert because there could already be an entry in the vector\n           * for the term we are working with. In that case we just add the scores\n           * together.\n           */\n          queryVectors[field].upsert(termIndex, 1 * clause.boost, function (a, b) { return a + b })\n\n          /**\n           * If we've already seen this term, field combo then we've already collected\n           * the matching documents and metadata, no need to go through all that again\n           */\n          if (termFieldCache[termField]) {\n            continue\n          }\n\n          for (var l = 0; l < matchingDocumentRefs.length; l++) {\n            /*\n             * All metadata for this term/field/document triple\n             * are then extracted and collected into an instance\n             * of lunr.MatchData ready to be returned in the query\n             * results\n             */\n            var matchingDocumentRef = matchingDocumentRefs[l],\n                matchingFieldRef = new lunr.FieldRef (matchingDocumentRef, field),\n                metadata = fieldPosting[matchingDocumentRef],\n                fieldMatch\n\n            if ((fieldMatch = matchingFields[matchingFieldRef]) === undefined) {\n              matchingFields[matchingFieldRef] = new lunr.MatchData (expandedTerm, field, metadata)\n            } else {\n              fieldMatch.add(expandedTerm, field, metadata)\n            }\n\n          }\n\n          termFieldCache[termField] = true\n        }\n      }\n    }\n  }\n\n  var matchingFieldRefs = Object.keys(matchingFields),\n      results = [],\n      matches = Object.create(null)\n\n  for (var i = 0; i < matchingFieldRefs.length; i++) {\n    /*\n     * Currently we have document fields that match the query, but we\n     * need to return documents. The matchData and scores are combined\n     * from multiple fields belonging to the same document.\n     *\n     * Scores are calculated by field, using the query vectors created\n     * above, and combined into a final document score using addition.\n     */\n    var fieldRef = lunr.FieldRef.fromString(matchingFieldRefs[i]),\n        docRef = fieldRef.docRef,\n        fieldVector = this.fieldVectors[fieldRef],\n        score = queryVectors[fieldRef.fieldName].similarity(fieldVector),\n        docMatch\n\n    if ((docMatch = matches[docRef]) !== undefined) {\n      docMatch.score += score\n      docMatch.matchData.combine(matchingFields[fieldRef])\n    } else {\n      var match = {\n        ref: docRef,\n        score: score,\n        matchData: matchingFields[fieldRef]\n      }\n      matches[docRef] = match\n      results.push(match)\n    }\n  }\n\n  /*\n   * Sort the results objects by score, highest first.\n   */\n  return results.sort(function (a, b) {\n    return b.score - a.score\n  })\n}\n\n/**\n * Prepares the index for JSON serialization.\n *\n * The schema for this JSON blob will be described in a\n * separate JSON schema file.\n *\n * @returns {Object}\n */\nlunr.Index.prototype.toJSON = function () {\n  var invertedIndex = Object.keys(this.invertedIndex)\n    .sort()\n    .map(function (term) {\n      return [term, this.invertedIndex[term]]\n    }, this)\n\n  var fieldVectors = Object.keys(this.fieldVectors)\n    .map(function (ref) {\n      return [ref, this.fieldVectors[ref].toJSON()]\n    }, this)\n\n  return {\n    version: lunr.version,\n    fields: this.fields,\n    fieldVectors: fieldVectors,\n    invertedIndex: invertedIndex,\n    pipeline: this.pipeline.toJSON()\n  }\n}\n\n/**\n * Loads a previously serialized lunr.Index\n *\n * @param {Object} serializedIndex - A previously serialized lunr.Index\n * @returns {lunr.Index}\n */\nlunr.Index.load = function (serializedIndex) {\n  var attrs = {},\n      fieldVectors = {},\n      serializedVectors = serializedIndex.fieldVectors,\n      invertedIndex = {},\n      serializedInvertedIndex = serializedIndex.invertedIndex,\n      tokenSetBuilder = new lunr.TokenSet.Builder,\n      pipeline = lunr.Pipeline.load(serializedIndex.pipeline)\n\n  if (serializedIndex.version != lunr.version) {\n    lunr.utils.warn(\"Version mismatch when loading serialised index. Current version of lunr '\" + lunr.version + \"' does not match serialized index '\" + serializedIndex.version + \"'\")\n  }\n\n  for (var i = 0; i < serializedVectors.length; i++) {\n    var tuple = serializedVectors[i],\n        ref = tuple[0],\n        elements = tuple[1]\n\n    fieldVectors[ref] = new lunr.Vector(elements)\n  }\n\n  for (var i = 0; i < serializedInvertedIndex.length; i++) {\n    var tuple = serializedInvertedIndex[i],\n        term = tuple[0],\n        posting = tuple[1]\n\n    tokenSetBuilder.insert(term)\n    invertedIndex[term] = posting\n  }\n\n  tokenSetBuilder.finish()\n\n  attrs.fields = serializedIndex.fields\n\n  attrs.fieldVectors = fieldVectors\n  attrs.invertedIndex = invertedIndex\n  attrs.tokenSet = tokenSetBuilder.root\n  attrs.pipeline = pipeline\n\n  return new lunr.Index(attrs)\n}\n/*!\n * lunr.Builder\n * Copyright (C) 2018 Oliver Nightingale\n */\n\n/**\n * lunr.Builder performs indexing on a set of documents and\n * returns instances of lunr.Index ready for querying.\n *\n * All configuration of the index is done via the builder, the\n * fields to index, the document reference, the text processing\n * pipeline and document scoring parameters are all set on the\n * builder before indexing.\n *\n * @constructor\n * @property {string} _ref - Internal reference to the document reference field.\n * @property {string[]} _fields - Internal reference to the document fields to index.\n * @property {object} invertedIndex - The inverted index maps terms to document fields.\n * @property {object} documentTermFrequencies - Keeps track of document term frequencies.\n * @property {object} documentLengths - Keeps track of the length of documents added to the index.\n * @property {lunr.tokenizer} tokenizer - Function for splitting strings into tokens for indexing.\n * @property {lunr.Pipeline} pipeline - The pipeline performs text processing on tokens before indexing.\n * @property {lunr.Pipeline} searchPipeline - A pipeline for processing search terms before querying the index.\n * @property {number} documentCount - Keeps track of the total number of documents indexed.\n * @property {number} _b - A parameter to control field length normalization, setting this to 0 disabled normalization, 1 fully normalizes field lengths, the default value is 0.75.\n * @property {number} _k1 - A parameter to control how quickly an increase in term frequency results in term frequency saturation, the default value is 1.2.\n * @property {number} termIndex - A counter incremented for each unique term, used to identify a terms position in the vector space.\n * @property {array} metadataWhitelist - A list of metadata keys that have been whitelisted for entry in the index.\n */\nlunr.Builder = function () {\n  this._ref = \"id\"\n  this._fields = []\n  this.invertedIndex = Object.create(null)\n  this.fieldTermFrequencies = {}\n  this.fieldLengths = {}\n  this.tokenizer = lunr.tokenizer\n  this.pipeline = new lunr.Pipeline\n  this.searchPipeline = new lunr.Pipeline\n  this.documentCount = 0\n  this._b = 0.75\n  this._k1 = 1.2\n  this.termIndex = 0\n  this.metadataWhitelist = []\n}\n\n/**\n * Sets the document field used as the document reference. Every document must have this field.\n * The type of this field in the document should be a string, if it is not a string it will be\n * coerced into a string by calling toString.\n *\n * The default ref is 'id'.\n *\n * The ref should _not_ be changed during indexing, it should be set before any documents are\n * added to the index. Changing it during indexing can lead to inconsistent results.\n *\n * @param {string} ref - The name of the reference field in the document.\n */\nlunr.Builder.prototype.ref = function (ref) {\n  this._ref = ref\n}\n\n/**\n * Adds a field to the list of document fields that will be indexed. Every document being\n * indexed should have this field. Null values for this field in indexed documents will\n * not cause errors but will limit the chance of that document being retrieved by searches.\n *\n * All fields should be added before adding documents to the index. Adding fields after\n * a document has been indexed will have no effect on already indexed documents.\n *\n * @param {string} field - The name of a field to index in all documents.\n */\nlunr.Builder.prototype.field = function (field) {\n  this._fields.push(field)\n}\n\n/**\n * A parameter to tune the amount of field length normalisation that is applied when\n * calculating relevance scores. A value of 0 will completely disable any normalisation\n * and a value of 1 will fully normalise field lengths. The default is 0.75. Values of b\n * will be clamped to the range 0 - 1.\n *\n * @param {number} number - The value to set for this tuning parameter.\n */\nlunr.Builder.prototype.b = function (number) {\n  if (number < 0) {\n    this._b = 0\n  } else if (number > 1) {\n    this._b = 1\n  } else {\n    this._b = number\n  }\n}\n\n/**\n * A parameter that controls the speed at which a rise in term frequency results in term\n * frequency saturation. The default value is 1.2. Setting this to a higher value will give\n * slower saturation levels, a lower value will result in quicker saturation.\n *\n * @param {number} number - The value to set for this tuning parameter.\n */\nlunr.Builder.prototype.k1 = function (number) {\n  this._k1 = number\n}\n\n/**\n * Adds a document to the index.\n *\n * Before adding fields to the index the index should have been fully setup, with the document\n * ref and all fields to index already having been specified.\n *\n * The document must have a field name as specified by the ref (by default this is 'id') and\n * it should have all fields defined for indexing, though null or undefined values will not\n * cause errors.\n *\n * @param {object} doc - The document to add to the index.\n */\nlunr.Builder.prototype.add = function (doc) {\n  var docRef = doc[this._ref]\n\n  this.documentCount += 1\n\n  for (var i = 0; i < this._fields.length; i++) {\n    var fieldName = this._fields[i],\n        field = doc[fieldName],\n        tokens = this.tokenizer(field),\n        terms = this.pipeline.run(tokens),\n        fieldRef = new lunr.FieldRef (docRef, fieldName),\n        fieldTerms = Object.create(null)\n\n    this.fieldTermFrequencies[fieldRef] = fieldTerms\n    this.fieldLengths[fieldRef] = 0\n\n    // store the length of this field for this document\n    this.fieldLengths[fieldRef] += terms.length\n\n    // calculate term frequencies for this field\n    for (var j = 0; j < terms.length; j++) {\n      var term = terms[j]\n\n      if (fieldTerms[term] == undefined) {\n        fieldTerms[term] = 0\n      }\n\n      fieldTerms[term] += 1\n\n      // add to inverted index\n      // create an initial posting if one doesn't exist\n      if (this.invertedIndex[term] == undefined) {\n        var posting = Object.create(null)\n        posting[\"_index\"] = this.termIndex\n        this.termIndex += 1\n\n        for (var k = 0; k < this._fields.length; k++) {\n          posting[this._fields[k]] = Object.create(null)\n        }\n\n        this.invertedIndex[term] = posting\n      }\n\n      // add an entry for this term/fieldName/docRef to the invertedIndex\n      if (this.invertedIndex[term][fieldName][docRef] == undefined) {\n        this.invertedIndex[term][fieldName][docRef] = Object.create(null)\n      }\n\n      // store all whitelisted metadata about this token in the\n      // inverted index\n      for (var l = 0; l < this.metadataWhitelist.length; l++) {\n        var metadataKey = this.metadataWhitelist[l],\n            metadata = term.metadata[metadataKey]\n\n        if (this.invertedIndex[term][fieldName][docRef][metadataKey] == undefined) {\n          this.invertedIndex[term][fieldName][docRef][metadataKey] = []\n        }\n\n        this.invertedIndex[term][fieldName][docRef][metadataKey].push(metadata)\n      }\n    }\n\n  }\n}\n\n/**\n * Calculates the average document length for this index\n *\n * @private\n */\nlunr.Builder.prototype.calculateAverageFieldLengths = function () {\n\n  var fieldRefs = Object.keys(this.fieldLengths),\n      numberOfFields = fieldRefs.length,\n      accumulator = {},\n      documentsWithField = {}\n\n  for (var i = 0; i < numberOfFields; i++) {\n    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),\n        field = fieldRef.fieldName\n\n    documentsWithField[field] || (documentsWithField[field] = 0)\n    documentsWithField[field] += 1\n\n    accumulator[field] || (accumulator[field] = 0)\n    accumulator[field] += this.fieldLengths[fieldRef]\n  }\n\n  for (var i = 0; i < this._fields.length; i++) {\n    var field = this._fields[i]\n    accumulator[field] = accumulator[field] / documentsWithField[field]\n  }\n\n  this.averageFieldLength = accumulator\n}\n\n/**\n * Builds a vector space model of every document using lunr.Vector\n *\n * @private\n */\nlunr.Builder.prototype.createFieldVectors = function () {\n  var fieldVectors = {},\n      fieldRefs = Object.keys(this.fieldTermFrequencies),\n      fieldRefsLength = fieldRefs.length,\n      termIdfCache = Object.create(null)\n\n  for (var i = 0; i < fieldRefsLength; i++) {\n    var fieldRef = lunr.FieldRef.fromString(fieldRefs[i]),\n        field = fieldRef.fieldName,\n        fieldLength = this.fieldLengths[fieldRef],\n        fieldVector = new lunr.Vector,\n        termFrequencies = this.fieldTermFrequencies[fieldRef],\n        terms = Object.keys(termFrequencies),\n        termsLength = terms.length\n\n    for (var j = 0; j < termsLength; j++) {\n      var term = terms[j],\n          tf = termFrequencies[term],\n          termIndex = this.invertedIndex[term]._index,\n          idf, score, scoreWithPrecision\n\n      if (termIdfCache[term] === undefined) {\n        idf = lunr.idf(this.invertedIndex[term], this.documentCount)\n        termIdfCache[term] = idf\n      } else {\n        idf = termIdfCache[term]\n      }\n\n      score = idf * ((this._k1 + 1) * tf) / (this._k1 * (1 - this._b + this._b * (fieldLength / this.averageFieldLength[field])) + tf)\n      scoreWithPrecision = Math.round(score * 1000) / 1000\n      // Converts 1.23456789 to 1.234.\n      // Reducing the precision so that the vectors take up less\n      // space when serialised. Doing it now so that they behave\n      // the same before and after serialisation. Also, this is\n      // the fastest approach to reducing a number's precision in\n      // JavaScript.\n\n      fieldVector.insert(termIndex, scoreWithPrecision)\n    }\n\n    fieldVectors[fieldRef] = fieldVector\n  }\n\n  this.fieldVectors = fieldVectors\n}\n\n/**\n * Creates a token set of all tokens in the index using lunr.TokenSet\n *\n * @private\n */\nlunr.Builder.prototype.createTokenSet = function () {\n  this.tokenSet = lunr.TokenSet.fromArray(\n    Object.keys(this.invertedIndex).sort()\n  )\n}\n\n/**\n * Builds the index, creating an instance of lunr.Index.\n *\n * This completes the indexing process and should only be called\n * once all documents have been added to the index.\n *\n * @returns {lunr.Index}\n */\nlunr.Builder.prototype.build = function () {\n  this.calculateAverageFieldLengths()\n  this.createFieldVectors()\n  this.createTokenSet()\n\n  return new lunr.Index({\n    invertedIndex: this.invertedIndex,\n    fieldVectors: this.fieldVectors,\n    tokenSet: this.tokenSet,\n    fields: this._fields,\n    pipeline: this.searchPipeline\n  })\n}\n\n/**\n * Applies a plugin to the index builder.\n *\n * A plugin is a function that is called with the index builder as its context.\n * Plugins can be used to customise or extend the behaviour of the index\n * in some way. A plugin is just a function, that encapsulated the custom\n * behaviour that should be applied when building the index.\n *\n * The plugin function will be called with the index builder as its argument, additional\n * arguments can also be passed when calling use. The function will be called\n * with the index builder as its context.\n *\n * @param {Function} plugin The plugin to apply.\n */\nlunr.Builder.prototype.use = function (fn) {\n  var args = Array.prototype.slice.call(arguments, 1)\n  args.unshift(this)\n  fn.apply(this, args)\n}\n/**\n * Contains and collects metadata about a matching document.\n * A single instance of lunr.MatchData is returned as part of every\n * lunr.Index~Result.\n *\n * @constructor\n * @param {string} term - The term this match data is associated with\n * @param {string} field - The field in which the term was found\n * @param {object} metadata - The metadata recorded about this term in this field\n * @property {object} metadata - A cloned collection of metadata associated with this document.\n * @see {@link lunr.Index~Result}\n */\nlunr.MatchData = function (term, field, metadata) {\n  var clonedMetadata = Object.create(null),\n      metadataKeys = Object.keys(metadata)\n\n  // Cloning the metadata to prevent the original\n  // being mutated during match data combination.\n  // Metadata is kept in an array within the inverted\n  // index so cloning the data can be done with\n  // Array#slice\n  for (var i = 0; i < metadataKeys.length; i++) {\n    var key = metadataKeys[i]\n    clonedMetadata[key] = metadata[key].slice()\n  }\n\n  this.metadata = Object.create(null)\n  this.metadata[term] = Object.create(null)\n  this.metadata[term][field] = clonedMetadata\n}\n\n/**\n * An instance of lunr.MatchData will be created for every term that matches a\n * document. However only one instance is required in a lunr.Index~Result. This\n * method combines metadata from another instance of lunr.MatchData with this\n * objects metadata.\n *\n * @param {lunr.MatchData} otherMatchData - Another instance of match data to merge with this one.\n * @see {@link lunr.Index~Result}\n */\nlunr.MatchData.prototype.combine = function (otherMatchData) {\n  var terms = Object.keys(otherMatchData.metadata)\n\n  for (var i = 0; i < terms.length; i++) {\n    var term = terms[i],\n        fields = Object.keys(otherMatchData.metadata[term])\n\n    if (this.metadata[term] == undefined) {\n      this.metadata[term] = Object.create(null)\n    }\n\n    for (var j = 0; j < fields.length; j++) {\n      var field = fields[j],\n          keys = Object.keys(otherMatchData.metadata[term][field])\n\n      if (this.metadata[term][field] == undefined) {\n        this.metadata[term][field] = Object.create(null)\n      }\n\n      for (var k = 0; k < keys.length; k++) {\n        var key = keys[k]\n\n        if (this.metadata[term][field][key] == undefined) {\n          this.metadata[term][field][key] = otherMatchData.metadata[term][field][key]\n        } else {\n          this.metadata[term][field][key] = this.metadata[term][field][key].concat(otherMatchData.metadata[term][field][key])\n        }\n\n      }\n    }\n  }\n}\n\n/**\n * Add metadata for a term/field pair to this instance of match data.\n *\n * @param {string} term - The term this match data is associated with\n * @param {string} field - The field in which the term was found\n * @param {object} metadata - The metadata recorded about this term in this field\n */\nlunr.MatchData.prototype.add = function (term, field, metadata) {\n  if (!(term in this.metadata)) {\n    this.metadata[term] = Object.create(null)\n    this.metadata[term][field] = metadata\n    return\n  }\n\n  if (!(field in this.metadata[term])) {\n    this.metadata[term][field] = metadata\n    return\n  }\n\n  var metadataKeys = Object.keys(metadata)\n\n  for (var i = 0; i < metadataKeys.length; i++) {\n    var key = metadataKeys[i]\n\n    if (key in this.metadata[term][field]) {\n      this.metadata[term][field][key] = this.metadata[term][field][key].concat(metadata[key])\n    } else {\n      this.metadata[term][field][key] = metadata[key]\n    }\n  }\n}\n/**\n * A lunr.Query provides a programmatic way of defining queries to be performed\n * against a {@link lunr.Index}.\n *\n * Prefer constructing a lunr.Query using the {@link lunr.Index#query} method\n * so the query object is pre-initialized with the right index fields.\n *\n * @constructor\n * @property {lunr.Query~Clause[]} clauses - An array of query clauses.\n * @property {string[]} allFields - An array of all available fields in a lunr.Index.\n */\nlunr.Query = function (allFields) {\n  this.clauses = []\n  this.allFields = allFields\n}\n\n/**\n * Constants for indicating what kind of automatic wildcard insertion will be used when constructing a query clause.\n *\n * This allows wildcards to be added to the beginning and end of a term without having to manually do any string\n * concatenation.\n *\n * The wildcard constants can be bitwise combined to select both leading and trailing wildcards.\n *\n * @constant\n * @default\n * @property {number} wildcard.NONE - The term will have no wildcards inserted, this is the default behaviour\n * @property {number} wildcard.LEADING - Prepend the term with a wildcard, unless a leading wildcard already exists\n * @property {number} wildcard.TRAILING - Append a wildcard to the term, unless a trailing wildcard already exists\n * @see lunr.Query~Clause\n * @see lunr.Query#clause\n * @see lunr.Query#term\n * @example <caption>query term with trailing wildcard</caption>\n * query.term('foo', { wildcard: lunr.Query.wildcard.TRAILING })\n * @example <caption>query term with leading and trailing wildcard</caption>\n * query.term('foo', {\n *   wildcard: lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING\n * })\n */\nlunr.Query.wildcard = new String (\"*\")\nlunr.Query.wildcard.NONE = 0\nlunr.Query.wildcard.LEADING = 1\nlunr.Query.wildcard.TRAILING = 2\n\n/**\n * A single clause in a {@link lunr.Query} contains a term and details on how to\n * match that term against a {@link lunr.Index}.\n *\n * @typedef {Object} lunr.Query~Clause\n * @property {string[]} fields - The fields in an index this clause should be matched against.\n * @property {number} [boost=1] - Any boost that should be applied when matching this clause.\n * @property {number} [editDistance] - Whether the term should have fuzzy matching applied, and how fuzzy the match should be.\n * @property {boolean} [usePipeline] - Whether the term should be passed through the search pipeline.\n * @property {number} [wildcard=0] - Whether the term should have wildcards appended or prepended.\n */\n\n/**\n * Adds a {@link lunr.Query~Clause} to this query.\n *\n * Unless the clause contains the fields to be matched all fields will be matched. In addition\n * a default boost of 1 is applied to the clause.\n *\n * @param {lunr.Query~Clause} clause - The clause to add to this query.\n * @see lunr.Query~Clause\n * @returns {lunr.Query}\n */\nlunr.Query.prototype.clause = function (clause) {\n  if (!('fields' in clause)) {\n    clause.fields = this.allFields\n  }\n\n  if (!('boost' in clause)) {\n    clause.boost = 1\n  }\n\n  if (!('usePipeline' in clause)) {\n    clause.usePipeline = true\n  }\n\n  if (!('wildcard' in clause)) {\n    clause.wildcard = lunr.Query.wildcard.NONE\n  }\n\n  if ((clause.wildcard & lunr.Query.wildcard.LEADING) && (clause.term.charAt(0) != lunr.Query.wildcard)) {\n    clause.term = \"*\" + clause.term\n  }\n\n  if ((clause.wildcard & lunr.Query.wildcard.TRAILING) && (clause.term.slice(-1) != lunr.Query.wildcard)) {\n    clause.term = \"\" + clause.term + \"*\"\n  }\n\n  this.clauses.push(clause)\n\n  return this\n}\n\n/**\n * Adds a term to the current query, under the covers this will create a {@link lunr.Query~Clause}\n * to the list of clauses that make up this query.\n *\n * @param {string} term - The term to add to the query.\n * @param {Object} [options] - Any additional properties to add to the query clause.\n * @returns {lunr.Query}\n * @see lunr.Query#clause\n * @see lunr.Query~Clause\n * @example <caption>adding a single term to a query</caption>\n * query.term(\"foo\")\n * @example <caption>adding a single term to a query and specifying search fields, term boost and automatic trailing wildcard</caption>\n * query.term(\"foo\", {\n *   fields: [\"title\"],\n *   boost: 10,\n *   wildcard: lunr.Query.wildcard.TRAILING\n * })\n */\nlunr.Query.prototype.term = function (term, options) {\n  var clause = options || {}\n  clause.term = term\n\n  this.clause(clause)\n\n  return this\n}\nlunr.QueryParseError = function (message, start, end) {\n  this.name = \"QueryParseError\"\n  this.message = message\n  this.start = start\n  this.end = end\n}\n\nlunr.QueryParseError.prototype = new Error\nlunr.QueryLexer = function (str) {\n  this.lexemes = []\n  this.str = str\n  this.length = str.length\n  this.pos = 0\n  this.start = 0\n  this.escapeCharPositions = []\n}\n\nlunr.QueryLexer.prototype.run = function () {\n  var state = lunr.QueryLexer.lexText\n\n  while (state) {\n    state = state(this)\n  }\n}\n\nlunr.QueryLexer.prototype.sliceString = function () {\n  var subSlices = [],\n      sliceStart = this.start,\n      sliceEnd = this.pos\n\n  for (var i = 0; i < this.escapeCharPositions.length; i++) {\n    sliceEnd = this.escapeCharPositions[i]\n    subSlices.push(this.str.slice(sliceStart, sliceEnd))\n    sliceStart = sliceEnd + 1\n  }\n\n  subSlices.push(this.str.slice(sliceStart, this.pos))\n  this.escapeCharPositions.length = 0\n\n  return subSlices.join('')\n}\n\nlunr.QueryLexer.prototype.emit = function (type) {\n  this.lexemes.push({\n    type: type,\n    str: this.sliceString(),\n    start: this.start,\n    end: this.pos\n  })\n\n  this.start = this.pos\n}\n\nlunr.QueryLexer.prototype.escapeCharacter = function () {\n  this.escapeCharPositions.push(this.pos - 1)\n  this.pos += 1\n}\n\nlunr.QueryLexer.prototype.next = function () {\n  if (this.pos >= this.length) {\n    return lunr.QueryLexer.EOS\n  }\n\n  var char = this.str.charAt(this.pos)\n  this.pos += 1\n  return char\n}\n\nlunr.QueryLexer.prototype.width = function () {\n  return this.pos - this.start\n}\n\nlunr.QueryLexer.prototype.ignore = function () {\n  if (this.start == this.pos) {\n    this.pos += 1\n  }\n\n  this.start = this.pos\n}\n\nlunr.QueryLexer.prototype.backup = function () {\n  this.pos -= 1\n}\n\nlunr.QueryLexer.prototype.acceptDigitRun = function () {\n  var char, charCode\n\n  do {\n    char = this.next()\n    charCode = char.charCodeAt(0)\n  } while (charCode > 47 && charCode < 58)\n\n  if (char != lunr.QueryLexer.EOS) {\n    this.backup()\n  }\n}\n\nlunr.QueryLexer.prototype.more = function () {\n  return this.pos < this.length\n}\n\nlunr.QueryLexer.EOS = 'EOS'\nlunr.QueryLexer.FIELD = 'FIELD'\nlunr.QueryLexer.TERM = 'TERM'\nlunr.QueryLexer.EDIT_DISTANCE = 'EDIT_DISTANCE'\nlunr.QueryLexer.BOOST = 'BOOST'\n\nlunr.QueryLexer.lexField = function (lexer) {\n  lexer.backup()\n  lexer.emit(lunr.QueryLexer.FIELD)\n  lexer.ignore()\n  return lunr.QueryLexer.lexText\n}\n\nlunr.QueryLexer.lexTerm = function (lexer) {\n  if (lexer.width() > 1) {\n    lexer.backup()\n    lexer.emit(lunr.QueryLexer.TERM)\n  }\n\n  lexer.ignore()\n\n  if (lexer.more()) {\n    return lunr.QueryLexer.lexText\n  }\n}\n\nlunr.QueryLexer.lexEditDistance = function (lexer) {\n  lexer.ignore()\n  lexer.acceptDigitRun()\n  lexer.emit(lunr.QueryLexer.EDIT_DISTANCE)\n  return lunr.QueryLexer.lexText\n}\n\nlunr.QueryLexer.lexBoost = function (lexer) {\n  lexer.ignore()\n  lexer.acceptDigitRun()\n  lexer.emit(lunr.QueryLexer.BOOST)\n  return lunr.QueryLexer.lexText\n}\n\nlunr.QueryLexer.lexEOS = function (lexer) {\n  if (lexer.width() > 0) {\n    lexer.emit(lunr.QueryLexer.TERM)\n  }\n}\n\n// This matches the separator used when tokenising fields\n// within a document. These should match otherwise it is\n// not possible to search for some tokens within a document.\n//\n// It is possible for the user to change the separator on the\n// tokenizer so it _might_ clash with any other of the special\n// characters already used within the search string, e.g. :.\n//\n// This means that it is possible to change the separator in\n// such a way that makes some words unsearchable using a search\n// string.\nlunr.QueryLexer.termSeparator = lunr.tokenizer.separator\n\nlunr.QueryLexer.lexText = function (lexer) {\n  while (true) {\n    var char = lexer.next()\n\n    if (char == lunr.QueryLexer.EOS) {\n      return lunr.QueryLexer.lexEOS\n    }\n\n    // Escape character is '\\'\n    if (char.charCodeAt(0) == 92) {\n      lexer.escapeCharacter()\n      continue\n    }\n\n    if (char == \":\") {\n      return lunr.QueryLexer.lexField\n    }\n\n    if (char == \"~\") {\n      lexer.backup()\n      if (lexer.width() > 0) {\n        lexer.emit(lunr.QueryLexer.TERM)\n      }\n      return lunr.QueryLexer.lexEditDistance\n    }\n\n    if (char == \"^\") {\n      lexer.backup()\n      if (lexer.width() > 0) {\n        lexer.emit(lunr.QueryLexer.TERM)\n      }\n      return lunr.QueryLexer.lexBoost\n    }\n\n    if (char.match(lunr.QueryLexer.termSeparator)) {\n      return lunr.QueryLexer.lexTerm\n    }\n  }\n}\n\nlunr.QueryParser = function (str, query) {\n  this.lexer = new lunr.QueryLexer (str)\n  this.query = query\n  this.currentClause = {}\n  this.lexemeIdx = 0\n}\n\nlunr.QueryParser.prototype.parse = function () {\n  this.lexer.run()\n  this.lexemes = this.lexer.lexemes\n\n  var state = lunr.QueryParser.parseFieldOrTerm\n\n  while (state) {\n    state = state(this)\n  }\n\n  return this.query\n}\n\nlunr.QueryParser.prototype.peekLexeme = function () {\n  return this.lexemes[this.lexemeIdx]\n}\n\nlunr.QueryParser.prototype.consumeLexeme = function () {\n  var lexeme = this.peekLexeme()\n  this.lexemeIdx += 1\n  return lexeme\n}\n\nlunr.QueryParser.prototype.nextClause = function () {\n  var completedClause = this.currentClause\n  this.query.clause(completedClause)\n  this.currentClause = {}\n}\n\nlunr.QueryParser.parseFieldOrTerm = function (parser) {\n  var lexeme = parser.peekLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  switch (lexeme.type) {\n    case lunr.QueryLexer.FIELD:\n      return lunr.QueryParser.parseField\n    case lunr.QueryLexer.TERM:\n      return lunr.QueryParser.parseTerm\n    default:\n      var errorMessage = \"expected either a field or a term, found \" + lexeme.type\n\n      if (lexeme.str.length >= 1) {\n        errorMessage += \" with value '\" + lexeme.str + \"'\"\n      }\n\n      throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n}\n\nlunr.QueryParser.parseField = function (parser) {\n  var lexeme = parser.consumeLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  if (parser.query.allFields.indexOf(lexeme.str) == -1) {\n    var possibleFields = parser.query.allFields.map(function (f) { return \"'\" + f + \"'\" }).join(', '),\n        errorMessage = \"unrecognised field '\" + lexeme.str + \"', possible fields: \" + possibleFields\n\n    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n\n  parser.currentClause.fields = [lexeme.str]\n\n  var nextLexeme = parser.peekLexeme()\n\n  if (nextLexeme == undefined) {\n    var errorMessage = \"expecting term, found nothing\"\n    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n\n  switch (nextLexeme.type) {\n    case lunr.QueryLexer.TERM:\n      return lunr.QueryParser.parseTerm\n    default:\n      var errorMessage = \"expecting term, found '\" + nextLexeme.type + \"'\"\n      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)\n  }\n}\n\nlunr.QueryParser.parseTerm = function (parser) {\n  var lexeme = parser.consumeLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  parser.currentClause.term = lexeme.str.toLowerCase()\n\n  if (lexeme.str.indexOf(\"*\") != -1) {\n    parser.currentClause.usePipeline = false\n  }\n\n  var nextLexeme = parser.peekLexeme()\n\n  if (nextLexeme == undefined) {\n    parser.nextClause()\n    return\n  }\n\n  switch (nextLexeme.type) {\n    case lunr.QueryLexer.TERM:\n      parser.nextClause()\n      return lunr.QueryParser.parseTerm\n    case lunr.QueryLexer.FIELD:\n      parser.nextClause()\n      return lunr.QueryParser.parseField\n    case lunr.QueryLexer.EDIT_DISTANCE:\n      return lunr.QueryParser.parseEditDistance\n    case lunr.QueryLexer.BOOST:\n      return lunr.QueryParser.parseBoost\n    default:\n      var errorMessage = \"Unexpected lexeme type '\" + nextLexeme.type + \"'\"\n      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)\n  }\n}\n\nlunr.QueryParser.parseEditDistance = function (parser) {\n  var lexeme = parser.consumeLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  var editDistance = parseInt(lexeme.str, 10)\n\n  if (isNaN(editDistance)) {\n    var errorMessage = \"edit distance must be numeric\"\n    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n\n  parser.currentClause.editDistance = editDistance\n\n  var nextLexeme = parser.peekLexeme()\n\n  if (nextLexeme == undefined) {\n    parser.nextClause()\n    return\n  }\n\n  switch (nextLexeme.type) {\n    case lunr.QueryLexer.TERM:\n      parser.nextClause()\n      return lunr.QueryParser.parseTerm\n    case lunr.QueryLexer.FIELD:\n      parser.nextClause()\n      return lunr.QueryParser.parseField\n    case lunr.QueryLexer.EDIT_DISTANCE:\n      return lunr.QueryParser.parseEditDistance\n    case lunr.QueryLexer.BOOST:\n      return lunr.QueryParser.parseBoost\n    default:\n      var errorMessage = \"Unexpected lexeme type '\" + nextLexeme.type + \"'\"\n      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)\n  }\n}\n\nlunr.QueryParser.parseBoost = function (parser) {\n  var lexeme = parser.consumeLexeme()\n\n  if (lexeme == undefined) {\n    return\n  }\n\n  var boost = parseInt(lexeme.str, 10)\n\n  if (isNaN(boost)) {\n    var errorMessage = \"boost must be numeric\"\n    throw new lunr.QueryParseError (errorMessage, lexeme.start, lexeme.end)\n  }\n\n  parser.currentClause.boost = boost\n\n  var nextLexeme = parser.peekLexeme()\n\n  if (nextLexeme == undefined) {\n    parser.nextClause()\n    return\n  }\n\n  switch (nextLexeme.type) {\n    case lunr.QueryLexer.TERM:\n      parser.nextClause()\n      return lunr.QueryParser.parseTerm\n    case lunr.QueryLexer.FIELD:\n      parser.nextClause()\n      return lunr.QueryParser.parseField\n    case lunr.QueryLexer.EDIT_DISTANCE:\n      return lunr.QueryParser.parseEditDistance\n    case lunr.QueryLexer.BOOST:\n      return lunr.QueryParser.parseBoost\n    default:\n      var errorMessage = \"Unexpected lexeme type '\" + nextLexeme.type + \"'\"\n      throw new lunr.QueryParseError (errorMessage, nextLexeme.start, nextLexeme.end)\n  }\n}\n\n  /**\n   * export the module via AMD, CommonJS or as a browser global\n   * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js\n   */\n  ;(function (root, factory) {\n    if (true) {\n      // AMD. Register as an anonymous module.\n      !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :\n\t\t\t\t__WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n    } else {}\n  }(this, function () {\n    /**\n     * Just return a value to define the module export.\n     * This example returns an object, but the module\n     * can return a function as the exported value.\n     */\n    return lunr\n  }))\n})();\n\n\n/***/ }),\n/* 1 */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation. All rights reserved.\r\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use\r\nthis file except in compliance with the License. You may obtain a copy of the\r\nLicense at http://www.apache.org/licenses/LICENSE-2.0\r\n\r\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\r\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\r\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\r\nMERCHANTABLITY OR NON-INFRINGEMENT.\r\n\r\nSee the Apache Version 2.0 License for specific language governing permissions\r\nand limitations under the License.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = Object.setPrototypeOf ||\r\n    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = Object.assign || function __assign(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n    }\r\n    return t;\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)\r\n            t[p[i]] = s[p[i]];\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = y[op[0] & 2 ? \"return\" : op[0] ? \"throw\" : \"next\"]) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [0, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nfunction __exportStar(m, exports) {\r\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n\r\nfunction __values(o) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator], i = 0;\r\n    if (m) return m.call(o);\r\n    return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; }; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator];\r\n    return m ? m.call(o) : typeof __values === \"function\" ? __values(o) : o[Symbol.iterator]();\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result.default = mod;\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\n// EXTERNAL MODULE: ./node_modules/lunr/lunr.js\nvar lunr = __webpack_require__(0);\n\n// CONCATENATED MODULE: ./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/ts-loader??ref--4-0!./node_modules/babel-loader/lib??ref--4-1!./src/services/SearchWorker.worker.ts\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return SearchWorker_worker_add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"done\", function() { return SearchWorker_worker_done; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toJS\", function() { return SearchWorker_worker_toJS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"load\", function() { return SearchWorker_worker_load; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"search\", function() { return SearchWorker_worker_search; });\n\r\n\r\n/* just for better typings */\r\nvar SearchWorker_worker_Worker = /** @class */ (function () {\r\n    function Worker() {\r\n        this.add = SearchWorker_worker_add;\r\n        this.done = SearchWorker_worker_done;\r\n        this.search = SearchWorker_worker_search;\r\n        this.toJS = SearchWorker_worker_toJS;\r\n        this.load = SearchWorker_worker_load;\r\n    }\r\n    return Worker;\r\n}());\r\n/* harmony default export */ var SearchWorker_worker = __webpack_exports__[\"default\"] = (SearchWorker_worker_Worker);\r\nvar SearchWorker_worker_store = {};\r\nvar SearchWorker_worker_resolveIndex = function () {\r\n    throw new Error('Should not be called');\r\n};\r\nvar SearchWorker_worker_index = new Promise(function (resolve) {\r\n    SearchWorker_worker_resolveIndex = resolve;\r\n});\r\nvar SearchWorker_worker_builder = new lunr[\"Builder\"]();\r\nSearchWorker_worker_builder.field('title');\r\nSearchWorker_worker_builder.field('description');\r\nSearchWorker_worker_builder.ref('id');\r\nSearchWorker_worker_builder.pipeline.add(lunr[\"trimmer\"], lunr[\"stopWordFilter\"], lunr[\"stemmer\"]);\r\nvar SearchWorker_worker_expandTerm = function (term) { return '*' + lunr[\"stemmer\"](new lunr[\"Token\"](term, {})) + '*'; };\r\nfunction SearchWorker_worker_add(title, description, id) {\r\n    var item = {\r\n        title: title,\r\n        description: description,\r\n        id: id\r\n    };\r\n    SearchWorker_worker_builder.add(item);\r\n    SearchWorker_worker_store[id] = item;\r\n}\r\nfunction SearchWorker_worker_done() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            SearchWorker_worker_resolveIndex(SearchWorker_worker_builder.build());\r\n            return [2 /*return*/];\r\n        });\r\n    });\r\n}\r\nfunction SearchWorker_worker_toJS() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var _a;\r\n        return __generator(this, function (_b) {\r\n            switch (_b.label) {\r\n                case 0:\r\n                    _a = {\r\n                        store: SearchWorker_worker_store\r\n                    };\r\n                    return [4 /*yield*/, SearchWorker_worker_index];\r\n                case 1: return [2 /*return*/, (_a.index = (_b.sent()).toJSON(),\r\n                        _a)];\r\n            }\r\n        });\r\n    });\r\n}\r\nfunction SearchWorker_worker_load(state) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            SearchWorker_worker_store = state.store;\r\n            SearchWorker_worker_resolveIndex(lunr[\"Index\"].load(state.index));\r\n            return [2 /*return*/];\r\n        });\r\n    });\r\n}\r\nfunction SearchWorker_worker_search(q) {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    if (q.trim().length === 0) {\r\n                        return [2 /*return*/, []];\r\n                    }\r\n                    return [4 /*yield*/, SearchWorker_worker_index];\r\n                case 1: return [2 /*return*/, (_a.sent()).query(function (t) {\r\n                        q.trim().split(/\\s+/).forEach(function (term) {\r\n                            var exp = SearchWorker_worker_expandTerm(term);\r\n                            t.term(exp, {});\r\n                        });\r\n                    }).map(function (res) { return (__assign({}, SearchWorker_worker_store[res.ref], { score: res.score })); })];\r\n            }\r\n        });\r\n    });\r\n}\r\n\naddEventListener('message', function (e) {var ref = e.data;var type = ref.type;var method = ref.method;var id = ref.id;var params = ref.params;var f, p;if (type === 'RPC' && method) {if (f = __webpack_exports__[method]) {p = Promise.resolve().then(function () { return f.apply(__webpack_exports__, params); });} else {p = Promise.reject('No such method');}p.then(function (result) {postMessage({type: 'RPC',id: id,result: result});}, function (error) {postMessage({type: 'RPC',id: id,error: error});});}});postMessage({type: 'RPC',method: 'ready'});\n\n/***/ })\n/******/ ]);\n//# sourceMappingURL=993bf55aff199e22c61e.worker.js.map"])), { name: "[hash].worker.js" })
					addMethods(w, methods)
					
					return w
				}
			

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("isarray");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("ieee754");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("base64-js");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(46)
var ieee754 = __webpack_require__(45)
var isArray = __webpack_require__(44)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(47)))

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-swift.js");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-scala.js");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-ruby.js");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-python.js");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-php.js");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-perl.js");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-objectivec.js");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-markup.js");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-lua.js");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-java.js");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-go.js");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-csharp.js");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-cpp.js");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-coffeescript.js");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-c.js");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-bash.js");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

const statusCodes = [
    {
        "code": "default",
        "phrase": "Default response"
    },
    {
        "code": "1XX",
        "phrase": "Informational"
    },
    {
        "code": "100",
        "phrase": "Continue"
    },
    {
        "code": "101",
        "phrase": "Switching Protocols"
    },
    {
        "code": "2XX",
        "phrase": "Successful"
    },
    {
        "code": "200",
        "phrase": "OK"
    },
    {
        "code": "201",
        "phrase": "Created"
    },
    {
        "code": "202",
        "phrase": "Accepted"
    },
    {
        "code": "203",
        "phrase": "Non-Authoritative Information"
    },
    {
        "code": "204",
        "phrase": "No Content"
    },
    {
        "code": "205",
        "phrase": "Reset Content"
    },
    {
        "code": "206",
        "phrase": "Partial Content"
    },
    {
        "code": "3XX",
        "phrase": "Redirection"
    },
    {
        "code": "300",
        "phrase": "Multiple Choices"
    },
    {
        "code": "301",
        "phrase": "Moved Permanently"
    },
    {
        "code": "302",
        "phrase": "Found"
    },
    {
        "code": "303",
        "phrase": "See Other"
    },
    {
        "code": "304",
        "phrase": "Not Modified"
    },
    {
        "code": "305",
        "phrase": "Use Proxy"
    },
    {
        "code": "307",
        "phrase": "Temporary Redirect"
    },
    {
        "code": "4XX",
        "phrase": "Client Error"
    },
    {
        "code": "400",
        "phrase": "Bad Request"
    },
    {
        "code": "401",
        "phrase": "Unauthorized"
    },
    {
        "code": "402",
        "phrase": "Payment Required"
    },
    {
        "code": "403",
        "phrase": "Forbidden"
    },
    {
        "code": "404",
        "phrase": "Not Found"
    },
    {
        "code": "405",
        "phrase": "Method Not Allowed"
    },
    {
        "code": "406",
        "phrase": "Not Acceptable"
    },
    {
        "code": "407",
        "phrase": "Proxy Authentication Required"
    },
    {
        "code": "408",
        "phrase": "Request Timeout"
    },
    {
        "code": "409",
        "phrase": "Conflict"
    },
    {
        "code": "410",
        "phrase": "Gone"
    },
    {
        "code": "411",
        "phrase": "Length Required"
    },
    {
        "code": "412",
        "phrase": "Precondition Failed"
    },
    {
        "code": "413",
        "phrase": "Payload Too Large"
    },
    {
        "code": "414",
        "phrase": "URI Too Long"
    },
    {
        "code": "415",
        "phrase": "Unsupported Media Type"
    },
    {
        "code": "416",
        "phrase": "Range Not Satisfiable"
    },
    {
        "code": "417",
        "phrase": "Expectation Failed"
    },
    {
        "code": "418",
        "phrase": "I'm a teapot"
    },
    {
        "code": "421",
        "phrase": "Misdirected request"
    },
    {
        "code": "426",
        "phrase": "Upgrade Required"
    },
    {
        "code": "5XX",
        "phrase": "Server Error"
    },
    {
        "code": "500",
        "phrase": "Internal Server Error"
    },
    {
        "code": "501",
        "phrase": "Not Implemented"
    },
    {
        "code": "502",
        "phrase": "Bad Gateway"
    },
    {
        "code": "503",
        "phrase": "Service Unavailable"
    },
    {
        "code": "504",
        "phrase": "Gateway Time-out"
    },
    {
        "code": "505",
        "phrase": "HTTP Version Not Supported"
    },
    {
        "code": "102",
        "phrase": "Processing"
    },
    {
        "code": "103",
        "phrase": "Early Hints"
    },
    {
        "code": "207",
        "phrase": "Multi-Status"
    },
    {
        "code": "226",
        "phrase": "IM Used"
    },
    {
        "code": "308",
        "phrase": "Permanent Redirect"
    },
    {
        "code": "422",
        "phrase": "Unprocessable Entity"
    },
    {
        "code": "423",
        "phrase": "Locked"
    },
    {
        "code": "424",
        "phrase": "Failed Dependency"
    },
    {
        "code": "428",
        "phrase": "Precondition Required"
    },
    {
        "code": "429",
        "phrase": "Too Many Requests"
    },
    {
        "code": "431",
        "phrase": "Request Header Fields Too Large"
    },
    {
        "code": "451",
        "phrase": "Unavailable For Legal Reasons"
    },
    {
        "code": "506",
        "phrase": "Variant Also Negotiates"
    },
    {
        "code": "507",
        "phrase": "Insufficient Storage"
    },
    {
        "code": "511",
        "phrase": "Network Authentication Required"
    },
    {
        "code": "7XX",
        "phrase": "Developer Error"
    }
];

module.exports = {
    statusCodes: statusCodes
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const util = __webpack_require__(66);

function getDefaultState() {
    return { depth: 0, seen: new WeakMap(), top: true, combine: false };
}

function walkSchema(schema, parent, state, callback) {

    if (typeof state.depth === 'undefined') state = getDefaultState();
    if (schema == null) return schema;
    if (typeof schema.$ref !== 'undefined') {
        let temp = {$ref:schema.$ref};
        callback(temp,parent,state);
        return temp; // all other properties SHALL be ignored
    }

    if (state.combine) {
        if (schema.allOf && Array.isArray(schema.allOf) && schema.allOf.length === 1) {
            schema = Object.assign({},schema.allOf[0],schema);
            delete schema.allOf;
        }
        if (schema.anyOf && Array.isArray(schema.anyOf) && schema.anyOf.length === 1) {
            schema = Object.assign({},schema.anyOf[0],schema);
            delete schema.anyOf;
        }
        if (schema.oneOf && Array.isArray(schema.oneOf) && schema.oneOf.length === 1) {
            schema = Object.assign({},schema.oneOf[0],schema);
            delete schema.oneOf;
        }
    }

    callback(schema,parent,state);
    if (state.seen.has(schema)) {
        return schema;
    }
    //else
    if ((typeof schema === 'object') && (schema !== null)) state.seen.set(schema,true);
    state.top = false;
    state.depth++;

    if (typeof schema.items !== 'undefined') {
        state.property = 'items';
        walkSchema(schema.items,schema,state,callback);
    }
    if (schema.additionalItems) {
        if (typeof schema.additionalItems === 'object') {
            state.property = 'additionalItems';
            walkSchema(schema.additionalItems,schema,state,callback);
        }
    }
    if (schema.additionalProperties) {
        if (typeof schema.additionalProperties === 'object') {
            state.property = 'additionalProperties';
            walkSchema(schema.additionalProperties,schema,state,callback);
        }
    }
    if (schema.properties) {
        for (let prop in schema.properties) {
            let subSchema = schema.properties[prop];
            state.property = 'properties/'+prop;
            walkSchema(subSchema,schema,state,callback);
        }
    }
    if (schema.patternProperties) {
        for (let prop in schema.patternProperties) {
            let subSchema = schema.patternProperties[prop];
            state.property = 'patternProperties/'+prop;
            walkSchema(subSchema,schema,state,callback);
        }
    }
    if (schema.allOf) {
        for (let index in schema.allOf) {
            let subSchema = schema.allOf[index];
            state.property = 'allOf/'+index;
            walkSchema(subSchema,schema,state,callback);
        }
    }
    if (schema.anyOf) {
        for (let index in schema.anyOf) {
            let subSchema = schema.anyOf[index];
            state.property = 'anyOf/'+index;
            walkSchema(subSchema,schema,state,callback);
        }
    }
    if (schema.oneOf) {
        for (let index in schema.oneOf) {
            let subSchema = schema.oneOf[index];
            state.property = 'oneOf/'+index;
            walkSchema(subSchema,schema,state,callback);
        }
    }
    if (schema.not) {
        state.property = 'not';
        walkSchema(schema.not,schema,state,callback);
    }
    state.depth--;
    return schema;
}

module.exports = {
    getDefaultState: getDefaultState,
    walkSchema: walkSchema
};


/***/ }),
/* 68 */
/***/ (function(module) {

module.exports = {"_from":"swagger2openapi@^2.11.0","_id":"swagger2openapi@2.11.16","_inBundle":false,"_integrity":"sha512-5Pv20whg9Bn1dqKDuGatH0r+7mAEU8+tHJU1PdT9ufGeZNseqJBs9Y8AOd8EMEHKRuAgAzYYWhINvgtodAlZRA==","_location":"/swagger2openapi","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"swagger2openapi@^2.11.0","name":"swagger2openapi","escapedName":"swagger2openapi","rawSpec":"^2.11.0","saveSpec":null,"fetchSpec":"^2.11.0"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/swagger2openapi/-/swagger2openapi-2.11.16.tgz","_shasum":"7614ed2ebe0617656f8777bf67a33e8b0fba4e9b","_spec":"swagger2openapi@^2.11.0","_where":"C:\\Users\\Amir\\Documents\\1Projects\\PayPing\\ReDoc","author":{"name":"Mike Ralphson","email":"mike.ralphson@gmail.com"},"bin":{"swagger2openapi":"./swagger2openapi.js"},"browserify":{"transform":[["babelify",{"presets":["es2015"]}]]},"bugs":{"url":"https://github.com/Mermade/swagger2openapi/issues"},"bundleDependencies":false,"dependencies":{"ajv":"^5.0.1","call-me-maybe":"^1.0.1","co":"^4.6.0","js-yaml":"^3.6.1","node-fetch":"^2.0.0","node-readfiles":"^0.2.0","reftools":"0.0.20","should":"^13.0.1","yargs":"^11.0.0"},"deprecated":false,"description":"Convert Swagger 2.0 definitions to OpenApi 3.0 and validate","devDependencies":{"babel-core":"^6.24.1","babel-loader":"^7.1.0","babel-preset-es2015":"^6.24.1","coveralls":"^3.0.0","mocha":"^5.0.0","webpack":"^3.5.6"},"homepage":"https://github.com/Mermade/swagger2openapi#readme","keywords":["swagger","openapi","openapi2","openapi3","converter","conversion","validator","validation","resolver","lint","linter"],"license":"BSD-3-Clause","main":"index.js","name":"swagger2openapi","repository":{"url":"git+https://github.com/Mermade/swagger2openapi.git","type":"git"},"scripts":{"test":"mocha"},"version":"2.11.16"};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
* a collection of cloning functions
*/

/**
* a no-op placeholder which returns the given object unchanged
* useful for when a clone function needs to be passed but cloning is not
* required
* @param obj the input object
* @return the input object, unchanged
*/
function nop(obj) {
    return obj;
}

/**
* clones the given object using JSON.parse and JSON.stringify
* @param obj the object to clone
* @return the cloned object
*/
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
* clones the given object's properties shallowly, ignores properties from prototype
* @param obj the object to clone
* @return the cloned object
*/
function shallowClone(obj) {
    let result = {};
    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            result[p] = obj[p];
        }
    }
    return result;
}

/**
* clones the given object's properties deeply, ignores properties from prototype
* @param obj the object to clone
* @return the cloned object
*/
function deepClone(obj) {
    let result = Array.isArray(obj) ? [] : {};
    for (let p in obj) {
        if (obj.hasOwnProperty(p) || Array.isArray(obj)) {
            result[p] = (typeof obj[p] === 'object') ? deepClone(obj[p]) : obj[p];
        }
    }
    return result;
}

/**
* clones the given object's properties shallowly, using Object.assign
* @param obj the object to clone
* @return the cloned object
*/
function fastClone(obj) {
    return Object.assign({},obj);
}

/**
* Source: stackoverflow http://bit.ly/2A1Kha6
*/

function circularClone(obj, hash) {
    if (!hash) hash = new WeakMap();
    // Do not try to clone primitives or functions
    if (Object(obj) !== obj || obj instanceof Function) return obj;
    if (hash.has(obj)) return hash.get(obj); // Cyclic reference
    try { // Try to run constructor (without arguments, as we don't know them)
        var result = new obj.constructor();
    } catch(e) { // Constructor failed, create object without running the constructor
        result = Object.create(Object.getPrototypeOf(obj));
    }
    // Optional: support for some standard constructors (extend as desired)
    /*if (obj instanceof Map)
        Array.from(obj, ([key, val]) => result.set(circularClone(key, hash),
                                                   circularClone(val, hash)) );
    else if (obj instanceof Set)
        Array.from(obj, (key) => result.add(circularClone(key, hash)) );
    */
    // Register in hash
    hash.set(obj, result);
    // Clone and assign enumerable own properties recursively
    return Object.assign(result, ...Object.keys(obj).map (
        key => ({ [key]: circularClone(obj[key], hash) }) ));
}

module.exports = {
    nop : nop,
    clone : clone,
    shallowClone : shallowClone,
    deepClone : deepClone,
    fastClone : fastClone,
    circularClone : circularClone
};



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const jpescape = __webpack_require__(22).jpescape;

function defaultState() {
    return {
        path: '#',
        depth: 0,
        pkey: '',
        parent: {},
        payload: {},
        seen: new WeakMap(),
        identity: false,
        identityDetection: false
    };
}

/**
* recurses through the properties of an object, given an optional starting state
* anything you pass in state.payload is passed to the callback each time
* @param object the object to recurse through
* @param state optional starting state, can be set to null or {}
* @param callback the function which receives object,key,state on each property
*/
function recurse(object, state, callback) {
    if (!state) state = {depth:0};
    if (!state.depth) {
        state = Object.assign({},defaultState(),state);
    }
    if (typeof object !== 'object') return;
    let oPath = state.path;
    for (let key in object) {
        state.key = key;
        state.path = state.path + '/' + encodeURIComponent(jpescape(key));
        state.identityPath = state.seen.get(object[key]);
        state.identity = (typeof state.identityPath !== 'undefined');
        callback(object, key, state);
        if ((typeof object[key] === 'object') && (!state.identity)) {
            if (state.identityDetection && !Array.isArray(object[key]) && object[key] !== null) {
                state.seen.set(object[key],state.path);
            }
            let newState = {};
            newState.parent = object;
            newState.path = state.path;
            newState.depth = state.depth ? state.depth+1 : 1;
            newState.pkey = key;
            newState.payload = state.payload;
            newState.seen = state.seen;
            newState.identity = false;
            newState.identityDetection = state.identityDetection;
            recurse(object[key], newState, callback);
        }
        state.path = oPath;
    }
}

module.exports = {
    recurse : recurse
};



/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const fs = __webpack_require__(32);
const url = __webpack_require__(10);

const fetch = __webpack_require__(31);
const yaml = __webpack_require__(30);
const recurse = __webpack_require__(70).recurse;
const jptr = __webpack_require__(22).jptr;
const resolveInternal = jptr;
const clone = __webpack_require__(69).clone;

function uniqueOnly(value, index, self) {
    return self.indexOf(value) === index;
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

/**
 * simple hash implementation based on https://stackoverflow.com/a/7616484/1749888
 * @param {string} s - string to hash
 * @returns {number} numerical hash code
 */
function hash(s) {
    let hash = 0;
    let chr;
    if (s.length === 0) return hash;
    for (let i = 0; i < s.length; i++) {
      chr   = s.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

String.prototype.toCamelCase = function camelize() {
    return this.toLowerCase().replace(/[-_ \/\.](.)/g, function (match, group1) {
        return group1.toUpperCase();
    });
}

function getVersion() {
    return __webpack_require__(68).version;
}

function readFileAsync(filename, encoding) {
    return new Promise(function (resolve, reject) {
        fs.readFile(filename, encoding, function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}

function resolveAllInternal(obj,context,options) {
    recurse(obj,{},function(obj,key,state){
        if (isRef(obj,key)) {
            if (obj[key].startsWith('#')) {
                if (options.verbose) console.warn('Internal resolution',obj[key]);
                state.parent[state.pkey] = clone(resolveInternal(context,obj[key]));
            }
        }
    });
    return obj;
}

function resolveExternal(root, pointer, options, callback) {
    var u = url.parse(options.source);
    var base = options.source.split('\\').join('/').split('/');
    let doc = base.pop(); // drop the actual filename
    if (!doc) base.pop(); // in case it ended with a /
    let fragment = '';
    let fnComponents = pointer.split('#');
    if (fnComponents.length > 1) {
        fragment = '#' + fnComponents[1];
        pointer = fnComponents[0];
    }
    base = base.join('/');

    let u2 = url.parse(pointer);
    let effectiveProtocol = (u2.protocol ? u2.protocol : (u.protocol ? u.protocol : 'file:'));

    let target = url.resolve(base ? base + '/' : '', pointer)

    if (options.cache[target]) {
        if (options.verbose) console.log('CACHED',target);
        let context = clone(options.cache[target]);
        let data = context;
        if (fragment) {
            data = resolveInternal(data, fragment);
        }
        data = resolveAllInternal(data,context,options);
        callback(data,target);
        return Promise.resolve(data);
    }

    if (options.verbose) console.log('GET',target);

    if (options.handlers && options.handlers[effectiveProtocol]) {
        return options.handlers[effectiveProtocol](base,pointer,fragment,options)
            .then(function(data){
                callback(data,target);
                return data;
            });
    }
    else if (u.protocol && u.protocol.startsWith('http')) {
        return fetch(target, {agent:options.agent})
            .then(function (res) {
                if (res.status !== 200) throw new Error(`Received status code ${res.status}`);
                return res.text();
            })
            .then(function (data) {
                try {
                    let context = data = yaml.safeLoad(data, { json: true });
                    options.cache[target] = data;
                    if (fragment) {
                        data = resolveInternal(data, fragment);
                    }
                    data = resolveAllInternal(data,context,options);
                }
                catch (ex) {
                    if (options.verbose) console.warn(ex);
                }
                callback(data,target);
                return data;
            })
            .catch(function (err) {
                if (options.verbose) console.warn(err);
            });
    }
    else {
        return readFileAsync(target, options.encoding || 'utf8')
        .then(function(data){
            try {
                let context = data = yaml.safeLoad(data, { json: true });
                options.cache[target] = data;
                if (fragment) {
                    data = resolveInternal(data, fragment);
                }
                data = resolveAllInternal(data,context,options);
            }
            catch (ex) {
                if (options.verbose) console.warn(ex);
            }
            callback(data,target);
            return data;
        })
        .catch(function(err){
            console.warn(err.message);
            if (options.promise) options.promise.reject(err);
        });
    }

}

const parameterTypeProperties = [
    'format',
    'minimum',
    'maximum',
    'exclusiveMinimum',
    'exclusiveMaximum',
    'minLength',
    'maxLength',
    'multipleOf',
    'minItems',
    'maxItems',
    'uniqueItems',
    'minProperties',
    'maxProperties',
    'additionalProperties',
    'pattern',
    'enum',
    'default'
];

const arrayProperties = [
    'items',
    'minItems',
    'maxItems',
    'uniqueItems'
];

const httpVerbs = [
    'get',
    'post',
    'put',
    'delete',
    'patch',
    'head',
    'options',
    'trace'
];

function sanitise(s) {
    s = s.replace('[]','Array');
    var components = s.split('/');
    components[0] = components[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm, '_');
    return components.join('/');
}

function sanitiseAll(s) {
    return sanitise(s.split('/').join('_'));
}

function isRef(obj,key) {
    return ((key === '$ref') && (typeof obj[key] === 'string'));
}

module.exports = {

    clone: clone,
    uniqueOnly: uniqueOnly,
    hasDuplicates: hasDuplicates,
    recurse: recurse,
    hash: hash,
    getVersion: getVersion,
    resolveExternal: resolveExternal,
    resolveInternal: jptr,
    parameterTypeProperties: parameterTypeProperties,
    arrayProperties: arrayProperties,
    httpVerbs: httpVerbs,
    sanitise: sanitise,
    sanitiseAll: sanitiseAll,
    isRef: isRef

};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("call-me-maybe");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("co");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
/******/ ]);
});
//# sourceMappingURL=redoc.lib.js.map