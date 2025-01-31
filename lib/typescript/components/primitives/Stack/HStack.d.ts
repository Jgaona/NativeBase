import React from 'react';
import { IStackProps } from './Stack';
import type { ResponsiveValue } from '../../types';
export interface IHStackProps extends IStackProps {
    /**
     * The direction of the Stack Items.
     * @default row
     */
    direction?: ResponsiveValue<'column' | 'row' | 'column-reverse' | 'row-reverse'>;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<IHStackProps & React.RefAttributes<unknown>>>;
export default _default;
