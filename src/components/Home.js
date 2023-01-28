import React from 'react';
import '../styles/LoginPage.css'
import { auth, provider } from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import "../styles/Auth.css";
import Cookies from "universal-cookie";
import reactImage from '../images/react.png'
import reduxImage from '../images/redux.png'
import JsImage from '../images/js.png'
import FirebaseImage from '../images/firebase.webp'

const cookies = new Cookies();
const Home = ({ setIsAuth }) => {
    const signInWithGoogle = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          cookies.set("auth-token", result.user.refreshToken);
          setIsAuth(true);
        } catch (err) {
          console.error(err);
        }
      };
  return (
    <>
    <div class="main">
        <div class="intro">
            <div class="intro-text">
                <h1>Welcome back!</h1>
                <p class="sidekick-text">Start easy and quick by signing in with your Google account</p>
                <button class="sign-up" onClick={signInWithGoogle}>Sign up</button>
            </div>
            <div class="image">
                <p></p>
            </div>
        </div>
        <div class="content">
            <h2>Technologies used</h2>
            <div class="cards">
                <div class="card">
                    <div class="content-img"><img src={reactImage} alt='no'/></div>
                    <p>React</p>
                </div>
                <div class="card">
                    <div class="content-img"><img src={reduxImage} alt='no'/></div>
                    <p>Redux</p>
                </div>
                <div class="card">
                    <div class="content-img"><img src={JsImage} alt='no'/></div>
                    <p>Javascript</p>
                </div>
                <div class="card">
                    <div class="content-img"><img src={FirebaseImage} alt='no'/></div>
                    <p>Firebase</p>
                </div>
            </div>
        </div>
        <div class="quote">
            <p>“Talk is cheap. Show me the code.”</p>
            <p class="author">― Linus Torvalds</p>
        </div>
        <div class="sign-up-section">
            <div class="text">
                <p><b>Call to action! It's time!</b></p>
                <p class="small">Sign up for our product by clicking that button right over there!</p>
            </div>
            <button class="sign-up" onClick={signInWithGoogle}>Sign up</button>
        </div>
    </div>

    <footer>
        <p>Copyright &copy; Faculty of Organizational Sciences 2023</p>
    </footer>
</>
  );
};

export default Home;