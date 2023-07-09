import { useInView } from "react-intersection-observer";

export const useView = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animation triggers only once when the component comes into view (when set to true)
    threshold: 0.1, // Defines the percentage of the component's visibility required to trigger the animation
    delay: 100, // set the delay in animation when the component comes into view
  });

  return {
    ref,
    inView,
  };
};
