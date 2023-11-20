import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const style = {
  main: `flex flex-col relative ml-48 mr-48 border h-screen`,
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [user] = useAuthState(auth);
  const scroll = useRef();
  console.log(messages);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let message = [];
      querySnapshot.forEach((doc) => {
        message.push({ ...doc.data(), id: doc.id });
      });
      setMessages(message);
    });
    return () => unsubscribe();
    console.log(messages);
  }, []);

  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollIntoView({ behavior: "auto" });
    }
  }, [messages]);

  return (
    <>
      <main className={style.main}>
        {user ? <LogOut /> : <SignIn />}
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
        <SendMessage scroll={scroll} />
        <span ref={scroll}></span>
      </main>
    </>
  );
};

export default Chat;
