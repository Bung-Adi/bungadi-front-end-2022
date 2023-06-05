import React from "react"
import SectionSkill from "../component/SectionSkill"
import EduExp from "../component/EduExp"
import Footer from "../component/Footer"
import edu from "../data/MyEdu"
import exp from "../data/MyExp"

export default function About() {

    const eduList = edu.map(item => {
        return (
            <EduExp
                key={item.id}
                {...item}
            />
        )
    })  
    const expList = exp.map(item => {
        return (
            <EduExp
                key={item.id}
                {...item}
            />
        )
    })  

    return (
        <div className="container">
            <section className="about-me-header">
                <h2>About Me</h2>
                <p>
                Hi, You can call me Adi (my nickname since birth).
                My legal name is quite long, actually. It's Muhammad Aziz Abdillah. 
                I am a coder who likes design. And I understand basic design theory too, especially usability design. 
                Weird, right? because both are quite the opposite. But for me, my main field is coding. 
                For design, I was just interested in this field before. And I respect the designer too. 
                because both fields are critical to the product line.
                And I like coding, even though I was traumatized by Java, and I was considering transitioning entirely from developer to designer. 
                But I prefer to build websites and systems rather than just imagine them. 
                I now have the confidence to pursue developer careers as a result of my experience teaching coding. 
                Okay, I believe that concludes my introduction. 
                My skills, educational background, and experience are listed below. 
                </p>
            </section>

            <SectionSkill title="Skill's ?" />
            
            <section className="about-edu">
                <h2>Education</h2>
                <div className="about-edu-area">
                    {eduList}
                </div>
            </section>
            
            <section className="about-exp">
                <h2>Experience</h2>
                <div className="about-exp-area">
                    {expList}
                </div>
            </section>

            <hr />
            <Footer />

        </div>
    )

}