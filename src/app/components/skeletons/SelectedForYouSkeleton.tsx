import styles from '../ForYouContent.module.css';
import Skeleton from 'react-loading-skeleton';

function SelectedForYouSkeleton() {
  return (
    <>
      <div className={styles.for_you_title}>Selected just for you</div>
      {/* Selected Book */}
      <a className={styles.selected__book}>
        <div className={styles.selected__book_sub_title}>
            <Skeleton count={2} />
        </div>
        <div className={styles.selected__book_line}></div>
        <div className={styles.selected__book_content}>
          <figure className={styles.book__image_wrapper}>
            <Skeleton height={140} width={140} />
          </figure>
          <div className={styles.selected__book_text}>
            <div className={styles.selected__book_title}>
                <Skeleton width={150} />
            </div>
            <div className={styles.selected__book_author}>
                <Skeleton width={120} />
            </div>
            <div className={styles.selected__book_duration_wrapper}></div>
          </div>
        </div>
      </a>
    </>
  )
}

export default SelectedForYouSkeleton
