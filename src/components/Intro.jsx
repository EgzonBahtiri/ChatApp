import Logo from "../assets/messages.png";
import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const style = {
  background: "bg-slate-100 h-screen",
  container: `flex flex-col items-center`,
  heading: `text-3xl pt-12 pl-12 font-bold`,
  textIntro: "flex flex-col items-center mt-8 mb-8",
};

function Intro() {
  const [user] = useAuthState(auth);
  return (
    <div className={style.background}>
      <h1 className={style.heading}>TalkFlow</h1>
      <div className={style.container}>
        <img src={Logo} alt="logo" />
      </div>
      <p className={style.textIntro}>
        Sign in to your account and stay connected with friends and family.
      </p>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
}

const Navbar = () => {
  const [user] = useAuthState(auth);
  //console.log(user);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>SnapTalk</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Intro;
