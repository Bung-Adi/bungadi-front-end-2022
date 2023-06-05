import React from "react"

export default function EduExp(props) {

    return (
        <div className="EduExpCard">
            <h4>{props.year}</h4>
            <h3 className="title">{props.experience}</h3>
            <p className="subtitle">{props.describe}</p>
        </div>
    )

}