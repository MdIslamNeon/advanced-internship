import styles from "./ForYouContent.module.css";
import axios from "axios";
import type { Book } from "../types";

async function SelectedForYou() {
  const { data } = await axios.get<Book[]>(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected",
  );

  // The endpoint returns an array; the selected book is the first entry.
  const book = data[0];

  return (
    <>
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
            <div className={styles.selected__book_duration_wrapper}></div>
          </div>
        </div>
      </a>
    </>
  );
}

export default SelectedForYou;
