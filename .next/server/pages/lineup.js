"use strict";
(() => {
var exports = {};
exports.id = 88;
exports.ids = [88];
exports.modules = {

/***/ 89:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ lineup),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./Components/Header.tsx + 1 modules
var Header = __webpack_require__(339);
// EXTERNAL MODULE: ./Components/MatchHeader.tsx
var MatchHeader = __webpack_require__(343);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "@mui/icons-material/Edit"
var Edit_ = __webpack_require__(664);
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);
// EXTERNAL MODULE: external "@mui/icons-material/Cancel"
var Cancel_ = __webpack_require__(733);
var Cancel_default = /*#__PURE__*/__webpack_require__.n(Cancel_);
// EXTERNAL MODULE: external "@mui/icons-material/Storage"
var Storage_ = __webpack_require__(309);
var Storage_default = /*#__PURE__*/__webpack_require__.n(Storage_);
;// CONCATENATED MODULE: external "@mui/icons-material/Add"
const Add_namespaceObject = require("@mui/icons-material/Add");
var Add_default = /*#__PURE__*/__webpack_require__.n(Add_namespaceObject);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
;// CONCATENATED MODULE: ./pages/lineup.tsx










const pos = [
    "P1",
    "P2",
    "C",
    "A"
];
const Lineup = ({ match , players  })=>{
    const { 0: playersArray , 1: setPlayersArray  } = (0,external_react_.useState)(players);
    const { 0: selected , 1: setSelected  } = (0,external_react_.useState)(match.local.acronym);
    const { 0: player1 , 1: setPlayer  } = (0,external_react_.useState)();
    const { 0: view , 1: setView  } = (0,external_react_.useState)(false);
    const { 0: playerSel , 1: setPlayerSel  } = (0,external_react_.useState)(false);
    const { 0: dorsal , 1: setDorsal  } = (0,external_react_.useState)();
    const { 0: teamData , 1: setTeamData  } = (0,external_react_.useState)();
    const { 0: toAddPlayer , 1: setToAddPlayer  } = (0,external_react_.useState)();
    const { 0: allPlayers1 , 1: setAllPlayers  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        async function getAllPlayers() {
            const request = await fetch("https://api.cplv-tv.tk/players");
            const allPlayers = await request.json();
            const returnPlayers = [];
            const names = [];
            for(let i = 0; i < allPlayers.length; i++){
                if (!names.includes(allPlayers[i].name)) {
                    returnPlayers.push(allPlayers[i]);
                    names.push(allPlayers[i].name);
                }
            }
            setAllPlayers(returnPlayers);
        }
        getAllPlayers();
    }, []);
    const saveData = async ()=>{
        let original = players;
        for(let i = 0; i < original.length; i++){
            const playerIn = original[i];
            if (player1 !== undefined) {
                if (playerIn.name === player1.name) {
                    original[i].dorsal = dorsal || "00";
                    original[i].position = teamData;
                }
            }
        }
        original = original.map((p)=>({
                ...p,
                matchStats: {
                    g: 0,
                    a: 0,
                    pim: 0
                }
            })
        );
        setPlayersArray(original);
        await update();
    };
    const update = async ()=>{
        console.log(playersArray);
        await fetch("https://api.cplv-tv.tk/app/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(playersArray)
        });
    };
    const addData = async ()=>{
        if (toAddPlayer === undefined) return;
        const play = toAddPlayer;
        play.team = selected === match.local.acronym ? match.local : match.visitor;
        playersArray.push(play);
        await update();
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-screen h-full bg-gray-300 flex flex-col items-center justify-start",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(MatchHeader/* default */.Z, {
                match: match
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>{
                    setPlayerSel(true);
                },
                className: "absolute z-3 bottom-10 right-10 bg-gray-500 w-12 hover:bg-gray-700 transition-all h-12 flex items-center justify-center p-1 rounded-full text-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Add_default()), {})
            }),
            view && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-full absolute z-10 bg-black/60 flex items-center justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col items-center justify-start w-2/3 bg-white rounded",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-left w-full bg-[#013a54] text-white font-semibold inline-flex items-center justify-start px-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Storage_default()), {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "ml-1",
                                    children: "EDICION DE ALINEACIONES..."
                                })
                            ]
                        }),
                        player1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-5/6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "p-5 inline-flex flex-start justify-between w-full",
                                children: [
                                    player1.img && player1.img !== "" && /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: player1.img,
                                        width: 140,
                                        height: 175
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex flex-col items-end justify-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "mb-5 text-blue-500 font-bold",
                                                children: player1.name
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                type: "numeric",
                                                className: "w-20 mb-5 bg-blue-200",
                                                defaultValue: dorsal,
                                                onChange: (e)=>{
                                                    setDorsal(e.target.value);
                                                }
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: pos.map((p, i)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                        className: "rounded-full px-2 py-0.5 min-w-[40px] mx-0.5 text-white " + (teamData === p ? "bg-yellow-500" : "bg-gray-500"),
                                                        onClick: ()=>{
                                                            setTeamData(p === teamData ? undefined : p);
                                                        },
                                                        children: p
                                                    }, "b" + i)
                                                )
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "inline-flex items-center justify-between w-5/6 p-5 text-white",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    onClick: ()=>{
                                        setView(false);
                                    },
                                    className: "mx-1.5 bg-gray-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-gray-700 transition-all",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Cancel_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "ml-1",
                                            children: "Cancelar"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    onClick: ()=>{
                                        saveData();
                                        setView(false);
                                    },
                                    className: "mx-1.5 bg-blue-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-blue-700 transition-all",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Edit_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "ml-1",
                                            children: "Modificar"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            playerSel && allPlayers1 !== undefined && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-full absolute z-10 bg-black/60 flex items-center justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col items-center justify-start w-2/3 bg-white rounded",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-left w-full bg-[#013a54] text-white font-semibold inline-flex items-center justify-start px-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Storage_default()), {}),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "ml-1",
                                    children: "A\xd1ADIR JUGADORES..."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Autocomplete, {
                                className: "mt-5",
                                id: "grouped-demo",
                                options: allPlayers1.sort((a, b)=>-b.name.localeCompare(a.name)
                                ),
                                groupBy: (option)=>option.name[0].toUpperCase()
                                ,
                                getOptionLabel: (option)=>option.name
                                ,
                                onChange: (e, v)=>{
                                    if (v !== null) {
                                        setToAddPlayer(v);
                                    }
                                },
                                sx: {
                                    width: 300
                                },
                                renderInput: (params)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.TextField, {
                                        ...params,
                                        label: "Player"
                                    })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "inline-flex items-center justify-between w-5/6 p-5 text-white",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    onClick: ()=>{
                                        setPlayerSel(false);
                                    },
                                    className: "mx-1.5 bg-gray-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-gray-700 transition-all",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Cancel_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "ml-1",
                                            children: "Cancelar"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    onClick: ()=>{
                                        addData();
                                        setPlayerSel(false);
                                    },
                                    className: "mx-1.5 bg-blue-500 px-2 py-1 rounded-md inline-flex uppercase text-xs font-bold items-center justify-center hover:bg-blue-700 transition-all",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Edit_default()), {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "ml-1",
                                            children: "Modificar"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "h-max inline-flex border-t w-full justify-center items-center px-24 bg-[#013a54] text-white",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>{
                            setSelected(match.local.acronym);
                        },
                        className: "mx-3 font-bold border-b-4 py-1.5 px-3 transition-all " + (selected === match.local.acronym ? "border-blue-300" : "border-transparent"),
                        children: "LOCAL"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>{
                            setSelected(match.visitor.acronym);
                        },
                        className: "mx-3 font-bold border-b-4 py-1.5 px-3 transition-all " + (selected === match.visitor.acronym ? "border-blue-300" : "border-transparent"),
                        children: "VISITOR"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "inline-flex flex-wrap w-full items-start justify-start",
                children: playersArray.map((player, _i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        onClick: ()=>{
                            setDorsal(player.dorsal || "0");
                            setTeamData(player.position);
                            setPlayer(player);
                            setView(true);
                        },
                        className: "max-w-[155px] mx-0.5 mb-0.5 " + (selected === player.team.acronym ? "" : "hidden"),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "relative",
                                children: [
                                    player.img && player.img !== "" && /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: player.img,
                                        width: 140,
                                        height: 175
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute z-5 bottom-1.5 left-0 px-2 py-1 text-white font-bold text-2xl bg-[#333332] rounded-tr-xl",
                                        children: player.dorsal === undefined ? "--" : player.dorsal
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "absolute z-5 bottom-1.5 right-0 px-2 py-1 text-white font-bold text-2xl rounded-tl-xl " + (player.position !== undefined ? "bg-yellow-500" : "hidden"),
                                        children: player.position
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-left mx-1 break-words text-xs overflow-hidden w-[120px] text-black font-semibold capitalize",
                                children: player.name
                            })
                        ]
                    }, "player" + _i)
                )
            })
        ]
    });
};
const getServerSideProps = async ({ params , res  })=>{
    let request = await fetch("https://api.cplv-tv.tk/app/players");
    let players = await request.json();
    request = await fetch("https://api.cplv-tv.tk/app/select");
    const idp = await request.json();
    if (idp === "0" || idp === undefined || idp === null || idp === "") {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    request = await fetch("https://api.cplv-tv.tk/match");
    let match = await request.json();
    match = match.filter((a)=>a.idp === idp
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
    request = await fetch("https://api.cplv-tv.tk/league/" + league);
    const data = await request.json();
    if (players.length === 0) {
        players = data.players;
        players = players.filter((a)=>a.team.acronym === match.local.acronym || match.visitor.acronym === a.team.acronym
        );
    }
    match.visitor.name = getObjects(data, "acronym", match.visitor.acronym)[0].name;
    match.local.name = getObjects(data, "acronym", match.local.acronym)[0].name;
    return {
        props: {
            match: match,
            players
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
/* harmony default export */ const lineup = (Lineup);


/***/ }),

/***/ 733:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Cancel");

/***/ }),

/***/ 664:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Edit");

/***/ }),

/***/ 32:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Settings");

/***/ }),

/***/ 309:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Storage");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,339,343], () => (__webpack_exec__(89)));
module.exports = __webpack_exports__;

})();