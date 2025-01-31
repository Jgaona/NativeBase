"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyleAndFilteredProps = exports.propConfig = exports.typography = exports.space = exports.background = exports.border = exports.color = exports.position = exports.flexbox = exports.layout = exports.getColor = void 0;

var _reactNative = require("react-native");

var _lodash = _interopRequireDefault(require("lodash.get"));

var _utils = require("../hooks/useThemeProps/utils");

var _tools = require("./tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const isNumber = n => typeof n === 'number' && !isNaN(n);

const getColor = (rawValue, scale, theme) => {
  const alphaMatched = typeof rawValue === 'string' ? rawValue === null || rawValue === void 0 ? void 0 : rawValue.match(/:alpha\.\d\d?\d?/) : false;

  if (alphaMatched) {
    const colorMatched = rawValue === null || rawValue === void 0 ? void 0 : rawValue.match(/^.*?(?=:alpha)/);
    const color = colorMatched ? colorMatched[0] : colorMatched;
    const alphaValue = alphaMatched[0].split('.')[1];
    const alphaFromToken = (0, _lodash.default)(theme.opacity, alphaValue, alphaValue);
    const alpha = alphaFromToken ? parseFloat(alphaFromToken) : 1;
    const newColor = (0, _tools.transparentize)(color, alpha)(theme);
    return newColor;
  } else {
    return (0, _lodash.default)(scale, rawValue, rawValue);
  }
}; // To handle negative margins


exports.getColor = getColor;

const getMargin = (n, scale) => {
  n = convertStringNumberToNumber('margin', n);

  if (!isNumber(n)) {
    return (0, _lodash.default)(scale, n, n);
  }

  const isNegative = n < 0;
  const absolute = Math.abs(n);
  const value = (0, _lodash.default)(scale, absolute, absolute);

  if (!isNumber(value)) {
    return isNegative ? '-' + value : value;
  }

  return value * (isNegative ? -1 : 1);
};

const layout = {
  width: {
    property: 'width',
    scale: 'sizes'
  },
  w: {
    property: 'width',
    scale: 'sizes'
  },
  height: {
    property: 'height',
    scale: 'sizes'
  },
  h: {
    property: 'height',
    scale: 'sizes'
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes'
  },
  minW: {
    property: 'minWidth',
    scale: 'sizes'
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes'
  },
  minH: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  maxW: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  maxH: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes'
  },
  boxSize: {
    properties: ['width', 'height'],
    scale: 'sizes'
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
  textAlign: true
};
exports.layout = layout;
const flexbox = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  flexDir: {
    property: 'flexDirection'
  },
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true
};
exports.flexbox = flexbox;
const position = {
  position: true,
  zIndex: {
    property: 'zIndex'
  },
  top: {
    property: 'top',
    scale: 'space'
  },
  right: {
    property: 'right',
    scale: 'space'
  },
  bottom: {
    property: 'bottom',
    scale: 'space'
  },
  left: {
    property: 'left',
    scale: 'space'
  }
};
exports.position = position;
const color = {
  color: {
    property: 'color',
    scale: 'colors',
    transformer: getColor
  },
  tintColor: {
    property: 'tintColor',
    scale: 'colors',
    transformer: getColor
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors',
    transformer: getColor
  },
  opacity: {
    property: 'opacity',
    scale: 'opacity'
  },
  bg: {
    property: 'backgroundColor',
    scale: 'colors',
    transformer: getColor
  },
  bgColor: {
    property: 'backgroundColor',
    scale: 'colors',
    transformer: getColor
  },
  background: {
    property: 'backgroundColor',
    scale: 'colors',
    transformer: getColor
  },
  textDecorationColor: {
    property: 'textDecorationColor',
    scale: 'colors',
    transformer: getColor
  }
};
exports.color = color;
const border = {
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths'
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles'
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors',
    transformer: getColor
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii'
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders'
  },
  borderTopRadius: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii'
  },
  borderLeftRadius: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii'
  },
  borderRightRadius: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii'
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders'
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders'
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders'
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders'
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders'
  },
  borderTopWidth: {
    property: 'borderTopWidth',
    scale: 'borderWidths'
  },
  borderTopColor: {
    property: 'borderTopColor',
    scale: 'colors',
    transformer: getColor
  },
  borderTopStyle: {
    property: 'borderTopStyle',
    scale: 'borderStyles'
  },
  borderBottomWidth: {
    property: 'borderBottomWidth',
    scale: 'borderWidths'
  },
  borderBottomColor: {
    property: 'borderBottomColor',
    scale: 'colors',
    transformer: getColor
  },
  borderBottomStyle: {
    property: 'borderBottomStyle',
    scale: 'borderStyles'
  },
  borderLeftWidth: {
    property: 'borderLeftWidth',
    scale: 'borderWidths'
  },
  borderLeftColor: {
    property: 'borderLeftColor',
    scale: 'colors',
    transformer: getColor
  },
  borderLeftStyle: {
    property: 'borderLeftStyle',
    scale: 'borderStyles'
  },
  borderRightWidth: {
    property: 'borderRightWidth',
    scale: 'borderWidths'
  },
  borderRightColor: {
    property: 'borderRightColor',
    scale: 'colors',
    transformer: getColor
  },
  borderRightStyle: {
    property: 'borderRightStyle',
    scale: 'borderStyles'
  },
  rounded: {
    property: 'borderRadius',
    scale: 'radii'
  },
  roundedTopLeft: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  roundedTopRight: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  roundedBottomLeft: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  roundedBottomRight: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  roundedTop: {
    properties: ['borderTopLeftRadius', 'borderTopRightRadius'],
    scale: 'radii'
  },
  borderBottomRadius: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii'
  },
  roundedBottom: {
    properties: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    scale: 'radii'
  },
  roundedLeft: {
    properties: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    scale: 'radii'
  },
  roundedRight: {
    properties: ['borderTopRightRadius', 'borderBottomRightRadius'],
    scale: 'radii'
  }
};
exports.border = border;
const background = {
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
  backgroundAttachment: true,
  backgroundBlendMode: true,
  bgImage: {
    property: 'backgroundImage'
  },
  bgImg: {
    property: 'backgroundImage'
  },
  bgBlendMode: {
    property: 'backgroundBlendMode'
  },
  bgSize: {
    property: 'backgroundSize'
  },
  bgPosition: {
    property: 'backgroundPosition'
  },
  bgPos: {
    property: 'backgroundPosition'
  },
  bgRepeat: {
    property: 'backgroundRepeat'
  },
  bgAttachment: {
    property: 'backgroundAttachment'
  }
};
exports.background = background;
const space = {
  margin: {
    property: 'margin',
    scale: 'space',
    transformer: getMargin
  },
  m: {
    property: 'margin',
    scale: 'space',
    transformer: getMargin
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transformer: getMargin
  },
  mt: {
    property: 'marginTop',
    scale: 'space',
    transformer: getMargin
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transformer: getMargin
  },
  mr: {
    property: 'marginRight',
    scale: 'space',
    transformer: getMargin
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transformer: getMargin
  },
  mb: {
    property: 'marginBottom',
    scale: 'space',
    transformer: getMargin
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transformer: getMargin
  },
  ml: {
    property: 'marginLeft',
    scale: 'space',
    transformer: getMargin
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transformer: getMargin
  },
  mx: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transformer: getMargin
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transformer: getMargin
  },
  my: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transformer: getMargin
  },
  padding: {
    property: 'padding',
    scale: 'space'
  },
  p: {
    property: 'padding',
    scale: 'space'
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space'
  },
  pt: {
    property: 'paddingTop',
    scale: 'space'
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space'
  },
  pr: {
    property: 'paddingRight',
    scale: 'space'
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space'
  },
  pb: {
    property: 'paddingBottom',
    scale: 'space'
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space'
  },
  pl: {
    property: 'paddingLeft',
    scale: 'space'
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space'
  },
  px: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space'
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space'
  },
  py: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space'
  },
  gap: {
    property: 'gap',
    scale: 'space'
  }
};
exports.space = space;
const typography = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes'
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights',
    transformer: (val, scale) => {
      return val ? (0, _lodash.default)(scale, val, val).toString() : val;
    }
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  textAlign: true,
  fontStyle: true,
  wordBreak: true,
  overflowWrap: true,
  textOverflow: true,
  textTransform: true,
  whiteSpace: true,
  textDecoration: {
    property: 'textDecorationLine'
  },
  txtDecor: {
    property: 'textDecorationLine'
  },
  textDecorationLine: true
};
exports.typography = typography;
const extraProps = {
  outline: true,
  outlineWidth: true,
  shadow: {
    scale: 'shadows'
  },
  cursor: true,
  overflow: true
};
const propConfig = { ...color,
  ...space,
  ...layout,
  ...flexbox,
  ...border,
  ...position,
  ...typography,
  ...background,
  ...extraProps
}; // For backward compatibility with 3.0 of props like non token string numbers `<Box mt={"39"} />` => used to get applied as 39px. RN expects fontWeight to be string and crashes with numbers
// https://reactnative.dev/docs/text-style-props#fontweight

