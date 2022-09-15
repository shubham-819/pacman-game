// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5UGAA":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "31648ca538661719";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7BQdY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pacpos", ()=>pacpos
);
var _setup = require("./classes/setup");
var _gameBoard = require("./classes/GameBoard");
var _gameBoardDefault = parcelHelpers.interopDefault(_gameBoard);
var _pacman = require("./classes/Pacman");
var _pacmanDefault = parcelHelpers.interopDefault(_pacman);
var _ghostMoves = require("./classes/ghostMoves");
var _ghosts = require("./classes/ghosts");
var _ghostsDefault = parcelHelpers.interopDefault(_ghosts);
//DOM Elements
const gameGrid = document.querySelector("#game");
const scoreBoard = document.querySelector("#score");
const startButton = document.querySelector("#start-button");
var pacpos;
//Game constants
const POWER_PILL_TIME = 10000; //ms
const GLOBAL_SPEED = 70; //ms
const gameBoard = _gameBoardDefault.default.createGameBoard(gameGrid, _setup.LEVEL);
//initital setup
let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;
function gameOver(pacman, grid) {
    document.removeEventListener("keydown", (e)=>pacman.handleKeyInput(e, gameBoard.objectExist)
    );
    gameBoard.showGameStatus(gameWin);
    clearInterval(timer);
    startButton.classList.remove("hide");
}
function checkCollision(pacman, ghost) {
    if (pacman.pos === ghost.pos) {
        if (pacman.powerPill) {
            gameBoard.removeObject(ghost.pos, [
                _setup.OBJECT_TYPE.GHOST,
                _setup.OBJECT_TYPE.SCARED,
                _setup.OBJECT_TYPE.BLINKY, 
            ]);
            ghost.pos = ghost.startPos;
            score += 100;
        } else {
            gameBoard.removeObject(pacman.pos, [
                _setup.OBJECT_TYPE.PACMAN
            ]);
            gameBoard.rotateDiv(pacman.pos, 0);
            gameOver(pacman, gameGrid);
        }
    }
}
function gameLoop(pacman, ghost) {
    gameBoard.moveCharacter(pacman);
    checkCollision(pacman, ghost);
    gameBoard.moveCharacter(ghost, pacman.pos);
    checkCollision(pacman, ghost);
    //Check if Pacman eats a dot
    if (gameBoard.objectExist(pacman.pos, _setup.OBJECT_TYPE.DOT)) {
        gameBoard.removeObject(pacman.pos, [
            _setup.OBJECT_TYPE.DOT
        ]);
        gameBoard.dotCount--;
        score += 10;
    }
    //Check if Pacman eats a powerpill
    if (gameBoard.objectExist(pacman.pos, _setup.OBJECT_TYPE.PILL)) {
        gameBoard.removeObject(pacman.pos, [
            _setup.OBJECT_TYPE.PILL
        ]);
        pacman.powerPill = true;
        score += 50;
        clearTimeout(powerPillTimer);
        powerPillTimer = setTimeout(()=>pacman.powerPill = false
        , POWER_PILL_TIME);
    }
    //Change ghost scare mode depending on Powerpill
    if (pacman.powerPill !== powerPillActive) {
        powerPillActive = pacman.powerPill;
        ghost.isScared = pacman.powerPill;
    }
}
function startGame() {
    gameWin = false;
    powerPillActive = false;
    score = 0;
    startButton.classList.add("hide");
    gameBoard.createGrid(_setup.LEVEL);
    const pacman = new _pacmanDefault.default(2, 287);
    gameBoard.addObject(287, [
        _setup.OBJECT_TYPE.PACMAN
    ]);
    document.addEventListener("keydown", (e)=>{
        //console.log(e);
        pacman.handleKeyInput(e, gameBoard.objectExist);
    });
    const ghost = new _ghostsDefault.default(2, 21, _ghostMoves.BFSMovement, _setup.OBJECT_TYPE.BLINKY);
    timer = setInterval(()=>gameLoop(pacman, ghost)
    , GLOBAL_SPEED);
}
//Initialise the game
startButton.addEventListener("click", startGame);

},{"./classes/setup":"lrQ5F","./classes/GameBoard":"2cX0n","./classes/Pacman":"9Iugh","./classes/ghostMoves":"6vBSH","./classes/ghosts":"foH9Z","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lrQ5F":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GRID_SIZE", ()=>GRID_SIZE
);
parcelHelpers.export(exports, "CELL_SIZE", ()=>CELL_SIZE
);
parcelHelpers.export(exports, "DIRECTIONS", ()=>DIRECTIONS
);
parcelHelpers.export(exports, "OBJECT_TYPE", ()=>OBJECT_TYPE
);
parcelHelpers.export(exports, "CLASS_LIST", ()=>CLASS_LIST
);
parcelHelpers.export(exports, "LEVEL", ()=>LEVEL
);
const GRID_SIZE = 20;
const CELL_SIZE = 20;
const DIRECTIONS = {
    ArrowLeft: {
        code: 37,
        movement: -1,
        rotation: 180
    },
    ArrowUp: {
        code: 38,
        movement: -GRID_SIZE,
        rotation: 270
    },
    ArrowRight: {
        code: 39,
        movement: 1,
        rotation: 0
    },
    ArrowDown: {
        code: 40,
        movement: GRID_SIZE,
        rotation: 90
    }
};
const OBJECT_TYPE = {
    BLANK: 'blank',
    WALL: 'wall',
    DOT: 'dot',
    BLINKY: 'blinky',
    PINKY: 'pinky',
    INKY: 'inky',
    CLYDE: 'clyde',
    PILL: 'pill',
    PACMAN: 'pacman',
    GHOST: 'ghost',
    SCARED: 'scared',
    GHOSTLAIR: 'lair'
};
const CLASS_LIST = [
    OBJECT_TYPE.BLANK,
    OBJECT_TYPE.WALL,
    OBJECT_TYPE.DOT,
    OBJECT_TYPE.BLINKY,
    OBJECT_TYPE.PINKY,
    OBJECT_TYPE.INKY,
    OBJECT_TYPE.CLYDE,
    OBJECT_TYPE.PILL,
    OBJECT_TYPE.PACMAN,
    OBJECT_TYPE.GHOSTLAIR
];
const LEVEL = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    2,
    2,
    2,
    1,
    2,
    2,
    2,
    1,
    1,
    2,
    2,
    2,
    1,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    2,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    2,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    1,
    2,
    1,
    9,
    9,
    9,
    9,
    1,
    2,
    1,
    2,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    9,
    9,
    9,
    9,
    1,
    2,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    2,
    2,
    2,
    1,
    9,
    9,
    9,
    9,
    1,
    2,
    2,
    2,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    9,
    9,
    9,
    9,
    1,
    2,
    1,
    2,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    2,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    2,
    1,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    1,
    2,
    1,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    1,
    2,
    2,
    2,
    1,
    1,
    2,
    2,
    2,
    1,
    2,
    2,
    2,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    1,
    2,
    1,
    1,
    2,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1, 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2cX0n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setup = require("./setup");
