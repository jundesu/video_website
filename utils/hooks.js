import { useEffect, useState } from 'react';

function useCurrentWidth() {
  const getWidth = () => window.innerWidth;
  // save current window width in the state object
  let [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(getWidth());
    let timeoutId;
    const handleResize = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setWidth(getWidth());
      }, 100);
    };
    // set resize listener
    window.addEventListener('resize', handleResize);
    // clean up function
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return width;
}

export { useCurrentWidth };
