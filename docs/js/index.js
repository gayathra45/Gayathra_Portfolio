/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/components/Footer.js":
/*!**************************************!*\
  !*** ./src/app/components/Footer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _MediaIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaIcon */ \"./src/app/components/MediaIcon.js\");\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n    return /*html*/ `\n        <footer class=\"footer\">\n            <div class=\"container\">\n                <div class=\"footer__inner\">\n                    <div class=\"footer__info\">                         \n                            <a class=\"footer__email\" href=\"${_consts_media__WEBPACK_IMPORTED_MODULE_1__[\"default\"].email}\">${_consts_media__WEBPACK_IMPORTED_MODULE_1__[\"default\"].emailRaw}</a>\n                        \n                        <p class=\"footer__description\">${t.description}</p>\n                    </div>\n                    <div class=\"footer__media\">\n                        <div class=\"footer__title\">${t.media}</div>\n                        <div class=\"footer__list\">\n                            ${[\"linkedin\", \"github\", \"twitter\", \"facebook\", \"instagram\", \"email\"]\n\n                                .map((name) => (0,_MediaIcon__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({ name }))\n                                .join(\"\")}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"footer__copyright\">© ${t.copyright}</div>\n            </div>\n\n        </footer>\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Footer.js?\n}");

/***/ }),

/***/ "./src/app/components/Header.js":
/*!**************************************!*\
  !*** ./src/app/components/Header.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/routes */ \"./src/app/consts/routes.js\");\n/* harmony import */ var _MediaIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaIcon */ \"./src/app/components/MediaIcon.js\");\n\n\n\nconst base = \"/Gayathra_Portfolio\";\n\nconst paths = [`${base}/#/`, `${base}/#/projects`, `${base}/#/about-me`];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((t) => {\n    return /*html*/ `\n        <header class=\"header\">\n            <input class=\"hamburger\" type=\"checkbox\" aria-label=\"Menu\" />\n\n            <div class=\"media-header\">\n                <span class=\"media-header__line\"></span>\n                <div class=\"media-header__links\">\n                    ${[\"linkedin\", \"github\", \"email\"]\n                        .map((name) => (0,_MediaIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ name }))\n                        .join(\"\")}\n                </div>\n            </div>\n\n\n            <div class=\"container\">\n\n                <div class=\"header__inner\">\n                    <a class=\"logo\" href=\"${base}/\">\n                        <img class=\"logo__img\" src=\"images/logo.svg\" alt=\"Gayathra logo\">\n                        <span class=\"logo__name\">Gayathra</span>\n                    </a>\n                    <div class=\"header__links\">\n                        ${paths\n                            .map((path) => {\n                                // convert \"/Gayathra_Portfolio/...\" back to \"/\", \"/projects\", \"/about-me\"\n                                const routeKey = path.replace(base, \"\") || \"/\";\n                                return /*html*/ `\n                                    <a href=\"${path}\" class=\"header__link ${\n                                        window.location.hash === path ? \"header__link_active\" : \"\"\n\n                                    }\">${t[_consts_routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"][routeKey].name]}</a>\n                                `;\n                            })\n                            .join(\"\")}\n                    </div>\n                    <div class=\"dropdown\">\n                        <span class=\"dropdown__label\">en</span>\n\n                        <div class=\"dropdown__list\">\n                            <div class=\"dropdown__option\">ru</div>\n                            <div class=\"dropdown__option\">ua</div>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            \n\n        </header>\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/Header.js?\n}");

/***/ }),

/***/ "./src/app/components/MediaIcon.js":
/*!*****************************************!*\
  !*** ./src/app/components/MediaIcon.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/consts/media */ \"./src/app/consts/media.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ name }) => {\n    return /*html*/ `\n        <a href=\"${_consts_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name]}\" class=\"media\">\n            <img src=\"images/icons/${name}.svg\" alt=\"${name}\" class=\"media__icon\"/>\n        </a>`;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/components/MediaIcon.js?\n}");

/***/ }),

