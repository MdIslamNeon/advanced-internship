"use client";

import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { setUser } from "./userSlice";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { planNameFromPriceId } from "./plans";

export function AuthListener() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // 2. Fetch the Stripe status from Firestore collection
        const subRef = collection(
          db,
          "customers",
          firebaseUser.uid,
          "subscriptions",
        );
        const q = query(subRef, where("status", "in", ["active", "trialing"]));
        const subSnapshot = await getDocs(q);
        const hasActiveSub = !subSnapshot.empty; // true if a document is found, false if not

        // The extension stores `price` as a reference, so `.id` is the price ID.
        const subDoc = subSnapshot.docs[0];
        const planName = subDoc
          ? planNameFromPriceId(subDoc.data().price?.id)
          : null;

        dispatch(
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            isAnonymous: firebaseUser.isAnonymous,
            isSubscribed: hasActiveSub,
            planName,
          }),
        );
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return null;
}
