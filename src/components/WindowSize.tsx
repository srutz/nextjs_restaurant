
import { useState, useEffect } from 'react';


export type WindowSize = "small" | "medium" | "large" | "unknown"

function computeSize(): WindowSize {
    const s = window.innerHeight
    if (s < 300) {
        return "small"
    } else if (s < 500) {
        return "medium"
    }
    return "large"
}

export function useWindowSize() {
    const [size, setSize] = useState<WindowSize>(computeSize());

    const handleResize = () => {
        setSize(computeSize())
     }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [ size ]);

    return size
}

