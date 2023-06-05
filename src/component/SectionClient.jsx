import React from "react"
import ClientDVS from '../assets/ClientDVS.webp'
import ClientCaringly from '../assets/ClientCaringly.webp'
import ClientWasialqua from '../assets/ClientWasilqua.webp'
import ClientAvenging from '../assets/ClientAvenging.webp'

export default function SectionClient(){
    return(
        <section className="client-section">
            <h2>Client's</h2>
            <div className="client-area">

                <div className="client-card">
                    <div className="client-logo-mask">
                        <img src={ClientCaringly} alt="Client Caringly" />
                    </div>
                </div>
                <div className="client-card">
                    <div className="client-logo-mask">
                        <img src={ClientDVS} alt="Client Caringly" />
                    </div>
                </div>
                <div className="client-card">
                    <div className="client-logo-mask">
                        <img src={ClientWasialqua} alt="Client Caringly" />
                    </div>
                </div>
                <div className="client-card">
                    <div className="client-logo-mask">
                        <img src={ClientAvenging} alt="Client Caringly" />
                    </div>
                </div>

            </div>
        </section>
    )
}