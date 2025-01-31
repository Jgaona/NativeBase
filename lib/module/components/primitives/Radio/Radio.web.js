function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { memo, forwardRef } from 'react';
import Box from '../Box';
import { Center } from '../../composites/Center';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { mergeRefs } from './../../../utils';
import { useHover } from '@react-native-aria/interactions';
import { useRadio } from '@react-native-aria/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { RadioContext } from './RadioGroup';
import { useFocusRing } from '@react-native-aria/focus';
import { CircleIcon } from '../Icon/Icons';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { combineContextAndProps, isEmptyObj } from '../../../utils';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import { useFormControlContext } from '../../composites/FormControl';
const RadioComponent = /*#__PURE__*/memo( /*#__PURE__*/forwardRef(({
  icon,
  inputProps,
  combinedProps,
  children,
  wrapperRef,
  isHovered: isHoveredProp,
  isFocusVisible: isFocusVisibleProp,
  ...props
}, ref) => {
  const {
    isInvalid,
    isReadOnly,
    isIndeterminate
  } = combinedProps;
  const {
    disabled: isDisabled,
    checked: isChecked
  } = inputProps;

  const _ref = React.useRef(null);

  const {
    isHovered
  } = useHover({}, _ref);
  const mergedRefs = mergeRefs([_ref, wrapperRef]);
  const {
    focusProps,
    isFocusVisible
  } = useFocusRing(); // const mergedWrapperRef = React.useMemo(() => mergeRefs([wrapperRef, _ref]), []);

  const {
    _interactionBox,
    _icon,
    ...resolvedProps
  } = usePropsResolution('Radio', combinedProps, {
    isInvalid,
    isReadOnly,
    isFocusVisible: isFocusVisibleProp || isFocusVisible,
    isDisabled,
    isIndeterminate,
    isChecked,
    isHovered: isHoveredProp || isHovered
  });
  const [layoutProps, nonLayoutProps] = extractInObject(resolvedProps, [...stylingProps.margin, ...stylingProps.layout, ...stylingProps.flexbox, ...stylingProps.position, '_text']); // only calling below function when icon exist.

  const sizedIcon = () =>
  /*#__PURE__*/
  //@ts-ignore
  React.cloneElement(icon, { ..._icon
  });

  const component = /*#__PURE__*/React.createElement(Box, _extends({
    flexDirection: "row",
    alignItems: "center"
  }, layoutProps, {
    opacity: isDisabled ? 0.4 : 1,
    cursor: isDisabled ? 'not-allowed' : 'pointer'
  }), /*#__PURE__*/React.createElement(Center, null, /*#__PURE__*/React.createElement(Box, _extends({}, _interactionBox, {
    style: {
      // @ts-ignore - only for web"
      transition: 'height 200ms, width 200ms'
    },
    h: isFocusVisible || isFocusVisibleProp || isHovered || isHoveredProp ? '200%' : '100%',
    w: isFocusVisible || isFocusVisibleProp || isHovered || isHoveredProp ? '200%' : '100%',
    pointerEvents: "none"
  })), /*#__PURE__*/React.createElement(Center, nonLayoutProps, icon && sizedIcon && isChecked ? sizedIcon() : /*#__PURE__*/React.createElement(CircleIcon, _extends({}, _icon, {
    opacity: isChecked ? 1 : 0
  })))), children); //TODO: refactor for responsive prop

  if (useHasResponsiveProps(props)) {
    return null;
  } // console.log(inputProps, focusProps, ref);
  // return null;


  return /*#__PURE__*/React.createElement(Box // @ts-ignore - RN web supports accessibilityRole="label"
  , {
    accessibilityRole: "label",
    ref: mergedRefs
  }, /*#__PURE__*/React.createElement(VisuallyHidden, null, /*#__PURE__*/React.createElement("input", _extends({}, inputProps, focusProps, {
    ref: ref
  }))), component);
}));

const Radio = ({
  icon,
  children,
  wrapperRef,
  isHovered: isHoveredProp,
  isFocusVisible: isFocusVisibleProp,
  ...props
}, ref) => {
  var _contextState$state;

  const formControlContext = useFormControlContext();
  const contextState = React.useContext(RadioContext);
  const combinedProps = combineContextAndProps({ ...formControlContext,
    ...contextState
  }, props);
  const inputRef = React.useRef(null);
  const radioState = useRadio({ ...combinedProps,
    'aria-label': props.accessibilityLabel,
    children
  }, (_contextState$state = contextState.state) !== null && _contextState$state !== void 0 ? _contextState$state : {}, inputRef); // console.log('radio', radioState);
  //@ts-ignore
  // eslint-disable-next-line react-hooks/exhaustive-deps

  const inputProps = React.useMemo(() => radioState.inputProps, [radioState.inputProps.checked, radioState.inputProps.disabled]);
  const [contextCombinedProps] = React.useState({ ...combinedProps
  }); //TODO: refactor for responsive prop

  if (useHasResponsiveProps(props)) {
    return null;
  }

  if (isEmptyObj(contextState)) {
    console.error('Error: Radio must be wrapped inside a Radio.Group');
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }

  return /*#__PURE__*/React.createElement(RadioComponent, {
    inputProps: inputProps,
    combinedProps: contextCombinedProps,
    children: children,
    ref: ref,
    icon: icon,
    wrapperRef: wrapperRef,
    isHovered: isHoveredProp,
    isFocusVisible: isFocusVisibleProp
  });
};

export default /*#__PURE__*/memo( /*#__PURE__*/forwardRef(Radio));
//# sourceMappingURL=Radio.web.js.map