"use client";

import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";
import { useAppSelector } from "@/redux/hooks";
import Settings from "../components/Settings";
import LoginImage from "../components/LoginImage";

function SettingsPage() {
  const { user } = useAppSelector((state) => state.user);

  return (
    <>
      <Sidebar />
      <Searchbar />
      {user ? <Settings /> : <LoginImage />}
    </>
  );
}

export default SettingsPage;
