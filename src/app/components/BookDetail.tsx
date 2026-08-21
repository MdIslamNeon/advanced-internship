import styles from "./BookDetail.module.css";
import { Book } from "@/app/types";
import Image from "next/image";
import AudioDuration from "./AudioDuration";
import {
  CiStar,
  CiClock2,
  CiMicrophoneOn,
  CiLight,
  CiBookmark,
} from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { openModal } from "@/redux/modalSlice";

interface Props {
  book: Book | null;
  loading: boolean;
}

function BookDetail({ book, loading }: Props) {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  function handleRead() {
    if(!user) {
      dispatch(openModal('login'));
      return;
    }
    if(book?.subscriptionRequired && !user.isSubscribed) {
      router.push("/choose-plan");
      return;
    }

    router.push(`/player/${book?.id}`)
  }

  if (loading) {
    return (
      <div className={styles.book__background}>
        <div className={styles.row}>
          <div className={styles.container}>
            <div className={styles.inner__wrapper}>
              <div className={styles.inner__book}>
                <div
                  className={`${styles.skeleton} ${styles.skeleton__title}`}
                />
                <div
                  className={`${styles.skeleton} ${styles.skeleton__author}`}
                />
                <div
                  className={`${styles.skeleton} ${styles.skeleton__sub_title}`}
                />
                <div
                  className={`${styles.skeleton} ${styles.skeleton__stats}`}
                />
                <div
                  className={`${styles.skeleton} ${styles.skeleton__btns}`}
                />
                <div
                  className={`${styles.skeleton} ${styles.skeleton__text}`}
                />
                <div
                  className={`${styles.skeleton} ${styles.skeleton__text}`}
                />
                <div
                  className={`${styles.skeleton} ${styles.skeleton__text}`}
                />
              </div>
              <figure
                className={`${styles.skeleton} ${styles.skeleton__img}`}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className={styles.book__background}>
        <div className={styles.row}>
          <div className={styles.container}>
            <div className={styles.inner__book_error}>Book not found.</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.book__background}>
      <div className={styles.row}>
        <div className={styles.container}>
          <div className={styles.inner__wrapper}>
            <div className={styles.inner__book}>
              <div className={styles.inner__book_title}>
                {book.title}
                {book.subscriptionRequired ? " (Premium)" : ""}
              </div>
              <div className={styles.inner__book_author}>{book.author}</div>
              <div className={styles.inner__book_sub_title}>
                {book.subTitle}
              </div>

              <div className={styles.inner__book_wrapper}>
                <div className={styles.inner__book_description}>
                  <div className={styles.inner__book_icon}>
                    <CiStar />
                  </div>
                  {book.averageRating} ({book.totalRating} ratings)
                </div>
                <div className={styles.inner__book_description}>
                  <div className={styles.inner__book_icon}>
                    <CiClock2 />
                  </div>
                  <AudioDuration audioLink={book.audioLink} />
                </div>
                <div className={styles.inner__book_description}>
                  <div className={styles.inner__book_icon}>
                    <CiMicrophoneOn />
                  </div>
                  {book.type}
                </div>
                <div className={styles.inner__book_description}>
                  <div className={styles.inner__book_icon}>
                    <CiLight />
                  </div>
                  {book.keyIdeas} key ideas
                </div>
              </div>

              <div className={styles.inner__book_read_btn_wrapper}>
                <button
                  className={styles.inner__book_read_btn}
                  onClick={() => handleRead()}
                >
                  Read
                </button>
                <button
                  className={styles.inner__book_read_btn}
                  onClick={() => handleRead()}
                >
                  Listen
                </button>
              </div>

              <button className={styles.inner__book_bookmark}>
                <CiBookmark />
                Add title to My Library
              </button>

              <div className={styles.inner__book_secondary_title}>
                What&apos;s it about?
              </div>

              {book.tags?.length ? (
                <div className={styles.inner__book_tags_wrapper}>
                  {book.tags.map((tag) => (
                    <div key={tag} className={styles.inner__book_tag}>
                      {tag}
                    </div>
                  ))}
                </div>
              ) : null}

              <div className={styles.inner__book_secondary_title}>
                What&apos;s inside?
              </div>
              <div className={styles.inner__book_summary}>
                {book.bookDescription}
              </div>

              <div className={styles.inner__book_secondary_title}>
                About the author
              </div>
              <div className={styles.inner__book_summary}>
                {book.authorDescription}
              </div>
            </div>

            <figure className={styles.inner__book_img_wrapper}>
              <Image
                className={styles.inner__book_img}
                src={book.imageLink}
                alt={book.title}
                width={300}
                height={300}
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
