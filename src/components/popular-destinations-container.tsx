import * as React from "react";
import { FunctionComponent } from "react";
import PopularDestinationContainer from "./popular-destination-container";
import * as styles from "./popular-destinations-container.module.css";

const PopularDestinationsContainer: FunctionComponent = () => {
  return (
    <div className={styles.popDestinationsMain}>
      <div className={styles.destinationsTitles}>
        <div className={styles.titleContainer}>
          <b className={styles.planYourNext}>Plan your next trip</b>
          <b className={styles.mostPopularDestinations}>
            Most Popular Destinations
          </b>
        </div>
        <button className={styles.viewAllTop}>
          <div className={styles.viewAllDestinations}>
            View all destinations
          </div>
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
        </button>
      </div>
      <div className={styles.popDestinationItems}>
        <PopularDestinationContainer
          cardImage="/cardimage@2x.png"
          destination="Paris"
          price="$699"
        />
        <PopularDestinationContainer
          cardImage="/cardimage1@2x.png"
          destination="Greece"
          price="$1079"
        />
        <PopularDestinationContainer
          cardImage="/cardimage2@2x.png"
          destination="Norway"
          price="$895"
        />
        <PopularDestinationContainer
          cardImage="/cardimage3@2x.png"
          destination="Tuscany"
          price="$1245"
        />
      </div>
      <div className={styles.viewAllBottom}>
        <div className={styles.viewAllDestinations1}>View all destinations</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
