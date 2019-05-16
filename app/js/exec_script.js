/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([2,3]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const monaco = __webpack_require__(3);
const schema_1 = __webpack_require__(8);
let findColumnDesignerInterval = setInterval(() => {
    let columnDesigner = document.querySelector('.sp-ColumnDesigner');
    if (!columnDesigner)
        return;
    clearInterval(findColumnDesignerInterval);
    let designerArea = columnDesigner.querySelector('textarea');
    designerArea.style.position = 'absolute';
    let jsonCode = JSON.stringify({
        "elmType": "div",
        "children": [
            {
                "forEach": "personIterator in @currentField",
                "elmType": "div",
                "style": {
                    "width": "32px",
                    "height": "32px",
                    "overflow": "hidden",
                    "border-radius": "50%",
                    "margin": "2px",
                    "display": "=if(loopIndex('personIterator') >= 3, 'none', '')"
                },
                "children": [
                    {
                        "elmType": "img",
                        "attributes": {
                            "src": "='/_layouts/15/userphoto.aspx?size=S&accountname=' + [$personIterator.email]",
                            "title": "[$personIterator.title]"
                        },
                        "style": {
                            "position": "relative",
                            "top": "50%",
                            "left": "50%",
                            "width": "100%",
                            "height": "auto",
                            "margin-left": "-50%",
                            "margin-top": "-50%",
                            "display": "=if(length(@currentField) > 3 && loopIndex('personIterator') >= 2, 'none', '')"
                        }
                    },
                    {
                        "elmType": "div",
                        "attributes": {
                            "title": "=join(@currentField.title, ', ')",
                            "class": "ms-bgColor-neutralLight ms-fontColor-neutralSecondary"
                        },
                        "style": {
                            "width": "100%",
                            "height": "100%",
                            "text-align": "center",
                            "line-height": "30px",
                            "font-size": "14px",
                            "display": "=if(length(@currentField) > 3 && loopIndex('personIterator') == 2, '', 'none')"
                        },
                        "children": [
                            {
                                "elmType": "span",
                                "txtContent": "='+' + toString(length(@currentField) - (2))"
                            }
                        ]
                    }
                ]
            }
        ]
    }, null, 2);
    let json2 = JSON.stringify({
        "elmType": "div",
        "txtContent": "@currentField",
        "style": {
            "text-decoration": "=if([$Complete],'line-through','inherit')"
        },
        "attributes": {
            "class": "ms-fontColor-neutralPrimary"
        }
    }, null, 2);
    let modelUri = monaco.Uri.parse("a://b/foo.json"); // a made up unique URI for our model
    let model = monaco.editor.createModel(json2, "json", modelUri);
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        validate: true,
        schemas: [{
                uri: "http://myserver/foo-schema.json",
                fileMatch: [modelUri.toString()],
                schema: schema_1.ColumnFormattingSchema
            }]
    });
    let editor = monaco.editor.create(designerArea.parentElement, {
        model: model,
        language: 'json',
        theme: 'vs',
        folding: true,
        renderIndentGuides: true,
        automaticLayout: false
    });
    editor.getModel().onDidChangeContent(e => {
        designerArea.value = editor.getModel().getValue();
        let event = new Event('input', { bubbles: true });
        designerArea.dispatchEvent(event);
        // hack
        let reactHandlers = Object.keys(designerArea).filter(k => k.startsWith('__reactEventHandlers'))[0];
        designerArea[reactHandlers]["onFocus"]();
        designerArea[reactHandlers]["onBlur"]();
        document.querySelector('.sp-ColumnDesigner-footerButton button').click();
    });
}, 1000);


