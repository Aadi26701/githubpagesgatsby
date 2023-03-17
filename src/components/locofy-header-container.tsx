import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./locofy-header-container.module.css";

const LocofyHeaderContainer: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.banner}>
        <div className={styles.title}>
          <div className={styles.hotelsTagline}>
            Stays in locofy Los Angeles
          </div>
          <div className={styles.filterOptions}>
            <button className={styles.filterOption} autoFocus>
              <div className={styles.recommended}>Recommended</div>
            </button>
            <button className={styles.filterOption1} autoFocus>
              <div className={styles.price}>Price</div>
            </button>
            <button className={styles.filterOption2} autoFocus>
              <div className={styles.price}>Rating</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocofyHeaderContainer;
