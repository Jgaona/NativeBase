"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmallCloseIcon = exports.CloseIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _createIcon = require("../createIcon");

var _nbSvg = require("../nbSvg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CloseIcon = (0, _createIcon.createIcon)({
  viewBox: '0 0 24 24',
  d: 'M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z'
});
exports.CloseIcon = CloseIcon;
const SmallCloseIcon = (0, _createIcon.createIcon)({
  viewBox: '0 0 16 16',
  path: /*#__PURE__*/_react.default.createElement(_nbSvg.Path, {
    d: "M9.41 8l2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71L9.41 8z",
    fillRule: "evenodd",
    fill: "currentColor"
  })
});
exports.SmallCloseIcon = SmallCloseIcon;
//# sourceMappingURL=Close.js.map