import axios from "axios";
import styles from "./ForYouContent.module.css";
import type { Book as BookType } from "../types";
import Book from "./Book";

async function RecommendedBooks() {
  const { data: recommendedBooks } = await axios.get<BookType[]>(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended",
  );

  return (
    <div className={styles.recommended__books}>
      <div className={styles.for_you_title}>Recommended For You</div>
      <div className={styles.for_you_subtitle}>
        We think you&apos;ll like these
      </div>
      <div className={styles.for_you_recommended_books}>
        {recommendedBooks.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedBooks;
