import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { TextField } from "@mui/material";
import * as styles from "./subscribe-container.module.css";

const SubscribeContainer: FunctionComponent = () => {
  const onSearchButtonClick = useCallback(() => {
    // Please sync "Results Page" to the project
  }, []);

  return (
    <div className={styles.subscribeSection}>
      <div className={styles.shareYourTravelsForm}>
        <div className={styles.formHeadingSection}>
          <b className={styles.formTitleSubtext}>subscribe to our newsletter</b>
          <b className={styles.formTitle}>Get weekly updates</b>
        </div>
        <form className={styles.form}>
          <div className={styles.formText}>
            <div className={styles.formDescription}>
              Fill in your details to join the party!
            </div>
          </div>
          <div className={styles.formFields}>
            <TextField
              className={styles.destinationNameInput}
              fullWidth
              color="primary"
              variant="outlined"
              type="text"
              label="Your name"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
            <TextField
              className={styles.destinationNameInput}
              fullWidth
              color="primary"
              variant="outlined"
              type="text"
              label="Email address"
              placeholder="Placeholder"
              size="medium"
              margin="none"
            />
          </div>
          <button
            className={styles.searchButton}
            autoFocus
            onClick={onSearchButtonClick}
          >
            <div className={styles.submit}>Submit</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeContainer;
