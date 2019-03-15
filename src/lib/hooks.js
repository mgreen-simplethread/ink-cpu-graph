import { useEffect, useRef } from 'react';

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    if (!delay || delay < 1) return;

    const interval = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(interval);
  });
}