/***/ "./src/app/consts/media.js":
/*!*********************************!*\
  !*** ./src/app/consts/media.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _proxies_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../proxies/media */ \"./src/app/proxies/media.js\");\n\n\nconst media = {\n    discord: {\n        id: \"gayya_59624_30521\",\n        tag: \"Gayya\",\n    },\n    \n    github: \"gayathra45\",\n    linkedin: \"Gayathra Samuditha\",\n    email: \"gayathrasamuditha45@gmail.com\",\n    facebook: \"Gayathra Samuditha\",  \n    instagram: \"gayathra_s\", \n    telegram: \"@gayathra_samuditha\",\n    twitter: \"Gayathra45\" \n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Proxy(media, _proxies_media__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n\n\n\n//# sourceURL=webpack://portfolio/./src/app/consts/media.js?\n}");

/***/ }),

/***/ "./src/app/consts/routes.js":
/*!**********************************!*\
  !*** ./src/app/consts/routes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n/**\n * @type {import(\"../../types/Routes\").Routes}\n */\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    \"/\": {\n        name: \"home\",\n        element: \"Home\",\n    },\n    \"/projects\": {\n        name: \"projects\",\n        element: \"Projects\",\n    },\n    \"/about-me\": {\n        name: \"about\",\n        element: \"About\",\n    },\n    \"/404\": {\n        name: \"404\",\n        element: \"PageNotFound\",\n    },\n    \n    \n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/routes.js?\n}");

/***/ }),

/***/ "./src/app/consts/websites.js":
/*!************************************!*\
  !*** ./src/app/consts/websites.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    discord: \"discord.com/users/\",\n    github: \"github.com/\",\n    figma: \"figma.com/@\",\n    linkedin: \"linkedin.com/in/\",\n    email: \"mailto:\",\n    facebook: \"facebook.com/\",\n    telegram: \"t.me/\",  \n    instagram: \"instagram.com/\",  \n    twitter: \"twitter.com/\"  \n});\n\n//# sourceURL=webpack://portfolio/./src/app/consts/websites.js?\n}");

/***/ }),

/***/ "./src/app/helpers/loadCssFile.js":
/*!****************************************!*\
  !*** ./src/app/helpers/loadCssFile.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((pathName) => {\n    const link = document.createElement(\"link\")\n    link.href = `css/${pathName}.css`;\n    link.rel = \"stylesheet\"\n    \n    document.head.appendChild(link)\n});\n\n//# sourceURL=webpack://portfolio/./src/app/helpers/loadCssFile.js?\n}");

/***/ }),

/***/ "./src/app/helpers/localeHandler.js":
/*!******************************************!*\
  !*** ./src/app/helpers/localeHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getLocale: () => (/* binding */ getLocale)\n/* harmony export */ });\nconst defaultLocale = \"en\"\n\n\nfunction setLocaleHander() {\n    const options = document.querySelectorAll(\".dropdown__option\");\n    const label = document.querySelector(\".dropdown__label\");\n\n    options.forEach((option) => {\n        if (option.innerHTML === localStorage.locale) \n            [label.innerHTML, option.innerHTML] = [localStorage.locale, label.innerHTML]\n\n        option.addEventListener(\"click\", () => {\n            localStorage.locale = option.innerHTML;\n\n            window.location.reload();\n        });\n    });\n}\n\nasync function getLocale() {\n    const locale = localStorage.locale ?? defaultLocale\n\n    return fetch(`locales/${locale}.json`).then(res => res.json())\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setLocaleHander);\n\n\n\n//# sourceURL=webpack://portfolio/./src/app/helpers/localeHandler.js?\n}");

/***/ }),

/***/ "./src/app/helpers/replacePath.js":
/*!****************************************!*\
  !*** ./src/app/helpers/replacePath.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n// From https://github.com/rafgraph/spa-github-pages\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\n    const l = window.location;\n\n    if (l.search[1] === \"/\") {\n        let decoded = l.search\n            .slice(1)\n            .split(\"&\")\n            .map((s) => s.replace(/~and~/g, \"&\"))\n            .join(\"?\");\n\n        window.history.replaceState(\n            null,\n            null,\n            l.pathname.slice(0, -1) + decoded + l.hash\n        );\n    }\n});\n\n//# sourceURL=webpack://portfolio/./src/app/helpers/replacePath.js?\n}");

/***/ }),

