import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [cards, setcards] = useState([])


  const fetchData = async ()=>{
    let a = await fetch("https://jsonplaceholder.typicode.com/posts");

    let data = await a.json()
    setcards(data)
    console.log(data);
  }


  useEffect(() => {
    fetchData()
 
  }, [])
  


  return (
    <>
  <Navbar/>

     <div className="container">
    {cards.map((card)=>{
      return <div className="card">
        <h1>{card.title}</h1>
        <span> id:{card.id} and userId: {card.userId}</span>
        <p>{card.body}</p>
      </div>
    })}
     </div>


    </>
  )
}

export default App
