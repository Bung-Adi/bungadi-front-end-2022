import React, {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import AdiPic from "../assets/AdiProfileIMG.webp"
import AdiLogo from "../assets/Adi.webp"
import PicAc1 from "../assets/ProfileAcOval.webp"
import PicAc2 from "../assets/ProfileAcTri.webp"

export default function Hero() {

    const navigate = useNavigate();
    function toggleGoToBottom(){
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          })
    }

    const toggleRouteToAbout = useCallback(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        navigate('/about', {replace: true})
    }, [navigate])

    return (
        <section className="hero-section">
            <div className="hero-img">
                <div className="hero-img-pic">
                    <img src={AdiPic} alt="Adi Muhammad Aziz Abdillah" />
                </div>
                <div className="pic-accesories-circle">
                    <img src={PicAc1} alt="pic accesories circle"/>
                </div>
                <div className="pic-accesories-star">
                    <img src={AdiLogo} alt="pic accesories star"/>
                </div>
                <div className="pic-accesories-triang">
                    <img src={PicAc2} alt="pic accesories triangle"/>
                </div>
            </div>
            <div className="hero-content">
                <h1>
                    Hi, I'm Adi, a Coder that know Design too
                </h1>
                <div className="btn-area">
                    <button className="btn-main" onClick={toggleGoToBottom}>
                        <h3>Contact Me</h3>
                    </button>
                    <button className="btn-sub" onClick={toggleRouteToAbout}>
                        <h3>More About Me</h3>
                    </button>
                </div>
            </div>
        </section>
    )

}