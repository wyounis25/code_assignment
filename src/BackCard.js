import React, {useState} from 'react'
import './Backcard.css'

function BackCard({films}) {
    console.log(films)
    return (

        <div className="card">
            {films.map( film => {
                return <h3>{film.title}</h3>
            })}

        </div>

    )
}

export default BackCard
