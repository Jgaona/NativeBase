import type { ITheme } from '../index';
export declare const stylingProps: {
    margin: string[];
    padding: string[];
    border: string[];
    layout: string[];
    flexbox: string[];
    position: string[];
    background: string[];
};
export declare type Dict = Record<string, any>;
export declare function omitUndefined(obj: any): Partial<any>;
export declare function getRandomString(length: number): string;
export declare function orderedExtractInObject(parent: any, values: Array<string>): Partial<any>[];
/**
 *
 * @param parent The object from which data needs to extracted
 * @param values Keys which needs to be extracted
 * @returns [extractedProps, remainingProps]
 */
export declare function extractInObject(parent: any, values: Array<string>): Partial<any>[];
export declare function getColorFormColorScheme(props: Record<string, any>): any;
export declare function getColorScheme(props: Record<string, any>, customColorScheme?: string): any;
export declare const inValidBreakpointProps: string[];
export declare function hasValidBreakpointFormat(breaks: any, themeBreakpoints?: any, property?: string): boolean;
export declare function findLastValidBreakpoint(values: any, themeBreakpoints: any, currentBreakpoint: number): any;
export declare function getClosestBreakpoint(values: Record<string, any>, point: number): number;
export declare const baseFontSize = 16;
export declare const convertAbsoluteToRem: (px: number) => string;
export declare const convertRemToAbsolute: (rem: number) => number;
export declare const convertToDp: (value: number | string) => number;
/**
 *
 * @param theme
 * @description
  - Converts space/sizes/lineHeights/letterSpacings/fontSizes to `rem` on web if the token value specified is an absolute number.
  - Converts space/sizes/lineHeights/letterSpacings/fontSizes to absolute number on native if the token value specified is in `px` or `rem`
*/
export declare const platformSpecificSpaceUnits: (theme: ITheme) => {
    radii: {
        none: number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        '2xl': number;
        '3xl': number;
        full: number;
    };
    colors: {
        contrastThreshold: number;
        white: string;
        black: string;
        lightText: string;
        darkText: string;
        rose: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        pink: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        fuchsia: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        purple: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        violet: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        indigo: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        blue: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        lightBlue: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        darkBlue: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        cyan: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        teal: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        emerald: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        green: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        lime: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        yellow: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        amber: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        orange: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        red: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        warmGray: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        trueGray: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        gray: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        coolGray: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        blueGray: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        dark: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
        };
        danger: import("../base/colors").IColorHues;
        error: import("../base/colors").IColorHues;
        success: import("../base/colors").IColorHues;
        warning: import("../base/colors").IColorHues;
        muted: import("../base/colors").IColorHues;
        primary: import("../base/colors").IColorHues;
        info: import("../base/colors").IColorHues;
        secondary: import("../base/colors").IColorHues;
        light: import("../base/colors").IColorHues;
        tertiary: import("../base/colors").IColorHues;
    };
    letterSpacings: {
        xs: string;
        sm: string;
        md: number;
        lg: string;
        xl: string;
        '2xl': string;
    };
    lineHeights: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
    };
    fonts: {
        heading: undefined;
        body: undefined;
        mono: undefined;
    };
    fontSizes: {
        '2xs': number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        '2xl': number;
        '3xl': number;
        '4xl': number;
        '5xl': number;
        '6xl': number;
        '7xl': number;
        '8xl': number;
        '9xl': number;
    };
    fontWeights: {
        hairline: number;
        thin: number;
        light: number;
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
        extrabold: number;
        black: number;
        extraBlack: number;
    };
    sizes: {
        container: {
            sm: number;
            md: number;
            lg: number;
            xl: number;
        };
        '3xs': number;
        '2xs': number;
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        '2xl': number;
        px: string;
        '0': number;
        '0.5': number;
        '1': number;
        '1.5': number;
        '2': number;
        '2.5': number;
        '3': number;
        '3.5': number;
        '4': number;
        '5': number;
        '6': number;
        '7': number;
        '8': number;
        '9': number;
        '10': number;
        '12': number;
        '16': number;
        '20': number;
        '24': number;
        '32': number;
        '40': number;
        '48': number;
        '56': number;
        '64': number;
        '72': number;
        '80': number;
        '96': number;
        '1/2': string;
        '1/3': string;
        '2/3': string;
        '1/4': string;
        '2/4': string;
        '3/4': string;
        '1/5': string;
        '2/5': string;
        '3/5': string;
        '4/5': string;
        '1/6': string;
        '2/6': string;
        '3/6': string;
        '4/6': string;
        '5/6': string;
        full: string;
    };
    space: {
        px: string;
        '0': number;
        '0.5': number;
        '1': number;
        '1.5': number;
        '2': number;
        '2.5': number;
        '3': number;
        '3.5': number;
        '4': number;
        '5': number;
        '6': number;
        '7': number;
        '8': number;
        '9': number;
        '10': number;
        '12': number;
        '16': number;
        '20': number;
        '24': number;
        '32': number;
        '40': number;
        '48': number;
        '56': number;
        '64': number;
        '72': number;
        '80': number;
        '96': number;
        '1/2': string;
        '1/3': string;
        '2/3': string;
        '1/4': string;
        '2/4': string;
        '3/4': string;
        '1/5': string;
        '2/5': string;
        '3/5': string;
        '4/5': string;
        '1/6': string;
        '2/6': string;
        '3/6': string;
        '4/6': string;
        '5/6': string;
        full: string;
    };
    shadows: {
        none: {
            shadowColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
        '0': {
            shadowColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
        '1': {
            shadowColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
        '2': {
            shadowColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
        '3': {
            shadowColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
        '4': {
            shadowColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
        '5': {
            shadowColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
        '6': {
            shadowColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
        '7': {
            shadowColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
        '8': {
            shadowColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
        '9': {
            shadowColor: string;
            shadowOffset: {
                width: number;
                height: number;
            };
            shadowOpacity: number;
            shadowRadius: number;
            elevation: number;
        };
    };
    components: {
        Progress: {
            baseStyle: (props: Record<string, any>) => {
                bg: string;
                overflow: string;
                _filledTrack: {
                    bg: any;
                    shadow: number;
                    height: string;
                    display: string;
                    alignItems: string;
                    justifyContent: string;
                    _text: {
                        color: string;
                        fontWeight: string;
                    };
                };
            };
            defaultProps: {
                colorScheme: string;
                size: string;
                rounded: string;
                min: number;
                max: number;
                value: number;
                isIndeterminate: boolean;
            };
            sizes: {
                xs: {
                    height: number;
                };
                sm: {
                    height: number;
                };
                md: {
                    height: number;
                };
                lg: {
                    height: number;
                };
                xl: {
                    height: number;
                };
                '2xl': {
                    height: number;
                };
            };
        };
        Radio: {
            baseStyle: (props: Record<string, any>) => {
                borderWidth: number;
                borderRadius: string;
                p: string;
                borderColor: any;
                bg: any;
                _text: {
                    ml: number;
                };
                _interactionBox: {
                    position: string;
                    zIndex: number;
                    borderRadius: string;
                };
                _icon: {
                    color: any;
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
                _checked: {
                    _interactionBox: {
                        borderColor: any;
                    };
                    borderColor: any;
                };
                _disabled: {
                    opacity: number;
                    _interactionBox: {
                        bg: string;
                    };
                    _icon: {
                        bg: string;
                    };
                };
                _invalid: {
                    borderColor: any;
                };
                _pressed: {
                    _interactionBox: {
                        bg: string;
                    };
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
        ScaleFade: {
            defaultProps: {
                duration: number;
                initialScale: number;
            };
        };
        Select: {
            baseStyle: (props: Record<string, any>) => {
                customDropdownIconProps: {
                    size: string;
                    p: string;
                    pl: string;
                    color: string;
                };
                _disabled: {
                    opacity: string;
                    bg: any;
                };
                _invalid: {
                    borderColor: any;
                };
                _focus: {
                    borderColor: any;
                };
                _hover: {
                    bg: any;
                };
                _actionSheetContent: {};
            };
            defaultProps: {
                optimized: boolean;
            };
        };
        SelectItem: {
            baseStyle: {
                p: string;
                px: string;
                borderRadius: string;
                minH: string;
            };
        };
        SimpleGrid: {
            baseStyle: {};
            defaultProps: {};
        };
        Skeleton: {
            baseStyle: (props: Record<string, any>) => {
                startColor: any;
                endColor: string;
                fadeDuration: number;
                speed: number;
                h: string;
                w: string;
            };
        };
        SkeletonText: {
            baseStyle: (props: Record<string, any>) => {
                startColor: any;
                endColor: string;
                fadeDuration: number;
                w: string;
                speed: number;
                _line: {
                    h: number;
                    rounded: string;
                };
            };
            defaultProps: {
                lines: number;
                space: number;
            };
        };
        SliderFilledTrack: {
            baseStyle: (props: any) => {
                bg: any;
            };
        };
        SliderThumb: {
            baseStyle: (props: any) => {
                borderRadius: number;
                zIndex: number;
                alignItems: string;
                justifyContent: string;
                bg: any;
                scaleOnPressed: number;
            };
        };
        SliderTrack: {
            baseStyle: (props: any) => {
                bg: string;
                borderRadius: string;
                overflow: string;
            };
        };
        Slider: {
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
        Slide: {
            defaultProps: {
                duration: number;
                placement: string;
                overlay: boolean;
            };
        };
        SlideFade: {
            defaultProps: {
                duration: number;
                offsetX: number;
                offsetY: number;
            };
        };
        Spinner: {
            baseStyle: {
                color: string;
            };
            sizes: {
                sm: string;
                lg: string;
            };
            defaultProps: {
                size: string;
            };
        };
        Stack: {
            baseStyle: {};
            defaultProps: {};
            sizes: {
                gutter: number;
                '2xs': number;
                xs: number;
                sm: number;
                md: number;
                lg: number;
                xl: number;
                '2xl': number;
            };
        };
        Stat: {
            defaultProps: {
                _statLabel: {
                    fontSize: string;
                };
                _statNumber: {
                    fontSize: string;
                    fontWeight: string;
                    my: number;
                };
                _statHelpText: {
                    _text: {
                        color: string;
                        fontSize: string;
                    };
                    flexDirection: string;
                    alignItems: string;
                };
                _statGroup: {
                    flexWrap: string;
                    space: number;
                    justifyContent: string;
                };
            };
        };
        Switch: {
            baseStyle: (props: Record<string, any>) => {
                _disabled: {
                    opacity: number;
                };
                _invalid: {
                    borderWidth: number;
                    borderRadius: number;
                    borderColor: string;
                };
                offTrackColor: any;
                onTrackColor: any;
                onThumbColor: any;
                offThumbColor: any;
            };
            sizes: {
                sm: {
                    style: {
                        transform: {
                            scale: number;
                        }[];
                    };
                };
                md: {};
                lg: {
                    style: {
                        transform: {
                            scale: number;
                        }[];
                    };
                    margin: number;
                };
            };
            defaultProps: {
                size: string;
                colorScheme: string;
            };
        };
        Tabs: {
            baseStyle: (props: Record<string, any>) => {
                activeTabStyle: {
                    justifyContent: string;
                    alignItems: string;
                    mb: string;
                    flexDirection: string;
                    _text: {
                        fontSize: string;
                        fontWeight: string;
                    };
                };
                inactiveTabStyle: {
                    justifyContent: string;
                    alignItems: string;
                    mb: string;
                    flexDirection: string;
                    _text: {
                        color: any;
                        fontSize: string;
                        fontWeight: string;
                    };
                };
                activeIconProps: {
                    color: any;
                    name: string;
                    mx: number;
                };
                inactiveIconProps: {
                    name: string;
                    mx: number;
                };
            };
            variants: {
                outline: (props: Record<string, any>) => {
                    activeTabStyle: {
                        borderColor: any;
                        _text: {
                            color: any;
                        };
                        _hover: {
                            bg: any;
                        };
                        borderBottomWidth: number;
                    };
                    inactiveTabStyle: {
                        borderColor: string;
                        borderBottomWidth: number;
                        _hover: {
                            bg: any;
                        };
                    };
                    tabBarStyle: {
                        borderBottomWidth: number;
                        borderColor: any;
                    };
                };
                filled: (props: Record<string, any>) => {
                    activeTabStyle: {
                        borderColor: any;
                        _text: {
                            color: any;
                        };
                        _hover: {
                            bg: any;
                        };
                        borderBottomWidth: number;
                        bg: any;
                    };
                    inactiveTabStyle: {
                        borderColor: string;
                        borderBottomWidth: number;
                        _hover: {
                            bg: any;
                        };
                    };
                    tabBarStyle: {
                        borderBottomWidth: number;
                        borderColor: any;
                    };
                };
                'filled-outline': (props: Record<string, any>) => {
                    activeTabStyle: {
                        borderColor: any;
                        _text: {
                            color: any;
                        };
                        _hover: {
                            bg: any;
                        };
                        borderBottomWidth: number;
                    };
                    inactiveTabStyle: {
                        borderColor: string;
                        borderBottomWidth: number;
                        _hover: {
                            bg: any;
                        };
                    };
                    tabBarStyle: {
                        borderBottomWidth: number;
                        borderColor: any;
                        bg: any;
                    };
                };
            };
            sizes: {
                sm: {
                    activeTabStyle: {
                        _text: {
                            fontSize: string;
                        };
                        py: number;
                        px: number;
                    };
                    inactiveTabStyle: {
                        _text: {
                            fontSize: string;
                        };
                        py: number;
                        px: number;
                    };
                };
                md: {
                    activeTabStyle: {
                        _text: {
                            fontSize: string;
                        };
                        py: number;
                        px: number;
                    };
                    inactiveTabStyle: {
                        _text: {
                            fontSize: string;
                        };
                        py: number;
                        px: number;
                    };
                };
                lg: {
                    activeTabStyle: {
                        _text: {
                            fontSize: string;
                        };
                        py: number;
                        px: number;
                    };
                    inactiveTabStyle: {
                        _text: {
                            fontSize: string;
                        };
                        py: number;
                        px: number;
                    };
                };
            };
            defaultProps: {
                size: string;
                variant: string;
                colorScheme: string;
            };
        };
        Tag: {
            variants: {
                solid: (props: Record<string, any>) => {
                    bg: any;
                    _text: {
                        color: any;
                    };
                    borderWidth: string;
                    borderColor: string;
                    borderRadius: string;
                };
                subtle: (props: Record<string, any>) => {
                    bg: any;
                    _text: {
                        color: any;
                    };
                    borderWidth: string;
                    borderRadius: string;
                    borderColor: string;
                };
                outline: (props: Record<string, any>) => {
                    borderColor: any;
                    _text: {
                        color: any;
                    };
                    borderRadius: string;
                    borderWidth: string;
                };
            };
            baseStyle: {
                _text: {
                    fontWeight: string;
                };
                alignItems: string;
                justifyContent: string;
                flexDirection: string;
                display: string;
            };
            sizes: {
                sm: {
                    minH: number;
                    minW: number;
                    _text: {
                        fontSize: string;
                    };
                    p: number;
                    borderRadius: string;
                };
                md: {
                    minH: number;
                    minW: number;
                    _text: {
                        fontSize: string;
                    };
                    borderRadius: string;
                    p: number;
                };
                lg: {
                    minH: number;
                    minW: number;
                    _text: {
                        fontSize: string;
                    };
                    borderRadius: string;
                    p: number;
                };
            };
            defaultProps: {
                size: string;
                variant: string;
                colorScheme: string;
            };
        };
        Text: {
            baseStyle: (props: Record<string, any>) => {
                color: any;
                fontWeight: string;
                fontFamily: string;
                fontStyle: string;
                fontSize: string;
                letterSpacing: string;
                lineHeight: string;
            };
            defaultProps: {};
        };
        AppBar: {
            baseStyle: (props: Record<string, any>) => {
                bg: any;
                px: number;
            };
            defaultProps: {
                colorScheme: string;
            };
        };
        TextArea: {
            baseStyle: {
                multiline: boolean;
                p: string;
                totalLines: number;
                h: number | undefined;
                textAlignVertical: string;
            };
        };
        TextField: {
            baseStyle: (props: Record<string, any>) => {
                _errorMessageProps: {
                    mt: number;
                    ml: number;
                    fontSize: string;
                    color: string;
                };
                _helperTextProps: {
                    mt: number;
                    ml: number;
                    fontSize: string;
                    color: any;
                };
            };
            defaultProps: {
                component: string;
            };
        };
        Toast: {
            baseStyle: (props: Record<string, any>) => {
                bg: any;
                p: string;
                rounded: string;
                shadow: number;
                _title: {
                    color: any;
                    fontWeight: number;
                };
                _description: {
                    color: any;
                    fontWeight: number;
                };
                _closeIcon: {
                    size: number;
                };
            };
            defaultProps: {};
        };
        TypeAheadSearchItem: {
            baseStyle: (props: Record<string, any>) => {
                backgroundColor: any;
                _focus: {
                    backgroundColor: any;
                };
                _disabled: {
                    backgroundColor: string;
                };
            };
        };
        View: {
            baseStyle: {};
            defaultProps: {};
        };
        Wrap: {};
        ZStack: {
            baseStyle: {};
            defaultProps: {};
        };
        Tooltip: {
            baseStyle: (props: any) => {
                bg: any;
                py: number;
                px: number;
                rounded: string;
                shadow: number;
                _text: {
                    color: any;
                    fontSize: string;
                };
            };
        };
        PopoverCloseButton: {
            baseStyle: (props: any) => {
                position: string;
                right: number;
                top: number;
                zIndex: number;
                colorScheme: string;
                p: number;
                _icon: {
                    size: number;
                    color: any;
                };
            };
        };
        PopoverBody: {
            baseStyle: (props: any) => {
                pt: string;
                p: string;
                _text: {
                    color: any;
                };
            };
        };
        PopoverContent: {
            baseStyle: (props: any) => {
                backgroundColor: any;
                borderColor: any;
                _text: {
                    color: any;
                };
                borderWidth: number;
                rounded: string;
                overflow: string;
            };
        };
        PopoverHeader: {
            baseStyle: (props: any) => {
                py: string;
                px: string;
                borderBottomWidth: string;
                borderColor: any;
                _text: {
                    fontSize: string;
                    fontWeight: string;
                    color: any;
                    lineHeight: string;
                };
            };
        };
        PopoverArrow: {
            baseStyle: (props: any) => {
                borderColor: any;
            };
        };
        PopoverFooter: {
            baseStyle: (props: Record<string, any>) => {
                p: string;
                bg: any;
                flexDirection: string;
                justifyContent: string;
                flexWrap: string;
            };
        };
        FlatList: {
            baseStyle: {};
            defaultProps: {};
        };
        KeyboardAvoidingView: {
            baseStyle: {};
            defaultProps: {};
        };
        ScrollView: {
            baseStyle: {};
            defaultProps: {};
        };
        SectionList: {
            baseStyle: {};
            defaultProps: {};
        };
        StatusBar: {
            baseStyle: {};
            defaultProps: {};
        };
        Accordion: {
            baseStyle: (props: Record<string, any>) => {
                borderWidth: number;
                borderColor: any;
                borderRadius: string;
            };
        };
        AccordionItem: {};
        AccordionIcon: {};
        AccordionSummary: {
            baseStyle: (props: Record<string, any>) => {
                borderTopWidth: number;
                borderTopColor: any;
                p: number;
                _hover: {
                    bg: any;
                };
                _expanded: {
                    bg: string;
                    borderBottomColor: any;
                    _text: {
                        color: string;
                    };
                };
                _disabled: {
                    bg: any;
                };
            };
        };
        AccordionDetails: {
            baseStyle: {
                p: number;
            };
        };
        Actionsheet: {
            defaultProps: {
                size: string;
            };
        };
        ActionsheetContent: {
            baseStyle: (props: any) => {
                alignItems: string;
                px: number;
                py: number;
                borderRadius: string;
                roundedTop: number;
                _dragIndicator: {
                    bg: any;
                    height: number;
                    width: number;
                    borderRadius: number;
                };
            };
        };
        ActionsheetItem: {
            baseStyle: (props: any) => {
                width: string;
                justifyContent: string;
                p: number;
                _text: {
                    fontSize: number;
                    fontWeight: string;
                    color: any;
                };
                _pressed: {
                    bg: any;
                };
                _hover: {
                    bg: any;
                };
            };
            defaultProps: {
                variant: string;
            };
        };
        Alert: {
            baseStyle: {
                alignItems: string;
                justifyContent: string;
                p: number;
                space: number;
                borderRadius: string;
            };
            variants: {
                subtle: (props: Record<string, any>) => {
                    bg: any;
                    _icon: {
                        color: any;
                    };
                };
                solid: (props: Record<string, any>) => {
                    borderWidth: number;
                    borderColor: string;
                    bg: any;
                    _icon: {
                        color: any;
                    };
                };
                'left-accent': (props: Record<string, any>) => {
                    borderWidth: number;
                    bg: any;
                    _icon: {
                        color: any;
                    };
                    borderColor: string;
                    borderLeftColor: any;
                };
                'top-accent': (props: Record<string, any>) => {
                    borderWidth: number;
                    borderColor: string;
                    borderTopColor: any;
                    bg: any;
                    _icon: {
                        color: any;
                    };
                };
                outline: (props: Record<string, any>) => {
                    borderWidth: number;
                    borderColor: any;
                    _icon: {
                        color: any;
                    };
                };
                'outline-light': (props: Record<string, any>) => {
                    borderWidth: number;
                    borderColor: string;
                    _icon: {
                        color: any;
                    };
                };
            };
            defaultProps: {
                colorScheme: string;
                variant: string;
            };
        };
        AlertIcon: {
            baseStyle: {
                size: number;
            };
        };
        AspectRatio: {
            baseStyle: {};
            defaultProps: {
                ratio: number;
            };
        };
        Avatar: {
            baseStyle: (props: Record<string, any>) => {
                bg: string;
                borderColor: any;
                position: string;
                justifyContent: string;
                alignItems: string;
                borderRadius: string;
                _text: {
                    fontWeight: number;
                };
            };
            sizes: {
                xs: {
                    width: any;
                    height: any;
                    _text: {
                        fontSize: string;
                    };
                };
                sm: {
                    width: any;
                    height: any;
                    _text: {
                        fontSize: string;
                    };
                };
                md: {
                    width: any;
                    height: any;
                    _text: {
                        fontSize: string;
                    };
                };
                lg: {
                    width: any;
                    height: any;
                    _text: {
                        fontSize: string;
                    };
                };
                xl: {
                    width: any;
                    height: any;
                    _text: {
                        fontSize: string;
                    };
                };
                '2xl': {
                    width: any;
                    height: any;
                    _text: {
                        fontSize: string;
                    };
                };
            };
            defaultProps: {
                size: string;
            };
        };
        AvatarBadge: {
            baseStyle: (props: Record<string, any>) => {
                borderRadius: string;
                borderWidth: number;
                borderColor: any;
                bg: any;
            };
        };
        AvatarGroup: {
            baseStyle: (props: Record<string, any>) => {
                borderWidth: number;
                borderColor: any;
                bg: any;
                space: number;
            };
        };
        Badge: {
            baseStyle: {
                px: string;
                py: string;
                alignItems: string;
                _text: {
                    fontSize: string;
                    fontWeight: string;
                };
            };
            variants: {
                solid: (props: Record<string, any>) => {
                    bg: any;
                    _text: {
                        color: any;
                    };
                    borderWidth: string;
                    borderColor: string;
                    borderRadius: string;
                };
                subtle: (props: Record<string, any>) => {
                    bg: any;
                    _text: {
                        color: any;
                    };
                    borderWidth: string;
                    borderRadius: string;
                    borderColor: string;
                };
                outline: (props: Record<string, any>) => {
                    borderColor: any;
                    _text: {
                        color: any;
                    };
                    borderRadius: string;
                    borderWidth: string;
                };
            };
            defaultProps: {
                variant: string;
                colorScheme: string;
            };
        };
        Box: {
            baseStyle: {};
            defaultProps: {};
        };
        Breadcrumb: {
            baseStyle: {
                width: string;
                height: string;
                display: string;
                flexDirection: string;
                spacing: string;
            };
            defaultProps: {
                direction: string;
                wrap: string;
            };
        };
        BreadcrumbText: {
            baseStyle: {
                _current: {
                    fontWeight: string;
                };
                width: string;
                height: string;
                display: string;
                flexDirection: string;
                spacing: string;
            };
            defaultProps: {
                direction: string;
                wrap: string;
            };
        };
        BreadcrumbIcon: {
            baseStyle: {
                width: string;
                height: string;
                display: string;
                flexDirection: string;
                spacing: string;
            };
            defaultProps: {
                direction: string;
                wrap: string;
            };
        };
        Button: {
            baseStyle: (props: any) => {
                borderRadius: string;
                flexDirection: string;
                justifyContent: string;
                alignItems: string;
                _web: {
                    cursor: string;
                };
                _text: {
                    fontWeight: string;
                };
                _focusVisible: {
                    style: any;
                };
                _stack: {
                    space: number;
                    alignItems: string;
                };
                _loading: {
                    opacity: string;
                };
                _disabled: {
                    opacity: string;
                };
                _spinner: {
                    size: string;
                    focusable: boolean;
                };
            };
            variants: {
                ghost: (props: Dict) => {
                    _text: {
                        color: any;
                    };
                    bg?: undefined;
                    _web?: undefined;
                    _hover?: undefined;
                    _focusVisible?: undefined;
                    _pressed?: undefined;
                    _spinner?: undefined;
                } | {
                    _text: {
                        color: any;
                    };
                    bg: string;
                    _web: {
                        outlineWidth: string;
                    };
                    _hover: {
                        borderColor: any;
                        bg: string;
                    };
                    _focusVisible: {
                        borderColor: any;
                        bg: string;
                    };
                    _pressed: {
                        borderColor: any;
                        bg: string;
                    };
                    _spinner: {
                        size: string;
                    };
                };
                outline: (props: Dict) => {
                    _text: {
                        color: any;
                    };
                    bg?: undefined;
                    _web?: undefined;
                    _hover?: undefined;
                    _focusVisible?: undefined;
                    _pressed?: undefined;
                    _spinner?: undefined;
                    borderWidth: string;
                    borderColor: any;
                } | {
                    _text: {
                        color: any;
                    };
                    bg: string;
                    _web: {
                        outlineWidth: string;
                    };
                    _hover: {
                        borderColor: any;
                        bg: string;
                    };
                    _focusVisible: {
                        borderColor: any;
                        bg: string;
                    };
                    _pressed: {
                        borderColor: any;
                        bg: string;
                    };
                    _spinner: {
                        size: string;
                    };
                    borderWidth: string;
                    borderColor: any;
                };
                solid: (props: Dict) => {
                    _web: {
                        outlineWidth: string;
                    };
                    bg: string;
                    _hover: {
                        bg: string;
                    };
                    _pressed: {
                        bg: string;
                    };
                    _focus: {
                        bg: string;
                    };
                    _loading: {
                        bg: any;
                        opacity: string;
                    };
                    _disabled: {
                        bg: any;
                    };
                };
                subtle: (props: Dict) => {
                    _text: {
                        color: any;
                    };
                    _web: {
                        outlineWidth: string;
                    };
                    bg: string;
                    _hover: {
                        _text: {
                            color: any;
                        };
                        bg: any;
                    };
                    _pressed: {
                        _text: {
                            color: any;
                        };
                        bg: any;
                    };
                };
                link: (props: Dict) => {
                    _text: {
                        textDecorationLine: string | undefined;
                        color: any;
                    };
                    _hover: {
                        _text: {
                            color: any;
                            textDecorationLine: string;
                        };
                    };
                    _focusVisible: {
                        _text: {
                            color: any;
                            textDecorationLine: string;
                        };
                    };
                    _pressed: {
                        _text: {
                            color: any;
                        };
                    };
                    bg?: undefined;
                    _web?: undefined;
                    _spinner?: undefined;
                } | {
                    _text: {
                        textDecorationLine: string | undefined;
                        color: any;
                    };
                    _hover: {
                        _text: {
                            color: any;
                            textDecorationLine: string;
                        };
                    };
                    _focusVisible: {
                        _text: {
                            color: any;
                            textDecorationLine: string;
                        };
                    };
                    _pressed: {
                        _text: {
                            color: any;
                        };
                    };
                    bg: string;
                    _web: {
                        outlineWidth: string;
                    };
                    _spinner: {
                        size: string;
                    };
                };
                unstyled: () => {};
            };
            sizes: {
                lg: {
                    px: string;
                    py: string;
                    _text: {
                        fontSize: string;
                    };
                };
                md: {
                    px: string;
                    py: string;
                    _text: {
                        fontSize: string;
                    };
                };
                sm: {
                    px: string;
                    py: string;
                    _text: {
                        fontSize: string;
                    };
                };
                xs: {
                    px: string;
                    py: string;
                    _text: {
                        fontSize: string;
                    };
                };
            };
            defaultProps: {
                variant: string;
                size: string;
                colorScheme: string;
            };
        };
        ButtonGroup: {
            baseStyle: {
                direction: string;
            };
            defaultProps: {
                space: number;
            };
        };
        Card: {
            baseStyle: {
                shadow: number;
                borderRadius: string;
                padding: number;
                overflow: string;
            };
            defaultProps: {};
        };
        Center: {
            baseStyle: {
                display: string;
                alignItems: string;
                justifyContent: string;
            };
            sizes: {
                xs: {
                    height: number;
                    width: number;
                };
                sm: {
                    height: number;
                    width: number;
                };
                md: {
                    height: number;
                    width: number;
                };
                lg: {
                    height: number;
                    width: number;
                };
                xl: {
                    height: number;
                    width: number;
                };
                '2xl': {
                    height: number;
                    width: number;
                };
            };
        };
        Checkbox: {
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
        CircularProgress: {
            baseStyle: (props: Record<string, any>) => {
                color: any;
                trackColor: any;
            };
            sizes: {
                xs: {
                    height: number;
                    width: number;
                };
                sm: {
                    height: number;
                    width: number;
                };
                md: {
                    height: number;
                    width: number;
                };
                lg: {
                    height: number;
                    width: number;
                };
                xl: {
                    height: number;
                    width: number;
                };
                '2xl': {
                    height: number;
                    width: number;
                };
            };
            defaultProps: {
                thickness: number;
                colorScheme: string;
                size: string;
            };
        };
        Code: {
            baseStyle: {
                _text: {
                    fontFamily: string;
                    fontSize: string;
                };
                borderRadius: string;
                px: number;
                py: number;
            };
            variants: {
                solid: (props: Record<string, any>) => {
                    bg: any;
                    _text: {
                        color: any;
                    };
                    borderWidth: string;
                    borderColor: string;
                    borderRadius: string;
                };
                subtle: (props: Record<string, any>) => {
                    bg: any;
                    _text: {
                        color: any;
                    };
                    borderWidth: string;
                    borderRadius: string;
                    borderColor: string;
                };
                outline: (props: Record<string, any>) => {
                    borderColor: any;
                    _text: {
                        color: any;
                    };
                    borderRadius: string;
                    borderWidth: string;
                };
            };
            defaultProps: {
                variant: string;
                colorScheme: string;
            };
        };
        Container: {
            baseStyle: {
                maxWidth: string;
            };
        };
        Divider: {
            baseStyle: (props: Record<string, any>) => {
                width: string;
                height: string;
                bg: any;
            };
            defaultProps: {
                orientation: string;
                thickness: string;
            };
        };
        Fade: {
            defaultProps: {
                entryDuration: number;
                exitDuration: number;
            };
        };
        FAB: {
            baseStyle: {
                shadow: number;
                rounded: string;
                zIndex: number;
                placementProps: any;
                px: number;
                py: number;
            };
            defaultProps: {
                renderInPortal: boolean;
                variant: string;
                colorScheme: string;
                placement: string;
            };
        };
        Flex: {
            defaultProps: {
                flexDirection: string;
            };
        };
        FormControl: {};
        FormControlLabel: {
            baseStyle: (props: Record<string, any>) => {
                _text: {
                    fontSize: string;
                    fontWeight: string;
                };
                astrickColor: any;
                mb: string;
                mr: string;
            };
        };
        FormControlHelperText: {
            baseStyle: (props: Record<string, any>) => {
                mt: string;
                _text: {
                    fontSize: string;
                    color: any;
                };
            };
        };
        FormControlErrorMessage: {
            baseStyle: (props: Record<string, any>) => {
                mt: string;
                _text: {
                    fontSize: string;
                    color: any;
                };
                _stack: {
                    space: number;
                    alignItems: string;
                };
            };
        };
        Heading: {
            baseStyle: (props: Record<string, any>) => {
                color: any;
                fontWeight: string;
                lineHeight: string;
            };
            sizes: {
                '4xl': {
                    fontSize: (string | null)[];
                };
                '3xl': {
                    fontSize: (string | null)[];
                };
                '2xl': {
                    fontSize: (string | null)[];
                };
                xl: {
                    fontSize: (string | null)[];
                };
                lg: {
                    fontSize: (string | null)[];
                };
                md: {
                    fontSize: string;
                };
                sm: {
                    fontSize: string;
                };
                xs: {
                    fontSize: string;
                };
            };
            defaultProps: {
                size: string;
            };
        };
        HStack: {
            baseStyle: {};
            defaultProps: {};
        };
        VStack: {
            baseStyle: {};
            defaultProps: {};
        };
        Icon: {
            baseStyle: (props: Record<string, any>) => {
                color: any;
            };
            sizes: {
                xxs: number;
                xs: number;
                sm: number;
                md: number;
                lg: number;
                xl: number;
                '2xl': number;
                '3xl': number;
                '4xl': number;
                '5xl': number;
                '6xl': number;
            };
            defaultProps: {
                size: string;
            };
        };
        IconButton: {
            baseStyle: (props: any) => {
                borderRadius: string;
                _web: {
                    cursor: string;
                };
                _focusVisible: {
                    style: {
                        boxShadow: string;
                    } | {
                        boxShadow?: undefined;
                    };
                };
                _disabled: {
                    opacity: number;
                };
            };
            variants: {
                ghost: (props: Dict) => {
                    bg: string;
                    _web: {
                        outlineWidth: number;
                    };
                    _hover: {
                        bg: string;
                    };
                    _focusVisible: {
                        bg: string;
                    };
                    _pressed: {
                        bg: string;
                    };
                };
                outline: (props: Dict) => {
                    borderWidth: string;
                    borderColor: string;
                    _icon: {
                        color: any;
                    };
                    _web: {
                        outlineWidth: number;
                    };
                    _hover: {
                        bg: string;
                    };
                    _focusVisible: {
                        bg: string;
                    };
                    _pressed: {
                        bg: string;
                    };
                };
                solid: (props: Dict) => {
                    bg: string;
                    _web: {
                        outlineWidth: number;
                    };
                    _disabled: {
                        bg: any;
                    };
                    _hover: {
                        bg: string;
                    };
                    _pressed: {
                        bg: string;
                    };
                    _focus: {
                        bg: string;
                    };
                    _icon: {
                        color: any;
                    };
                };
                unstyled: () => {};
            };
            sizes: {
                lg: {
                    p: number;
                };
                md: {
                    p: number;
                };
                sm: {
                    p: number;
                };
            };
            defaultProps: {
                variant: string;
                size: string;
                colorScheme: string;
            };
        };
        Image: {
            baseStyle: {
                maxWidth: string;
            };
            sizes: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                '2xl': string;
                full: string;
            };
            defaultProps: {};
        };
        Input: {
            baseStyle: (props: Record<string, any>) => {
                selectionColor: any;
                fontFamily: string;
                p: string;
                borderRadius: string;
                overflow: string;
                color: any;
                placeholderTextColor: string;
                borderColor: any;
                _disabled: {
                    opacity: string;
                    bg: any;
                };
                _invalid: {
                    borderColor: any;
                };
                _focus: {
                    borderColor: any;
                };
                _web: {
                    outlineWidth: string;
                    overflow: string;
                    lineHeight: string;
                };
            };
            defaultProps: {
                size: string;
                variant: string;
            };
            variants: {
                outline: (props: Record<string, any>) => {
                    borderWidth: string;
                    _hover: {
                        bg: any;
                    };
                };
                underlined: () => {
                    borderRadius: string;
                    borderTopWidth: string;
                    borderLeftWidth: string;
                    borderRightWidth: string;
                    borderBottomWidth: string;
                };
                rounded: (props: Record<string, any>) => {
                    borderRadius: string;
                    borderWidth: string;
                    _hover: {
                        bg: any;
                    };
                };
                filled: (props: Record<string, any>) => {
                    bg: any;
                    borderWidth: string;
                    borderColor: string;
                    _hover: {
                        bg: any;
                    };
                };
                unstyled: () => {
                    borderWidth: string;
                };
            };
            sizes: {
                '2xl': {
                    fontSize: string;
                };
                xl: {
                    fontSize: string;
                };
                lg: {
                    fontSize: string;
                };
                md: {
                    fontSize: string;
                };
                /**
                 *
                 * @param parent The object from which data needs to extracted
                 * @param values Keys which needs to be extracted
                 * @returns [extractedProps, remainingProps]
                 */
                sm: {
                    fontSize: string;
                };
                xs: {
                    fontSize: string;
                };
            };
        };
        InputLeftAddon: {
            baseStyle: (props: Record<string, any>) => {
                borderRightWidth: string;
                roundedLeft: string;
                bg: any;
                p: string;
                borderColor: any;
                borderWidth: string;
                _text: {
                    color: any;
                };
            };
        };
        InputRightAddon: {
            baseStyle: (props: Record<string, any>) => {
                borderLeftWidth: string;
                roundedRight: string;
                bg: any;
                p: string;
                borderColor: any;
                borderWidth: string;
                _text: {
                    color: any;
                };
            };
        };
        Kbd: {
            baseStyle: (props: Record<string, any>) => {
                bg: any;
                borderColor: any;
                borderWidth: number;
                borderBottomWidth: number;
                shadow: number;
                borderRadius: string;
                px: number;
                _text: {
                    fontSize: string;
                    fontWeight: string;
                    fontFamily: string;
                };
            };
            defaultProps: {};
        };
        Link: {
            baseStyle: (props: Record<string, any>) => {
                _text: {
                    textDecorationLine: string;
                };
                width: string;
                height: string;
            };
            defaultProps: {
                isUnderlined: boolean;
            };
        };
        List: {
            baseStyle: (props: Record<string, any>) => {
                py: number;
                borderWidth: number;
                borderColor: string;
                _hover: {
                    bg: any;
                };
            };
        };
        ListItem: {
            baseStyle: {
                py: number;
                borderColor: string;
            };
            defaultProps: {
                start: number;
            };
        };
        ListIcon: {
            baseStyle: {
                mr: number;
                size: string;
            };
        };
        Menu: {
            baseStyle: (props: Record<string, any>) => {
                bg: any;
                py: number;
                borderWidth: number;
                borderColor: any;
                borderRadius: string;
                transition: {
                    initial: {
                        opacity: number;
                        translateY: number;
                    };
                    animate: {
                        opacity: number;
                        translateY: number;
                        transition: {
                            duration: number;
                        };
                    };
                    exit: {
                        opacity: number;
                        translateY: number;
                        transition: {
                            duration: number;
                        };
                    };
                    style: import("react-native").RegisteredStyle<import("react-native").StyleSheet.AbsoluteFillStyle>;
                };
            };
        };
        MenuGroup: {
            baseStyle: (props: any) => {
                _title: {
                    fontSize: string;
                    fontWeight: number;
                    textTransform: string;
                    color: any;
                };
                p: number;
            };
        };
        MenuItem: {
            baseStyle: (props: any) => {
                px: number;
                py: number;
                outlineWidth: number | undefined;
                _disabled: {
                    _text: {
                        color: any;
                    };
                };
                _focus: {
                    bg: any;
                };
                _pressed: {
                    bg: any;
                };
                _icon: {
                    size: number;
                    color: any;
                };
            };
            defaultProps: {};
        };
        Modal: {
            baseStyle: {
                width: string;
                height: string;
                justifyContent: string;
                alignItems: string;
            };
            sizes: {
                xs: {
                    contentSize: {
                        width: string;
                        maxWidth: string;
                    };
                };
                sm: {
                    contentSize: {
                        width: string;
                        maxWidth: string;
                    };
                };
                md: {
                    contentSize: {
                        width: string;
                        maxWidth: string;
                    };
                };
                lg: {
                    contentSize: {
                        width: string;
                        maxWidth: string;
                    };
                };
                xl: {
                    contentSize: {
                        width: string;
                        maxWidth: string;
                    };
                };
                full: {
                    contentSize: {
                        width: string;
                    };
                };
            };
            defaultProps: {
                size: string;
                closeOnOverlayClick: boolean;
            };
        };
        ModalContent: {
            baseStyle: (props: Record<string, any>) => {
                bg: any;
                _text: {
                    color: any;
                };
                shadow: number;
                rounded: string;
                maxHeight: string;
                overflow: string;
            };
        };
        ModalHeader: {
            baseStyle: (props: Record<string, any>) => {
                py: string;
                px: string;
                borderBottomWidth: string;
                borderColor: any;
                _text: {
                    fontSize: string;
                    fontWeight: string;
                    color: any;
                    lineHeight: string;
                };
            };
        };
        ModalBody: {
            baseStyle: (props: Record<string, any>) => {
                pt: string;
                p: string;
                _text: {
                    color: any;
                };
            };
        };
        ModalFooter: {
            baseStyle: (props: Record<string, any>) => {
                p: string;
                bg: any;
                flexDirection: string;
                justifyContent: string;
                flexWrap: string;
            };
        };
        ModalOverlay: {
            baseStyle: {
                position: string;
                left: string;
                top: string;
                opacity: string;
                right: string;
                bottom: string;
            };
        };
        ModalCloseButton: {
            baseStyle: (props: Record<string, any>) => {
                position: string;
                right: string;
                top: string;
                zIndex: string;
                colorScheme: string;
                p: string;
                _icon: {
                    size: string;
                    color: any;
                };
            };
        };
        AlertDialog: {
            baseStyle: {
                width: string;
                height: string;
                justifyContent: string;
                alignItems: string;
            };
            sizes: {
                xs: {
                    contentSize: {
                        width: string;
                        maxWidth: string;
                    };
                };
                sm: {
                    contentSize: {
                        width: string;
                        maxWidth: string;
                    };
                };
                md: {
                    contentSize: {
                        width: string;
                        maxWidth: string;
                    };
                };
                lg: {
                    contentSize: {
                        width: string;
                        maxWidth: string;
                    };
                };
                xl: {
                    contentSize: {
                        width: string;
                        maxWidth: string;
                    };
                };
                full: {
                    contentSize: {
                        width: string;
                    };
                };
            };
            defaultProps: {
                size: string;
                closeOnOverlayClick: boolean;
            };
        };
        AlertDialogContent: {
            baseStyle: (props: Record<string, any>) => {
                bg: any;
                _text: {
                    color: any;
                };
                shadow: number;
                rounded: string;
                maxHeight: string;
                overflow: string;
            };
        };
        AlertDialogHeader: {
            baseStyle: (props: Record<string, any>) => {
                py: string;
                px: string;
                borderBottomWidth: string;
                borderColor: any;
                _text: {
                    fontSize: string;
                    fontWeight: string;
                    color: any;
                    lineHeight: string;
                };
            };
        };
        AlertDialogBody: {
            baseStyle: (props: Record<string, any>) => {
                pt: string;
                p: string;
                _text: {
                    color: any;
                };
            };
        };
        AlertDialogFooter: {
            baseStyle: (props: Record<string, any>) => {
                p: string;
                bg: any;
                flexDirection: string;
                justifyContent: string;
                flexWrap: string;
            };
        };
        AlertDialogOverlay: {
            baseStyle: {
                position: string;
                left: string;
                top: string;
                opacity: string;
                right: string;
                bottom: string;
            };
        };
        AlertDialogCloseButton: {
            baseStyle: (props: Record<string, any>) => {
                position: string;
                right: string;
                top: string;
                zIndex: string;
                colorScheme: string;
                p: string;
                _icon: {
                    size: string;
                    color: any;
                };
            };
        };
        NumberInput: {
            defaultProps: {
                size: string;
                step: number;
                min: number;
                max: number;
                defaultValue: string;
                keepWithinRange: boolean;
                clampValueOnBlur: boolean;
                focusInputOnChange: boolean;
                getAriaValueText: boolean;
            };
        };
        NumberInputStepper: {
            baseStyle: (props: Record<string, any>) => {
                bg: any;
                iconColor: any;
                _active: {};
                _disabled: {
                    opacity: number;
                };
            };
        };
        PinInput: {
            sizes: {
                '2xl': {
                    fontSize: string;
                    p: number;
                    width: string;
                    height: string;
                    textAlign: string;
                    borderRadius: string;
                };
                xl: {
                    fontSize: string;
                    p: number;
                    width: string;
                    height: string;
                    textAlign: string;
                    borderRadius: string;
                };
                lg: {
                    fontSize: string;
                    p: number;
                    width: string;
                    height: string;
                    textAlign: string;
                    borderRadius: string;
                };
                md: {
                    fontSize: string;
                    p: number;
                    width: string;
                    height: string;
                    textAlign: string;
                    borderRadius: string;
                };
                sm: {
                    fontSize: string;
                    p: number;
                    width: string;
                    height: string;
                    textAlign: string;
                    borderRadius: string;
                };
                xs: {
                    fontSize: string;
                    p: number;
                    width: string;
                    height: string;
                    textAlign: string;
                    borderRadius: string;
                };
            };
            defaultProps: {
                placeholder: string;
                size: string;
                manageFocus: boolean;
                space: number;
            };
        };
        Pressable: {
            baseStyle: {};
            defaultProps: {};
        };
    };
    config: import("../..").ColorModeOptions;
    opacity: {
        0: number;
        5: number;
        10: number;
        20: number;
        25: number;
        30: number;
        40: number;
        50: number;
        60: number;
        70: number;
        75: number;
        80: number;
        90: number;
        95: number;
        100: number;
    };
    fontConfig: any;
    borderWidths: {
        '0': number;
        '1': string;
        '2': string;
        '4': string;
        '8': string;
    };
    breakpoints: {
        base: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
        '2xl': number;
    };
};
export declare function isResponsiveAnyProp(props: Record<string, any>, theme: any): boolean;
