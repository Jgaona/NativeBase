"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoIcon = exports.InfoOutlineIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIcon = require("../createIcon");

var _nbSvg = require("../nbSvg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const InfoOutlineIcon = (0, _createIcon.createIcon)({
  viewBox: '0 0 24 24',
  path: /*#__PURE__*/_react.default.createElement(_nbSvg.G, {
    fill: "currentColor",
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeWidth: "2"
  }, /*#__PURE__*/_react.default.createElement(_nbSvg.Circle, {
    cx: "12",
    cy: "12",
    fill: "none",
    r: "11",
    stroke: "currentColor"
  }), /*#__PURE__*/_react.default.createElement(_nbSvg.Line, {
    fill: "none",
    x1: "11.959",
    x2: "11.959",
    y1: "11",
    y2: "17"
  }), /*#__PURE__*/_react.default.createElement(_nbSvg.Circle, {
    cx: "11.959",
    cy: "7",
    r: "1",
    stroke: "none"
  }))
});
exports.InfoOutlineIcon = InfoOutlineIcon;
const InfoIcon = (0, _createIcon.createIcon)({
  viewBox: '0 0 24 24',
  d: 'M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z'
});
exports.InfoIcon = InfoIcon;
//# sourceMappingURL=Info.js.map