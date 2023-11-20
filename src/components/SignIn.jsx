import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React from "react";
import GoogleButton from "react-google-button";
import { auth } from "../firebase";

const style = {
  wrapper: `flex justify-center`,
};

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
  console.log("Hi there");
};

const SignIn = () => {
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSignIn} type="light" />
    </div>
  );
};

export default SignIn;
