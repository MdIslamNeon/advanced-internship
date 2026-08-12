"use client";

import styles from "./AuthModal.module.css";
import googleLogo from "../../../public/google.png";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import { closeModal, openModal } from "@/redux/modalSlice";
import { useRouter } from "next/navigation";
import {auth} from '../../redux/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

function Signup() {

  const dispatch = useAppDispatch();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        dispatch(closeModal());

        router.push("/for-you")
    }
    catch (err) {
        const error = err as Error;
        console.log(error);
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
        <h1 className={styles.title}>Sign up to Summarist</h1>

        <button className={`${styles.ctaBtn} ${styles.googleBtn}`}>
          <span className={styles.googleIcon}>
            <Image src={googleLogo} alt="" width={20} height={20} />
          </span>
          Sign up with Google
        </button>

        <div className={styles.divider}>
          <span className={styles.dividerLine}></span>
          <span className={styles.dividerText}>or</span>
          <span className={styles.dividerLine}></span>
        </div>

        <form className={styles.authForm} onSubmit={(e) => handleSignUp(e)}>
          <input
            className={styles.input}
            type="email"
            placeholder="Email Address"
            required
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            required
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className={`${styles.ctaBtn} ${styles.loginBtn}`}
            type="submit"
          >
            Sign up
          </button>
        </form>

        <h4 className={styles.authLink} onClick={() => dispatch(openModal('login'))}>Already have an account?</h4>
      </div>
    </div>
  );
}

export default Signup;
