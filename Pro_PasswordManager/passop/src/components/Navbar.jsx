import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white '>
      <div className="mycontainer flex justify-between items-center px-5 py-5 h-16">
      <div className="logo font-bold text-white text-2xl">
        <span className='text-green-500'> &lt; </span>
        <span>Pass</span>
         <span className='text-green-500'>OP/&gt; </span>

        </div>
        {/* <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">Contact</a>
            </li>
        </ul> */}

        <button className='bg-green-600 text-white flex justify-center text-center rounded-full ring-white ring-1 '>
          <img className='w-10 p-2 invert' src="/icons/github.svg" alt="" />
          <span className='font-bold py-2 mx-1'>GitHub</span>
        </button>

        </div>
    </nav>
  )
}

export default Navbar
