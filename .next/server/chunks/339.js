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
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.7d03deb1.png","height":857,"width":822,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEUgbsQzotcwr+M4vu81mc/F5PM0j8cwqd0wseQzuOkwtegrsuV7x+g3ndI1u+w4mc5yttyu0+k6jsU5isJhqdQ2lMssndRRwuwurOAxotcwjseOyug5jcVnjkrBAAAAGnRSTlMD8b83/vuZ/fz+nHDJKc9N/O7I7vdx243+/oREcPQAAAAJcEhZcwAACxIAAAsSAdLdfvwAAABASURBVAiZHcZHEoAgEADBIcoC5gTo/99pYZ8adAkyGUANJYgYRlX7IrOtfZrT/kv4trjHZdja4dZ8w/766K/EB2K/AwK8YIszAAAAAElFTkSuQmCC"});
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