import React from 'react'

function Navbar() {
  return (
    <div className='flex '>
      <div className='p-4 fixed'>
        <img className='w-[4vw]' src="public\images\lobo.png" alt="" />
      </div>
      <div>
        <h3>About</h3>
        <h3>FAQ</h3>
        <h3>Sponsors</h3>
        <h3>Prizes</h3>
        <span>
          <button>Register here</button>
        </span>
      </div>
    </div>
  )
}

export default Navbar