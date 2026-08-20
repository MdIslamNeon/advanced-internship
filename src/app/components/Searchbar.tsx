"use client";

import styles from "./Searchbar.module.css";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "../types";
import Image from "next/image";
import AudioDuration from "./AudioDuration";
import { CiClock2 } from "react-icons/ci";

function Searchbar() {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [searchedBooks, setSearchBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Hook to handle typing delay
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, 300);

    return () => clearTimeout(handler);
  }, [inputValue]);

  useEffect(() => {
    async function fetchSearchData() {
      setIsLoading(true);
      try {
        if (debouncedValue) {
          const { data } = await axios.get(
            `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${debouncedValue}`,
          );
          setSearchBooks(data);
          console.log(data);
        } else {
          setSearchBooks([]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSearchData();
  }, [debouncedValue]);

  return (
    <div className={styles.search__background}>
      <div className={styles.search__wrapper}>
        <div className={styles.search__content}>
          <div className={styles.search}>
            <div className={styles.search__input_wrapper}>
              <input
                className={styles.search__input}
                type="text"
                placeholder="Search for books"
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className={styles.search__icon}>
                <IoIosSearch />
              </div>
            </div>
            {debouncedValue && (
              <div className={styles.search__results}>
                {isLoading ? (
                  <p>Loading results...</p>
                ) : searchedBooks.length ? (
                  searchedBooks.map((book) => (
                    <a
                      key={book.id}
                      href={`/book/${book.id}`}
                      className={styles.search__result}
                    >
                      <figure className={styles.search__result_image_wrapper}>
                        <Image
                          src={book.imageLink}
                          alt={book.title}
                          width={80}
                          height={80}
                        />
                      </figure>
                      <div className={styles.search__result_details}>
                        <div className={styles.search__result_title}>
                          {book.title}
                        </div>
                        <div className={styles.search__result_author}>
                          {book.author}
                        </div>
                        <div className={styles.search__result_duration}>
                          <div className={styles.search__result_details_icon}>
                            <CiClock2 />
                          </div>
                          <AudioDuration audioLink={book.audioLink} />
                        </div>
                      </div>
                    </a>
                  ))
                ) : (
                  <p>No books found</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
