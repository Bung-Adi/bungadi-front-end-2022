import React from "react"
import PacmanLoader from "react-spinners/PacmanLoader"

export default function Preload(props) {
    return(
        <div className="preload">
          <PacmanLoader
            color="#2fb8ff"
            loading={props.loading}
            size={64}
          />
        </div>
    )
}