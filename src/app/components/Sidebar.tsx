import styles from './Sidebar.module.css';
import Image from 'next/image';
import logo from "../../../public/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { TiPencil } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";


function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <Image className={styles.sidebar__img} src={logo} alt='landing logo'/>
      </div>
      <div className={styles.sidebar__wrapper}>
        <div className={styles.sidebar__top}>
          <a className={styles.sidebar__link__wrapper} href="/for-you">
            <div className={styles.sidebar__icon__wrapper}>
              <IoHomeOutline />
            </div>
            <div className={styles.sidebar__link__text}>For You</div>
          </a>
          <a className={styles.sidebar__link__wrapper} href="/for-you">
            <div className={styles.sidebar__icon__wrapper}>
              <CiBookmark />
            </div>
            <div className={styles.sidebar__link__text}>My Library</div>
          </a>
          <div className={`${styles.sidebar__link__wrapper} ${styles.sidebar__link__wrapper_link_not_allowed}`}>
            <div className={styles.sidebar__icon__wrapper}>
              <TiPencil />
            </div>
            <div className={styles.sidebar__link__text}>Highlights</div>
          </div>
          <div className={`${styles.sidebar__link__wrapper} ${styles.sidebar__link__wrapper_link_not_allowed}`}>
            <div className={styles.sidebar__icon__wrapper}>
              <IoIosSearch />
            </div>
            <div className={styles.sidebar__link__text}>Search</div>
          </div>
        </div>
        <div className={styles.sidebar__bottom}>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
