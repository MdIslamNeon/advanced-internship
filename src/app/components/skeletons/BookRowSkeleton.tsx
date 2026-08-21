import styles from '../ForYouContent.module.css';
import BookSkeleton from './BookSkeleton';

function BookRowSkeleton({title, subtitle}: {title: string, subtitle: string}) {
  return (
    <div className={styles.recommended__books}>
      <div className={styles.for_you_title}>{title}</div>
      <div className={styles.for_you_subtitle}>
        {subtitle}
      </div>
      <div className={styles.for_you_recommended_books}>
        {new Array(5).fill(0).map((_, i) => (
          <BookSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}

export default BookRowSkeleton
