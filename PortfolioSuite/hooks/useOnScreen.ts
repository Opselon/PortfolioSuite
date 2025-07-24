import { useState, useEffect, useRef, RefObject } from 'react';

// The hook is now non-generic to avoid potential parsing errors with TS generics in some environments.
export const useOnScreen = (options?: IntersectionObserverInit & { triggerOnce?: boolean }): [RefObject<HTMLElement>, boolean] => {
  const ref = useRef<HTMLElement>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      if (entry.isIntersecting) {
        setIsOnScreen(true);
        if (options?.triggerOnce) {
          const currentRef = ref.current;
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      } else {
        if (!options?.triggerOnce) {
          setIsOnScreen(false);
        }
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isOnScreen];
};
