exports.id = "components_features_owl-carousel_jsx";
exports.ids = ["components_features_owl-carousel_jsx"];
exports.modules = {

/***/ "./components/features/owl-carousel.jsx":
/*!**********************************************!*\
  !*** ./components/features/owl-carousel.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-owl-carousel2 */ "react-owl-carousel2");
/* harmony import */ var react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Developments\\Startups\\newSilverSpirit\\SilverSpiritsFE\\components\\features\\owl-carousel.jsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function OwlCarousel(props) {
  const {
    adClass,
    options,
    events,
    isTheme = true
  } = props;
  const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const defaultOptions = {
    items: 1,
    loop: false,
    margin: 0,
    responsiveClass: "true",
    nav: true,
    navText: ['<i class="icon-angle-left">', '<i class="icon-angle-right">'],
    dots: true,
    smartSpeed: 400,
    autoplay: false,
    responsive: {
      320: {
        nav: false
      },
      375: {
        nav: false
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (props.onChangeRef) {
      props.onChangeRef(carouselRef);
    }
  }, [carouselRef]);
  let settings = Object.assign({}, defaultOptions, options);
  return props.children !== undefined ? props.children.length > 0 || props.children && props.children.length === undefined ? __jsx((react_owl_carousel2__WEBPACK_IMPORTED_MODULE_1___default()), {
    ref: carouselRef,
    className: `owl-carousel ${isTheme ? 'owl-theme' : ''} ${adClass}`,
    options: settings,
    events: events,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, props.children) : "" : "";
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(OwlCarousel));

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2xsYS1yZWFjdC8uL2NvbXBvbmVudHMvZmVhdHVyZXMvb3dsLWNhcm91c2VsLmpzeCJdLCJuYW1lcyI6WyJPd2xDYXJvdXNlbCIsInByb3BzIiwiYWRDbGFzcyIsIm9wdGlvbnMiLCJldmVudHMiLCJpc1RoZW1lIiwiY2Fyb3VzZWxSZWYiLCJ1c2VSZWYiLCJkZWZhdWx0T3B0aW9ucyIsIml0ZW1zIiwibG9vcCIsIm1hcmdpbiIsInJlc3BvbnNpdmVDbGFzcyIsIm5hdiIsIm5hdlRleHQiLCJkb3RzIiwic21hcnRTcGVlZCIsImF1dG9wbGF5IiwicmVzcG9uc2l2ZSIsInVzZUVmZmVjdCIsIm9uQ2hhbmdlUmVmIiwic2V0dGluZ3MiLCJPYmplY3QiLCJhc3NpZ24iLCJjaGlsZHJlbiIsInVuZGVmaW5lZCIsImxlbmd0aCIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBdUJDLEtBQXZCLEVBQStCO0FBQzNCLFFBQU07QUFBRUMsV0FBRjtBQUFXQyxXQUFYO0FBQW9CQyxVQUFwQjtBQUE0QkMsV0FBTyxHQUFHO0FBQXRDLE1BQStDSixLQUFyRDtBQUNBLFFBQU1LLFdBQVcsR0FBR0MsNkNBQU0sQ0FBRSxJQUFGLENBQTFCO0FBQ0EsUUFBTUMsY0FBYyxHQUFHO0FBQ25CQyxTQUFLLEVBQUUsQ0FEWTtBQUVuQkMsUUFBSSxFQUFFLEtBRmE7QUFHbkJDLFVBQU0sRUFBRSxDQUhXO0FBSW5CQyxtQkFBZSxFQUFFLE1BSkU7QUFLbkJDLE9BQUcsRUFBRSxJQUxjO0FBTW5CQyxXQUFPLEVBQUUsQ0FBRSw2QkFBRixFQUFpQyw4QkFBakMsQ0FOVTtBQU9uQkMsUUFBSSxFQUFFLElBUGE7QUFRbkJDLGNBQVUsRUFBRSxHQVJPO0FBU25CQyxZQUFRLEVBQUUsS0FUUztBQVVuQkMsY0FBVSxFQUFFO0FBQ1IsV0FBSztBQUNETCxXQUFHLEVBQUU7QUFESixPQURHO0FBSVIsV0FBSztBQUNEQSxXQUFHLEVBQUU7QUFESjtBQUpHO0FBVk8sR0FBdkI7QUFvQkFNLGtEQUFTLENBQUUsTUFBTTtBQUNiLFFBQUtsQixLQUFLLENBQUNtQixXQUFYLEVBQXlCO0FBQ3JCbkIsV0FBSyxDQUFDbUIsV0FBTixDQUFtQmQsV0FBbkI7QUFDSDtBQUNKLEdBSlEsRUFJTixDQUFFQSxXQUFGLENBSk0sQ0FBVDtBQU1BLE1BQUllLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWUsRUFBZixFQUFtQmYsY0FBbkIsRUFBbUNMLE9BQW5DLENBQWY7QUFFQSxTQUNJRixLQUFLLENBQUN1QixRQUFOLEtBQW1CQyxTQUFuQixHQUNJeEIsS0FBSyxDQUFDdUIsUUFBTixDQUFlRSxNQUFmLEdBQXdCLENBQXhCLElBQStCekIsS0FBSyxDQUFDdUIsUUFBTixJQUFrQnZCLEtBQUssQ0FBQ3VCLFFBQU4sQ0FBZUUsTUFBZixLQUEwQkQsU0FBM0UsR0FDSSxNQUFDLDREQUFEO0FBQVUsT0FBRyxFQUFHbkIsV0FBaEI7QUFBOEIsYUFBUyxFQUFJLGdCQUFlRCxPQUFPLEdBQUcsV0FBSCxHQUFpQixFQUFHLElBQUdILE9BQVEsRUFBaEc7QUFBb0csV0FBTyxFQUFHbUIsUUFBOUc7QUFBeUgsVUFBTSxFQUFHakIsTUFBbEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNNSCxLQUFLLENBQUN1QixRQURaLENBREosR0FJTSxFQUxWLEdBTU0sRUFQVjtBQVNIOztBQUVELDRFQUFlRyxpREFBQSxDQUFZM0IsV0FBWixDQUFmLEUiLCJmaWxlIjoiY29tcG9uZW50c19mZWF0dXJlc19vd2wtY2Fyb3VzZWxfanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3Qtb3dsLWNhcm91c2VsMic7XHJcblxyXG5mdW5jdGlvbiBPd2xDYXJvdXNlbCAoIHByb3BzICkge1xyXG4gICAgY29uc3QgeyBhZENsYXNzLCBvcHRpb25zLCBldmVudHMsIGlzVGhlbWUgPSB0cnVlIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCBudWxsICk7XHJcbiAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBsb29wOiBmYWxzZSxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgcmVzcG9uc2l2ZUNsYXNzOiBcInRydWVcIixcclxuICAgICAgICBuYXY6IHRydWUsXHJcbiAgICAgICAgbmF2VGV4dDogWyAnPGkgY2xhc3M9XCJpY29uLWFuZ2xlLWxlZnRcIj4nLCAnPGkgY2xhc3M9XCJpY29uLWFuZ2xlLXJpZ2h0XCI+JyBdLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgc21hcnRTcGVlZDogNDAwLFxyXG4gICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAzNzU6IHtcclxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCBwcm9wcy5vbkNoYW5nZVJlZiApIHtcclxuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2VSZWYoIGNhcm91c2VsUmVmICk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgWyBjYXJvdXNlbFJlZiBdICk7XHJcblxyXG4gICAgbGV0IHNldHRpbmdzID0gT2JqZWN0LmFzc2lnbigge30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zICk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBwcm9wcy5jaGlsZHJlbiAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4ubGVuZ3RoID4gMCB8fCAoIHByb3BzLmNoaWxkcmVuICYmIHByb3BzLmNoaWxkcmVuLmxlbmd0aCA9PT0gdW5kZWZpbmVkICkgP1xyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsIHJlZj17IGNhcm91c2VsUmVmIH0gY2xhc3NOYW1lPXsgYG93bC1jYXJvdXNlbCAke2lzVGhlbWUgPyAnb3dsLXRoZW1lJyA6ICcnfSAke2FkQ2xhc3N9YCB9IG9wdGlvbnM9eyBzZXR0aW5ncyB9IGV2ZW50cz17IGV2ZW50cyB9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbCA+XHJcbiAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgOiBcIlwiXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKCBPd2xDYXJvdXNlbCApOyJdLCJzb3VyY2VSb290IjoiIn0=