import React from 'react'

function Sponsors() {
  const sponsorImages = [
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
    'public/images/programmer.png',
  ];

  return (
    <div className='flex flex-col font-[font1] mt-12 items-center font-[600] gap-8 text-[7.7vw] justify-start h-[100vh] w-full text-white'>
      <h1 className=' tracking-tight text-zinc-300'>Our <span className='text-[#0D7C66]'>Sponsors</span></h1>
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {sponsorImages.map((image, index) => (
          <img key={index} src={image} alt={`Lobo ${index + 1}`} style={{height: '20vh'}} />
        ))}
      </div>
      
    </div>
  )
}

export default Sponsors