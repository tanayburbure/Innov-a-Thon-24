import React from 'react'

function Navbar() {
  return (
    <div className='relative'>
      <div className='p-4 fixed'>
        <img className='w-[4vw]' src="public\images\lobo.png" alt="" />
      </div>
      <div className='text-white flex justify-end mr-32 m-4 space-x-8'>
        <h3>About</h3>
        <h3>FAQ</h3>
        <h3>Sponsors</h3>
        <h3>Prizes</h3>
        <span>
          <button className='px-4 py-2 bg-[#0D7C66] text-black rounded-full fixed'>Register here</button>
        </span>
      </div>
    </div>
  )
}

export default Navbar