/***/ "./src/app/helpers/startTitleAnimation.js":
/*!************************************************!*\
  !*** ./src/app/helpers/startTitleAnimation.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst steps = \"/-\\\\|\";\nconst FPS = 2\nconst frameInterval = 1000 / FPS;\n\nlet step = 0;\nlet lastTimestep = 0;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((pathName) => {\n    window.requestAnimationFrame(animation);\n\n    function animation(timestamp) {\n        if (lastTimestep + frameInterval < timestamp) {\n            document.title = `${steps[step++]} Gayathra | ${pathName}`;\n\n            step %= steps.length;\n            lastTimestep = timestamp;\n        }\n\n        window.requestAnimationFrame(animation);\n    }\n});\n\n//# sourceURL=webpack://portfolio/./src/app/helpers/startTitleAnimation.js?\n}");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _views_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/Layout */ \"./src/app/views/Layout.js\");\n/* harmony import */ var _consts_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts/routes */ \"./src/app/consts/routes.js\");\n/* harmony import */ var _helpers_startTitleAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/startTitleAnimation */ \"./src/app/helpers/startTitleAnimation.js\");\n/* harmony import */ var _helpers_localeHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/localeHandler */ \"./src/app/helpers/localeHandler.js\");\n/* harmony import */ var _helpers_loadCssFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/loadCssFile */ \"./src/app/helpers/loadCssFile.js\");\n/* harmony import */ var _helpers_replacePath__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/replacePath */ \"./src/app/helpers/replacePath.js\");\n/* harmony import */ var styles_styles_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styles/styles.sass */ \"./src/assets/styles/styles.sass\");\n/* harmony import */ var styles_styles_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styles_styles_sass__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\nconst rootId = \"root\";\nconst base = \"/Gayathra_Portfolio\";\n\nasync function render() {\n    // strip the repo name so \"/Gayathra_Portfolio/\" becomes \"/\"\n    const rawPath = window.location.pathname.replace(base, \"\") || \"/\";\n    const path = _consts_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"][rawPath] ?? _consts_routes__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"/404\"];\n\n    (0,_helpers_loadCssFile__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(path.name);\n    (0,_helpers_startTitleAnimation__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(path.name);\n\n    document.getElementById(rootId).innerHTML = await (0,_views_Layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n        (\n            await __webpack_require__(\"./src/app/views lazy recursive ^\\\\.\\\\/.*$\")(`./${path.element}`)\n        ).default,\n        path\n    );\n}\n\n// Client-side navigation function\nfunction navigate(path) {\n    window.history.pushState({}, \"\", base + path);\n    render();\n}\n\n// Listen for back/forward buttons\nwindow.addEventListener(\"popstate\", () => {\n    render();\n});\n\n// Intercept all link clicks for internal navigation\ndocument.addEventListener(\"click\", (e) => {\n    const link = e.target.closest(\"a\");\n    if (link && link.href && link.href.startsWith(window.location.origin + base)) {\n        e.preventDefault();\n        const path = link.pathname.replace(base, \"\") || \"/\";\n        navigate(path);\n    }\n});\n\n(0,_helpers_replacePath__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n    .then(() => render())\n    .then(() => (0,_helpers_localeHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n\n\n//# sourceURL=webpack://portfolio/./src/app/index.js?\n}");

/***/ }),

/***/ "./src/app/proxies/media.js":
/*!**********************************!*\
  !*** ./src/app/proxies/media.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _consts_websites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts/websites */ \"./src/app/consts/websites.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    get(target, name) {\n        if (name === \"emailRaw\") \n            return target.email\n        \n        if (name === \"discord\") return `https://${_consts_websites__WEBPACK_IMPORTED_MODULE_0__[\"default\"].discord}${target.discord.id}`\n        if (name === \"discordTag\") return target.discord.tag\n\n    return `${name === \"email\" ? \"mailto:\" : \"https://\"}${_consts_websites__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name] ?? \"\"}${target[name]}`\n    }\n});\n\n//# sourceURL=webpack://portfolio/./src/app/proxies/media.js?\n}");

