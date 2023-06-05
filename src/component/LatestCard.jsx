import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"

export default function LatestCard(props) {
    return(
        <div className="project-card">
            <Link to={`/portopost/${props.slug}`}>
                <div className="image-mask"><img src={props.portfolioThubnail.sourceUrl} alt="Placeholder Project" /></div>
                <div className="content">
                    <h3>{props.portfolioTitle}</h3> 
                    <p className="project-card-tag">
                        {props.portfolioTag.map(tag => {
                            return <span key={tag}>
                                {tag == 'ptDesign' ? "Design" : "Coding"}
                            </span>
                        })}
                    </p>
                </div>
                <div className="mobile-arrow-indicator">
                    <div className="arrow"></div>
                </div>
            </Link>
        </div>
    )
}