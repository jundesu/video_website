import { useEffect, useState } from "react";


function useCurrentWidth() {
  const getWidth = () => window.innerWidth
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

  // save current window width in the state object
  let [width, setWidth] = useState(0);

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    // timeoutId for debounce mechanism
    let timeoutId = null;
    const resizeListener = () => {
      // prevent execution of previous setTimeout
      clearTimeout(timeoutId);
 
      timeoutId = setTimeout(() => {
        setWidth(getWidth())
      }, 1000);
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return width;
}

export default useCurrentWidth;