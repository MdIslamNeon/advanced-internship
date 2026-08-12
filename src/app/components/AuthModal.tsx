"use client";

import styles from "./AuthModal.module.css";
import googleLogo from "../../../public/google.png";
import guestLogo from "../../../public/guest_icon.png"
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { closeModal } from "@/redux/modalSlice";
import { auth } from "@/redux/firebase";
import { signInAnonymously } from "firebase/auth";
import { useRouter } from "next/navigation";

function AuthModal() {

  // 1. Extract the modal status and active view type from your global Redux store
  const { isOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  const router = useRouter();

  if(!isOpen) {
    return null;
  }

  async function guestLogin() {
    try {
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;
      console.log("Logged in as guest! User ID:", user.uid);
      // Optional: Redirect the user to your app dashboard here
      router.push('/for-you')
    } 
    catch (err) {
      const error = err as Error
      console.error("Guest login failed:", error.message);
      // setError("Could not sign in as a guest. Please try again.");
    } 
    finally {
      // setIsLoading(false);
    }
  }
  
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.authContainer}>
        <button className={styles.closeBtn} onClick={() => dispatch(closeModal())}>
          ✕
        </button>
        <h1 className={styles.title}>Log in to Summarist</h1>

        <button className={`${styles.ctaBtn} ${styles.guestBtn}`} onClick={guestLogin}>
          <span className={styles.guestIcon}>
            <Image src={guestLogo} alt="" width={20} height={20} />
          </span>
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

        <form className={styles.authForm}>
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
