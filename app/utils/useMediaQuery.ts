import React, { useState, useEffect, useCallback } from 'react';

/**
 * xs <  650px
 * sm >= 650px
 * md >= 960px
 * lg >= 1280px
 * xl >= 1400px
 */

/**
 * Breakpoint	<650px	≥650px	≥960px	≥1280px	≥1400px
 * default	  100%	  650px	  960px	  1280px	1400px
 * xs	        100%	  650px	  960px	  1280px	1400px
 * sm	        100%	  100%	  960px	  1280px	1400px
 * md	        100%	  100%	  960px	  1280px	1400px
 * lg	        100%	  100%	  100%	  1280px	1400px
 * xl	        100%	  100%	  100%	  100%	  1400px
 * fluid	    100%	  100%	  100%	  100%	  100%
 */

/**
 *
 * @param width
 * @returns true or false
 */

export const useMediaQuery = (width: number): boolean => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    addEventListener('change', updateTarget);
    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }
    return () => media.removeEventListener('change', updateTarget);
  }, [updateTarget, width]);

  return targetReached;
};