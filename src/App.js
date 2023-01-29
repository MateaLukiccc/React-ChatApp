import React, { useState, useRef, useEffect} from "react";
import { Chat } from "./components/Chat";
import SubMenu from './components/SubMenu'
import { AppWrapper } from "./components/AppWrapper";
import Cookies from "universal-cookie";
import "./App.css";

const cookies = new Cookies()

function ChatApp() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [isInChat, setIsInChat] = useState(null)
  const [room, setRoom] = useState("")

  const inputRef = useRef(null) //now the input will be in focus

  useEffect(()=>{
    if(!document.getElementById('input')){
      return
    }else{
      inputRef.current.focus()
    }
  },[])

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

  return (
    <AppWrapper isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
      {!isInChat ? (
        <div className="room">
          <form onSubmit={() => {setIsInChat(true);}}>
          <label> Type room name: </label>
          <input id='input' onChange={(e) => setRoom(e.target.value)} ref={inputRef} />
          <button type='submit' className="chat-button">Enter Chat</button>
          </form>
        </div>) : (<Chat room={room} /> )}
        
    </AppWrapper>
  );
}

export default ChatApp;