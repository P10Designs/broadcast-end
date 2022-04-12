"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
// EXTERNAL MODULE: ./Components/Header.tsx + 1 modules
var Header = __webpack_require__(339);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: external "@mui/icons-material/Search"
const Search_namespaceObject = require("@mui/icons-material/Search");
var Search_default = /*#__PURE__*/__webpack_require__.n(Search_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./pages/index.tsx







const Home = (props)=>{
    var ref;
    const { 0: selected , 1: setSelected  } = (0,external_react_.useState)(props.idp);
    const router = (0,router_.useRouter)();
    const select = async (idp)=>{
        const req = await fetch("https://api.cplv-tv.tk/app/select/" + idp, {
            method: "POST"
        });
        const res = await req.text();
        setSelected(Number(res));
        router.push("/menu");
    };
    if (props.matches.length === 0) {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col h-full w-full bg-[#f1f1f1",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-center w-full text-3xl font-bold mt-10",
                    children: "NO MATCHES ARE SELECTABLE"
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col h-full w-full bg-[#f1f1f1",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col items-center justify-center",
                children: (ref = props.leagues) === null || ref === void 0 ? void 0 : ref.map((league, _i)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col w-5/6 my-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "w-full px-10 py-1 text-center bg-[#08517a] text-white font-bold text-lg rounded-t",
                                children: league
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(material_.TableContainer, {
                                component: material_.Paper,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Table, {
                                    sx: {
                                        minWidth: 650,
                                        borderRadius: 0
                                    },
                                    size: "small",
                                    "aria-label": "a dense table",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableHead, {
                                            sx: {
                                                borderRadius: 0
                                            },
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                                                className: "bg-gray-400 text-white border-none",
                                                sx: {
                                                    borderRadius: 0
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        className: "font-bold uppercase text-center"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        className: "font-bold uppercase text-center",
                                                        children: "Local"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {}),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        className: "font-bold uppercase text-center",
                                                        children: "Visitor"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        className: "font-bold uppercase text-center"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        className: "font-bold uppercase text-center",
                                                        children: "Time"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        className: "font-bold uppercase text-center",
                                                        children: "Period"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        className: "font-bold uppercase text-center",
                                                        align: "right",
                                                        children: "Score"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                        className: "font-bold uppercase text-center"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableBody, {
                                            children: props.matches.map((row, _o)=>{
                                                if (row.league !== league) return null;
                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                                                    sx: {
                                                        "&:last-child td, &:last-child th": {
                                                            border: 0
                                                        }
                                                    },
                                                    className: Number(selected) !== Number(row.idp) ? _o % 2 === 0 ? "bg-gray-200" : "" : "bg-yellow-500",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "text-center",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                src: row.local.logo,
                                                                height: 25,
                                                                width: 25
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "text-center",
                                                            children: row.local.acronym
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "text-center",
                                                            children: "-"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "text-center",
                                                            children: row.visitor.acronym
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "text-center",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                src: row.visitor.logo,
                                                                height: 25,
                                                                width: 25
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "capitalize text-center",
                                                            children: new Date(row.date).toLocaleString([], {
                                                                weekday: "short",
                                                                day: "2-digit",
                                                                month: "short",
                                                                hour: "2-digit",
                                                                minute: "2-digit"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "text-center",
                                                            children: row.period
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableCell, {
                                                            className: "text-center",
                                                            align: "right",
                                                            children: [
                                                                row.score.local || 0,
                                                                " : ",
                                                                row.score.visitor || 0
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                onClick: ()=>{
                                                                    select(row.idp);
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((Search_default()), {
                                                                    className: row.period !== "SIN COMENZAR" ? "animate-pulse text-red-600 transition-all hover:text-red-500" : "transition-all hover:text-blue-500"
                                                                })
                                                            })
                                                        })
                                                    ]
                                                }, "match" + _o + "league" + _i);
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }, "league" + _i);
                })
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    let req = await fetch("https://api.cplv-tv.tk/match");
    let matches = await req.json();
    const leagues = [];
    matches = matches.filter((m)=>m.period !== ("FINAL" || 0)
    );
    matches = matches.sort((a, b)=>new Date(a.date) < new Date(b.date)
    );
    matches.forEach((match)=>{
        const league = match.league.indexOf("-") !== -1 ? match.league.split("-")[0].trim() : match.league;
        if (!leagues.includes(league)) leagues.push(league);
    });
    req = await fetch("https://api.cplv-tv.tk/app/select");
    const idp = await req.json();
    return {
        props: {
            idp: Number(idp),
            matches,
            leagues
        }
    };
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 32:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 850:
/***/ ((module) => {

module.exports = require("@mui/icons-material/TouchApp");

/***/ }),

/***/ 692:
/***/ ((module) => {

module.exports = require("@mui/material");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,339], () => (__webpack_exec__(454)));
module.exports = __webpack_exports__;

})();