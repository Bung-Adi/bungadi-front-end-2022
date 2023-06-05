import React from "react"
import Preload from "../component/Preload"
import Footer from "../component/Footer"
import PortfolioCard from "../component/CardPortofolio"
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

export default function Portpolio() {
    const { loading, error, data } = useQuery(GET_ALL_PORTF)
    if (loading) return <Preload loading={true} />
    if (error) return <p>Error ... </p>
  
    const portfFound = Boolean(data?.portfolios.nodes.length)
    if (!portfFound) {
      return <p>No matching portfolios found.</p>
    }

    const portoCards = data.portfolios.nodes.map(item => {
        return (
            <PortfolioCard key={item.portfolioId} {...item}/>
        )
    })
    
    return (
        <div className="container">
            <h1>Portpolio Showcase</h1>
            <section className="showcase-list-area">
                {portoCards}
            </section>
            <hr />
            <Footer />
        </div>
    )

}