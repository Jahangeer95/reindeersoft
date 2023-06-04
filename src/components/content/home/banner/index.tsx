import CustomBanner from "@/components/custom/banner";
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <CustomBanner
      title="Reindeersoft - Empowering Innovation, Transforming Technology"
      description="Innovating the digital space for businesses to grow.
      We build simple software solutions for complex problems."
      list={[]}
      imageClass={styles.homeBannerImage}
    />
  );
};

export default Banner;
