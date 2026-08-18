"use client";

import styles from "./AuthModal.module.css";
import googleLogo from "../../../public/google.png";
import guestLogo from "../../../public/guest_icon.png";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import { closeModal, openModal } from "@/redux/modalSlice";
import { useRouter } from "next/navigation";
import { signInAnonymously } from "firebase/auth";
import { auth } from "@/redux/firebase";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "sonner";
import { getAuthErrorMessage } from "@/lib/authErrors";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const provider = new GoogleAuthProvider();

  async function guestLogin() {
    try {
      const userCredential = await signInAnonymously(auth);
      const user = userCredential.user;
      console.log("Logged in as guest! User ID:", user.uid);
      dispatch(closeModal());
      // Optional: Redirect the user to your app dashboard here
      router.push("/for-you");
    } catch (err) {
      const error = err as Error;
      console.error("Guest login failed:", error.message);
      // setError("Could not sign in as a guest. Please try again.");
    } finally {
      // setIsLoading(false);
    }
  }

  async function handleLogin(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(closeModal());
      toast.success(`Welcome back, ${email}!`);

      router.push("/for-you");
    } catch (err) {
      toast.error(getAuthErrorMessage(err));
    }
  }

  async function handleGoogleLogin() {
    try {
      const result = await signInWithPopup(auth, provider);
      if (result.user) router.push("/for-you");
    } catch (err) {
      toast.error(getAuthErrorMessage(err));
    }
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.authContainer}>
        <button
          className={styles.closeBtn}
          onClick={() => dispatch(closeModal())}
        >
          ✕
        </button>
        <h1 className={styles.title}>Log in to Summarist</h1>

        <button
          className={`${styles.ctaBtn} ${styles.guestBtn}`}
          onClick={guestLogin}
        >
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

        <button
          className={`${styles.ctaBtn} ${styles.googleBtn}`}
          onClick={handleGoogleLogin}
        >
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

        <form className={styles.authForm} onSubmit={(e) => handleLogin(e)}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email Address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={`${styles.ctaBtn} ${styles.loginBtn}`}
            type="submit"
          >
            Login
          </button>
        </form>

        <h4 className={styles.authLink}>Forgot your password?</h4>
        <h4
          className={styles.authLink}
          onClick={() => dispatch(openModal("signup"))}
        >
          Don&apos;t have an account?
        </h4>
      </div>
    </div>
  );
}

export default Login;
