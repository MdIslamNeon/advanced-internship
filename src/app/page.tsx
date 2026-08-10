"use client"

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Numbers from "./components/Numbers";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";
import { useState } from "react";

export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  function openModal() {
    setIsAuthModalOpen(true);
  }

  function closeModal() {
    setIsAuthModalOpen(false);
  }

  return (
    <>
      {isAuthModalOpen && <AuthModal closeModal={closeModal} />}
      <NavBar openModal={openModal} />
      <Landing openModal={openModal} />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </>
  );
}
