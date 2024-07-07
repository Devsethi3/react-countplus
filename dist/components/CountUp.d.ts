import * as React from "react";
interface CountPlusProps {
    end: number;
    start?: number;
    duration?: number;
    easingFunction?: (t: number) => number;
    formatFunction?: (value: number) => string;
    prefix?: string;
    suffix?: string;
    separator?: string;
    onStart?: () => void;
    onUpdate?: (value: number) => void;
    onComplete?: () => void;
}
export declare const CountPlus: React.FC<CountPlusProps>;
export {};
