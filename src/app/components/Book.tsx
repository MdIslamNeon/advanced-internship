import { Book as BookType } from "../types";
import styles from "./ForYouContent.module.css";
import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import AudioDuration from "./AudioDuration";

function Book({ book }: { book: BookType }) {
  return (
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
      <div className={styles.recommended__book_subtitle}>{book.subTitle}</div>
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
  );
}

export default Book;
