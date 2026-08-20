import axios from "axios";
import styles from "./ForYouContent.module.css";
import type { Book as BookType } from "../types";
import Book from "./Book";

async function SuggestedBooks() {
  const { data: suggestedBooks } = await axios.get<BookType[]>(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested",
  );

  return (
    <div className={styles.recommended__books}>
      <div className={styles.for_you_title}>Suggested Books</div>
      <div className={styles.for_you_subtitle}>Browse these books</div>
      <div className={styles.for_you_recommended_books}>
        {suggestedBooks.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default SuggestedBooks;
