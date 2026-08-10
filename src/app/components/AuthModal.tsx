"use client";
import styles from "./AuthModal.module.css";
import googleLogo from "../../../public/google.png";
import Image from "next/image";

function AuthModal({ closeModal }: { closeModal: () => void }) {
  function handleSubmit() {}
  
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.authContainer}>
        <button className={styles.closeBtn} onClick={closeModal}>
          ✕
        </button>
        <h1 className={styles.title}>Log in to Summarist</h1>
        <button className={`${styles.ctaBtn} ${styles.guestBtn}`}>
          Login as a Guest
        </button>

        <div className={styles.divider}>
          <span className={styles.dividerLine}></span>
          <span className={styles.dividerText}>or</span>
          <span className={styles.dividerLine}></span>
        </div>

        <button className={`${styles.ctaBtn} ${styles.googleBtn}`}>
          <span className={styles.googleIcon}>
            <Image src={googleLogo} alt="" width={20} height={20} />
          </span>
          Login with Google
        </button>

        <div className={styles.divider}>
          <span className={styles.dividerLine}></span>
          <span className={styles.dividerText}>or</span>
          <span className={styles.dividerLine}></span>
        </div>

        <form className={styles.authForm} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            required
          />
          <button
            className={`${styles.ctaBtn} ${styles.loginBtn}`}
            type="submit"
          >
            Login
          </button>
        </form>

        <h4 className={styles.authLink}>Forgot your password?</h4>
        <h4 className={styles.authLink}>Don&apos;t have an account?</h4>
      </div>
    </div>
  );
}

export default AuthModal;
