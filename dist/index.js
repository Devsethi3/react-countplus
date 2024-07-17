import * as React from 'react';
import { useState, useRef, useCallback, useEffect } from 'react';

const easeOutQuad = (t) => t * (2 - t);
const CountPlus = ({ start = 0, end, duration = 2, separator = ",", decimals = 0, decimal = ".", prefix = "", suffix = "", delay = 0, onStart, onUpdate, onEnd, }) => {
    const [count, setCount] = useState(start);
    const requestRef = useRef(null);
    const startTimeRef = useRef(null);
    const formatNumber = useCallback((num) => {
        const fixedNum = Math.abs(num).toFixed(decimals);
        const [intPart, decPart] = fixedNum.split(".");
        const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
        const sign = num < 0 ? "-" : "";
        let result = sign + formattedInt;
        if (decimals > 0) {
            result += decimal + decPart;
        }
        return prefix + result + suffix;
    }, [prefix, suffix, separator, decimals, decimal]);
    const animate = useCallback((time) => {
        if (startTimeRef.current === null) {
            startTimeRef.current = time;
            if (onStart)
                onStart();
        }
        const elapsed = time - startTimeRef.current;
        const millisecondsDuration = duration * 1000;
        const progress = Math.min(elapsed / millisecondsDuration, 1);
        const easedProgress = easeOutQuad(progress);
        const newCount = start + easedProgress * (end - start);
        setCount(newCount);
        if (onUpdate)
            onUpdate(newCount);
        if (progress < 1) {
            requestRef.current = requestAnimationFrame(animate);
        }
        else {
            setCount(end); // Ensure we end exactly on the target number
            if (onEnd)
                onEnd();
        }
    }, [start, end, duration, onStart, onUpdate, onEnd]);
    useEffect(() => {
        const startAnimation = () => {
            startTimeRef.current = null;
            if (requestRef.current)
                cancelAnimationFrame(requestRef.current);
            requestRef.current = requestAnimationFrame(animate);
        };
        if (delay > 0) {
            const timeoutId = setTimeout(startAnimation, delay);
            return () => clearTimeout(timeoutId);
        }
        else {
            startAnimation();
        }
        return () => {
            if (requestRef.current)
                cancelAnimationFrame(requestRef.current);
        };
    }, [animate, delay]);
    return (React.createElement("span", { "aria-live": "polite", "aria-atomic": "true" }, formatNumber(count)));
};

export { CountPlus };
