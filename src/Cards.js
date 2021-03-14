import React,{useState} from 'react'
import Card from './Card'
import './Cards.css'
function Cards({ peoples,films }) {
return (

  // renering a card component for each person
    <div className="container">
      {peoples.map((people) => {
         return <Card people={people} films={films}/>
      })}
    </div>
  )
}
export default Cards
