import * as data from "./cloudMigrationData";
import RightServiceDescription from "@/components/custom/serviceDescription/leftImageRightText";

const CloudMigrations = () => {
  return (
    <RightServiceDescription
      title={data.cloudMigrationTitle}
      content={data.cloudMigrationContent}
    />
  );
};

export default CloudMigrations;
