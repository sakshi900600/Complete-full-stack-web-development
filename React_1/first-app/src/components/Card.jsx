import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPviQbCTGhgKaUNhkg_uYtTu9Qu0x6I1IS2Q&usqp=CAU" alt="" width={253}  style={{border: "2px solid black"}} />

      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Card
