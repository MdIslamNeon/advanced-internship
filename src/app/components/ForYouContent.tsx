import styles from './ForYouContent.module.css';
import axios from 'axios';

type Book = {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  averageRating: number;
  type: string;
};

async function ForYouContent() {
  const { data } = await axios.get<Book[]>(
    'https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected'
  );

  // The endpoint returns an array; the selected book is the first entry.
  const book = data[0];

  return (
    <div className={styles.for_you__background}>
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={styles.for_you_wrapper}>
            <div className={styles.for_you_title}>Selected just for you</div>
            {/* Selected Book */}
            <a href={`/book/${book.id}`} className={styles.selected__book}>
              <div className={styles.selected__book_sub_title}>{book.subTitle}</div>
              <div className={styles.selected__book_line}></div>
              <div className={styles.selected__book_content}>
                <figure className={styles.book__image_wrapper}>
                  <img
                    className={styles.book__image}
                    src={book.imageLink}
                    alt={book.title}
                  />
                </figure>
                <div className={styles.selected__book_text}>
                  <div className={styles.selected__book_title}>{book.title}</div>
                  <div className={styles.selected__book_author}>{book.author}</div>
                  <div className={styles.selected__book_duration_wrapper}>
  
                  </div>
                </div>
              </div>
            </a>
            {/* Recommended Books */}
            <div className={styles.recommended__books}>
                <div className={styles.for_you_title}>Recommended For You</div>
                <div className={styles.for_you_subtitle}>We think you&apos;ll like these</div>
                <div className={styles.for_you_recommended_books}>

                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForYouContent;
