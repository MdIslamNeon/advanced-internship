import axios from "axios";
import styles from "./ForYouContent.module.css";
import type { Book } from "../types";
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import AudioDuration from "./AudioDuration";
import Image from "next/image";

async function SuggestedBooks() {
  const { data: suggestedBooks } = await axios.get<Book[]>(
    "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested",
  );

  return (
    <div className={styles.recommended__books}>
      <div className={styles.for_you_title}>Suggested Books</div>
      <div className={styles.for_you_subtitle}>Browse these books</div>
      <div className={styles.for_you_recommended_books}>
        {suggestedBooks.map((book) => (
          <a
            key={book.id}
            href={`/book/${book.id}`}
            className={styles.for_you_recommended_books_link}
          >
            {book.subscriptionRequired ? (
              <div className={styles.book__pill}>Premium</div>
            ) : (
              <></>
            )}
            <figure className={styles.recommended__book_image_wrapper}>
              <Image
                className={styles.book__image}
                src={book.imageLink}
                alt={book.title}
                width={150} // Add your desired width in pixels
                height={220}
              />
            </figure>
            <div className={styles.recommended__book_title}>{book.title}</div>
            <div className={styles.recommended__book_author}>{book.author}</div>
            <div className={styles.recommended__book_subtitle}>
              {book.subTitle}
            </div>
            <div className={styles.recommended__book_details_wrapper}>
              <div className={styles.recommended__book_details}>
                <div className={styles.recommended__book_details_icon}>
                  <CiClock2 />
                </div>
                <AudioDuration audioLink={book.audioLink} />
              </div>
              <div className={styles.recommended__book_details}>
                <div className={styles.recommended__book_details_icon}>
                  <CiStar />
                </div>
                <div className={styles.recommended__book_details_text}>
                  {book.averageRating}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SuggestedBooks;