exports.propConfig = propConfig;

const convertStringNumberToNumber = (key, value) => {
  if (typeof value === 'string' && key !== 'fontWeight' && value && !isNaN(Number(value))) {
    return parseFloat(value);
  }

  return value;
};

const getRNKeyAndStyleValue = ({
  config,
  value,
  key,
  theme,
  styledSystemProps,
  currentBreakpoint
}) => {
  let style = {};

  if (config === true) {
    style = { ...style,
      [key]: convertStringNumberToNumber(key, value)
    };
  } else if (config) {
    //@ts-ignore
    const {
      property,
      scale,
      properties,
      transformer
    } = config;
    let val = value;

    if (transformer) {
      val = transformer(val, theme[scale], theme, styledSystemProps.fontSize);
    } else {
      // If a token is not found in the theme
      val = (0, _lodash.default)(theme[scale], value, value);
    }

    if (typeof val === 'string') {
      if (val.endsWith('px')) {
        val = parseFloat(val);
      } else if (val.endsWith('em') && _reactNative.Platform.OS !== 'web') {
        const fontSize = (0, _utils.resolveValueWithBreakpoint)(styledSystemProps.fontSize, theme.breakpoints, currentBreakpoint, key);
        val = parseFloat(val) * parseFloat((0, _lodash.default)(theme.fontSizes, fontSize, fontSize));
      }
    }

    val = convertStringNumberToNumber(key, val);

    if (properties) {
      //@ts-ignore
      properties.forEach(property => {
        style = { ...style,
          [property]: val
        };
      });
    } else if (property) {
      style = { ...style,
        [property]: val
      };
    } else {
      style = { ...style,
        ...val
      };
    }
  }

  return style;
};

