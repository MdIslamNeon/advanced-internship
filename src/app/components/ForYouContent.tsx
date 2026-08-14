import styles from './ForYouContent.module.css';

function ForYouContent() {
  return (
    <div className={styles.row}>
      <div className={styles.container}>
        <div className={styles.for_you_wrapper}>
          <div className={styles.for_you_title}>Selected just for you</div>
            <a href="/book" className={styles.selected__book}>
              <div className={styles.selected__book_sub_title}>
                  How Constant Innovation Creates Radically Successful Businesses
              </div>
              <div className={styles.selected__book_line}></div>
              <div className={styles.selected__book_content}></div>
            </a>
        </div>
      </div>
    </div>
  )
}

export default ForYouContent
