import { useInView } from "react-intersection-observer";

export const useView = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once when the component comes into view
    threshold: 0.1, // Defines the percentage of the component's visibility required to trigger the animation
  });

  return {
    ref,
    inView,
  };
};
