import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import ResultsContainer from "./results-container";
import * as styles from "./hotel-results-container.module.css";

const HotelResultsContainer: FunctionComponent = () => {
  const onViewDetailsButtonClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  const onViewDetailsButton3Click = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  return (
    <div className={styles.hotelResults}>
      <div className={styles.resultsSumamry}>
        <div className={styles.results}>200+ results</div>
        <div className={styles.filters}>
          <div className={styles.filtersText}>Filters</div>
          <img className={styles.filtersIcon} alt="" src="/filters-icon.svg" />
        </div>
      </div>
      <div className={styles.resultsSection}>
        <div className={styles.resultCardsCol}>
          <ResultsContainer
            resultsImage="/unsplashs6ch7n3eoqy@2x.png"
            hotelType="1 king bed standard"
            hotelName="Holiday Inn Expre..."
            rating="4.7"
            reviews="(1,136 reviews)"
            videoIcon="/video-icon.svg"
            price="$S 286"
            onViewDetailsButtonClick={onViewDetailsButtonClick}
          />
          <ResultsContainer
            resultsImage="/unsplashs6ch7n3eoqy1@2x.png"
            hotelType="Bed in Quad"
            hotelName="Freehand Los Angel..."
            rating="4.2"
            reviews="(1,941 reviews)"
            videoIcon="/video.svg"
            price="$S 198"
          />
          <ResultsContainer
            resultsImage="/unsplashs6ch7n3eoqy2@2x.png"
            hotelType="1 King, City view"
            hotelName="The Westin Bonave..."
            rating="4.1"
            reviews="(1,002 reviews)"
            videoIcon="/video1.svg"
            price="$S 286"
          />
          <ResultsContainer
            resultsImage="/unsplashs6ch7n3eoqy3@2x.png"
            hotelType="Deluxe King"
            hotelName="The Ritz-Carlton, L..."
            rating="4.7"
            reviews="(1,136 reviews)"
            videoIcon="/video2.svg"
            price="$S 286"
            onViewDetailsButtonClick={onViewDetailsButton3Click}
          />
          <iframe
            className={styles.mobileMap}
            src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          />
        </div>
        <iframe
          className={styles.desktopMap}
          src={`https://www.openstreetmap.org/export/embed.html?bbox=-118.56033325195314%2C33.837912419023645%2C-117.98355102539064%2C34.25948651450623&amp;layer=mapnik`}
          title="LA Map"
        />
      </div>
    </div>
  );
};

export default HotelResultsContainer;
