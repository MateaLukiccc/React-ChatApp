import React, { useState} from "react";
import { Chat } from "./components/Chat";
import SubMenu from './components/SubMenu'
import { AppWrapper } from "./components/AppWrapper";
import Cookies from "universal-cookie";
import "./App.css";
import {
  addDoc,
  serverTimestamp,
  collection
} from "firebase/firestore";
import { db, auth } from "./firebase-config";

const cookies = new Cookies()

function ChatApp() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [isInChat, setIsInChat] = useState(null)
  const [room, setRoom] = useState("")

  const messagesRef = collection(db, "messages");

  if (!isAuth) {
    return (
      <AppWrapper
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      >
        {/* <Home setIsAuth={setIsAuth} /> */}
        <SubMenu setIsAuth={setIsAuth}/>
      </AppWrapper>
    );
  }
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const joined = async () =>{
    await delay(200);
    addDoc(messagesRef, {
                        text: auth.currentUser.displayName+" joined the chat",
                        createdAt: serverTimestamp(),
                        user: auth.currentUser.displayName,
                        room})
  }

  return (
    <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat} room={room}>
      {!isInChat ? (
        <div className="room">
          <form onSubmit={() => {setIsInChat(true);joined()}}>
          <label> Type room name: </label>
          <input id='input' onChange={(e) => {setRoom(e.target.value)}}/>
          <button type='submit' className="chat-button">Enter Chat</button>
          </form>
        </div>) : (<Chat room={room} /> )}
        
    </AppWrapper>
  );
}

export default ChatApp;