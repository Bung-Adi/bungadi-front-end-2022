import React from "react"
import SocialIconGit from '../assets/SoIconGit.webp'
import SocialIconTele from '../assets/SoIconTele.webp'
import SocialIconIg from '../assets/SoIconIg.webp'
import SocialIconYt from '../assets/SoIconYt.webp'
import SocialIconTw from '../assets/SoIconTw.webp'

export default function Footer() {
    return(
        <footer className="footer">

           <h2>Get in Touch</h2>
           <a href="mailto:bungadi.com@gmail.com">bungadi.com@gmail.com</a>
           <a href="tel:+6283815218754">+628 38 1521 8754</a>

           <div className="social-area">

                <div className="social-acc">
                    <a href="https://github.com/Bung-Adi">
                        <img src={SocialIconGit} alt="Git Link" />
                    </a>
                </div>
                <div className="social-acc">
                    <a href="https://www.instagram.com/adi26r/">
                    <img src={SocialIconIg} alt="Ig Link" />
                    </a>
                </div>
                <div className="social-acc">
                    <a href="https://www.youtube.com/@bungadi5888/playlists">
                    <img src={SocialIconYt} alt="Yt Link" />
                    </a>
                </div>
                <div className="social-acc">
                    <a href="https://t.me/bungadi_com">
                    <img src={SocialIconTele} alt="Tele Link" />
                    </a>
                </div>
                <div className="social-acc">
                    <a href="https://twitter.com/bungadi26">
                    <img src={SocialIconTw} alt="Tw Link" />
                    </a>
                </div>

           </div>

        </footer>
    )
}