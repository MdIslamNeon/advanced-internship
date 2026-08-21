import styles from '../../settings/page.module.css';
import Skeleton from 'react-loading-skeleton';

function SettingsLoading() {
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
            <>
              <div className={styles.settings__text}>
                <Skeleton width={200} />
              </div>
              <Skeleton  width={100}/>
            </>
        </div>
        <div className={styles.setting__content}>
          <div className={styles.settings__sub_title}>Email</div>
            <div className={styles.settings__text}>
                <Skeleton width={150} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsLoading
