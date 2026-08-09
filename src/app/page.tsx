import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Numbers from "./components/Numbers";
import Footer from "./components/Footer";
import AuthModal from "./components/AuthModal";

export default function Home() {
  return (
    <>
      <AuthModal />
      <NavBar />
      <Landing />
      <Features />
      <Reviews />
      <Numbers />
      <Footer />
    </>
  );
}
