import Skeleton from "react-loading-skeleton";
import styles from "../ForYouContent.module.css";

function BookSkeleton() {
  return (
    <div
      className={styles.for_you_recommended_books_link}
    >
      <figure className={styles.recommended__book_image_wrapper}>
        <Skeleton height={150} width={150} />
      </figure>
      <div className={styles.recommended__book_title}>
        <Skeleton />
        </div>
      <div className={styles.recommended__book_author}>
        <Skeleton />
      </div>
      <div className={styles.recommended__book_subtitle}>
        <Skeleton />
      </div>
      <div className={styles.recommended__book_details_wrapper}>
        <div className={styles.recommended__book_details}>
          <div className={styles.recommended__book_details_icon}>
            <Skeleton />
          </div>
          {/* <AudioDuration audioLink={book.audioLink} /> */}
        </div>
        <div className={styles.recommended__book_details}>
          <div className={styles.recommended__book_details_icon}>
            <Skeleton />
          </div>
          <div className={styles.recommended__book_details_text}>
            <Skeleton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookSkeleton;
