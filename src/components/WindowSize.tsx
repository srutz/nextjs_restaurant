
import { useState, useEffect } from 'react';


export type WindowSize = "small" | "medium" | "large" | "unknown"

export function useWindowSize() {
    const [size, setSize] = useState<WindowSize>("unknown");

    const handleResize = () => {
        //console.log("window resized: " + window.innerHeight)
        const s = window.innerHeight
        if (s < 300) {
            setSize("small")
        } else if (s < 500) {
            setSize("medium")
        } else {
            setSize("large")
        }
     }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [ size ]);

    return size
}

