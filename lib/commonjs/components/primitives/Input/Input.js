"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Box = _interopRequireDefault(require("../Box"));

var _InputBase = _interopRequireDefault(require("./InputBase"));

var _FormControl = require("../../composites/FormControl");

var _useHasResponsiveProps = require("../../../hooks/useHasResponsiveProps");

var _interactions = require("@react-native-aria/interactions");

var _utils = require("../../../theme/tools/utils");

var _useThemeProps = require("../../../hooks/useThemeProps");

var _utils2 = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Input = ({
  isHovered: isHoveredProp,
  isFocused: isFocusedProp,
  ...props
}, ref) => {
  const inputProps = (0, _FormControl.useFormControl)({
    isDisabled: props.isDisabled,
    isInvalid: props.isInvalid,
    isReadOnly: props.isReadOnly,
    isRequired: props.isRequired,
    nativeID: props.nativeID
  });

  const [isFocused, setIsFocused] = _react.default.useState(false);

  const handleFocus = (focusState, callback) => {
    setIsFocused(focusState);
    callback();
  };

  const _ref = _react.default.useRef(null);

  const {
    isHovered
  } = (0, _interactions.useHover)({}, _ref);
  const inputThemeProps = {
    isDisabled: inputProps.disabled,
    isInvalid: inputProps.accessibilityInvalid,
    isReadOnly: inputProps.accessibilityReadOnly,
    isRequired: inputProps.required
  };
  const {
    InputLeftElement,
    InputRightElement,
    leftElement,
    rightElement,
    onFocus,
    onBlur,
    wrapperRef,
    ...resolvedProps
  } = (0, _useThemeProps.usePropsResolution)('Input', { ...inputThemeProps,
    ...props
  }, {
    isDisabled: inputThemeProps.isDisabled,
    isHovered: isHoveredProp || isHovered,
    isFocused: isFocusedProp || isFocused,
    isInvalid: inputThemeProps.isInvalid,
    isReadOnly: inputThemeProps.isReadOnly
  });
  const [layoutProps, nonLayoutProps] = (0, _utils.extractInObject)(resolvedProps, [..._utils.stylingProps.margin, ..._utils.stylingProps.border, ..._utils.stylingProps.layout, ..._utils.stylingProps.flexbox, ..._utils.stylingProps.position, ..._utils.stylingProps.background, 'shadow', 'opacity']);
  const [, baseInputProps] = (0, _utils.extractInObject)(nonLayoutProps, ['variant']); //TODO: refactor for responsive prop

  if ((0, _useHasResponsiveProps.useHasResponsiveProps)(props)) {
    return null;
  }

  if (InputLeftElement || InputRightElement || leftElement || rightElement) {
    return /*#__PURE__*/_react.default.createElement(_Box.default, _extends({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      overflow: "hidden"
    }, layoutProps, {
      ref: (0, _utils2.mergeRefs)([_ref, wrapperRef])
    }), InputLeftElement || leftElement ? InputLeftElement || leftElement : null, /*#__PURE__*/_react.default.createElement(_InputBase.default, _extends({
      InputLeftElement: InputLeftElement,
      InputRightElement: InputRightElement,
      leftElement: leftElement,
      rightElement: rightElement,
      inputProps: inputProps,
      bg: "transparent"
    }, baseInputProps, {
      flex: 1,
      disableFocusHandling: true,
      ref: ref,
      variant: "unstyled",
      onFocus: e => {
        handleFocus(true, onFocus ? () => onFocus(e) : () => {});
      },
      onBlur: e => {
        handleFocus(false, onBlur ? () => onBlur(e) : () => {});
      }
    })), InputRightElement || rightElement ? InputRightElement || rightElement : null);
  } else {
    return /*#__PURE__*/_react.default.createElement(_InputBase.default, _extends({
      inputProps: inputProps,
      isHovered: isHoveredProp,
      isFocused: isFocusedProp
    }, props, {
      ref: ref,
      onFocus: e => {
        handleFocus(true, onFocus ? () => onFocus(e) : () => {});
      },
      onBlur: e => {
        handleFocus(false, onBlur ? () => onBlur(e) : () => {});
      }
    }));
  }
};

var _default = /*#__PURE__*/(0, _react.memo)( /*#__PURE__*/(0, _react.forwardRef)(Input));

exports.default = _default;
//# sourceMappingURL=Input.js.map