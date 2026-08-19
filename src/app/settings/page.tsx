"use client";

import styles from "./page.module.css";
import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import { useAppSelector } from "@/redux/hooks";

function SettingsPage() {
  const { user } = useAppSelector((state) => state.user);

  return (
    <>
      <Sidebar />
      <Searchbar />
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
              <>Premium</>
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
    </>
  );
}

export default SettingsPage;
