import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import Header from "../components/header";
import LocofyHeaderContainer from "../components/locofy-header-container";
import HotelResultsContainer from "../components/hotel-results-container";
import SubscribeContainer from "../components/subscribe-container";
import Footer from "../components/footer";
import * as styles from "./index.module.css";

const HotelsPage: FunctionComponent = () => {
  const onViewDetailsButtonClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  const onViewDetailsButton3Click = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  return (
    <div className={styles.hotelsPage}>
      <Header
        imageIds="/fickleflight.svg"
        smallImageIds="/notification1.svg"
        searchColor="#424242"
        offersColor="#1262af"
      />
      <LocofyHeaderContainer />
      <HotelResultsContainer />
      <div className={styles.footerSection}>
        <SubscribeContainer />
        <Footer />
      </div>
    </div>
  );
};

export default HotelsPage;