const getStyleAndFilteredProps = ({
  style,
  theme,
  debug,
  currentBreakpoint,
  getResponsiveStyles,
  styledSystemProps
}) => {
  let styleFromProps = {};
  let dataSet = {};
  let responsiveStyles = null;
  const orderedBreakPoints = Object.entries(theme.breakpoints).sort((a, b) => a[1] - b[1]);

  for (const key in styledSystemProps) {
    const rawValue = styledSystemProps[key];
    const config = propConfig[key];

    if ((0, _tools.hasValidBreakpointFormat)(rawValue, theme.breakpoints)) {
      if (!responsiveStyles) responsiveStyles = {};
      const value = rawValue;

      if (Array.isArray(value)) {
        value.forEach((v, i) => {
          //@ts-ignore
          if (!responsiveStyles[orderedBreakPoints[i][0]]) {
            //@ts-ignore
            responsiveStyles[orderedBreakPoints[i][0]] = [];
          }

          const newStyle = getRNKeyAndStyleValue({
            config,
            value: v,
            key,
            styledSystemProps,
            theme,
            currentBreakpoint
          }); //@ts-ignore

          responsiveStyles[orderedBreakPoints[i][0]].push(newStyle);
        });
      } else {
        for (const k in value) {
          const newStyle = getRNKeyAndStyleValue({
            config,
            value: value[k],
            key,
            styledSystemProps,
            theme,
            currentBreakpoint
          });

          if (!responsiveStyles[k]) {
            responsiveStyles[k] = [];
          }

          responsiveStyles[k].push(newStyle);
        }
      }
    } else {
      const value = rawValue;
      const newStyle = getRNKeyAndStyleValue({
        config,
        value,
        key,
        styledSystemProps,
        theme,
        currentBreakpoint
      });
      styleFromProps = { ...styleFromProps,
        ...newStyle
      };
    }
  }

  if (responsiveStyles) {
    const query = {
      query: []
    };
    orderedBreakPoints.forEach(o => {
      const key = o[0];

      if (key === 'base') {
        if (responsiveStyles) query.initial = responsiveStyles.base;
      } else {
        if (responsiveStyles) if (key in responsiveStyles) {
          var _query$query;

          query === null || query === void 0 ? void 0 : (_query$query = query.query) === null || _query$query === void 0 ? void 0 : _query$query.push({
            minWidth: o[1],
            style: responsiveStyles[key]
          });
        }
      }
    });
    const {
      dataSet: newDataSet,
      styles
    } = getResponsiveStyles(query);
    dataSet = { ...dataSet,
      ...newDataSet
    };
    styleFromProps = { ...styleFromProps,
      ..._reactNative.StyleSheet.flatten(styles)
    };
  }

  if (process.env.NODE_ENV === 'development' && debug) {
    /* eslint-disable-next-line */
    console.log('style ', debug + ' :: ', {
      styleFromProps,
      style,
      styledSystemProps
    });
  }

  return {
    styleSheet: _reactNative.StyleSheet.create({
      box: styleFromProps
    }),
    dataSet
  };
};

exports.getStyleAndFilteredProps = getStyleAndFilteredProps;
//# sourceMappingURL=styled-system.js.map