/***/ }),

/***/ "./src/app/views lazy recursive ^\\.\\/.*$":
/*!*******************************************************!*\
  !*** ./src/app/views/ lazy ^\.\/.*$ namespace object ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var map = {\n\t\"./About\": [\n\t\t\"./src/app/views/About.js\",\n\t\t\"src_app_views_About_js\"\n\t],\n\t\"./About.js\": [\n\t\t\"./src/app/views/About.js\",\n\t\t\"src_app_views_About_js\"\n\t],\n\t\"./Contacts\": [\n\t\t\"./src/app/views/Contacts.js\",\n\t\t\"src_app_views_Contacts_js\"\n\t],\n\t\"./Contacts.js\": [\n\t\t\"./src/app/views/Contacts.js\",\n\t\t\"src_app_views_Contacts_js\"\n\t],\n\t\"./Home\": [\n\t\t\"./src/app/views/Home.js\",\n\t\t\"src_app_views_Home_js\"\n\t],\n\t\"./Home.js\": [\n\t\t\"./src/app/views/Home.js\",\n\t\t\"src_app_views_Home_js\"\n\t],\n\t\"./Layout\": [\n\t\t\"./src/app/views/Layout.js\"\n\t],\n\t\"./Layout.js\": [\n\t\t\"./src/app/views/Layout.js\"\n\t],\n\t\"./PageNotFound\": [\n\t\t\"./src/app/views/PageNotFound.js\",\n\t\t\"src_app_views_PageNotFound_js\"\n\t],\n\t\"./PageNotFound.js\": [\n\t\t\"./src/app/views/PageNotFound.js\",\n\t\t\"src_app_views_PageNotFound_js\"\n\t],\n\t\"./Projects\": [\n\t\t\"./src/app/views/Projects.js\",\n\t\t\"src_app_views_Projects_js\"\n\t],\n\t\"./Projects.js\": [\n\t\t\"./src/app/views/Projects.js\",\n\t\t\"src_app_views_Projects_js\"\n\t]\n};\nfunction webpackAsyncContext(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\treturn Promise.resolve().then(() => {\n\t\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\t\te.code = 'MODULE_NOT_FOUND';\n\t\t\tthrow e;\n\t\t});\n\t}\n\n\tvar ids = map[req], id = ids[0];\n\treturn Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {\n\t\treturn __webpack_require__(id);\n\t});\n}\nwebpackAsyncContext.keys = () => (Object.keys(map));\nwebpackAsyncContext.id = \"./src/app/views lazy recursive ^\\\\.\\\\/.*$\";\nmodule.exports = webpackAsyncContext;\n\n//# sourceURL=webpack://portfolio/./src/app/views/_lazy_^\\.\\/.*$_namespace_object?\n}");

/***/ }),

/***/ "./src/app/views/Layout.js":
/*!*********************************!*\
  !*** ./src/app/views/Layout.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Footer.js */ \"./src/app/components/Footer.js\");\n/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header.js */ \"./src/app/components/Header.js\");\n/* harmony import */ var _helpers_localeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/localeHandler.js */ \"./src/app/helpers/localeHandler.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (content, path) => {\n    const locale = await (0,_helpers_localeHandler_js__WEBPACK_IMPORTED_MODULE_2__.getLocale)()\n\n    return /*html*/ `\n        ${(0,_components_Header_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(locale.header)}\n        <div class=\"container content\">\n            ${content(locale.pages[path.name], locale)}\n        </div>\n        ${(0,_components_Footer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(locale.footer)}\n    `;\n});\n\n\n//# sourceURL=webpack://portfolio/./src/app/views/Layout.js?\n}");

/***/ }),

