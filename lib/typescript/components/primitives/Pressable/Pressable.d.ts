import React from 'react';
import type { IPressableProps } from './types';
export declare const useHover: () => {
    hoverProps: {
        onHoverIn: () => void;
        onHoverOut: () => void;
    };
    isHovered: boolean;
};
export declare const useFocus: () => {
    focusProps: {
        onFocus: () => void;
        onBlur: () => void;
    };
    isFocused: boolean;
};
export declare const useIsPressed: () => {
    pressableProps: {
        onPressIn: () => void;
        onPressOut: () => void;
    };
    isPressed: boolean;
};
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<IPressableProps<IPressableProps<unknown>> & React.RefAttributes<unknown>>>;
export default _default;
