import React from "react"
import Hero from "../component/Hero"
import SectionSkill from "../component/SectionSkill"
import SectionLatest from "../component/SectionLatest"
import SectionClient from "../component/SectionClient"
import Footer from "../component/Footer"

export default function Home() {

    return (
        <div className="container">
            <Hero />
            <SectionSkill title="What Can I Do ?" />
            <SectionLatest />
            <SectionClient />
            <Footer />
        </div>
    )

}