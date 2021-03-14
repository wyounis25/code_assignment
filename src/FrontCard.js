import React from 'react'
import './FrontCard.css'

function FrontCard({people}) {
    return (
        <div>
             <div className="card">
           <h1>{people.name}</h1>
           
        </div>
        </div>
    )
}

export default FrontCard
