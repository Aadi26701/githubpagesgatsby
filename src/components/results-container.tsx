import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./results-container.module.css";

type ResultsContainerType = {
  resultsImage?: string;
  hotelType?: string;
  hotelName?: string;
  rating?: string;
  reviews?: string;
  videoIcon?: string;
  price?: string;

  /** Action props */
  onViewDetailsButtonClick?: () => void;
};

const ResultsContainer: FunctionComponent<ResultsContainerType> = ({
  resultsImage,
  hotelType,
  hotelName,
  rating,
  reviews,
  videoIcon,
  price,
  onViewDetailsButtonClick,
}) => {
  return (
    <div className={styles.resultsCard}>
      <img className={styles.resultsImageIcon} alt="" src={resultsImage} />
      <div className={styles.resultsDetails}>
        <div className={styles.resultsTitle}>
          <div className={styles.resultAndVideo}>
            <div className={styles.hotelType}>{hotelType}</div>
            <b className={styles.hotelName}>{hotelName}</b>
            <div className={styles.review}>
              <div className={styles.stars}>
                <img className={styles.staricon} alt="" src="/vector.svg" />
                <div className={styles.rating}>{rating}</div>
              </div>
              <div className={styles.reviews}>{reviews}</div>
            </div>
          </div>
          <img className={styles.videoIcon} alt="" src={videoIcon} />
        </div>
        <div className={styles.priceAndCta}>
          <div className={styles.pricePerNight}>
            <b className={styles.price}>{price}</b>
            <div className={styles.night}>/night</div>
          </div>
          <button
            className={styles.viewDetailsButton}
            autoFocus
            onClick={onViewDetailsButtonClick}
          >
            <div className={styles.searchFlights}>View Details</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsContainer;
