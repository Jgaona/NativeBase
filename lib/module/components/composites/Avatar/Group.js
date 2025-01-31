function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { memo, forwardRef } from 'react';
import Flex from '../../primitives/Flex';
import { usePropsResolution } from '../../../hooks/useThemeProps';
import isNil from 'lodash.isnil';
import { default as Avatar } from './Avatar';
import { useHasResponsiveProps } from '../../../hooks/useHasResponsiveProps'; // Todo: Try using HStack instead

const getAvatarGroupChildren = (children, space, max, plusAvatarBg, props) => {
  let childrenArray = React.Children.toArray(children);
  let plusAvatars = 0;

  if (!isNil(max) && max < childrenArray.length && max > 0) {
    plusAvatars = childrenArray.length - max;
    childrenArray = childrenArray.slice(0, max);
  }

  const trailingChildren = childrenArray.slice(1);
  const defaultProps = {
    ml: space
  };
  return [plusAvatars > 0 ? /*#__PURE__*/React.createElement(Avatar, _extends({
    bg: plusAvatarBg
  }, defaultProps, props), '+ ' + plusAvatars) : null, React.Children.map(trailingChildren.reverse(), (child, index) => {
    return /*#__PURE__*/React.cloneElement(child, {
      key: "avatar-group-child-".concat(index),
      ...props,
      ...defaultProps,
      ...child.props
    }, child.props.children);
  }), /*#__PURE__*/React.cloneElement(childrenArray[0], { ...props,
    ...childrenArray[0].props
  }, childrenArray[0].props.children)];
};

const AvatarGroup = (allProps, ref) => {
  const {
    children,
    ...props
  } = allProps;
  const {
    borderColor,
    borderWidth,
    bg,
    space,
    max
  } = usePropsResolution('AvatarGroup', props); //TODO: refactor for responsive prop

  if (useHasResponsiveProps(props)) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Flex, {
    flexDirection: "row-reverse",
    ref: ref
  }, getAvatarGroupChildren(children, space, max, bg, {
    borderColor,
    borderWidth,
    ...props
  }));
};

export default /*#__PURE__*/memo( /*#__PURE__*/forwardRef(AvatarGroup));
//# sourceMappingURL=Group.js.map