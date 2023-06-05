import React from "react";
import Preload from "../component/Preload";
import { gql, useQuery } from "@apollo/client"

const GET_PORTF_BY_SLUG = gql`
    query getPortBySlug($id: ID!) {
        portfolio(id: $id, idType: SLUG) {
        portfolioId
        portfolioKonten
        portfolioTag
        portfolioTitle
        }
    }
`

export default function PortoPost() {
    const { loading, error, data } = useQuery(GET_PORTF_BY_SLUG, {
        variables: {
            id: window.location.pathname.split('/')[2]
        }
    })

    const postFound = Boolean(data?.portfolio);
    
    return (
        <div className="container">
            {loading ? (<Preload loading={true} />) 
            : error ? (<p>Error: {error.message}</p>) 
            : !postFound ? (<p>Portfolio could not be found.</p>) 
            : (
                <section className="portf-post-section">
                    <h1>{data.portfolio.portfolioTitle}</h1>
                    <div className="portf-post-tag">
                        {data.portfolio.portfolioTag.map(tag => {
                            return <span key={tag}><p>
                                {tag == 'ptDesign' ? "Design" : "Coding"}
                                </p></span>
                        })}
                    </div>
                    <div className="portf-post-content" dangerouslySetInnerHTML={{__html: data.portfolio.portfolioKonten}}></div>
                </section>
            )}
        </div>
    )
}