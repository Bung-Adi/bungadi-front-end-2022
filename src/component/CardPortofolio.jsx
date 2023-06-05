import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import PlaceHolderPro from '../assets/PlaceHolderProjectThumb.webp'

export default function CardPortofolio(props) {
    return (
        <div className="portfolio-card">
            <div className="image-div">
                <img src={props.portfolioThubnail.sourceUrl} alt="Placeholder Project" />
            </div>
            <h3>{props.portfolioTitle}</h3>
            <p className="project-card-tag">
                        {props.portfolioTag.map(tag => {
                            return <span key={tag}>
                                {tag == 'ptDesign' ? "Design" : "Coding"}
                            </span>
                        })}
                    </p>
            <div className="card-butom">
                <Link to={`/portopost/${props.slug}`}>Read More - &gt;</Link>
            </div>
        </div>
    )
}