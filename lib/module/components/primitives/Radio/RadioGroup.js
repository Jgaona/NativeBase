function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { memo, forwardRef } from 'react';
import Box from '../Box';
import { useFormControlContext } from '../../composites/FormControl';
import { useRadioGroupState } from '@react-stately/radio';
import { useRadioGroup } from '@react-native-aria/radio';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';
export const RadioContext = /*#__PURE__*/React.createContext({});
const RadioWrapper = /*#__PURE__*/React.memo(props => {
  // console.log('hello here group');
  return /*#__PURE__*/React.createElement(Box, _extends({
    alignItems: "flex-start"
  }, props.radioGroupProps, props), props.children);
});

const RadioGroup = ({
  size,
  colorScheme,
  _radio,
  ...props
}, ref) => {
  const formControlContext = useFormControlContext();
  const state = useRadioGroupState(props);
  const radioGroupState = useRadioGroup({ ...formControlContext,
    ...props,
    'aria-label': props.accessibilityLabel
  }, state);
  const [propsState] = React.useState(props);
  const contextValue = React.useMemo(() => {
    return {
      formControlContext,
      size,
      colorScheme,
      ..._radio,
      state
    };
  }, [size, colorScheme, formControlContext, state, _radio]);
  const radioGroupProps = React.useMemo(() => radioGroupState.radioGroupProps, // eslint-disable-next-line react-hooks/exhaustive-deps
  []); // console.log(radioGroupState);
  //TODO: refactor for responsive prop

  if (useHasResponsiveProps({ ...props,
    size,
    colorScheme
  })) {
    return null;
  } // return null;


  return /*#__PURE__*/React.createElement(Box, {
    ref: ref
  }, /*#__PURE__*/React.createElement(RadioContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(RadioWrapper, _extends({}, radioGroupProps, propsState, {
    ref: ref
  }))));
};

export default /*#__PURE__*/memo( /*#__PURE__*/forwardRef(RadioGroup));
//# sourceMappingURL=RadioGroup.js.map