import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./recommended-holiday-container.module.css";

type RecommendedHolidayContainerType = {
  packageCode?: string;
  packageDestination?: string;
  packageDuration?: string;
  packagePrice?: string;
};

const RecommendedHolidayContainer: FunctionComponent<
  RecommendedHolidayContainerType
> = ({ packageCode, packageDestination, packageDuration, packagePrice }) => {
  return (
    <button className={styles.recommendedHolidayCard}>
      <img className={styles.imageIcon} alt="" src={packageCode} />
      <div className={styles.holidayDetails}>
        <div className={styles.frameParent}>
          <div className={styles.destinationParent}>
            <div className={styles.destination}>{packageDestination}</div>
            <div className={styles.duration}>{packageDuration}</div>
          </div>
          <div className={styles.price}>{packagePrice}</div>
        </div>
      </div>
    </button>
  );
};

export default RecommendedHolidayContainer;
