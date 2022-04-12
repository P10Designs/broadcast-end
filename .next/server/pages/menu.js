"use strict";
(() => {
var exports = {};
exports.id = 934;
exports.ids = [934];
exports.modules = {

/***/ 279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ menu),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./Components/Header.tsx + 1 modules
var Header = __webpack_require__(339);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: external "@mui/icons-material/SupportAgent"
const SupportAgent_namespaceObject = require("@mui/icons-material/SupportAgent");
var SupportAgent_default = /*#__PURE__*/__webpack_require__.n(SupportAgent_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/SupervisorAccount"
const SupervisorAccount_namespaceObject = require("@mui/icons-material/SupervisorAccount");
var SupervisorAccount_default = /*#__PURE__*/__webpack_require__.n(SupervisorAccount_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/SettingsRemote"
const SettingsRemote_namespaceObject = require("@mui/icons-material/SettingsRemote");
var SettingsRemote_default = /*#__PURE__*/__webpack_require__.n(SettingsRemote_namespaceObject);
// EXTERNAL MODULE: ./Components/MatchHeader.tsx
var MatchHeader = __webpack_require__(343);
;// CONCATENATED MODULE: ./pages/menu.tsx







const Menu = ({ match  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-screen h-full bg-gray-300",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(MatchHeader/* default */.Z, {
                match: match
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inline-flex flex-wrap w-full h-full items-center justify-center p-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "min-w-[150px] p-5 hover:scale-110 transition-all m-5 bg-[#0078b2] rounded-xl text-white flex flex-col items-center justify-center font-bold",
                        onClick: ()=>{
                            router.push("/casters");
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((SupportAgent_default()), {
                                className: "text-7xl"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "CASTERS"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "min-w-[150px] p-5 m-5 hover:scale-110 transition-all bg-[#0078b2] rounded-xl text-white flex flex-col items-center justify-center font-bold",
                        onClick: ()=>{
                            router.push("/lineup");
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((SupervisorAccount_default()), {
                                className: "text-7xl"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "ALINEACIONES"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "min-w-[150px] p-5 m-5 hover:scale-110 transition-all bg-[#0078b2] rounded-xl text-white flex flex-col items-center justify-center font-bold",
                        onClick: ()=>{
                            router.push("/controller");
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((SettingsRemote_default()), {
                                className: "text-7xl"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "CONTROLLER"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const getServerSideProps = async ({ params , res  })=>{
    let request = await fetch("https://api.cplv-tv.tk/app/select");
    const idp = Number(await request.json());
    if (idp === 0) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    request = await fetch("https://api.cplv-tv.tk/match");
    let match = await request.json();
    match = match.filter((a)=>Number(a.idp) === idp
    );
    if (match.length === 0) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    match = match[0];
    const league = match.league.indexOf("-") !== -1 ? match.league.split("-")[0].trim() : match.league;
    request = await fetch("https://api.cplv-tv.tk/league/small/" + league);
    const data = await request.json();
    match.local.name = getObjects(data, "acronym", match.local.acronym)[0].name;
    match.visitor.name = getObjects(data, "acronym", match.visitor.acronym)[0].name;
    return {
        props: {
            match: match
        }
    };
};
function getObjects(obj, key, val) {
    if (val.indexOf("-") !== -1) val = val.split("-")[0].trim();
    let objects = [];
    for(const i in obj){
        if (typeof obj[i] === "object") {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i === key && obj[i] === val || i === key && val === "") {
            objects.push(obj);
        } else if (obj[i] === val && key === "") {
            if (objects.lastIndexOf(obj) === -1) {
                objects.push(obj);
            }
        }
    }
    return objects;
}
/* harmony default export */ const menu = (Menu);


/***/ }),

/***/ 32:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 850:
/***/ ((module) => {

module.exports = require("@mui/icons-material/TouchApp");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,339,343], () => (__webpack_exec__(279)));
module.exports = __webpack_exports__;

})();