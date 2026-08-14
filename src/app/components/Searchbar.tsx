import styles from "./Searchbar.module.css";
import { IoIosSearch } from "react-icons/io";


function Searchbar() {
  return (
    <div className={styles.search__background}>
      <div className={styles.search__wrapper}>
        <div className={styles.search__content}>
          <div className={styles.search}>
            <div className={styles.search__input_wrapper}>
              <input className={styles.search__input} type="text" placeholder="Search for books" />
              <div className={styles.search__icon}>
                <IoIosSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Searchbar
