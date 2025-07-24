
import React, { ReactNode } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

interface LazyRenderProps {
  children: ReactNode;
  placeholderHeight?: string;
}

// This component defers the rendering of its children until it is visible on screen.
// It helps improve initial render performance for components that are below the fold.
export const LazyRender: React.FC<LazyRenderProps> = ({ children, placeholderHeight = '80vh' }) => {
  // Use a rootMargin to start rendering the component before it's fully in view
  // for a smoother user experience.
  const [ref, isOnScreen] = useOnScreen({ triggerOnce: true, rootMargin: '200px' });

  // If the component is not on screen, render a placeholder div.
  // This div takes up space, allowing it to be observed.
  if (!isOnScreen) {
    return (
      <div 
        ref={ref as React.RefObject<HTMLDivElement>} 
        style={{ minHeight: placeholderHeight }} 
        aria-hidden="true"
      ></div>
    );
  }

  // Once the placeholder is on screen, render the actual children.
  return <>{children}</>;
};
