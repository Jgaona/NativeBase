function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { OverlayContainer } from '@react-native-aria/overlays';
import { PresenceTransition } from '../Transitions';
import VStack from '../../primitives/Stack/VStack';
import { Alert } from '../../composites/Alert';
import React, { createContext, useState, useMemo } from 'react';
import { AccessibilityInfo, Easing, Platform, SafeAreaView } from 'react-native';
import IconButton from '../IconButton';
import Box from '../../primitives/Box';
import { usePropsResolution } from '../../../hooks';
import { CloseIcon } from '../../primitives/Icon/Icons';
import Text from '../../primitives/Text';
import HStack from '../../primitives/Stack/HStack';
import { useColorMode } from '../../../core/color-mode/hooks';
let INSET = 50;
const POSITIONS = {
  'top': {
    top: INSET,
    left: 0,
    right: 0
  },
  'top-right': {
    top: INSET,
    right: 0
  },
  'top-left': {
    top: INSET,
    left: 0
  },
  'bottom': {
    bottom: INSET,
    left: 0,
    right: 0
  },
  'bottom-left': {
    bottom: INSET,
    left: 0
  },
  'bottom-right': {
    bottom: INSET,
    right: 0
  }
};
const initialAnimationOffset = 24;
const transitionConfig = {
  'bottom': initialAnimationOffset,
  'top': -initialAnimationOffset,
  'top-right': -initialAnimationOffset,
  'top-left': -initialAnimationOffset,
  'bottom-left': initialAnimationOffset,
  'bottom-right': initialAnimationOffset
};
const ToastContext = /*#__PURE__*/createContext({
  toastInfo: {},
  setToastInfo: () => {},
  setToast: () => {},
  removeToast: () => {},
  hideAll: () => {},
  isActive: () => false,
  visibleToasts: {},
  setVisibleToasts: () => {},
  hideToast: () => {}
});

const CustomToast = () => {
  const {
    toastInfo,
    visibleToasts,
    removeToast
  } = React.useContext(ToastContext);

  const getPositions = () => {
    return Object.keys(toastInfo);
  };

  return getPositions().length > 0 ? /*#__PURE__*/React.createElement(OverlayContainer, null, getPositions().map(position => {
    if (Object.keys(POSITIONS).includes(position)) return /*#__PURE__*/React.createElement(VStack, _extends({
      margin: "auto",
      key: position // @ts-ignore

    }, POSITIONS[position], {
      position: "absolute",
      space: 2,
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "box-none"
    }), // @ts-ignore
    toastInfo[position].map(toast => /*#__PURE__*/React.createElement(PresenceTransition, {
      key: toast.id,
      visible: visibleToasts[toast.id],
      onTransitionComplete: status => {
        if (status === 'exited') {
          var _toast$config, _toast$config2;

          removeToast(toast.id);
          ((_toast$config = toast.config) === null || _toast$config === void 0 ? void 0 : _toast$config.onCloseComplete) && ((_toast$config2 = toast.config) === null || _toast$config2 === void 0 ? void 0 : _toast$config2.onCloseComplete());
        }
      },
      initial: {
        opacity: 0,
        translateY: transitionConfig[position]
      },
      animate: {
        opacity: 1,
        transition: {
          easing: Easing.ease,
          duration: 250
        }
      },
      exit: {
        opacity: 0,
        scale: 0.85,
        transition: {
          easing: Easing.ease,
          duration: 100
        }
      }
    }, /*#__PURE__*/React.createElement(SafeAreaView, null, toast.component))));else return null;
  })) : null;
};

