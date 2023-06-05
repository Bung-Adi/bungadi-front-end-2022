import React from "react"
import { BrowserRouter, Route, Link } from "react-router-dom"
import Preload from '../component/Preload'
import PlaceHolderPro from '../assets/PlaceHolderProjectThumb.webp'
import LatestCard from "./LatestCard"
import { gql, useQuery } from "@apollo/client"

const GET_ALL_PORTF = gql`
    query NewQuery {
        portfolios {
        nodes {
            portfolioId
            portfolioKonten
            portfolioTag
            portfolioTitle
            portfolioThubnail {
            altText
            sourceUrl
            }
            slug
        }
        }
    }
`

export default function SectionLatest() {

    const { loading, error, data } = useQuery(GET_ALL_PORTF)
    if (loading) return <Preload loading={true} />
    if (error) return <p>Error ... </p>
  
    const portfFound = Boolean(data?.portfolios.nodes.length)
    if (!portfFound) {
      return <p>No matching portfolios found.</p>
    }

    const latestCard = data.portfolios.nodes.map((item,index) => {
        return (
            index < 2 && (
                <LatestCard key={item.portfolioId} {...item}/>
            )
        )
    })

    function goToTop(){
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
    }

    return (
        <section className="latest-section">
            
            <h2>Latest Project</h2>

            <div className="recent-project-area">
                
                {latestCard}

            </div>

            <Link to="/portpolio" onClick={goToTop}>See More</Link>

        </section>
    )
}