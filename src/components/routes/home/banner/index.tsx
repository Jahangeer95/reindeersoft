import CustomBanner from "@/components/custom/banner";
import { homeBannerData } from "./HomeBannerData";
import styles from "./banner.module.scss";

const Banner = () => {
  return (
    <CustomBanner
      title1={homeBannerData.title1}
      title2={homeBannerData.title2}
      description={homeBannerData.description}
      list={[]}
      imageClass={styles.homeBannerImage}
    />
  );
};

export default Banner;
