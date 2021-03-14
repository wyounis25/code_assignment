import React, { useState } from 'react'
import BackCard from './BackCard'
import FrontCard from './FrontCard'
import './Card.css'
function Card({ people, films }) {
  const [flip, setFlip] = useState(false)

  // cycling through all the people dataset and 
  // pulling out the films they've been in and placing it into an new array
  let filmArr = []
  people.films.map((film) => {
    filmArr.push(film)
  })

  // cycling through the array of each person's film and
  // checking to see if the film is included in the films data set 
  //and pushing ONLY the film object they've been in into a new array.
  let personFilms = []
  films.map((film) => {
    if (filmArr.includes(film.url)) {
      personFilms.push(film)
    }
  })

  return (
    <>
      <div className="card" onClick={() => setFlip(!flip)}>
        {flip ? (
          <BackCard people={people} films={personFilms} />
        ) : (
          <FrontCard people={people} />
        )}
      </div>
    </>
  )
}

export default Card
