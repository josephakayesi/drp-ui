
import { useEffect, useRef } from 'react';

const useAnimateOnScroll = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Clean up any existing animations
    const cleanup = () => {
      const animatedElements = document.querySelectorAll(
        '.fade-in, .slide-in-left, .slide-in-right, .slide-in-bottom, .scale-in'
      );
      
      if (observerRef.current) {
        animatedElements.forEach((el) => {
          observerRef.current?.unobserve(el);
        });
      }
    };
    
    // Initial cleanup
    cleanup();
    
    // Setup new observer with slightly more forgiving threshold
    const options = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // Trigger slightly before element comes into view
      threshold: 0.05,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a small delay to make animations more noticeable
          setTimeout(() => {
            entry.target.classList.add('appear');
          }, 50);
          
          // Unobserve after adding the appear class
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, options);

    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const animatedElements = document.querySelectorAll(
        '.fade-in, .slide-in-left, .slide-in-right, .slide-in-bottom, .scale-in'
      );
  
      animatedElements.forEach((el) => {
        // Remove any existing appear classes first
        el.classList.remove('appear');
        // Then observe the element
        observerRef.current?.observe(el);
      });
    }, 100);

    return cleanup;
  }, []);

  return null;
};

export default useAnimateOnScroll;
