function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { memo, forwardRef } from 'react';
import Box from '../Box';
import InputBase from './InputBase';
import { useFormControl } from '../../composites/FormControl';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
import { useHover } from '@react-native-aria/interactions';
import { extractInObject, stylingProps } from '../../../theme/tools/utils';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import { mergeRefs } from '../../../utils';

const Input = ({
  isHovered: isHoveredProp,
  isFocused: isFocusedProp,
  ...props
}, ref) => {
  const inputProps = useFormControl({
    isDisabled: props.isDisabled,
    isInvalid: props.isInvalid,
    isReadOnly: props.isReadOnly,
    isRequired: props.isRequired,
    nativeID: props.nativeID
  });
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = (focusState, callback) => {
    setIsFocused(focusState);
    callback();
  };

  const _ref = React.useRef(null);

  const {
    isHovered
  } = useHover({}, _ref);
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
  } = usePropsResolution('Input', { ...inputThemeProps,
    ...props
  }, {
    isDisabled: inputThemeProps.isDisabled,
    isHovered: isHoveredProp || isHovered,
    isFocused: isFocusedProp || isFocused,
    isInvalid: inputThemeProps.isInvalid,
    isReadOnly: inputThemeProps.isReadOnly
  });
  const [layoutProps, nonLayoutProps] = extractInObject(resolvedProps, [...stylingProps.margin, ...stylingProps.border, ...stylingProps.layout, ...stylingProps.flexbox, ...stylingProps.position, ...stylingProps.background, 'shadow', 'opacity']);
  const [, baseInputProps] = extractInObject(nonLayoutProps, ['variant']); //TODO: refactor for responsive prop

  if (useHasResponsiveProps(props)) {
    return null;
  }

  if (InputLeftElement || InputRightElement || leftElement || rightElement) {
    return /*#__PURE__*/React.createElement(Box, _extends({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      overflow: "hidden"
    }, layoutProps, {
      ref: mergeRefs([_ref, wrapperRef])
    }), InputLeftElement || leftElement ? InputLeftElement || leftElement : null, /*#__PURE__*/React.createElement(InputBase, _extends({
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
    return /*#__PURE__*/React.createElement(InputBase, _extends({
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

export default /*#__PURE__*/memo( /*#__PURE__*/forwardRef(Input));
//# sourceMappingURL=Input.js.map