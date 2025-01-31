import React from 'react';
import { ViewStyle } from 'react-native';
import { IBoxProps } from '../../primitives';
export declare type ICollapseProps = IBoxProps<ICollapseProps> & {
    style?: ViewStyle;
    endingHeight?: number;
    startingHeight?: number;
    duration?: number;
    animateOpacity?: boolean;
    isOpen?: boolean;
    onAnimationEnd?: Function;
    onAnimationStart?: Function;
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<IBoxProps<ICollapseProps> & {
    style?: ViewStyle | undefined;
    endingHeight?: number | undefined;
    startingHeight?: number | undefined;
    duration?: number | undefined;
    animateOpacity?: boolean | undefined;
    isOpen?: boolean | undefined;
    onAnimationEnd?: Function | undefined;
    onAnimationStart?: Function | undefined;
} & React.RefAttributes<unknown>>>;
export default _default;
