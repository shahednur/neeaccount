"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_app_pages_BalanceSheet_js"],{

/***/ "./resources/js/app/assets/Data.js":
/*!*****************************************!*\
  !*** ./resources/js/app/assets/Data.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var getData = function getData() {
  return [{
    dealDate: "2021/3/11",
    debitAccount: "Savings accounts",
    subAccount: "1111",
    debitAmount: "10,000,000",
    creditAccount: "Merchandise",
    subAccounts: "1111",
    creditAmount: "10,000,000",
    remarks: ""
  }, {
    dealDate: "2021/3/11",
    debitAccount: "Purchases",
    subAccount: "",
    debitAmount: "10,000,000",
    creditAccount: "cash",
    subAccounts: "",
    creditAmount: "10,000,000",
    remarks: ""
  }, {
    dealDate: "2021/3/10",
    debitAccount: "Work in process",
    subAccount: "1111",
    debitAmount: "10,000",
    creditAccount: "cash",
    subAccounts: "1111",
    creditAmount: "10,000",
    remarks: ""
  }, {
    dealDate: "2021/3/03",
    debitAccount: "Prepaid expenses",
    subAccount: "1111",
    debitAmount: "10,000",
    creditAccount: "Merchandise",
    subAccounts: "1111",
    creditAmount: "10,000",
    remarks: ""
  }, {
    dealDate: "2021/3/03",
    debitAccount: "Savings accounts",
    subAccount: "",
    debitAmount: "10,000",
    creditAccount: "cash",
    subAccounts: "",
    creditAmount: "10,000",
    remarks: ""
  }, {
    dealDate: "2021/3/03",
    debitAccount: "Checking accounts",
    subAccount: "",
    debitAmount: "10,000",
    creditAccount: "Short term loans payable",
    subAccounts: "",
    creditAmount: "10,000",
    remarks: ""
  }];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);

/***/ }),

/***/ "./resources/js/app/pages/BalanceSheet.js":
/*!************************************************!*\
  !*** ./resources/js/app/pages/BalanceSheet.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/Sidebar */ "./resources/js/app/partials/Sidebar.js");
/* harmony import */ var _partials_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partials/Header */ "./resources/js/app/partials/Header.js");
/* harmony import */ var _partials_dashboard_WelcomeBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partials/dashboard/WelcomeBanner */ "./resources/js/app/partials/dashboard/WelcomeBanner.js");
/* harmony import */ var _components_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Table */ "./resources/js/app/components/Table.js");
/* harmony import */ var _assets_Data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/Data */ "./resources/js/app/assets/Data.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function BalanceSheet() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      sidebarOpen = _useState2[0],
      setSidebarOpen = _useState2[1];

  var columns = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return [{
      Header: 'Deal date',
      accessor: 'dealDate'
    }, {
      Header: 'Debit account',
      accessor: 'debitAccount'
    }, {
      Header: 'Sub account',
      accessor: 'subAccount'
    }, {
      Header: 'Debit amount',
      accessor: 'debitAmount'
    }, {
      Header: 'Credit account',
      accessor: 'creditAccount'
    }, {
      Header: 'Sub account',
      accessor: 'subAccounts'
    }, {
      Header: 'Credit amount',
      accessor: 'creditAmount'
    }, {
      Header: 'Remarks',
      accessor: 'remarks'
    }, {
      Header: 'Delete',
      accessor: 'delete',
      Cell: function Cell(_ref) {
        var value = _ref.value;
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: "bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded inline-flex items-center",
          children: "Delete"
        });
      }
    }];
  }, []);
  var data = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,_assets_Data__WEBPACK_IMPORTED_MODULE_5__["default"])();
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "flex h-screen overflow-hidden",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_partials_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
      sidebarOpen: sidebarOpen,
      setSidebarOpen: setSidebarOpen
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_partials_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
        sidebarOpen: sidebarOpen,
        setSidebarOpen: setSidebarOpen
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("main", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-gray-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_partials_dashboard_WelcomeBanner__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "sm:flex sm:justify-between sm:items-center mb-8",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "grid grid-flow-col  sm:auto-cols-max justify-start sm:justify-end gap-2"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "grid grid-cols-12 gap-6 shadow-md rounded",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
              columns: columns,
              data: data
            })
          })]
        })
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BalanceSheet);

/***/ })

}]);