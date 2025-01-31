import React from 'react';
import type { IPopperProps, IPopoverArrowProps } from './types';
import { IBoxProps } from '../../primitives/Box';
declare const Popper: {
    (props: IPopperProps & {
        triggerRef: any;
        onClose: any;
        setOverlayRef?: ((overlayRef: any) => void) | undefined;
    }): JSX.Element;
    Content: React.ForwardRefExoticComponent<IBoxProps<null> & React.RefAttributes<unknown>>;
    Arrow: React.ForwardRefExoticComponent<IPopoverArrowProps & IBoxProps<IPopoverArrowProps> & React.RefAttributes<unknown>>;
};
export { Popper };