/***/ }),
/* 3 */,
/* 4 */
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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(7);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)))

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6), __webpack_require__(4)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnFormattingSchemaURI = "http://columnformatting.sharepointpnp.com/columnFormattingSchema.json";
exports.ColumnFormattingSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "CustomtFormatter JSON",
    "description": "CustomFormatter renderer for SharePoint lists",
    "definitions": {
        "customAction": {
            "type": "object",
            "additionalProperties": false,
            "title": "Action object",
            "description": "Action object for a custom action button",
            "properties": {
                "action": {
                    "description": "Name of the action that the custom action button will execute",
                    "enum": [
                        "defaultClick",
                        "executeFlow"
                    ]
                },
                "actionParams": {
                    "description": "Parameters for the custom action",
                    "anyOf": [
                        {
                            "$ref": "#/definitions/expression"
                        },
                        {
                            "type": "string"
                        },
                        {
                            "$ref": "#/definitions/fieldValue"
                        }
                    ]
                }
            }
        },
        "expression": {
            "type": "object",
            "additionalProperties": false,
            "title": "Expression object JSON",
            "description": "Expression object for CustomFormatter JSON",
            "properties": {
                "operator": {
                    "description": "Operator for this expression",
                    "enum": [
                        "+",
                        "-",
                        "*",
                        "/",
                        "==",
                        "!=",
                        ">",
                        "<",
                        ">=",
                        "<=",
                        "||",
                        "&&",
                        "?",
                        ":",
                        "toString()",
                        "Number()",
                        "Date()",
                        "cos",
                        "sin",
                        "toLocaleString()",
                        "toLocaleDateString()",
                        "toLocaleTimeString()"
                    ]
                },
                "operands": {
                    "description": "Operands for this expression",
                    "type": "array",
                    "items": {
                        "anyOf": [
                            {
                                "type": "string"
                            },
                            {
                                "type": "boolean"
                            },
                            {
                                "type": "number"
                            },
                            {
                                "type": "object",
                                "$ref": "#/definitions/expression"
                            },
                            {
                                "$ref": "#/definitions/fieldValue"
                            }
                        ]
                    }
                }
            },
            "required": [
                "operator",
                "operands"
            ]
        },
        "elm": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "$schema": {
                    "description": "schema of the JSON",
                    "type": "string"
                },
                "debugMode": {
                    "description": "Is this JSON in debug mode?",
                    "type": "boolean"
                },
                "elmType": {
                    "description": "The type of element to create",
                    "enum": [
                        "div",
                        "button",
                        "span",
                        "a",
                        "img",
                        "svg",
                        "path"
                    ]
                },
                "children": {
                    "description": "Children elements",
                    "type": "array",
                    "items": {
                        "type": "object",
                        "$ref": "#/definitions/elm"
                    }
                },
                "txtContent": {
                    "anyOf": [
                        {
                            "$ref": "#/definitions/expression"
                        },
                        {
                            "type": "string"
                        },
                        {
                            "$ref": "#/definitions/fieldValue"
                        }
                    ]
                },
                "style": {
                    "description": "Specifies the style object for this element",
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                        "align-items": {
                            "description": "Specifies the default alignment for items inside a flexible container",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["stretch", "center", "flex-start", "flex-end", "baseline"] }
                            ]
                        },
                        "background-color": {
                            "description": "Sets the background color of an element",
                            "allOf": [{ "$ref": "#/definitions/styleColor" }]
                        },
                        "background-image": {
                            "description": "Sets one or more background images for an element",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["none"] }
                            ]
                        },
                        "border": {
                            "description": "Sets all the border properties in one declaration",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "border-bottom": {
                            "description": "Sets all the bottom border properties in one declaration",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "border-bottom-color": {
                            "description": "Sets the color of an element's bottom border",
                            "allOf": [{ "$ref": "#/definitions/styleColor" }]
                        },
                        "border-bottom-left-radius": {
                            "description": "Defines the shape of the border of the bottom-left corner",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "border-bottom-right-radius": {
                            "description": "Defines the shape of the border of the bottom-right corner",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "border-bottom-style": {
                            "description": "Sets the style of an element's bottom border",
                            "allOf": [{ "$ref": "#/definitions/styleBorderStyle" }]
                        },
                        "border-bottom-width": {
                            "description": "Sets the width of an element's bottom border",
                            "allOf": [{ "$ref": "#/definitions/styleBorderWidth" }]
                        },
                        "border-collapse": {
                            "description": "Sets whether the table borders are collapsed into a single border or detached",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["separate", "collapse"] }
                            ]
                        },
                        "border-color": {
                            "description": "Sets the color of an element's four borders",
                            "allOf": [{ "$ref": "#/definitions/styleColor" }]
                        },
                        "border-left": {
                            "description": "Sets all the left border properties in one declaration",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "border-left-color": {
                            "description": "Sets the color of an element's left border",
                            "allOf": [{ "$ref": "#/definitions/styleColor" }]
                        },
                        "border-left-style": {
                            "description": "Sets the style of an element's left border",
                            "allOf": [{ "$ref": "#/definitions/styleBorderStyle" }]
                        },
                        "border-left-width": {
                            "description": "Sets the width of an element's left border",
                            "allOf": [{ "$ref": "#/definitions/styleBorderWidth" }]
                        },
                        "border-radius": {
                            "description": "Defines the shape of the border of all 4 corners",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "border-right": {
                            "description": "Sets all the right border properties in one declaration",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "border-right-color": {
                            "description": "Sets the color of an element's right border",
                            "allOf": [{ "$ref": "#/definitions/styleColor" }]
                        },
                        "border-right-style": {
                            "description": "Sets the style of an element's right border",
                            "allOf": [{ "$ref": "#/definitions/styleBorderStyle" }]
                        },
                        "border-right-width": {
                            "description": "Sets the width of an element's right border",
                            "allOf": [{ "$ref": "#/definitions/styleBorderWidth" }]
                        },
                        "border-spacing": {
                            "description": "Sets the distance between the borders of adjacent cells",
                            "allOf": [{ "$ref": "#/definitions/styleBorderStyle" }]
                        },
                        "border-style": {
                            "description": "Sets the style of an element's four borders",
                            "allOf": [{ "$ref": "#/definitions/styleBorderStyle" }]
                        },
                        "border-top": {
                            "description": "Sets all the top border properties in one declaration",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "border-top-color": {
                            "description": "Sets the color of an element's top border",
                            "allOf": [{ "$ref": "#/definitions/styleColor" }]
                        },
                        "border-top-left-radius": {
                            "description": "Defines the shape of the border of the top-left corner",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "border-top-right-radius": {
                            "description": "Defines the shape of the border of the top-right corner",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "border-top-style": {
                            "description": "Sets the style of an element's top border",
                            "allOf": [{ "$ref": "#/definitions/styleBorderStyle" }]
                        },
                        "border-top-width": {
                            "description": "Sets the width of an element's top border",
                            "allOf": [{ "$ref": "#/definitions/styleBorderWidth" }]
                        },
                        "border-width": {
                            "description": "Sets the width of an element's four borders",
                            "allOf": [{ "$ref": "#/definitions/styleBorderWidth" }]
                        },
                        "bottom": {
                            "description": "For absolutely positioned elements, sets the bottom edge of the element to a unit above/below the bottom edge of its nearest positioned ancestor",
                            "allOf": [{ "$ref": "#/definitions/styleStandardAuto" }]
                        },
                        "box-align": {
                            "description": "Specifies how an element aligns its contents across its layout in a perpendicular direction",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["start", "center", "end", "baseline", "stretch"] }
                            ]
                        },
                        "box-decoration-break": {
                            "description": "Specifies how the background, padding, border, border-image, box-shadow, margin, and clip-path of an element are applied when the box for the element is fragmented",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["slice", "clone"] }
                            ]
                        },
                        "box-direction": {
                            "description": "Specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge)",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["normal", "reverse"] }
                            ]
                        },
                        "box-flex": {
                            "description": "Specifies how a flexbox grows to fill the box that contains it, in the direction of the containing box's layout",
                            "anyOf": [
                                {
                                    "type": "number",
                                    "minimum": 0
                                },
                                { "$ref": "#/definitions/styleStrict" }
                            ]
                        },
                        "box-flex-group": {
                            "description": "Assigns the flexbox's child elements to a flex group",
                            "anyOf": [
                                {
                                    "type": "integer",
                                    "minimum": 1
                                },
                                { "$ref": "#/definitions/styleStrict" }
                            ]
                        },
                        "box-lines": {
                            "description": "Determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes)",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["single", "multiple"] }
                            ]
                        },
                        "box-ordinal-group": {
                            "description": "Assigns the flexbox's child elements to an ordinal group",
                            "anyOf": [
                                {
                                    "type": "integer",
                                    "minimum": 1
                                },
                                { "$ref": "#/definitions/styleStrict" }
                            ]
                        },
                        "box-orient": {
                            "description": "Specifies whether an element lays out its contents horizontally or vertically",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["horizontal", "vertical", "inline-axis", "block-axis"] }
                            ]
                        },
                        "box-pack": {
                            "description": "Specifies how a flexbox packs its contents in the direction of its layout",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["start", "center", "end", "justify"] }
                            ]
                        },
                        "box-shadow": {
                            "description": "Attaches one or more shadows to an element",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["none", "inset"] }
                            ]
                        },
                        "box-sizing": {
                            "description": "Tells the browser what the sizing properties (width and height) should include",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["content-box", "border-box"] }
                            ]
                        },
                        "caption-side": {
                            "description": "Specifies the placement of a table caption",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["top", "bottom"] }
                            ]
                        },
                        "clear": {
                            "description": "Specifies on which sides of an element floating elements are not allowed to float",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["none", "left", "right", "both"] }
                            ]
                        },
                        "clip": {
                            "description": "Allows the specification of a rectangle to clip an absolutely positioned element",
                            "allOf": [{ "$ref": "#/definitions/styleStandardAuto" }]
                        },
                        "color": {
                            "description": "Specifies the color of text",
                            "allOf": [{ "$ref": "#/definitions/styleColor" }]
                        },
                        "column-count": {
                            "description": "Specifies the number of columns an element should be divided into",
                            "anyOf": [
                                {
                                    "type": "integer",
                                    "minimum": 1
                                },
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["none"] }
                            ]
                        },
                        "column-fill": {
                            "description": "Specifies how to fill columns, balanced or not",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["balance", "auto"] }
                            ]
                        },
                        "column-gap": {
                            "description": "Specifies the gap between columns",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["normal"] }
                            ]
                        },
                        "column-rule": {
                            "description": "Sets all the column-rule properties in one declaration",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "column-rule-color": {
                            "description": "Sets the color of the rule between columns",
                            "allOf": [{ "$ref": "#/definitions/styleColor" }]
                        },
                        "column-rule-style": {
                            "description": "Sets the style of the rule between columns",
                            "allOf": [{ "$ref": "#/definitions/styleBorderStyle" }]
                        },
                        "column-rule-width": {
                            "description": "Sets the width of the rule between columns",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["medium", "thin", "thick"] }
                            ]
                        },
                        "column-span": {
                            "description": "Specifies if an element should span across all columns or not",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["none", "all"] }
                            ]
                        },
                        "column-width": {
                            "description": "Specifies a suggested, optimal width for the columns",
                            "allOf": [{ "$ref": "#/definitions/styleStandardAuto" }]
                        },
                        "columns": {
                            "description": "Sets the column-width and column-count in one declaration",
                            "allOf": [{ "$ref": "#/definitions/styleStandardAuto" }]
                        },
                        "direction": {
                            "description": "Specifies the text direction/writing direction",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["ltr", "rtl"] }
                            ]
                        },
                        "display": {
                            "description": "Specifies the type of box used for an element",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "$ref": "#/definitions/expressionOrString" },
                                { "enum": [
                                        "inline", "block", "flex", "inline-block", "inline-flex", "inline-table", "list-item",
                                        "run-in", "table", "table-caption", "table-column-group", "table-header-group",
                                        "table-row-group", "table-cell", "table-column", "table-row", "none"
                                    ] }
                            ]
                        },
                        "empty-cells": {
                            "description": "Sets whether or not to display borders and background on empty cells in a table",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["show", "hide"] }
                            ]
                        },
                        "float": {
                            "description": "Specifies if a an element should float or not",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["none", "left", "right"] }
                            ]
                        },
                        "font": {
                            "description": "Sets all the font properties in one declaration",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"] }
                            ]
                        },
                        "font-family": {
                            "description": "Specifies the font for an element",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "font-size": {
                            "description": "Sets the size of a font",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["medium", "xx-small", "x-small", "small", "large", "x-large", "xx-large", "smaller", "larger"] }
                            ]
                        },
                        "font-size-adjust": {
                            "description": "Gives better control of the font size when the first selected font is not available",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["none"] }
                            ]
                        },
                        "font-stretch": {
                            "description": "Allows text to be wider or narrower",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": [
                                        "ultra-condensed", "extra-condensed", "condensed", "semi-condensed",
                                        "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"
                                    ] }
                            ]
                        },
                        "font-variant": {
                            "description": "Specifies whether or not text should be displayed in a small-caps font",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["normal", "small-caps"] }
                            ]
                        },
                        "font-weight": {
                            "description": "Sets how thick or thin characters in text should be displayed",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["normal", "bold", "bolder", "lighter"] }
                            ]
                        },
                        "fill": {
                            "description": "Defines the color of the interior of the given graphical element",
                            "allOf": [{ "$ref": "#/definitions/styleColor" }]
                        },
                        "height": {
                            "description": "Sets the height of an element",
                            "allOf": [{ "$ref": "#/definitions/styleStandardAuto" }]
                        },
                        "grid-columns": {
                            "description": "Specifies the width of each column in a grid",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["none"] }
                            ]
                        },
                        "grid-rows": {
                            "description": "Specifies the height of each row in a grid",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["none"] }
                            ]
                        },
                        "hanging-punctuation": {
                            "description": "Specifies whether a punctuation mark may be placed outside the line box at the start or at the end of a full line of text",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["none", "first", "last", "allow-end", "force-end"] }
                            ]
                        },
                        "left": {
                            "description": "For absolutely positioned elements, sets the left edge of an element to a unit to the left/right of the left edge of its nearest positioned ancestor",
                            "allOf": [{ "$ref": "#/definitions/styleStandardAuto" }]
                        },
                        "letter-spacing": {
                            "description": "Increases or decreases the space between characters in text",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["normal"] }
                            ]
                        },
                        "line-height": {
                            "description": "Increases or decreases the space between characters in text",
                            "anyOf": [
                                {
                                    "type": "number",
                                    "minimum": 0
                                },
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["normal"] }
                            ]
                        },
                        "margin": {
                            "description": "Sets all the margin properties in one declaration",
                            "allOf": [{ "$ref": "#/definitions/styleStandardAuto" }]
                        },
                        "margin-bottom": {
                            "description": "Sets the bottom margin of an element",
                            "allOf": [{ "$ref": "#/definitions/styleStandardAuto" }]
                        },
                        "margin-left": {
                            "description": "Sets the left margin of an element",
                            "allOf": [{ "$ref": "#/definitions/styleStandardAuto" }]
                        },
                        "margin-right": {
                            "description": "Sets the right margin of an element",
                            "allOf": [{ "$ref": "#/definitions/styleStandardAuto" }]
                        },
                        "margin-top": {
                            "description": "Sets the top margin of an element",
                            "allOf": [{ "$ref": "#/definitions/styleStandardAuto" }]
                        },
                        "max-height": {
                            "description": "Sets the maximum height of an element",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["none"] }
                            ]
                        },
                        "max-width": {
                            "description": "Sets the maximum width of an element",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["none"] }
                            ]
                        },
                        "min-height": {
                            "description": "Sets the minimum height of an element",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "min-width": {
                            "description": "Sets the minimum width of an element",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "opacity": {
                            "description": "Sets the transparency level for an element where 1 is not transparent at all and 0 is completely transparent",
                            "anyOf": [
                                {
                                    "type": "number",
                                    "minimum": 0,
                                    "maximum": 1
                                },
                                { "$ref": "#/definitions/styleStrict" }
                            ]
                        },
                        "outline": {
                            "description": "Sets the outline width, style, and color in one declaration",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "outline-color": {
                            "description": "Sets the color of an element's outline",
                            "anyOf": [
                                { "$ref": "#/definitions/styleColor" },
                                { "enum": ["invert"] }
                            ]
                        },
                        "outline-style": {
                            "description": "Sets the style of an element's outline",
                            "allOf": [{ "$ref": "#/definitions/styleBorderStyle" }]
                        },
                        "outline-width": {
                            "description": "Sets the width of an element's outline",
                            "allOf": [{ "$ref": "#/definitions/styleBorderWidth" }]
                        },
                        "overflow": {
                            "description": "Specifies what happens if content overflows an element's box",
                            "allOf": [{ "$ref": "#/definitions/styleOverflow" }]
                        },
                        "overflow-x": {
                            "description": "Specifies what to do with the left/right edges of the content if it overflows the element's content area",
                            "allOf": [{ "$ref": "#/definitions/styleOverflow" }]
                        },
                        "overflow-y": {
                            "description": "Specifies what to do with the top/bottom edges of the content if it overflows the element's content area",
                            "allOf": [{ "$ref": "#/definitions/styleOverflow" }]
                        },
                        "padding": {
                            "description": "Sets all the padding properties in one declaration",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "padding-bottom": {
                            "description": "Sets the bottom padding of an element",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "padding-left": {
                            "description": "Sets the left padding of an element",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "padding-right": {
                            "description": "Sets the right padding of an element",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "padding-top": {
                            "description": "Sets the top padding of an element",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "position": {
                            "description": "Specifies the type of positioning method used for an element",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["static", "absolute", "fixed", "relative", "sticky"] }
                            ]
                        },
                        "punctuation-trim": {
                            "description": "Specifies whether a punctuation character should be trimmed if it appears at the start or end of a line, or adjacent to another full width punctuation character",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["none", "start", "end", "allow-end", "adjacent"] }
                            ]
                        },
                        "right": {
                            "description": "For absolutely positioned elements, sets the right edge of an element to a unit to the left/right of the right edge of its nearest positioned ancestor",
                            "allOf": [{ "$ref": "#/definitions/styleStandardAuto" }]
                        },
                        "rotation": {
                            "description": "Rotates an element counterclockwise around the point given by the rotation-point property",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "rotation-point": {
                            "description": "Defines a point as an offset from the top left border edge",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "table-layout": {
                            "description": "Sets the table layout algorithm to be used for a table",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["auto", "fixed"] }
                            ]
                        },
                        "text-align": {
                            "description": "Specifies the horizontal alignment of text in an element",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["left", "right", "center", "justify"] }
                            ]
                        },
                        "text-align-last": {
                            "description": "Specifies the horizontal alignment of the last line of text in an element",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["auto", "left", "right", "center", "justify", "start", "end"] }
                            ]
                        },
                        "text-decoration": {
                            "description": "Specifies the decoration added to text in an element",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "$ref": "#/definitions/expressionOrString" },
                                { "enum": ["none", "underline", "overline", "line-through"] }
                            ]
                        },
                        "text-indent": {
                            "description": "Specifies the indentation of the first line in a text-block",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "text-justify": {
                            "description": "Specifies the justification method to use when text-align is set to justify",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["auto", "none", "inter-word", "inter-ideograph", "inter-cluster", "distribute", "kashida", "trim"] }
                            ]
                        },
                        "text-outline": {
                            "description": "Specifies a text outline",
                            "allOf": [{ "$ref": "#/definitions/styleStandard" }]
                        },
                        "text-shadow": {
                            "description": "Adds shadow to text",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["none"] }
                            ]
                        },
                        "text-transform": {
                            "description": "Controls the capitalization of text",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["none", "capitalize", "uppercase", "lowercase"] }
                            ]
                        },
                        "text-wrap": {
                            "description": "Specifies line breaking rules for text",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["normal", "none", "unrestricted", "suppress"] }
                            ]
                        },
                        "top": {
                            "description": "For absolutely positioned elements, sets the top edge of an element to a unit above/below the top edge of its nearest positioned ancestor",
                            "allOf": [{ "$ref": "#/definitions/styleStandardAuto" }]
                        },
                        "unicode-bidi": {
                            "description": "Used together with the direction property to set whether the text should be overridden to support multiple languages in the same document",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["normal", "embed", "bidi-override"] }
                            ]
                        },
                        "vertical-align": {
                            "description": "Sets the vertical alignment of an element",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["baseline", "sub", "super", "top", "text-top", "middle", "bottom", "text-bottom"] }
                            ]
                        },
                        "visibility": {
                            "description": "Specifies whether or not an element is visible",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["visible", "hidden", "collapse"] }
                            ]
                        },
                        "white-space": {
                            "description": "Used together with the direction property to set whether the text should be overridden to support multiple languages in the same document",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["normal", "nowrap", "pre", "pre-line", "pre-wrap"] }
                            ]
                        },
                        "width": {
                            "description": "Sets the width of an element",
                            "allOf": [{ "$ref": "#/definitions/styleStandardAuto" }]
                        },
                        "word-break": {
                            "description": "Specifies line breaking rules for scripts that are not Chinese, Japanese, or Korean",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["normal", "break-all", "keep-all"] }
                            ]
                        },
                        "word-spacing": {
                            "description": "Increases or decreases the white space between words",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStandard" },
                                { "enum": ["normal"] }
                            ]
                        },
                        "word-wrap": {
                            "description": "Allows long words to be able to be broken and wrap onto the next line",
                            "anyOf": [
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["normal", "break-word"] }
                            ]
                        },
                        "z-index": {
                            "description": "Specifies the stack order of an element",
                            "anyOf": [
                                { "type": "integer" },
                                { "$ref": "#/definitions/styleStrict" },
                                { "enum": ["auto"] }
                            ]
                        }
                    },
                    "patternProperties": {
                        "^[a-z]+(?:-[a-z]+)?$": {
                            "description": "Specifies style attributes for this element",
                            "anyOf": [
                                {
                                    "$ref": "#/definitions/expression"
                                },
                                {
                                    "type": "string"
                                }
                            ]
                        }
                    }
                },
                "customRowAction": {
                    "anyOf": [
                        {
                            "$ref": "#/definitions/customAction"
                        }
                    ]
                },
                "attributes": {
                    "type": "object",
                    "description": "Additional attributes to be added to elmType",
                    "properties": {
                        "href": {
                            "description": "Specifies the href attribute",
                            "anyOf": [
                                {
                                    "$ref": "#/definitions/expression"
                                },
                                {
                                    "type": "string"
                                }
                            ]
                        },
                        "src": {
                            "description": "Specifies the src attribute",
                            "anyOf": [
                                {
                                    "$ref": "#/definitions/expression"
                                },
                                {
                                    "type": "string"
                                }
                            ]
                        },
                        "class": {
                            "description": "Specifies the class attribute",
                            "anyOf": [
                                {
                                    "$ref": "#/definitions/expression"
                                },
                                {
                                    "type": "string"
                                },
                                {
                                    "enum": [
                                        "sp-field-customFormatBackground",
                                        "sp-field-severity--good",
                                        "sp-field-severity--low",
                                        "sp-field-severity--warning",
                                        "sp-field-severity--severeWarning",
                                        "sp-field-severity--blocked",
                                        "sp-field-dataBars",
                                        "sp-field-trending--up",
                                        "sp-field-trending--down",
                                        "sp-field-quickAction"
                                    ]
                                }
                            ]
                        },
                        "target": {
                            "description": "Specifies the target attribute, used primarily for <a> element types.",
                            "anyOf": [
                                {
                                    "$ref": "#/definitions/expression"
                                },
                                {
                                    "type": "string"
                                },
                                {
                                    "enum": [
                                        "_blank", "_self", "_parent", "_top"
                                    ]
                                }
                            ]
                        },
                        "role": {
                            "description": "Specifies the role attribute, used accessibility.",
                            "anyOf": [
                                {
                                    "$ref": "#/definitions/expression"
                                },
                                {
                                    "type": "string"
                                },
                                {
                                    "enum": [
                                        "alert", "alertdialog", "application", "article", "button", "cell", "checkbox", "columnheader", "combobox",
                                        "complementary", "contentinfo", "definition", "dialog", "directory", "document", "feed", "figure", "form",
                                        "grid", "gridcell", "group", "heading", "img", "link", "list", "listbox", "listitem", "log", "main", "marquee",
                                        "math", "menu", "menubar", "menuitem", "menuitemcheckbox", "menuitemradio", "navigation", "none", "note",
                                        "option", "presentation", "progressbar", "radio", "radiogroup", "region", "row", "rowgroup", "rowheader",
                                        "scrollbar", "search", "searchbox", "separator", "slider", "spinbutton", "status", "switch", "tab", "table",
                                        "tablist", "tabpanel", "term", "textbox", "timer", "toolbar", "tooltip", "tree", "treegrid", "treeitem"
                                    ]
                                }
                            ]
                        },
                        "d": {
                            "description": "Specifies the d attribute. Used primarily for svg path elements",
                            "anyOf": [
                                {
                                    "$ref": "#/definitions/expression"
                                },
                                {
                                    "type": "string"
                                }
                            ]
                        },
                        "iconName": {
                            "description": "Specifies the Fabric icon to display before this element",
                            "anyOf": [
                                {
                                    "$ref": "#/definitions/expression"
                                },
                                {
                                    "type": "string"
                                },
                                {
                                    "enum": [
                                        "12PointStar", "6PointStar", "AADLogo", "Accept", "AccessLogo", "AccessLogoFill", "AccountManagement", "Accounts",
                                        "ActivateOrders", "ActivityFeed", "Add", "AddEvent", "AddFavorite", "AddFavoriteFill", "AddFriend", "AddGroup",
                                        "AddNotes", "AddOnlineMeeting", "AddPhone", "AddTo", "Admin", "AdminALogo32", "AdminALogoFill32", "AdminALogoInverse32",
                                        "AdminCLogoInverse32", "AdminDLogoInverse32", "AdminELogoInverse32", "AdminLLogoInverse32", "AdminMLogoInverse32",
                                        "AdminOLogoInverse32", "AdminPLogoInverse32", "AdminSLogoInverse32", "AdminYLogoInverse32", "Airplane", "AirplaneSolid",
                                        "AirTickets", "AlarmClock", "Album", "AlbumRemove", "AlertSolid", "AlignCenter", "AlignHorizontalCenter",
                                        "AlignHorizontalLeft", "AlignHorizontalRight", "AlignJustify", "AlignLeft", "AlignRight", "AlignVerticalBottom",
                                        "AlignVerticalCenter", "AlignVerticalTop", "AnalyticsLogo", "AnalyticsQuery", "AnalyticsReport", "AnchorLock", "Annotation",
                                        "AppIconDefault", "Archive", "AreaChart", "ArrangeBringForward", "ArrangeBringToFront", "ArrangeSendBackward",
                                        "ArrangeSendToBack", "Arrivals", "ArrowDownRight8", "ArrowDownRightMirrored8", "ArrowTallDownLeft", "ArrowTallDownRight",
                                        "ArrowTallUpLeft", "ArrowTallUpRight", "ArrowUpRight8", "ArrowUpRightMirrored8", "Articles", "Ascending", "AspectRatio",
                                        "AssessmentGroup", "AssessmentGroupTemplate", "AssetLibrary", "Assign", "Asterisk", "AsteriskSolid", "ATPLogo", "Attach",
                                        "AustralianRules", "AutoEnhanceOff", "AutoEnhanceOn", "AutoFillTemplate", "AutoHeight", "AutoRacing", "AwayStatus",
                                        "AzureAPIManagement", "AzureKeyVault", "AzureLogo", "AzureServiceEndpoint", "Back", "BackgroundColor", "Backlog", "BacklogBoard",
                                        "BackToWindow", "Badge", "Balloons", "BankSolid", "BarChart4", "BarChartHorizontal", "BarChartVertical", "Baseball", "BeerMug",
                                        "BIDashboard", "BidiLtr", "BidiRtl", "BingLogo", "BirthdayCake", "BlockContact", "Blocked", "Blocked2", "BlockedSolid", "BlowingSnow",
                                        "Blur", "Boards", "Bold", "BookingsLogo", "Bookmarks", "BookmarksMirrored", "BorderDash", "BorderDot", "BoxAdditionSolid",
                                        "BoxCheckmarkSolid", "BoxMultiplySolid", "BoxPlaySolid", "BoxSubtractSolid", "BranchCommit", "BranchCompare", "BranchFork",
                                        "BranchFork2", "BranchLocked", "BranchMerge", "BranchPullRequest", "BranchSearch", "BranchShelveset", "Breadcrumb", "Breakfast",
                                        "Brightness", "Broom", "Brunch", "BucketColor", "BucketColorFill", "BufferTimeAfter", "BufferTimeBefore", "BufferTimeBoth", "Bug",
                                        "BugSolid", "Build", "BuildIssue", "BuildQueue", "BuildQueueNew", "BulkUpload", "BulletedList", "BulletedList2",
                                        "BulletedList2Mirrored", "BulletedListMirrored", "Bullseye", "Bus", "BusinessCenterLogo", "BusinessHoursSign", "BusSolid", "Cafe",
                                        "Cake", "Calculator", "CalculatorAddition", "CalculatorEqualTo", "CalculatorMultiply", "CalculatorNotEqualTo", "CalculatorSubtract",
                                        "Calendar", "CalendarAgenda", "CalendarDay", "CalendarMirrored", "CalendarReply", "CalendarSettings", "CalendarSettingsMirrored",
                                        "CalendarWeek", "CalendarWorkWeek", "CaloriesAdd", "Camera", "Cancel", "CannedChat", "Car", "CaretBottomLeftCenter8",
                                        "CaretBottomLeftSolid8", "CaretBottomRightCenter8", "CaretBottomRightSolid8", "CaretDown8", "CaretDownSolid8", "CaretHollow",
                                        "CaretHollowMirrored", "CaretLeft8", "CaretLeftSolid8", "CaretRight", "CaretRight8", "CaretRightSolid8", "CaretSolid",
                                        "CaretSolid16", "CaretSolidDown", "CaretSolidLeft", "CaretSolidMirrored", "CaretSolidRight", "CaretSolidUp", "CaretTopLeftCenter8",
                                        "CaretTopLeftSolid8", "CaretTopRightCenter8", "CaretTopRightSolid8", "CaretUp8", "CaretUpSolid8", "Cat", "CellPhone", "Certificate",
                                        "Chart", "ChartSeries", "ChartXAngle", "ChartYAngle", "Chat", "ChatInviteFriend", "ChatSolid", "Checkbox", "CheckboxComposite",
                                        "CheckboxCompositeReversed", "CheckboxIndeterminate", "CheckList", "CheckMark", "ChevronDown", "ChevronDownEnd6", "ChevronDownMed",
                                        "ChevronDownSmall", "ChevronFold10", "ChevronLeft", "ChevronLeftEnd6", "ChevronLeftMed", "ChevronLeftSmall", "ChevronRight",
                                        "ChevronRightEnd6", "ChevronRightMed", "ChevronRightSmall", "ChevronUnfold10", "ChevronUp", "ChevronUpEnd6", "ChevronUpMed",
                                        "ChevronUpSmall", "Chopsticks", "ChromeBack", "ChromeBackMirrored", "ChromeClose", "ChromeMinimize", "CircleAddition",
                                        "CircleAdditionSolid", "CircleFill", "CircleHalfFull", "CirclePause", "CirclePauseSolid", "CirclePlus", "CircleRing", "CircleStop",
                                        "CircleStopSolid", "CityNext", "ClassNotebookLogo16", "ClassNotebookLogo32", "ClassNotebookLogoFill16", "ClassNotebookLogoFill32",
                                        "ClassNotebookLogoInverse", "ClassNotebookLogoInverse16", "ClassNotebookLogoInverse32", "ClassroomLogo", "Clear", "ClearFilter",
                                        "ClearFormatting", "ClearNight", "Clock", "CloneToDesktop", "ClosedCaption", "ClosePane", "ClosePaneMirrored", "Cloud", "CloudAdd",
                                        "CloudDownload", "CloudUpload", "CloudWeather", "Cloudy", "Cocktails", "Code", "CodeEdit", "Coffee", "CoffeeScript", "CollapseContent",
                                        "CollapseContentSingle", "CollapseMenu", "CollegeFootball", "CollegeHoops", "Color", "ColorSolid", "ColumnLeftTwoThirds",
                                        "ColumnLeftTwoThirdsEdit", "ColumnOptions", "ColumnRightTwoThirds", "ColumnRightTwoThirdsEdit", "Combine", "Combobox",
                                        "CommandPrompt", "Comment", "CommentAdd", "CommentNext", "CommentPrevious", "CommentUrgent", "Commitments", "Communications",
                                        "CompanyDirectory", "CompanyDirectoryMirrored", "CompassNW", "Completed", "CompletedSolid", "ConfigurationSolid", "ConstructionCone",
                                        "ConstructionConeSolid", "Contact", "ContactCard", "ContactCardSettings", "ContactCardSettingsMirrored", "ContactInfo", "ContactLink",
                                        "ContextMenu", "Contrast", "Copy", "Cotton", "CPlusPlus", "CPlusPlusLanguage", "Cricket", "CRMReport", "Crop", "Crown", "CrownSolid",
                                        "CSharp", "CSharpLanguage", "CSS", "CustomList", "CustomListMirrored", "Cut", "Cycling", "DashboardAdd", "Database",
                                        "DataConnectionLibrary", "DateTime", "DateTime2", "DateTimeMirrored", "DeactivateOrders", "DecisionSolid", "DeclineCall",
                                        "DecreaseIndentLegacy", "DefaultRatio", "DefectSolid", "Delete", "DeliveryTruck", "DelveAnalytics", "DelveAnalyticsLogo", "DelveLogo",
                                        "DelveLogoFill", "DelveLogoInverse", "Deploy", "Descending", "Design", "DeveloperTools", "Devices3", "Devices4", "Diagnostic", "Dialpad",
                                        "DiamondSolid", "Dictionary", "DietPlanNotebook", "DiffInline", "DiffSideBySide", "DisableUpdates", "Dislike", "DislikeSolid",
                                        "DockLeft", "DockLeftMirrored", "DockRight", "DocLibrary", "DocsLogoInverse", "Document", "DocumentApproval", "Documentation",
                                        "DocumentManagement", "DocumentReply", "DocumentSearch", "DocumentSet", "DonutChart", "Door", "DoubleBookmark", "DoubleChevronDown",
                                        "DoubleChevronDown12", "DoubleChevronDown8", "DoubleChevronLeft", "DoubleChevronLeft12", "DoubleChevronLeft8", "DoubleChevronLeftMed",
                                        "DoubleChevronLeftMedMirrored", "DoubleChevronRight", "DoubleChevronRight12", "DoubleChevronRight8", "DoubleChevronUp",
                                        "DoubleChevronUp12", "DoubleChevronUp8", "DoubleColumn", "DoubleColumnEdit", "Down", "Download", "DownloadDocument", "DragObject",
                                        "DrillDown", "DrillDownSolid", "DrillExpand", "DrillShow", "DRM", "Drop", "Dropdown", "Duststorm", "Dynamics365Logo", "DynamicSMBLogo",
                                        "EatDrink", "EdgeLogo", "Edit", "EditContact", "EditMail", "EditMirrored", "EditNote", "EditPhoto", "EditSolid12", "EditSolidMirrored12",
                                        "EditStyle", "Education", "Ellipse", "Embed", "EMI", "Emoji", "Emoji2", "EmojiDisappointed", "EmojiNeutral", "EmojiTabSymbols",
                                        "EmptyRecycleBin", "EngineeringGroup", "EntryDecline", "EntryView", "Equalizer", "EraseTool", "Error", "ErrorBadge", "Event",
                                        "EventAccepted", "EventDate", "EventDeclined", "EventInfo", "EventTentative", "EventTentativeMirrored", "ExcelDocument", "ExcelLogo",
                                        "ExcelLogo16", "ExcelLogoFill", "ExcelLogoFill16", "ExcelLogoInverse", "ExcelLogoInverse16", "ExchangeLogo", "ExchangeLogoFill",
                                        "ExchangeLogoInverse", "ExerciseTracker", "ExpandMenu", "ExploreContent", "ExploreContentSingle", "Export", "ExportMirrored",
                                        "ExternalBuild", "ExternalTFVC", "ExternalXAML", "F12DevTools", "FabricAssetLibrary", "FabricDataConnectionLibrary", "FabricDocLibrary",
                                        "FabricFolder", "FabricFolderFill", "FabricFolderSearch", "FabricFormLibrary", "FabricFormLibraryMirrored", "FabricMovetoFolder",
                                        "FabricNewFolder", "FabricOpenFolderHorizontal", "FabricPictureLibrary", "FabricPublicFolder", "FabricReportLibrary",
                                        "FabricReportLibraryMirrored", "FabricSyncFolder", "FabricUnsyncFolder", "Family", "FangBody", "FastForward", "FastMode", "Favicon",
                                        "FavoriteList", "FavoriteStar", "FavoriteStarFill", "Fax", "Feedback", "FeedbackRequestMirroredSolid", "FeedbackRequestSolid",
                                        "FeedbackResponseSolid", "Ferry", "FerrySolid", "FieldChanged", "FieldEmpty", "FieldFilled", "FieldNotChanged", "FieldReadOnly",
                                        "FieldRequired", "FileASPX", "FileBug", "FileCode", "FileComment", "FileCSS", "FileHTML", "FileImage", "FileJAVA", "FileLess", "FilePDB",
                                        "FileSass", "FileSQL", "FileSymlink", "FileTemplate", "FileTypeSolution", "Filter", "Filters", "FilterSolid", "FiltersSolid", "Financial",
                                        "FinancialMirroredSolid", "FinancialSolid", "Fingerprint", "FiveTileGrid", "Flag", "FlameSolid", "FlickDown", "FlickLeft", "FlickRight",
                                        "FlickUp", "Flow", "FocalPoint", "Fog", "Folder", "FolderFill", "FolderHorizontal", "FolderList", "FolderListMirrored", "FolderOpen",
                                        "FolderQuery", "FolderSearch", "FollowUser", "Font", "FontColor", "FontColorA", "FontColorSwatch", "FontDecrease", "FontIncrease",
                                        "FontSize", "FormLibrary", "FormLibraryMirrored", "Forward", "ForwardEvent", "Freezing", "Frigid", "FSharp", "FSharpLanguage",
                                        "FullCircleMask", "FullHistory", "FullScreen", "FullWidth", "FullWidthEdit", "FunctionalManagerDashboard", "GallatinLogo", "Generate",
                                        "GenericScan", "Giftbox", "GiftboxOpen", "GiftBoxSolid", "GiftCard", "GitGraph", "Glasses", "Glimmer", "GlobalNavButton", "Globe", "Globe2",
                                        "GlobeFavorite", "Golf", "GotoToday", "GridViewLarge", "GridViewMedium", "GridViewSmall", "GripperBarHorizontal", "GripperBarVertical",
                                        "GripperTool", "Group", "GroupedAscending", "GroupedDescending", "GroupedList", "GroupObject", "GUID", "Guitar", "HailDay", "HailNight",
                                        "HalfAlpha", "HalfCircle", "Handwriting", "HardDrive", "HardDriveGroup", "HardDriveLock", "HardDriveUnlock", "Header1", "Header2",
                                        "Header3", "Header4", "Headset", "HeadsetSolid", "Health", "HealthSolid", "Heart", "HeartBroken", "HeartFill", "Help", "HelpMirrored",
                                        "Hexagon", "Hide", "Hide2", "Highlight", "HighlightMappedShapes", "HintText", "History", "Home", "HomeSolid", "HorizontalDistributeCenter",
                                        "Hospital", "Hotel", "HourGlass", "HumanResources", "IconSetsFlag", "IDBadge", "ImageCrosshair", "ImageDiff", "ImagePixel", "ImageSearch",
                                        "Import", "Important", "ImportMirrored", "Inbox", "InboxCheck", "IncidentTriangle", "IncreaseIndentLegacy", "Info", "Info2", "InfoSolid",
                                        "InsertTextBox", "InstallToDrive", "InternetSharing", "IRMForward", "IRMForwardMirrored", "IRMReply", "IRMReplyMirrored", "IssueSolid",
                                        "IssueTracking", "IssueTrackingMirrored", "Italic", "JavaScriptLanguage", "JoinOnlineMeeting", "JS", "KaizalaLogo", "Label",
                                        "LadybugSolid", "Lamp", "LandscapeOrientation", "LaptopSecure", "LaptopSelected", "LargeGrid", "Library", "Lifesaver", "LifesaverLock",
                                        "Light", "Lightbulb", "LightningBolt", "LightWeight", "Like", "LikeSolid", "Line", "LineChart", "LineSpacing", "LineStyle", "LineThickness",
                                        "Link", "LinkedInLogo", "List", "ListMirrored", "LocaleLanguage", "Location", "LocationCircle", "LocationDot", "LocationFill",
                                        "LocationOutline", "Lock", "LockSolid", "LogRemove", "LowerBrightness", "LyncLogo", "Mail", "MailAlert", "MailCheck", "MailFill",
                                        "MailForward", "MailForwardMirrored", "MailLowImportance", "MailPause", "MailReminder", "MailRepeat", "MailReply", "MailReplyAll",
                                        "MailReplyAllMirrored", "MailReplyMirrored", "MailSolid", "MailTentative", "MailTentativeMirrored", "MailUndelivered",
                                        "ManagerSelfService", "MapDirections", "MapPin", "MapPinSolid", "MarkDownLanguage", "Market", "MarketDown", "Medal", "MediaAdd", "Medical",
                                        "Megaphone", "MegaphoneSolid", "Memo", "Merge", "MergeDuplicate", "Message", "MessageFill", "MicOff", "Microphone", "MicrosoftFlowLogo",
                                        "MicrosoftStaffhubLogo", "MiniContract", "MiniExpand", "MiniLink", "MobileReport", "MobileSelected", "Money", "More", "MoreSports",
                                        "MoreVertical", "Move", "Movers", "MoveToFolder", "MSNLogo", "MSNVideos", "MSNVideosSolid", "MTMLogo", "MultiSelect", "MultiSelectMirrored",
                                        "MusicInCollection", "MusicInCollectionFill", "MusicNote", "MyMoviesTV", "Nav2DMapView", "NavigateBack", "NavigateBackMirrored",
                                        "NavigateExternalInline", "NavigateForward", "NavigateForwardMirrored", "NavigationFlipper", "NetworkTower", "NewAnalyticsQuery",
                                        "NewFolder", "News", "NewsSearch", "NewTeamProject", "Next", "NonprofitLogo32", "NormalWeight", "NoteForward", "NotePinned", "NoteReply",
                                        "NotExecuted", "NotImpactedSolid", "NugetLogo", "NumberedList", "NumberField", "NumberSequence", "Octagon", "OEM", "OfficeAddinsLogo",
                                        "OfficeAssistantLogo", "OfficeFormsLogo", "OfficeFormsLogo16", "OfficeFormsLogo24", "OfficeFormsLogoFill", "OfficeFormsLogoFill16",
                                        "OfficeFormsLogoFill24", "OfficeFormsLogoInverse", "OfficeFormsLogoInverse16", "OfficeFormsLogoInverse24", "OfficeLogo",
                                        "OfficeStoreLogo", "OfficeVideoLogo", "OfficeVideoLogoFill", "OfficeVideoLogoInverse", "OfflineOneDriveParachute",
                                        "OfflineOneDriveParachuteDisabled", "OfflineStorageSolid", "OneDrive", "OneDriveAdd", "OneDriveFolder16", "OneNoteEduLogoInverse",
                                        "OneNoteLogo", "OneNoteLogo16", "OneNoteLogoFill", "OneNoteLogoFill16", "OneNoteLogoInverse", "OneNoteLogoInverse16", "OpenFile",
                                        "OpenFolderHorizontal", "OpenInNewWindow", "OpenPane", "OpenPaneMirrored", "OpenSource", "Org", "Orientation", "OutlookLogo",
                                        "OutlookLogo16", "OutlookLogoFill", "OutlookLogoFill16", "OutlookLogoInverse", "OutlookLogoInverse16", "OutOfOffice", "Package",
                                        "Packages", "Padding", "PaddingBottom", "PaddingLeft", "PaddingRight", "PaddingTop", "Page", "PageAdd", "PageCheckedin", "PageCheckedOut",
                                        "PageEdit", "PageLeft", "PageListMirroredSolid", "PageListSolid", "PageLock", "PageRemove", "PageRight", "PageSolid", "PanoIndicator",
                                        "Parachute", "ParachuteSolid", "Parameter", "ParkingLocation", "ParkingLocationMirrored", "ParkingMirroredSolid", "ParkingSolid",
                                        "PartlyCloudyDay", "PartlyCloudyNight", "PartyLeader", "Paste", "Pause", "PaymentCard", "PC1", "PDF", "PencilReply", "Pentagon", "People",
                                        "PeopleAdd", "PeopleAlert", "PeopleBlock", "PeoplePause", "PeopleRepeat", "Permissions", "PermissionsSolid", "Personalize", "Phone", "Photo2",
                                        "Photo2Add", "Photo2Remove", "PhotoCollection", "Picture", "PictureCenter", "PictureFill", "PictureLibrary", "PicturePosition",
                                        "PictureStretch", "PictureTile", "PieDouble", "PieSingle", "PieSingleSolid", "Pill", "Pin", "Pinned", "PinnedFill", "PivotChart",
                                        "PlannerLogo", "PlanView", "Play", "PlayerSettings", "PlayResume", "Plug", "PlugConnected", "PlugDisconnected", "PlugSolid", "POI", "POISolid",
                                        "PostUpdate", "PowerApps", "PowerApps2Logo", "PowerAppsLogo", "PowerBILogo", "PowerPointDocument", "PowerPointLogo", "PowerPointLogo16",
                                        "PowerPointLogoFill", "PowerPointLogoFill16", "PowerPointLogoInverse", "PowerPointLogoInverse16", "Precipitation",
                                        "PresenceChickletVideo", "Preview", "PreviewLink", "Previous", "PrimaryCalendar", "Print", "PrintfaxPrinterFile", "Processing",
                                        "ProcessMetaTask", "Product", "ProfileSearch", "ProFootball", "ProgressLoopInner", "ProgressLoopOuter", "ProgressRingDots", "ProHockey",
                                        "ProjectCollection", "ProjectLogo16", "ProjectLogo32", "ProjectLogoFill16", "ProjectLogoFill32", "ProjectLogoInverse", "ProtectedDocument",
                                        "ProtectionCenterLogo32", "ProtectRestrict", "PublicCalendar", "PublicContactCard", "PublicContactCardMirrored", "PublicEmail",
                                        "PublicFolder", "PublisherLogo", "PublisherLogo16", "PublisherLogoFill", "PublisherLogoFill16", "PublisherLogoInverse16", "Puzzle", "PY",
                                        "PythonLanguage", "QuarterCircle", "QueryList", "Questionnaire", "QuestionnaireMirrored", "QuickNote", "QuickNoteSolid", "R", "RadioBtnOff",
                                        "RadioBtnOn", "RadioBullet", "Rain", "RainShowersDay", "RainShowersNight", "RainSnow", "RawSource", "Read", "ReadingMode", "ReadingModeSolid",
                                        "ReceiptCheck", "ReceiptForward", "ReceiptReply", "ReceiptTentative", "ReceiptTentativeMirrored", "ReceiptUndelivered", "Recent", "Record2",
                                        "RectangularClipping", "RecurringEvent", "RecurringTask", "RecycleBin", "Redeploy", "RedEye", "Redo", "Refresh", "ReminderGroup",
                                        "ReminderPerson", "Remote", "Remove", "RemoveEvent", "RemoveFilter", "RemoveLink", "RemoveOccurrence", "Rename", "RenewalCurrent",
                                        "RenewalFuture", "ReopenPages", "Repair", "Reply", "ReplyAll", "ReplyAllAlt", "ReplyAllMirrored", "ReplyAlt", "ReplyMirrored", "Repo",
                                        "ReportAdd", "ReportHacked", "ReportLibrary", "ReportLibraryMirrored", "RepoSolid", "ReturnToSession", "ReviewRequestMirroredSolid",
                                        "ReviewRequestSolid", "ReviewResponseSolid", "ReviewSolid", "RevToggleKey", "Rewind", "Ribbon", "RibbonSolid", "RightDoubleQuote",
                                        "RightTriangle", "Ringer", "RingerOff", "Robot", "Rocket", "Room", "Rotate", "RowsChild", "RowsGroup", "Rugby", "Running", "Sad", "SadSolid",
                                        "Save", "SaveAll", "SaveAndClose", "SaveAs", "Savings", "ScaleUp", "ScheduleEventAction", "ScopeTemplate", "Script", "ScrollUpDown", "Search",
                                        "SearchAndApps", "SearchCalendar", "SearchIssue", "SearchIssueMirrored", "Section", "Sections", "SecurityGroup", "Sell", "SemiboldWeight",
                                        "Send", "SendMirrored", "Separator", "Server", "ServerEnviroment", "ServerProcesses", "SetAction", "Settings", "Share", "ShareiOS",
                                        "SharepointLogo", "SharepointLogoFill", "SharepointLogoInverse", "Shield", "ShieldSolid", "Shop", "ShoppingCart", "ShoppingCartSolid",
                                        "ShopServer", "ShowResults", "ShowResultsMirrored", "SidePanel", "SidePanelMirrored", "SignOut", "SingleBookmark", "SingleColumn",
                                        "SingleColumnEdit", "SIPMove", "SiteScan", "SizeLegacy", "SkiResorts", "SkypeCheck", "SkypeCircleCheck", "SkypeCircleClock", "SkypeCircleMinus",
                                        "SkypeClock", "SkypeForBusinessLogo", "SkypeForBusinessLogo16", "SkypeForBusinessLogoFill", "SkypeForBusinessLogoFill16", "SkypeLogo",
                                        "SkypeLogo16", "SkypeMessage", "SkypeMinus", "Slider", "SliderHandleSize", "SliderThumb", "Snooze", "Snow", "Snowflake", "SnowShowerDay",
                                        "SnowShowerNight", "Soccer", "SocialListeningLogo", "Sort", "SortDown", "SortLines", "SortUp", "Spacer", "Speakers", "SpeedHigh", "Split",
                                        "SplitObject", "Sprint", "Squalls", "Stack", "StackedBarChart", "StackedLineChart", "StackIndicator", "StaffNotebookLogo16",
                                        "StaffNotebookLogo32", "StaffNotebookLogoFill16", "StaffNotebookLogoFill32", "StaffNotebookLogoInverted16", "StaffNotebookLogoInverted32",
                                        "Starburst", "StarburstSolid", "StatusCircleCheckmark", "StatusCircleInner", "StatusCircleOuter", "StatusErrorFull", "StatusTriangle", "Step",
                                        "StepInsert", "StepShared", "StepSharedAdd", "StepSharedInsert", "StockDown", "StockUp", "Stop", "StopSolid", "Stopwatch", "StoreLogo16",
                                        "StoreLogoMed20", "Storyboard", "Streaming", "StreamingOff", "StreamLogo", "Strikethrough", "Subscribe", "Subscript", "SubstitutionsIn",
                                        "Suitcase", "SunAdd", "Sunny", "SunQuestionMark", "Superscript", "SurveyQuestions", "SwayLogo16", "SwayLogo32", "SwayLogoFill16",
                                        "SwayLogoFill32", "SwayLogoInverse", "Switch", "SwitcherStartEnd", "Sync", "SyncFolder", "SyncOccurence", "SyncToPC", "System", "Tab", "Table",
                                        "Tablet", "TabletMode", "TabletSelected", "Tag", "Taskboard", "TaskGroup", "TaskGroupMirrored", "TaskLogo", "TaskManager",
                                        "TaskManagerMirrored", "TaskSolid", "Taxi", "TeamFavorite", "TeamsLogo", "TeamsLogoFill", "TeamsLogoInverse", "Teamwork", "Teeth",
                                        "TemporaryUser", "Tennis", "TestAutoSolid", "TestBeaker", "TestBeakerSolid", "TestCase", "TestExploreSolid", "TestImpactSolid",
                                        "TestParameter", "TestPlan", "TestStep", "TestSuite", "TestUserSolid", "TextBox", "TextCallout", "TextDocument", "TextField", "TextOverflow",
                                        "TFVCLogo", "ThisPC", "ThreeQuarterCircle", "ThumbnailView", "ThumbnailViewMirrored", "Thunderstorms", "Ticket", "Tiles", "Tiles2", "TimeEntry",
                                        "Timeline", "TimelineDelivery", "TimelineMatrixView", "TimelineProgress", "Timer", "TimeSheet", "ToDoLogoBottom", "ToDoLogoInverse",
                                        "ToDoLogoTop", "ToggleBorder", "ToggleFilled", "ToggleOff", "ToggleThumb", "Touch", "TouchPointer", "Train", "TrainSolid", "TransferCall",
                                        "Transition", "TriangleDown12", "TriangleLeft12", "TriangleRight12", "TriangleSolid", "TriangleSolidDown12", "TriangleSolidLeft12",
                                        "TriangleSolidRight12", "TriangleSolidUp12", "TriangleUp12", "TriggerApproval", "TriggerAuto", "TriggerUser", "TripleColumn",
                                        "TripleColumnEdit", "Trophy", "Trophy2", "Trophy2Solid", "TurnRight", "TVMonitor", "TVMonitorSelected", "TypeScriptLanguage", "Umbrella",
                                        "Underline", "Undo", "Uneditable", "UneditableMirrored", "UneditableSolid12", "UneditableSolidMirrored12", "Unfavorite", "UngroupObject",
                                        "Unknown", "UnknownCall", "UnknownMirrored", "UnknownMirroredSolid", "UnknownSolid", "Unlock", "UnlockSolid", "Unpin", "Unsubscribe",
                                        "UnsyncFolder", "UnsyncOccurence", "Up", "Upload", "UserFollowed", "UserPause", "UserSync", "Vacation", "Variable", "VariableGroup", "VB",
                                        "VennDiagram", "VerticalDistributeCenter", "Video", "VideoOff", "VideoSearch", "VideoSolid", "View", "ViewAll", "ViewAll2", "ViewDashboard",
                                        "ViewList", "ViewListGroup", "ViewListTree", "VisioDiagram", "VisioDocument", "VisioLogo", "VisioLogo16", "VisioLogoFill", "VisioLogoFill16",
                                        "VisioLogoInverse", "VisioLogoInverse16", "VisualBasicLanguage", "VisualsFolder", "VisualsStore", "VisualStudioLogo", "VoicemailForward",
                                        "VoicemailIRM", "VoicemailReply", "Volume0", "Volume1", "Volume2", "Volume3", "VolumeDisabled", "VSTSAltLogo1", "VSTSAltLogo2", "VSTSLogo",
                                        "Waffle", "WaffleOffice365", "WaitlistConfirm", "WaitlistConfirmMirrored", "Warning", "WebPublish", "Website", "Weights", "WifiEthernet",
                                        "WindDirection", "WindowEdit", "WindowsLogo", "Wines", "WipePhone", "WordDocument", "WordLogo", "WordLogo16", "WordLogoFill", "WordLogoFill16",
                                        "WordLogoInverse", "WordLogoInverse16", "Work", "WorkFlow", "WorkforceManagement", "WorkItem", "WorkItemBar", "WorkItemBarSolid", "WorkItemBug",
                                        "World", "WorldClock", "YammerLogo", "ZipFolder", "Zoom", "ZoomIn", "ZoomOut"
                                    ]
                                }
                            ]
                        },
                        "rel": {
                            "description": "Specifies the relationship between the current document and the linked document, used primarily for <a> element types.",
                            "anyOf": [
                                {
                                    "$ref": "#/definitions/expression"
                                },
                                {
                                    "type": "string"
                                },
                                {
                                    "enum": [
                                        "alternate", "author", "bookmark", "external", "help", "license", "next",
                                        "nofollow", "noreferrer", "noopener", "prev", "search", "tag"
                                    ]
                                }
                            ]
                        },
                        "title": {
                            "description": "Specified extra information about the element, generally shown as tooltip text on element hover.",
                            "anyOf": [
                                {
                                    "$ref": "#/definitions/expression"
                                },
                                {
                                    "type": "string"
                                },
                                {
                                    "$ref": "#/definitions/fieldValue"
                                }
                            ]
                        }
                    },
                    "patternProperties": {
                        "^aria\\-[a-z]+$": {
                            "description": "Specifies aria- attributes for the element",
                            "anyOf": [
                                {
                                    "$ref": "#/definitions/expression"
                                },
                                {
                                    "type": "string"
                                }
                            ]
                        }
                    },
                    "additionalProperties": false
                }
            },
            "required": [
                "elmType"
            ]
        },
        "expressionOrString": {
            "anyOf": [
                { "$ref": "#/definitions/expression" },
                { "type": "string" }
            ]
        },
        "styleBasic": {
            "allOf": [{ "enum": ["initial", "inherit", "unset"] }]
        },
        "styleStandard": {
            "anyOf": [
                { "$ref": "#/definitions/expressionOrString" },
                { "$ref": "#/definitions/styleBasic" }
            ]
        },
        "styleStrict": {
            "anyOf": [
                { "$ref": "#/definitions/expression" },
                { "$ref": "#/definitions/styleBasic" }
            ]
        },
        "styleBorderStyle": {
            "anyOf": [
                { "$ref": "#/definitions/styleStrict" },
                { "enum": ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset"] }
            ]
        },
        "styleBorderWidth": {
            "anyOf": [
                { "$ref": "#/definitions/styleStandard" },
                { "enum": ["medium", "thin", "thick"] }
            ]
        },
        "styleOverflow": {
            "anyOf": [
                { "$ref": "#/definitions/styleStrict" },
                { "enum": ["visible", "hidden", "scroll", "auto"] }
            ]
        },
        "styleStandardAuto": {
            "anyOf": [
                { "$ref": "#/definitions/styleStandard" },
                { "enum": ["auto"] }
            ]
        },
        "styleColor": {
            "anyOf": [
                { "$ref": "#/definitions/styleStandard" },
                {
                    "enum": [
                        "transparent", "currentColor",
                        "aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow",
                        "aliceblue", "antiquewhite", "aquamarine", "azure", "beige", "bisque", "blanchedalmond", "blueviolet", "brown", "burlywood", "cadetblue",
                        "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray",
                        "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen",
                        "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick",
                        "floralwhite", "forestgreen", "gainsboro", "ghostwhite", "gold", "goldenrod", "greenyellow", "honeydew", "hotpink", "indianred", "indigo",
                        "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow",
                        "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow",
                        "limegreen", "linen", "magenta", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue",
                        "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "oldlace",
                        "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff",
                        "peru", "pink", "plum", "powderblue", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna",
                        "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "thistle", "tomato", "turquoise", "violet", "wheat",
                        "whitesmoke", "yellowgreen", "rebeccapurple"
                    ]
                }
            ]
        },
        "fieldValue": {
            "allOf": [
                {
                    "enum": [
                        "@currentField",
                        "@currentField.title",
                        "@currentField.id",
                        "@currentField.email",
                        "@currentField.sip",
                        "@currentField.picture",
                        "@currentField.lookupValue",
                        "@currentField.lookupId",
                        "@me",
                        "@now"
                    ]
                }
            ]
        }
    },
    "$ref": "#/definitions/elm"
};


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4ZWNfc2NyaXB0LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RpbWVycy1icm93c2VyaWZ5L21haW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NoZW1hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFF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QyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5HLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1FBQ3pDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBRXZDLFFBQVEsQ0FBQyxhQUFhLENBQUMsd0NBQXdDLENBQXVCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEcsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7O0FDdEhUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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QkFBZ0IsRUFBQyxpQkFBaUI7d0JBQzlILG1CQUFtQixFQUFDLGlCQUFpQixFQUFDLGlCQUFpQixFQUFDLGNBQWMsRUFBQyxXQUFXLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxhQUFhLEVBQUMsU0FBUzt3QkFDakksV0FBVyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLGVBQWUsRUFBQyxXQUFXLEVBQUMsZUFBZSxFQUFDLGVBQWUsRUFBQyxZQUFZLEVBQUMsV0FBVzt3QkFDOUgsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxXQUFXLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxRQUFRO3dCQUM1SCxTQUFTLEVBQUMsV0FBVyxFQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxLQUFLLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLE9BQU87d0JBQ3hILFlBQVksRUFBQyxhQUFhLEVBQUMsZUFBZTtxQkFDN0M7aUJBQ0o7YUFDSjtTQUNKO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsT0FBTyxFQUFDO2dCQUNKO29CQUNJLE1BQU0sRUFBRTt3QkFDSixlQUFlO3dCQUNmLHFCQUFxQjt3QkFDckIsa0JBQWtCO3dCQUNsQixxQkFBcUI7d0JBQ3JCLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QiwyQkFBMkI7d0JBQzNCLHdCQUF3Qjt3QkFDeEIsS0FBSzt3QkFDTCxNQUFNO3FCQUNUO2lCQUNKO2FBQ0o7U0FDSjtLQUNKO0lBQ0QsTUFBTSxFQUFFLG1CQUFtQjtDQUM5QixDQUFDIiwiZmlsZSI6ImV4ZWNfc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMiwzXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIG1vbmFjbyBmcm9tICdAdGlta2VuZHJpY2svbW9uYWNvLWVkaXRvci9kaXN0L2V4dGVybmFsJztcblxuaW1wb3J0IHsgQ29sdW1uRm9ybWF0dGluZ1NjaGVtYSB9IGZyb20gXCIuL3NjaGVtYVwiO1xuXG5sZXQgZmluZENvbHVtbkRlc2lnbmVySW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgbGV0IGNvbHVtbkRlc2lnbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNwLUNvbHVtbkRlc2lnbmVyJyk7XG5cbiAgICBpZiAoIWNvbHVtbkRlc2lnbmVyKSByZXR1cm47XG5cbiAgICBjbGVhckludGVydmFsKGZpbmRDb2x1bW5EZXNpZ25lckludGVydmFsKTtcblxuICAgIGxldCBkZXNpZ25lckFyZWEgPSBjb2x1bW5EZXNpZ25lci5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICAgIGRlc2lnbmVyQXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cbiAgICBsZXQganNvbkNvZGUgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIFwiZWxtVHlwZVwiOiBcImRpdlwiLFxuICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImZvckVhY2hcIjogXCJwZXJzb25JdGVyYXRvciBpbiBAY3VycmVudEZpZWxkXCIsXG4gICAgICAgICAgICAgICAgXCJlbG1UeXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCIzMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaGVpZ2h0XCI6IFwiMzJweFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hcmdpblwiOiBcIjJweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImRpc3BsYXlcIjogXCI9aWYobG9vcEluZGV4KCdwZXJzb25JdGVyYXRvcicpID49IDMsICdub25lJywgJycpXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImVsbVR5cGVcIjogXCJpbWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0cmlidXRlc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogXCI9Jy9fbGF5b3V0cy8xNS91c2VycGhvdG8uYXNweD9zaXplPVMmYWNjb3VudG5hbWU9JyArIFskcGVyc29uSXRlcmF0b3IuZW1haWxdXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIlskcGVyc29uSXRlcmF0b3IudGl0bGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcIi01MCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi10b3BcIjogXCItNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5XCI6IFwiPWlmKGxlbmd0aChAY3VycmVudEZpZWxkKSA+IDMgJiYgbG9vcEluZGV4KCdwZXJzb25JdGVyYXRvcicpID49IDIsICdub25lJywgJycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJlbG1UeXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJpYnV0ZXNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCI9am9pbihAY3VycmVudEZpZWxkLnRpdGxlLCAnLCAnKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NcIjogXCJtcy1iZ0NvbG9yLW5ldXRyYWxMaWdodCBtcy1mb250Q29sb3ItbmV1dHJhbFNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IFwiMzBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzcGxheVwiOiBcIj1pZihsZW5ndGgoQGN1cnJlbnRGaWVsZCkgPiAzICYmIGxvb3BJbmRleCgncGVyc29uSXRlcmF0b3InKSA9PSAyLCAnJywgJ25vbmUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVsbVR5cGVcIjogXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHh0Q29udGVudFwiOiBcIj0nKycgKyB0b1N0cmluZyhsZW5ndGgoQGN1cnJlbnRGaWVsZCkgLSAoMikpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LCBudWxsLCAyKTtcblxuICAgIGxldCBqc29uMiA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgXCJlbG1UeXBlXCI6IFwiZGl2XCIsXG4gICAgICAgIFwidHh0Q29udGVudFwiOiBcIkBjdXJyZW50RmllbGRcIixcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcInRleHQtZGVjb3JhdGlvblwiOiBcIj1pZihbJENvbXBsZXRlXSwnbGluZS10aHJvdWdoJywnaW5oZXJpdCcpXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICAgICAgICAgIFwiY2xhc3NcIjogXCJtcy1mb250Q29sb3ItbmV1dHJhbFByaW1hcnlcIlxuICAgICAgICB9XG4gICAgfSwgbnVsbCwgMik7XG5cbiAgICBsZXQgbW9kZWxVcmkgPSBtb25hY28uVXJpLnBhcnNlKFwiYTovL2IvZm9vLmpzb25cIik7IC8vIGEgbWFkZSB1cCB1bmlxdWUgVVJJIGZvciBvdXIgbW9kZWxcbiAgICBsZXQgbW9kZWwgPSBtb25hY28uZWRpdG9yLmNyZWF0ZU1vZGVsKGpzb24yLCBcImpzb25cIiwgbW9kZWxVcmkpO1xuXG4gICAgbW9uYWNvLmxhbmd1YWdlcy5qc29uLmpzb25EZWZhdWx0cy5zZXREaWFnbm9zdGljc09wdGlvbnMoe1xuICAgICAgICB2YWxpZGF0ZTogdHJ1ZSxcbiAgICAgICAgc2NoZW1hczogW3tcbiAgICAgICAgICAgIHVyaTogXCJodHRwOi8vbXlzZXJ2ZXIvZm9vLXNjaGVtYS5qc29uXCIsIC8vIGlkIG9mIHRoZSBmaXJzdCBzY2hlbWFcbiAgICAgICAgICAgIGZpbGVNYXRjaDogW21vZGVsVXJpLnRvU3RyaW5nKCldLCAvLyBhc3NvY2lhdGUgd2l0aCBvdXIgbW9kZWxcbiAgICAgICAgICAgIHNjaGVtYTogQ29sdW1uRm9ybWF0dGluZ1NjaGVtYVxuICAgICAgICB9XVxuICAgIH0pO1xuXG4gICAgbGV0IGVkaXRvciA9IG1vbmFjby5lZGl0b3IuY3JlYXRlKGRlc2lnbmVyQXJlYS5wYXJlbnRFbGVtZW50LCB7XG4gICAgICAgIG1vZGVsOiBtb2RlbCxcbiAgICAgICAgbGFuZ3VhZ2U6ICdqc29uJyxcbiAgICAgICAgdGhlbWU6ICd2cycsXG4gICAgICAgIGZvbGRpbmc6IHRydWUsXG4gICAgICAgIHJlbmRlckluZGVudEd1aWRlczogdHJ1ZSxcbiAgICAgICAgYXV0b21hdGljTGF5b3V0OiBmYWxzZVxuICAgIH0pO1xuXG4gICAgZWRpdG9yLmdldE1vZGVsKCkub25EaWRDaGFuZ2VDb250ZW50KGUgPT4ge1xuICAgICAgICBkZXNpZ25lckFyZWEudmFsdWUgPSBlZGl0b3IuZ2V0TW9kZWwoKS5nZXRWYWx1ZSgpO1xuICAgICAgICBsZXQgZXZlbnQgPSBuZXcgRXZlbnQoJ2lucHV0JywgeyBidWJibGVzOiB0cnVlIH0pO1xuICAgICAgICBkZXNpZ25lckFyZWEuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIFxuICAgICAgICAvLyBoYWNrXG4gICAgICAgIGxldCByZWFjdEhhbmRsZXJzID0gT2JqZWN0LmtleXMoZGVzaWduZXJBcmVhKS5maWx0ZXIoayA9PiBrLnN0YXJ0c1dpdGgoJ19fcmVhY3RFdmVudEhhbmRsZXJzJykpWzBdO1xuXG4gICAgICAgIGRlc2lnbmVyQXJlYVtyZWFjdEhhbmRsZXJzXVtcIm9uRm9jdXNcIl0oKTtcbiAgICAgICAgZGVzaWduZXJBcmVhW3JlYWN0SGFuZGxlcnNdW1wib25CbHVyXCJdKCk7XG5cbiAgICAgICAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcC1Db2x1bW5EZXNpZ25lci1mb290ZXJCdXR0b24gYnV0dG9uJykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmNsaWNrKCk7XG4gICAgfSk7XG4gICAgXG59LCAxMDAwKTsiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwidmFyIHNjb3BlID0gKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsKSB8fFxuICAgICAgICAgICAgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYpIHx8XG4gICAgICAgICAgICB3aW5kb3c7XG52YXIgYXBwbHkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHk7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJUaW1lb3V0KTtcbn07XG5leHBvcnRzLnNldEludGVydmFsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldEludGVydmFsLCBzY29wZSwgYXJndW1lbnRzKSwgY2xlYXJJbnRlcnZhbCk7XG59O1xuZXhwb3J0cy5jbGVhclRpbWVvdXQgPVxuZXhwb3J0cy5jbGVhckludGVydmFsID0gZnVuY3Rpb24odGltZW91dCkge1xuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXQuY2xvc2UoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbChzY29wZSwgdGhpcy5faWQpO1xufTtcblxuLy8gRG9lcyBub3Qgc3RhcnQgdGhlIHRpbWUsIGp1c3Qgc2V0cyB1cCB0aGUgbWVtYmVycyBuZWVkZWQuXG5leHBvcnRzLmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0sIG1zZWNzKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSBtc2Vjcztcbn07XG5cbmV4cG9ydHMudW5lbnJvbGwgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcbiAgaXRlbS5faWRsZVRpbWVvdXQgPSAtMTtcbn07XG5cbmV4cG9ydHMuX3VucmVmQWN0aXZlID0gZXhwb3J0cy5hY3RpdmUgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGNsZWFyVGltZW91dChpdGVtLl9pZGxlVGltZW91dElkKTtcblxuICB2YXIgbXNlY3MgPSBpdGVtLl9pZGxlVGltZW91dDtcbiAgaWYgKG1zZWNzID49IDApIHtcbiAgICBpdGVtLl9pZGxlVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICBpZiAoaXRlbS5fb25UaW1lb3V0KVxuICAgICAgICBpdGVtLl9vblRpbWVvdXQoKTtcbiAgICB9LCBtc2Vjcyk7XG4gIH1cbn07XG5cbi8vIHNldGltbWVkaWF0ZSBhdHRhY2hlcyBpdHNlbGYgdG8gdGhlIGdsb2JhbCBvYmplY3RcbnJlcXVpcmUoXCJzZXRpbW1lZGlhdGVcIik7XG4vLyBPbiBzb21lIGV4b3RpYyBlbnZpcm9ubWVudHMsIGl0J3Mgbm90IGNsZWFyIHdoaWNoIG9iamVjdCBgc2V0aW1tZWRpYXRlYCB3YXNcbi8vIGFibGUgdG8gaW5zdGFsbCBvbnRvLiAgU2VhcmNoIGVhY2ggcG9zc2liaWxpdHkgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlXG4vLyBgc2V0aW1tZWRpYXRlYCBsaWJyYXJ5LlxuZXhwb3J0cy5zZXRJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5zZXRJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICh0aGlzICYmIHRoaXMuc2V0SW1tZWRpYXRlKTtcbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwuY2xlYXJJbW1lZGlhdGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5jbGVhckltbWVkaWF0ZSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSwgZXZhbCkoXCJ0aGlzXCIpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIHVuZGVmaW5lZCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKGdsb2JhbC5zZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXh0SGFuZGxlID0gMTsgLy8gU3BlYyBzYXlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG4gICAgdmFyIHRhc2tzQnlIYW5kbGUgPSB7fTtcbiAgICB2YXIgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgdmFyIGRvYyA9IGdsb2JhbC5kb2N1bWVudDtcbiAgICB2YXIgcmVnaXN0ZXJJbW1lZGlhdGU7XG5cbiAgICBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoY2FsbGJhY2spIHtcbiAgICAgIC8vIENhbGxiYWNrIGNhbiBlaXRoZXIgYmUgYSBmdW5jdGlvbiBvciBhIHN0cmluZ1xuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiXCIgKyBjYWxsYmFjayk7XG4gICAgICB9XG4gICAgICAvLyBDb3B5IGZ1bmN0aW9uIGFyZ3VtZW50c1xuICAgICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpICsgMV07XG4gICAgICB9XG4gICAgICAvLyBTdG9yZSBhbmQgcmVnaXN0ZXIgdGhlIHRhc2tcbiAgICAgIHZhciB0YXNrID0geyBjYWxsYmFjazogY2FsbGJhY2ssIGFyZ3M6IGFyZ3MgfTtcbiAgICAgIHRhc2tzQnlIYW5kbGVbbmV4dEhhbmRsZV0gPSB0YXNrO1xuICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUobmV4dEhhbmRsZSk7XG4gICAgICByZXR1cm4gbmV4dEhhbmRsZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGhhbmRsZSkge1xuICAgICAgICBkZWxldGUgdGFza3NCeUhhbmRsZVtoYW5kbGVdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bih0YXNrKSB7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IHRhc2suY2FsbGJhY2s7XG4gICAgICAgIHZhciBhcmdzID0gdGFzay5hcmdzO1xuICAgICAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgY2FsbGJhY2soYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHVuZGVmaW5lZCwgYXJncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJ1bklmUHJlc2VudChoYW5kbGUpIHtcbiAgICAgICAgLy8gRnJvbSB0aGUgc3BlYzogXCJXYWl0IHVudGlsIGFueSBpbnZvY2F0aW9ucyBvZiB0aGlzIGFsZ29yaXRobSBzdGFydGVkIGJlZm9yZSB0aGlzIG9uZSBoYXZlIGNvbXBsZXRlZC5cIlxuICAgICAgICAvLyBTbyBpZiB3ZSdyZSBjdXJyZW50bHkgcnVubmluZyBhIHRhc2ssIHdlJ2xsIG5lZWQgdG8gZGVsYXkgdGhpcyBpbnZvY2F0aW9uLlxuICAgICAgICBpZiAoY3VycmVudGx5UnVubmluZ0FUYXNrKSB7XG4gICAgICAgICAgICAvLyBEZWxheSBieSBkb2luZyBhIHNldFRpbWVvdXQuIHNldEltbWVkaWF0ZSB3YXMgdHJpZWQgaW5zdGVhZCwgYnV0IGluIEZpcmVmb3ggNyBpdCBnZW5lcmF0ZWQgYVxuICAgICAgICAgICAgLy8gXCJ0b28gbXVjaCByZWN1cnNpb25cIiBlcnJvci5cbiAgICAgICAgICAgIHNldFRpbWVvdXQocnVuSWZQcmVzZW50LCAwLCBoYW5kbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhc2sgPSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKHRhc2spO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW1tZWRpYXRlKGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRseVJ1bm5pbmdBVGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJ1bklmUHJlc2VudChoYW5kbGUpOyB9KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5Vc2VQb3N0TWVzc2FnZSgpIHtcbiAgICAgICAgLy8gVGhlIHRlc3QgYWdhaW5zdCBgaW1wb3J0U2NyaXB0c2AgcHJldmVudHMgdGhpcyBpbXBsZW1lbnRhdGlvbiBmcm9tIGJlaW5nIGluc3RhbGxlZCBpbnNpZGUgYSB3ZWIgd29ya2VyLFxuICAgICAgICAvLyB3aGVyZSBgZ2xvYmFsLnBvc3RNZXNzYWdlYCBtZWFucyBzb21ldGhpbmcgY29tcGxldGVseSBkaWZmZXJlbnQgYW5kIGNhbid0IGJlIHVzZWQgZm9yIHRoaXMgcHVycG9zZS5cbiAgICAgICAgaWYgKGdsb2JhbC5wb3N0TWVzc2FnZSAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICAgICAgICAgIHZhciBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBvbGRPbk1lc3NhZ2UgPSBnbG9iYWwub25tZXNzYWdlO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoXCJcIiwgXCIqXCIpO1xuICAgICAgICAgICAgZ2xvYmFsLm9ubWVzc2FnZSA9IG9sZE9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZUlzQXN5bmNocm9ub3VzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIC8vIEluc3RhbGxzIGFuIGV2ZW50IGhhbmRsZXIgb24gYGdsb2JhbGAgZm9yIHRoZSBgbWVzc2FnZWAgZXZlbnQ6IHNlZVxuICAgICAgICAvLyAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cucG9zdE1lc3NhZ2VcbiAgICAgICAgLy8gKiBodHRwOi8vd3d3LndoYXR3Zy5vcmcvc3BlY3Mvd2ViLWFwcHMvY3VycmVudC13b3JrL211bHRpcGFnZS9jb21tcy5odG1sI2Nyb3NzRG9jdW1lbnRNZXNzYWdlc1xuXG4gICAgICAgIHZhciBtZXNzYWdlUHJlZml4ID0gXCJzZXRJbW1lZGlhdGUkXCIgKyBNYXRoLnJhbmRvbSgpICsgXCIkXCI7XG4gICAgICAgIHZhciBvbkdsb2JhbE1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gZ2xvYmFsICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIGV2ZW50LmRhdGEgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4T2YobWVzc2FnZVByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBydW5JZlByZXNlbnQoK2V2ZW50LmRhdGEuc2xpY2UobWVzc2FnZVByZWZpeC5sZW5ndGgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UsIGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudChcIm9ubWVzc2FnZVwiLCBvbkdsb2JhbE1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShtZXNzYWdlUHJlZml4ICsgaGFuZGxlLCBcIipcIik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGUgPSBldmVudC5kYXRhO1xuICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICB2YXIgaHRtbCA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgYSA8c2NyaXB0PiBlbGVtZW50OyBpdHMgcmVhZHlzdGF0ZWNoYW5nZSBldmVudCB3aWxsIGJlIGZpcmVkIGFzeW5jaHJvbm91c2x5IG9uY2UgaXQgaXMgaW5zZXJ0ZWRcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGRvY3VtZW50LiBEbyBzbywgdGh1cyBxdWV1aW5nIHVwIHRoZSB0YXNrLiBSZW1lbWJlciB0byBjbGVhbiB1cCBvbmNlIGl0J3MgYmVlbiBjYWxsZWQuXG4gICAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudChoYW5kbGUpO1xuICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCkge1xuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gSWYgc3VwcG9ydGVkLCB3ZSBzaG91bGQgYXR0YWNoIHRvIHRoZSBwcm90b3R5cGUgb2YgZ2xvYmFsLCBzaW5jZSB0aGF0IGlzIHdoZXJlIHNldFRpbWVvdXQgZXQgYWwuIGxpdmUuXG4gICAgdmFyIGF0dGFjaFRvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihnbG9iYWwpO1xuICAgIGF0dGFjaFRvID0gYXR0YWNoVG8gJiYgYXR0YWNoVG8uc2V0VGltZW91dCA/IGF0dGFjaFRvIDogZ2xvYmFsO1xuXG4gICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBlLmcuIGJyb3dzZXJpZnkgZW52aXJvbm1lbnRzLlxuICAgIGlmICh7fS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gXCJbb2JqZWN0IHByb2Nlc3NdXCIpIHtcbiAgICAgICAgLy8gRm9yIE5vZGUuanMgYmVmb3JlIDAuOVxuICAgICAgICBpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChjYW5Vc2VQb3N0TWVzc2FnZSgpKSB7XG4gICAgICAgIC8vIEZvciBub24tSUUxMCBtb2Rlcm4gYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFBvc3RNZXNzYWdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgIC8vIEZvciB3ZWIgd29ya2Vycywgd2hlcmUgc3VwcG9ydGVkXG4gICAgICAgIGluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGRvYyAmJiBcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiIGluIGRvYy5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpKSB7XG4gICAgICAgIC8vIEZvciBJRSA24oCTOFxuICAgICAgICBpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3Igb2xkZXIgYnJvd3NlcnNcbiAgICAgICAgaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbigpO1xuICAgIH1cblxuICAgIGF0dGFjaFRvLnNldEltbWVkaWF0ZSA9IHNldEltbWVkaWF0ZTtcbiAgICBhdHRhY2hUby5jbGVhckltbWVkaWF0ZSA9IGNsZWFySW1tZWRpYXRlO1xufSh0eXBlb2Ygc2VsZiA9PT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBnbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzIDogZ2xvYmFsIDogc2VsZikpO1xuIiwiZXhwb3J0IGNvbnN0IENvbHVtbkZvcm1hdHRpbmdTY2hlbWFVUkk6IHN0cmluZyA9IFwiaHR0cDovL2NvbHVtbmZvcm1hdHRpbmcuc2hhcmVwb2ludHBucC5jb20vY29sdW1uRm9ybWF0dGluZ1NjaGVtYS5qc29uXCI7XG5cbmV4cG9ydCBjb25zdCBDb2x1bW5Gb3JtYXR0aW5nU2NoZW1hID0ge1xuICAgIFwiJHNjaGVtYVwiOiBcImh0dHA6Ly9qc29uLXNjaGVtYS5vcmcvZHJhZnQtMDQvc2NoZW1hI1wiLFxuICAgIFwidGl0bGVcIjogXCJDdXN0b210Rm9ybWF0dGVyIEpTT05cIixcbiAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ3VzdG9tRm9ybWF0dGVyIHJlbmRlcmVyIGZvciBTaGFyZVBvaW50IGxpc3RzXCIsXG4gICAgXCJkZWZpbml0aW9uc1wiOiB7XG4gICAgICAgIFwiY3VzdG9tQWN0aW9uXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgICAgICAgIFwidGl0bGVcIjogXCJBY3Rpb24gb2JqZWN0XCIsXG4gICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQWN0aW9uIG9iamVjdCBmb3IgYSBjdXN0b20gYWN0aW9uIGJ1dHRvblwiLFxuICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcImFjdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJOYW1lIG9mIHRoZSBhY3Rpb24gdGhhdCB0aGUgY3VzdG9tIGFjdGlvbiBidXR0b24gd2lsbCBleGVjdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRlZmF1bHRDbGlja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJleGVjdXRlRmxvd1wiXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiYWN0aW9uUGFyYW1zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlBhcmFtZXRlcnMgZm9yIHRoZSBjdXN0b20gYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXhwcmVzc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZmllbGRWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZXhwcmVzc2lvblwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2UsXG4gICAgICAgICAgICBcInRpdGxlXCI6IFwiRXhwcmVzc2lvbiBvYmplY3QgSlNPTlwiLFxuICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkV4cHJlc3Npb24gb2JqZWN0IGZvciBDdXN0b21Gb3JtYXR0ZXIgSlNPTlwiLFxuICAgICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgICAgICBcIm9wZXJhdG9yXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIk9wZXJhdG9yIGZvciB0aGlzIGV4cHJlc3Npb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiK1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCItXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIipcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiL1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCI9PVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIhPVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCI+XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPj1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPD1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwifHxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiJiZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiP1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCI6XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRvU3RyaW5nKClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiTnVtYmVyKClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRGF0ZSgpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzaW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9Mb2NhbGVTdHJpbmcoKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0xvY2FsZURhdGVTdHJpbmcoKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0b0xvY2FsZVRpbWVTdHJpbmcoKVwiXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwib3BlcmFuZHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiT3BlcmFuZHMgZm9yIHRoaXMgZXhwcmVzc2lvblwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgICAgICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4cHJlc3Npb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2ZpZWxkVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInJlcXVpcmVkXCI6IFtcbiAgICAgICAgICAgICAgICBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgXCJvcGVyYW5kc1wiXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiZWxtXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZSxcbiAgICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgXCIkc2NoZW1hXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcInNjaGVtYSBvZiB0aGUgSlNPTlwiLFxuICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJkZWJ1Z01vZGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSXMgdGhpcyBKU09OIGluIGRlYnVnIG1vZGU/XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJlbG1UeXBlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlRoZSB0eXBlIG9mIGVsZW1lbnQgdG8gY3JlYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImltZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGF0aFwiXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQ2hpbGRyZW4gZWxlbWVudHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpdGVtc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZWxtXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJ0eHRDb250ZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leHByZXNzaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9maWVsZFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgdGhlIHN0eWxlIG9iamVjdCBmb3IgdGhpcyBlbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGlnbi1pdGVtc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyB0aGUgZGVmYXVsdCBhbGlnbm1lbnQgZm9yIGl0ZW1zIGluc2lkZSBhIGZsZXhpYmxlIGNvbnRhaW5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwic3RyZXRjaFwiLFwiY2VudGVyXCIsXCJmbGV4LXN0YXJ0XCIsXCJmbGV4LWVuZFwiLFwiYmFzZWxpbmVcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiBhbiBlbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOiBbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlQ29sb3JcIn1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWltYWdlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyBvbmUgb3IgbW9yZSBiYWNrZ3JvdW5kIGltYWdlcyBmb3IgYW4gZWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJub25lXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyBhbGwgdGhlIGJvcmRlciBwcm9wZXJ0aWVzIGluIG9uZSBkZWNsYXJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1ib3R0b21cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIGFsbCB0aGUgYm90dG9tIGJvcmRlciBwcm9wZXJ0aWVzIGluIG9uZSBkZWNsYXJhdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1ib3R0b20tY29sb3JcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHRoZSBjb2xvciBvZiBhbiBlbGVtZW50J3MgYm90dG9tIGJvcmRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZUNvbG9yXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJEZWZpbmVzIHRoZSBzaGFwZSBvZiB0aGUgYm9yZGVyIG9mIHRoZSBib3R0b20tbGVmdCBjb3JuZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZFwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBib3JkZXIgb2YgdGhlIGJvdHRvbS1yaWdodCBjb3JuZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZFwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItYm90dG9tLXN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyB0aGUgc3R5bGUgb2YgYW4gZWxlbWVudCdzIGJvdHRvbSBib3JkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVCb3JkZXJTdHlsZVwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItYm90dG9tLXdpZHRoXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyB0aGUgd2lkdGggb2YgYW4gZWxlbWVudCdzIGJvdHRvbSBib3JkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVCb3JkZXJXaWR0aFwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sbGFwc2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHdoZXRoZXIgdGhlIHRhYmxlIGJvcmRlcnMgYXJlIGNvbGxhcHNlZCBpbnRvIGEgc2luZ2xlIGJvcmRlciBvciBkZXRhY2hlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwic2VwYXJhdGVcIixcImNvbGxhcHNlXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyB0aGUgY29sb3Igb2YgYW4gZWxlbWVudCdzIGZvdXIgYm9yZGVyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZUNvbG9yXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1sZWZ0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyBhbGwgdGhlIGxlZnQgYm9yZGVyIHByb3BlcnRpZXMgaW4gb25lIGRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOiBbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRcIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWxlZnQtY29sb3JcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHRoZSBjb2xvciBvZiBhbiBlbGVtZW50J3MgbGVmdCBib3JkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVDb2xvclwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItbGVmdC1zdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgdGhlIHN0eWxlIG9mIGFuIGVsZW1lbnQncyBsZWZ0IGJvcmRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZUJvcmRlclN0eWxlXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1sZWZ0LXdpZHRoXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyB0aGUgd2lkdGggb2YgYW4gZWxlbWVudCdzIGxlZnQgYm9yZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOiBbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlQm9yZGVyV2lkdGhcIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXJhZGl1c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBib3JkZXIgb2YgYWxsIDQgY29ybmVyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1yaWdodFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgYWxsIHRoZSByaWdodCBib3JkZXIgcHJvcGVydGllcyBpbiBvbmUgZGVjbGFyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZFwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItcmlnaHQtY29sb3JcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHRoZSBjb2xvciBvZiBhbiBlbGVtZW50J3MgcmlnaHQgYm9yZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOiBbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlQ29sb3JcIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXJpZ2h0LXN0eWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyB0aGUgc3R5bGUgb2YgYW4gZWxlbWVudCdzIHJpZ2h0IGJvcmRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZUJvcmRlclN0eWxlXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1yaWdodC13aWR0aFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgdGhlIHdpZHRoIG9mIGFuIGVsZW1lbnQncyByaWdodCBib3JkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVCb3JkZXJXaWR0aFwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItc3BhY2luZ1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGJvcmRlcnMgb2YgYWRqYWNlbnQgY2VsbHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVCb3JkZXJTdHlsZVwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItc3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHRoZSBzdHlsZSBvZiBhbiBlbGVtZW50J3MgZm91ciBib3JkZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOiBbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlQm9yZGVyU3R5bGVcIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXRvcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgYWxsIHRoZSB0b3AgYm9yZGVyIHByb3BlcnRpZXMgaW4gb25lIGRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOiBbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRcIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXRvcC1jb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgdGhlIGNvbG9yIG9mIGFuIGVsZW1lbnQncyB0b3AgYm9yZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOiBbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlQ29sb3JcIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXRvcC1sZWZ0LXJhZGl1c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRlZmluZXMgdGhlIHNoYXBlIG9mIHRoZSBib3JkZXIgb2YgdGhlIHRvcC1sZWZ0IGNvcm5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci10b3AtcmlnaHQtcmFkaXVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVmaW5lcyB0aGUgc2hhcGUgb2YgdGhlIGJvcmRlciBvZiB0aGUgdG9wLXJpZ2h0IGNvcm5lclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci10b3Atc3R5bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHRoZSBzdHlsZSBvZiBhbiBlbGVtZW50J3MgdG9wIGJvcmRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZUJvcmRlclN0eWxlXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci10b3Atd2lkdGhcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHRoZSB3aWR0aCBvZiBhbiBlbGVtZW50J3MgdG9wIGJvcmRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZUJvcmRlcldpZHRoXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci13aWR0aFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgdGhlIHdpZHRoIG9mIGFuIGVsZW1lbnQncyBmb3VyIGJvcmRlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVCb3JkZXJXaWR0aFwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJGb3IgYWJzb2x1dGVseSBwb3NpdGlvbmVkIGVsZW1lbnRzLCBzZXRzIHRoZSBib3R0b20gZWRnZSBvZiB0aGUgZWxlbWVudCB0byBhIHVuaXQgYWJvdmUvYmVsb3cgdGhlIGJvdHRvbSBlZGdlIG9mIGl0cyBuZWFyZXN0IHBvc2l0aW9uZWQgYW5jZXN0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6W3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkQXV0b1wiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3gtYWxpZ25cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgaG93IGFuIGVsZW1lbnQgYWxpZ25zIGl0cyBjb250ZW50cyBhY3Jvc3MgaXRzIGxheW91dCBpbiBhIHBlcnBlbmRpY3VsYXIgZGlyZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJzdGFydFwiLFwiY2VudGVyXCIsXCJlbmRcIixcImJhc2VsaW5lXCIsXCJzdHJldGNoXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm94LWRlY29yYXRpb24tYnJlYWtcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgaG93IHRoZSBiYWNrZ3JvdW5kLCBwYWRkaW5nLCBib3JkZXIsIGJvcmRlci1pbWFnZSwgYm94LXNoYWRvdywgbWFyZ2luLCBhbmQgY2xpcC1wYXRoIG9mIGFuIGVsZW1lbnQgYXJlIGFwcGxpZWQgd2hlbiB0aGUgYm94IGZvciB0aGUgZWxlbWVudCBpcyBmcmFnbWVudGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJzbGljZVwiLFwiY2xvbmVcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3gtZGlyZWN0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHdoZXRoZXIgYSBib3ggbGF5cyBvdXQgaXRzIGNvbnRlbnRzIG5vcm1hbGx5IChmcm9tIHRoZSB0b3Agb3IgbGVmdCBlZGdlKSwgb3IgaW4gcmV2ZXJzZSAoZnJvbSB0aGUgYm90dG9tIG9yIHJpZ2h0IGVkZ2UpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJub3JtYWxcIixcInJldmVyc2VcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3gtZmxleFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyBob3cgYSBmbGV4Ym94IGdyb3dzIHRvIGZpbGwgdGhlIGJveCB0aGF0IGNvbnRhaW5zIGl0LCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBjb250YWluaW5nIGJveCdzIGxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWluaW11bVwiOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3gtZmxleC1ncm91cFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFzc2lnbnMgdGhlIGZsZXhib3gncyBjaGlsZCBlbGVtZW50cyB0byBhIGZsZXggZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50ZWdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5pbXVtXCI6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RyaWN0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJveC1saW5lc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRldGVybWluZXMgd2hldGhlciB0aGUgYm94IG1heSBoYXZlIGEgc2luZ2xlIG9yIG11bHRpcGxlIGxpbmVzIChyb3dzIGZvciBob3Jpem9udGFsbHkgb3JpZW50ZWQgYm94ZXMsIGNvbHVtbnMgZm9yIHZlcnRpY2FsbHkgb3JpZW50ZWQgYm94ZXMpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJzaW5nbGVcIixcIm11bHRpcGxlXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm94LW9yZGluYWwtZ3JvdXBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBc3NpZ25zIHRoZSBmbGV4Ym94J3MgY2hpbGQgZWxlbWVudHMgdG8gYW4gb3JkaW5hbCBncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnRlZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbmltdW1cIjogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYm94LW9yaWVudFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyB3aGV0aGVyIGFuIGVsZW1lbnQgbGF5cyBvdXQgaXRzIGNvbnRlbnRzIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJob3Jpem9udGFsXCIsXCJ2ZXJ0aWNhbFwiLFwiaW5saW5lLWF4aXNcIixcImJsb2NrLWF4aXNcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3gtcGFja1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyBob3cgYSBmbGV4Ym94IHBhY2tzIGl0cyBjb250ZW50cyBpbiB0aGUgZGlyZWN0aW9uIG9mIGl0cyBsYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RyaWN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcInN0YXJ0XCIsXCJjZW50ZXJcIixcImVuZFwiLFwianVzdGlmeVwiIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJveC1zaGFkb3dcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBdHRhY2hlcyBvbmUgb3IgbW9yZSBzaGFkb3dzIHRvIGFuIGVsZW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwibm9uZVwiLFwiaW5zZXRcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJib3gtc2l6aW5nXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiVGVsbHMgdGhlIGJyb3dzZXIgd2hhdCB0aGUgc2l6aW5nIHByb3BlcnRpZXMgKHdpZHRoIGFuZCBoZWlnaHQpIHNob3VsZCBpbmNsdWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJjb250ZW50LWJveFwiLFwiYm9yZGVyLWJveFwiIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNhcHRpb24tc2lkZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyB0aGUgcGxhY2VtZW50IG9mIGEgdGFibGUgY2FwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwidG9wXCIsXCJib3R0b21cIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyBvbiB3aGljaCBzaWRlcyBvZiBhbiBlbGVtZW50IGZsb2F0aW5nIGVsZW1lbnRzIGFyZSBub3QgYWxsb3dlZCB0byBmbG9hdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwibm9uZVwiLFwibGVmdFwiLFwicmlnaHRcIixcImJvdGhcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGlwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQWxsb3dzIHRoZSBzcGVjaWZpY2F0aW9uIG9mIGEgcmVjdGFuZ2xlIHRvIGNsaXAgYW4gYWJzb2x1dGVseSBwb3NpdGlvbmVkIGVsZW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6W3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkQXV0b1wiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyB0aGUgY29sb3Igb2YgdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjpbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlQ29sb3JcIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sdW1uLWNvdW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHRoZSBudW1iZXIgb2YgY29sdW1ucyBhbiBlbGVtZW50IHNob3VsZCBiZSBkaXZpZGVkIGludG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW50ZWdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtaW5pbXVtXCI6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RyaWN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcIm5vbmVcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW4tZmlsbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyBob3cgdG8gZmlsbCBjb2x1bW5zLCBiYWxhbmNlZCBvciBub3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RyaWN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcImJhbGFuY2VcIixcImF1dG9cIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW4tZ2FwXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHRoZSBnYXAgYmV0d2VlbiBjb2x1bW5zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcIm5vcm1hbFwiIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbHVtbi1ydWxlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyBhbGwgdGhlIGNvbHVtbi1ydWxlIHByb3BlcnRpZXMgaW4gb25lIGRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOiBbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRcIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY29sdW1uLXJ1bGUtY29sb3JcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHRoZSBjb2xvciBvZiB0aGUgcnVsZSBiZXR3ZWVuIGNvbHVtbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVDb2xvclwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW4tcnVsZS1zdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgdGhlIHN0eWxlIG9mIHRoZSBydWxlIGJldHdlZW4gY29sdW1uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZUJvcmRlclN0eWxlXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbHVtbi1ydWxlLXdpZHRoXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyB0aGUgd2lkdGggb2YgdGhlIHJ1bGUgYmV0d2VlbiBjb2x1bW5zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcIm1lZGl1bVwiLFwidGhpblwiLFwidGhpY2tcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW4tc3BhblwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyBpZiBhbiBlbGVtZW50IHNob3VsZCBzcGFuIGFjcm9zcyBhbGwgY29sdW1ucyBvciBub3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RyaWN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcIm5vbmVcIixcImFsbFwiIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbHVtbi13aWR0aFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyBhIHN1Z2dlc3RlZCwgb3B0aW1hbCB3aWR0aCBmb3IgdGhlIGNvbHVtbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6W3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkQXV0b1wiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2x1bW5zXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyB0aGUgY29sdW1uLXdpZHRoIGFuZCBjb2x1bW4tY291bnQgaW4gb25lIGRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOlt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZEF1dG9cIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHRoZSB0ZXh0IGRpcmVjdGlvbi93cml0aW5nIGRpcmVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwibHRyXCIsXCJydGxcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXNwbGF5XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHRoZSB0eXBlIG9mIGJveCB1c2VkIGZvciBhbiBlbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leHByZXNzaW9uT3JTdHJpbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbmxpbmVcIixcImJsb2NrXCIsXCJmbGV4XCIsXCJpbmxpbmUtYmxvY2tcIixcImlubGluZS1mbGV4XCIsXCJpbmxpbmUtdGFibGVcIixcImxpc3QtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJydW4taW5cIixcInRhYmxlXCIsXCJ0YWJsZS1jYXB0aW9uXCIsXCJ0YWJsZS1jb2x1bW4tZ3JvdXBcIixcInRhYmxlLWhlYWRlci1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZS1yb3ctZ3JvdXBcIixcInRhYmxlLWNlbGxcIixcInRhYmxlLWNvbHVtblwiLFwidGFibGUtcm93XCIsXCJub25lXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZW1wdHktY2VsbHNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHdoZXRoZXIgb3Igbm90IHRvIGRpc3BsYXkgYm9yZGVycyBhbmQgYmFja2dyb3VuZCBvbiBlbXB0eSBjZWxscyBpbiBhIHRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJzaG93XCIsXCJoaWRlXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxvYXRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgaWYgYSBhbiBlbGVtZW50IHNob3VsZCBmbG9hdCBvciBub3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RyaWN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcIm5vbmVcIixcImxlZnRcIixcInJpZ2h0XCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgYWxsIHRoZSBmb250IHByb3BlcnRpZXMgaW4gb25lIGRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcImNhcHRpb25cIixcImljb25cIixcIm1lbnVcIixcIm1lc3NhZ2UtYm94XCIsXCJzbWFsbC1jYXB0aW9uXCIsXCJzdGF0dXMtYmFyXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1mYW1pbHlcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgdGhlIGZvbnQgZm9yIGFuIGVsZW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZFwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHRoZSBzaXplIG9mIGEgZm9udFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJtZWRpdW1cIixcInh4LXNtYWxsXCIsXCJ4LXNtYWxsXCIsXCJzbWFsbFwiLFwibGFyZ2VcIixcIngtbGFyZ2VcIixcInh4LWxhcmdlXCIsXCJzbWFsbGVyXCIsXCJsYXJnZXJcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemUtYWRqdXN0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiR2l2ZXMgYmV0dGVyIGNvbnRyb2wgb2YgdGhlIGZvbnQgc2l6ZSB3aGVuIHRoZSBmaXJzdCBzZWxlY3RlZCBmb250IGlzIG5vdCBhdmFpbGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwibm9uZVwiIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc3RyZXRjaFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFsbG93cyB0ZXh0IHRvIGJlIHdpZGVyIG9yIG5hcnJvd2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidWx0cmEtY29uZGVuc2VkXCIsXCJleHRyYS1jb25kZW5zZWRcIixcImNvbmRlbnNlZFwiLFwic2VtaS1jb25kZW5zZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm9ybWFsXCIsXCJzZW1pLWV4cGFuZGVkXCIsXCJleHBhbmRlZFwiLFwiZXh0cmEtZXhwYW5kZWRcIixcInVsdHJhLWV4cGFuZGVkXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC12YXJpYW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHdoZXRoZXIgb3Igbm90IHRleHQgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhIHNtYWxsLWNhcHMgZm9udFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwibm9ybWFsXCIsXCJzbWFsbC1jYXBzXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIGhvdyB0aGljayBvciB0aGluIGNoYXJhY3RlcnMgaW4gdGV4dCBzaG91bGQgYmUgZGlzcGxheWVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcIm5vcm1hbFwiLFwiYm9sZFwiLFwiYm9sZGVyXCIsXCJsaWdodGVyXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmlsbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkRlZmluZXMgdGhlIGNvbG9yIG9mIHRoZSBpbnRlcmlvciBvZiB0aGUgZ2l2ZW4gZ3JhcGhpY2FsIGVsZW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVDb2xvclwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJoZWlnaHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHRoZSBoZWlnaHQgb2YgYW4gZWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjpbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRBdXRvXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImdyaWQtY29sdW1uc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyB0aGUgd2lkdGggb2YgZWFjaCBjb2x1bW4gaW4gYSBncmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcIm5vbmVcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJncmlkLXJvd3NcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgdGhlIGhlaWdodCBvZiBlYWNoIHJvdyBpbiBhIGdyaWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwibm9uZVwiIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhhbmdpbmctcHVuY3R1YXRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgd2hldGhlciBhIHB1bmN0dWF0aW9uIG1hcmsgbWF5IGJlIHBsYWNlZCBvdXRzaWRlIHRoZSBsaW5lIGJveCBhdCB0aGUgc3RhcnQgb3IgYXQgdGhlIGVuZCBvZiBhIGZ1bGwgbGluZSBvZiB0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJub25lXCIsXCJmaXJzdFwiLFwibGFzdFwiLFwiYWxsb3ctZW5kXCIsXCJmb3JjZS1lbmRcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRm9yIGFic29sdXRlbHkgcG9zaXRpb25lZCBlbGVtZW50cywgc2V0cyB0aGUgbGVmdCBlZGdlIG9mIGFuIGVsZW1lbnQgdG8gYSB1bml0IHRvIHRoZSBsZWZ0L3JpZ2h0IG9mIHRoZSBsZWZ0IGVkZ2Ugb2YgaXRzIG5lYXJlc3QgcG9zaXRpb25lZCBhbmNlc3RvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjpbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRBdXRvXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxldHRlci1zcGFjaW5nXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiSW5jcmVhc2VzIG9yIGRlY3JlYXNlcyB0aGUgc3BhY2UgYmV0d2VlbiBjaGFyYWN0ZXJzIGluIHRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwibm9ybWFsXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGluZS1oZWlnaHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJbmNyZWFzZXMgb3IgZGVjcmVhc2VzIHRoZSBzcGFjZSBiZXR3ZWVuIGNoYXJhY3RlcnMgaW4gdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbmltdW1cIjogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJub3JtYWxcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW5cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIGFsbCB0aGUgbWFyZ2luIHByb3BlcnRpZXMgaW4gb25lIGRlY2xhcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOlt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZEF1dG9cIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgdGhlIGJvdHRvbSBtYXJnaW4gb2YgYW4gZWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjpbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRBdXRvXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1sZWZ0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyB0aGUgbGVmdCBtYXJnaW4gb2YgYW4gZWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjpbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRBdXRvXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1yaWdodFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgdGhlIHJpZ2h0IG1hcmdpbiBvZiBhbiBlbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOlt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZEF1dG9cIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLXRvcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgdGhlIHRvcCBtYXJnaW4gb2YgYW4gZWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjpbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRBdXRvXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1heC1oZWlnaHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHRoZSBtYXhpbXVtIGhlaWdodCBvZiBhbiBlbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcIm5vbmVcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGFuIGVsZW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwibm9uZVwiIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1pbi1oZWlnaHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHRoZSBtaW5pbXVtIGhlaWdodCBvZiBhbiBlbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOiBbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRcIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWluLXdpZHRoXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyB0aGUgbWluaW11bSB3aWR0aCBvZiBhbiBlbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOiBbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRcIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib3BhY2l0eVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgdGhlIHRyYW5zcGFyZW5jeSBsZXZlbCBmb3IgYW4gZWxlbWVudCB3aGVyZSAxIGlzIG5vdCB0cmFuc3BhcmVudCBhdCBhbGwgYW5kIDAgaXMgY29tcGxldGVseSB0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibnVtYmVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1pbmltdW1cIjogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4aW11bVwiOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyB0aGUgb3V0bGluZSB3aWR0aCwgc3R5bGUsIGFuZCBjb2xvciBpbiBvbmUgZGVjbGFyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZFwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvdXRsaW5lLWNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyB0aGUgY29sb3Igb2YgYW4gZWxlbWVudCdzIG91dGxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlQ29sb3JcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwiaW52ZXJ0XCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZS1zdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgdGhlIHN0eWxlIG9mIGFuIGVsZW1lbnQncyBvdXRsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOiBbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlQm9yZGVyU3R5bGVcIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib3V0bGluZS13aWR0aFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgdGhlIHdpZHRoIG9mIGFuIGVsZW1lbnQncyBvdXRsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOiBbeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlQm9yZGVyV2lkdGhcIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib3ZlcmZsb3dcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgd2hhdCBoYXBwZW5zIGlmIGNvbnRlbnQgb3ZlcmZsb3dzIGFuIGVsZW1lbnQncyBib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVPdmVyZmxvd1wiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvdmVyZmxvdy14XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHdoYXQgdG8gZG8gd2l0aCB0aGUgbGVmdC9yaWdodCBlZGdlcyBvZiB0aGUgY29udGVudCBpZiBpdCBvdmVyZmxvd3MgdGhlIGVsZW1lbnQncyBjb250ZW50IGFyZWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVPdmVyZmxvd1wiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJvdmVyZmxvdy15XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHdoYXQgdG8gZG8gd2l0aCB0aGUgdG9wL2JvdHRvbSBlZGdlcyBvZiB0aGUgY29udGVudCBpZiBpdCBvdmVyZmxvd3MgdGhlIGVsZW1lbnQncyBjb250ZW50IGFyZWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVPdmVyZmxvd1wiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyBhbGwgdGhlIHBhZGRpbmcgcHJvcGVydGllcyBpbiBvbmUgZGVjbGFyYXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZFwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLWJvdHRvbVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgdGhlIGJvdHRvbSBwYWRkaW5nIG9mIGFuIGVsZW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZFwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLWxlZnRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHRoZSBsZWZ0IHBhZGRpbmcgb2YgYW4gZWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctcmlnaHRcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHRoZSByaWdodCBwYWRkaW5nIG9mIGFuIGVsZW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZFwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLXRvcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgdGhlIHRvcCBwYWRkaW5nIG9mIGFuIGVsZW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZFwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3NpdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyB0aGUgdHlwZSBvZiBwb3NpdGlvbmluZyBtZXRob2QgdXNlZCBmb3IgYW4gZWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwic3RhdGljXCIsXCJhYnNvbHV0ZVwiLFwiZml4ZWRcIixcInJlbGF0aXZlXCIsXCJzdGlja3lcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwdW5jdHVhdGlvbi10cmltXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHdoZXRoZXIgYSBwdW5jdHVhdGlvbiBjaGFyYWN0ZXIgc2hvdWxkIGJlIHRyaW1tZWQgaWYgaXQgYXBwZWFycyBhdCB0aGUgc3RhcnQgb3IgZW5kIG9mIGEgbGluZSwgb3IgYWRqYWNlbnQgdG8gYW5vdGhlciBmdWxsIHdpZHRoIHB1bmN0dWF0aW9uIGNoYXJhY3RlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwibm9uZVwiLFwic3RhcnRcIixcImVuZFwiLFwiYWxsb3ctZW5kXCIsXCJhZGphY2VudFwiIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRm9yIGFic29sdXRlbHkgcG9zaXRpb25lZCBlbGVtZW50cywgc2V0cyB0aGUgcmlnaHQgZWRnZSBvZiBhbiBlbGVtZW50IHRvIGEgdW5pdCB0byB0aGUgbGVmdC9yaWdodCBvZiB0aGUgcmlnaHQgZWRnZSBvZiBpdHMgbmVhcmVzdCBwb3NpdGlvbmVkIGFuY2VzdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOlt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZEF1dG9cIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicm90YXRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJSb3RhdGVzIGFuIGVsZW1lbnQgY291bnRlcmNsb2Nrd2lzZSBhcm91bmQgdGhlIHBvaW50IGdpdmVuIGJ5IHRoZSByb3RhdGlvbi1wb2ludCBwcm9wZXJ0eVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJvdGF0aW9uLXBvaW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRGVmaW5lcyBhIHBvaW50IGFzIGFuIG9mZnNldCBmcm9tIHRoZSB0b3AgbGVmdCBib3JkZXIgZWRnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlLWxheW91dFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNldHMgdGhlIHRhYmxlIGxheW91dCBhbGdvcml0aG0gdG8gYmUgdXNlZCBmb3IgYSB0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwiYXV0b1wiLFwiZml4ZWRcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHRoZSBob3Jpem9udGFsIGFsaWdubWVudCBvZiB0ZXh0IGluIGFuIGVsZW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RyaWN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcImxlZnRcIixcInJpZ2h0XCIsXCJjZW50ZXJcIixcImp1c3RpZnlcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduLWxhc3RcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgdGhlIGhvcml6b250YWwgYWxpZ25tZW50IG9mIHRoZSBsYXN0IGxpbmUgb2YgdGV4dCBpbiBhbiBlbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJhdXRvXCIsXCJsZWZ0XCIsXCJyaWdodFwiLFwiY2VudGVyXCIsXCJqdXN0aWZ5XCIsXCJzdGFydFwiLFwiZW5kXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1kZWNvcmF0aW9uXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHRoZSBkZWNvcmF0aW9uIGFkZGVkIHRvIHRleHQgaW4gYW4gZWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXhwcmVzc2lvbk9yU3RyaW5nXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcIm5vbmVcIixcInVuZGVybGluZVwiLFwib3ZlcmxpbmVcIixcImxpbmUtdGhyb3VnaFwiIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtaW5kZW50XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHRoZSBpbmRlbnRhdGlvbiBvZiB0aGUgZmlyc3QgbGluZSBpbiBhIHRleHQtYmxvY2tcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6IFt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZFwiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWp1c3RpZnlcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgdGhlIGp1c3RpZmljYXRpb24gbWV0aG9kIHRvIHVzZSB3aGVuIHRleHQtYWxpZ24gaXMgc2V0IHRvIGp1c3RpZnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RyaWN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcImF1dG9cIixcIm5vbmVcIixcImludGVyLXdvcmRcIixcImludGVyLWlkZW9ncmFwaFwiLFwiaW50ZXItY2x1c3RlclwiLFwiZGlzdHJpYnV0ZVwiLFwia2FzaGlkYVwiLFwidHJpbVwiIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtb3V0bGluZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyBhIHRleHQgb3V0bGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxsT2ZcIjogW3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtc2hhZG93XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiQWRkcyBzaGFkb3cgdG8gdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJub25lXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC10cmFuc2Zvcm1cIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJDb250cm9scyB0aGUgY2FwaXRhbGl6YXRpb24gb2YgdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwibm9uZVwiLFwiY2FwaXRhbGl6ZVwiLFwidXBwZXJjYXNlXCIsXCJsb3dlcmNhc2VcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXdyYXBcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgbGluZSBicmVha2luZyBydWxlcyBmb3IgdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwibm9ybWFsXCIsXCJub25lXCIsXCJ1bnJlc3RyaWN0ZWRcIixcInN1cHByZXNzXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidG9wXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiRm9yIGFic29sdXRlbHkgcG9zaXRpb25lZCBlbGVtZW50cywgc2V0cyB0aGUgdG9wIGVkZ2Ugb2YgYW4gZWxlbWVudCB0byBhIHVuaXQgYWJvdmUvYmVsb3cgdGhlIHRvcCBlZGdlIG9mIGl0cyBuZWFyZXN0IHBvc2l0aW9uZWQgYW5jZXN0b3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsbE9mXCI6W3sgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkQXV0b1wiIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmljb2RlLWJpZGlcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJVc2VkIHRvZ2V0aGVyIHdpdGggdGhlIGRpcmVjdGlvbiBwcm9wZXJ0eSB0byBzZXQgd2hldGhlciB0aGUgdGV4dCBzaG91bGQgYmUgb3ZlcnJpZGRlbiB0byBzdXBwb3J0IG11bHRpcGxlIGxhbmd1YWdlcyBpbiB0aGUgc2FtZSBkb2N1bWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwibm9ybWFsXCIsXCJlbWJlZFwiLFwiYmlkaS1vdmVycmlkZVwiIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZlcnRpY2FsLWFsaWduXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0cyB0aGUgdmVydGljYWwgYWxpZ25tZW50IG9mIGFuIGVsZW1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwiYmFzZWxpbmVcIixcInN1YlwiLFwic3VwZXJcIixcInRvcFwiLFwidGV4dC10b3BcIixcIm1pZGRsZVwiLFwiYm90dG9tXCIsXCJ0ZXh0LWJvdHRvbVwiIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgd2hldGhlciBvciBub3QgYW4gZWxlbWVudCBpcyB2aXNpYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJ2aXNpYmxlXCIsXCJoaWRkZW5cIixcImNvbGxhcHNlXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2hpdGUtc3BhY2VcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJVc2VkIHRvZ2V0aGVyIHdpdGggdGhlIGRpcmVjdGlvbiBwcm9wZXJ0eSB0byBzZXQgd2hldGhlciB0aGUgdGV4dCBzaG91bGQgYmUgb3ZlcnJpZGRlbiB0byBzdXBwb3J0IG11bHRpcGxlIGxhbmd1YWdlcyBpbiB0aGUgc2FtZSBkb2N1bWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwibm9ybWFsXCIsXCJub3dyYXBcIixcInByZVwiLFwicHJlLWxpbmVcIixcInByZS13cmFwXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTZXRzIHRoZSB3aWR0aCBvZiBhbiBlbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGxPZlwiOlt7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZEF1dG9cIiB9XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid29yZC1icmVha1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyBsaW5lIGJyZWFraW5nIHJ1bGVzIGZvciBzY3JpcHRzIHRoYXQgYXJlIG5vdCBDaGluZXNlLCBKYXBhbmVzZSwgb3IgS29yZWFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJub3JtYWxcIixcImJyZWFrLWFsbFwiLFwia2VlcC1hbGxcIiBdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3b3JkLXNwYWNpbmdcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJJbmNyZWFzZXMgb3IgZGVjcmVhc2VzIHRoZSB3aGl0ZSBzcGFjZSBiZXR3ZWVuIHdvcmRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0YW5kYXJkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcIm5vcm1hbFwiIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndvcmQtd3JhcFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIkFsbG93cyBsb25nIHdvcmRzIHRvIGJlIGFibGUgdG8gYmUgYnJva2VuIGFuZCB3cmFwIG9udG8gdGhlIG5leHQgbGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwibm9ybWFsXCIsXCJicmVhay13b3JkXCIgXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiei1pbmRleFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyB0aGUgc3RhY2sgb3JkZXIgb2YgYW4gZWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwidHlwZVwiOiBcImludGVnZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdHJpY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwiYXV0b1wiIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIl5bYS16XSsoPzotW2Etel0rKT8kXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHN0eWxlIGF0dHJpYnV0ZXMgZm9yIHRoaXMgZWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4cHJlc3Npb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImN1c3RvbVJvd0FjdGlvblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvY3VzdG9tQWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJhdHRyaWJ1dGVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJBZGRpdGlvbmFsIGF0dHJpYnV0ZXMgdG8gYmUgYWRkZWQgdG8gZWxtVHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJocmVmXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHRoZSBocmVmIGF0dHJpYnV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4cHJlc3Npb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHRoZSBzcmMgYXR0cmlidXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXhwcmVzc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyB0aGUgY2xhc3MgYXR0cmlidXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXhwcmVzc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW51bVwiOltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwLWZpZWxkLWN1c3RvbUZvcm1hdEJhY2tncm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwLWZpZWxkLXNldmVyaXR5LS1nb29kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcC1maWVsZC1zZXZlcml0eS0tbG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcC1maWVsZC1zZXZlcml0eS0td2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3AtZmllbGQtc2V2ZXJpdHktLXNldmVyZVdhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwLWZpZWxkLXNldmVyaXR5LS1ibG9ja2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcC1maWVsZC1kYXRhQmFyc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3AtZmllbGQtdHJlbmRpbmctLXVwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcC1maWVsZC10cmVuZGluZy0tZG93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3AtZmllbGQtcXVpY2tBY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGFyZ2V0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIHRoZSB0YXJnZXQgYXR0cmlidXRlLCB1c2VkIHByaW1hcmlseSBmb3IgPGE+IGVsZW1lbnQgdHlwZXMuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXhwcmVzc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJfYmxhbmtcIixcIl9zZWxmXCIsXCJfcGFyZW50XCIsXCJfdG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJvbGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgdGhlIHJvbGUgYXR0cmlidXRlLCB1c2VkIGFjY2Vzc2liaWxpdHkuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXhwcmVzc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGVydFwiLFwiYWxlcnRkaWFsb2dcIixcImFwcGxpY2F0aW9uXCIsXCJhcnRpY2xlXCIsXCJidXR0b25cIixcImNlbGxcIixcImNoZWNrYm94XCIsXCJjb2x1bW5oZWFkZXJcIixcImNvbWJvYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb21wbGVtZW50YXJ5XCIsXCJjb250ZW50aW5mb1wiLFwiZGVmaW5pdGlvblwiLFwiZGlhbG9nXCIsXCJkaXJlY3RvcnlcIixcImRvY3VtZW50XCIsXCJmZWVkXCIsXCJmaWd1cmVcIixcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImdyaWRcIixcImdyaWRjZWxsXCIsXCJncm91cFwiLFwiaGVhZGluZ1wiLFwiaW1nXCIsXCJsaW5rXCIsXCJsaXN0XCIsXCJsaXN0Ym94XCIsXCJsaXN0aXRlbVwiLFwibG9nXCIsXCJtYWluXCIsXCJtYXJxdWVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXRoXCIsXCJtZW51XCIsXCJtZW51YmFyXCIsXCJtZW51aXRlbVwiLFwibWVudWl0ZW1jaGVja2JveFwiLFwibWVudWl0ZW1yYWRpb1wiLFwibmF2aWdhdGlvblwiLFwibm9uZVwiLFwibm90ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3B0aW9uXCIsXCJwcmVzZW50YXRpb25cIixcInByb2dyZXNzYmFyXCIsXCJyYWRpb1wiLFwicmFkaW9ncm91cFwiLFwicmVnaW9uXCIsXCJyb3dcIixcInJvd2dyb3VwXCIsXCJyb3doZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNjcm9sbGJhclwiLFwic2VhcmNoXCIsXCJzZWFyY2hib3hcIixcInNlcGFyYXRvclwiLFwic2xpZGVyXCIsXCJzcGluYnV0dG9uXCIsXCJzdGF0dXNcIixcInN3aXRjaFwiLFwidGFiXCIsXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGFibGlzdFwiLFwidGFicGFuZWxcIixcInRlcm1cIixcInRleHRib3hcIixcInRpbWVyXCIsXCJ0b29sYmFyXCIsXCJ0b29sdGlwXCIsXCJ0cmVlXCIsXCJ0cmVlZ3JpZFwiLFwidHJlZWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyB0aGUgZCBhdHRyaWJ1dGUuIFVzZWQgcHJpbWFyaWx5IGZvciBzdmcgcGF0aCBlbGVtZW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4cHJlc3Npb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbk5hbWVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZXMgdGhlIEZhYnJpYyBpY29uIHRvIGRpc3BsYXkgYmVmb3JlIHRoaXMgZWxlbWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4cHJlc3Npb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiMTJQb2ludFN0YXJcIixcIjZQb2ludFN0YXJcIixcIkFBRExvZ29cIixcIkFjY2VwdFwiLFwiQWNjZXNzTG9nb1wiLFwiQWNjZXNzTG9nb0ZpbGxcIixcIkFjY291bnRNYW5hZ2VtZW50XCIsXCJBY2NvdW50c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWN0aXZhdGVPcmRlcnNcIixcIkFjdGl2aXR5RmVlZFwiLFwiQWRkXCIsXCJBZGRFdmVudFwiLFwiQWRkRmF2b3JpdGVcIixcIkFkZEZhdm9yaXRlRmlsbFwiLFwiQWRkRnJpZW5kXCIsXCJBZGRHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWRkTm90ZXNcIixcIkFkZE9ubGluZU1lZXRpbmdcIixcIkFkZFBob25lXCIsXCJBZGRUb1wiLFwiQWRtaW5cIixcIkFkbWluQUxvZ28zMlwiLFwiQWRtaW5BTG9nb0ZpbGwzMlwiLFwiQWRtaW5BTG9nb0ludmVyc2UzMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWRtaW5DTG9nb0ludmVyc2UzMlwiLFwiQWRtaW5ETG9nb0ludmVyc2UzMlwiLFwiQWRtaW5FTG9nb0ludmVyc2UzMlwiLFwiQWRtaW5MTG9nb0ludmVyc2UzMlwiLFwiQWRtaW5NTG9nb0ludmVyc2UzMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWRtaW5PTG9nb0ludmVyc2UzMlwiLFwiQWRtaW5QTG9nb0ludmVyc2UzMlwiLFwiQWRtaW5TTG9nb0ludmVyc2UzMlwiLFwiQWRtaW5ZTG9nb0ludmVyc2UzMlwiLFwiQWlycGxhbmVcIixcIkFpcnBsYW5lU29saWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFpclRpY2tldHNcIixcIkFsYXJtQ2xvY2tcIixcIkFsYnVtXCIsXCJBbGJ1bVJlbW92ZVwiLFwiQWxlcnRTb2xpZFwiLFwiQWxpZ25DZW50ZXJcIixcIkFsaWduSG9yaXpvbnRhbENlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQWxpZ25Ib3Jpem9udGFsTGVmdFwiLFwiQWxpZ25Ib3Jpem9udGFsUmlnaHRcIixcIkFsaWduSnVzdGlmeVwiLFwiQWxpZ25MZWZ0XCIsXCJBbGlnblJpZ2h0XCIsXCJBbGlnblZlcnRpY2FsQm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBbGlnblZlcnRpY2FsQ2VudGVyXCIsXCJBbGlnblZlcnRpY2FsVG9wXCIsXCJBbmFseXRpY3NMb2dvXCIsXCJBbmFseXRpY3NRdWVyeVwiLFwiQW5hbHl0aWNzUmVwb3J0XCIsXCJBbmNob3JMb2NrXCIsXCJBbm5vdGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBcHBJY29uRGVmYXVsdFwiLFwiQXJjaGl2ZVwiLFwiQXJlYUNoYXJ0XCIsXCJBcnJhbmdlQnJpbmdGb3J3YXJkXCIsXCJBcnJhbmdlQnJpbmdUb0Zyb250XCIsXCJBcnJhbmdlU2VuZEJhY2t3YXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBcnJhbmdlU2VuZFRvQmFja1wiLFwiQXJyaXZhbHNcIixcIkFycm93RG93blJpZ2h0OFwiLFwiQXJyb3dEb3duUmlnaHRNaXJyb3JlZDhcIixcIkFycm93VGFsbERvd25MZWZ0XCIsXCJBcnJvd1RhbGxEb3duUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFycm93VGFsbFVwTGVmdFwiLFwiQXJyb3dUYWxsVXBSaWdodFwiLFwiQXJyb3dVcFJpZ2h0OFwiLFwiQXJyb3dVcFJpZ2h0TWlycm9yZWQ4XCIsXCJBcnRpY2xlc1wiLFwiQXNjZW5kaW5nXCIsXCJBc3BlY3RSYXRpb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQXNzZXNzbWVudEdyb3VwXCIsXCJBc3Nlc3NtZW50R3JvdXBUZW1wbGF0ZVwiLFwiQXNzZXRMaWJyYXJ5XCIsXCJBc3NpZ25cIixcIkFzdGVyaXNrXCIsXCJBc3Rlcmlza1NvbGlkXCIsXCJBVFBMb2dvXCIsXCJBdHRhY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF1c3RyYWxpYW5SdWxlc1wiLFwiQXV0b0VuaGFuY2VPZmZcIixcIkF1dG9FbmhhbmNlT25cIixcIkF1dG9GaWxsVGVtcGxhdGVcIixcIkF1dG9IZWlnaHRcIixcIkF1dG9SYWNpbmdcIixcIkF3YXlTdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF6dXJlQVBJTWFuYWdlbWVudFwiLFwiQXp1cmVLZXlWYXVsdFwiLFwiQXp1cmVMb2dvXCIsXCJBenVyZVNlcnZpY2VFbmRwb2ludFwiLFwiQmFja1wiLFwiQmFja2dyb3VuZENvbG9yXCIsXCJCYWNrbG9nXCIsXCJCYWNrbG9nQm9hcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJhY2tUb1dpbmRvd1wiLFwiQmFkZ2VcIixcIkJhbGxvb25zXCIsXCJCYW5rU29saWRcIixcIkJhckNoYXJ0NFwiLFwiQmFyQ2hhcnRIb3Jpem9udGFsXCIsXCJCYXJDaGFydFZlcnRpY2FsXCIsXCJCYXNlYmFsbFwiLFwiQmVlck11Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQklEYXNoYm9hcmRcIixcIkJpZGlMdHJcIixcIkJpZGlSdGxcIixcIkJpbmdMb2dvXCIsXCJCaXJ0aGRheUNha2VcIixcIkJsb2NrQ29udGFjdFwiLFwiQmxvY2tlZFwiLFwiQmxvY2tlZDJcIixcIkJsb2NrZWRTb2xpZFwiLFwiQmxvd2luZ1Nub3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJsdXJcIixcIkJvYXJkc1wiLFwiQm9sZFwiLFwiQm9va2luZ3NMb2dvXCIsXCJCb29rbWFya3NcIixcIkJvb2ttYXJrc01pcnJvcmVkXCIsXCJCb3JkZXJEYXNoXCIsXCJCb3JkZXJEb3RcIixcIkJveEFkZGl0aW9uU29saWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJveENoZWNrbWFya1NvbGlkXCIsXCJCb3hNdWx0aXBseVNvbGlkXCIsXCJCb3hQbGF5U29saWRcIixcIkJveFN1YnRyYWN0U29saWRcIixcIkJyYW5jaENvbW1pdFwiLFwiQnJhbmNoQ29tcGFyZVwiLFwiQnJhbmNoRm9ya1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQnJhbmNoRm9yazJcIixcIkJyYW5jaExvY2tlZFwiLFwiQnJhbmNoTWVyZ2VcIixcIkJyYW5jaFB1bGxSZXF1ZXN0XCIsXCJCcmFuY2hTZWFyY2hcIixcIkJyYW5jaFNoZWx2ZXNldFwiLFwiQnJlYWRjcnVtYlwiLFwiQnJlYWtmYXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJCcmlnaHRuZXNzXCIsXCJCcm9vbVwiLFwiQnJ1bmNoXCIsXCJCdWNrZXRDb2xvclwiLFwiQnVja2V0Q29sb3JGaWxsXCIsXCJCdWZmZXJUaW1lQWZ0ZXJcIixcIkJ1ZmZlclRpbWVCZWZvcmVcIixcIkJ1ZmZlclRpbWVCb3RoXCIsXCJCdWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkJ1Z1NvbGlkXCIsXCJCdWlsZFwiLFwiQnVpbGRJc3N1ZVwiLFwiQnVpbGRRdWV1ZVwiLFwiQnVpbGRRdWV1ZU5ld1wiLFwiQnVsa1VwbG9hZFwiLFwiQnVsbGV0ZWRMaXN0XCIsXCJCdWxsZXRlZExpc3QyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJCdWxsZXRlZExpc3QyTWlycm9yZWRcIixcIkJ1bGxldGVkTGlzdE1pcnJvcmVkXCIsXCJCdWxsc2V5ZVwiLFwiQnVzXCIsXCJCdXNpbmVzc0NlbnRlckxvZ29cIixcIkJ1c2luZXNzSG91cnNTaWduXCIsXCJCdXNTb2xpZFwiLFwiQ2FmZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2FrZVwiLFwiQ2FsY3VsYXRvclwiLFwiQ2FsY3VsYXRvckFkZGl0aW9uXCIsXCJDYWxjdWxhdG9yRXF1YWxUb1wiLFwiQ2FsY3VsYXRvck11bHRpcGx5XCIsXCJDYWxjdWxhdG9yTm90RXF1YWxUb1wiLFwiQ2FsY3VsYXRvclN1YnRyYWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDYWxlbmRhclwiLFwiQ2FsZW5kYXJBZ2VuZGFcIixcIkNhbGVuZGFyRGF5XCIsXCJDYWxlbmRhck1pcnJvcmVkXCIsXCJDYWxlbmRhclJlcGx5XCIsXCJDYWxlbmRhclNldHRpbmdzXCIsXCJDYWxlbmRhclNldHRpbmdzTWlycm9yZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNhbGVuZGFyV2Vla1wiLFwiQ2FsZW5kYXJXb3JrV2Vla1wiLFwiQ2Fsb3JpZXNBZGRcIixcIkNhbWVyYVwiLFwiQ2FuY2VsXCIsXCJDYW5uZWRDaGF0XCIsXCJDYXJcIixcIkNhcmV0Qm90dG9tTGVmdENlbnRlcjhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNhcmV0Qm90dG9tTGVmdFNvbGlkOFwiLFwiQ2FyZXRCb3R0b21SaWdodENlbnRlcjhcIixcIkNhcmV0Qm90dG9tUmlnaHRTb2xpZDhcIixcIkNhcmV0RG93bjhcIixcIkNhcmV0RG93blNvbGlkOFwiLFwiQ2FyZXRIb2xsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNhcmV0SG9sbG93TWlycm9yZWRcIixcIkNhcmV0TGVmdDhcIixcIkNhcmV0TGVmdFNvbGlkOFwiLFwiQ2FyZXRSaWdodFwiLFwiQ2FyZXRSaWdodDhcIixcIkNhcmV0UmlnaHRTb2xpZDhcIixcIkNhcmV0U29saWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNhcmV0U29saWQxNlwiLFwiQ2FyZXRTb2xpZERvd25cIixcIkNhcmV0U29saWRMZWZ0XCIsXCJDYXJldFNvbGlkTWlycm9yZWRcIixcIkNhcmV0U29saWRSaWdodFwiLFwiQ2FyZXRTb2xpZFVwXCIsXCJDYXJldFRvcExlZnRDZW50ZXI4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDYXJldFRvcExlZnRTb2xpZDhcIixcIkNhcmV0VG9wUmlnaHRDZW50ZXI4XCIsXCJDYXJldFRvcFJpZ2h0U29saWQ4XCIsXCJDYXJldFVwOFwiLFwiQ2FyZXRVcFNvbGlkOFwiLFwiQ2F0XCIsXCJDZWxsUGhvbmVcIixcIkNlcnRpZmljYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDaGFydFwiLFwiQ2hhcnRTZXJpZXNcIixcIkNoYXJ0WEFuZ2xlXCIsXCJDaGFydFlBbmdsZVwiLFwiQ2hhdFwiLFwiQ2hhdEludml0ZUZyaWVuZFwiLFwiQ2hhdFNvbGlkXCIsXCJDaGVja2JveFwiLFwiQ2hlY2tib3hDb21wb3NpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNoZWNrYm94Q29tcG9zaXRlUmV2ZXJzZWRcIixcIkNoZWNrYm94SW5kZXRlcm1pbmF0ZVwiLFwiQ2hlY2tMaXN0XCIsXCJDaGVja01hcmtcIixcIkNoZXZyb25Eb3duXCIsXCJDaGV2cm9uRG93bkVuZDZcIixcIkNoZXZyb25Eb3duTWVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDaGV2cm9uRG93blNtYWxsXCIsXCJDaGV2cm9uRm9sZDEwXCIsXCJDaGV2cm9uTGVmdFwiLFwiQ2hldnJvbkxlZnRFbmQ2XCIsXCJDaGV2cm9uTGVmdE1lZFwiLFwiQ2hldnJvbkxlZnRTbWFsbFwiLFwiQ2hldnJvblJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDaGV2cm9uUmlnaHRFbmQ2XCIsXCJDaGV2cm9uUmlnaHRNZWRcIixcIkNoZXZyb25SaWdodFNtYWxsXCIsXCJDaGV2cm9uVW5mb2xkMTBcIixcIkNoZXZyb25VcFwiLFwiQ2hldnJvblVwRW5kNlwiLFwiQ2hldnJvblVwTWVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDaGV2cm9uVXBTbWFsbFwiLFwiQ2hvcHN0aWNrc1wiLFwiQ2hyb21lQmFja1wiLFwiQ2hyb21lQmFja01pcnJvcmVkXCIsXCJDaHJvbWVDbG9zZVwiLFwiQ2hyb21lTWluaW1pemVcIixcIkNpcmNsZUFkZGl0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDaXJjbGVBZGRpdGlvblNvbGlkXCIsXCJDaXJjbGVGaWxsXCIsXCJDaXJjbGVIYWxmRnVsbFwiLFwiQ2lyY2xlUGF1c2VcIixcIkNpcmNsZVBhdXNlU29saWRcIixcIkNpcmNsZVBsdXNcIixcIkNpcmNsZVJpbmdcIixcIkNpcmNsZVN0b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNpcmNsZVN0b3BTb2xpZFwiLFwiQ2l0eU5leHRcIixcIkNsYXNzTm90ZWJvb2tMb2dvMTZcIixcIkNsYXNzTm90ZWJvb2tMb2dvMzJcIixcIkNsYXNzTm90ZWJvb2tMb2dvRmlsbDE2XCIsXCJDbGFzc05vdGVib29rTG9nb0ZpbGwzMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2xhc3NOb3RlYm9va0xvZ29JbnZlcnNlXCIsXCJDbGFzc05vdGVib29rTG9nb0ludmVyc2UxNlwiLFwiQ2xhc3NOb3RlYm9va0xvZ29JbnZlcnNlMzJcIixcIkNsYXNzcm9vbUxvZ29cIixcIkNsZWFyXCIsXCJDbGVhckZpbHRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2xlYXJGb3JtYXR0aW5nXCIsXCJDbGVhck5pZ2h0XCIsXCJDbG9ja1wiLFwiQ2xvbmVUb0Rlc2t0b3BcIixcIkNsb3NlZENhcHRpb25cIixcIkNsb3NlUGFuZVwiLFwiQ2xvc2VQYW5lTWlycm9yZWRcIixcIkNsb3VkXCIsXCJDbG91ZEFkZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ2xvdWREb3dubG9hZFwiLFwiQ2xvdWRVcGxvYWRcIixcIkNsb3VkV2VhdGhlclwiLFwiQ2xvdWR5XCIsXCJDb2NrdGFpbHNcIixcIkNvZGVcIixcIkNvZGVFZGl0XCIsXCJDb2ZmZWVcIixcIkNvZmZlZVNjcmlwdFwiLFwiQ29sbGFwc2VDb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb2xsYXBzZUNvbnRlbnRTaW5nbGVcIixcIkNvbGxhcHNlTWVudVwiLFwiQ29sbGVnZUZvb3RiYWxsXCIsXCJDb2xsZWdlSG9vcHNcIixcIkNvbG9yXCIsXCJDb2xvclNvbGlkXCIsXCJDb2x1bW5MZWZ0VHdvVGhpcmRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb2x1bW5MZWZ0VHdvVGhpcmRzRWRpdFwiLFwiQ29sdW1uT3B0aW9uc1wiLFwiQ29sdW1uUmlnaHRUd29UaGlyZHNcIixcIkNvbHVtblJpZ2h0VHdvVGhpcmRzRWRpdFwiLFwiQ29tYmluZVwiLFwiQ29tYm9ib3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbW1hbmRQcm9tcHRcIixcIkNvbW1lbnRcIixcIkNvbW1lbnRBZGRcIixcIkNvbW1lbnROZXh0XCIsXCJDb21tZW50UHJldmlvdXNcIixcIkNvbW1lbnRVcmdlbnRcIixcIkNvbW1pdG1lbnRzXCIsXCJDb21tdW5pY2F0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29tcGFueURpcmVjdG9yeVwiLFwiQ29tcGFueURpcmVjdG9yeU1pcnJvcmVkXCIsXCJDb21wYXNzTldcIixcIkNvbXBsZXRlZFwiLFwiQ29tcGxldGVkU29saWRcIixcIkNvbmZpZ3VyYXRpb25Tb2xpZFwiLFwiQ29uc3RydWN0aW9uQ29uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29uc3RydWN0aW9uQ29uZVNvbGlkXCIsXCJDb250YWN0XCIsXCJDb250YWN0Q2FyZFwiLFwiQ29udGFjdENhcmRTZXR0aW5nc1wiLFwiQ29udGFjdENhcmRTZXR0aW5nc01pcnJvcmVkXCIsXCJDb250YWN0SW5mb1wiLFwiQ29udGFjdExpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRleHRNZW51XCIsXCJDb250cmFzdFwiLFwiQ29weVwiLFwiQ290dG9uXCIsXCJDUGx1c1BsdXNcIixcIkNQbHVzUGx1c0xhbmd1YWdlXCIsXCJDcmlja2V0XCIsXCJDUk1SZXBvcnRcIixcIkNyb3BcIixcIkNyb3duXCIsXCJDcm93blNvbGlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDU2hhcnBcIixcIkNTaGFycExhbmd1YWdlXCIsXCJDU1NcIixcIkN1c3RvbUxpc3RcIixcIkN1c3RvbUxpc3RNaXJyb3JlZFwiLFwiQ3V0XCIsXCJDeWNsaW5nXCIsXCJEYXNoYm9hcmRBZGRcIixcIkRhdGFiYXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEYXRhQ29ubmVjdGlvbkxpYnJhcnlcIixcIkRhdGVUaW1lXCIsXCJEYXRlVGltZTJcIixcIkRhdGVUaW1lTWlycm9yZWRcIixcIkRlYWN0aXZhdGVPcmRlcnNcIixcIkRlY2lzaW9uU29saWRcIixcIkRlY2xpbmVDYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEZWNyZWFzZUluZGVudExlZ2FjeVwiLFwiRGVmYXVsdFJhdGlvXCIsXCJEZWZlY3RTb2xpZFwiLFwiRGVsZXRlXCIsXCJEZWxpdmVyeVRydWNrXCIsXCJEZWx2ZUFuYWx5dGljc1wiLFwiRGVsdmVBbmFseXRpY3NMb2dvXCIsXCJEZWx2ZUxvZ29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRlbHZlTG9nb0ZpbGxcIixcIkRlbHZlTG9nb0ludmVyc2VcIixcIkRlcGxveVwiLFwiRGVzY2VuZGluZ1wiLFwiRGVzaWduXCIsXCJEZXZlbG9wZXJUb29sc1wiLFwiRGV2aWNlczNcIixcIkRldmljZXM0XCIsXCJEaWFnbm9zdGljXCIsXCJEaWFscGFkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEaWFtb25kU29saWRcIixcIkRpY3Rpb25hcnlcIixcIkRpZXRQbGFuTm90ZWJvb2tcIixcIkRpZmZJbmxpbmVcIixcIkRpZmZTaWRlQnlTaWRlXCIsXCJEaXNhYmxlVXBkYXRlc1wiLFwiRGlzbGlrZVwiLFwiRGlzbGlrZVNvbGlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEb2NrTGVmdFwiLFwiRG9ja0xlZnRNaXJyb3JlZFwiLFwiRG9ja1JpZ2h0XCIsXCJEb2NMaWJyYXJ5XCIsXCJEb2NzTG9nb0ludmVyc2VcIixcIkRvY3VtZW50XCIsXCJEb2N1bWVudEFwcHJvdmFsXCIsXCJEb2N1bWVudGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEb2N1bWVudE1hbmFnZW1lbnRcIixcIkRvY3VtZW50UmVwbHlcIixcIkRvY3VtZW50U2VhcmNoXCIsXCJEb2N1bWVudFNldFwiLFwiRG9udXRDaGFydFwiLFwiRG9vclwiLFwiRG91YmxlQm9va21hcmtcIixcIkRvdWJsZUNoZXZyb25Eb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEb3VibGVDaGV2cm9uRG93bjEyXCIsXCJEb3VibGVDaGV2cm9uRG93bjhcIixcIkRvdWJsZUNoZXZyb25MZWZ0XCIsXCJEb3VibGVDaGV2cm9uTGVmdDEyXCIsXCJEb3VibGVDaGV2cm9uTGVmdDhcIixcIkRvdWJsZUNoZXZyb25MZWZ0TWVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEb3VibGVDaGV2cm9uTGVmdE1lZE1pcnJvcmVkXCIsXCJEb3VibGVDaGV2cm9uUmlnaHRcIixcIkRvdWJsZUNoZXZyb25SaWdodDEyXCIsXCJEb3VibGVDaGV2cm9uUmlnaHQ4XCIsXCJEb3VibGVDaGV2cm9uVXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRvdWJsZUNoZXZyb25VcDEyXCIsXCJEb3VibGVDaGV2cm9uVXA4XCIsXCJEb3VibGVDb2x1bW5cIixcIkRvdWJsZUNvbHVtbkVkaXRcIixcIkRvd25cIixcIkRvd25sb2FkXCIsXCJEb3dubG9hZERvY3VtZW50XCIsXCJEcmFnT2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEcmlsbERvd25cIixcIkRyaWxsRG93blNvbGlkXCIsXCJEcmlsbEV4cGFuZFwiLFwiRHJpbGxTaG93XCIsXCJEUk1cIixcIkRyb3BcIixcIkRyb3Bkb3duXCIsXCJEdXN0c3Rvcm1cIixcIkR5bmFtaWNzMzY1TG9nb1wiLFwiRHluYW1pY1NNQkxvZ29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkVhdERyaW5rXCIsXCJFZGdlTG9nb1wiLFwiRWRpdFwiLFwiRWRpdENvbnRhY3RcIixcIkVkaXRNYWlsXCIsXCJFZGl0TWlycm9yZWRcIixcIkVkaXROb3RlXCIsXCJFZGl0UGhvdG9cIixcIkVkaXRTb2xpZDEyXCIsXCJFZGl0U29saWRNaXJyb3JlZDEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFZGl0U3R5bGVcIixcIkVkdWNhdGlvblwiLFwiRWxsaXBzZVwiLFwiRW1iZWRcIixcIkVNSVwiLFwiRW1vamlcIixcIkVtb2ppMlwiLFwiRW1vamlEaXNhcHBvaW50ZWRcIixcIkVtb2ppTmV1dHJhbFwiLFwiRW1vamlUYWJTeW1ib2xzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFbXB0eVJlY3ljbGVCaW5cIixcIkVuZ2luZWVyaW5nR3JvdXBcIixcIkVudHJ5RGVjbGluZVwiLFwiRW50cnlWaWV3XCIsXCJFcXVhbGl6ZXJcIixcIkVyYXNlVG9vbFwiLFwiRXJyb3JcIixcIkVycm9yQmFkZ2VcIixcIkV2ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFdmVudEFjY2VwdGVkXCIsXCJFdmVudERhdGVcIixcIkV2ZW50RGVjbGluZWRcIixcIkV2ZW50SW5mb1wiLFwiRXZlbnRUZW50YXRpdmVcIixcIkV2ZW50VGVudGF0aXZlTWlycm9yZWRcIixcIkV4Y2VsRG9jdW1lbnRcIixcIkV4Y2VsTG9nb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRXhjZWxMb2dvMTZcIixcIkV4Y2VsTG9nb0ZpbGxcIixcIkV4Y2VsTG9nb0ZpbGwxNlwiLFwiRXhjZWxMb2dvSW52ZXJzZVwiLFwiRXhjZWxMb2dvSW52ZXJzZTE2XCIsXCJFeGNoYW5nZUxvZ29cIixcIkV4Y2hhbmdlTG9nb0ZpbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkV4Y2hhbmdlTG9nb0ludmVyc2VcIixcIkV4ZXJjaXNlVHJhY2tlclwiLFwiRXhwYW5kTWVudVwiLFwiRXhwbG9yZUNvbnRlbnRcIixcIkV4cGxvcmVDb250ZW50U2luZ2xlXCIsXCJFeHBvcnRcIixcIkV4cG9ydE1pcnJvcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJFeHRlcm5hbEJ1aWxkXCIsXCJFeHRlcm5hbFRGVkNcIixcIkV4dGVybmFsWEFNTFwiLFwiRjEyRGV2VG9vbHNcIixcIkZhYnJpY0Fzc2V0TGlicmFyeVwiLFwiRmFicmljRGF0YUNvbm5lY3Rpb25MaWJyYXJ5XCIsXCJGYWJyaWNEb2NMaWJyYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGYWJyaWNGb2xkZXJcIixcIkZhYnJpY0ZvbGRlckZpbGxcIixcIkZhYnJpY0ZvbGRlclNlYXJjaFwiLFwiRmFicmljRm9ybUxpYnJhcnlcIixcIkZhYnJpY0Zvcm1MaWJyYXJ5TWlycm9yZWRcIixcIkZhYnJpY01vdmV0b0ZvbGRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmFicmljTmV3Rm9sZGVyXCIsXCJGYWJyaWNPcGVuRm9sZGVySG9yaXpvbnRhbFwiLFwiRmFicmljUGljdHVyZUxpYnJhcnlcIixcIkZhYnJpY1B1YmxpY0ZvbGRlclwiLFwiRmFicmljUmVwb3J0TGlicmFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmFicmljUmVwb3J0TGlicmFyeU1pcnJvcmVkXCIsXCJGYWJyaWNTeW5jRm9sZGVyXCIsXCJGYWJyaWNVbnN5bmNGb2xkZXJcIixcIkZhbWlseVwiLFwiRmFuZ0JvZHlcIixcIkZhc3RGb3J3YXJkXCIsXCJGYXN0TW9kZVwiLFwiRmF2aWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmF2b3JpdGVMaXN0XCIsXCJGYXZvcml0ZVN0YXJcIixcIkZhdm9yaXRlU3RhckZpbGxcIixcIkZheFwiLFwiRmVlZGJhY2tcIixcIkZlZWRiYWNrUmVxdWVzdE1pcnJvcmVkU29saWRcIixcIkZlZWRiYWNrUmVxdWVzdFNvbGlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGZWVkYmFja1Jlc3BvbnNlU29saWRcIixcIkZlcnJ5XCIsXCJGZXJyeVNvbGlkXCIsXCJGaWVsZENoYW5nZWRcIixcIkZpZWxkRW1wdHlcIixcIkZpZWxkRmlsbGVkXCIsXCJGaWVsZE5vdENoYW5nZWRcIixcIkZpZWxkUmVhZE9ubHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZpZWxkUmVxdWlyZWRcIixcIkZpbGVBU1BYXCIsXCJGaWxlQnVnXCIsXCJGaWxlQ29kZVwiLFwiRmlsZUNvbW1lbnRcIixcIkZpbGVDU1NcIixcIkZpbGVIVE1MXCIsXCJGaWxlSW1hZ2VcIixcIkZpbGVKQVZBXCIsXCJGaWxlTGVzc1wiLFwiRmlsZVBEQlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRmlsZVNhc3NcIixcIkZpbGVTUUxcIixcIkZpbGVTeW1saW5rXCIsXCJGaWxlVGVtcGxhdGVcIixcIkZpbGVUeXBlU29sdXRpb25cIixcIkZpbHRlclwiLFwiRmlsdGVyc1wiLFwiRmlsdGVyU29saWRcIixcIkZpbHRlcnNTb2xpZFwiLFwiRmluYW5jaWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGaW5hbmNpYWxNaXJyb3JlZFNvbGlkXCIsXCJGaW5hbmNpYWxTb2xpZFwiLFwiRmluZ2VycHJpbnRcIixcIkZpdmVUaWxlR3JpZFwiLFwiRmxhZ1wiLFwiRmxhbWVTb2xpZFwiLFwiRmxpY2tEb3duXCIsXCJGbGlja0xlZnRcIixcIkZsaWNrUmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZsaWNrVXBcIixcIkZsb3dcIixcIkZvY2FsUG9pbnRcIixcIkZvZ1wiLFwiRm9sZGVyXCIsXCJGb2xkZXJGaWxsXCIsXCJGb2xkZXJIb3Jpem9udGFsXCIsXCJGb2xkZXJMaXN0XCIsXCJGb2xkZXJMaXN0TWlycm9yZWRcIixcIkZvbGRlck9wZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZvbGRlclF1ZXJ5XCIsXCJGb2xkZXJTZWFyY2hcIixcIkZvbGxvd1VzZXJcIixcIkZvbnRcIixcIkZvbnRDb2xvclwiLFwiRm9udENvbG9yQVwiLFwiRm9udENvbG9yU3dhdGNoXCIsXCJGb250RGVjcmVhc2VcIixcIkZvbnRJbmNyZWFzZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRm9udFNpemVcIixcIkZvcm1MaWJyYXJ5XCIsXCJGb3JtTGlicmFyeU1pcnJvcmVkXCIsXCJGb3J3YXJkXCIsXCJGb3J3YXJkRXZlbnRcIixcIkZyZWV6aW5nXCIsXCJGcmlnaWRcIixcIkZTaGFycFwiLFwiRlNoYXJwTGFuZ3VhZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZ1bGxDaXJjbGVNYXNrXCIsXCJGdWxsSGlzdG9yeVwiLFwiRnVsbFNjcmVlblwiLFwiRnVsbFdpZHRoXCIsXCJGdWxsV2lkdGhFZGl0XCIsXCJGdW5jdGlvbmFsTWFuYWdlckRhc2hib2FyZFwiLFwiR2FsbGF0aW5Mb2dvXCIsXCJHZW5lcmF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiR2VuZXJpY1NjYW5cIixcIkdpZnRib3hcIixcIkdpZnRib3hPcGVuXCIsXCJHaWZ0Qm94U29saWRcIixcIkdpZnRDYXJkXCIsXCJHaXRHcmFwaFwiLFwiR2xhc3Nlc1wiLFwiR2xpbW1lclwiLFwiR2xvYmFsTmF2QnV0dG9uXCIsXCJHbG9iZVwiLFwiR2xvYmUyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHbG9iZUZhdm9yaXRlXCIsXCJHb2xmXCIsXCJHb3RvVG9kYXlcIixcIkdyaWRWaWV3TGFyZ2VcIixcIkdyaWRWaWV3TWVkaXVtXCIsXCJHcmlkVmlld1NtYWxsXCIsXCJHcmlwcGVyQmFySG9yaXpvbnRhbFwiLFwiR3JpcHBlckJhclZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHcmlwcGVyVG9vbFwiLFwiR3JvdXBcIixcIkdyb3VwZWRBc2NlbmRpbmdcIixcIkdyb3VwZWREZXNjZW5kaW5nXCIsXCJHcm91cGVkTGlzdFwiLFwiR3JvdXBPYmplY3RcIixcIkdVSURcIixcIkd1aXRhclwiLFwiSGFpbERheVwiLFwiSGFpbE5pZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJIYWxmQWxwaGFcIixcIkhhbGZDaXJjbGVcIixcIkhhbmR3cml0aW5nXCIsXCJIYXJkRHJpdmVcIixcIkhhcmREcml2ZUdyb3VwXCIsXCJIYXJkRHJpdmVMb2NrXCIsXCJIYXJkRHJpdmVVbmxvY2tcIixcIkhlYWRlcjFcIixcIkhlYWRlcjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkhlYWRlcjNcIixcIkhlYWRlcjRcIixcIkhlYWRzZXRcIixcIkhlYWRzZXRTb2xpZFwiLFwiSGVhbHRoXCIsXCJIZWFsdGhTb2xpZFwiLFwiSGVhcnRcIixcIkhlYXJ0QnJva2VuXCIsXCJIZWFydEZpbGxcIixcIkhlbHBcIixcIkhlbHBNaXJyb3JlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSGV4YWdvblwiLFwiSGlkZVwiLFwiSGlkZTJcIixcIkhpZ2hsaWdodFwiLFwiSGlnaGxpZ2h0TWFwcGVkU2hhcGVzXCIsXCJIaW50VGV4dFwiLFwiSGlzdG9yeVwiLFwiSG9tZVwiLFwiSG9tZVNvbGlkXCIsXCJIb3Jpem9udGFsRGlzdHJpYnV0ZUNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSG9zcGl0YWxcIixcIkhvdGVsXCIsXCJIb3VyR2xhc3NcIixcIkh1bWFuUmVzb3VyY2VzXCIsXCJJY29uU2V0c0ZsYWdcIixcIklEQmFkZ2VcIixcIkltYWdlQ3Jvc3NoYWlyXCIsXCJJbWFnZURpZmZcIixcIkltYWdlUGl4ZWxcIixcIkltYWdlU2VhcmNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbXBvcnRcIixcIkltcG9ydGFudFwiLFwiSW1wb3J0TWlycm9yZWRcIixcIkluYm94XCIsXCJJbmJveENoZWNrXCIsXCJJbmNpZGVudFRyaWFuZ2xlXCIsXCJJbmNyZWFzZUluZGVudExlZ2FjeVwiLFwiSW5mb1wiLFwiSW5mbzJcIixcIkluZm9Tb2xpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5zZXJ0VGV4dEJveFwiLFwiSW5zdGFsbFRvRHJpdmVcIixcIkludGVybmV0U2hhcmluZ1wiLFwiSVJNRm9yd2FyZFwiLFwiSVJNRm9yd2FyZE1pcnJvcmVkXCIsXCJJUk1SZXBseVwiLFwiSVJNUmVwbHlNaXJyb3JlZFwiLFwiSXNzdWVTb2xpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSXNzdWVUcmFja2luZ1wiLFwiSXNzdWVUcmFja2luZ01pcnJvcmVkXCIsXCJJdGFsaWNcIixcIkphdmFTY3JpcHRMYW5ndWFnZVwiLFwiSm9pbk9ubGluZU1lZXRpbmdcIixcIkpTXCIsXCJLYWl6YWxhTG9nb1wiLFwiTGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxhZHlidWdTb2xpZFwiLFwiTGFtcFwiLFwiTGFuZHNjYXBlT3JpZW50YXRpb25cIixcIkxhcHRvcFNlY3VyZVwiLFwiTGFwdG9wU2VsZWN0ZWRcIixcIkxhcmdlR3JpZFwiLFwiTGlicmFyeVwiLFwiTGlmZXNhdmVyXCIsXCJMaWZlc2F2ZXJMb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMaWdodFwiLFwiTGlnaHRidWxiXCIsXCJMaWdodG5pbmdCb2x0XCIsXCJMaWdodFdlaWdodFwiLFwiTGlrZVwiLFwiTGlrZVNvbGlkXCIsXCJMaW5lXCIsXCJMaW5lQ2hhcnRcIixcIkxpbmVTcGFjaW5nXCIsXCJMaW5lU3R5bGVcIixcIkxpbmVUaGlja25lc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkxpbmtcIixcIkxpbmtlZEluTG9nb1wiLFwiTGlzdFwiLFwiTGlzdE1pcnJvcmVkXCIsXCJMb2NhbGVMYW5ndWFnZVwiLFwiTG9jYXRpb25cIixcIkxvY2F0aW9uQ2lyY2xlXCIsXCJMb2NhdGlvbkRvdFwiLFwiTG9jYXRpb25GaWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJMb2NhdGlvbk91dGxpbmVcIixcIkxvY2tcIixcIkxvY2tTb2xpZFwiLFwiTG9nUmVtb3ZlXCIsXCJMb3dlckJyaWdodG5lc3NcIixcIkx5bmNMb2dvXCIsXCJNYWlsXCIsXCJNYWlsQWxlcnRcIixcIk1haWxDaGVja1wiLFwiTWFpbEZpbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1haWxGb3J3YXJkXCIsXCJNYWlsRm9yd2FyZE1pcnJvcmVkXCIsXCJNYWlsTG93SW1wb3J0YW5jZVwiLFwiTWFpbFBhdXNlXCIsXCJNYWlsUmVtaW5kZXJcIixcIk1haWxSZXBlYXRcIixcIk1haWxSZXBseVwiLFwiTWFpbFJlcGx5QWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNYWlsUmVwbHlBbGxNaXJyb3JlZFwiLFwiTWFpbFJlcGx5TWlycm9yZWRcIixcIk1haWxTb2xpZFwiLFwiTWFpbFRlbnRhdGl2ZVwiLFwiTWFpbFRlbnRhdGl2ZU1pcnJvcmVkXCIsXCJNYWlsVW5kZWxpdmVyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1hbmFnZXJTZWxmU2VydmljZVwiLFwiTWFwRGlyZWN0aW9uc1wiLFwiTWFwUGluXCIsXCJNYXBQaW5Tb2xpZFwiLFwiTWFya0Rvd25MYW5ndWFnZVwiLFwiTWFya2V0XCIsXCJNYXJrZXREb3duXCIsXCJNZWRhbFwiLFwiTWVkaWFBZGRcIixcIk1lZGljYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1lZ2FwaG9uZVwiLFwiTWVnYXBob25lU29saWRcIixcIk1lbW9cIixcIk1lcmdlXCIsXCJNZXJnZUR1cGxpY2F0ZVwiLFwiTWVzc2FnZVwiLFwiTWVzc2FnZUZpbGxcIixcIk1pY09mZlwiLFwiTWljcm9waG9uZVwiLFwiTWljcm9zb2Z0Rmxvd0xvZ29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1pY3Jvc29mdFN0YWZmaHViTG9nb1wiLFwiTWluaUNvbnRyYWN0XCIsXCJNaW5pRXhwYW5kXCIsXCJNaW5pTGlua1wiLFwiTW9iaWxlUmVwb3J0XCIsXCJNb2JpbGVTZWxlY3RlZFwiLFwiTW9uZXlcIixcIk1vcmVcIixcIk1vcmVTcG9ydHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1vcmVWZXJ0aWNhbFwiLFwiTW92ZVwiLFwiTW92ZXJzXCIsXCJNb3ZlVG9Gb2xkZXJcIixcIk1TTkxvZ29cIixcIk1TTlZpZGVvc1wiLFwiTVNOVmlkZW9zU29saWRcIixcIk1UTUxvZ29cIixcIk11bHRpU2VsZWN0XCIsXCJNdWx0aVNlbGVjdE1pcnJvcmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNdXNpY0luQ29sbGVjdGlvblwiLFwiTXVzaWNJbkNvbGxlY3Rpb25GaWxsXCIsXCJNdXNpY05vdGVcIixcIk15TW92aWVzVFZcIixcIk5hdjJETWFwVmlld1wiLFwiTmF2aWdhdGVCYWNrXCIsXCJOYXZpZ2F0ZUJhY2tNaXJyb3JlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTmF2aWdhdGVFeHRlcm5hbElubGluZVwiLFwiTmF2aWdhdGVGb3J3YXJkXCIsXCJOYXZpZ2F0ZUZvcndhcmRNaXJyb3JlZFwiLFwiTmF2aWdhdGlvbkZsaXBwZXJcIixcIk5ldHdvcmtUb3dlclwiLFwiTmV3QW5hbHl0aWNzUXVlcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk5ld0ZvbGRlclwiLFwiTmV3c1wiLFwiTmV3c1NlYXJjaFwiLFwiTmV3VGVhbVByb2plY3RcIixcIk5leHRcIixcIk5vbnByb2ZpdExvZ28zMlwiLFwiTm9ybWFsV2VpZ2h0XCIsXCJOb3RlRm9yd2FyZFwiLFwiTm90ZVBpbm5lZFwiLFwiTm90ZVJlcGx5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJOb3RFeGVjdXRlZFwiLFwiTm90SW1wYWN0ZWRTb2xpZFwiLFwiTnVnZXRMb2dvXCIsXCJOdW1iZXJlZExpc3RcIixcIk51bWJlckZpZWxkXCIsXCJOdW1iZXJTZXF1ZW5jZVwiLFwiT2N0YWdvblwiLFwiT0VNXCIsXCJPZmZpY2VBZGRpbnNMb2dvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPZmZpY2VBc3Npc3RhbnRMb2dvXCIsXCJPZmZpY2VGb3Jtc0xvZ29cIixcIk9mZmljZUZvcm1zTG9nbzE2XCIsXCJPZmZpY2VGb3Jtc0xvZ28yNFwiLFwiT2ZmaWNlRm9ybXNMb2dvRmlsbFwiLFwiT2ZmaWNlRm9ybXNMb2dvRmlsbDE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPZmZpY2VGb3Jtc0xvZ29GaWxsMjRcIixcIk9mZmljZUZvcm1zTG9nb0ludmVyc2VcIixcIk9mZmljZUZvcm1zTG9nb0ludmVyc2UxNlwiLFwiT2ZmaWNlRm9ybXNMb2dvSW52ZXJzZTI0XCIsXCJPZmZpY2VMb2dvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPZmZpY2VTdG9yZUxvZ29cIixcIk9mZmljZVZpZGVvTG9nb1wiLFwiT2ZmaWNlVmlkZW9Mb2dvRmlsbFwiLFwiT2ZmaWNlVmlkZW9Mb2dvSW52ZXJzZVwiLFwiT2ZmbGluZU9uZURyaXZlUGFyYWNodXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPZmZsaW5lT25lRHJpdmVQYXJhY2h1dGVEaXNhYmxlZFwiLFwiT2ZmbGluZVN0b3JhZ2VTb2xpZFwiLFwiT25lRHJpdmVcIixcIk9uZURyaXZlQWRkXCIsXCJPbmVEcml2ZUZvbGRlcjE2XCIsXCJPbmVOb3RlRWR1TG9nb0ludmVyc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk9uZU5vdGVMb2dvXCIsXCJPbmVOb3RlTG9nbzE2XCIsXCJPbmVOb3RlTG9nb0ZpbGxcIixcIk9uZU5vdGVMb2dvRmlsbDE2XCIsXCJPbmVOb3RlTG9nb0ludmVyc2VcIixcIk9uZU5vdGVMb2dvSW52ZXJzZTE2XCIsXCJPcGVuRmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiT3BlbkZvbGRlckhvcml6b250YWxcIixcIk9wZW5Jbk5ld1dpbmRvd1wiLFwiT3BlblBhbmVcIixcIk9wZW5QYW5lTWlycm9yZWRcIixcIk9wZW5Tb3VyY2VcIixcIk9yZ1wiLFwiT3JpZW50YXRpb25cIixcIk91dGxvb2tMb2dvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJPdXRsb29rTG9nbzE2XCIsXCJPdXRsb29rTG9nb0ZpbGxcIixcIk91dGxvb2tMb2dvRmlsbDE2XCIsXCJPdXRsb29rTG9nb0ludmVyc2VcIixcIk91dGxvb2tMb2dvSW52ZXJzZTE2XCIsXCJPdXRPZk9mZmljZVwiLFwiUGFja2FnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUGFja2FnZXNcIixcIlBhZGRpbmdcIixcIlBhZGRpbmdCb3R0b21cIixcIlBhZGRpbmdMZWZ0XCIsXCJQYWRkaW5nUmlnaHRcIixcIlBhZGRpbmdUb3BcIixcIlBhZ2VcIixcIlBhZ2VBZGRcIixcIlBhZ2VDaGVja2VkaW5cIixcIlBhZ2VDaGVja2VkT3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQYWdlRWRpdFwiLFwiUGFnZUxlZnRcIixcIlBhZ2VMaXN0TWlycm9yZWRTb2xpZFwiLFwiUGFnZUxpc3RTb2xpZFwiLFwiUGFnZUxvY2tcIixcIlBhZ2VSZW1vdmVcIixcIlBhZ2VSaWdodFwiLFwiUGFnZVNvbGlkXCIsXCJQYW5vSW5kaWNhdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQYXJhY2h1dGVcIixcIlBhcmFjaHV0ZVNvbGlkXCIsXCJQYXJhbWV0ZXJcIixcIlBhcmtpbmdMb2NhdGlvblwiLFwiUGFya2luZ0xvY2F0aW9uTWlycm9yZWRcIixcIlBhcmtpbmdNaXJyb3JlZFNvbGlkXCIsXCJQYXJraW5nU29saWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBhcnRseUNsb3VkeURheVwiLFwiUGFydGx5Q2xvdWR5TmlnaHRcIixcIlBhcnR5TGVhZGVyXCIsXCJQYXN0ZVwiLFwiUGF1c2VcIixcIlBheW1lbnRDYXJkXCIsXCJQQzFcIixcIlBERlwiLFwiUGVuY2lsUmVwbHlcIixcIlBlbnRhZ29uXCIsXCJQZW9wbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBlb3BsZUFkZFwiLFwiUGVvcGxlQWxlcnRcIixcIlBlb3BsZUJsb2NrXCIsXCJQZW9wbGVQYXVzZVwiLFwiUGVvcGxlUmVwZWF0XCIsXCJQZXJtaXNzaW9uc1wiLFwiUGVybWlzc2lvbnNTb2xpZFwiLFwiUGVyc29uYWxpemVcIixcIlBob25lXCIsXCJQaG90bzJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBob3RvMkFkZFwiLFwiUGhvdG8yUmVtb3ZlXCIsXCJQaG90b0NvbGxlY3Rpb25cIixcIlBpY3R1cmVcIixcIlBpY3R1cmVDZW50ZXJcIixcIlBpY3R1cmVGaWxsXCIsXCJQaWN0dXJlTGlicmFyeVwiLFwiUGljdHVyZVBvc2l0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQaWN0dXJlU3RyZXRjaFwiLFwiUGljdHVyZVRpbGVcIixcIlBpZURvdWJsZVwiLFwiUGllU2luZ2xlXCIsXCJQaWVTaW5nbGVTb2xpZFwiLFwiUGlsbFwiLFwiUGluXCIsXCJQaW5uZWRcIixcIlBpbm5lZEZpbGxcIixcIlBpdm90Q2hhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBsYW5uZXJMb2dvXCIsXCJQbGFuVmlld1wiLFwiUGxheVwiLFwiUGxheWVyU2V0dGluZ3NcIixcIlBsYXlSZXN1bWVcIixcIlBsdWdcIixcIlBsdWdDb25uZWN0ZWRcIixcIlBsdWdEaXNjb25uZWN0ZWRcIixcIlBsdWdTb2xpZFwiLFwiUE9JXCIsXCJQT0lTb2xpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUG9zdFVwZGF0ZVwiLFwiUG93ZXJBcHBzXCIsXCJQb3dlckFwcHMyTG9nb1wiLFwiUG93ZXJBcHBzTG9nb1wiLFwiUG93ZXJCSUxvZ29cIixcIlBvd2VyUG9pbnREb2N1bWVudFwiLFwiUG93ZXJQb2ludExvZ29cIixcIlBvd2VyUG9pbnRMb2dvMTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBvd2VyUG9pbnRMb2dvRmlsbFwiLFwiUG93ZXJQb2ludExvZ29GaWxsMTZcIixcIlBvd2VyUG9pbnRMb2dvSW52ZXJzZVwiLFwiUG93ZXJQb2ludExvZ29JbnZlcnNlMTZcIixcIlByZWNpcGl0YXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlByZXNlbmNlQ2hpY2tsZXRWaWRlb1wiLFwiUHJldmlld1wiLFwiUHJldmlld0xpbmtcIixcIlByZXZpb3VzXCIsXCJQcmltYXJ5Q2FsZW5kYXJcIixcIlByaW50XCIsXCJQcmludGZheFByaW50ZXJGaWxlXCIsXCJQcm9jZXNzaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQcm9jZXNzTWV0YVRhc2tcIixcIlByb2R1Y3RcIixcIlByb2ZpbGVTZWFyY2hcIixcIlByb0Zvb3RiYWxsXCIsXCJQcm9ncmVzc0xvb3BJbm5lclwiLFwiUHJvZ3Jlc3NMb29wT3V0ZXJcIixcIlByb2dyZXNzUmluZ0RvdHNcIixcIlByb0hvY2tleVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUHJvamVjdENvbGxlY3Rpb25cIixcIlByb2plY3RMb2dvMTZcIixcIlByb2plY3RMb2dvMzJcIixcIlByb2plY3RMb2dvRmlsbDE2XCIsXCJQcm9qZWN0TG9nb0ZpbGwzMlwiLFwiUHJvamVjdExvZ29JbnZlcnNlXCIsXCJQcm90ZWN0ZWREb2N1bWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUHJvdGVjdGlvbkNlbnRlckxvZ28zMlwiLFwiUHJvdGVjdFJlc3RyaWN0XCIsXCJQdWJsaWNDYWxlbmRhclwiLFwiUHVibGljQ29udGFjdENhcmRcIixcIlB1YmxpY0NvbnRhY3RDYXJkTWlycm9yZWRcIixcIlB1YmxpY0VtYWlsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJQdWJsaWNGb2xkZXJcIixcIlB1Ymxpc2hlckxvZ29cIixcIlB1Ymxpc2hlckxvZ28xNlwiLFwiUHVibGlzaGVyTG9nb0ZpbGxcIixcIlB1Ymxpc2hlckxvZ29GaWxsMTZcIixcIlB1Ymxpc2hlckxvZ29JbnZlcnNlMTZcIixcIlB1enpsZVwiLFwiUFlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlB5dGhvbkxhbmd1YWdlXCIsXCJRdWFydGVyQ2lyY2xlXCIsXCJRdWVyeUxpc3RcIixcIlF1ZXN0aW9ubmFpcmVcIixcIlF1ZXN0aW9ubmFpcmVNaXJyb3JlZFwiLFwiUXVpY2tOb3RlXCIsXCJRdWlja05vdGVTb2xpZFwiLFwiUlwiLFwiUmFkaW9CdG5PZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJhZGlvQnRuT25cIixcIlJhZGlvQnVsbGV0XCIsXCJSYWluXCIsXCJSYWluU2hvd2Vyc0RheVwiLFwiUmFpblNob3dlcnNOaWdodFwiLFwiUmFpblNub3dcIixcIlJhd1NvdXJjZVwiLFwiUmVhZFwiLFwiUmVhZGluZ01vZGVcIixcIlJlYWRpbmdNb2RlU29saWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJlY2VpcHRDaGVja1wiLFwiUmVjZWlwdEZvcndhcmRcIixcIlJlY2VpcHRSZXBseVwiLFwiUmVjZWlwdFRlbnRhdGl2ZVwiLFwiUmVjZWlwdFRlbnRhdGl2ZU1pcnJvcmVkXCIsXCJSZWNlaXB0VW5kZWxpdmVyZWRcIixcIlJlY2VudFwiLFwiUmVjb3JkMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmVjdGFuZ3VsYXJDbGlwcGluZ1wiLFwiUmVjdXJyaW5nRXZlbnRcIixcIlJlY3VycmluZ1Rhc2tcIixcIlJlY3ljbGVCaW5cIixcIlJlZGVwbG95XCIsXCJSZWRFeWVcIixcIlJlZG9cIixcIlJlZnJlc2hcIixcIlJlbWluZGVyR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJlbWluZGVyUGVyc29uXCIsXCJSZW1vdGVcIixcIlJlbW92ZVwiLFwiUmVtb3ZlRXZlbnRcIixcIlJlbW92ZUZpbHRlclwiLFwiUmVtb3ZlTGlua1wiLFwiUmVtb3ZlT2NjdXJyZW5jZVwiLFwiUmVuYW1lXCIsXCJSZW5ld2FsQ3VycmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmVuZXdhbEZ1dHVyZVwiLFwiUmVvcGVuUGFnZXNcIixcIlJlcGFpclwiLFwiUmVwbHlcIixcIlJlcGx5QWxsXCIsXCJSZXBseUFsbEFsdFwiLFwiUmVwbHlBbGxNaXJyb3JlZFwiLFwiUmVwbHlBbHRcIixcIlJlcGx5TWlycm9yZWRcIixcIlJlcG9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJlcG9ydEFkZFwiLFwiUmVwb3J0SGFja2VkXCIsXCJSZXBvcnRMaWJyYXJ5XCIsXCJSZXBvcnRMaWJyYXJ5TWlycm9yZWRcIixcIlJlcG9Tb2xpZFwiLFwiUmV0dXJuVG9TZXNzaW9uXCIsXCJSZXZpZXdSZXF1ZXN0TWlycm9yZWRTb2xpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUmV2aWV3UmVxdWVzdFNvbGlkXCIsXCJSZXZpZXdSZXNwb25zZVNvbGlkXCIsXCJSZXZpZXdTb2xpZFwiLFwiUmV2VG9nZ2xlS2V5XCIsXCJSZXdpbmRcIixcIlJpYmJvblwiLFwiUmliYm9uU29saWRcIixcIlJpZ2h0RG91YmxlUXVvdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlJpZ2h0VHJpYW5nbGVcIixcIlJpbmdlclwiLFwiUmluZ2VyT2ZmXCIsXCJSb2JvdFwiLFwiUm9ja2V0XCIsXCJSb29tXCIsXCJSb3RhdGVcIixcIlJvd3NDaGlsZFwiLFwiUm93c0dyb3VwXCIsXCJSdWdieVwiLFwiUnVubmluZ1wiLFwiU2FkXCIsXCJTYWRTb2xpZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2F2ZVwiLFwiU2F2ZUFsbFwiLFwiU2F2ZUFuZENsb3NlXCIsXCJTYXZlQXNcIixcIlNhdmluZ3NcIixcIlNjYWxlVXBcIixcIlNjaGVkdWxlRXZlbnRBY3Rpb25cIixcIlNjb3BlVGVtcGxhdGVcIixcIlNjcmlwdFwiLFwiU2Nyb2xsVXBEb3duXCIsXCJTZWFyY2hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNlYXJjaEFuZEFwcHNcIixcIlNlYXJjaENhbGVuZGFyXCIsXCJTZWFyY2hJc3N1ZVwiLFwiU2VhcmNoSXNzdWVNaXJyb3JlZFwiLFwiU2VjdGlvblwiLFwiU2VjdGlvbnNcIixcIlNlY3VyaXR5R3JvdXBcIixcIlNlbGxcIixcIlNlbWlib2xkV2VpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTZW5kXCIsXCJTZW5kTWlycm9yZWRcIixcIlNlcGFyYXRvclwiLFwiU2VydmVyXCIsXCJTZXJ2ZXJFbnZpcm9tZW50XCIsXCJTZXJ2ZXJQcm9jZXNzZXNcIixcIlNldEFjdGlvblwiLFwiU2V0dGluZ3NcIixcIlNoYXJlXCIsXCJTaGFyZWlPU1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2hhcmVwb2ludExvZ29cIixcIlNoYXJlcG9pbnRMb2dvRmlsbFwiLFwiU2hhcmVwb2ludExvZ29JbnZlcnNlXCIsXCJTaGllbGRcIixcIlNoaWVsZFNvbGlkXCIsXCJTaG9wXCIsXCJTaG9wcGluZ0NhcnRcIixcIlNob3BwaW5nQ2FydFNvbGlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTaG9wU2VydmVyXCIsXCJTaG93UmVzdWx0c1wiLFwiU2hvd1Jlc3VsdHNNaXJyb3JlZFwiLFwiU2lkZVBhbmVsXCIsXCJTaWRlUGFuZWxNaXJyb3JlZFwiLFwiU2lnbk91dFwiLFwiU2luZ2xlQm9va21hcmtcIixcIlNpbmdsZUNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU2luZ2xlQ29sdW1uRWRpdFwiLFwiU0lQTW92ZVwiLFwiU2l0ZVNjYW5cIixcIlNpemVMZWdhY3lcIixcIlNraVJlc29ydHNcIixcIlNreXBlQ2hlY2tcIixcIlNreXBlQ2lyY2xlQ2hlY2tcIixcIlNreXBlQ2lyY2xlQ2xvY2tcIixcIlNreXBlQ2lyY2xlTWludXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNreXBlQ2xvY2tcIixcIlNreXBlRm9yQnVzaW5lc3NMb2dvXCIsXCJTa3lwZUZvckJ1c2luZXNzTG9nbzE2XCIsXCJTa3lwZUZvckJ1c2luZXNzTG9nb0ZpbGxcIixcIlNreXBlRm9yQnVzaW5lc3NMb2dvRmlsbDE2XCIsXCJTa3lwZUxvZ29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNreXBlTG9nbzE2XCIsXCJTa3lwZU1lc3NhZ2VcIixcIlNreXBlTWludXNcIixcIlNsaWRlclwiLFwiU2xpZGVySGFuZGxlU2l6ZVwiLFwiU2xpZGVyVGh1bWJcIixcIlNub296ZVwiLFwiU25vd1wiLFwiU25vd2ZsYWtlXCIsXCJTbm93U2hvd2VyRGF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTbm93U2hvd2VyTmlnaHRcIixcIlNvY2NlclwiLFwiU29jaWFsTGlzdGVuaW5nTG9nb1wiLFwiU29ydFwiLFwiU29ydERvd25cIixcIlNvcnRMaW5lc1wiLFwiU29ydFVwXCIsXCJTcGFjZXJcIixcIlNwZWFrZXJzXCIsXCJTcGVlZEhpZ2hcIixcIlNwbGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTcGxpdE9iamVjdFwiLFwiU3ByaW50XCIsXCJTcXVhbGxzXCIsXCJTdGFja1wiLFwiU3RhY2tlZEJhckNoYXJ0XCIsXCJTdGFja2VkTGluZUNoYXJ0XCIsXCJTdGFja0luZGljYXRvclwiLFwiU3RhZmZOb3RlYm9va0xvZ28xNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhZmZOb3RlYm9va0xvZ28zMlwiLFwiU3RhZmZOb3RlYm9va0xvZ29GaWxsMTZcIixcIlN0YWZmTm90ZWJvb2tMb2dvRmlsbDMyXCIsXCJTdGFmZk5vdGVib29rTG9nb0ludmVydGVkMTZcIixcIlN0YWZmTm90ZWJvb2tMb2dvSW52ZXJ0ZWQzMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiU3RhcmJ1cnN0XCIsXCJTdGFyYnVyc3RTb2xpZFwiLFwiU3RhdHVzQ2lyY2xlQ2hlY2ttYXJrXCIsXCJTdGF0dXNDaXJjbGVJbm5lclwiLFwiU3RhdHVzQ2lyY2xlT3V0ZXJcIixcIlN0YXR1c0Vycm9yRnVsbFwiLFwiU3RhdHVzVHJpYW5nbGVcIixcIlN0ZXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN0ZXBJbnNlcnRcIixcIlN0ZXBTaGFyZWRcIixcIlN0ZXBTaGFyZWRBZGRcIixcIlN0ZXBTaGFyZWRJbnNlcnRcIixcIlN0b2NrRG93blwiLFwiU3RvY2tVcFwiLFwiU3RvcFwiLFwiU3RvcFNvbGlkXCIsXCJTdG9wd2F0Y2hcIixcIlN0b3JlTG9nbzE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTdG9yZUxvZ29NZWQyMFwiLFwiU3Rvcnlib2FyZFwiLFwiU3RyZWFtaW5nXCIsXCJTdHJlYW1pbmdPZmZcIixcIlN0cmVhbUxvZ29cIixcIlN0cmlrZXRocm91Z2hcIixcIlN1YnNjcmliZVwiLFwiU3Vic2NyaXB0XCIsXCJTdWJzdGl0dXRpb25zSW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlN1aXRjYXNlXCIsXCJTdW5BZGRcIixcIlN1bm55XCIsXCJTdW5RdWVzdGlvbk1hcmtcIixcIlN1cGVyc2NyaXB0XCIsXCJTdXJ2ZXlRdWVzdGlvbnNcIixcIlN3YXlMb2dvMTZcIixcIlN3YXlMb2dvMzJcIixcIlN3YXlMb2dvRmlsbDE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTd2F5TG9nb0ZpbGwzMlwiLFwiU3dheUxvZ29JbnZlcnNlXCIsXCJTd2l0Y2hcIixcIlN3aXRjaGVyU3RhcnRFbmRcIixcIlN5bmNcIixcIlN5bmNGb2xkZXJcIixcIlN5bmNPY2N1cmVuY2VcIixcIlN5bmNUb1BDXCIsXCJTeXN0ZW1cIixcIlRhYlwiLFwiVGFibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRhYmxldFwiLFwiVGFibGV0TW9kZVwiLFwiVGFibGV0U2VsZWN0ZWRcIixcIlRhZ1wiLFwiVGFza2JvYXJkXCIsXCJUYXNrR3JvdXBcIixcIlRhc2tHcm91cE1pcnJvcmVkXCIsXCJUYXNrTG9nb1wiLFwiVGFza01hbmFnZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRhc2tNYW5hZ2VyTWlycm9yZWRcIixcIlRhc2tTb2xpZFwiLFwiVGF4aVwiLFwiVGVhbUZhdm9yaXRlXCIsXCJUZWFtc0xvZ29cIixcIlRlYW1zTG9nb0ZpbGxcIixcIlRlYW1zTG9nb0ludmVyc2VcIixcIlRlYW13b3JrXCIsXCJUZWV0aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGVtcG9yYXJ5VXNlclwiLFwiVGVubmlzXCIsXCJUZXN0QXV0b1NvbGlkXCIsXCJUZXN0QmVha2VyXCIsXCJUZXN0QmVha2VyU29saWRcIixcIlRlc3RDYXNlXCIsXCJUZXN0RXhwbG9yZVNvbGlkXCIsXCJUZXN0SW1wYWN0U29saWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRlc3RQYXJhbWV0ZXJcIixcIlRlc3RQbGFuXCIsXCJUZXN0U3RlcFwiLFwiVGVzdFN1aXRlXCIsXCJUZXN0VXNlclNvbGlkXCIsXCJUZXh0Qm94XCIsXCJUZXh0Q2FsbG91dFwiLFwiVGV4dERvY3VtZW50XCIsXCJUZXh0RmllbGRcIixcIlRleHRPdmVyZmxvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVEZWQ0xvZ29cIixcIlRoaXNQQ1wiLFwiVGhyZWVRdWFydGVyQ2lyY2xlXCIsXCJUaHVtYm5haWxWaWV3XCIsXCJUaHVtYm5haWxWaWV3TWlycm9yZWRcIixcIlRodW5kZXJzdG9ybXNcIixcIlRpY2tldFwiLFwiVGlsZXNcIixcIlRpbGVzMlwiLFwiVGltZUVudHJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUaW1lbGluZVwiLFwiVGltZWxpbmVEZWxpdmVyeVwiLFwiVGltZWxpbmVNYXRyaXhWaWV3XCIsXCJUaW1lbGluZVByb2dyZXNzXCIsXCJUaW1lclwiLFwiVGltZVNoZWV0XCIsXCJUb0RvTG9nb0JvdHRvbVwiLFwiVG9Eb0xvZ29JbnZlcnNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUb0RvTG9nb1RvcFwiLFwiVG9nZ2xlQm9yZGVyXCIsXCJUb2dnbGVGaWxsZWRcIixcIlRvZ2dsZU9mZlwiLFwiVG9nZ2xlVGh1bWJcIixcIlRvdWNoXCIsXCJUb3VjaFBvaW50ZXJcIixcIlRyYWluXCIsXCJUcmFpblNvbGlkXCIsXCJUcmFuc2ZlckNhbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRyYW5zaXRpb25cIixcIlRyaWFuZ2xlRG93bjEyXCIsXCJUcmlhbmdsZUxlZnQxMlwiLFwiVHJpYW5nbGVSaWdodDEyXCIsXCJUcmlhbmdsZVNvbGlkXCIsXCJUcmlhbmdsZVNvbGlkRG93bjEyXCIsXCJUcmlhbmdsZVNvbGlkTGVmdDEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUcmlhbmdsZVNvbGlkUmlnaHQxMlwiLFwiVHJpYW5nbGVTb2xpZFVwMTJcIixcIlRyaWFuZ2xlVXAxMlwiLFwiVHJpZ2dlckFwcHJvdmFsXCIsXCJUcmlnZ2VyQXV0b1wiLFwiVHJpZ2dlclVzZXJcIixcIlRyaXBsZUNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVHJpcGxlQ29sdW1uRWRpdFwiLFwiVHJvcGh5XCIsXCJUcm9waHkyXCIsXCJUcm9waHkyU29saWRcIixcIlR1cm5SaWdodFwiLFwiVFZNb25pdG9yXCIsXCJUVk1vbml0b3JTZWxlY3RlZFwiLFwiVHlwZVNjcmlwdExhbmd1YWdlXCIsXCJVbWJyZWxsYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVW5kZXJsaW5lXCIsXCJVbmRvXCIsXCJVbmVkaXRhYmxlXCIsXCJVbmVkaXRhYmxlTWlycm9yZWRcIixcIlVuZWRpdGFibGVTb2xpZDEyXCIsXCJVbmVkaXRhYmxlU29saWRNaXJyb3JlZDEyXCIsXCJVbmZhdm9yaXRlXCIsXCJVbmdyb3VwT2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVbmtub3duXCIsXCJVbmtub3duQ2FsbFwiLFwiVW5rbm93bk1pcnJvcmVkXCIsXCJVbmtub3duTWlycm9yZWRTb2xpZFwiLFwiVW5rbm93blNvbGlkXCIsXCJVbmxvY2tcIixcIlVubG9ja1NvbGlkXCIsXCJVbnBpblwiLFwiVW5zdWJzY3JpYmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlVuc3luY0ZvbGRlclwiLFwiVW5zeW5jT2NjdXJlbmNlXCIsXCJVcFwiLFwiVXBsb2FkXCIsXCJVc2VyRm9sbG93ZWRcIixcIlVzZXJQYXVzZVwiLFwiVXNlclN5bmNcIixcIlZhY2F0aW9uXCIsXCJWYXJpYWJsZVwiLFwiVmFyaWFibGVHcm91cFwiLFwiVkJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZlbm5EaWFncmFtXCIsXCJWZXJ0aWNhbERpc3RyaWJ1dGVDZW50ZXJcIixcIlZpZGVvXCIsXCJWaWRlb09mZlwiLFwiVmlkZW9TZWFyY2hcIixcIlZpZGVvU29saWRcIixcIlZpZXdcIixcIlZpZXdBbGxcIixcIlZpZXdBbGwyXCIsXCJWaWV3RGFzaGJvYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJWaWV3TGlzdFwiLFwiVmlld0xpc3RHcm91cFwiLFwiVmlld0xpc3RUcmVlXCIsXCJWaXNpb0RpYWdyYW1cIixcIlZpc2lvRG9jdW1lbnRcIixcIlZpc2lvTG9nb1wiLFwiVmlzaW9Mb2dvMTZcIixcIlZpc2lvTG9nb0ZpbGxcIixcIlZpc2lvTG9nb0ZpbGwxNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVmlzaW9Mb2dvSW52ZXJzZVwiLFwiVmlzaW9Mb2dvSW52ZXJzZTE2XCIsXCJWaXN1YWxCYXNpY0xhbmd1YWdlXCIsXCJWaXN1YWxzRm9sZGVyXCIsXCJWaXN1YWxzU3RvcmVcIixcIlZpc3VhbFN0dWRpb0xvZ29cIixcIlZvaWNlbWFpbEZvcndhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlZvaWNlbWFpbElSTVwiLFwiVm9pY2VtYWlsUmVwbHlcIixcIlZvbHVtZTBcIixcIlZvbHVtZTFcIixcIlZvbHVtZTJcIixcIlZvbHVtZTNcIixcIlZvbHVtZURpc2FibGVkXCIsXCJWU1RTQWx0TG9nbzFcIixcIlZTVFNBbHRMb2dvMlwiLFwiVlNUU0xvZ29cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldhZmZsZVwiLFwiV2FmZmxlT2ZmaWNlMzY1XCIsXCJXYWl0bGlzdENvbmZpcm1cIixcIldhaXRsaXN0Q29uZmlybU1pcnJvcmVkXCIsXCJXYXJuaW5nXCIsXCJXZWJQdWJsaXNoXCIsXCJXZWJzaXRlXCIsXCJXZWlnaHRzXCIsXCJXaWZpRXRoZXJuZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldpbmREaXJlY3Rpb25cIixcIldpbmRvd0VkaXRcIixcIldpbmRvd3NMb2dvXCIsXCJXaW5lc1wiLFwiV2lwZVBob25lXCIsXCJXb3JkRG9jdW1lbnRcIixcIldvcmRMb2dvXCIsXCJXb3JkTG9nbzE2XCIsXCJXb3JkTG9nb0ZpbGxcIixcIldvcmRMb2dvRmlsbDE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJXb3JkTG9nb0ludmVyc2VcIixcIldvcmRMb2dvSW52ZXJzZTE2XCIsXCJXb3JrXCIsXCJXb3JrRmxvd1wiLFwiV29ya2ZvcmNlTWFuYWdlbWVudFwiLFwiV29ya0l0ZW1cIixcIldvcmtJdGVtQmFyXCIsXCJXb3JrSXRlbUJhclNvbGlkXCIsXCJXb3JrSXRlbUJ1Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiV29ybGRcIixcIldvcmxkQ2xvY2tcIixcIllhbW1lckxvZ29cIixcIlppcEZvbGRlclwiLFwiWm9vbVwiLFwiWm9vbUluXCIsXCJab29tT3V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJlbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXNjcmlwdGlvblwiOiBcIlNwZWNpZmllcyB0aGUgcmVsYXRpb25zaGlwIGJldHdlZW4gdGhlIGN1cnJlbnQgZG9jdW1lbnQgYW5kIHRoZSBsaW5rZWQgZG9jdW1lbnQsIHVzZWQgcHJpbWFyaWx5IGZvciA8YT4gZWxlbWVudCB0eXBlcy5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leHByZXNzaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlbnVtXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsdGVybmF0ZVwiLFwiYXV0aG9yXCIsXCJib29rbWFya1wiLFwiZXh0ZXJuYWxcIixcImhlbHBcIixcImxpY2Vuc2VcIixcIm5leHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5vZm9sbG93XCIsXCJub3JlZmVycmVyXCIsXCJub29wZW5lclwiLFwicHJldlwiLFwic2VhcmNoXCIsXCJ0YWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJTcGVjaWZpZWQgZXh0cmEgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGVsZW1lbnQsIGdlbmVyYWxseSBzaG93biBhcyB0b29sdGlwIHRleHQgb24gZWxlbWVudCBob3Zlci5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9leHByZXNzaW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9maWVsZFZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIl5hcmlhXFxcXC1bYS16XSskXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlY2lmaWVzIGFyaWEtIGF0dHJpYnV0ZXMgZm9yIHRoZSBlbGVtZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZXhwcmVzc2lvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZXF1aXJlZFwiOiBbXG4gICAgICAgICAgICAgICAgXCJlbG1UeXBlXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJleHByZXNzaW9uT3JTdHJpbmdcIjoge1xuICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4cHJlc3Npb25cIiB9LFxuICAgICAgICAgICAgICAgIHsgXCJ0eXBlXCI6IFwic3RyaW5nXCIgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcInN0eWxlQmFzaWNcIjoge1xuICAgICAgICAgICAgXCJhbGxPZlwiOiBbeyBcImVudW1cIjogWyBcImluaXRpYWxcIixcImluaGVyaXRcIixcInVuc2V0XCIgXSB9XVxuICAgICAgICB9LFxuICAgICAgICBcInN0eWxlU3RhbmRhcmRcIjoge1xuICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4cHJlc3Npb25PclN0cmluZ1wiIH0sXG4gICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlQmFzaWNcIiB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwic3R5bGVTdHJpY3RcIjoge1xuICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL2V4cHJlc3Npb25cIiB9LFxuICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZUJhc2ljXCIgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcInN0eWxlQm9yZGVyU3R5bGVcIjoge1xuICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RyaWN0XCIgfSxcbiAgICAgICAgICAgICAgICB7IFwiZW51bVwiOiBbIFwibm9uZVwiLFwiaGlkZGVuXCIsXCJkb3R0ZWRcIixcImRhc2hlZFwiLFwic29saWRcIixcImRvdWJsZVwiLFwiZ3Jvb3ZlXCIsXCJyaWRnZVwiLFwiaW5zZXRcIixcIm91dHNldFwiIF0gfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcInN0eWxlQm9yZGVyV2lkdGhcIjoge1xuICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRcIiB9LFx0XHRcdFx0XG4gICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcIm1lZGl1bVwiLFwidGhpblwiLFwidGhpY2tcIiBdIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdHlsZU92ZXJmbG93XCI6IHtcbiAgICAgICAgICAgIFwiYW55T2ZcIjogW1xuICAgICAgICAgICAgICAgIHsgXCIkcmVmXCI6IFwiIy9kZWZpbml0aW9ucy9zdHlsZVN0cmljdFwiIH0sXG4gICAgICAgICAgICAgICAgeyBcImVudW1cIjogWyBcInZpc2libGVcIixcImhpZGRlblwiLFwic2Nyb2xsXCIsXCJhdXRvXCIgXSB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwic3R5bGVTdGFuZGFyZEF1dG9cIjoge1xuICAgICAgICAgICAgXCJhbnlPZlwiOiBbXG4gICAgICAgICAgICAgICAgeyBcIiRyZWZcIjogXCIjL2RlZmluaXRpb25zL3N0eWxlU3RhbmRhcmRcIiB9LFxuICAgICAgICAgICAgICAgIHsgXCJlbnVtXCI6IFsgXCJhdXRvXCIgXSB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwic3R5bGVDb2xvclwiOiB7XG4gICAgICAgICAgICBcImFueU9mXCI6IFtcbiAgICAgICAgICAgICAgICB7IFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvc3R5bGVTdGFuZGFyZFwiIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBcImVudW1cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0cmFuc3BhcmVudFwiLFwiY3VycmVudENvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFxdWFcIixcImJsYWNrXCIsXCJibHVlXCIsXCJmdWNoc2lhXCIsXCJncmF5XCIsXCJncmVlblwiLFwibGltZVwiLFwibWFyb29uXCIsXCJuYXZ5XCIsXCJvbGl2ZVwiLFwicHVycGxlXCIsXCJyZWRcIixcInNpbHZlclwiLFwidGVhbFwiLFwid2hpdGVcIixcInllbGxvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhbGljZWJsdWVcIixcImFudGlxdWV3aGl0ZVwiLFwiYXF1YW1hcmluZVwiLFwiYXp1cmVcIixcImJlaWdlXCIsXCJiaXNxdWVcIixcImJsYW5jaGVkYWxtb25kXCIsXCJibHVldmlvbGV0XCIsXCJicm93blwiLFwiYnVybHl3b29kXCIsXCJjYWRldGJsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhcnRyZXVzZVwiLFwiY2hvY29sYXRlXCIsXCJjb3JhbFwiLFwiY29ybmZsb3dlcmJsdWVcIixcImNvcm5zaWxrXCIsXCJjcmltc29uXCIsXCJjeWFuXCIsXCJkYXJrYmx1ZVwiLFwiZGFya2N5YW5cIixcImRhcmtnb2xkZW5yb2RcIixcImRhcmtncmF5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRhcmtncmVlblwiLFwiZGFya2toYWtpXCIsXCJkYXJrbWFnZW50YVwiLFwiZGFya29saXZlZ3JlZW5cIixcImRhcmtvcmFuZ2VcIixcImRhcmtvcmNoaWRcIixcImRhcmtyZWRcIixcImRhcmtzYWxtb25cIixcImRhcmtzZWFncmVlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXJrc2xhdGVibHVlXCIsXCJkYXJrc2xhdGVncmF5XCIsXCJkYXJrdHVycXVvaXNlXCIsXCJkYXJrdmlvbGV0XCIsXCJkZWVwcGlua1wiLFwiZGVlcHNreWJsdWVcIixcImRpbWdyYXlcIixcImRvZGdlcmJsdWVcIixcImZpcmVicmlja1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmbG9yYWx3aGl0ZVwiLFwiZm9yZXN0Z3JlZW5cIixcImdhaW5zYm9yb1wiLFwiZ2hvc3R3aGl0ZVwiLFwiZ29sZFwiLFwiZ29sZGVucm9kXCIsXCJncmVlbnllbGxvd1wiLFwiaG9uZXlkZXdcIixcImhvdHBpbmtcIixcImluZGlhbnJlZFwiLFwiaW5kaWdvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml2b3J5XCIsXCJraGFraVwiLFwibGF2ZW5kZXJcIixcImxhdmVuZGVyYmx1c2hcIixcImxhd25ncmVlblwiLFwibGVtb25jaGlmZm9uXCIsXCJsaWdodGJsdWVcIixcImxpZ2h0Y29yYWxcIixcImxpZ2h0Y3lhblwiLFwibGlnaHRnb2xkZW5yb2R5ZWxsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlnaHRncmF5XCIsXCJsaWdodGdyZWVuXCIsXCJsaWdodHBpbmtcIixcImxpZ2h0c2FsbW9uXCIsXCJsaWdodHNlYWdyZWVuXCIsXCJsaWdodHNreWJsdWVcIixcImxpZ2h0c2xhdGVncmF5XCIsXCJsaWdodHN0ZWVsYmx1ZVwiLFwibGlnaHR5ZWxsb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGltZWdyZWVuXCIsXCJsaW5lblwiLFwibWFnZW50YVwiLFwibWVkaXVtYXF1YW1hcmluZVwiLFwibWVkaXVtYmx1ZVwiLFwibWVkaXVtb3JjaGlkXCIsXCJtZWRpdW1wdXJwbGVcIixcIm1lZGl1bXNlYWdyZWVuXCIsXCJtZWRpdW1zbGF0ZWJsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibWVkaXVtc3ByaW5nZ3JlZW5cIixcIm1lZGl1bXR1cnF1b2lzZVwiLFwibWVkaXVtdmlvbGV0cmVkXCIsXCJtaWRuaWdodGJsdWVcIixcIm1pbnRjcmVhbVwiLFwibWlzdHlyb3NlXCIsXCJtb2NjYXNpblwiLFwibmF2YWpvd2hpdGVcIixcIm9sZGxhY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwib2xpdmVkcmFiXCIsXCJvcmFuZ2VcIixcIm9yYW5nZXJlZFwiLFwib3JjaGlkXCIsXCJwYWxlZ29sZGVucm9kXCIsXCJwYWxlZ3JlZW5cIixcInBhbGV0dXJxdW9pc2VcIixcInBhbGV2aW9sZXRyZWRcIixcInBhcGF5YXdoaXBcIixcInBlYWNocHVmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwZXJ1XCIsXCJwaW5rXCIsXCJwbHVtXCIsXCJwb3dkZXJibHVlXCIsXCJyb3N5YnJvd25cIixcInJveWFsYmx1ZVwiLFwic2FkZGxlYnJvd25cIixcInNhbG1vblwiLFwic2FuZHlicm93blwiLFwic2VhZ3JlZW5cIixcInNlYXNoZWxsXCIsXCJzaWVubmFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2t5Ymx1ZVwiLFwic2xhdGVibHVlXCIsXCJzbGF0ZWdyYXlcIixcInNub3dcIixcInNwcmluZ2dyZWVuXCIsXCJzdGVlbGJsdWVcIixcInRhblwiLFwidGhpc3RsZVwiLFwidG9tYXRvXCIsXCJ0dXJxdW9pc2VcIixcInZpb2xldFwiLFwid2hlYXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2hpdGVzbW9rZVwiLFwieWVsbG93Z3JlZW5cIixcInJlYmVjY2FwdXJwbGVcIlxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImZpZWxkVmFsdWVcIjoge1xuICAgICAgICAgICAgXCJhbGxPZlwiOltcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIFwiZW51bVwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkBjdXJyZW50RmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQGN1cnJlbnRGaWVsZC50aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJAY3VycmVudEZpZWxkLmlkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkBjdXJyZW50RmllbGQuZW1haWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQGN1cnJlbnRGaWVsZC5zaXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQGN1cnJlbnRGaWVsZC5waWN0dXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkBjdXJyZW50RmllbGQubG9va3VwVmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQGN1cnJlbnRGaWVsZC5sb29rdXBJZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJAbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQG5vd1wiXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiJHJlZlwiOiBcIiMvZGVmaW5pdGlvbnMvZWxtXCJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==