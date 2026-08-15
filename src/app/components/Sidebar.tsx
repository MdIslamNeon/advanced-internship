"use client";

import styles from "./Sidebar.module.css";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { TiPencil } from "react-icons/ti";
import { IoIosSearch } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { useAppDispatch } from "@/redux/hooks";
import { openModal } from "@/redux/modalSlice";

function Sidebar() {

  const dispatch = useAppDispatch();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__logo}>
        <Image className={styles.sidebar__img} src={logo} alt="landing logo" />
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
          <div
            className={`${styles.sidebar__link__wrapper} ${styles.sidebar__link__wrapper_link_not_allowed}`}
          >
            <div className={styles.sidebar__icon__wrapper}>
              <TiPencil />
            </div>
            <div className={styles.sidebar__link__text}>Highlights</div>
          </div>
          <div
            className={`${styles.sidebar__link__wrapper} ${styles.sidebar__link__wrapper_link_not_allowed}`}
          >
            <div className={styles.sidebar__icon__wrapper}>
              <IoIosSearch />
            </div>
            <div className={styles.sidebar__link__text}>Search</div>
          </div>
        </div>
        <div className={styles.sidebar__bottom}>
          <a className={styles.sidebar__link__wrapper} href="/for-you">
            <div className={styles.sidebar__icon__wrapper}>
              <CiSettings />
            </div>
            <div className={styles.sidebar__link__text}>Settings</div>
          </a>
          <div
            className={`${styles.sidebar__link__wrapper} ${styles.sidebar__link__wrapper_link_not_allowed}`}
          >
            <div className={styles.sidebar__icon__wrapper}>
              <HiOutlineQuestionMarkCircle />
            </div>
            <div className={styles.sidebar__link__text}>Search</div>
          </div>
          <div className={styles.sidebar__link__wrapper}>
            <div className={styles.sidebar__icon__wrapper}>
              <FaArrowRightFromBracket />
            </div>
            <div className={styles.sidebar__link__text} onClick={() => dispatch(openModal('login'))}>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
