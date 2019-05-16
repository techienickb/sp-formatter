/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
(() => {
    console.log('running content.js');
    let injected = false;
    let port = chrome.runtime.connect(null, { name: 'tab-column-formatting' });
    port.onMessage.addListener((message, port) => {
        if (message.type === 'refresh_preview') {
            refreshPreview(message);
        }
    });
    function refreshPreview(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('received refresh command');
            if (!injected) {
                injected = true;
                injectCssFile('monaco-editor/dist/external/monaco.css');
                injectScript(`
                window.MonacoEnvironment = {
                    baseUrl: 'chrome-extension://${chrome.runtime.id}/monaco-editor/dist/external',
                };
                console.log('added require.config');
            `);
                /*
                await injectScriptFile('monaco-editor/dev/vs/loader.js');
                await injectScriptFile('monaco-editor/dev/vs/editor/editor.main.nls.js');
                await injectScriptFile('monaco-editor/dev/vs/editor/editor.main.js');
                */
                yield injectScriptFile('js/monaco-build.js');
                yield injectScriptFile('js/exec_script.js');
            }
            executeRefresh(data);
        });
    }
    function executeRefresh(data) {
        window.postMessage({ fieldInternalName: data.fieldInternalName, name: 'column_formatting', type: data.type, jsonFormatting: data.jsonFormatting }, location.origin);
    }
    function injectCssFile(src) {
        let link = document.createElement("link");
        link.href = chrome.runtime.getURL(src);
        ;
        link.type = "text/css";
        link.rel = "stylesheet";
        document.getElementsByTagName("head")[0].appendChild(link);
    }
    function injectScript(code) {
        let scriptElement = document.createElement('script');
        scriptElement.textContent = code;
        (document.head || document.documentElement).appendChild(scriptElement);
        scriptElement.remove();
    }
    function injectScriptFile(src) {
        return new Promise((resolve, reject) => {
            let scriptTag = document.createElement('script');
            scriptTag.src = chrome.runtime.getURL(src);
            scriptTag.onload = function () {
                console.log('loaded!!');
                resolve();
            };
            (document.head || document.documentElement).appendChild(scriptTag);
        });
    }
})();


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRfc2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsQ0FBQyxHQUFHLEVBQUU7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO0lBRXJCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRSxDQUFDLENBQUM7SUFFM0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUU7UUFDekMsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLGlCQUFpQixFQUFFO1lBQ3BDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsU0FBZSxjQUFjLENBQUMsSUFBUzs7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ1gsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFFaEIsYUFBYSxDQUFDLHdDQUF3QyxDQUFDLENBQUM7Z0JBRXhELFlBQVksQ0FBQzs7bURBRTBCLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTs7O2FBR3ZELENBQUMsQ0FBQztnQkFFSDs7OztrQkFJRTtnQkFFRixNQUFNLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQzdDLE1BQU0sZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsQ0FBQzthQUMvQztZQUNELGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDO0tBQUE7SUFFRCxTQUFTLGNBQWMsQ0FBQyxJQUFTO1FBQzdCLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hLLENBQUM7SUFFRCxTQUFTLGFBQWEsQ0FBQyxHQUFXO1FBQzlCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUFBLENBQUM7UUFDeEMsSUFBSSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUM7UUFFeEIsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsU0FBUyxZQUFZLENBQUMsSUFBWTtRQUM5QixJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELGFBQWEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3ZFLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFXO1FBQ2pDLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRCxTQUFTLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTNDLFNBQVMsQ0FBQyxNQUFNLEdBQUc7Z0JBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxFQUFFLENBQUM7WUFDZCxDQUFDLENBQUM7WUFFRixDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7QUFDTCxDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImNvbnRlbnRfc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwiKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdydW5uaW5nIGNvbnRlbnQuanMnKTtcclxuICAgIGxldCBpbmplY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBwb3J0ID0gY2hyb21lLnJ1bnRpbWUuY29ubmVjdChudWxsLCB7IG5hbWU6ICd0YWItY29sdW1uLWZvcm1hdHRpbmcnIH0pO1xyXG5cclxuICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBwb3J0KSA9PiB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ3JlZnJlc2hfcHJldmlldycpIHtcclxuICAgICAgICAgICAgcmVmcmVzaFByZXZpZXcobWVzc2FnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFByZXZpZXcoZGF0YTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY2VpdmVkIHJlZnJlc2ggY29tbWFuZCcpO1xyXG4gICAgICAgIGlmICghaW5qZWN0ZWQpIHtcclxuICAgICAgICAgICAgaW5qZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaW5qZWN0Q3NzRmlsZSgnbW9uYWNvLWVkaXRvci9kaXN0L2V4dGVybmFsL21vbmFjby5jc3MnKTtcclxuXHJcbiAgICAgICAgICAgIGluamVjdFNjcmlwdChgXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuTW9uYWNvRW52aXJvbm1lbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZVVybDogJ2Nocm9tZS1leHRlbnNpb246Ly8ke2Nocm9tZS5ydW50aW1lLmlkfS9tb25hY28tZWRpdG9yL2Rpc3QvZXh0ZXJuYWwnLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGRlZCByZXF1aXJlLmNvbmZpZycpO1xyXG4gICAgICAgICAgICBgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIGF3YWl0IGluamVjdFNjcmlwdEZpbGUoJ21vbmFjby1lZGl0b3IvZGV2L3ZzL2xvYWRlci5qcycpO1xyXG4gICAgICAgICAgICBhd2FpdCBpbmplY3RTY3JpcHRGaWxlKCdtb25hY28tZWRpdG9yL2Rldi92cy9lZGl0b3IvZWRpdG9yLm1haW4ubmxzLmpzJyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGluamVjdFNjcmlwdEZpbGUoJ21vbmFjby1lZGl0b3IvZGV2L3ZzL2VkaXRvci9lZGl0b3IubWFpbi5qcycpO1xyXG4gICAgICAgICAgICAqL1xyXG5cclxuICAgICAgICAgICAgYXdhaXQgaW5qZWN0U2NyaXB0RmlsZSgnanMvbW9uYWNvLWJ1aWxkLmpzJyk7XHJcbiAgICAgICAgICAgIGF3YWl0IGluamVjdFNjcmlwdEZpbGUoJ2pzL2V4ZWNfc2NyaXB0LmpzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4ZWN1dGVSZWZyZXNoKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGV4ZWN1dGVSZWZyZXNoKGRhdGE6IGFueSkge1xyXG4gICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSh7IGZpZWxkSW50ZXJuYWxOYW1lOiBkYXRhLmZpZWxkSW50ZXJuYWxOYW1lLCBuYW1lOiAnY29sdW1uX2Zvcm1hdHRpbmcnLCB0eXBlOiBkYXRhLnR5cGUsIGpzb25Gb3JtYXR0aW5nOiBkYXRhLmpzb25Gb3JtYXR0aW5nIH0sIGxvY2F0aW9uLm9yaWdpbik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5qZWN0Q3NzRmlsZShzcmM6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XHJcbiAgICAgICAgbGluay5ocmVmID0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKHNyYyk7O1xyXG4gICAgICAgIGxpbmsudHlwZSA9IFwidGV4dC9jc3NcIjtcclxuICAgICAgICBsaW5rLnJlbCA9IFwic3R5bGVzaGVldFwiO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5qZWN0U2NyaXB0KGNvZGU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBzY3JpcHRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgc2NyaXB0RWxlbWVudC50ZXh0Q29udGVudCA9IGNvZGU7XHJcbiAgICAgICAgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5hcHBlbmRDaGlsZChzY3JpcHRFbGVtZW50KTtcclxuICAgICAgICBzY3JpcHRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluamVjdFNjcmlwdEZpbGUoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2NyaXB0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgICAgIHNjcmlwdFRhZy5zcmMgPSBjaHJvbWUucnVudGltZS5nZXRVUkwoc3JjKTtcclxuXHJcbiAgICAgICAgICAgIHNjcmlwdFRhZy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9hZGVkISEnKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuYXBwZW5kQ2hpbGQoc2NyaXB0VGFnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSkoKTsiXSwic291cmNlUm9vdCI6IiJ9