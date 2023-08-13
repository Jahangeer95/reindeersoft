import React from "react";
import { MobileViewTablePropTypes } from "@/types/home.type";

const MobileViewTable = (props: MobileViewTablePropTypes) => {
  const { title, description } = props;

  return (
    <div>
      <h4 className="text-center p-2">{title}</h4>
      <aside>
        <p>
          <span>Main Goal:</span>
          {description[0]}
        </p>
        <p>
          <span>Cooperation Model:</span>
          {description[1]}
        </p>
        <p>
          <span>Main Advantage:</span>
          {description[2]}
        </p>
        <p>
          <span>Main Disadvantage:</span>
          {description[3]}
        </p>
      </aside>
    </div>
  );
};

export default MobileViewTable;
