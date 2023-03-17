import * as React from "react";
import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import * as styles from "./header.module.css";

type HeaderType = {
  imageIds?: string;
  smallImageIds?: string;

  /** Style props */
  searchColor?: Property.Color;
  offersColor?: Property.Color;
};

const Header: FunctionComponent<HeaderType> = ({
  imageIds,
  smallImageIds,
  searchColor,
  offersColor,
}) => {
  const exploreStyle: CSS.Properties = useMemo(() => {
    return {
      color: searchColor,
    };
  }, [searchColor]);

  const hotelsStyle: CSS.Properties = useMemo(() => {
    return {
      color: offersColor,
    };
  }, [offersColor]);

  return (
    <header className={styles.topHeader}>
      <div className={styles.topContainer}>
        <img className={styles.fickleflightIcon} alt="" src={imageIds} />
        <div className={styles.navigationRight}>
          <div className={styles.navigationMenu}>
            <div className={styles.explore} style={exploreStyle}>
              Explore
            </div>
            <div className={styles.explore}>Search</div>
            <button className={styles.hotels} style={hotelsStyle}>
              Hotels
            </button>
            <button className={styles.offers}>Offers</button>
          </div>
          <div className={styles.accountSection}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src="/notification.svg"
            />
            <img
              className={styles.notificationBellIcon}
              alt=""
              src={smallImageIds}
            />
            <img
              className={styles.avatarIcon}
              alt=""
              src="/top_avatar@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