class GameBoard {
    constructor(DOMGrid){
        this.dotCount = 0;
        this.grid = [];
        this.DOMGrid = DOMGrid;
    }
    showGameStatus(gameWin) {
        const div = document.createElement("div");
        div.classList.add("game-status");
        div.innerHTML = `${gameWin ? "WIN!" : "GAME OVER"}`;
        this.DOMGrid.appendChild(div);
    }
    createGrid(level) {
        this.dotCount = 0;
        this.grid = [];
        this.DOMGrid.innerHTML = "";
        this.DOMGrid.style.cssText = `grid-template-columns:repeat(${_setup.GRID_SIZE},${_setup.CELL_SIZE}px)`;
        level.forEach((square)=>{
            const div = document.createElement("div");
            div.classList.add("sqaure", _setup.CLASS_LIST[square]);
            div.style.cssText = `width:${_setup.CELL_SIZE}px; height:${_setup.CELL_SIZE}px;`;
            this.DOMGrid.appendChild(div);
            this.grid.push(div);
            if (_setup.CLASS_LIST[square] === _setup.OBJECT_TYPE.DOT) this.dotCount++;
        });
    }
    addObject(pos, classes) {
        this.grid[pos].classList.add(...classes);
    }
    removeObject(pos1, classes1) {
        this.grid[pos1].classList.remove(...classes1);
    }
    objectExist = (pos, object)=>{
        return this.grid[pos].classList.contains(object);
    };
    rotateDiv(pos2, deg) {
        this.grid[pos2].style.transform = `rotate(${deg}deg)`;
    }
    moveCharacter(character, pacmanPos) {
        if (character.shouldMove()) {
            const { nextMovePos , direction  } = character.getNextMove(this.objectExist.bind(this), pacmanPos);
            const { classesToRemove , classesToAdd  } = character.makeMove();
            if (character.rotation && nextMovePos !== character.pos) {
                this.rotateDiv(nextMovePos, character.dir.rotation);
                this.rotateDiv(character.pos, 0);
            }
            this.removeObject(character.pos, classesToRemove);
            this.addObject(nextMovePos, classesToAdd);
            character.setNewPos(nextMovePos, direction);
        }
    }
    static createGameBoard(DOMGrid1, level1) {
        const board = new this(DOMGrid1);
        board.createGrid(level1);
        return board;
    }
    currentPos(character1) {
        return character1.currentPosition;
    }
}
exports.default = GameBoard;

},{"./setup":"lrQ5F","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9Iugh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setup = require("./setup");
class Pacman {
    constructor(speed, startPos){
        this.pos = startPos;
        this.speed = speed;
        this.dir = null;
        this.timer = 0;
        this.powerPill = false;
        this.rotation = true;
    }
    shouldMove() {
        if (!this.dir) return false;
        if (this.timer === this.speed) {
            this.timer = 0;
            return true;
        }
        this.timer++;
    }
    getNextMove(objectExist) {
        let nextMovePos = this.pos + this.dir.movement;
        if (objectExist(nextMovePos, _setup.OBJECT_TYPE.WALL) || objectExist(nextMovePos, _setup.OBJECT_TYPE.GHOSTLAIR)) nextMovePos = this.pos;
        return {
            nextMovePos,
            direction: this.dir
        };
    }
    makeMove() {
        const classesToRemove = [
            _setup.OBJECT_TYPE.PACMAN
        ];
        const classesToAdd = [
            _setup.OBJECT_TYPE.PACMAN
        ];
        return {
            classesToRemove,
            classesToAdd
        };
    }
    setNewPos(nextMovePos) {
        this.pos = nextMovePos;
    // console.log("Pacman Position"+nextMovePos);
    // return nextMovePos;
    }
    handleKeyInput(e, objectExist1) {
        let dir;
        //console.log(e);
        if (e.keyCode >= 37 && e.keyCode <= 40) dir = _setup.DIRECTIONS[e.key];
        else return;
        const nextMovePos = this.pos + dir.movement;
        if (objectExist1(nextMovePos, _setup.OBJECT_TYPE.WALL) || objectExist1(nextMovePos, _setup.OBJECT_TYPE.GHOSTLAIR)) return;
        this.dir = dir;
    }
    currentPosition() {
        //console.log(this.pos);
        return this.pos;
    }
}
exports.default = Pacman;

},{"./setup":"lrQ5F","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6vBSH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//Primitive random movement
parcelHelpers.export(exports, "randomMovement", ()=>randomMovement
);
parcelHelpers.export(exports, "BFSMovement", ()=>BFSMovement
);
var _setup = require("./setup");
//import Pacman from "./Pacman";
var _gameBoard = require("./GameBoard");
var _gameBoardDefault = parcelHelpers.interopDefault(_gameBoard);
var _pacman = require("./Pacman");
var _pacmanDefault = parcelHelpers.interopDefault(_pacman);
var _index = require("../index");
class queue {
    constructor(){
        this.q = [];
        this.front = 0; //Front of the queue
        this.back = -1; //Back of the queue
    }
    push(a) {
        this.q.push(a); //Pushing the element from the back
        this.back++;
    }
    pop() {
        let temp = this.q[this.front];
        this.front++; //Popping an element from the front
        return temp;
    }
    isEmpty() {
        if (this.front > this.back) return true;
        else return false; //Checking if the queue is empty or not
    }
}
class graph {
    constructor(){
        this.AdjList = new Map();
        this.parent = new Map();
        this.visited = new Map();
    }
    addVertex(v) {
        this.AdjList.set(v, []);
    }
    addEdge(v1, w) {
        this.AdjList.get(v1).push(w);
    }
    BFS(src, dst) {
        const source = src;
        var qt = new queue();
        var keys = this.AdjList.keys();
        for (var i of keys){
            this.visited.set(i, false);
            this.parent.set(i, "null");
        }
        this.visited.set(src, true);
        this.parent.set(src, "root");
        qt.push(src);
        while(qt.front <= qt.back){
            src = qt.pop();
            var arr = this.AdjList.get(src);
            for (let x of arr)if (this.visited.get(x) === false) {
                qt.push(x);
                this.visited.set(x, true);
                this.parent.set(x, src);
            }
        }
        var keys = this.AdjList.keys();
        let temp = dst;
        while(this.parent.get(temp) != source)temp = this.parent.get(temp);
        return temp;
    }
}
function randomMovement(position, direction, objectExist) {
    let dir = direction;
    let nextMovePos = position + dir.movement;
    //Create an array from the directions object keys
    const keys = Object.keys(_setup.DIRECTIONS);
    while(objectExist(nextMovePos, _setup.OBJECT_TYPE.WALL) || objectExist(nextMovePos, _setup.OBJECT_TYPE.GHOST)){
        //Get a random key from the key array
        const key = keys[Math.floor(Math.random() * keys.length)];
        //set the next move
        dir = _setup.DIRECTIONS[key];
        //set the next move
        nextMovePos = position + dir.movement;
    }
    return {
        nextMovePos,
        direction: dir
    };
}
function BFSMovement(position, direction, objectExist, pacmanPos) {
    //Function declaration
    var g = new graph();
    let dir = direction;
    let nextMovePos;
    //Create an array from the directions object keys
    const keys = Object.keys(_setup.DIRECTIONS);
    for(let i = 0; i < 460; i++)if (_setup.LEVEL[i] === 0 || _setup.LEVEL[i] === 2 || _setup.LEVEL[i] === 11) g.addVertex(i);
    for(let i1 = 0; i1 < 460; i1++)if (_setup.LEVEL[i1] === 0 || _setup.LEVEL[i1] === 2 || _setup.LEVEL[i1] === 11) {
        if (i1 + 1 < 460 && (_setup.LEVEL[i1 + 1] === 0 || _setup.LEVEL[i1 + 1] === 2)) g.addEdge(i1, i1 + 1);
        if (i1 - 1 >= 0 && (_setup.LEVEL[i1 - 1] === 0 || _setup.LEVEL[i1 - 1] === 2)) g.addEdge(i1, i1 - 1);
        if (i1 + 20 < 460 && (_setup.LEVEL[i1 + 20] === 0 || _setup.LEVEL[i1 + 20] === 2)) g.addEdge(i1, i1 + 20);
        if (i1 - 20 >= 0 && (_setup.LEVEL[i1 - 20] === 0 || _setup.LEVEL[i1 - 20] === 2)) g.addEdge(i1, i1 - 20);
    }
    nextMovePos = g.BFS(this.pos, pacmanPos);
    var key;
    if (nextMovePos === this.pos + 1) key = 2;
    else if (nextMovePos === this.pos - 1) key = 0;
    else if (nextMovePos === this.pos + 20) key = 3;
    else key = 1; //Assigning the direction which the ghost need to take
    //set the next move
    dir = _setup.DIRECTIONS[key];
    return {
        nextMovePos,
        direction: dir
    };
}

},{"./setup":"lrQ5F","./GameBoard":"2cX0n","./Pacman":"9Iugh","../index":"7BQdY","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"foH9Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _setup = require("./setup");
class Ghost {
    constructor(speed = 5, startPos, movement, name){
        this.name = name;
        this.movement = movement;
        this.startPos = startPos;
        this.pos = startPos;
        this.dir = _setup.DIRECTIONS.ArrowRight;
        this.speed = speed;
        this.timer = 0;
        this.isScared = false;
        this.rotation = false;
    }
    shouldMove() {
        if (this.timer === this.speed) {
            this.timer = 0;
            return true;
        }
        this.timer++;
        return false;
    }
    getNextMove(objectExist, pacmanPos) {
        const { nextMovePos , direction  } = this.movement(this.pos, this.dir, objectExist, pacmanPos);
        return {
            nextMovePos,
            direction
        };
    }
    makeMove(name1) {
        const classesToRemove = [
            _setup.OBJECT_TYPE.GHOST,
            _setup.OBJECT_TYPE.SCARED,
            this.name
        ];
        const classesToAdd = [
            _setup.OBJECT_TYPE.GHOST,
            this.name
        ];
        if (this.isScared) classesToAdd = [
            ...classesToAdd,
            _setup.OBJECT_TYPE.SCARED
        ];
        return {
            classesToRemove,
            classesToAdd
        };
    }
    setNewPos(nextMovePos, direction) {
        this.pos = nextMovePos;
        this.dir = direction;
    }
}
exports.default = Ghost;

},{"./setup":"lrQ5F","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["5UGAA","7BQdY"], "7BQdY", "parcelRequiref884")

//# sourceMappingURL=index.38661719.js.map
