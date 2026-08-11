"use client";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Numbers from "./components/Numbers";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/hooks";

export default function Home() {

  const {isOpen, modalType} = useAppSelector((state) => state.modal);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <NavBar/>
      <Landing/>
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </>
  );
}
