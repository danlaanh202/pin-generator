import { useEffect } from "react";

/**
 *
 * @param ref
 * @param handler
 */
const useClickOutside = (ref: any, handler: any) => {
  useEffect(() => {
    const listener = (event: any) => {
      console.log(ref.current);
      console.log(event.which);
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        event.which !== 1
      ) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