export const ToastProvider = ({
  children
}) => {
  const [toastInfo, setToastInfo] = useState({});
  const [visibleToasts, setVisibleToasts] = useState({});
  const [themeProps] = useState(usePropsResolution('Toast', {}));
  const {
    colorMode
  } = useColorMode();
  const toastIndex = React.useRef(1);
  const hideAll = React.useCallback(() => {
    setVisibleToasts({});
  }, [setVisibleToasts]);
  const hideToast = React.useCallback(id => {
    setVisibleToasts(prevVisibleToasts => ({ ...prevVisibleToasts,
      [id]: false
    }));
  }, [setVisibleToasts]);
  const isActive = React.useCallback(id => {
    for (const toastPosition of Object.keys(toastInfo)) {
      const positionArray = toastInfo[toastPosition];
      return positionArray.findIndex(toastData => toastData.id === id) > -1;
    }

    return false;
  }, [toastInfo]);
  const removeToast = React.useCallback(id => {
    setToastInfo(prev => {
      for (const toastPosition of Object.keys(prev)) {
        const positionArray = prev[toastPosition];
        const isToastPresent = positionArray.findIndex(toastData => toastData.id === id) > -1;

        if (isToastPresent) {
          const newPositionArray = positionArray.filter(item => item.id !== id);
          const temp = {};
          temp[toastPosition] = newPositionArray;
          const newToastInfo = { ...prev,
            ...temp
          };
          return newToastInfo;
        }
      }

      return prev;
    });
  }, [setToastInfo]);
  const getTextColor = React.useCallback(variant => {
    switch (variant) {
      case 'left-accent':
      case 'top-accent':
      case 'subtle':
        return 'coolGray.800';

      case 'solid':
        return 'warmGray.50';

      case 'outline':
      case 'outline-light':
        return colorMode === 'light' ? 'coolGray.800' : 'warmGray.50';

      default:
        return 'black';
    }
  }, [colorMode]);
  const setToast = React.useCallback(props => {
    // console.log("in settoast");
    const {
      placement = 'bottom',
      title,
      render,
      status,
      id = toastIndex.current++,
      description,
      isClosable = true,
      duration = 5000,
      variant,
      accessibilityAnnouncement,
      accessibilityLiveRegion = 'polite',
      ...rest
    } = props;
    let positionToastArray = toastInfo[placement];
    if (!positionToastArray) positionToastArray = [];
    let component = null;

    if (render) {
      component = render({
        id
      });
    } else if (!status && !variant) {
      component = /*#__PURE__*/React.createElement(VStack, _extends({
        space: title && description ? 1 : 0
      }, themeProps, rest), /*#__PURE__*/React.createElement(Box, {
        _text: themeProps._title
      }, title), description && /*#__PURE__*/React.createElement(Box, {
        _text: themeProps._description
      }, description));
    } else if (status || variant) {
      component = /*#__PURE__*/React.createElement(Alert, _extends({
        maxWidth: "100%",
        alignSelf: "center",
        flexDirection: "row",
        status: status !== null && status !== void 0 ? status : 'info',
        variant: variant,
        accessibilityLiveRegion: accessibilityLiveRegion
      }, rest), /*#__PURE__*/React.createElement(VStack, {
        space: 1,
        flexShrink: 1,
        w: "100%"
      }, /*#__PURE__*/React.createElement(HStack, {
        flexShrink: 1,
        alignItems: "center",
        justifyContent: "space-between"
      }, /*#__PURE__*/React.createElement(HStack, {
        space: 2,
        flexShrink: 1,
        alignItems: "center"
      }, /*#__PURE__*/React.createElement(Alert.Icon, null), /*#__PURE__*/React.createElement(Text, {
        fontSize: "md",
        fontWeight: "medium",
        color: getTextColor(variant !== null && variant !== void 0 ? variant : 'subtle'),
        flexShrink: 1
      }, title)), isClosable ? /*#__PURE__*/React.createElement(IconButton, {
        variant: "unstyled",
        icon: /*#__PURE__*/React.createElement(CloseIcon, {
          size: "3",
          color: getTextColor(variant !== null && variant !== void 0 ? variant : 'subtle')
        }),
        onPress: () => hideToast(id)
      }) : null), /*#__PURE__*/React.createElement(Box, {
        px: "6" // @ts-ignore
        ,
        _text: {
          color: getTextColor(variant !== null && variant !== void 0 ? variant : 'subtle')
        }
      }, description)));
    }

    toastInfo[placement] = [...positionToastArray, {
      component,
      id,
      config: props
    }];
    setToastInfo({ ...toastInfo
    });
    setVisibleToasts({ ...visibleToasts,
      [id]: true
    });

    if (duration !== null) {
      setTimeout(function () {
        hideToast(id);
      }, duration);
    } // iOS doesn't support accessibilityLiveRegion


    if (accessibilityAnnouncement && Platform.OS === 'ios') {
      AccessibilityInfo.announceForAccessibility(accessibilityAnnouncement);
    }

    return id;
  }, [getTextColor, themeProps, toastInfo, visibleToasts, hideToast]);
  const contextValue = React.useMemo(() => {
    return {
      toastInfo,
      setToastInfo,
      setToast,
      removeToast,
      hideAll,
      isActive,
      visibleToasts,
      setVisibleToasts,
      hideToast
    };
  }, [toastInfo, setToastInfo, setToast, removeToast, hideAll, isActive, visibleToasts, setVisibleToasts, hideToast]);
  return /*#__PURE__*/React.createElement(ToastContext.Provider, {
    value: contextValue
  }, children, /*#__PURE__*/React.createElement(CustomToast, null));
};
export const useToast = () => {
  const {
    setToast,
    hideAll,
    isActive,
    hideToast
  } = React.useContext(ToastContext);
  const toast = useMemo(() => ({
    show: setToast,
    close: hideToast,
    closeAll: hideAll,
    isActive
  }), [setToast, hideAll, isActive, hideToast]);
  return toast;
};
export const ToastRef = /*#__PURE__*/React.createRef();
export const Toast = {
  show: props => {
    var _ToastRef$current;

    return (_ToastRef$current = ToastRef.current) === null || _ToastRef$current === void 0 ? void 0 : _ToastRef$current.show(props);
  },
  close: id => {
    var _ToastRef$current2;

    return (_ToastRef$current2 = ToastRef.current) === null || _ToastRef$current2 === void 0 ? void 0 : _ToastRef$current2.close(id);
  },
  closeAll: () => {
    var _ToastRef$current3;

    return (_ToastRef$current3 = ToastRef.current) === null || _ToastRef$current3 === void 0 ? void 0 : _ToastRef$current3.closeAll();
  },
  isActive: id => {
    var _ToastRef$current4;

    return (_ToastRef$current4 = ToastRef.current) === null || _ToastRef$current4 === void 0 ? void 0 : _ToastRef$current4.isActive(id);
  }
};
//# sourceMappingURL=Toast.js.map