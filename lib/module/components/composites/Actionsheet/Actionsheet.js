function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { memo, forwardRef } from 'react';
import { Modal } from '../../composites/Modal';
import { usePropsResolution } from '../../../hooks';
import { ActionSheetContext } from './ActionSheetContext';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps';

const Actionsheet = ({
  children,
  hideDragIndicator = false,
  ...props
}, ref) => {
  const {
    isOpen,
    disableOverlay,
    onClose,
    ...resolvedProps
  } = usePropsResolution('Actionsheet', props); //TODO: refactor for responsive prop

  if (useHasResponsiveProps(props)) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Modal, _extends({
    isOpen: isOpen,
    onClose: onClose,
    justifyContent: "flex-end" //@ts-ignore - internal use only
    ,
    animationPreset: "slide"
  }, resolvedProps, {
    overlayVisible: disableOverlay ? false : true,
    closeOnOverlayClick: disableOverlay ? false : true,
    ref: ref
  }), /*#__PURE__*/React.createElement(ActionSheetContext.Provider, {
    value: {
      hideDragIndicator
    }
  }, children));
};

export default /*#__PURE__*/memo( /*#__PURE__*/forwardRef(Actionsheet));
//# sourceMappingURL=Actionsheet.js.map