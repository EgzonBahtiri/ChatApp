import React from "react";
import Navbar from "./components/Navbar";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";
import Intro from "./components/Intro";

const style = {
  appContainer: `max-w-[1920px] mx-auto  text-center`,
  sectionContainer: `flex flex-col h-[90vh] mt-10 border relative`,
};

function App() {
  const [user] = useAuthState(auth);
  //console.log(user);

  return (
    <div>
      <section>{user ? <Chat /> : <Intro />}</section>
    </div>
  );
}

export default App;
