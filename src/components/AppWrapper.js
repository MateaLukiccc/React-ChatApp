import { signOut } from "firebase/auth";
import { db, auth } from "../firebase-config";
import {
  collection,
  addDoc,
  serverTimestamp,  
} from "firebase/firestore";

import Cookies from "universal-cookie";

const cookies = new Cookies();
const delay = ms => new Promise(res => setTimeout(res, ms));

export const AppWrapper = ({ children, isAuth, setIsAuth, setIsInChat, room }) => {
  const messagesRef = collection(db, "messages");
  const signUserOut = async () => {
    addDoc(messagesRef, {
      text: auth.currentUser.displayName+" left the chat",
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
    await delay(200);
    signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsInChat(false);
  };

  return (
    <div className="App">
      <div className="app-container">{children}</div>
      {isAuth && (
        <div className="sign-out">
          <button onClick={signUserOut}> Sign Out</button>
        </div>
      )}
    </div>
  );
};