import React from 'react';
import type { IBoxProps } from '../Box';
import type { ResponsiveValue, SpaceType } from '../../types';
export interface IStackProps extends IBoxProps<IStackProps> {
    /**
     * The divider element to use between elements.
     */
    divider?: JSX.Element;
    /**
     * The space between each stack item. Accepts Responsive values
     */
    space?: ResponsiveValue<'gutter' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | SpaceType>;
    /**
     * Determines whether to reverse the direction of Stack Items.
     */
    reversed?: boolean;
    /**
     * The direction of the Stack Items.
     * @default column
     */
    direction?: ResponsiveValue<'column' | 'row' | 'column-reverse' | 'row-reverse'>;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<IStackProps & React.RefAttributes<unknown>>>;
export default _default;
