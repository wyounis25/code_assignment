import { useEffect, useState } from 'react'
import './App.css'
import Cards from './Cards'

function App() {

  const [allpeople, setAllPeople] = useState([])
  const [allfilms, setAllFilms] = useState([])

  useEffect(() => {
    function fetchData() {
      let getPeoples = fetch('https://swapi.dev/api/people')
      let getFilms = fetch('https://swapi.dev/api/films')
      Promise.all([getPeoples, getFilms]).then((values) =>
      Promise.all(values.map((value) => value.json())).then((finalVals) => {
          let firstRes = finalVals[0].results
          let secondRes = finalVals[1].results
      setAllPeople(firstRes)
      setAllFilms(secondRes)
        }),
      )
    }
    fetchData()
  }, [])

  return (

    <div className="App">
      <Cards peoples={allpeople} films={allfilms} />
    </div>
    
  )
}

export default App
