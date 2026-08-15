import styles from './ForYouContent.module.css';
import SelectedForYou from './SelectedForYou';
import RecommendedBooks from './RecommendedBooks';

async function ForYouContent() {
  return (
    <div className={styles.for_you__background}>
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={styles.for_you_wrapper}>
            <SelectedForYou />
            <RecommendedBooks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForYouContent;
