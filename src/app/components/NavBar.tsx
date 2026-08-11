import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { useAppDispatch } from "@/redux/hooks";
import { openModal } from "@/redux/modalSlice";

function NavBar() {

  const dispatch = useAppDispatch();

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          <Image className="nav__img" src={logo} alt="logo" />
        </figure>
        <ul className="nav__list--wrapper">
          <li className="nav__list nav__list--login" onClick={() => dispatch(openModal('login'))}>Login</li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
