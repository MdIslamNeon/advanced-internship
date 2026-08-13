import { FirebaseError } from "firebase/app";

const FALLBACK_MESSAGE = "Something went wrong. Please try again.";

const ERROR_MESSAGES: Record<string, string> = {
  // Login
  "auth/invalid-credential": "The email or password you entered is incorrect.",
  // Only reachable if email enumeration protection is turned off in the
  // Firebase console; otherwise it collapses into auth/invalid-credential.
  "auth/user-not-found": "No account exists with this email address.",
  // Signup
  "auth/email-already-in-use": "This email address is already registered.",
  "auth/weak-password": "Your password must be at least 6 characters long.",
  // Either
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/too-many-requests":
    "Too many failed attempts. Please try again later.",
  "auth/network-request-failed":
    "Network error. Please check your connection and try again.",
};

export function getAuthErrorMessage(err: unknown): string {
  if (err instanceof FirebaseError) {
    return ERROR_MESSAGES[err.code] ?? FALLBACK_MESSAGE;
  }
  // Non-Firebase failures still surface something rather than nothing.
  if (err instanceof Error) {
    return err.message || FALLBACK_MESSAGE;
  }
  return FALLBACK_MESSAGE;
}
