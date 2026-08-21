import styles from "./ForYouContent.module.css";
import SelectedForYou from "./SelectedForYou";
import RecommendedBooks from "./RecommendedBooks";
import SuggestedBooks from "./SuggestedBooks";
import { Suspense } from "react";
import BookRowSkeleton from "./skeletons/BookRowSkeleton";
import SelectedForYouSkeleton from "./skeletons/SelectedForYouSkeleton";

function ForYouContent() {
  return (
    <div className={styles.for_you__background}>
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={styles.for_you_wrapper}>
            <Suspense fallback={<SelectedForYouSkeleton />}>
              <SelectedForYou />
            </Suspense>
            <Suspense fallback={<BookRowSkeleton title="Recommended For You" subtitle="We think you'll like these" />}>
              <RecommendedBooks />
            </Suspense>
            <Suspense fallback={<BookRowSkeleton title="Suggested Books" subtitle="Browse these books" />}>
              <SuggestedBooks />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForYouContent;
