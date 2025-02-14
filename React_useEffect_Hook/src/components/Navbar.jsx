import React, { useEffect } from 'react'

const Navbar = ({ color }) => {
  // case 1. Run on every render
  useEffect(() => {
    alert("Hey i'll run every render")
  })

  // case 2. Run only on first render
  useEffect(() => {
    alert("Hey weicome this is first render")
  }, [])


  // case 3. Run only when certain value changed
  useEffect(() => {
    alert("Hey i am running coz color was changed")
  }, [color])


  // example of cleanup function
  useEffect(() => {
    alert("Hey welcome to my page.")
  
    return () => {
      alert("component was unmounted")
    }
  }, [])
  


  return (
    <div>
      I am navbar of {color} color hehe...
    </div>
  )
}

export default Navbar
