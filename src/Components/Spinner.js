import React from "react";

const Spinner = () => (
  <div className={styles.wrapper}>
    <div className={styles["lds-ripple"]}>
      <div />
      <div />
    </div>
  </div>
);

export default Spinner;
