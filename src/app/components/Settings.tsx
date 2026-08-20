import React from "react";
import styles from "../settings/page.module.css";
import { useAppSelector } from "@/redux/hooks";

function Settings() {
  const { user } = useAppSelector((state) => state.user);

  return (
    <div className={styles.settings__container}>
      <div className={styles.settings__row}>
        <div className={`${styles.section__title} ${styles.page__title}`}>
          Settings
        </div>
        <div className={styles.setting__content}>
          <div className={styles.settings__sub_title}>
            Your Subscription Plan
          </div>
          {user?.isSubscribed ? (
            <>{user.planName}</>
          ) : (
            <>
              <div className={styles.settings__text}>Basic</div>
              <a
                href="/choose-plan"
                className={`${styles.btn} ${styles.settings__upgrade_btn}`}
              >
                Upgrade to Premium
              </a>
            </>
          )}
        </div>
        <div className={styles.setting__content}>
          <div className={styles.settings__sub_title}>Email</div>
          {user?.email ? (
            <div className={styles.settings__text}>{user?.email}</div>
          ) : (
            <>guest@gmail.com</>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
