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
import {useSelector, useDispatch} from 'react-redux';
import { increment } from "../actions";

const cookies = new Cookies();
const Home = ({ setIsAuth }) => {
    const counter = useSelector(state =>state.counter)
    const dispatch = useDispatch()
    //const dispatch = useDispatch()
    const signInWithGoogle = async () => {
        try {
          const result = await signInWithPopup(auth, provider);
          cookies.set("auth-token", result.user.refreshToken);
          setIsAuth(true);
          dispatch(increment())
        } catch (err) {
          console.error(err);
        }
      };
  return (
    <>
    <div className="main">
        <div className="intro">
            <div className="intro-text">
                <h1>Welcome back!</h1>
                <p className='sidekick-text'>Currently online: {counter}</p>
                <p className="sidekick-text">Start easy and quick by signing in with your Google account</p>
                <button className="sign-up" onClick={signInWithGoogle}>Sign up</button>
            </div>
            <div className="image">
                <p></p>
            </div>
        </div>
        <div className="content">
            <h2>Technologies used</h2>
            <div className="cards">
                <div className="card">
                    <div className="content-img"><img src={reactImage} alt='no'/></div>
                    <p>React</p>
                </div>
                <div className="card">
                    <div className="content-img"><img src={reduxImage} alt='no'/></div>
                    <p>Redux</p>
                </div>
                <div className="card">
                    <div className="content-img"><img src={JsImage} alt='no'/></div>
                    <p>Javascript</p>
                </div>
                <div className="card">
                    <div className="content-img"><img src={FirebaseImage} alt='no'/></div>
                    <p>Firebase</p>
                </div>
            </div>
        </div>
        <div className="quote">
            <p>“Talk is cheap. Show me the code.”</p>
            <p className="author">― Linus Torvalds</p>
        </div>
        <div className="sign-up-section">
            <div className="text">
                <p><b>Call to action! It's time!</b></p>
                <p className="small">Sign up for our product by clicking that button right over there!</p>
            </div>
            <button className="sign-up" onClick={signInWithGoogle}>Sign up</button>
        </div>
    </div>

    <footer>
        <p>Copyright &copy; Faculty of Organizational Sciences 2023</p>
    </footer>
</>
  );
};

export default Home;