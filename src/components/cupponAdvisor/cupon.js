import React from "react";
import styles from "./cupon.module.css"

const cupon = () => {
  return (
    <div>
      <a className="text-sm text-black">Have a cupon? Enter your code</a>
      <div className="flex flex-row w-2/5">
        <input type="text" placeholder="Enter your code" className={styles.couponInput} />
        <button className={`${styles.applyButton} w-15 h-7 flex flex-wrap justif-center content-center`}><a>Apply</a></button>        
      </div>
    </div>
  );
};

export default cupon;