/***/ "./src/assets/styles/styles.sass":
/*!***************************************!*\
  !*** ./src/assets/styles/styles.sass ***!
  \***************************************/
/***/ (() => {

eval("{throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nHookWebpackError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nexpected \\\")\\\".\\n  ╷\\n3 │     primary-op: 179 100% 50% / 0.1,\\r\\n  │               ^\\n  ╵\\n  src\\\\assets\\\\styles\\\\default\\\\variables.scss 3:15  @import\\n  src\\\\assets\\\\styles\\\\styles.sass 2:9              root stylesheet\\n    at tryRunOrWebpackError (E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\webpack\\\\lib\\\\HookWebpackError.js:85:9)\\n    at __webpack_require_module__ (E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5564:12)\\n    at __webpack_require__ (E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5511:18)\\n    at E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5599:20\\n    at symbolIterator (E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\neo-async\\\\async.js:3485:9)\\n    at done (E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\neo-async\\\\async.js:3527:9)\\n    at Hook.eval [as callAsync] (eval at create (E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:31:10), <anonymous>:15:1)\\n    at Hook.CALL_ASYNC_DELEGATE [as _callAsync] (E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:21:14)\\n    at E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5486:43\\n    at symbolIterator (E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\neo-async\\\\async.js:3482:9)\\n-- inner error --\\nError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nexpected \\\")\\\".\\n  ╷\\n3 │     primary-op: 179 100% 50% / 0.1,\\r\\n  │               ^\\n  ╵\\n  src\\\\assets\\\\styles\\\\default\\\\variables.scss 3:15  @import\\n  src\\\\assets\\\\styles\\\\styles.sass 2:9              root stylesheet\\n    at Object.<anonymous> (E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\sass-loader\\\\dist\\\\cjs.js!E:\\\\VSC\\\\Gayathra Protofolio\\\\src\\\\assets\\\\styles\\\\styles.sass:1:7)\\n    at E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\webpack\\\\lib\\\\javascript\\\\JavascriptModulesPlugin.js:548:10\\n    at Hook.eval [as call] (eval at create (E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:19:10), <anonymous>:7:1)\\n    at Hook.CALL_DELEGATE [as _call] (E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\tapable\\\\lib\\\\Hook.js:16:14)\\n    at E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5566:39\\n    at tryRunOrWebpackError (E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\webpack\\\\lib\\\\HookWebpackError.js:80:7)\\n    at __webpack_require_module__ (E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5564:12)\\n    at __webpack_require__ (E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5511:18)\\n    at E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\webpack\\\\lib\\\\Compilation.js:5599:20\\n    at symbolIterator (E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\neo-async\\\\async.js:3485:9)\\n\\nGenerated code for E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js!E:\\\\VSC\\\\Gayathra Protofolio\\\\node_modules\\\\sass-loader\\\\dist\\\\cjs.js!E:\\\\VSC\\\\Gayathra Protofolio\\\\src\\\\assets\\\\styles\\\\styles.sass\\n1 | throw new Error(\\\"Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\\\nexpected \\\\\\\")\\\\\\\".\\\\n  ╷\\\\n3 │     primary-op: 179 100% 50% / 0.1,\\\\r\\\\n  │               ^\\\\n  ╵\\\\n  src\\\\\\\\assets\\\\\\\\styles\\\\\\\\default\\\\\\\\variables.scss 3:15  @import\\\\n  src\\\\\\\\assets\\\\\\\\styles\\\\\\\\styles.sass 2:9              root stylesheet\\\");\");\n\n//# sourceURL=webpack://portfolio/./src/assets/styles/styles.sass?\n}");

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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + {"src_app_views_About_js":"cddaafff3438f087617d","src_app_views_Contacts_js":"560ef71063b129da344c","src_app_views_Home_js":"2968baeb733b8d174715","src_app_views_PageNotFound_js":"889f973003c86d2b46df","src_app_views_Projects_js":"54f8e1bb7d7c500b0170"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "portfolio:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/index.js");
/******/ 	
/******/ })()
;