import React from 'react';
import {Parallax} from 'react-parallax'
import networkImage from '../images/network.webp'
import facebookImage from '../images/facebook.webp'
import githubImage from '../images/github.png'
import twitterImage from '../images/twitter.png'
import instagramImage from '../images/Instagram.png'
import '../styles/About.css'

const About = () => {
  return (
    <div>

      <Parallax strength={300} blur={{min:-15,max:15}} bgImage={networkImage}>
        <div className='contents'>
          <div className='text-contents'>
            Connect With Friends
          </div>
        </div>
      </Parallax>
      <div class="main">
        <div class="content">
            <h2>Reach us on social media!</h2>
            <div class="cards">
                <div class="card">
                    <div class="content-img"><img src={twitterImage} alt='no'/></div>
                    <p>Twitter</p>
                </div>
                <div class="card">
                    <div class="content-img"><img src={instagramImage} alt='no'/></div>
                    <p>Instagram</p>
                </div>
                <div class="card">
                    <div class="content-img"><img src={githubImage} alt='no'/></div>
                    <p>Github</p>
                </div>
                <div class="card">
                    <div class="content-img"><img src={facebookImage} alt='no'/></div>
                    <p>Facebook</p>
                </div>
          </div>
        </div>
        </div>
      <footer className='about-footer'>
        <p>Copyright &copy; Faculty of Organizational Sciences 2023</p>
      </footer>

    </div>
  );
};

export default About;