import type { IInputProps } from '../../primitives/Input';
import type { IStackProps } from '../../primitives/Stack';
import type { ISelectProps } from '../../primitives/Select';
import type { ITextAreaProps } from '../../primitives/TextArea';
declare type componentsSpecificProps = ({
    component?: 'input';
} & IInputProps) | ({
    component?: 'textarea';
} & ITextAreaProps) | ({
    component?: 'select';
} & ISelectProps);
export declare type ITextFieldProps = componentsSpecificProps & IStackProps & {
    helperText?: string;
    errorMessage?: string;
    _helperTextProps?: any;
    _errorMessageProps?: any;
};
export {};
