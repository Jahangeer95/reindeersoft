import Image from "next/image";
import CustomBanner from "@/components/custom/banner";
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <CustomBanner
      title1="ReindeerSoft"
      title2="Embrace Ethics, Pursue Excellence"
      // description="Innovating the digital space for businesses to grow.
      // We build simple software solutions for complex problems."
      description="We specialize in driving business growth through 
      innovative digital solutions. Our focus is on creating streamlined 
      software solutions to address intricate challenges, simplifying complexity 
      for our clients."
      list={[]}
      imageClass={styles.homeBannerImage}
    />
  );
};

export default Banner;
