import styles from "../settings/page.module.css";
import Image from "next/image";
import loginImage from '../../../public/login.png'
import { useAppDispatch } from "@/redux/hooks";
import { openModal } from "@/redux/modalSlice";

function LoginImage() {
    const dispatch = useAppDispatch();
  return (
    <div className={styles.settings__container}>
      <div className={styles.settings__row}>
        <div className={`${styles.section__title} ${styles.page__title}`}>
          Settings
        </div>
        <div className={styles.settings__login_wrapper}>
            <Image className={styles.login_image} src={loginImage} alt="login image" />
            <div className={styles.settings__login_text}>Log in to your account to see your details.</div>
            <button 
            className={`${styles.btn} ${styles.settings__login_btn}`}
            onClick={() => dispatch(openModal('login'))}
            >
            Login
            </button>
        </div>
      </div>
    </div>
  );
}

export default LoginImage;
