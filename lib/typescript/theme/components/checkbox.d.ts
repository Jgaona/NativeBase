declare const _default: {
    baseStyle: (props: Record<string, any>) => {
        justifyContent: string;
        flexDirection: string;
        borderWidth: number;
        borderRadius: string;
        borderColor: any;
        bg: any;
        _text: {
            ml: number;
            color: any;
        };
        _interactionBox: {
            position: string;
            borderRadius: string;
        };
        _hover: {
            _interactionBox: {
                bg: string;
            };
        };
        _focus: {
            _interactionBox: {
                bg: string;
            };
        };
        _focusVisible: {
            _interactionBox: {
                bg: string;
            };
        };
        _disabled: {
            _interactionBox: {
                bg: string;
            };
            opacity: number;
        };
        _pressed: {
            _interactionBox: {
                bg: string;
            };
        };
        _checked: {
            borderColor: any;
            bg: any;
        };
        _invalid: {
            borderColor: any;
        };
        _icon: {
            color: any;
        };
    };
    sizes: {
        lg: {
            _icon: {
                size: number;
            };
            _text: {
                fontSize: string;
            };
        };
        md: {
            _icon: {
                size: number;
            };
            _text: {
                fontSize: string;
            };
        };
        sm: {
            _icon: {
                size: number;
            };
            _text: {
                fontSize: string;
            };
        };
    };
    defaultProps: {
        defaultIsChecked: boolean;
        size: string;
        colorScheme: string;
    };
};
export default _default;
