"use strict";
exports.id = 339;
exports.ids = [339];
exports.modules = {

/***/ 339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Components_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./public/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.7d03deb1.png","height":857,"width":822,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8UlEQVR42h3MMUoDQRSH8f+8eVNIdEEILiiICJImEUTsLLS19AoWnsLGA+jewCKNl7Ax29pIKhOwMYigZotssrMz8ybLdl/x41MAcPw8HYH5nAx7Ys3a8Jy0vgeQ8dnTeMs7fxgiIIBGjE1hG0o9EpFmCnLACDtAC1REbDMAFA3fNcD3EIU3FKQGSBRQCChBKxNq9n0OAW+llVnl4nhVo6fEWeeVtS7nzSiD1zLgod/V16e76n22wMl+Yj5+q+Ji+HXD3oXBEYDPv6Vd1LJMO7qTT/7zl9K428t0ws77pMuMbDofZqYo8f1TgegKe+kIANbyN2wWBwcGoAAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "@mui/icons-material/Settings"
var Settings_ = __webpack_require__(32);
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "@mui/icons-material/TouchApp"
var TouchApp_ = __webpack_require__(850);
var TouchApp_default = /*#__PURE__*/__webpack_require__.n(TouchApp_);
;// CONCATENATED MODULE: ./Components/Header.tsx






const Header = ()=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full h-12 text-white bg-gray-800 inline-flex items-center px-10",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                src: logo,
                width: "30%",
                height: "30%"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "ml-3 font-bold text-xl",
                children: "P10MediaGroup"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>{
                    router.push("/menu");
                },
                className: "absolute right-10 hover:scale-125 transition-all",
                children: /*#__PURE__*/ jsx_runtime_.jsx((Settings_default()), {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>{
                    router.push("/");
                },
                className: "absolute right-20 hover:scale-125 transition-all",
                children: /*#__PURE__*/ jsx_runtime_.jsx((TouchApp_default()), {})
            })
        ]
    });
};
/* harmony default export */ const Components_Header = (Header);


/***/ })

};
;