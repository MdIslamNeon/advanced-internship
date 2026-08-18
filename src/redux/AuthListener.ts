"use client";

import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./userSlice";


export function AuthListener() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return onAuthStateChanged(auth, (firebaseUser) => {
      dispatch(
        setUser(
          firebaseUser
            ? {
                uid: firebaseUser.uid,
                email: firebaseUser.email,
                displayName: firebaseUser.displayName,
                isAnonymous: firebaseUser.isAnonymous,
              }
            : null,
        ),
      );
    });
  }, [dispatch]);

  return null;
}
