import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 py-2 text-white flex text-center gap-3  justify-center w-full bottom-0'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-green-500'> &lt; </span>
                <span>Pass</span>
                <span className='text-green-500'>OP/&gt; </span>
            </div>
            <div className='flex mx-4 font-bold text-xl'> 
                Created with ❤️ by Sakshi
            </div>
        </div>
    )
}

export default Footer
