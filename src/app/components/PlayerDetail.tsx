"use client";

import styles from "./PlayerDetail.module.css";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Book } from "../types";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { openModal } from "@/redux/modalSlice";
import { AudioPlayer } from "./audio-player/AudioPlayer";

function PlayerDetail() {
  const { bookId } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  const { user, loading: authLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    async function getBook(id: string | string[] | undefined) {
      try {
        const { data } = await axios.get(
          `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`,
        );
        setBook(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getBook(bookId);
  }, [bookId]);

  // The book page gates the Read/Listen buttons, but this route can also be
  // reached by typing the URL, so the same rules run again on mount.
  useEffect(() => {
    if (authLoading || loading) return; // don't decide until both are known

    if (!user) {
      router.replace(`/book/${bookId}`);
      dispatch(openModal("login"));
      return;
    }

    if (book?.subscriptionRequired && !user.isSubscribed) {
      router.replace("/choose-plan");
    }
  }, [authLoading, loading, user, book, bookId, router, dispatch]);

  if (authLoading || loading) {
    return (
      <div className={styles.player__background}>
        <div className={styles.audio__book_summary}>
          <div className={`${styles.skeleton} ${styles.skeleton__title}`} />
          <div className={`${styles.skeleton} ${styles.skeleton__text}`} />
          <div className={`${styles.skeleton} ${styles.skeleton__text}`} />
          <div className={`${styles.skeleton} ${styles.skeleton__text}`} />
          <div className={`${styles.skeleton} ${styles.skeleton__text}`} />
        </div>
      </div>
    );
  }

  // Redirects only run after render, so hide the summary while one is pending.
  if (!user || book?.subscriptionRequired) return null;

  if (!book) {
    return (
      <div className={styles.player__background}>
        <div className={styles.audio__book_summary}>
          <div className={styles.audio__book_error}>Book not found.</div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.player__background}>
      <div className={styles.audio__book_summary}>
        <div className={styles.audio__book_summary_title}>{book.title}</div>
        <div className={styles.audio__book_summary_text}>{book.summary}</div>
        <AudioPlayer book={book} />
      </div>
    </div>
  );
}

export default PlayerDetail;
