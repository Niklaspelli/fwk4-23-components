import React from "react";
import styles from "./CookieConsent.module.css";

const CookieConsent = ({
  title,
  subTitle,
  onAccept,
  acceptBtnText,
  declineBtnText,
  subLink,
  onDecline,
  onSubClick,
}) => {
  return (
    <>
      <div className={styles.cookieBanner}>
        <div className={styles.cookieBannerTextWrapper}>
          <p className={styles.cookieBannerText}>{title || "We use cookies"}</p>
          <span className={styles.spanContainer}>
            <p className={styles.cookieBannerParagraph}>
              {subTitle || "Want to read more?"}{" "}
            </p>
            <button
              type="button"
              className={styles.readMoreButton}
              onClick={onSubClick}
            >
              {subLink || "Click Me"}
            </button>
          </span>
        </div>
        <div className={styles.buttonGroup}>
          <button type="button" className={styles.button} onClick={onDecline}>
            {declineBtnText || "Decline"}
          </button>
          <button type="button" className={styles.button} onClick={onAccept}>
            {acceptBtnText || "Accept"}
          </button>
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
