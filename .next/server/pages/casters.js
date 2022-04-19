"use strict";
(() => {
var exports = {};
exports.id = 510;
exports.ids = [510];
exports.modules = {

/***/ 352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ casters),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./Components/Header.tsx + 1 modules
var Header = __webpack_require__(339);
// EXTERNAL MODULE: ./Components/MatchHeader.tsx
var MatchHeader = __webpack_require__(343);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
;// CONCATENATED MODULE: external "@mui/icons-material/AccessTime"
const AccessTime_namespaceObject = require("@mui/icons-material/AccessTime");
var AccessTime_default = /*#__PURE__*/__webpack_require__.n(AccessTime_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Close"
const Close_namespaceObject = require("@mui/icons-material/Close");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./pages/casters.tsx







const Casters = ({ match  })=>{
    const { 0: data , 1: setData  } = (0,external_react_.useState)();
    const { 0: players , 1: setPlayers  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        async function getServerData() {
            const req = await fetch("https://api.cplv-tv.tk/app/data");
            setData(await req.json());
            const request = await fetch("https://api.cplv-tv.tk/app/players");
            setPlayers(await request.json());
        }
        getServerData();
        const id = setInterval(()=>{
            getServerData();
        }, 1000);
        return ()=>clearInterval(id)
        ;
    }, []);
    if (data === undefined) return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: "LOADING..."
    });
    let localPlayers;
    let visitorPlayers;
    const events = data.events.map((item)=>item
    ).reverse();
    if (players !== undefined) {
        localPlayers = players.filter((p)=>p.team.acronym === match.local.acronym
        );
        visitorPlayers = players.filter((p)=>p.team.acronym === match.visitor.acronym
        );
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-screen h-full bg-white flex flex-col items-center justify-start",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(MatchHeader/* default */.Z, {
                match: match
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "inline-flex w-full items-center justify-center h-max py-4 border-b border-black bg-gray-500 text-white",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "inline-flex items-center justify-center mx-10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: match.local.logo,
                                width: 100,
                                height: 100
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col items-start justify-start ml-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: match.local.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "(",
                                            match.local.acronym,
                                            ")"
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "font-semibold",
                                children: data.period.big
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "font-bold text-4xl",
                                children: data.time
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "inline-flex items-center justify-center mx-10",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col items-end justify-start mr-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: match.visitor.name
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "(",
                                            match.visitor.acronym,
                                            ")"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: match.visitor.logo,
                                width: 100,
                                height: 100
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col w-5/6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full m-2 inline-flex items-center justify-center",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                            className: "border-[#d5d6d5]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                    className: "bg-[#d5d6d5]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                        className: "text-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            className: "border-r border-white",
                                            colSpan: 3,
                                            children: "POSESI\xd3N"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                        className: "text-center border-b border-[#d5d6d5]",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                className: "text-left inline-flex items-center border-r justify-center w-[80px]",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                        src: match.local.logo,
                                                        height: 25,
                                                        width: 25
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "mx-2",
                                                        children: match.local.acronym
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                className: "text-left inline-flex relative border-r w-[800px]",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "mx-2",
                                                        children: [
                                                            data.local.posTotal,
                                                            "%"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        style: {
                                                            width: `${data.local.posTotal * 800 / 100}px`
                                                        },
                                                        className: "float-left bg-[#0087bd] h-[20px]"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        style: {
                                                            width: `${(100 - (data.local.posTotal + data.visitor.posTotal)) * 800 / 100}px`
                                                        },
                                                        className: "float-left text-center bg-[#d5d6d5] h-[20px]",
                                                        children: [
                                                            (100 - (data.local.posTotal + data.visitor.posTotal)).toFixed(2),
                                                            "%"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        style: {
                                                            width: `${data.visitor.posTotal * 800 / 100}px`
                                                        },
                                                        className: "float-right bg-[#ff0101] h-[20px]"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "mx-2",
                                                        children: [
                                                            data.visitor.posTotal,
                                                            "%"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                className: "text-left inline-flex items-center border-r justify-center w-[80px]",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "mx-2",
                                                        children: match.visitor.acronym
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                        src: match.visitor.logo,
                                                        height: 25,
                                                        width: 25
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "inline-flex items-center justify-center w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex flex-col border m-2 w-4/6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                    className: "border-[#d5d6d5]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                            className: "bg-[#d5d6d5]",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "border-r border-white",
                                                        colSpan: 2,
                                                        children: "% GOLES / TIROS A PUERTA"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[60px] border-r border-white",
                                                        children: "Goles"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[60px] border-r border-white",
                                                        children: "Tiros"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[60px]",
                                                        children: "%"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    className: "text-center border-b border-[#d5d6d5]",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                            className: "text-left inline-flex items-center border-r justify-center w-[80px]",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                    src: match.local.logo,
                                                                    height: 25,
                                                                    width: 25
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "mx-2",
                                                                    children: match.local.acronym
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                            className: "text-left relative border-r w-[325px]",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    style: {
                                                                        width: `${data.local.goalsTotal * 325 / 50}px`
                                                                    },
                                                                    className: "absolute bg-[#0087bd] h-[20px]"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    style: {
                                                                        width: `${data.local.shootsTotal * 325 / 50}px`
                                                                    },
                                                                    className: "bg-[#d5d6d5] h-[20px]"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.local.goalsTotal
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.local.shootsTotal
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            children: isNaN(data.local.goalsTotal * 100 / data.local.shootsTotal) ? "0.00" : (data.local.goalsTotal * 100 / data.local.shootsTotal).toFixed(2)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    className: "text-center border-[#d5d6d5]",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                            className: "text-left inline-flex items-center border-r justify-center w-[80px]",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                    src: match.visitor.logo,
                                                                    height: 25,
                                                                    width: 25
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "mx-2",
                                                                    children: match.visitor.acronym
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                            className: "text-left relative border-r w-[325px]",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    style: {
                                                                        width: `${data.visitor.goalsTotal * 325 / 50}px`
                                                                    },
                                                                    className: "absolute bg-[#0087bd] h-[20px]"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    style: {
                                                                        width: `${data.visitor.shootsTotal * 325 / 50}px`
                                                                    },
                                                                    className: "bg-[#d5d6d5] h-[20px]"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.visitor.goalsTotal
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.visitor.shootsTotal
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            children: isNaN(data.visitor.goalsTotal * 100 / data.visitor.shootsTotal) ? "0.00" : (data.visitor.goalsTotal * 100 / data.visitor.shootsTotal).toFixed(2)
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex flex-col border m-2 w-2/6",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                    className: "border-[#d5d6d5] text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                            className: "bg-[#d5d6d5] border-white",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "border-r",
                                                        colSpan: 2,
                                                        children: "MINUTOS DE SANCI\xd3N"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[60px] border-r ",
                                                        children: "Min"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    className: "border-b border-[#d5d6d5]",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                            className: "text-left inline-flex items-center border-r justify-center w-[80px]",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                    src: match.local.logo,
                                                                    height: 25,
                                                                    width: 25
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "mx-2",
                                                                    children: match.local.acronym
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                            className: "text-left relative border-r w-[150px]",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    style: {
                                                                        width: `${data.local.pimTotal * 150 / 20}px`
                                                                    },
                                                                    className: "bg-[#0087bd] h-[20px]"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            children: data.local.pimTotal
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    className: "border-b border-[#d5d6d5]",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                            className: "text-left inline-flex items-center border-r justify-center w-[80px]",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                    src: match.visitor.logo,
                                                                    height: 25,
                                                                    width: 25
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "mx-2",
                                                                    children: match.visitor.acronym
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "text-left relative border-r w-[150px]",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                style: {
                                                                    width: `${data.visitor.pimTotal * 150 / 20}px`
                                                                },
                                                                className: "bg-[#0087bd] h-[20px]"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            children: data.visitor.pimTotal
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "inline-flex items-center justify-center w-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex flex-col border m-2 w-full",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                    className: "border-[#d5d6d5] text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                            className: "border-white",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                className: " bg-[#d5d6d5] w-full",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[3px]"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[150px] text-left border-r",
                                                        children: "MARCADOR"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[20px] border-r",
                                                        children: "P1"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[20px] border-r",
                                                        children: "P2"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[20px] border-r",
                                                        children: "OT"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[20px]",
                                                        children: "Tot"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    className: "border-b",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {}),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                            className: "text-left border-r flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                    src: match.local.logo,
                                                                    height: 25,
                                                                    width: 25
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "mx-2",
                                                                    children: match.local.acronym
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.local.goals.first
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.local.goals.second
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.local.goals.third
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "bg-[#0087bd] text-white font-bold",
                                                            children: data.local.goalsTotal
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {}),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                            className: "text-left border-r flex items-center",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                    src: match.visitor.logo,
                                                                    height: 25,
                                                                    width: 25
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "mx-2",
                                                                    children: match.visitor.acronym
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.visitor.goals.first
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.visitor.goals.second
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.visitor.goals.third
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "bg-[#0087bd] text-white font-bold",
                                                            children: data.visitor.goalsTotal
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex flex-col border m-2 w-full",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                    className: "border-[#d5d6d5] text-center",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                            className: "border-white",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                className: "bg-[#d5d6d5] w-full",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[3px]"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[150px] border-r text-left",
                                                        children: "PENALIZACIONES"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[20px] border-r",
                                                        children: "P1"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[20px] border-r",
                                                        children: "P2"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[20px] border-r",
                                                        children: "OT"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                        className: "w-[20px]",
                                                        children: "Tot"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    className: "border-b",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "text-left border-r",
                                                            children: match.local.acronym
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.local.faults.first
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.local.faults.second
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.local.faults.third
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "text-white font-bold bg-[#0087bd]",
                                                            children: data.local.pimTotal
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "text-left border-r",
                                                            children: match.visitor.acronym
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.visitor.faults.first
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.visitor.faults.second
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "border-r",
                                                            children: data.visitor.faults.third
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "text-white font-bold bg-[#0087bd]",
                                                            children: data.visitor.pimTotal
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full inline-flex",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-1/2 m-2 border",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                        className: "w-full text-center",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("thead", {
                                                className: "border-white bg-[#d5d6d5]",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            colSpan: 7,
                                                            className: "border-b font-bold",
                                                            children: match.local.name
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border-r w-[35px]",
                                                                children: "#"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border-r w-[35px]",
                                                                children: "Pos"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border-r text-left pl-2",
                                                                children: "Jugador"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border-r w-[40px]",
                                                                children: "PT"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border-r w-[40px]",
                                                                children: "Gol"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border-r w-[40px]",
                                                                children: "Ast"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                children: "Pim"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                                children: [
                                                    localPlayers !== undefined && localPlayers.map((p, _i)=>{
                                                        if (p.position !== undefined && p.position.indexOf("P") !== -1) return /*#__PURE__*/ jsx_runtime_.jsx("tr", {}, "extra" + _i);
                                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                            className: "border-b",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r",
                                                                    children: p.dorsal
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r",
                                                                    children: p.position || ""
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r text-left pl-2",
                                                                    children: p.name
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r",
                                                                    children: p.matchStats.g + p.matchStats.a
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r",
                                                                    children: p.matchStats.g
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r",
                                                                    children: p.matchStats.a
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    children: p.matchStats.pim
                                                                })
                                                            ]
                                                        }, "localPLayer" + _i);
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "bg-[#d5d6d5]",
                                                            colSpan: 7,
                                                            children: "PORTEROS"
                                                        })
                                                    }),
                                                    localPlayers !== undefined && localPlayers.map((p, _i)=>{
                                                        if (p.position === undefined || p.position.indexOf("P") === -1) return /*#__PURE__*/ jsx_runtime_.jsx("tr", {}, "extra" + _i);
                                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                            className: "border-b",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r",
                                                                    children: p.dorsal
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r",
                                                                    children: p.position || ""
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r text-left pl-2",
                                                                    colSpan: 5,
                                                                    children: p.name
                                                                })
                                                            ]
                                                        }, "localPLayer" + _i);
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                        className: "w-full text-center mt-4",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("thead", {
                                                className: "border-white bg-[#d5d6d5]",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            colSpan: 7,
                                                            className: "border-b font-bold",
                                                            children: match.visitor.name
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border-r w-[35px]",
                                                                children: "#"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border-r w-[35px]",
                                                                children: "Pos"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border-r text-left pl-2",
                                                                children: "Jugador"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border-r w-[40px]",
                                                                children: "PT"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border-r w-[40px]",
                                                                children: "Gol"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                className: "border-r w-[40px]",
                                                                children: "Ast"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                children: "Pim"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                                                children: [
                                                    visitorPlayers !== undefined && visitorPlayers.map((p, _i)=>{
                                                        if (p.position !== undefined && p.position.indexOf("P") !== -1) return /*#__PURE__*/ jsx_runtime_.jsx("tr", {}, "extra" + _i);
                                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                            className: "border-b",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r",
                                                                    children: p.dorsal
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r",
                                                                    children: p.position || ""
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r text-left pl-2",
                                                                    children: p.name
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r",
                                                                    children: p.matchStats.g + p.matchStats.a
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r",
                                                                    children: p.matchStats.g
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r",
                                                                    children: p.matchStats.a
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    children: p.matchStats.pim
                                                                })
                                                            ]
                                                        }, "localPLayer" + _i);
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "bg-[#d5d6d5]",
                                                            colSpan: 7,
                                                            children: "PORTEROS"
                                                        })
                                                    }),
                                                    visitorPlayers !== undefined && visitorPlayers.map((p, _i)=>{
                                                        if (p.position === undefined || p.position.indexOf("P") === -1) return /*#__PURE__*/ jsx_runtime_.jsx("tr", {}, "extra" + _i);
                                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                            className: "border-b",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r",
                                                                    children: p.dorsal
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r",
                                                                    children: p.position || ""
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                                    className: "border-r text-left pl-2",
                                                                    colSpan: 5,
                                                                    children: p.name
                                                                })
                                                            ]
                                                        }, "localPLayer" + _i);
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-1/2 m-2 border",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                                            className: "bg-[#d5d6d5] w-full",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                    colSpan: 3,
                                                    className: "pl-2 font-bold",
                                                    children: "INCIDENCIAS"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                                            children: events !== undefined && localPlayers !== undefined && visitorPlayers !== undefined && events.map((e, _i)=>{
                                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                                    className: "border-b inline-flex items-center justify-start w-full pl-2",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                            className: "flex-col flex items-center justify-center mt-2",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                    src: e.team === "local" ? match.local.logo : match.visitor.logo,
                                                                    width: 23,
                                                                    height: 23
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx((AccessTime_default()), {
                                                                            fontSize: "small",
                                                                            className: "w-[15-px] h-[15px] mb-0.5 mr-0.5"
                                                                        }),
                                                                        e.time
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                                            className: "h-full mx-3",
                                                            children: e.type === "goal" ? /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                                src: "https://www.sidgad.com/shared/portales_files/images/icon_gol.png",
                                                                width: 25,
                                                                height: 25
                                                            }) : /*#__PURE__*/ jsx_runtime_.jsx((Close_default()), {
                                                                className: "text-[#ff0101] font-bold"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("td", {
                                                            className: "flex flex-col items-start justify-center h-full",
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "font-bold text-sm " + (e.type === "goal" ? "text-[#0087bd]" : "text-[#ff0101]"),
                                                                    children: [
                                                                        e.type.toUpperCase(),
                                                                        " ",
                                                                        e.team === "local" ? match.local.name : match.visitor.name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                                    className: "text-sm",
                                                                    children: [
                                                                        "Gol: (#",
                                                                        e.goal,
                                                                        ") ",
                                                                        getObjects(e.team === "local" ? localPlayers : visitorPlayers, "dorsal", e.goal)[0].name
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "text-sm",
                                                                    children: e.type === "fault" ? `Type: ${e.assist}` : `Assist: ${getObjects(e.team === "local" ? localPlayers : visitorPlayers, "dorsal", e.assist)[0].name}`
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, "event" + _i);
                                            })
                                        })
                                    ]
                                })
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
            match
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
/* harmony default export */ const casters = (Casters);


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
var __webpack_exports__ = __webpack_require__.X(0, [675,339,343], () => (__webpack_exec__(352)));
module.exports = __webpack_exports__;

})();