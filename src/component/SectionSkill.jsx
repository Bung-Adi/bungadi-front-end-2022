import React from "react"
import IconReact from "../assets/IconReact.webp"
import IconFigma from "../assets/IconFigma.webp"
import IconFirebase from "../assets/IconFirebase.webp"
import IconInkscape from "../assets/IconInkscape.webp"
import IconPHP from "../assets/IconPHP.webp"
import IconPython from "../assets/IconPython.webp"
import IconWebflow from "../assets/IconWebflow.webp"

export default function SectionSkill(props) {

    return (
        <section className="skill-section">

            <h2>{props.title}</h2>
            <div className="card-area">

                <div className="card-skill">
                    <h3>Front-end Dev</h3>
                    <img src={IconReact} alt="react badge" />
                    <p>Mastering SCSS, NPM, Javascript ES6, and React</p>
                </div>

                <div className="card-skill">
                    <h3>Back-end Dev</h3>
                    <img src={IconPHP} alt="react badge" />
                    <p>I can create full stack PHP and APIs in PHP</p>
                </div>

                <div className="card-skill">
                    <h3>Database</h3>
                    <img src={IconFirebase} alt="react badge" />
                    <p>Absolutely, I know how to set up and fetch databases, both SQL &amp; NoSQL, like Firebase.</p>
                </div>

                <div className="card-skill">
                    <h3>Graphic Design</h3>
                    <img src={IconInkscape} alt="react badge" />
                    <p>Design was my hobby, and I have some skill in both vector &amp; raster image editing.</p>
                </div>
                
                <div className="card-skill">
                    <h3>UI-UX Design</h3>
                    <img src={IconFigma} alt="react badge" />
                    <p>I am familiar with the design process, mindset, and tools. like Figma, Figjam, &amp; Whimshicall</p>
                </div>

                <div className="card-skill">
                    <h3>CMS</h3>
                    <img src={IconWebflow} alt="react badge" />
                    <p>I have experience with tools like Webflow and WordPress. I was able to create a theme.</p>
                </div>

                <div className="card-skill">
                    <h3>Programing</h3>
                    <img src={IconPython} alt="react badge" />
                    <p>Make GUI programs with programming languages like Python</p>
                </div>

            </div>
        </section>
    )

}