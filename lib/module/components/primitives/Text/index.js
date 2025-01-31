import React, { memo, forwardRef, useRef } from 'react';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { useHover } from '@react-native-aria/interactions';
import { mergeRefs } from '../../../utils/mergeRefs';
import { makeStyledComponent } from '../../../utils/styled';
import { useResolvedFontFamily } from '../../../hooks/useResolvedFontFamily';
import { Text as NativeText } from 'react-native';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
const StyledText = makeStyledComponent(NativeText); // To have a RN compatible behaviour, we'll inherit parent text styles as base style

const TextAncestorContext = /*#__PURE__*/React.createContext(false);

const Text = ({
  children,
  ...props
}, ref) => {
  const hasTextAncestor = React.useContext(TextAncestorContext);
  const {
    isTruncated,
    noOfLines,
    bold,
    italic,
    sub,
    highlight,
    underline,
    strikeThrough,
    fontFamily: propFontFamily,
    fontWeight: propFontWeight,
    fontStyle: propFontStyle,
    _hover,
    fontSize,
    numberOfLines,
    ...reslovedProps
  } = usePropsResolution('Text', props, {}, {
    resolveResponsively: ['noOfLines', 'numberOfLines'],
    // We override the component base theme if text has an ancestor.
    componentTheme: hasTextAncestor ? {} : undefined
  });

  const _ref = useRef(null); // TODO: might have to add this condition


  const {
    isHovered
  } = useHover({}, _hover ? _ref : null); // const { isHovered } = useHover({}, _ref);

  let fontFamily = propFontFamily;
  const fontStyle = italic ? 'italic' : propFontStyle;
  const fontWeight = bold ? 'bold' : propFontWeight;
  const resolvedFontFamily = useResolvedFontFamily({
    fontFamily,
    fontWeight: fontWeight !== null && fontWeight !== void 0 ? fontWeight : hasTextAncestor ? undefined : 400,
    fontStyle: fontStyle !== null && fontStyle !== void 0 ? fontStyle : hasTextAncestor ? undefined : 'normal'
  });

  if (resolvedFontFamily) {
    fontFamily = resolvedFontFamily;
  } //TODO: refactor for responsive prop


  if (useHasResponsiveProps(props)) {
    return null;
  }

  const propsToSpread = { ...reslovedProps,
    numberOfLines: numberOfLines || noOfLines ? numberOfLines || noOfLines : isTruncated ? 1 : undefined,
    ...resolvedFontFamily,
    bg: highlight ? 'warning.300' : reslovedProps.bg,
    textDecorationLine: underline && strikeThrough ? 'underline line-through' : underline ? 'underline' : strikeThrough ? 'line-through' : reslovedProps.textDecorationLine,
    fontSize: sub ? 10 : fontSize,
    ref: mergeRefs([ref, _ref]),
    ...(isHovered && _hover)
  };
  return hasTextAncestor ? /*#__PURE__*/React.createElement(StyledText, propsToSpread, children) : /*#__PURE__*/React.createElement(TextAncestorContext.Provider, {
    value: true
  }, /*#__PURE__*/React.createElement(StyledText, propsToSpread, children));
};

export default /*#__PURE__*/memo( /*#__PURE__*/forwardRef(Text));
//# sourceMappingURL=index.js.map