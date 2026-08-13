"use client";

import { useAppSelector } from "@/redux/hooks";
import Login from "./Login";
import Signup from "./Signup";

function AuthModal() {

  // 1. Extract the modal status and active view type from your global Redux store
  const { isOpen, modalType } = useAppSelector((state) => state.modal);

  if(!isOpen) {
    return null;
  }
  
  return modalType === "login" ? <Login /> : <Signup />;
}

export default AuthModal;
