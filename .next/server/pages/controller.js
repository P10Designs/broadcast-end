"use strict";
(() => {
var exports = {};
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ controller),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
;// CONCATENATED MODULE: external "@mui/icons-material/SportsHockey"
const SportsHockey_namespaceObject = require("@mui/icons-material/SportsHockey");
var SportsHockey_default = /*#__PURE__*/__webpack_require__.n(SportsHockey_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Sports"
const Sports_namespaceObject = require("@mui/icons-material/Sports");
var Sports_default = /*#__PURE__*/__webpack_require__.n(Sports_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/SportsScore"
const SportsScore_namespaceObject = require("@mui/icons-material/SportsScore");
var SportsScore_default = /*#__PURE__*/__webpack_require__.n(SportsScore_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/HourglassBottom"
const HourglassBottom_namespaceObject = require("@mui/icons-material/HourglassBottom");
var HourglassBottom_default = /*#__PURE__*/__webpack_require__.n(HourglassBottom_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/GpsFixed"
const GpsFixed_namespaceObject = require("@mui/icons-material/GpsFixed");
var GpsFixed_default = /*#__PURE__*/__webpack_require__.n(GpsFixed_namespaceObject);
;// CONCATENATED MODULE: ./Components/Controller.tsx








const TeamComponent = ({ team , match , players , selected , playerSelected , setPlayerSelected  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-2/5 bg-white flex items-center " + (team === "local" ? "flex-row" : "flex-row-reverse"),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-full",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full items-center h-12 justify-start px-4 flex bg-black text-white font-bold py-0 " + (team === "local" ? "flex-row-reverse" : "flex-row"),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: match.logo,
                            width: 40,
                            height: 40
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "mx-2",
                            children: match.name
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col items-start justify-start",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "w-full text-center font-bold text-white text-sm py-0.5 bg-[#656665]",
                            children: match.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableContainer, {
                            component: material_.Paper,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Table, {
                                size: "small",
                                "aria-label": "a dense table",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableHead, {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                                            className: "bg-gray-200 h-1 font-bold",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                    className: "font-bold",
                                                    children: "#"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                    className: "font-bold",
                                                    children: "P"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                    className: "font-bold",
                                                    children: "Nombre"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                    className: "font-bold",
                                                    align: "right",
                                                    children: "G"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                    className: "font-bold",
                                                    align: "right",
                                                    children: "A"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                    className: "font-bold",
                                                    align: "right",
                                                    children: "PIM"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.TableBody, {
                                        children: players.map((row, i)=>{
                                            if (selected === "season") {
                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                                                    sx: {
                                                        "&:last-child td, &:last-child th": {
                                                            border: 0
                                                        }
                                                    },
                                                    className: (i % 2 !== 0 ? "bg-gray-200 text-center" : "text-center") + (playerSelected !== undefined && playerSelected.name === row.name ? " bg-green-600" : ""),
                                                    onClick: ()=>{
                                                        setPlayerSelected(row);
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "py-1",
                                                            children: row.dorsal
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "py-0",
                                                            children: row.position
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "text-xs py-0",
                                                            children: row.name
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "py-0",
                                                            align: "right",
                                                            children: row.stats.g
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "py-0",
                                                            align: "right",
                                                            children: row.stats.a
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "py-0",
                                                            align: "right",
                                                            children: row.stats.pim
                                                        })
                                                    ]
                                                }, row.name + i);
                                            } else {
                                                var ref, ref1, ref2;
                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.TableRow, {
                                                    sx: {
                                                        "&:last-child td, &:last-child th": {
                                                            border: 0
                                                        }
                                                    },
                                                    className: (i % 2 !== 0 ? "bg-gray-200 text-center" : "text-center") + (playerSelected !== undefined && playerSelected.name === row.name ? " bg-green-600" : ""),
                                                    onClick: ()=>{
                                                        setPlayerSelected(row);
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "py-1",
                                                            children: row.dorsal
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "py-0",
                                                            children: row.position
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "text-xs py-0",
                                                            children: row.name
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "py-0",
                                                            align: "right",
                                                            children: (ref = row.matchStats) === null || ref === void 0 ? void 0 : ref.g
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "py-0",
                                                            align: "right",
                                                            children: (ref1 = row.matchStats) === null || ref1 === void 0 ? void 0 : ref1.a
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx(material_.TableCell, {
                                                            className: "py-0",
                                                            align: "right",
                                                            children: (ref2 = row.matchStats) === null || ref2 === void 0 ? void 0 : ref2.pim
                                                        })
                                                    ]
                                                }, row.name + i);
                                            }
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
const ShootCounter = ({ shoots  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex-col flex items-center justify-center text-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "font-bold text-sm",
                children: "TIROS"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "font-bold text-2xl leading-5",
                children: shoots
            })
        ]
    });
};
const Score = ({ local , visitor  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "inline-flex items-center justify-center mx-3 text-yellow-400 font-bold text-4xl",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: local
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "mx-1.5",
                children: "-"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: visitor
            })
        ]
    });
};
const Time = ({ time , period , openModal , setModalType  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col items-center justify-center w-full font-bold bg-black text-[#00fafa] pb-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>{
                    openModal();
                    setModalType("period");
                },
                id: "period",
                className: "font-bold",
                children: period
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>{
                    openModal();
                    setModalType("clock");
                },
                className: "text-5xl font-bold",
                id: "time",
                children: time
            })
        ]
    });
};
const Selector = ({ setSelected , selected  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full inline-flex items-start justify-start",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "px-3 py-1 w-1/2 font-bold text-white transition-all " + (selected === "season" ? "bg-[#0078b2]" : "bg-black"),
                onClick: ()=>setSelected("season")
                ,
                children: "SEASON"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "px-3 py-1 w-1/2 font-bold text-white transition-all " + (selected === "game" ? "bg-[#0078b2]" : "bg-black"),
                onClick: ()=>setSelected("game")
                ,
                children: "GAME"
            })
        ]
    });
};
const Buttons = ({ timeHandler , timeRunning , goalHandler , shootHandler , saqueHandler , posesion , faultHandler  })=>{
    const classButton = "flex flex-col bg-[#0078b2] items-center justify-center text-white font-bold text-sm rounded-2xl mx-1 hover:bg-[#003954] transition-all";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full px-3 bg-[#656665] h-max inline-flex items-center justify-end",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inline-flex items-center justify-center w-2/5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: classButton + " w-24 h-24",
                        onClick: ()=>{
                            shootHandler("local");
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((GpsFixed_default()), {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "mt-1",
                                children: "TIRO"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: classButton + " w-24 h-24",
                        onClick: ()=>{
                            faultHandler("local");
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Sports_default()), {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "mt-1",
                                children: "FALTA"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: classButton + " w-24 h-24",
                        onClick: ()=>{
                            saqueHandler("local");
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((SportsHockey_default()), {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "mt-1",
                                children: "SAQUE"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: classButton + " w-24 h-24",
                        onClick: ()=>{
                            posesion("local");
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((HourglassBottom_default()), {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "mt-1",
                                children: "POSESION"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-center justify-center w-1/5 my-2 h-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "inline-flex items-center justify-center w-full h-full",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: classButton + " w-28 h-28",
                                onClick: ()=>{
                                    goalHandler("local");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((SportsScore_default()), {}),
                                    "GOAL"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                className: classButton + " w-28 h-28",
                                onClick: ()=>{
                                    goalHandler("visitor");
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((SportsScore_default()), {}),
                                    "GOAL"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>{
                            posesion("");
                            timeHandler(!timeRunning);
                        },
                        className: "w-5/6 bg-green-800 text-white text-xl font-bold rounded-xl py-2 border-2 border-black mt-3 transition-all hover:bg-green-600",
                        children: "START/STOP"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-row-reverse justify-center items-center w-2/5",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: classButton + " w-24 h-24",
                        onClick: ()=>{
                            shootHandler("visitor");
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((GpsFixed_default()), {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "mt-1",
                                children: "TIRO"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: classButton + " w-24 h-24",
                        onClick: ()=>{
                            faultHandler("visitor");
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Sports_default()), {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "mt-1",
                                children: "FALTA"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: classButton + " w-24 h-24",
                        onClick: ()=>{
                            saqueHandler("saque");
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((SportsHockey_default()), {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "mt-1",
                                children: "SAQUE"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: classButton + " w-24 h-24",
                        onClick: ()=>{
                            posesion("visitor");
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((HourglassBottom_default()), {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "mt-1",
                                children: "POSESION"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "@mui/icons-material/Storage"
var Storage_ = __webpack_require__(309);
var Storage_default = /*#__PURE__*/__webpack_require__.n(Storage_);
// EXTERNAL MODULE: external "@mui/icons-material/Edit"
var Edit_ = __webpack_require__(664);
var Edit_default = /*#__PURE__*/__webpack_require__.n(Edit_);
// EXTERNAL MODULE: external "@mui/icons-material/Cancel"
var Cancel_ = __webpack_require__(733);
var Cancel_default = /*#__PURE__*/__webpack_require__.n(Cancel_);
;// CONCATENATED MODULE: ./pages/controller.tsx







const periods = [
    "PERIODO 1",
    "DESCANSO",
    "PERIODO 2",
    "DESCANSO",
    "OVERTIME",
    "PENALTIES"
];
const perSmall = [
    "1st",
    "DES",
    "2nd",
    "DES",
    "OT",
    "PEN"
];
const faults = [
    "CC",
    "AG",
    "BE",
    "CA",
    "CG",
    "CE",
    "CI",
    "IF",
    "CZ",
    "SP",
    "EG",
    "MC",
    "RZ",
    "PP",
    "SL",
    "SA",
    "ZC",
    "VI"
];
const data = {
    time: "25:00",
    situation: "normal",
    period: {
        small: "1st",
        big: "PERIODO 1"
    },
    events: [],
    local: {
        lineup: "",
        fault1: "",
        fault2: "",
        string: "",
        playerSelected: "",
        players: 4,
        goals: {
            first: 0,
            second: 0,
            third: 0
        },
        shoots: {
            first: 0,
            second: 0,
            third: 0
        },
        faults: {
            first: 0,
            second: 0,
            third: 0
        },
        saques: {
            first: 0,
            second: 0,
            third: 0
        },
        pos: {
            first: 0,
            second: 0,
            third: 0
        },
        posTotal: 0,
        saquesTotal: 0,
        goalsTotal: 0,
        shootsTotal: 0,
        pimTotal: 0
    },
    visitor: {
        lineup: "",
        fault1: "",
        fault2: "",
        string: "",
        playerSelected: "",
        players: 4,
        goals: {
            first: 0,
            second: 0,
            third: 0
        },
        faults: {
            first: 0,
            second: 0,
            third: 0
        },
        shoots: {
            first: 0,
            second: 0,
            third: 0
        },
        saques: {
            first: 0,
            second: 0,
            third: 0
        },
        pos: {
            first: 0,
            second: 0,
            third: 0
        },
        posTotal: 0,
        saquesTotal: 0,
        goalsTotal: 0,
        shootsTotal: 0,
        pimTotal: 0
    }
};
const Menu = ({ match , players  })=>{
    var ref;
    const { 0: selected , 1: setSelected  } = (0,external_react_.useState)("season");
    const { 0: view , 1: setView  } = (0,external_react_.useState)(false);
    const { 0: modalType , 1: setModalType  } = (0,external_react_.useState)("");
    const { 0: localSelectedPlayer , 1: setLocalSelectedPlayer  } = (0,external_react_.useState)();
    const { 0: visitorSelectedPlayer , 1: setVisitorSelectedPlayer  } = (0,external_react_.useState)();
    const { 0: running , 1: setTimeRunning  } = (0,external_react_.useState)(false);
    const { 0: field1 , 1: setField1  } = (0,external_react_.useState)("");
    const { 0: field2 , 1: setField2  } = (0,external_react_.useState)("");
    const { 0: team1 , 1: setTeam  } = (0,external_react_.useState)("");
    const { 0: posesion , 1: setPosesion  } = (0,external_react_.useState)("");
    const { 0: update1 , 1: setUpdate  } = (0,external_react_.useState)("");
    let ms = 99;
    const localPlayerHandler = (row)=>{
        setLocalSelectedPlayer(row);
        data.local.playerSelected = row;
    };
    const visitorPlayerHandler = (row)=>{
        setVisitorSelectedPlayer(row);
        data.visitor.playerSelected = row;
    };
    const exportData = async ()=>{
        let req = await fetch("https://api.cplv-tv.tk/app/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const mixed = [];
        for(let i = 0; i < localPlayers.length; i++){
            mixed.push(localPlayers[i]);
        }
        for(let i1 = 0; i1 < visitorPlayers.length; i1++){
            mixed.push(visitorPlayers[i1]);
        }
        req = await fetch("https://api.cplv-tv.tk/app/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mixed)
        });
        return req.json();
    };
    const timer = async ()=>{
        if (running) {
            const time = document.querySelector("#realtime");
            if (time === null || time === undefined || time.textContent === null) return;
            const split = time.textContent.split(":");
            if (ms !== 0) {
                ms -= 1;
            } else if (time !== undefined) {
                if (data.local.fault1 !== "" || data.local.fault2 !== "") {
                    if (data.local.fault1 !== "") {
                        const fault1 = data.local.fault1.split(":");
                        let update = true;
                        if (Number(fault1[1]) === 0) {
                            if (Number(fault1[0]) === 0) {
                                if (data.local.fault2 !== "") {
                                    update = false;
                                    data.local.fault1 = data.local.fault2;
                                    data.local.players += 1;
                                    data.local.fault2 = "";
                                } else {
                                    data.local.fault1 = "";
                                }
                            } else {
                                fault1[0] = String(Number(fault1[0]) - 1);
                                fault1[1] = "59";
                            }
                        } else {
                            fault1[1] = String(Number(fault1[1]) - 1);
                        }
                        if (update) data.local.fault1 = `${Number(fault1[0]) < 10 ? "0" + Number(fault1[0]) : Number(fault1[0])}:${Number(fault1[1]) < 10 ? "0" + Number(fault1[1]) : Number(fault1[1])}`;
                        setUpdate(String(Math.random()));
                    }
                    if (data.local.fault2 !== "") {
                        const fault2 = data.local.fault2.split(":");
                        if (Number(fault2[1]) === 0) {
                            if (Number(fault2[0]) === 0) {
                                data.local.fault2 = "";
                            } else {
                                fault2[0] = String(Number(fault2[0]) - 1);
                                fault2[1] = "59";
                            }
                        } else {
                            fault2[1] = String(Number(fault2[1]) - 1);
                        }
                        data.local.fault2 = `${Number(fault2[0]) < 10 ? "0" + Number(fault2[0]) : Number(fault2[0])}:${Number(fault2[1]) < 10 ? "0" + Number(fault2[1]) : Number(fault2[1])}`;
                        setUpdate(String(Math.random()));
                    }
                }
                if (data.visitor.fault1 !== "" || data.visitor.fault2 !== "") {
                    if (data.visitor.fault1 !== "") {
                        const fault1 = data.visitor.fault1.split(":");
                        let update = true;
                        if (Number(fault1[1]) === 0) {
                            if (Number(fault1[0]) === 0) {
                                if (data.visitor.fault2 !== "") {
                                    update = false;
                                    data.visitor.fault1 = data.visitor.fault2;
                                    data.visitor.players += 1;
                                    data.visitor.fault2 = "";
                                } else {
                                    data.visitor.fault1 = "";
                                }
                            } else {
                                fault1[0] = String(Number(fault1[0]) - 1);
                                fault1[1] = "59";
                            }
                        } else {
                            fault1[1] = String(Number(fault1[1]) - 1);
                        }
                        if (update) data.visitor.fault1 = `${Number(fault1[0]) < 10 ? "0" + Number(fault1[0]) : Number(fault1[0])}:${Number(fault1[1]) < 10 ? "0" + Number(fault1[1]) : Number(fault1[1])}`;
                        setUpdate(String(Math.random()));
                    }
                    if (data.visitor.fault2 !== "") {
                        const fault2 = data.visitor.fault2.split(":");
                        if (Number(fault2[1]) === 0) {
                            if (Number(fault2[0]) === 0) {
                                data.visitor.fault2 = "";
                            } else {
                                fault2[0] = String(Number(fault2[0]) - 1);
                                fault2[1] = "59";
                            }
                        } else {
                            fault2[1] = String(Number(fault2[1]) - 1);
                        }
                        data.visitor.fault2 = `${Number(fault2[0]) < 10 ? "0" + Number(fault2[0]) : Number(fault2[0])}:${Number(fault2[1]) < 10 ? "0" + Number(fault2[1]) : Number(fault2[1])}`;
                        setUpdate(String(Math.random()));
                    }
                }
                if (posesion !== "") {
                    const passed = 25 * 60 - (Number(split[0]) * 60 + Number(split[1]));
                    if (data.period.big === "PERIODO 1") {
                        if (posesion === "local") {
                            data.local.pos.first += 1;
                        } else {
                            data.visitor.pos.first += 1;
                        }
                        data.visitor.posTotal = Number((data.visitor.pos.first * 100 / passed).toFixed(2));
                        data.local.posTotal = Number((data.local.pos.first * 100 / passed).toFixed(2));
                    } else if (data.period.big === "PERIODO 2") {
                        if (posesion === "local") {
                            data.local.pos.second += 1;
                        } else {
                            data.visitor.pos.second += 1;
                        }
                        data.visitor.posTotal = Number((data.visitor.pos.first * 100 / passed).toFixed(2));
                        data.local.posTotal = Number((data.local.pos.second * 100 / passed).toFixed(2));
                    } else if (data.period.big === "OVERTIME") {
                        if (posesion === "local") {
                            data.local.pos.third += 1;
                        } else {
                            data.visitor.pos.third += 1;
                        }
                        data.visitor.posTotal = Number((data.visitor.pos.first * 100 / passed).toFixed(2));
                        data.local.posTotal = Number((data.local.pos.third * 100 / passed).toFixed(2));
                    }
                    setUpdate(String(Math.random()));
                }
                if (Number(split[1]) === 0) {
                    if (Number(split[0]) === 0) {
                        split[0] = "0";
                        split[1] = "0";
                        setTimeRunning(false);
                        data.period.big = periods[periods.indexOf(data.period.big) + 1];
                        data.period.small = perSmall[periods.indexOf(data.period.big) + 1];
                        data.visitor.posTotal = 0;
                        data.local.posTotal = 0;
                    } else {
                        split[0] = String(Number(split[0]) - 1);
                        split[1] = "59";
                        ms = 60;
                    }
                } else {
                    split[1] = String(Number(split[1]) - 1);
                    ms = 60;
                }
            }
            time.innerHTML = `${Number(split[0]) < 10 ? "0" + Number(split[0]) : Number(split[0])}:${Number(split[1]) < 10 ? "0" + Number(split[1]) : Number(split[1])}`;
            data.time = `${Number(split[0]) < 10 ? "0" + Number(split[0]) : Number(split[0])}:${Number(split[1]) < 10 ? "0" + Number(split[1]) : Number(split[1])}`;
            const change = document.querySelector("#time");
            if (change !== null) {
                if (Number(split[0]) >= 1) {
                    change.innerHTML = `${Number(split[0]) < 10 ? "0" + Number(split[0]) : Number(split[0])}:${Number(split[1]) < 10 ? "0" + Number(split[1]) : Number(split[1])}`;
                } else {
                    change.innerHTML = `${Number(split[1]) < 10 ? "0" + Number(split[1]) : Number(split[1])}.${ms < 10 ? "0" + Number(ms) : ms}`;
                }
            }
        }
    };
    const shootHandler = (team)=>{
        setTeam(team);
        if (team === "local") {
            if (data.period.big === "PERIODO 1") {
                data.local.shoots.first += 1;
                data.local.shootsTotal += 1;
            } else if (data.period.big === "PERIODO 2") {
                data.local.shoots.second += 1;
                data.local.shootsTotal += 1;
            } else if (data.period.big === "OVERTIME") {
                data.local.shoots.third += 1;
                data.local.shootsTotal += 1;
            }
            setUpdate(String(Math.random()));
        } else {
            if (data.period.big === "PERIODO 1") {
                data.visitor.shoots.first += 1;
                data.visitor.shootsTotal += 1;
            } else if (data.period.big === "PERIODO 2") {
                data.visitor.shoots.second += 1;
                data.visitor.shootsTotal += 1;
            } else if (data.period.big === "OVERTIME") {
                data.visitor.shoots.third += 1;
                data.visitor.shootsTotal += 1;
            }
            setUpdate(String(Math.random()));
        }
    };
    const posesionHandler = (team)=>{
        setPosesion(team);
        setUpdate(String(Math.random()));
    };
    const faultHandler = (team)=>{
        setTeam(team);
        setModalType("fault");
        openModal();
    };
    const openModal = ()=>{
        setField1("");
        setField2("");
        setTimeRunning(false);
        setView(true);
    };
    const goalHandler = (team)=>{
        setModalType("goal");
        setTeam(team);
        openModal();
    };
    (0,external_react_.useEffect)(()=>{
        const id = setInterval(()=>{
            timer();
        }, 10);
        const id2 = setInterval(()=>{
            exportData();
        }, 1000);
        return ()=>{
            clearInterval(id);
            clearInterval(id2);
        };
    }, [
        running,
        posesion
    ]);
    const saqueHandler = (team)=>{
        if (team === "local") {
            if (data.period.big === "PERIODO 1") {
                data.local.saques.first += 1;
                data.local.saquesTotal += 1;
            } else if (data.period.big === "PERIODO 2") {
                data.local.saques.second += 1;
                data.local.saquesTotal += 1;
            } else if (data.period.big === "OVERTIME") {
                data.local.saques.third += 1;
                data.local.saquesTotal += 1;
            }
            setUpdate(String(Math.random()));
        } else {
            if (data.period.big === "PERIODO 1") {
                data.visitor.saques.first += 1;
                data.visitor.saquesTotal += 1;
            } else if (data.period.big === "PERIODO 2") {
                data.visitor.saques.second += 1;
                data.visitor.saquesTotal += 1;
            } else if (data.period.big === "OVERTIME") {
                data.visitor.saques.third += 1;
                data.visitor.saquesTotal += 1;
            }
            setUpdate(String(Math.random()));
        }
    };
    const handleSave = ()=>{
        if (modalType === "clock") {
            const time = document.querySelector("#realtime");
            const change = document.querySelector("#time");
            if (time === null || time === undefined || change === null) return;
            time.textContent = field1;
            change.innerHTML = field1;
        } else if (modalType === "period") {
            if (field1 === "PERIODO 1" || field1 === "PERIODO 2") {
                const time = document.querySelector("#realtime");
                const change = document.querySelector("#time");
                if (time === null || time === undefined || change === null) return;
                time.textContent = "25:00";
                change.innerHTML = "25:00";
            } else if (field1 === "OVERTIME") {
                const time = document.querySelector("#realtime");
                const change = document.querySelector("#time");
                if (time === null || time === undefined || change === null) return;
                time.textContent = "05:00";
                change.innerHTML = "05:00";
            }
            data.period.big = field1;
            data.period.small = perSmall[periods.indexOf(field1)];
        } else if (modalType === "goal") {
            data.events.push({
                type: "goal",
                team: team1,
                goal: field1,
                assist: field2,
                time: data.time,
                period: data.period.small
            });
            if (team1 === "local") {
                if (data.period.big === "PERIODO 1") {
                    data.local.goals.first += 1;
                    data.local.shoots.first += 1;
                } else if (data.period.big === "PERIODO 2") {
                    data.local.goals.second += 1;
                    data.local.shoots.second += 1;
                } else if (data.period.big === "OVERTIME") {
                    data.local.goals.third += 1;
                    data.local.shoots.third += 1;
                }
                data.local.goalsTotal += 1;
                data.local.shootsTotal += 1;
                let goal = "";
                let assist = "";
                if (field1 !== "") {
                    const split = getObjects(localPlayers, "dorsal", field1)[0].name.split(",");
                    goal = `${split[1]} ${split[0].split(" ")[0]}`;
                    for(let i = 0; i < localPlayers.length; i++){
                        if (localPlayers[i].dorsal === field1) {
                            localPlayers[i].matchStats.g += 1;
                        }
                    }
                }
                if (field2 !== "") {
                    const split = getObjects(localPlayers, "dorsal", field2)[0].name.split(",");
                    assist = `${split[1]} ${split[0].split(" ")[0]}`;
                    for(let i = 0; i < localPlayers.length; i++){
                        if (localPlayers[i].dorsal === field2) {
                            localPlayers[i].matchStats.a += 1;
                        }
                    }
                }
                if (data.local.fault1 !== "") data.local.fault1 = "00:00";
                data.local.string = "G: " + goal + (field2 !== "" ? `, A: ${assist}` : "");
            } else {
                if (data.period.big === "PERIODO 1") {
                    data.visitor.goals.first += 1;
                    data.visitor.shoots.first += 1;
                } else if (data.period.big === "PERIODO 2") {
                    data.visitor.goals.second += 1;
                    data.visitor.shoots.second += 1;
                } else if (data.period.big === "OVERTIME") {
                    data.visitor.goals.third += 1;
                    data.visitor.shoots.third += 1;
                }
                data.visitor.goalsTotal += 1;
                data.visitor.shootsTotal += 1;
                let goal = "";
                let assist = "";
                if (field1 !== "") {
                    const split = getObjects(visitorPlayers, "dorsal", field1)[0].name.split(",");
                    goal = `${split[1]} ${split[0].split(" ")[0]}`;
                    for(let i = 0; i < visitorPlayers.length; i++){
                        if (visitorPlayers[i].dorsal === field1) {
                            visitorPlayers[i].matchStats.g += 1;
                        }
                    }
                }
                if (field2 !== "") {
                    const split = getObjects(visitorPlayers, "dorsal", field2)[0].name.split(",");
                    assist = `${split[1]} ${split[0].split(" ")[0]}`;
                    for(let i = 0; i < visitorPlayers.length; i++){
                        if (visitorPlayers[i].dorsal === field2) {
                            visitorPlayers[i].matchStats.a += 1;
                        }
                    }
                }
                if (data.visitor.fault1 !== "") data.visitor.fault1 = "00:00";
                data.visitor.string = "G: " + goal + (field2 !== "" ? `, A: ${assist}` : "");
            }
        } else if (modalType === "fault") {
            data.events.push({
                type: "fault",
                team: team1,
                goal: field1,
                assist: field2,
                time: data.time,
                period: data.period.small
            });
            if (team1 === "local") {
                if (data.period.big === "PERIODO 1") {
                    data.local.faults.first += 1;
                } else if (data.period.big === "PERIODO 2") {
                    data.local.faults.second += 1;
                } else if (data.period.big === "OVERTIME") {
                    data.local.faults.third += 1;
                }
                data.local.pimTotal += 2;
                if (data.local.fault1 === "") {
                    data.local.fault1 = "02:00";
                } else if (data.local.fault2 === "") {
                    data.local.fault2 = "02:00";
                }
                if (data.local.players >= 3) data.local.players -= 1;
                if (data.local.players === 4 && data.visitor.players === 4) data.situation = "POWERPLAY";
                else data.situation = data.local.players + " vs " + data.visitor.players;
                for(let i = 0; i < localPlayers.length; i++){
                    if (localPlayers[i].dorsal === field1) {
                        localPlayers[i].matchStats.pim += 2;
                    }
                }
                const split = getObjects(localPlayers, "dorsal", field1)[0].name.split(",");
                const fault = `${split[1]} ${split[0].split(" ")[0]}`;
                data.local.string = `${fault}, F: ${field2}`;
            } else if (team1 === "visitor") {
                if (data.period.big === "PERIODO 1") {
                    data.visitor.faults.first += 1;
                } else if (data.period.big === "PERIODO 2") {
                    data.visitor.faults.second += 1;
                } else if (data.period.big === "OVERTIME") {
                    data.visitor.faults.third += 1;
                }
                data.visitor.pimTotal += 2;
                if (data.visitor.fault1 === "") {
                    data.visitor.fault1 = "02:00";
                } else if (data.visitor.fault2 === "") {
                    data.visitor.fault2 = "02:00";
                }
                for(let i = 0; i < visitorPlayers.length; i++){
                    if (visitorPlayers[i].dorsal === field1) {
                        visitorPlayers[i].matchStats.pim += 2;
                    }
                }
                if (data.visitor.players >= 3) data.visitor.players -= 1;
                if (data.local.players === 4 && data.visitor.players === 4) data.situation = "POWERPLAY";
                else data.situation = data.local.players + " vs " + data.visitor.players;
                const split = getObjects(visitorPlayers, "dorsal", field1)[0].name.split(",");
                const fault = `${split[1]} ${split[0].split(" ")[0]}`;
                data.visitor.string = `${fault}, F: ${field2}`;
            }
        }
    };
    let localPlayers = players.filter((a)=>a.team.acronym === match.local.acronym
    );
    localPlayers = localPlayers.sort((a, b)=>Number(a.dorsal) - Number(b.dorsal)
    );
    let visitorPlayers = players.filter((a)=>a.team.acronym === match.visitor.acronym
    );
    visitorPlayers = visitorPlayers.sort((a, b)=>Number(a.dorsal) - Number(b.dorsal)
    );
    localPlayers.forEach((p)=>{
        data.local.lineup += `${p.dorsal}.- ${p.name}\n`;
    });
    visitorPlayers.forEach((p)=>{
        data.visitor.lineup += `${p.dorsal}.- ${p.name}\n`;
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-screen h-full bg-gray-300",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "realtime",
                className: "hidden",
                children: "25:00"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden",
                children: update1
            }),
            view && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full h-full absolute z-10 bg-black/60 flex items-center justify-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col items-center justify-start bg-white rounded " + (modalType !== "goal" && modalType !== "fault" ? "w-1/3" : "w-1/2"),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-left w-full bg-[#013a54] text-white font-semibold inline-flex items-center justify-start px-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Storage_default()), {}),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "ml-1",
                                    children: [
                                        "EDICION DE ",
                                        modalType.toUpperCase(),
                                        "..."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                modalType === "clock" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mt-5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        onChange: (e)=>{
                                            setField1(e.target.value);
                                        },
                                        className: "bg-gray-300 p-2 rounded font-bold w-28 text-center text-2xl",
                                        defaultValue: ((ref = document.querySelector("#realtime")) === null || ref === void 0 ? void 0 : ref.textContent) || ""
                                    })
                                }),
                                modalType === "period" && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mt-5",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Box, {
                                        sx: {
                                            minWidth: 200
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.FormControl, {
                                            fullWidth: true,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.InputLabel, {
                                                    children: "Period"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(material_.Select, {
                                                    value: field1,
                                                    label: "Periodo",
                                                    onChange: (e)=>{
                                                        setField1(e.target.value);
                                                    },
                                                    children: periods.map((m, i)=>/*#__PURE__*/ jsx_runtime_.jsx(material_.MenuItem, {
                                                            value: m,
                                                            children: m
                                                        }, "menuy" + i)
                                                    )
                                                })
                                            ]
                                        })
                                    })
                                }),
                                modalType === "goal" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col my-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-bold py-2",
                                            children: "ANOTADOR"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "",
                                            children: team1 === "local" ? localPlayers.map((player, i)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    onClick: ()=>{
                                                        setField1(player.dorsal);
                                                    },
                                                    className: "mx-1 px-2 py-0.5 rounded-lg " + (field1 === player.dorsal ? "bg-yellow-300" : "bg-gray-300"),
                                                    children: player.dorsal
                                                }, "pg" + i)
                                            ) : visitorPlayers.map((player, i)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    onClick: ()=>{
                                                        setField1(player.dorsal);
                                                    },
                                                    className: "mx-1 px-2 py-0.5 rounded-lg " + (field1 === player.dorsal ? "bg-yellow-300" : "bg-gray-300"),
                                                    children: player.dorsal
                                                }, "pg" + i)
                                            )
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-bold py-2",
                                            children: "ASSISTENCIA"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "",
                                            children: team1 === "local" ? localPlayers.map((player, i)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    onClick: ()=>{
                                                        setField2(player.dorsal);
                                                    },
                                                    className: "mx-1 px-2 py-0.5 rounded-lg " + (field2 === player.dorsal ? "bg-yellow-300" : "bg-gray-300"),
                                                    children: player.dorsal
                                                }, "pg" + i)
                                            ) : visitorPlayers.map((player, i)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    onClick: ()=>{
                                                        setField2(player.dorsal);
                                                    },
                                                    className: "mx-1 px-2 py-0.5 rounded-lg " + (field2 === player.dorsal ? "bg-yellow-300" : "bg-gray-300"),
                                                    children: player.dorsal
                                                }, "pg" + i)
                                            )
                                        })
                                    ]
                                }),
                                modalType === "fault" && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-col my-5",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-bold py-2",
                                            children: "JUGADOR"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "",
                                            children: team1 === "local" ? localPlayers.map((player, i)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    onClick: ()=>{
                                                        setField1(player.dorsal);
                                                    },
                                                    className: "mx-1 px-2 py-0.5 rounded-lg " + (field1 === player.dorsal ? "bg-yellow-300" : "bg-gray-300"),
                                                    children: player.dorsal
                                                }, "pg" + i)
                                            ) : visitorPlayers.map((player, i)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    onClick: ()=>{
                                                        setField1(player.dorsal);
                                                    },
                                                    className: "mx-1 px-2 py-0.5 rounded-lg " + (field1 === player.dorsal ? "bg-yellow-300" : "bg-gray-300"),
                                                    children: player.dorsal
                                                }, "pg" + i)
                                            )
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-bold py-2",
                                            children: "FALTA"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "",
                                            children: faults.map((fault, i)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    onClick: ()=>{
                                                        setField2(fault);
                                                    },
                                                    className: "mx-1 px-2 py-0.5 rounded-lg " + (field2 === fault ? "bg-yellow-300" : "bg-gray-300"),
                                                    children: fault
                                                }, "pg" + i)
                                            )
                                        })
                                    ]
                                })
                            ]
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
                                        handleSave();
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
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inline-flex flex-wrap w-full h-special-1 items-start justify-start",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TeamComponent, {
                        selected: selected,
                        team: "local",
                        match: match.local,
                        players: localPlayers,
                        playerSelected: localSelectedPlayer,
                        setPlayerSelected: localPlayerHandler
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-1/5 h-full flex flex-col items-start justify-start",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full h-12 inline-flex items-center justify-center bg-black",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(ShootCounter, {
                                        shoots: data.local.shootsTotal
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Score, {
                                        local: data.local.goalsTotal,
                                        visitor: data.visitor.goalsTotal
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ShootCounter, {
                                        shoots: data.visitor.shootsTotal
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Time, {
                                period: data.period.big,
                                time: data.time,
                                openModal: openModal,
                                setModalType: setModalType
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full border-t border-b bg-black flex flex-col text-white font-bold items-center justify-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-xl py-1",
                                        children: "SITUACION"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-full inline-flex items-center justify-center border-t",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "w-1/2 text-center text-2xl",
                                                children: data.local.players
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "VS"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "w-1/2 text-center text-2xl",
                                                children: data.visitor.players
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full border-t border-b bg-black flex flex-col text-white font-bold items-center justify-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-xl py-1",
                                        children: "SAQUES"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-full inline-flex items-center justify-center border-t",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "w-1/2 text-center text-2xl border-r",
                                                children: data.local.saquesTotal
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "w-1/2 text-center text-2xl",
                                                children: data.visitor.saquesTotal
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full border-t border-b bg-black flex flex-col text-white font-bold items-center justify-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-xl py-1",
                                        children: "POSESION"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-full inline-flex items-center justify-center border-t",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "w-1/2 text-center text-2xl border-r",
                                                children: [
                                                    data.local.posTotal,
                                                    "%"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "w-1/2 text-center text-2xl",
                                                children: [
                                                    data.visitor.posTotal,
                                                    "%"
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full border-t border-b bg-black flex flex-col text-white font-bold items-center justify-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-xl py-1",
                                        children: "FALTAS"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-full inline-flex items-center justify-center border-t",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "w-1/2 flex flex-col items-center justify-start border-r",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "w-full border-b text-center",
                                                        children: data.local.fault1
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: data.local.fault2
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "w-1/2 flex flex-col items-center justify-start",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "w-full border-b text-center",
                                                        children: data.visitor.fault1
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: data.visitor.fault2
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Selector, {
                                selected: selected,
                                setSelected: setSelected
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TeamComponent, {
                        selected: selected,
                        team: "visitor",
                        match: match.visitor,
                        players: visitorPlayers,
                        playerSelected: visitorSelectedPlayer,
                        setPlayerSelected: visitorPlayerHandler
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[188px] absolute w-full bottom-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Buttons, {
                    timeHandler: setTimeRunning,
                    timeRunning: running,
                    goalHandler: goalHandler,
                    shootHandler: shootHandler,
                    saqueHandler: saqueHandler,
                    posesion: posesionHandler,
                    faultHandler: faultHandler
                })
            })
        ]
    });
};
const getServerSideProps = async ({ res  })=>{
    let request = await fetch("https://api.cplv-tv.tk/app/players");
    const players = await request.json();
    request = await fetch("https://api.cplv-tv.tk/app/select");
    const idp = Number(await request.json());
    if (idp === 0 || players.length === 0) {
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
    const data1 = await request.json();
    match.local.name = getObjects(data1, "acronym", match.local.acronym)[0].name;
    match.visitor.name = getObjects(data1, "acronym", match.visitor.acronym)[0].name;
    return {
        props: {
            match,
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
/* harmony default export */ const controller = (Menu);


/***/ }),

/***/ 733:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Cancel");

/***/ }),

/***/ 664:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Edit");

/***/ }),

/***/ 309:
/***/ ((module) => {

module.exports = require("@mui/icons-material/Storage");

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
var __webpack_exports__ = __webpack_require__.X(0, [675], () => (__webpack_exec__(953)));
module.exports = __webpack_exports__;

})();