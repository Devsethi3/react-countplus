import * as React from 'react';
import { useState, useRef, useEffect } from 'react';

const easeOutQuad = (t) => t * (2 - t);
const CountPlus = ({ end, start = 0, duration = 2, // Default duration in seconds
easingFunction = easeOutQuad, formatFunction = (value) => value.toString(), prefix = "", suffix = "", separator = ",", onStart, onUpdate, onComplete, }) => {
    const [count, setCount] = useState(start);
    const requestRef = useRef(null);
    useEffect(() => {
        if (onStart)
            onStart();
        let startTime = null;
        const millisecondsDuration = duration * 1000; // Convert seconds to milliseconds
        const animate = (time) => {
            if (startTime === null)
                startTime = time;
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / millisecondsDuration, 1);
            const easedProgress = easingFunction(progress);
            const newCount = start + easedProgress * (end - start);
            setCount(newCount);
            if (onUpdate)
                onUpdate(newCount);
            if (progress < 1) {
                requestRef.current = requestAnimationFrame(animate);
            }
            else {
                if (onComplete)
                    onComplete();
            }
        };
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current)
                cancelAnimationFrame(requestRef.current);
        };
    }, [start, end, duration, easingFunction, onStart, onUpdate, onComplete]);
    // Format the count with separators
    const formattedCount = formatFunction(count).replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return (React.createElement("span", null,
        prefix,
        formattedCount,
        suffix));
};

export { CountPlus };
