import * as React from "react";
import { FunctionComponent } from "react";
import Header from "../components/header";
import ExploreContainer from "../components/explore-container";
import RecentSearchesContainer from "../components/recent-searches-container";
import PopularDestinationsContainer from "../components/popular-destinations-container";
import RecommendedHolidaysContainer from "../components/recommended-holidays-container";
import PopularStaysContainer from "../components/popular-stays-container";
import NewsletterContainer from "../components/newsletter-container";
import Footer1 from "../components/footer1";
import * as styles from "./figmapage.module.css";

const Figmapage: FunctionComponent = () => {
  return (
    <div className={styles.figmapage}>
      <Header
        imageIds="/fickleflight1.svg"
        smallImageIds="/notification2.svg"
        searchColor="#1262af"
        offersColor="#424242"
      />
      <ExploreContainer />
      <div className={styles.homeContents}>
        <RecentSearchesContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysContainer />
      </div>
      <div className={styles.footerSection}>
        <NewsletterContainer />
        <Footer1 />
      </div>
    </div>
  );
};

export default Figmapage;
