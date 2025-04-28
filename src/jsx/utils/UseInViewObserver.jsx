// import { useObserver } from "preact-intersection-observer";
// import { useRef, useEffect } from "preact/hooks";

// const useInViewObserver = ({ onEnter, onLeave, options = {} }) => {
//   const [rawRef, inView, entry] = useObserver(options);
//   const hasBeenInView = useRef(false);

//   useEffect(() => {
//     if (inView) {
//       if (!hasBeenInView.current) {
//         onEnter && onEnter(entry);
//         hasBeenInView.current = true;
//       }
//     } else {
//       if (hasBeenInView.current) {
//         onLeave && onLeave(entry);
//         hasBeenInView.current = false;
//       }
//     }
//   }, [inView, onEnter, onLeave, entry]);

//   return { elementRef: rawRef };
// };

// export default useInViewObserver;
