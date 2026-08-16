import { Book } from "@/app/types";
import styles from "./TrackInfo.module.css";
import Image from "next/image";

function TrackInfo({ book }: { book: Book }) {
  return (
    <div className={styles.audio__track_wrapper}>
      <figure className={styles.audio__track_image}>
        <Image src={book.imageLink} alt="book" width={48} height={48} />
      </figure>
      <div className={styles.audio__track_details_wrapper}>
        <div className={styles.audio__track_title}>{book.title}</div>
        <div className={styles.audio__track_author}>{book.author}</div>
      </div>
    </div>
  );
}

export default TrackInfo;
