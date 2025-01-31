export declare const SliderTrack: {
    baseStyle: (props: any) => {
        bg: string;
        borderRadius: string;
        overflow: string;
    };
};
export declare const SliderThumb: {
    baseStyle: (props: any) => {
        borderRadius: number;
        zIndex: number;
        alignItems: string;
        justifyContent: string;
        bg: any;
        scaleOnPressed: number;
    };
};
export declare const SliderFilledTrack: {
    baseStyle: (props: any) => {
        bg: any;
    };
};
export declare const Slider: {
    defaultProps: {
        size: string;
    };
    sizes: {
        lg: {
            thumbSize: number;
            sliderSize: number;
        };
        md: {
            thumbSize: number;
            sliderSize: number;
        };
        sm: {
            thumbSize: number;
            sliderSize: number;
        };
    };
};
